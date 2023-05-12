import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { Box, CardContent, Divider, Stack } from "@mui/material";
import React from "react";
import { StyledCard } from "../ProfileStyles";
import AddIcon from "@mui/icons-material/Add";
import CustomizedSteppers from "@/ui-components/CustomStpper/CustomStepper";
import { BOLD } from "@/theme/fonts";
import { DANGER, NEUTRAL } from "@/theme/colors";

const AppliedJobs = ({ appliedJobs }) => {
  console.log(appliedJobs, "appliedJobs");
  return (
    <StyledCard variant="outlined">
      <Stack
        direction={"row"}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 30px",
          backgroundColor: "#5CA9E814",
        }}
      >
        <CustomTypography
          sx={{
            fontFamily: BOLD,
            color: "#00339B",
            fontSize: "20px",
          }}
        >
          Applied Job
        </CustomTypography>
        <AddIcon />
      </Stack>
      <CardContent sx={{ padding: "30px 30px" }}>
        <Stack sx={{ gap: "20px" }}>
          {appliedJobs.map((applied, index) => (
            <Stack
              key={index}
              sx={{
                backgroundColor: "#F6FCFF",
                borderRadius: "10px",
                padding: "20px 30px",
                border: "1px solid #D3EAFF",
                gap: "5px",
              }}
            >
              <Stack
                direction={"row"}
                sx={{ justifyContent: "flex-end", alignItems: "center" }}
              >
                <CustomTypography
                  sx={{
                    color: DANGER,
                    fontSize: "13px",
                    textDecoration: "underline",
                  }}
                >
                  Withdraw
                </CustomTypography>
              </Stack>
              <Stack
                direction={"row"}
                sx={{ alignItems: "center", gap: "10px" }}
              >
                <CustomTypography sx={{ fontFamily: BOLD, fontSize: "25px" }}>
                  {applied?.jobTitle[0]}
                </CustomTypography>
                <Box
                  sx={{
                    backgroundColor: "#89D5FB",
                    padding: "1px 4px",
                    borderRadius: "7px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "29px",
                  }}
                >
                  <CustomTypography sx={{ color: "#02A9F7", fontSize: "12px" }}>
                    Viewed
                  </CustomTypography>
                </Box>
              </Stack>
              <Stack>
                <CustomTypography>{applied?.companyName}</CustomTypography>
              </Stack>
              <Stack direction={"row"} sx={{ gap: "20px" }}>
                <CustomTypography sx={{ color: "gray", fontSize: "13px" }}>
                  Remote
                </CustomTypography>
                <CustomTypography sx={{ color: "gray", fontSize: "13px" }}>
                  Part Time
                </CustomTypography>
                <CustomTypography sx={{ color: "gray", fontSize: "13px" }}>
                  3-6 Years
                </CustomTypography>
                <CustomTypography sx={{ color: "gray", fontSize: "13px" }}>
                  3-6 LPA
                </CustomTypography>
              </Stack>
              <Stack
                direction={"row"}
                sx={{ justifyContent: "space-between", mb: "20px" }}
              >
                <CustomTypography
                  sx={{
                    color: "#00339B",
                    textDecoration: "underline",
                    fontSize: "15px",
                  }}
                >
                  See Full Description
                </CustomTypography>
                <CustomTypography
                  sx={{
                    color: "gray",
                    fontFamily: BOLD,
                    fontSize: "15px",
                  }}
                >
                  430 Applications Received
                </CustomTypography>
              </Stack>
              <Divider />

              <Stack sx={{ gap: "50px", mt: "20px" }}>
                <CustomTypography sx={{ fontFamily: BOLD }}>
                  Application Status
                </CustomTypography>
                <CustomizedSteppers />
                <Stack
                  direction={"row"}
                  sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <button
                    style={{
                      backgroundColor: "#02A9F7",
                      color: NEUTRAL,
                      height: "50px",
                      borderRadius: "8px",
                      width: "250px",
                      fontWeight: "900",
                      fontSize: "18px",
                    }}
                  >
                    See Company Profile
                  </button>
                  <CustomTypography
                    sx={{
                      textDecoration: "underline",
                      color: "#00339B",
                      fontSize: "14px",
                    }}
                  >
                    View Similar Jobs
                  </CustomTypography>
                </Stack>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </CardContent>
    </StyledCard>
  );
};

AppliedJobs.defaultProps = {
  appliedJobs: [],
};

export default AppliedJobs;
