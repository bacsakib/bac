import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./paymentCheckout";
import SectionTitle from "../../../../Components/Shared/SectionTitle/SectionTitle";


// TODO: add publishable key
const stripePromise = loadStripe('pk_test_51OqEcXBiW6nmpcvA0vscVGPXTmgHMh2FzzWwVbmd5daphPVbvzhBimTMmcnTApnADzSTuX8aDZ0ibWgjs63ERYk000SNYOumCB');
const Payment = () => {
    return (
        <div>
            <SectionTitle title={'Payment'}></SectionTitle>
            <div className="divider mb-8"></div>
            <div>
                <Elements stripe={stripePromise}>
                  <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;