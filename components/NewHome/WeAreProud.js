/* eslint-disable @next/next/no-img-element */
"use client";
import { PRIMARY } from "../../theme/colors";
import { MAX } from "../../theme/spacings";
import CounterUpCom from "../../ui-components/CounterUpCom/CounterUpCom";
import { CustomTypography } from "../../ui-components/CustomTypography/CustomTypography";
import { Grid, Stack, Card, CardContent, Container, Box } from "@mui/material";
import Image from "next/image";
import styles from "./newhome.module.css";

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
      <Box sx={{ bgcolor: "#edfcff", width: "100%" }}>
        <Container>
          <Grid
            container
            className="numberclz"
            sx={{
              gap: { md: "1px", xs: "20px", sm: "20px" },
            }}
          >
            <Grid item xs={12} md={12}>
              <Box sx={{ position: "relative" }}>
                <CustomTypography
                  sx={{
                    fontSize: "33px",
                    fontWeight: 700,
                    color: "#01313F",
                    textAlign: "center",
                    mb: { xs: "20px", md: "30px" },
                  }}
                >
                  We Are Proud Of Our Work
                </CustomTypography>
                <Image
                  src="/newhome_images/guaranteed-hiring-blue-bubble.png"
                  alt="Background bubble of guaranteed hiring section"
                  priority={true}
                  width="300"
                  height="300"
                  className={styles.WeAreProudbubble}
                />
              </Box>
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
                  alignItems: {
                    md: "flex-end",
                    sm: "flex-end",
                    xs: "flex-end",
                  },
                  flexWrap: "wrap",
                  gap: "20px",
                }}
              >
                <Card className="numcardone userDetailCard">
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
                    <div>
                      <CustomTypography
                        sx={{ fontSize: "18px" }}
                        fontWeight="500"
                      >
                        Total jobs
                      </CustomTypography>
                    </div>
                  </CardContent>
                </Card>

                <Card className="numcardtwo userDetailCard">
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
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
                    <div>
                      <CustomTypography
                        sx={{ fontSize: "18px", textAlign: "center" }}
                        fontWeight="500"
                      >
                        Total candidates registered
                      </CustomTypography>
                    </div>
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
                  display: "flex",
                  flexDirection: { md: "column", sm: "row", xs: "row" },
                  justifyContent: "center",
                  alignItems: {
                    md: "center",
                    sm: "flex-end",
                    xs: "flex-end",
                  },
                  flexWrap: "wrap",
                  gap: "20px",
                }}
              >
                <Card className="numcardthree userDetailCard">
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <CustomTypography
                      sx={{
                        fontSize: "35px",
                        fontFamily: "Inter-bold",
                        fontWeight: "700",
                      }}
                    >
                      <CounterUpCom
                        endValue={130}
                        sectionSelect="OurNumHome"
                        sx={{ textAlign: "center" }}
                      />
                      +
                    </CustomTypography>
                    <div>
                      <CustomTypography
                        sx={{ fontSize: "18px", textAlign: "center" }}
                        fontWeight="500"
                      >
                        Total companies actively hiring
                      </CustomTypography>
                    </div>
                  </CardContent>
                </Card>

                <Card className="numcardfour userDetailCard">
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
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
                    <div>
                      <CustomTypography
                        sx={{ fontSize: "18px", textAlign: "center" }}
                        fontWeight="500"
                      >
                        Total job categories available
                      </CustomTypography>
                    </div>
                  </CardContent>
                </Card>

                <Card className="numcardfive userDetailCard">
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
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
                    <div>
                      <CustomTypography
                        sx={{ fontSize: "18px", textAlign: "center" }}
                        fontWeight="500"
                      >
                        Total job applications submitted
                      </CustomTypography>
                    </div>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default WeAreProud;
