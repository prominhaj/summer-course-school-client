import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const paymentGatewayToken = import.meta.env.VITE_PAYMENT_GATWAY_TOKEN;

const stripePromise = loadStripe(paymentGatewayToken);

const Payment = ({ price, id, courseName }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm price={price} id={id} courseName={courseName} />
    </Elements>
  );
};

export default Payment;
