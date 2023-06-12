import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckPayment from "../CheckPayment/CheckPayment";
import useBooked from "../../../../Hooks/useBooked/useBooked";
import { Helmet } from "react-helmet-async";


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY_PK)
const Payment = () => {
    const [booked] = useBooked()
    const coursePrice = booked.reduce((sum, course) => sum + course.price, 0);
    const price = parseFloat(coursePrice.toFixed(2))
    return (
        <div>
            <div>
                < Helmet >
                    <title>Summer Rythm | Payment</title>
                </Helmet >
                <h1 className="text-4xl text-center font-bold m-8">Payment</h1>
            </div>
            <Elements stripe={stripePromise}>
                <CheckPayment booked={booked} price={price}></CheckPayment>
            </Elements>

        </div>
    );
};

export default Payment;