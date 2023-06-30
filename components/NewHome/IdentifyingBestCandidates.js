import React from "react";
import { Box, Grid, Container, Button, CardContent, Card } from "@mui/material";
import Image from "next/image";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";

const IdentifyingBestCandidates = () => {
  return (
    <Box>
      <Container sx={{ pb: "40px" }}>
        <Grid container spacing={2}>
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
                src="/newhome_images/identify-best-candidate-edit2.png"
                alt="Picture of the Identifying best candidates"
                priority={true}
                width="526"
                height="526"
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <CustomTypography
                sx={{ fontSize: "33px", fontWeight: 700, color: "#01313F" }}
              >
                Identifying Best Candidates with AI
              </CustomTypography>
            </Box>
            <Grid container spacing={2} sx={{ mt: "20px" }}>
              <Grid item xs={6} md={4}>
                <Card
                  sx={{
                    bgcolor: "#FBF3E9",
                    borderRadius: "15px",
                    minHeight: { xs: "182px", md: "236px", lg: "182px" },
                    position: "relative",
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      pb: "10px !important",
                      p: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "60px",
                      }}
                    >
                      <Image
                        src="/newhome_images/AI-icon-img.png"
                        alt="Picture of the utilize best AI tools card"
                        priority={true}
                        width="30"
                        height="30"
                      />
                    </Box>
                    <Image
                      src="/corn-img.png"
                      alt="Background image of the card"
                      priority={true}
                      width="30"
                      height="30"
                      style={{
                        position: "absolute",
                        top: "116px",
                        left: "10px",
                      }}
                    />
                    <Image
                      src="/corn-img.png"
                      alt="Background image of the card"
                      priority={true}
                      width="40"
                      height="40"
                      style={{
                        position: "absolute",
                        top: "15px",
                        right: "20px",
                        transform: "rotate(90deg)",
                      }}
                    />
                    <Image
                      src="/shaded-ring-ng.png"
                      alt="Background image of the card"
                      priority={true}
                      width="40"
                      height="40"
                      style={{
                        position: "absolute",
                        top: "116px",
                        // left: "10px",
                      }}
                    />
                    <CustomTypography
                      sx={{
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "#01313F",
                        textAlign: "center",
                      }}
                    >
                      Utilize the best AI tools in the industry
                    </CustomTypography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={4}>
                <Card
                  sx={{
                    bgcolor: "#DBFFF2",
                    borderRadius: "15px",
                    minHeight: { xs: "182px", md: "236px", lg: "182px" },
                    position: "relative",
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      pb: "10px !important",
                      p: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "60px",
                      }}
                    >
                      <Image
                        src="/newhome_images/automate-process-icon.png"
                        alt="Picture of the utilize best AI tools card"
                        priority={true}
                        width="30"
                        height="30"
                      />
                    </Box>
                    <Image
                      src="/shaded-ring-ng.png"
                      alt="Background image of the card"
                      priority={true}
                      width="40"
                      height="40"
                      style={{
                        position: "absolute",
                        top: "116px",
                        // left: "10px",
                      }}
                    />
                    <Image
                      src="/corn-img.png"
                      alt="Background image of the card"
                      priority={true}
                      width="40"
                      height="40"
                      style={{
                        position: "absolute",
                        top: "15px",
                        right: "20px",
                        transform: "rotate(45deg)",
                      }}
                    />
                    <Image
                      src="/shaded-ring-ng.png"
                      alt="Background image of the card"
                      priority={true}
                      width="30"
                      height="30"
                      style={{
                        position: "absolute",
                        top: "48px",
                        left: "10px",
                      }}
                    />
                    <CustomTypography
                      sx={{
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "#01313F",
                        textAlign: "center",
                      }}
                    >
                      Automate the discovery of the best candidates who meet the
                      job criteria
                    </CustomTypography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={4}>
                <Card
                  sx={{
                    bgcolor: "#EAEBF4",
                    borderRadius: "15px",
                    minHeight: { xs: "182px", md: "236px", lg: "182px" },
                    position: "relative",
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      pb: "10px !important",
                      p: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "60px",
                      }}
                    >
                      <Image
                        src="/newhome_images/priority-icon.png"
                        alt="Picture of the utilize best AI tools card"
                        priority={true}
                        width="30"
                        height="30"
                      />
                    </Box>
                    <Image
                      src="/shaded-ring-ng.png"
                      alt="Background image of the card"
                      priority={true}
                      width="40"
                      height="40"
                      style={{
                        position: "absolute",
                        top: "116px",
                        // left: "10px",
                      }}
                    />
                    <Image
                      src="/corn-img.png"
                      alt="Background image of the card"
                      priority={true}
                      width="40"
                      height="40"
                      style={{
                        position: "absolute",
                        top: "15px",
                        right: "20px",
                        transform: "rotate(105deg)",
                      }}
                    />
                    <Image
                      src="/corn-img.png"
                      alt="Background image of the card"
                      priority={true}
                      width="30"
                      height="30"
                      style={{
                        position: "absolute",
                        top: "116px",
                        left: "10px",
                      }}
                    />
                    <CustomTypography
                      sx={{
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "#01313F",
                        textAlign: "center",
                      }}
                    >
                      Factors given high priority for matching: skills,
                      experience, location, salary, and notice period
                    </CustomTypography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={4}>
                <Card
                  sx={{
                    bgcolor: "#E3F7FE",
                    borderRadius: "15px",
                    minHeight: { xs: "182px", md: "236px", lg: "182px" },
                    position: "relative",
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      pb: "10px !important",
                      p: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "60px",
                      }}
                    >
                      <Image
                        src="/newhome_images/technical-bias-icon.png"
                        alt="Picture of the utilize best AI tools card"
                        priority={true}
                        width="30"
                        height="30"
                      />
                    </Box>
                    <Image
                      src="/shaded-ring-ng.png"
                      alt="Background image of the card"
                      priority={true}
                      width="40"
                      height="40"
                      style={{
                        position: "absolute",
                        top: "116px",
                        // left: "10px",
                      }}
                    />
                    <Image
                      src="/corn-img.png"
                      alt="Background image of the card"
                      priority={true}
                      width="40"
                      height="40"
                      style={{
                        position: "absolute",
                        top: "15px",
                        right: "20px",
                        transform: "rotate(25deg)",
                      }}
                    />
                    <Image
                      src="/corn-img.png"
                      alt="Background image of the card"
                      priority={true}
                      width="30"
                      height="30"
                      style={{
                        position: "absolute",
                        top: "116px",
                        left: "10px",
                      }}
                    />
                    <CustomTypography
                      sx={{
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "#01313F",
                        textAlign: "center",
                      }}
                    >
                      Reduce the chances of human bias in the selection process
                    </CustomTypography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={4}>
                <Card
                  sx={{
                    bgcolor: "#EAEBF4",
                    borderRadius: "15px",
                    minHeight: { xs: "182px", md: "236px", lg: "182px" },
                    position: "relative",
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      pb: "10px !important",
                      p: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "60px",
                      }}
                    >
                      <Image
                        src="/newhome_images/save-time-icon.png"
                        alt="Picture of the utilize best AI tools card"
                        priority={true}
                        width="30"
                        height="30"
                      />
                    </Box>
                    <Image
                      src="/shaded-ring-ng.png"
                      alt="Background image of the card"
                      priority={true}
                      width="40"
                      height="40"
                      style={{
                        position: "absolute",
                        top: "116px",
                        // left: "10px",
                      }}
                    />
                    <Image
                      src="/corn-img.png"
                      alt="Background image of the card"
                      priority={true}
                      width="40"
                      height="40"
                      style={{
                        position: "absolute",
                        top: "15px",
                        right: "20px",
                        transform: "rotate(70deg)",
                      }}
                    />
                    <Image
                      src="/corn-img.png"
                      alt="Background image of the card"
                      priority={true}
                      width="30"
                      height="30"
                      style={{
                        position: "absolute",
                        top: "116px",
                        left: "10px",
                      }}
                    />
                    <CustomTypography
                      sx={{
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "#01313F",
                        textAlign: "center",
                      }}
                    >
                      Efficient candidate selection minimizes screening time by
                      prioritizing promising candidates.
                    </CustomTypography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={4}>
                <Card
                  sx={{
                    bgcolor: "#FFEEEF",
                    borderRadius: "15px",
                    minHeight: { xs: "182px", md: "236px", lg: "182px" },
                    position: "relative",
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      pb: "10px !important",
                      p: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "60px",
                      }}
                    >
                      <Image
                        src="/newhome_images/24hours-icon.png"
                        alt="Picture of the utilize best AI tools card"
                        priority={true}
                        width="30"
                        height="30"
                      />
                    </Box>
                    <Image
                      src="/shaded-ring-ng.png"
                      alt="Background image of the card"
                      priority={true}
                      width="40"
                      height="40"
                      style={{
                        position: "absolute",
                        top: "116px",
                        // left: "10px",
                      }}
                    />
                    <Image
                      src="/corn-img.png"
                      alt="Background image of the card"
                      priority={true}
                      width="40"
                      height="40"
                      style={{
                        position: "absolute",
                        top: "15px",
                        right: "20px",
                      }}
                    />
                    <Image
                      src="/shaded-ring-ng.png"
                      alt="Background image of the card"
                      priority={true}
                      width="40"
                      height="40"
                      style={{
                        position: "absolute",
                        top: "111px",
                        right: "45px",
                      }}
                    />
                    <Image
                      src="/corn-img.png"
                      alt="Background image of the card"
                      priority={true}
                      width="30"
                      height="30"
                      style={{
                        position: "absolute",
                        top: "116px",
                        left: "10px",
                      }}
                    />
                    <CustomTypography
                      sx={{
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "#01313F",
                        textAlign: "center",
                      }}
                    >
                      90% of our employers hire the right candidates within 24
                      hours
                    </CustomTypography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default IdentifyingBestCandidates;
