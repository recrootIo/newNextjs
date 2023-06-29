/* eslint-disable @next/next/no-img-element */
import EmployerNavbar from '@/components/EmployerNavbar/EmployerNavbar';
import { Box, Button, Card, Container, Typography, styled } from '@mui/material';
import { Elements } from '@stripe/react-stripe-js';
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import PaymentInt from '@/components/JobPay/PaymentInt';

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
function Jobpaymentstatus() {
  const stripePromise = loadStripe(
    "pk_test_51LE9NmCCnqCKl0oMYfMTugAqtMepaC4DkHyTyklan9jfncWHCbXN2LxLhTZUniqUyfusJqXMaT5055WXHLI54zvJ00F7xxXAg2"
  );
  const jobPay =  useSelector(data => data.jobs.jobPayment)
  const jobDet =  useSelector(data => data.jobs.upJob)

const [clientSecret, setClientSecret] = useState("");
const token = Cookies.get('token')
const choosePremium =  useSelector(data => data.jobs.choosePremium)
const router = useRouter()
  useEffect(() => {
    if(jobDet === ""  && choosePremium !== true){
      router.push('/Employer/Dashboard')
    }else{
      if(jobPay.payment !== ''){
        axios.post(`https://preprod.recroot.au/api/addnewjobpayment`,jobPay, {
          headers: { "x-access-token": `${token}` },
        }).then((res)=>{
          setClientSecret(res?.data?.clientSecret)
        })
      }else{
      router.push('/Employer/Dashboard')
      }
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
  const appearance = {
    theme: "stripe",
  };
    const options = {
        clientSecret,
        appearance,
      };
  const country = Cookies.get('country')
  // const queryString = jobPay?.ids.join(',');
  // const url = `/?elements=${queryString}`;
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
          Premium Payment
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
                      Premium
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
                  { (
                    country === "IN" ? (
                      <span>&#8377;</span>
                    ) : (
                      "$"
                    )
                  )}
                  <b>{jobPay?.payment}</b> / Month
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
                 <PaymentInt options={options} jobPay={jobPay}/>
                  </Elements>
                )}
              </Box>
            </Box>
          </Card>
        </Card>
      </Container>
    </div>
  )
}

export default Jobpaymentstatus
