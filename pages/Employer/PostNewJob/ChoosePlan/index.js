import PricingTable from "@/components/PricingJob";
import styled from "@emotion/styled";
import { Box, Button, Card, CircularProgress, Typography } from "@mui/material";
import Cookies from "js-cookie";
import React from "react";
import { useSelector } from "react-redux";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { useEffect } from "react";
const BasicButton = styled(Button)({
  color: "#ffff",
  padding: "10px",
  borderRadius: "10px",
  border: "2px solid #e7eaef",
  background: "#1976d2 !important",
  textTransform: "capitalize",
  width: { xs: "100%", sm: "auto" },
  marginBottom: "10px",
});
function Chooseplan(props) {
  const country = Cookies.get("country");
  const jobCount = useSelector((data) => data.jobs.freeCount);
  const loading = useSelector((state) => state?.jobs?.loading);
  useEffect(() => {
    const element = document.getElementById("top");
       element.scrollIntoView({
         behavior: "smooth",
       });
   }, []);
  return (
    <div >
       <Typography variant="h5" fontWeight={600} textAlign={"center"} mb={5}>
        Choose the ideal method to post your job based on your hiring needs
      </Typography>
    {  jobCount.count >= 3 ? (  <Typography
        sx={{
          background: "#4fa9ff",
          width: "fit-content",
          margin: "0px auto 20px auto",
          padding: "5px",
          color: "#ffff",
          borderRadius: "10px",
        }}
        textAlign={"center"}
      >
        Your free job limit has been reached
      </Typography>) : ""}
      <Box>
        <Button onClick={()=>{props?.Pages(2)}}><ArrowBackRoundedIcon /> Back</Button>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <Card
          sx={{
            p: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "15px",
            boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
          }}
        >
          <Typography sx={{ fontWeight: 600, textAlign: "center" }}>
            Free
          </Typography>
          {country === "IN" ? (
            <Typography sx={{ textAlign: "center" }}> 0 &#8377;</Typography>
          ) : (
            <Typography sx={{ textAlign: "center" }}> 0 $</Typography>
          )}
          <Typography sx={{ textAlign: "center" }}>
            {" "}
            Success Rate: 43%
          </Typography>
          {loading === false ? (
            jobCount.count >= 3 ? (
              <Button disabled={jobCount.count >= 3}>Submit</Button>
            ) : (
              <BasicButton onClick={props.postJobs}>Submit</BasicButton>
            )
          ) : (
            <BasicButton>
              <CircularProgress color="inherit" />
            </BasicButton>
          )}
          <Typography sx={{ textAlign: "center" }}>
            {" "}
            3 job posts per day
          </Typography>
          <Typography sx={{ textAlign: "center" }}>
            {" "}
            Job expires in 48 hours
          </Typography>
          <Typography sx={{ textAlign: "center" }}>
            {" "}
            10 job applicants per job
          </Typography>
        </Card>
        <Card
          sx={{
            p: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "15px",
            boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
          }}
        >
          <Typography sx={{ fontWeight: 600, textAlign: "center" }}>
            Premium
          </Typography>
          {country === "IN" ? (
            <Typography sx={{ textAlign: "center" }}> 1600 &#8377;</Typography>
          ) : (
            <Typography sx={{ textAlign: "center" }}> 35 $</Typography>
          )}
          <Typography sx={{ textAlign: "center" }}>
            {" "}
            Success Rate: 90%
          </Typography>
          <BasicButton onClick={props.postPremJobs}>Pay</BasicButton>
          <Typography sx={{ textAlign: "center" }}>
            Make job a featured job
          </Typography>
          <Typography sx={{ textAlign: "center" }}>
            Unlimited job applicants
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              overflowWrap: "break-word",
              width: "200px",
            }}
          >
            20 relevent profiles from candidate database
          </Typography>
          <Typography sx={{ textAlign: "center" }}>
            Job expires in 1 month
          </Typography>
        </Card>
      </Box>
      <Box sx={{ mt: 5 }}>
        <PricingTable />
      </Box>
    </div>
  );
}

export default Chooseplan;
