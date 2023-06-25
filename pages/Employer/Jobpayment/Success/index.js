import EmployerNavbar from '@/components/EmployerNavbar/EmployerNavbar';
import { Box, Button, Card, CardContent, Container, Typography, styled } from '@mui/material';
import React from 'react'
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
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
function SuccessJobPay() {
    const router = useRouter();
    const { elements } = router.query;
    const { newJob } = router.query;
    const { payment_intent_client_secret } = router.query;
    const array = elements ? elements.split(',') : [];
    const value = {
        ids:array,
        clientSecret:payment_intent_client_secret
    }
const token = Cookies.get('token')
    useEffect(() => {
      if(array.length > 0){  axios.post(
          `${'https://preprod.recroot.au/api/'}updateJobPayment`,value, {
            headers: { "x-access-token": `${token}` },
          }
            ).then((res)=>{
                console.log(res)
            })}
        if (newJob === 'true') {
          const user = JSON.parse(localStorage.getItem("User"));
          axios.post(
            `${'https://preprod.recroot.au/api/'}updateJobPaymentNew`,{
              clientSecret:payment_intent_client_secret,
              job:JSON.parse(localStorage.getItem("jobDetail")),
              companyId:user?.User?.companyId
            }, {
              headers: { "x-access-token": `${token}` },
            }
              ).then((res)=>{
                if (res.status === 200) {
                  localStorage.removeItem("jobDetail");
                }
              })
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [array,newJob])
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
                router.push('/Employer/Dashboard');
              }}
            >
              Go To Dashboard
            </BasicButton>
          </CardContent>
        </Card>
      </Container>
    </div>
  )
}

export default SuccessJobPay
