import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth/useAuth";
import { useState } from "react";
import Button from "../../Button/Button";
import { CircularProgress } from "@mui/material";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

const CheckoutForm = ({ price, id }) => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

  const { data: clientSecret } = useQuery({
    queryKey: ["payment-intent"],
    queryFn: async () => {
      const res = await axiosSecure.post("/create-payment-intent", { price });
      return res.data.clientSecret;
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    setProcessing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      toast.error(error.message);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "unknown",
            email: user?.email || "unknown",
          },
        },
      });

    if (confirmError) {
      toast.error(confirmError.message);
    }
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      const payment = {
        name: user?.displayName,
        email: user?.email,
        transactionId: paymentIntent.id,
        courseId: id,
        price,
        date: moment().format("YYYY MM D"),
      };
      axiosSecure.post(`/payments`, payment).then((res) => {
        if (res.data.insertedId) {
          toast.success("Payment SuccessFull");
          navigate(`/course-dashboard/${id}`);
        }
      });
    }
  };

  return (
    <div className="pt-10">
      {processing && (
        <>
          <div className="my-4 text-center">
            <CircularProgress />
          </div>
        </>
      )}
      <form onSubmit={handleSubmit}>
        <CardElement
          className="px-3 text-[#e55580] py-4 shadow-2xl"
          options={{
            style: {
              base: {
                fontSize: "20px",
                color: "#e3e7eb",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#e55580",
              },
            },
          }}
        />
        <div className="py-8">
          <Button
            variant={"secondary"}
            className="py-3 w-full rounded-lg bg-violet-700 text-white text-xl font-bold font-['Inter'] disabled:opacity-50"
            type="submit"
            disabled={!stripe || !clientSecret || processing}
          >
            Pay Now
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
