import PricingTable from "@/components/PricingJob";
import styled from "@emotion/styled";
import {
  Box,
  Button,
  Card,
  CircularProgress,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Cookies from "js-cookie";
import React from "react";
import { useSelector } from "react-redux";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useEffect } from "react";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import CheckCircleOutlineTwoToneIcon from "@mui/icons-material/CheckCircleOutlineTwoTone";
import Image from "next/image";
const BasicButton = styled(Button)({
  color: "#ffff",
  padding: "10px",
  borderRadius: "10px",
  border: "2px solid #02A9F7",
  background: "#02A9F7 !important",
  textTransform: "capitalize",
  width: { xs: "100%", sm: "191px !important" },
  // marginBottom: "10px",
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
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-start",
          }}
        >
          <Card
            sx={{
              p: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "15px",
              boxShadow: "rgba(17, 12, 46, 0.15) 0px 10px 10px 0px",
              borderRadius: "15px",
              width: { xs: "100%", md: "70%" },
              p: "0px !important",
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                bgcolor: "#FFEEEF",
                width: "100%",
                p: "16px, 16px 0px 16px",
                ml: "0px !important",
              }}
            >
              <Grid
                item
                xs={7}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box>
                  <CustomTypography
                    sx={{
                      fontWeight: 600,
                      textAlign: "center",
                      fontSize: "25px",
                    }}
                  >
                    Free
                  </CustomTypography>
                </Box>
              </Grid>
              <Grid
                item
                xs={5}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/premium-package-img.png"
                  alt="Picture of Free package card"
                  priority={true}
                  width="126"
                  height="126"
                />
              </Grid>
            </Grid>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: "15px",
                minHeight: "220px",
                width: "100%",
                p: "0px 16px 0px 16px",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: "60%",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "5px",
                    bgcolor: "#DBFFF2",
                    borderRadius: "5px",
                  }}
                >
                  <CustomTypography
                    sx={{
                      textAlign: "center",
                      fontWeight: 600,
                    }}
                  >
                    {" "}
                    Success Rate: 43%
                  </CustomTypography>
                </Box>
              </Box>
              <Divider variant="middle" light sx={{ width: "90%" }} />
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
                <CheckCircleOutlineTwoToneIcon
                  fontSize="small"
                  color="primary"
                />
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
                <CheckCircleOutlineTwoToneIcon
                  fontSize="small"
                  color="primary"
                />
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
                <CheckCircleOutlineTwoToneIcon
                  fontSize="small"
                  color="primary"
                />
                <CustomTypography sx={{ textAlign: "left" }}>
                  {" "}
                  10 job applicants per job
                </CustomTypography>
              </Box>
            </Box>
            <Box
              sx={{
                p: "0px 16px 0px 16px",
                bgcolor: "#EBF3FF",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "72px",
              }}
            >
              <Grid container spacing={2} sx={{ height: "100%" }}>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  {country === "IN" ? (
                    <CustomTypography
                      sx={{
                        textAlign: "center",
                        fontWeight: 600,
                        fontSize: "18px",
                      }}
                    >
                      {" "}
                      0 &#8377;
                    </CustomTypography>
                  ) : (
                    <CustomTypography
                      sx={{
                        textAlign: "center",
                        fontWeight: 600,
                        fontSize: "18px",
                      }}
                    >
                      {" "}
                      0 $
                    </CustomTypography>
                  )}
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {loading === false ? (
                    jobCount.count >= 3 ? (
                      <Button
                        variant="outlined"
                        disabled={jobCount.count >= 3}
                        sx={{ width: "191px" }}
                      >
                        Submit
                      </Button>
                    ) : (
                      <BasicButton
                        variant="outlined"
                        onClick={props.postJobs}
                        sx={{ width: "191px" }}
                      >
                        Submit
                      </BasicButton>
                    )
                  ) : (
                    <BasicButton>
                      <CircularProgress color="inherit" />
                    </BasicButton>
                  )}
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Card
            sx={{
              p: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "15px",
              boxShadow: "rgba(17, 12, 46, 0.15) 0px 10px 10px 0px",
              borderRadius: "15px",
              width: { xs: "100%", md: "70%" },
              p: "0px !important",
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                bgcolor: "#EAEBF4",
                p: "16px, 16px 0px 16px",
                width: "100%",
                ml: "0px !important",
                minHeight: "130px",
              }}
            >
              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box>
                  <CustomTypography
                    sx={{
                      fontWeight: 600,
                      textAlign: "center",
                      fontSize: "25px",
                    }}
                  >
                    Premium
                  </CustomTypography>
                </Box>
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/free-package-img.png"
                  alt="Picture of Free package card"
                  priority={true}
                  width="496"
                  height="326"
                />
              </Grid>
            </Grid>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                flexGrow: 1,
                minHeight: "200px",
                p: "0px 16px 0px 16px",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: "60%",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "5px",
                    bgcolor: "#DBFFF2",
                    borderRadius: "5px",
                  }}
                >
                  <CustomTypography
                    sx={{
                      textAlign: "center",
                      fontWeight: 600,
                    }}
                  >
                    {" "}
                    Success Rate: 90%
                  </CustomTypography>
                </Box>
              </Box>
              <Divider variant="middle" light />
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
                <CheckCircleOutlineTwoToneIcon
                  fontSize="small"
                  color="primary"
                />
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
                <CheckCircleOutlineTwoToneIcon
                  fontSize="small"
                  color="primary"
                />
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
                <CheckCircleOutlineTwoToneIcon
                  fontSize="small"
                  color="primary"
                />
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
                <CheckCircleOutlineTwoToneIcon
                  fontSize="small"
                  color="primary"
                />
                <CustomTypography sx={{ textAlign: "left" }}>
                  Job expires in 1 month
                </CustomTypography>
              </Box>
            </Box>
            <Box
              sx={{
                p: "0px 16px 0px 16px",
                bgcolor: "#EBF3FF",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "72px",
              }}
            >
              <Grid container spacing={2} sx={{ height: "100%" }}>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  {country === "IN" ? (
                    <CustomTypography
                      sx={{
                        textAlign: "center",
                        fontWeight: 600,
                        fontSize: "18px",
                      }}
                    >
                      {" "}
                      1600 &#8377;
                    </CustomTypography>
                  ) : (
                    <CustomTypography
                      sx={{
                        textAlign: "center",
                        fontWeight: 600,
                        fontSize: "18px",
                      }}
                    >
                      {" "}
                      35 $
                    </CustomTypography>
                  )}
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <BasicButton
                    variant="outlined"
                    onClick={props.postPremJobs}
                    sx={{ width: "191px" }}
                  >
                    Pay
                  </BasicButton>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mt: 5 }}>
        <PricingTable />
      </Box>
    </div>
  );
}

export default Chooseplan;
