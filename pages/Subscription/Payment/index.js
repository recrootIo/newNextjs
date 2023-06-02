/* eslint-disable @next/next/no-img-element */
import EmployerNavbar from "@/components/EmployerNavbar/EmployerNavbar";
import { Box, Card, Typography, styled ,Button } from "@mui/material";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import CheckoutForm from "@/components/Checkout/CheckoutForm";

const stripePromise = loadStripe(
    "pk_test_51LE9NmCCnqCKl0oMYfMTugAqtMepaC4DkHyTyklan9jfncWHCbXN2LxLhTZUniqUyfusJqXMaT5055WXHLI54zvJ00F7xxXAg2"
  );
  // const stripePromise = loadStripe(
  //   "pk_live_51LE9NmCCnqCKl0oMoqKZX6gl5E9SEnw4MARENHnb4YNkUTZ1PJ17rAXY2J7jdKgdiD9KdIjwbbDZ4PSPsKr2JU4A00lom585CK"
  // );
  const BasicButton = styled(Button)({
    color: "#ffff",
    padding: "20px",
    borderRadius: "10px",
    border: "2px solid #e7eaef",
    background: "#4fa9ff !important",
    textTransform: "capitalize",
    // width: "50%",
    marginBottom: "10px",
  });
function Subpayment() {
    const  {push} = useRouter()
    const { price: subscriptionPrice } = useSelector(
      (state) => state.subscription
    );
    const { package: subscriptionpackage } = useSelector(
      (state) => state.subscription
    );
    const { timePeriod: subscriptionTimePackage } = useSelector(
      (state) => state.subscription
    );
    const { companyId: subscriptioncompanyId } = useSelector(
      (state) => state.subscription
    );
    const { count: countFin } = useSelector(
      (state) => state.subscription
    );
    const { country: Coutry } = useSelector((state) => state.subscription);
    const company = useSelector((state) => state?.company?.companyDetl);
    const payment = company?.payments?.slice(-1)[0];
    const payconfrm =
      payment?.status === "Completed" &&
      company.package.subscription_package === "Growth";
    const [clientSecret, setClientSecret] = useState("");
    useEffect(() => {
      if (subscriptioncompanyId === null) {
        push("/Pricing", { replace: true });
        return;
      }
      if (
        payconfrm === true &&
        moment(company?.package_end_date).format("L") >
          moment(new Date()).format("L")
      ) {
        fetch("https://preprod.recroot.au/api/createPayment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            price: subscriptionPrice,
            currency: Coutry,
            packagesDetail: subscriptionpackage,
            oldTime: payment.packageEndDate,
            timePeriod: subscriptionTimePackage,
            companyId: subscriptioncompanyId,
            subType: subscriptionTimePackage === "mothly" ? "jPost" : "jSlot",
            count:countFin
            // date: moment().utc().format(),
          }),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret))
          .then(localStorage.setItem("paymentInfo", clientSecret));
      } else {
        fetch("https://preprod.recroot.au/api/createPayment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            price: subscriptionPrice,
            packagesDetail: subscriptionpackage,
            timePeriod: subscriptionTimePackage,
            currency: Coutry,
            companyId: subscriptioncompanyId,
            subType: subscriptionTimePackage === "mothly" ? "jPost" : "jSlot",
            date: moment().utc().format(),
            count:countFin
          }),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret))
          .then(localStorage.setItem("paymentInfo", clientSecret));
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    const appearance = {
      theme: "stripe",
    };
    const options = {
      clientSecret,
      appearance,
      countFin,
      subscriptionpackage
    };
  return (
    <div>
      <EmployerNavbar></EmployerNavbar>
      <Box
        sx={{
          backgroundImage: 'url("/EmployerDashboardBG.svg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "220px",
          display: "flex",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: "2rem",
            fontWeight: 600,
            m: "45px auto 0 auto",
          }}
        >
          Subscription
        </Typography>
      </Box>
      <Card
        sx={{
          background: "#F2F8FD",
          borderRadius: "15px",
          padding: "65px",
          margin: "0 180px 0 180px",
          position: "relative",
          top: "-80px",
        }}
      >
        <Card sx={{ padding: "20px" }}>
          <Box>
            <Box
              sx={{
                background: "#015FB1",
                p: "15px",
                borderRadius: "10px",
                display: "flex",
                gap: "20px",
                alignItems:'center'
              }}
            >
                  <Box
                  variant="outlined"
                  className="goldbutton1"
                  sx={{ background: "#4fa9ff", borderRadius: "10px" ,display:'flex',p:'15px 40px 15px 40px'}}
                >
                  <Box sx={{ display: "flex",alignItems: 'center',justifyContent: 'space-around' ,gap:'5px'}}>
                    <img src="/thumbup.png" alt="vector" />
                    <Typography
                      sx={{
                        fontFamily: "'Inter'",
                        fontStyle: "normal",
                        fontWeight: 800,
                        fontSize: "40px",
                        lineHeight: "145%",
                        color: "#fff",
                      }}
                    >
                     {subscriptionpackage}
                    </Typography>
                  </Box>
                </Box>
                <Typography
                    sx={{
                      fontFamily: "'Inter'",
                      fontStyle: "normal",
                      fontWeight: 800,
                      fontSize: "40px",
                      lineHeight: "145%",
                      color: "#fff",
                    }}
                  >
                    {subscriptionpackage === "Pro Plan" ||
                    subscriptionpackage === "Premium" ? (
                      Coutry === "INR" ? (
                        <span>&#8377;</span>
                      ) : (
                        '$'
                      )
                    ) : (
                      '$'
                    )}
                    <b>{subscriptionPrice}</b>
                
                      /
                      {subscriptionTimePackage === "single"
                        ? "15Days"
                        : "Monthly"}
                    
                  </Typography>
                  <BasicButton> Change Plan</BasicButton>
            </Box>
            <Box sx={{p:3,}}>
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                  <CheckoutForm options={options} />
                </Elements>
              )}
            </Box>
          </Box>
        </Card>
      </Card>
    </div>
  );
}

export default Subpayment;
