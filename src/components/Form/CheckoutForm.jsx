import { useLocation, useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdSecurity } from "react-icons/md";

// Load Stripe with Publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK_KEY);

const CheckoutForm = ({ paymentData }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  // Get client secret from backend
  useEffect(() => {
    if (paymentData?.rent) {
      axios
        .post(`${import.meta.env.VITE_API_URL}/create-payment-intent`, {
          amount: paymentData.rent,
        })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        })
        .catch((err) => {
          console.log(err);
          toast.error("Failed to create payment intent!");
        });
    }
  }, [paymentData.rent]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements || !clientSecret) return;

    setLoading(true);

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: { email: paymentData.email },
      },
    });

    if (result.error) {
      toast.error(result.error.message);
      setLoading(false);
    } else {
      if (result.paymentIntent.status === "succeeded") {
        toast.success("Payment Successful!");
        console.log("Payment Data:", paymentData);

        // Save payment record to DB
        try {
          await axios.post(`${import.meta.env.VITE_API_URL}/save-payment`, {
            ...paymentData,
            transactionId: result.paymentIntent.id,
          });
        } catch (err) {
          console.log(err);
        }

        navigate("/dashboard/payment-history");
      }
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <CardElement
        options={{
          style: {
            base: { fontSize: "16px", color: "#32325d" },
            invalid: { color: "#e5424d" },
          },
        }}
        className="p-3 border rounded-lg"
      />
      <button
        type="submit"
        disabled={!stripe || !clientSecret || loading}
        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold shadow-lg"
      >
        {loading ? "Processing..." : `Pay ${paymentData.rent} BDT`}
      </button>
    </form>
  );
};

const Checkout = () => {
  const location = useLocation();
  const paymentData = location.state;

  if (!paymentData)
    return <p className="text-center mt-10">No payment data!</p>;

  return (
    <div className="max-w-lg mx-auto mt-12 p-8 bg-gradient-to-br from-blue-100 via-blue-100 to-purple-200 shadow-xl rounded-2xl border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-center mb-6">
        <div className="p-3 bg-blue-100 rounded-full shadow-md">
          <HiOutlineMenuAlt2 className="h-8 w-8 text-blue-700" />
        </div>
      </div>

      <h2 className="text-2xl font-extrabold text-center text-blue-800 mb-2 tracking-wide">
        Complete Your Payment
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Securely pay with{" "}
        <span className="font-semibold text-blue-600">Stripe</span>
      </p>

      {/* Stripe Elements */}
      <Elements stripe={stripePromise}>
        <div className="bg-white p-6 rounded-xl shadow-inner">
          <CheckoutForm paymentData={paymentData} />
        </div>
      </Elements>

      {/* Secure Note */}
      <div className="flex items-center justify-center mt-5 space-x-2 text-sm text-gray-500">
        <MdSecurity className="h-5 w-5 text-green-500" />
        <span>Your payment is 100% secure</span>
      </div>
    </div>
  );
};

export default Checkout;
