/* eslint-disable @next/next/no-img-element */
"use client";
import { PRIMARY } from "../../theme/colors";
import { MAX } from "../../theme/spacings";
import CounterUpCom from "../../ui-components/CounterUpCom/CounterUpCom";
import { CustomTypography } from "../../ui-components/CustomTypography/CustomTypography";
import { Grid, Stack, Card, CardContent, Container, Box } from "@mui/material";
import Image from "next/image";
// import "./homepage.css";

const WeAreProud = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      id="OurNumHome"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
        <path
          fill="#edfcff"
          fill-opacity="1"
          d="M0,96L80,117.3C160,139,320,181,480,170.7C640,160,800,96,960,74.7C1120,53,1280,75,1360,85.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <Box sx={{ bgcolor: "#edfcff", width: "100%" }}>
        <Container>
          <Grid
            container
            className="numberclz"
            sx={{ gap: { md: "1px", xs: "20px", sm: "20px" } }}
          >
            <Grid item xs={12} md={12}>
              <CustomTypography
                sx={{
                  fontSize: "30px",
                  fontWeight: 700,
                  color: "#01313F",
                  textAlign: "center",
                  mb: "80px",
                  // mt: "80px",
                }}
              >
                We are proud of our work
              </CustomTypography>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                display: "flex",
                justifyContent: {
                  md: "flex-start",
                  xs: "center",
                  sm: "center",
                },
              }}
            >
              <Image
                src="/newhome_images/we-are-proud-img.png"
                alt="Picture of the We are proud section"
                priority={true}
                width="493"
                height="584"
                data-aos="fade-up"
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={3.5}
              sx={{
                display: "flex",
                justifyContent: { md: "flex-end", sm: "center", xs: "center" },
                alignItems: "center",
              }}
            >
              <Stack
                sx={{
                  width: "100%",
                  flexDirection: { md: "column", sm: "row", xs: "row" },
                  justifyContent: "center",
                  alignItems: { md: "center", sm: "flex-end", xs: "flex-end" },
                  flexWrap: "wrap",
                  gap: "20px",
                }}
              >
                <Card className="numcard numcardone userDetailCard">
                  <CardContent>
                    <CustomTypography
                      sx={{
                        fontSize: "35px",
                        fontFamily: "Inter-bold",
                        fontWeight: "700",
                      }}
                    >
                      <CounterUpCom endValue={130} sectionSelect="OurNumHome" />
                      +
                    </CustomTypography>
                    <CustomTypography
                      sx={{ fontSize: "18px" }}
                      fontWeight="500"
                    >
                      Total jobs
                    </CustomTypography>
                  </CardContent>
                </Card>

                <Card className="numcard numcardtwo userDetailCard">
                  <CardContent>
                    <CustomTypography
                      sx={{
                        fontSize: "35px",
                        fontFamily: "Inter-bold",
                        fontWeight: "700",
                      }}
                    >
                      <CounterUpCom endValue={130} sectionSelect="OurNumHome" />
                      +
                    </CustomTypography>
                    <CustomTypography
                      sx={{ fontSize: "18px" }}
                      fontWeight="500"
                    >
                      Total candidates registered
                    </CustomTypography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid
              item
              xs={12}
              md={3.4}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "align-items",
              }}
            >
              <Stack
                sx={{
                  width: "100%",
                  flexDirection: { md: "column", sm: "row", xs: "row" },
                  justifyContent: "center",
                  alignItems: { md: "center", sm: "flex-end", xs: "flex-end" },
                  flexWrap: "wrap",
                  gap: "20px",
                }}
              >
                <Card className="numcard numcardthree userDetailCard">
                  <CardContent>
                    <CustomTypography
                      sx={{
                        fontSize: "35px",
                        fontFamily: "Inter-bold",
                        fontWeight: "700",
                      }}
                    >
                      <CounterUpCom endValue={130} sectionSelect="OurNumHome" />
                      +
                    </CustomTypography>
                    <CustomTypography
                      sx={{ fontSize: "18px" }}
                      fontWeight="500"
                    >
                      Total companies actively hiring
                    </CustomTypography>
                  </CardContent>
                </Card>

                <Card className="numcard numcardfour userDetailCard">
                  <CardContent>
                    <CustomTypography
                      sx={{
                        fontSize: "35px",
                        fontFamily: "Inter-bold",
                        fontWeight: "700",
                      }}
                    >
                      <CounterUpCom endValue={130} sectionSelect="OurNumHome" />
                      +
                    </CustomTypography>
                    <CustomTypography
                      sx={{ fontSize: "18px" }}
                      fontWeight="500"
                    >
                      Total job categories available
                    </CustomTypography>
                  </CardContent>
                </Card>

                <Card className="numcard numcardfive userDetailCard">
                  <CardContent>
                    <CustomTypography
                      sx={{
                        fontSize: "35px",
                        fontFamily: "Inter-bold",
                        fontWeight: "700",
                      }}
                    >
                      <CounterUpCom endValue={130} sectionSelect="OurNumHome" />
                      +
                    </CustomTypography>
                    <CustomTypography
                      sx={{ fontSize: "18px" }}
                      fontWeight="500"
                    >
                      Total job applications submitted
                    </CustomTypography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#edfcff"
          fill-opacity="1"
          d="M0,96L80,117.3C160,139,320,181,480,170.7C640,160,800,96,960,74.7C1120,53,1280,75,1360,85.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default WeAreProud;
