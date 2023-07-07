/* eslint-disable @next/next/no-img-element */
import EmployerNavbar from "@/components/EmployerNavbar/EmployerNavbar";
import {
  Box,
  Card,
  Typography,
  styled,
  Button,
  Container,
  Stack,
} from "@mui/material";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import CheckoutForm from "@/components/Checkout/CheckoutForm";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import dynamic from "next/dynamic";
import styles from "../../../components/Employers/styles.module.css";
import companyservice from "@/redux/services/company.service";
const Tour = dynamic(() => import("reactour"), { ssr: false });

// const stripePromise = loadStripe(
//   "pk_test_51LE9NmCCnqCKl0oMYfMTugAqtMepaC4DkHyTyklan9jfncWHCbXN2LxLhTZUniqUyfusJqXMaT5055WXHLI54zvJ00F7xxXAg2"
// );
const stripePromise = loadStripe(
  "pk_live_51LE9NmCCnqCKl0oMoqKZX6gl5E9SEnw4MARENHnb4YNkUTZ1PJ17rAXY2J7jdKgdiD9KdIjwbbDZ4PSPsKr2JU4A00lom585CK"
);
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
  const { push } = useRouter();
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
  const { count: countFin } = useSelector((state) => state.subscription);
  const { country: Coutry } = useSelector((state) => state.subscription);
  const [isTourOpen, setTourOpen] = React.useState(false);
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
      fetch(" https://api.arinnovate.io/api/createPayment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          price: subscriptionPrice,
          currency: Coutry,
          packagesDetail: subscriptionpackage,
          oldTime: payment.packageEndDate,
          timePeriod: subscriptionTimePackage,
          companyId: subscriptioncompanyId,
          subType:
            subscriptionpackage === "Gold" || subscriptionpackage === "Growth"
              ? "jSlot"
              : "jPost",
          count: countFin,
          // date: moment().utc().format(),
        }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret))
        .then(localStorage.setItem("paymentInfo", clientSecret));
    } else {
      fetch(" https://api.arinnovate.io/api/createPayment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          price: subscriptionPrice,
          packagesDetail: subscriptionpackage,
          timePeriod: subscriptionTimePackage,
          currency: Coutry,
          companyId: subscriptioncompanyId,
          subType:
            subscriptionpackage === "Gold" || subscriptionpackage === "Growth"
              ? "jSlot"
              : "jPost",
          date: moment().utc().format(),
          count: countFin,
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
    subscriptionpackage,
  };

  const updateValue = async () => {
    const companyService = new companyservice();
    await companyService.updateTourValue({ card: false });
  };

  const closeTour = () => {
    setTourOpen(false);
    updateValue();
  };

  const accentColor = "#5cb7b7";

  const comp = useSelector((state) => state?.company?.companyDetl);

  useEffect(() => {
    setTourOpen(() => comp?.tours?.card);
  }, [comp?.tours?.card]);

  const tourConfig = [
    {
      selector: ".pay-button",
      style: {
        color: "black",
      },
      content: ({ goTo }) => (
        <Stack
          sx={{
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomTypography>
            Add card details and click on &quot;Pay Now&quot; button to finalize
            your subscription
          </CustomTypography>
          <Button onClick={() => closeTour()} variant="outline">
            Done
          </Button>
        </Stack>
      ),
    },
  ];

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
      <Container>
        <Card
          sx={{
            background: "#F2F8FD",
            borderRadius: "15px",
            padding: { xs: "10px", sm: "65px" },
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
                  flexDirection: { xs: "column", sm: "row" },
                  gap: { xs: "30px", sm: "30px", md: "60px" },
                  alignItems: "center",
                }}
              >
                <Box
                  variant="outlined"
                  className="goldbutton1"
                  sx={{
                    background: "#4fa9ff",
                    borderRadius: "10px",
                    display: "flex",
                    p: {
                      xs: "15px 40px 15px 40px",
                      sm: "15px 30px 15px 30px",
                      md: "15px 40px 15px 40px",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                      gap: "5px",
                    }}
                  >
                    <img src="/thumbup.png" alt="vector" />
                    <Typography
                      sx={{
                        fontFamily: "'Inter'",
                        fontStyle: "normal",
                        fontWeight: 800,
                        fontSize: { xs: "30px", md: "40px" },
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
                    fontSize: { xs: "30px", md: "40px" },
                    lineHeight: "145%",
                    color: "#fff",
                  }}
                >
                  {subscriptionpackage === "Pro Plan" ||
                  subscriptionpackage === "Premium" ? (
                    Coutry === "INR" ? (
                      <span>&#8377;</span>
                    ) : Coutry === "LKR" ? (
                      "Rs."
                    ) : (
                      "$"
                    )
                  ) : (
                    "$"
                  )}
                  <b>{subscriptionPrice}</b>/
                  {subscriptionTimePackage === "single" ? "15Days" : "Monthly"}
                </Typography>
                <BasicButton
                  onClick={() => {
                    push("/Pricing");
                  }}
                >
                  {" "}
                  Change Plan
                </BasicButton>
              </Box>
              <Box sx={{ p: 3 }}>
                {clientSecret && (
                  <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm options={options} />
                  </Elements>
                )}
              </Box>
            </Box>
          </Card>
        </Card>
      </Container>
      <Tour
        onRequestClose={closeTour}
        disableInteraction={true}
        steps={tourConfig}
        isOpen={isTourOpen}
        maskClassName={styles.mask}
        className={styles.helper}
        rounded={8}
        accentColor={accentColor}
      />
    </div>
  );
}

export default Subpayment;
