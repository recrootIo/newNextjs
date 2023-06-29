import React from "react";
import { Box, Grid, Container, Button, Card } from "@mui/material";
import Image from "next/image";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import styles from "./newhome.module.css";

const SuccessPrecentage = () => {
  return (
    <Box sx={{ mt: "80px" }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CustomTypography
            sx={{
              fontSize: "30px",
              fontWeight: 700,
              color: "#01313F",
              textAlign: "center",
              width: { xs: "100%", md: "70%" },
            }}
          >
            We are proud to be the only recruitment platform with hiring Success
            Percentage in the high 90s
          </CustomTypography>
          <CustomTypography
            sx={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#01313F",
              textAlign: "center",
              mt: "12px",
            }}
          >
            Our success Percentage across Countries
          </CustomTypography>
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
    </Box>
  );
};

export default SuccessPrecentage;
