import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Button, CircularProgress, styled } from "@mui/material";
import { useSelector } from "react-redux";
const StyledButton = styled(Button)({
  color: "#ffff",
  padding: "10px",
  borderRadius: "10px",
  border: "2px solid #e7eaef",
  background: "#00339B !important",
  textTransform: "capitalize",
  width: "100%",
  marginBottom: "10px",
  marginTop:"10px"
});
export default function PaymentInt(props) {
  const stripe = useStripe();
  const elements = useElements();
  const choosePremium =  useSelector(data => data.jobs.choosePremium)

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
 
  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    setIsLoading(true);
    if (choosePremium) {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          // Make sure to change this to your payment completion page
          return_url: `https://recroot.io/Employer/Jobpayment/Success?newJob=${choosePremium}`,
          
        },
      });
      return
    }else{
      const queryString = props?.jobPay?.ids?.join(',');
      const url = `/?elements=${queryString}`;
      console.log(url,'url')
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          // Make sure to change this to your payment completion page
          return_url: `https://recroot.io/Employer/Jobpayment/Success${url}`,
          
        },
      });
    }

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <StyledButton
        className="pay-button"
        disabled={isLoading || !stripe || !elements}
        id="submit"
        type="submit"
      >
        <span id="button-text">
          {isLoading ? <CircularProgress /> : "Pay now"}
        </span>
      </StyledButton>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
