import React from "react";
import { Box, Grid, Container, Button, CardContent, Card } from "@mui/material";
import Image from "next/image";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";

const LevelUp = () => {
  return (
    <Box
      sx={{
        // backgroundImage: `url("/newhome_images/guaranteed-hiring-bg.svg")`,
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        // bgcolor: "#edfcff",
        // height: "725px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ bgcolor: "#FFEEEF", width: "100%" }}>
        <Container sx={{ bgcolor: "#FFEEEF" }}>
          <CustomTypography
            sx={{
              fontSize: "33px",
              fontWeight: 700,
              color: "#01313F",
              textAlign: "center",
              mb: "120px",
            }}
          >
            Ready to level up?
          </CustomTypography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  bgcolor: "#0DBDE0",
                  borderRadius: "20px",
                  position: "relative",
                  overflow: "visible",
                }}
              >
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={12}
                      md={6}
                      sx={{
                        height: "300px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        src="/newhome_images/levelup-recruiter.png"
                        alt="Picture of the Hire Talents"
                        priority={true}
                        width="306"
                        height="406"
                        style={{
                          position: "absolute",
                          zIndex: 2,
                          top: "-90px",
                        }}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={6}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <CustomTypography
                        sx={{
                          fontSize: "28px",
                          fontWeight: 700,
                          color: "#FFFFFF",
                          textAlign: "center",
                        }}
                      >
                        Are You a Recruiter?
                      </CustomTypography>
                      <Button
                        variant="contained"
                        sx={{
                          color: "#01313F",
                          bgcolor: "#FFFFFF !important",
                          borderRadius: "10px",
                          minWidth: "148px",
                          fontWeight: 700,
                        }}
                      >
                        Get Started
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} sx={{ mt: { xs: "100px", md: "0px" } }}>
              <Card
                sx={{
                  bgcolor: "#0DBDE0",
                  borderRadius: "20px",
                  position: "relative",
                  overflow: "visible",
                }}
              >
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={12}
                      md={6}
                      sx={{
                        height: "300px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        src="/newhome_images/levelup-candidate-img.png"
                        alt="Picture of the Hire Talents"
                        priority={true}
                        width="246"
                        height="370"
                        style={{
                          position: "absolute",
                          zIndex: 1,
                          top: "-90px",
                        }}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={6}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <CustomTypography
                        sx={{
                          fontSize: "28px",
                          fontWeight: 700,
                          color: "#FFFFFF",
                          textAlign: "center",
                        }}
                      >
                        Are You a Candidate?
                      </CustomTypography>
                      <Button
                        variant="contained"
                        sx={{
                          color: "#01313F",
                          bgcolor: "#FFFFFF !important",
                          borderRadius: "10px",
                          minWidth: "148px",
                          fontWeight: 700,
                        }}
                      >
                        EXPLORE MORE
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default LevelUp;
