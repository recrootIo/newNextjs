import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { Box, CardContent, Divider, Stack } from "@mui/material";
import React from "react";
import { StyledCard } from "../ProfileStyles";
import AddIcon from "@mui/icons-material/Add";
import CustomizedSteppers from "@/ui-components/CustomStpper/CustomStepper";
import { BOLD } from "@/theme/fonts";
import { DANGER, NEUTRAL } from "@/theme/colors";
import { useRouter } from "next/router";
import Link from "next/link";
import { getSalary } from "@/components/JobListings/SearchSection";

const AppliedJobs = ({ appliedJobs }) => {
  const getActive = (step) => {
    switch (step) {
      case "unview": {
        return 0;
      }
      case "viewed": {
        return 1;
      }
      case "shortlist": {
        return 2;
      }
      case "interivewed": {
        return 3;
      }
      default:
        return 0;
    }
  };

  const handleNavigate = (applied) => {
    const jobTitle = applied?.jobTitle[0];
    const jobRole = applied?.jobRole[0];
    const _id = applied.jobId[0];
    return `/jobs/${jobTitle}/${jobRole}/${_id}`;
  };

  return (
    <StyledCard variant="outlined" id="appliedJob_details_section">
      <Stack
        direction={"row"}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          padding: { md: "10px 30px", xs: "10px", sm: "10px" },
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
      <CardContent
        sx={{ padding: { md: "30px 30px", xs: "16px 10px", sm: "16px 10px" } }}
      >
        <Stack sx={{ gap: "20px" }}>
          {appliedJobs.map((applied, index) => (
            <Stack
              key={index}
              sx={{
                backgroundColor: "#F6FCFF",
                borderRadius: "10px",
                padding: { md: "30px 30px", xs: "16px 10px", sm: "16px 10px" },
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
                  <CustomTypography sx={{ color: NEUTRAL, fontSize: "12px" }}>
                    {applied.status}
                  </CustomTypography>
                </Box>
              </Stack>
              <Stack>
                <CustomTypography>{applied?.companyName}</CustomTypography>
              </Stack>
              <Stack direction={"row"} sx={{ gap: "20px" }}>
                <CustomTypography
                  variant="body2"
                  color="text.secondary"
                  fontSize={16}
                  sx={{ color: "gray" }}
                >
                  {applied?.jobType[0]}
                </CustomTypography>
                <CustomTypography
                  variant="body2"
                  color="text.secondary"
                  fontSize={16}
                  sx={{ color: "gray" }}
                >
                  Part Time
                </CustomTypography>
                <CustomTypography
                  variant="body2"
                  color="text.secondary"
                  fontSize={16}
                  sx={{ color: "gray" }}
                >
                  {applied?.experience[0].experience}
                </CustomTypography>
                <CustomTypography sx={{ color: "gray" }} fontSize={15}>
                  {getSalary(applied?.salary[0])}
                </CustomTypography>
              </Stack>
              <Stack
                direction={"row"}
                sx={{
                  mb: "20px",
                  justifyContent: { md: "space-between" },
                  alignItems: { md: "center", xs: "center" },
                  flexDirection: { md: "row", sm: "column", xs: "column" },
                }}
              >
                <Link href={handleNavigate(applied)}>
                  <CustomTypography
                    sx={{
                      color: "#00339B",
                      textDecoration: "underline",
                      fontSize: "15px",
                    }}
                  >
                    See Full Description
                  </CustomTypography>
                </Link>

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
                <CustomizedSteppers activeStep={getActive(applied.status)} />
                <Stack
                  sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: {
                      md: "row",
                      sm: "column-reverse",
                      xs: "column-reverse",
                    },
                    gap: "20px",
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
