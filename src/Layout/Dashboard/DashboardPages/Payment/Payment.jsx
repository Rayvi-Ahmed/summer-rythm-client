import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckPayment from "../CheckPayment/CheckPayment";


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY_PK)
const Payment = () => {
    return (
        <div>
            <h1 className="text-center text-4xl text-gray-500 font-bold">Payment</h1>
            <div className="mt-8 w-full">

                <Elements stripe={stripePromise}>
                    <CheckPayment></CheckPayment>
                </Elements>
            </div>

        </div>
    );
};

export default Payment;