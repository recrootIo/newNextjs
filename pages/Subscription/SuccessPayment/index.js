import EmployerNavbar from "@/components/EmployerNavbar/EmployerNavbar";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
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
function SucessPayment() {
  const router = useRouter();
  const { name } = router.query;
  const { pack } = router.query;
  const { count } = router.query;
  console.log(name);
  var subscriptioncompanyId = Cookies.get("companyId");
  useEffect(() => {
    if (name !== undefined) {
      fetch("http://localhost:3000/api/updatePaymentRecord", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyId: subscriptioncompanyId,
          clientSecret: name,
          count: count,
          package: pack,
        }),
      }).then((res) => res.json());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  const handleDashboard = () => {
    router.push("/Employer/Dashboard");
  };
  return (
    <div>
      <EmployerNavbar />
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
            padding: "65px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
            position: "relative",
            top: "-110px",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <DoneOutlinedIcon
              style={{ fill: "#05FF00", fontSize: "50px" }}
              className="tik"
            />
            <Typography sx={{ fontSize: 25 }} className="paymentdone">
              Payment Done
            </Typography>
            <Typography variant="h" component="div" className="tts">
              This Transaction was successfull
            </Typography>
            <BasicButton
              variant="contained"
              className="goto-button"
              disableElevation
              onClick={() => {
                handleDashboard();
              }}
            >
              Go To Dashboard
            </BasicButton>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default SucessPayment;
