import PricingTable from "@/components/PricingJob";
import styled from "@emotion/styled";
import { Box, Button, Card, CircularProgress, Typography } from "@mui/material";
import Cookies from "js-cookie";
import React from "react";
import { useSelector } from "react-redux";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useEffect } from "react";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import CheckCircleOutlineTwoToneIcon from "@mui/icons-material/CheckCircleOutlineTwoTone";
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
    <div>
      <CustomTypography
        variant="h5"
        fontWeight={600}
        textAlign={"center"}
        mb={5}
      >
        Choose the ideal method to post your job based on your hiring needs
      </CustomTypography>
      {jobCount.count >= 3 ? (
        <CustomTypography
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
        </CustomTypography>
      ) : (
        ""
      )}
      <Box>
        <Button
          onClick={() => {
            props?.Pages(2);
          }}
        >
          <ArrowBackRoundedIcon /> Back
        </Button>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <Card
          sx={{
            p: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "15px",
            boxShadow: "rgba(17, 12, 46, 0.15) 0px 10px 10px 0px",
            borderRadius: "15px",
            minWidth: "270px",
          }}
        >
          <CustomTypography
            sx={{ fontWeight: 600, textAlign: "center", fontSize: "20px" }}
          >
            Free
          </CustomTypography>
          {country === "IN" ? (
            <CustomTypography
              sx={{ textAlign: "center", fontWeight: 600, fontSize: "18px" }}
            >
              {" "}
              0 &#8377;
            </CustomTypography>
          ) : (
            <CustomTypography
              sx={{ textAlign: "center", fontWeight: 600, fontSize: "18px" }}
            >
              {" "}
              0 $
            </CustomTypography>
          )}
          <CustomTypography sx={{ textAlign: "center" }}>
            {" "}
            Success Rate: 43%
          </CustomTypography>
          {loading === false ? (
            jobCount.count >= 3 ? (
              <Button disabled={jobCount.count >= 3} sx={{ width: "191px" }}>
                Submit
              </Button>
            ) : (
              <BasicButton onClick={props.postJobs} sx={{ width: "191px" }}>
                Submit
              </BasicButton>
            )
          ) : (
            <BasicButton>
              <CircularProgress color="inherit" />
            </BasicButton>
          )}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "5px",
              width: "100%",
            }}
          >
            <CheckCircleOutlineTwoToneIcon fontSize="small" color="primary" />
            <CustomTypography sx={{ textAlign: "left" }}>
              {" "}
              3 job posts per day
            </CustomTypography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "5px",
              width: "100%",
            }}
          >
            <CheckCircleOutlineTwoToneIcon fontSize="small" color="primary" />
            <CustomTypography sx={{ textAlign: "left" }}>
              {" "}
              Job expires in 48 hours
            </CustomTypography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "5px",
              width: "100%",
            }}
          >
            <CheckCircleOutlineTwoToneIcon fontSize="small" color="primary" />
            <CustomTypography sx={{ textAlign: "left" }}>
              {" "}
              10 job applicants per job
            </CustomTypography>
          </Box>
        </Card>
        <Card
          sx={{
            p: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "15px",
            boxShadow: "rgba(17, 12, 46, 0.15) 0px 10px 10px 0px",
            borderRadius: "15px",
            minWidth: "270px",
          }}
        >
          <CustomTypography
            sx={{ fontWeight: 600, textAlign: "center", fontSize: "20px" }}
          >
            Premium
          </CustomTypography>
          {country === "IN" ? (
            <CustomTypography
              sx={{ textAlign: "center", fontWeight: 600, fontSize: "18px" }}
            >
              {" "}
              1600 &#8377;
            </CustomTypography>
          ) : (
            <CustomTypography
              sx={{ textAlign: "center", fontWeight: 600, fontSize: "18px" }}
            >
              {" "}
              35 $
            </CustomTypography>
          )}
          <CustomTypography sx={{ textAlign: "center" }}>
            {" "}
            Success Rate: 90%
          </CustomTypography>
          <BasicButton onClick={props.postPremJobs}>Pay</BasicButton>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "5px",
              width: "100%",
            }}
          >
            <CheckCircleOutlineTwoToneIcon fontSize="small" color="primary" />
            <CustomTypography sx={{ textAlign: "left" }}>
              Make job a featured job
            </CustomTypography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "5px",
              width: "100%",
            }}
          >
            <CheckCircleOutlineTwoToneIcon fontSize="small" color="primary" />
            <CustomTypography sx={{ textAlign: "left" }}>
              Unlimited job applicants
            </CustomTypography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              gap: "5px",
              width: "100%",
            }}
          >
            <CheckCircleOutlineTwoToneIcon fontSize="small" color="primary" />
            <CustomTypography
              sx={{
                textAlign: "left",
                overflowWrap: "break-word",
                // width: "200px",
              }}
            >
              20 relevent profiles from candidate database
            </CustomTypography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "5px",
              width: "100%",
            }}
          >
            <CheckCircleOutlineTwoToneIcon fontSize="small" color="primary" />
            <CustomTypography sx={{ textAlign: "left" }}>
              Job expires in 1 month
            </CustomTypography>
          </Box>
        </Card>
      </Box>
      <Box sx={{ mt: 5 }}>
        <PricingTable />
      </Box>
    </div>
  );
}

export default Chooseplan;
