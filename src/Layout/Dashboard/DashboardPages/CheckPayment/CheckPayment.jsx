import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider/AuthProvider";
import useSecuireAxios from "../../../../Hooks/SecuireAxios/useSecuireAxios";
import Swal from "sweetalert2";
import './CheckPaymentStyle/CheckPaymentStyle.css'


const CheckPayment = ({ booking, price }) => {
    // console.log(classPaid)
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useSecuireAxios()
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    // console.log(clientSecret)
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');


    useEffect(() => {

        if (price > 0) {
            axiosSecure
                .post('/create-payment-intent', {
                    price,
                })
                .then((res) => {
                    setClientSecret(res.data.clientSecret);
                });
        }
    }, [price, axiosSecure]);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');

        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        console.log('payment intent', paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);

            const { _id, courseId, courseName, email, price, name, seat, } = booking
            // const payment = {
            //     email: user?.email,
            //     transactionId: paymentIntent.id,
            //     price,
            //     date: new Date(),
            //     cartItems: classPaid._id,
            //     seats: classPaid.seat,
            //     courseName: classPaid.courseName,
            //     InstructorNames: classPaid.name
            // }
            const payment = {
                courseName,
                email,
                price,
                name,
                seat,
                courseId,
                email: user?.email,
                userName: user?.displayName,
                transactionId: paymentIntent.id,
                selectedId: _id
            }


            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertResult.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Payment Done !',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-primary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>


            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
        </>
    );
};

export default CheckPayment;