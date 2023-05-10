import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { Box, CardContent, Collapse, Divider, Stack } from "@mui/material";
import React, { useState } from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { StyledCard } from "../ProfileStyles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import CustomizedSteppers from "@/ui-components/CustomStpper/CustomStepper";
import { BOLD } from "@/theme/fonts";
import { DANGER, NEUTRAL } from "@/theme/colors";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const CandidateJobs = () => {
  const [open, setOpen] = useState(true);

  const openProfile = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#2699FF",
          borderRadius: "5px",
        }}
      >
        <Stack
          direction={"row"}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 30px",
          }}
        >
          <CustomTypography
            sx={{ fontFamily: BOLD, color: NEUTRAL, fontSize: "20px" }}
          >
            Jobs
          </CustomTypography>
          <Box onClick={() => openProfile()} sx={{ cursor: "pointer" }}>
            {open ? (
              <ExpandLess sx={{ color: NEUTRAL }} />
            ) : (
              <ExpandMore sx={{ color: NEUTRAL }} />
            )}
          </Box>
        </Stack>
      </Box>

      <Collapse in={open} timeout="auto">
        {/* Applied Job */}
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
            <Stack
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
                  Graphic Designer
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
                <CustomTypography>Recroot</CustomTypography>
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
          </CardContent>
        </StyledCard>

        {/* Saved Jobs */}
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
              Saved Jobs
            </CustomTypography>
            <AddIcon />
          </Stack>

          <CardContent sx={{ padding: "30px 30px" }}>
            <Stack
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
                sx={{
                  alignItems: "center",
                  gap: "10px",
                  justifyContent: "space-between",
                }}
              >
                <Stack>
                  <CustomTypography sx={{ fontFamily: BOLD, fontSize: "25px" }}>
                    Graphic Designer
                  </CustomTypography>
                  <CustomTypography>Recroot</CustomTypography>
                </Stack>
                <Box
                  sx={{
                    border: "1px solid #DADADA",
                    justifyContent: "space-between",
                    alignContent: "center",
                    padding: "12px",
                    borderRadius: "10px",
                  }}
                >
                  <BookmarkIcon sx={{ color: "#2699FF" }} />
                </Box>
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
                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
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
                  Apply Now
                </button>
              </Stack>
            </Stack>

            <Stack
              direction={"row"}
              sx={{ justifyContent: "flex-end", mt: "10px" }}
            >
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
          </CardContent>
        </StyledCard>
      </Collapse>
    </>
  );
};

export default CandidateJobs;
