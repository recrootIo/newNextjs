import React from "react";
import { Box, Grid, Container, Button, CardContent, Card } from "@mui/material";
import Image from "next/image";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
import styles from "./newhome.module.css";

const GuaranteedHiring = () => {
  return (
    <Box>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
        <path
          fill="#edfcff"
          fillOpacity="1"
          d="M0,96L80,117.3C160,139,320,181,480,170.7C640,160,800,96,960,74.7C1120,53,1280,75,1360,85.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <Box
        sx={{
          bgcolor: "#edfcff",
        }}
      >
        <Container>
          <Grid container spacing={4}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
              }}
            >
              <Image
                src="/newhome_images/guaranteed-hiring-blue-bubble.png"
                alt="Background bubble of guaranteed hiring section"
                priority={true}
                width="150"
                height="150"
                style={{
                  position: "absolute",
                  top: "580px",
                  left: "111px",
                }}
              />
              <Image
                src="/newhome_images/guaranteed-hiring-blue-bubble.png"
                alt="Background bubble of guaranteed hiring section"
                priority={true}
                width="200"
                height="200"
                className={styles.GuaranteedHiringBubbleb}
                style={{
                  position: "absolute",
                  top: "-3px",
                  left: "296px",
                }}
              />
              <Image
                src="/newhome_images/guaranteed-hiring-blue-bubble.png"
                alt="Background bubble of guaranteed hiring section"
                priority={true}
                width="250"
                height="250"
                className={styles.GuaranteedHiringBubble}
              />
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                <CustomTypography
                  sx={{
                    fontSize: "33px",
                    fontWeight: 700,
                    color: "#01313F",
                    textAlign: { xs: "center", md: "flex-start" },
                  }}
                >
                  Guaranteed Hiring
                </CustomTypography>
                <div>
                <CustomTypography
                  sx={{ fontSize: "16px", fontWeight: 400, color: "#01313F" }}
                >
                  We are the only recruitment platform that ensures our
                  employers hire the right candidates for their open positions,
                  with a success rate of over 90%.
                </CustomTypography>
                </div>
              </Box>
              <Grid container spacing={2} sx={{ mt: "30px" }}>
                <Grid
                  item
                  xs={6}
                  sm={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card
                    sx={{
                      height: { xs: "168px", sm: "185px" },
                      width: { xs: "168px", sm: "185px" },
                      bgcolor: "#FBF3E9",
                      borderRadius: "50%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      justifyContent: "center",
                      alignItems: "center",
                      p: "16px",
                      border: "10px solid #f7debe",
                    }}
                  >
                    <Image
                      src="/newhome_images/ai-brain-icon.png"
                      alt="Stroke icon of the Guaranteed hiring cards"
                      priority={true}
                      width="46"
                      height="46"
                    />
                    <Box>
                      <CustomTypography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "#01313F",
                          textAlign: "center",
                        }}
                      >
                        AI-powered talent acquisition solution
                      </CustomTypography>
                    </Box>
                  </Card>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sm={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card
                    sx={{
                      height: { xs: "168px", sm: "185px" },
                      width: { xs: "168px", sm: "185px" },
                      bgcolor: "#DBFFF2",
                      borderRadius: "50%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      justifyContent: "center",
                      alignItems: "center",
                      p: "16px",
                      position: "relative",
                      border: "10px solid #c1f7e4",
                    }}
                  >
                    <Image
                      src="/newhome_images/database-access-icon.png"
                      alt="Stroke icon of the Guaranteed hiring cards"
                      priority={true}
                      width="46"
                      height="46"
                    />
                    <Box>
                      <CustomTypography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "#01313F",
                          textAlign: "center",
                        }}
                      >
                        Access to the candidate database
                      </CustomTypography>
                    </Box>
                  </Card>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sm={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card
                    sx={{
                      height: { xs: "168px", sm: "185px" },
                      width: { xs: "168px", sm: "185px" },
                      bgcolor: "#EAEBF4",
                      borderRadius: "50%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      justifyContent: "center",
                      alignItems: "center",
                      p: "16px",
                      position: "relative",
                      border: "10px solid #cdd2f7",
                    }}
                  >
                    <Image
                      src="/newhome_images/stopwatch-icon.png"
                      alt="Stopwatch icon of the Guaranteed hiring cards"
                      priority={true}
                      width="46"
                      height="46"
                    />
                    <Box>
                      <CustomTypography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "#01313F",
                          textAlign: "center",
                        }}
                      >
                        Ensure timely recruitment
                      </CustomTypography>
                    </Box>
                  </Card>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sm={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card
                    sx={{
                      height: { xs: "168px", sm: "185px" },
                      width: { xs: "168px", sm: "185px" },
                      bgcolor: "#E3F7FE",
                      borderRadius: "50%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      justifyContent: "center",
                      alignItems: "center",
                      p: "16px",
                      position: "relative",
                      border: "10px solid #bae7f7",
                    }}
                  >
                    <Image
                      src="/newhome_images/ensure-success-icon.png"
                      alt="Ensure success icon of the Guaranteed hiring cards"
                      priority={true}
                      width="46"
                      height="46"
                    />
                    <Box>
                      <CustomTypography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "#01313F",
                          textAlign: "center",
                        }}
                      >
                        Ensure a 90%+ success rate
                      </CustomTypography>
                    </Box>
                  </Card>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sm={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card
                    sx={{
                      height: { xs: "168px", sm: "185px" },
                      width: { xs: "168px", sm: "185px" },
                      bgcolor: "#EAEBF4",
                      borderRadius: "50%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      justifyContent: "center",
                      alignItems: "center",
                      p: "16px",
                      position: "relative",
                      border: "10px solid #c8cdfa",
                    }}
                  >
                    <Image
                      src="/newhome_images/customer-service-icon.png"
                      alt="Ensure success icon of the Guaranteed hiring cards"
                      priority={true}
                      width="46"
                      height="46"
                    />
                    <Box>
                      <CustomTypography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "#01313F",
                          textAlign: "center",
                        }}
                      >
                        Assistance from candidate managers
                      </CustomTypography>
                    </Box>
                  </Card>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sm={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card
                    sx={{
                      height: { xs: "168px", sm: "185px" },
                      width: { xs: "168px", sm: "185px" },
                      bgcolor: "#FFEEEF",
                      borderRadius: "50%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      justifyContent: "center",
                      alignItems: "center",
                      p: "16px",
                      position: "relative",
                      border: "10px solid #ffd1d4",
                    }}
                  >
                    <Image
                      src="/newhome_images/time-saving-icon.png"
                      alt="Time saving icon of the Guaranteed hiring cards"
                      priority={true}
                      width="46"
                      height="46"
                    />
                    <Box>
                      <CustomTypography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "#01313F",
                          textAlign: "center",
                        }}
                      >
                        Maximize time savings in hiring
                      </CustomTypography>
                    </Box>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <Image
                  src="/newhome_images/image-and-card-edited.png"
                  alt="Picture of the Guaranteed hiring"
                  priority={true}
                  width="526"
                  height="526"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default GuaranteedHiring;
