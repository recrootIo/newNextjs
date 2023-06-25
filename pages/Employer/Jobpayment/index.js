/* eslint-disable @next/next/no-img-element */
import EmployerNavbar from "@/components/EmployerNavbar/EmployerNavbar";
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import CheckCircleOutlineTwoToneIcon from "@mui/icons-material/CheckCircleOutlineTwoTone";
import AddCardIcon from "@mui/icons-material/AddCard";
import { NEW_PRICING_PLAN } from "@/utils/constants";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { currencyConvert } from "@/utils/HelperFunctions";
import { upgradejobPayment } from "@/redux/slices/job";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";

const StyledButton = styled(Button)({
  color: "#ffff",
  padding: "10px",
  borderRadius: "10px",
  border: "2px solid #e7eaef",
  background: "#00339B !important",
  textTransform: "capitalize",
  width: "100%",
  marginBottom: "10px",
});
const BasicButton = styled(Button)({
  color: "#ffff",
  // padding: "10px",
  borderRadius: "10px",
  border: "2px solid #e7eaef",
  background: "#4fa9ff !important",
  textTransform: "capitalize",
  width: "100%",
  marginBottom: "10px",
});
const packageList = [
  "1 Featured job post",
  "Unlimited job applicants",
  "Priority in job searches",
  "Marketing on Recroot social media handles",
  "20 relevant profiles from the candidate database",
  "Dedicated candidate manager",
  "Job expires in 1 month",
];
function Jobpayment() {
  const jobDet = useSelector((data) => data.jobs.upJob);
  const country = Cookies.get("country");
  const { push } = useRouter();
  const county = country === "IN";
  const subscriptionPrice = county ? 1600 : 35;
  const finalPrice = subscriptionPrice * jobDet?.length;
  const dispatch = useDispatch();
  useEffect(() => {
    if (jobDet === "") {
      push("/Employer/Dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jobDet]);

  const handleNavigate = () => {
    dispatch(
      upgradejobPayment({
        ids: jobDet,
        payment: finalPrice,
        country: country,
      })
    ).then(push("/Employer/Jobpayment/Payment"));
  };
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
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: "2rem",
            fontWeight: 600,
            textAlign: "center",
            m: "45px auto 0 auto",
          }}
        >
          Upgrade To Premium
        </Typography>
      </Box>
      <Container>
        <Card
          sx={{
            background: "#F2F8FD",
            borderRadius: "15px",
            padding: { xs: "10px", md: "65px" },
            position: "relative",
            top: "-80px",
          }}
        >
          <Card sx={{ padding: "20px" }}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                sm={8}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: { xs: "30px", sm: "30px", md: "60px" },
                  alignItems: "center",
                  p: "10px",
                }}
              >
                <Box
                  sx={{
                    background: "#015FB1",
                    p: "15px",
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: { xs: "30px", sm: "30px", md: "60px" },
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
                          fontSize: "40px",
                          lineHeight: "145%",
                          color: "#fff",
                        }}
                      >
                        Premium
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Inter'",
                        fontStyle: "normal",
                        fontWeight: 800,
                        fontSize: "40px",
                        lineHeight: "145%",
                        color: "#fff",
                      }}
                    >
                      {county
                        ? currencyConvert(finalPrice, "Indian Rupee", 2)
                        : currencyConvert(finalPrice, "US Dollar", 2)}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "'Inter'",
                        fontStyle: "normal",
                        fontWeight: 600,
                        fontSize: "30px",
                        lineHeight: "145%",
                        color: "#fff",
                      }}
                    >
                      / Month
                    </Typography>
                  </Box>
                </Box>
                <div className="pricig-body">
                  <ul style={{ marginBottom: "20px", ml: "-40px" }}>
                    {packageList?.map((de, id) => (
                      <li key={id} style={{ listStyleType: "none" }}>
                        <Stack
                          direction={"row"}
                          sx={{
                            alignItems: "center",
                          }}
                          gap={2}
                        >
                          <CheckCircleOutlineTwoToneIcon
                            fontSize="small"
                            sx={{ color: "#1097CD" }}
                          />
                          <Typography fontSize={"20px"}>{de}</Typography>
                        </Stack>
                      </li>
                    ))}
                  </ul>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                sx={{ display: "flex", padding: "10px" }}
              >
                <Grid container spacing={2}>
                  <Grid item md={12}></Grid>
                  <>
                    <Grid
                      item
                      xs={6}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        textAlign: "right",
                      }}
                    >
                      <CustomTypography
                        fontSize={"20px"}
                        sx={{ textAlign: "right" }}
                      >
                        Job Count
                      </CustomTypography>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "right",
                      }}
                    >
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Typography fontWeight={600} fontSize={"30px"}>
                          {jobDet?.length}
                        </Typography>
                      </Box>
                    </Grid>
                  </>
                  <Grid
                    item
                    xs={6}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      textAlign: "right",
                    }}
                  >
                    <Typography fontSize={"20px"}>Sub Total</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      textAlign: "right",
                    }}
                  >
                    <Typography fontSize={"20px"}>
                      {county
                        ? currencyConvert(finalPrice, "Indian Rupee", 2)
                        : currencyConvert(finalPrice, "US Dollar", 2)}
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      textAlign: "right",
                    }}
                  >
                    <Typography fontSize={"30px"}>Total</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      textAlign: "right",
                    }}
                  >
                    <Typography fontSize={"30px"}>
                      {county
                        ? currencyConvert(finalPrice, "Indian Rupee", 2)
                        : currencyConvert(finalPrice, "US Dollar", 2)}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      textAlign: "right",
                    }}
                  >
                    <StyledButton
                      variant="contained"
                      // endIcon={}
                      sx={{ width: "100%" }}
                      color="success"
                      onClick={() => handleNavigate()}
                    >
                      Card <AddCardIcon />
                    </StyledButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Card>
      </Container>
    </div>
  );
}

export default Jobpayment;
