import React from "react";
import { Box, Grid, Container, Button, Card } from "@mui/material";
import Image from "next/image";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import styles from "./newhome.module.css";

const SuccessPrecentage = () => {
  return (
    <Box sx={{ bgcolor: "#E3F7FE" }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {" "}
          <Image
            src="/newhome_images/guaranteed-hiring-blue-bubble.png"
            alt="Background bubble of guaranteed hiring section"
            priority={true}
            width="260"
            height="260"
            style={{
              position: "absolute",
              left: "34px",
            }}
          />
          <CustomTypography
            sx={{
              fontSize: "33px",
              fontWeight: 700,
              color: "#01313F",
              textAlign: "center",
              width: { xs: "100%", md: "70%" },
              position: "relative",
            }}
          >
            Our success Percentage across Countries
          </CustomTypography>
          <div>
            <CustomTypography
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#01313F",
                textAlign: "center",
                mt: "12px",
              }}
            >
              {" "}
              We are proud to be the only recruitment platform with hiring
              Success Percentage in the high 90s
            </CustomTypography>
          </div>
        </Box>
        <Box sx={{ mt: "150px" }}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={3}>
              <Box className={styles.successGreyBox}>
                <Box className={styles.successImgBox}>
                  <Image
                    src="/newhome_images/succces-precentage-circle-bg.png"
                    alt="Circle Picture of the Success Precentage"
                    priority={true}
                    width="180"
                    height="180"
                    style={{
                      position: "absolute",
                      position: "absolute",
                      top: "-90px",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  />
                  <Image
                    src="/newhome_images/india-img.png"
                    alt="India Tier 1 image of the Success Precentage"
                    priority={true}
                    width="90"
                    height="90"
                    style={{
                      position: "absolute",
                      position: "absolute",
                      top: "-49px",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  />
                </Box>
                <CustomTypography className={styles.successCountryTypo}>
                  India - Tier 1
                </CustomTypography>
                <Box
                  sx={{
                    borderRadius: "10px",
                    bgcolor: "#D2E3FE",
                    width: "100%",
                  }}
                >
                  <CustomTypography className={styles.successPrecentageTypo}>
                    100%
                  </CustomTypography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box className={styles.successBlueBox}>
                <Box className={styles.successImgBox}>
                  <Image
                    src="/newhome_images/succces-precentage-circle-bg.png"
                    alt="Circle Picture of the Success Precentage"
                    priority={true}
                    width="180"
                    height="180"
                    style={{
                      position: "absolute",
                      top: "-90px",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  />
                  <Image
                    src="/newhome_images/india-img.png"
                    alt="India Tier 2 image of the Success Precentage"
                    priority={true}
                    width="90"
                    height="90"
                    style={{
                      position: "absolute",
                      top: "-49px",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  />
                </Box>
                <CustomTypography className={styles.successCountryTypo}>
                  India - Tier 2
                </CustomTypography>
                <Box
                  sx={{
                    borderRadius: "10px",
                    bgcolor: "#B0F8FD",
                    width: "100%",
                  }}
                >
                  <CustomTypography className={styles.successPrecentageTypo}>
                    90%
                  </CustomTypography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} md={3} sx={{ mt: { xs: "80px", md: "0px" } }}>
              <Box className={styles.successGreyBox}>
                <Box className={styles.successImgBox}>
                  <Image
                    src="/newhome_images/succces-precentage-circle-bg.png"
                    alt="Circle Picture of the Success Precentage"
                    priority={true}
                    width="180"
                    height="180"
                    style={{
                      position: "absolute",
                      position: "absolute",
                      top: "-90px",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  />
                  <Image
                    src="/newhome_images/phillipines-img.png"
                    alt="phillipines image of the Success Precentage"
                    priority={true}
                    width="70"
                    height="70"
                    style={{
                      position: "absolute",
                      top: "-47px",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  />
                </Box>
                <CustomTypography className={styles.successCountryTypo}>
                  Philippines
                </CustomTypography>
                <Box
                  sx={{
                    borderRadius: "10px",
                    bgcolor: "#D2E3FE",
                    width: "100%",
                  }}
                >
                  <CustomTypography className={styles.successPrecentageTypo}>
                    98.5%
                  </CustomTypography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} md={3} sx={{ mt: { xs: "80px", md: "0px" } }}>
              <Box className={styles.successBlueBox}>
                <Box className={styles.successImgBox}>
                  <Image
                    src="/newhome_images/succces-precentage-circle-bg.png"
                    alt="Circle Picture of the Success Precentage"
                    priority={true}
                    width="180"
                    height="180"
                    style={{
                      position: "absolute",
                      top: "-90px",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  />
                  <Image
                    src="/newhome_images/singapore-img.png"
                    alt="Singapore image of the Success Precentage"
                    priority={true}
                    width="100"
                    height="100"
                    style={{
                      position: "absolute",
                      top: "-30px",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  />
                </Box>
                <CustomTypography className={styles.successCountryTypo}>
                  Singapore
                </CustomTypography>
                <Box
                  sx={{
                    borderRadius: "10px",
                    bgcolor: "#B0F8FD",
                    width: "100%",
                  }}
                >
                  <CustomTypography className={styles.successPrecentageTypo}>
                    99.1%
                  </CustomTypography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mt: { xs: "80px", md: "120px" } }}>
            <Grid item xs={6} md={3}>
              <Box className={styles.successGreyBox}>
                <Box className={styles.successImgBox}>
                  <Image
                    src="/newhome_images/succces-precentage-circle-bg.png"
                    alt="Circle Picture of the Success Precentage"
                    priority={true}
                    width="180"
                    height="180"
                    style={{
                      position: "absolute",
                      position: "absolute",
                      top: "-90px",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  />
                  <Image
                    src="/newhome_images/dubai-img.png"
                    alt="Dubai image of the Success Precentage"
                    priority={true}
                    width="90"
                    height="90"
                    style={{
                      position: "absolute",
                      top: "-39px",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  />
                </Box>
                <CustomTypography className={styles.successCountryTypo}>
                  Dubai
                </CustomTypography>
                <Box
                  sx={{
                    borderRadius: "10px",
                    bgcolor: "#D2E3FE",
                    width: "100%",
                  }}
                >
                  <CustomTypography className={styles.successPrecentageTypo}>
                    96%
                  </CustomTypography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box className={styles.successBlueBox}>
                <Box className={styles.successImgBox}>
                  <Image
                    src="/newhome_images/succces-precentage-circle-bg.png"
                    alt="Circle Picture of the Success Precentage"
                    priority={true}
                    width="180"
                    height="180"
                    style={{
                      position: "absolute",
                      top: "-90px",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  />
                  <Image
                    src="/newhome_images/australia-img.png"
                    alt="Australia image of the Success Precentage"
                    priority={true}
                    width="90"
                    height="90"
                    style={{
                      position: "absolute",
                      top: "-39px",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  />
                </Box>
                <CustomTypography className={styles.successCountryTypo}>
                  Australia
                </CustomTypography>
                <Box
                  sx={{
                    borderRadius: "10px",
                    bgcolor: "#B0F8FD",
                    width: "100%",
                  }}
                >
                  <CustomTypography className={styles.successPrecentageTypo}>
                    97.5%
                  </CustomTypography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} md={3} sx={{ mt: { xs: "80px", md: "0px" } }}>
              <Box className={styles.successGreyBox}>
                <Box className={styles.successImgBox}>
                  <Image
                    src="/newhome_images/succces-precentage-circle-bg.png"
                    alt="Circle Picture of the Success Precentage"
                    priority={true}
                    width="180"
                    height="180"
                    style={{
                      position: "absolute",
                      position: "absolute",
                      top: "-90px",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  />
                  <Image
                    src="/newhome_images/usa-img.png"
                    alt="USA image of the Success Precentage"
                    priority={true}
                    width="90"
                    height="90"
                    style={{
                      position: "absolute",
                      top: "-39px",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  />
                </Box>
                <CustomTypography className={styles.successCountryTypo}>
                  USA
                </CustomTypography>
                <Box
                  sx={{
                    borderRadius: "10px",
                    bgcolor: "#D2E3FE",
                    width: "100%",
                  }}
                >
                  <CustomTypography className={styles.successPrecentageTypo}>
                    98%
                  </CustomTypography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} md={3} sx={{ mt: { xs: "80px", md: "0px" } }}>
              <Box className={styles.successBlueBox}>
                <Box className={styles.successImgBox}>
                  <Image
                    src="/newhome_images/succces-precentage-circle-bg.png"
                    alt="Circle Picture of the Success Precentage"
                    priority={true}
                    width="180"
                    height="180"
                    style={{
                      position: "absolute",
                      //  bottom: "50%"
                      top: "-90px",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  />
                  <Image
                    src="/newhome_images/uk-img.png"
                    alt="UK image of the Success Precentage"
                    priority={true}
                    width="60"
                    height="60"
                    style={{
                      position: "absolute",
                      top: "-49px",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  />
                </Box>
                <CustomTypography className={styles.successCountryTypo}>
                  UK
                </CustomTypography>
                <Box
                  sx={{
                    borderRadius: "10px",
                    bgcolor: "#B0F8FD",
                    width: "100%",
                  }}
                >
                  <CustomTypography className={styles.successPrecentageTypo}>
                    97.5%
                  </CustomTypography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
        <path
          fill="#FFF"
          fillOpacity="1"
          d="M0,96L80,117.3C160,139,320,181,480,170.7C640,160,800,96,960,74.7C1120,53,1280,75,1360,85.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </Box>
  );
};

export default SuccessPrecentage;
