import React from "react";
import { Box, Grid, Container, Button, CardContent, Card } from "@mui/material";
import Image from "next/image";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";

const IdentifyingBestCandidates = () => {
  return (
    <Box>
      <Container sx={{ pb: "40px" }}>
        <Grid container spacing={4}>
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
                sx={{ fontSize: "36px", fontWeight: 700, color: "#01313F" }}
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
      <Box>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
          <path
            fill="#edfcff"
            fill-opacity="1"
            d="M0,96L80,117.3C160,139,320,181,480,170.7C640,160,800,96,960,74.7C1120,53,1280,75,1360,85.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
        <Box
          sx={{
            bgcolor: "#edfcff",
            backgroundImage: `url("/newhome_images/water.png")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            zIndex: 2,
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
                }}
              >
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
                >
                  <CustomTypography
                    sx={{
                      fontSize: "36px",
                      fontWeight: 700,
                      color: "#01313F",
                      textAlign: { xs: "center", md: "flex-start" },
                    }}
                  >
                    Guaranteed Hiring
                  </CustomTypography>
                  <CustomTypography
                    sx={{ fontSize: "16px", fontWeight: 400, color: "#01313F" }}
                  >
                    We are the only recruitment platform that ensures our
                    employers hire the right candidates for their open
                    positions, with a success rate of over 90%.
                  </CustomTypography>
                </Box>
                <Box
                  sx={{
                    mt: "40px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                    bgcolor: "rgba(2, 169, 247, 0.10)",
                    borderRadius: "20px",
                    p: "25px 15px",
                  }}
                >
                  <Box sx={{ display: "flex", gap: "15px" }}>
                    <CelebrationOutlinedIcon sx={{ color: "#2699FF" }} />
                    <CustomTypography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "#01313F",
                      }}
                    >
                      Leverage AI technology to find the right candidates
                    </CustomTypography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "15px" }}>
                    <CelebrationOutlinedIcon sx={{ color: "#2699FF" }} />
                    <CustomTypography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "#01313F",
                      }}
                    >
                      Expand your reach to a diverse talent pool
                    </CustomTypography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "15px" }}>
                    <CelebrationOutlinedIcon sx={{ color: "#2699FF" }} />
                    <CustomTypography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "#01313F",
                      }}
                    >
                      Commit to filling your position with suitable candidates
                      during a specific timeframe
                    </CustomTypography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "15px" }}>
                    <CelebrationOutlinedIcon sx={{ color: "#2699FF" }} />
                    <CustomTypography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "#01313F",
                      }}
                    >
                      Guarantee that you hire the right candidate with a success
                      rate of over 90%
                    </CustomTypography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "15px",
                    }}
                  >
                    <CelebrationOutlinedIcon sx={{ color: "#2699FF" }} />
                    <CustomTypography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "#01313F",
                      }}
                    >
                      Receive assistance from our team of candidate managers
                    </CustomTypography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "15px",
                    }}
                  >
                    <CelebrationOutlinedIcon
                      sx={{ color: "#2699FF", fontSize: "25px" }}
                    />
                    <CustomTypography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "#01313F",
                      }}
                    >
                      Save valuable time and effort spent on candidate sourcing
                      and screening
                    </CustomTypography>
                  </Box>
                </Box>
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#edfcff"
            fill-opacity="1"
            d="M0,96L80,117.3C160,139,320,181,480,170.7C640,160,800,96,960,74.7C1120,53,1280,75,1360,85.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </Box>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <CustomTypography
            sx={{
              fontSize: "36px",
              fontWeight: 700,
              color: "#01313F",
              textAlign: "center",
            }}
          >
            Dedicated Candidate Managers
          </CustomTypography>
          <CustomTypography
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              color: "#01313F",
              textAlign: "center",
              width: { xs: "100%", md: "70%" },
            }}
          >
            We own a team of dedicated candidate managers who adds a human touch
            to the automated talent discovery process to ensure our employers
            find the right candidates for their job openings.
          </CustomTypography>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              lg={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src="/newhome_images/board-members-img.png"
                alt="Picture of the Dedicated Candidate Managers"
                priority={true}
                width="946"
                height="473"
              />
            </Grid>
            <Grid item xs={12} lg={6} sx={{ mt: { xs: "40px", lg: 0 } }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Card
                    sx={{
                      bgcolor: "#FBF3E9",
                      borderRadius: "15px",
                      minHeight: "110px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CardContent
                      sx={{
                        p: "16px !important",
                        pb: "16px !important",
                      }}
                    >
                      <Grid container spacing={2}>
                        <Grid
                          item
                          xs={4}
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Image
                            src="/newhome_images/man-iconn.png"
                            alt="Picture of the utilize best AI tools card"
                            priority={true}
                            width="40"
                            height="40"
                          />
                        </Grid>
                        <Grid
                          item
                          xs={8}
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <CustomTypography
                            sx={{
                              fontSize: "13px",
                              fontWeight: 600,
                              color: "#01313F",
                              textAlign: "center",
                            }}
                          >
                            Adds a human touch to the automated candidate
                            discovery process
                          </CustomTypography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card
                    sx={{
                      bgcolor: "#DBFFF2",
                      borderRadius: "15px",
                      minHeight: "110px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CardContent
                      sx={{
                        p: "16px !important",
                        pb: "16px !important",
                      }}
                    >
                      <Grid container spacing={2}>
                        <Grid
                          item
                          xs={4}
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Image
                            src="/newhome_images/web-search-icon.png"
                            alt="Picture of the utilize best AI tools card"
                            priority={true}
                            width="40"
                            height="40"
                          />
                        </Grid>
                        <Grid
                          item
                          xs={8}
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <CustomTypography
                            sx={{
                              fontSize: "13px",
                              fontWeight: 600,
                              color: "#01313F",
                              textAlign: "center",
                            }}
                          >
                            Actively search for potential candidates through
                            various channels
                          </CustomTypography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card
                    sx={{
                      bgcolor: "#EAEBF4",
                      borderRadius: "15px",
                      minHeight: "110px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CardContent
                      sx={{
                        p: "16px !important",
                        pb: "16px !important",
                      }}
                    >
                      <Grid container spacing={2}>
                        <Grid
                          item
                          xs={4}
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Image
                            src="/newhome_images/filter-candidates-icon.png"
                            alt="Picture of the utilize best AI tools card"
                            priority={true}
                            width="40"
                            height="40"
                          />
                        </Grid>
                        <Grid
                          item
                          xs={8}
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <CustomTypography
                            sx={{
                              fontSize: "13px",
                              fontWeight: 600,
                              color: "#01313F",
                              textAlign: "center",
                            }}
                          >
                            Perform initial candidate screening for
                            qualifications, skills, and experience
                          </CustomTypography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card
                    sx={{
                      bgcolor: "#FBF3E9",
                      borderRadius: "15px",
                      minHeight: "110px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CardContent
                      sx={{
                        p: "16px !important",
                        pb: "16px !important",
                      }}
                    >
                      <Grid container spacing={2}>
                        <Grid
                          item
                          xs={4}
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Image
                            src="/newhome_images/link-between-icon.png"
                            alt="Picture of the utilize best AI tools card"
                            priority={true}
                            width="40"
                            height="40"
                          />
                        </Grid>
                        <Grid
                          item
                          xs={8}
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <CustomTypography
                            sx={{
                              fontSize: "13px",
                              fontWeight: 600,
                              color: "#01313F",
                              textAlign: "center",
                            }}
                          >
                            Act as a point of contact between the employer and
                            the candidate
                          </CustomTypography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card
                    sx={{
                      borderRadius: "15px",
                      minHeight: "110px",
                      bgcolor: "#FFEEEF",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CardContent
                      sx={{
                        p: "16px !important",
                        pb: "16px !important",
                      }}
                    >
                      <Grid container spacing={2}>
                        <Grid
                          item
                          xs={4}
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Image
                            src="/newhome_images/support-icon.png"
                            alt="Picture of the utilize best AI tools card"
                            priority={true}
                            width="50"
                            height="50"
                          />
                        </Grid>
                        <Grid
                          item
                          xs={8}
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <CustomTypography
                            sx={{
                              fontSize: "13px",
                              fontWeight: 600,
                              color: "#01313F",
                              textAlign: "center",
                            }}
                          >
                            Assist in coordinating and scheduling interviews
                          </CustomTypography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card
                    sx={{
                      bgcolor: "#E3F7FE",
                      borderRadius: "15px",
                      minHeight: "110px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CardContent
                      sx={{
                        p: "16px !important",
                        pb: "16px !important",
                      }}
                    >
                      <Grid container spacing={2}>
                        <Grid
                          item
                          xs={4}
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Image
                            src="/newhome_images/care-icon.png"
                            alt="Picture of the utilize best AI tools card"
                            priority={true}
                            width="40"
                            height="40"
                          />
                        </Grid>
                        <Grid
                          item
                          xs={8}
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <CustomTypography
                            sx={{
                              fontSize: "13px",
                              fontWeight: 600,
                              color: "#01313F",
                              textAlign: "center",
                            }}
                          >
                            Ensure a smooth recruitment experience for employers
                            by addressing any concerns
                          </CustomTypography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default IdentifyingBestCandidates;
