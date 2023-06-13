import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckPayment from "../CheckPayment/CheckPayment";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useLocation } from "react-router-dom";


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY_PK)
const Payment = () => {
    // const location = useLocation()
    const booking = useLoaderData()
    console.log('booking by id', booking)
    const price = parseFloat(booking.price).toFixed(2)
    // const from = location?.state?.state
    // console.log(from)

    // const price = parseFloat(from?.price?.toFixed(2))
    return (
        <div>
            <div>
                < Helmet >
                    <title>Summer Rythm | Payment</title>
                </Helmet >
                <h1 className="text-4xl text-center font-bold m-8">Payment</h1>
            </div>
            <Elements stripe={stripePromise}>
                <CheckPayment booking={booking} price={price}></CheckPayment>
            </Elements>

        </div>
    );
};

export default Payment;