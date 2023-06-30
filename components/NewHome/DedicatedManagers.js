import React from "react";
import { Box, Grid, Container, Button, Card, CardContent } from "@mui/material";
import Image from "next/image";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import styles from "./newhome.module.css";

const DedicatedManagers = () => {
  return (
    <Box sx={{ bgcolor: "#EAEBF4" }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
        <path
          fill="#edfcff"
          fill-opacity="1"
          d="M0,96L80,117.3C160,139,320,181,480,170.7C640,160,800,96,960,74.7C1120,53,1280,75,1360,85.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            position: "relative",
          }}
        >
          <Image
            src="/newhome_images/guaranteed-hiring-blue-bubble.png"
            alt="Background bubble of guaranteed hiring section"
            priority={true}
            width="260"
            height="260"
            className={styles.DedicatedSectionbubblea}
          />
          <CustomTypography
            sx={{
              fontSize: "33px",
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
                            position: "relative",
                          }}
                        >
                          <Image
                            src="/newhome_images/man-iconn.png"
                            alt="Picture of the utilize best AI tools card"
                            priority={true}
                            width="40"
                            height="40"
                          />
                          <Image
                            src="/newhome_images/curve-icon-a.png"
                            alt="Background image of the card"
                            priority={true}
                            width="20"
                            height="20"
                            style={{
                              position: "absolute",
                              top: "72px",
                              left: "10px",
                              transform: "rotate(90deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/bar-icon-a.png"
                            alt="Background image of the card"
                            priority={true}
                            width="15"
                            height="15"
                            style={{
                              position: "absolute",
                              top: "17px",
                              left: "79px",
                              transform: "rotate(90deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/circular-bar.png"
                            alt="Background image of the card"
                            priority={true}
                            width="10"
                            height="10"
                            style={{
                              position: "absolute",
                              top: "62px",
                              left: "182px",
                              transform: "rotate(60deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/diamond-icon.png"
                            alt="Background image of the card"
                            priority={true}
                            width="20"
                            height="20"
                            style={{
                              position: "absolute",
                              top: "62px",
                              left: "246px",
                              transform: "rotate(150deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/diamond-icon.png"
                            alt="Background image of the card"
                            priority={true}
                            width="10"
                            height="10"
                            style={{
                              position: "absolute",
                              top: "68px",
                              left: "88px",
                              transform: "rotate(30deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/curve-icon-a.png"
                            alt="Background image of the card"
                            priority={true}
                            width="20"
                            height="20"
                            style={{
                              position: "absolute",
                              top: "-3px",
                              left: "188px",
                              transform: "rotate(100deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/circular-bar.png"
                            alt="Background image of the card"
                            priority={true}
                            width="7"
                            height="7"
                            style={{
                              position: "absolute",
                              top: "62px",
                              left: "82px",
                              transform: "rotate(60deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/bar-icon-a.png"
                            alt="Background image of the card"
                            priority={true}
                            width="15"
                            height="15"
                            style={{
                              position: "absolute",
                              top: "48px",
                              left: "129px",
                              transform: "rotate(170deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/diamond-icon.png"
                            alt="Background image of the card"
                            priority={true}
                            width="15"
                            height="15"
                            style={{
                              position: "absolute",
                              top: "78px",
                              left: "143px",
                              transform: "rotate(30deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/bar-icon-a.png"
                            alt="Background image of the card"
                            priority={true}
                            width="15"
                            height="15"
                            style={{
                              position: "absolute",
                              top: "4px",
                              left: "227px",
                              transform: "rotate(50deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/diamond-icon.png"
                            alt="Background image of the card"
                            priority={true}
                            width="15"
                            height="15"
                            style={{
                              position: "absolute",
                              top: "28px",
                              left: "14px",
                              transform: "rotate(90deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/diamond-icon.png"
                            alt="Background image of the card"
                            priority={true}
                            width="10"
                            height="10"
                            style={{
                              position: "absolute",
                              top: "38px",
                              left: "14px",
                              transform: "rotate(20deg)",
                            }}
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
                              fontSize: "14px",
                              fontWeight: 600,
                              color: "#01313F",
                              textAlign: "center",
                              zIndex: 1,
                            }}
                          >
                            Candidate discovery with human touch
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
                            position: "relative",
                          }}
                        >
                          <Image
                            src="/newhome_images/web-search-icon.png"
                            alt="Picture of the utilize best AI tools card"
                            priority={true}
                            width="40"
                            height="40"
                          />
                          <Image
                            src="/newhome_images/curve-icon-a.png"
                            alt="Background image of the card"
                            priority={true}
                            width="20"
                            height="20"
                            style={{
                              position: "absolute",
                              top: "72px",
                              left: "10px",
                              transform: "rotate(230deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/bar-icon-a.png"
                            alt="Background image of the card"
                            priority={true}
                            width="15"
                            height="15"
                            style={{
                              position: "absolute",
                              top: "17px",
                              left: "79px",
                              transform: "rotate(120deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/circular-bar.png"
                            alt="Background image of the card"
                            priority={true}
                            width="10"
                            height="10"
                            style={{
                              position: "absolute",
                              top: "62px",
                              left: "182px",
                              transform: "rotate(60deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/diamond-icon.png"
                            alt="Background image of the card"
                            priority={true}
                            width="20"
                            height="20"
                            style={{
                              position: "absolute",
                              top: "62px",
                              left: "246px",
                              transform: "rotate(150deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/diamond-icon.png"
                            alt="Background image of the card"
                            priority={true}
                            width="10"
                            height="10"
                            style={{
                              position: "absolute",
                              top: "68px",
                              left: "88px",
                              transform: "rotate(30deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/curve-icon-a.png"
                            alt="Background image of the card"
                            priority={true}
                            width="20"
                            height="20"
                            style={{
                              position: "absolute",
                              top: "-3px",
                              left: "188px",
                              transform: "rotate(160deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/circular-bar.png"
                            alt="Background image of the card"
                            priority={true}
                            width="7"
                            height="7"
                            style={{
                              position: "absolute",
                              top: "62px",
                              left: "82px",
                              transform: "rotate(60deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/bar-icon-a.png"
                            alt="Background image of the card"
                            priority={true}
                            width="15"
                            height="15"
                            style={{
                              position: "absolute",
                              top: "48px",
                              left: "129px",
                              transform: "rotate(170deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/diamond-icon.png"
                            alt="Background image of the card"
                            priority={true}
                            width="15"
                            height="15"
                            style={{
                              position: "absolute",
                              top: "78px",
                              left: "143px",
                              transform: "rotate(30deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/bar-icon-a.png"
                            alt="Background image of the card"
                            priority={true}
                            width="15"
                            height="15"
                            style={{
                              position: "absolute",
                              top: "4px",
                              left: "227px",
                              transform: "rotate(50deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/diamond-icon.png"
                            alt="Background image of the card"
                            priority={true}
                            width="15"
                            height="15"
                            style={{
                              position: "absolute",
                              top: "28px",
                              left: "14px",
                              transform: "rotate(90deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/diamond-icon.png"
                            alt="Background image of the card"
                            priority={true}
                            width="10"
                            height="10"
                            style={{
                              position: "absolute",
                              top: "38px",
                              left: "14px",
                              transform: "rotate(20deg)",
                            }}
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
                              fontSize: "14px",
                              fontWeight: 600,
                              color: "#01313F",
                              textAlign: "center",
                              zIndex: 1,
                            }}
                          >
                            Realize special job requirements
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
                            position: "relative",
                          }}
                        >
                          <Image
                            src="/newhome_images/filter-candidates-icon.png"
                            alt="Picture of the utilize best AI tools card"
                            priority={true}
                            width="40"
                            height="40"
                          />
                          <Image
                            src="/newhome_images/curve-icon-a.png"
                            alt="Background image of the card"
                            priority={true}
                            width="20"
                            height="20"
                            style={{
                              position: "absolute",
                              top: "72px",
                              left: "10px",
                              transform: "rotate(40deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/bar-icon-a.png"
                            alt="Background image of the card"
                            priority={true}
                            width="15"
                            height="15"
                            style={{
                              position: "absolute",
                              top: "17px",
                              left: "79px",
                              transform: "rotate(30deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/circular-bar.png"
                            alt="Background image of the card"
                            priority={true}
                            width="10"
                            height="10"
                            style={{
                              position: "absolute",
                              top: "62px",
                              left: "182px",
                              transform: "rotate(60deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/diamond-icon.png"
                            alt="Background image of the card"
                            priority={true}
                            width="20"
                            height="20"
                            style={{
                              position: "absolute",
                              top: "62px",
                              left: "246px",
                              transform: "rotate(150deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/diamond-icon.png"
                            alt="Background image of the card"
                            priority={true}
                            width="10"
                            height="10"
                            style={{
                              position: "absolute",
                              top: "68px",
                              left: "88px",
                              transform: "rotate(30deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/curve-icon-a.png"
                            alt="Background image of the card"
                            priority={true}
                            width="20"
                            height="20"
                            style={{
                              position: "absolute",
                              top: "-3px",
                              left: "188px",
                              transform: "rotate(50deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/circular-bar.png"
                            alt="Background image of the card"
                            priority={true}
                            width="7"
                            height="7"
                            style={{
                              position: "absolute",
                              top: "62px",
                              left: "82px",
                              transform: "rotate(60deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/bar-icon-a.png"
                            alt="Background image of the card"
                            priority={true}
                            width="15"
                            height="15"
                            style={{
                              position: "absolute",
                              top: "48px",
                              left: "129px",
                              transform: "rotate(170deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/diamond-icon.png"
                            alt="Background image of the card"
                            priority={true}
                            width="15"
                            height="15"
                            style={{
                              position: "absolute",
                              top: "78px",
                              left: "143px",
                              transform: "rotate(30deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/bar-icon-a.png"
                            alt="Background image of the card"
                            priority={true}
                            width="15"
                            height="15"
                            style={{
                              position: "absolute",
                              top: "4px",
                              left: "227px",
                              transform: "rotate(50deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/diamond-icon.png"
                            alt="Background image of the card"
                            priority={true}
                            width="15"
                            height="15"
                            style={{
                              position: "absolute",
                              top: "28px",
                              left: "14px",
                              transform: "rotate(90deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/diamond-icon.png"
                            alt="Background image of the card"
                            priority={true}
                            width="10"
                            height="10"
                            style={{
                              position: "absolute",
                              top: "38px",
                              left: "14px",
                              transform: "rotate(20deg)",
                            }}
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
                              fontSize: "14px",
                              fontWeight: 600,
                              color: "#01313F",
                              textAlign: "center",
                              zIndex: 1,
                            }}
                          >
                            Candidate search through various channels
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
                            position: "relative",
                          }}
                        >
                          <Image
                            src="/newhome_images/link-between-icon.png"
                            alt="Picture of the utilize best AI tools card"
                            priority={true}
                            width="40"
                            height="40"
                          />
                          <Image
                            src="/newhome_images/curve-icon-a.png"
                            alt="Background image of the card"
                            priority={true}
                            width="20"
                            height="20"
                            style={{
                              position: "absolute",
                              top: "72px",
                              left: "10px",
                              transform: "rotate(190deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/bar-icon-a.png"
                            alt="Background image of the card"
                            priority={true}
                            width="15"
                            height="15"
                            style={{
                              position: "absolute",
                              top: "17px",
                              left: "79px",
                              transform: "rotate(75deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/circular-bar.png"
                            alt="Background image of the card"
                            priority={true}
                            width="10"
                            height="10"
                            style={{
                              position: "absolute",
                              top: "62px",
                              left: "182px",
                              transform: "rotate(60deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/diamond-icon.png"
                            alt="Background image of the card"
                            priority={true}
                            width="20"
                            height="20"
                            style={{
                              position: "absolute",
                              top: "62px",
                              left: "246px",
                              transform: "rotate(150deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/diamond-icon.png"
                            alt="Background image of the card"
                            priority={true}
                            width="10"
                            height="10"
                            style={{
                              position: "absolute",
                              top: "68px",
                              left: "88px",
                              transform: "rotate(30deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/curve-icon-a.png"
                            alt="Background image of the card"
                            priority={true}
                            width="20"
                            height="20"
                            style={{
                              position: "absolute",
                              top: "-3px",
                              left: "188px",
                              transform: "rotate(120deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/circular-bar.png"
                            alt="Background image of the card"
                            priority={true}
                            width="7"
                            height="7"
                            style={{
                              position: "absolute",
                              top: "62px",
                              left: "82px",
                              transform: "rotate(60deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/bar-icon-a.png"
                            alt="Background image of the card"
                            priority={true}
                            width="15"
                            height="15"
                            style={{
                              position: "absolute",
                              top: "48px",
                              left: "129px",
                              transform: "rotate(170deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/diamond-icon.png"
                            alt="Background image of the card"
                            priority={true}
                            width="15"
                            height="15"
                            style={{
                              position: "absolute",
                              top: "78px",
                              left: "143px",
                              transform: "rotate(30deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/bar-icon-a.png"
                            alt="Background image of the card"
                            priority={true}
                            width="15"
                            height="15"
                            style={{
                              position: "absolute",
                              top: "4px",
                              left: "227px",
                              transform: "rotate(50deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/diamond-icon.png"
                            alt="Background image of the card"
                            priority={true}
                            width="15"
                            height="15"
                            style={{
                              position: "absolute",
                              top: "28px",
                              left: "14px",
                              transform: "rotate(90deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/diamond-icon.png"
                            alt="Background image of the card"
                            priority={true}
                            width="10"
                            height="10"
                            style={{
                              position: "absolute",
                              top: "38px",
                              left: "14px",
                              transform: "rotate(20deg)",
                            }}
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
                              fontSize: "14px",
                              fontWeight: 600,
                              color: "#01313F",
                              textAlign: "center",
                              zIndex: 1,
                            }}
                          >
                            Conduct initial screening
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
                            position: "relative",
                          }}
                        >
                          <Image
                            src="/newhome_images/support-icon.png"
                            alt="Picture of the utilize best AI tools card"
                            priority={true}
                            width="50"
                            height="50"
                          />
                          <Image
                            src="/newhome_images/curve-icon-a.png"
                            alt="Background image of the card"
                            priority={true}
                            width="20"
                            height="20"
                            style={{
                              position: "absolute",
                              top: "72px",
                              left: "10px",
                              transform: "rotate(120deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/bar-icon-a.png"
                            alt="Background image of the card"
                            priority={true}
                            width="15"
                            height="15"
                            style={{
                              position: "absolute",
                              top: "17px",
                              left: "79px",
                              transform: "rotate(20deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/circular-bar.png"
                            alt="Background image of the card"
                            priority={true}
                            width="10"
                            height="10"
                            style={{
                              position: "absolute",
                              top: "62px",
                              left: "182px",
                              transform: "rotate(60deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/diamond-icon.png"
                            alt="Background image of the card"
                            priority={true}
                            width="20"
                            height="20"
                            style={{
                              position: "absolute",
                              top: "62px",
                              left: "246px",
                              transform: "rotate(150deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/diamond-icon.png"
                            alt="Background image of the card"
                            priority={true}
                            width="10"
                            height="10"
                            style={{
                              position: "absolute",
                              top: "68px",
                              left: "88px",
                              transform: "rotate(30deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/curve-icon-a.png"
                            alt="Background image of the card"
                            priority={true}
                            width="20"
                            height="20"
                            style={{
                              position: "absolute",
                              top: "-3px",
                              left: "188px",
                              transform: "rotate(220deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/circular-bar.png"
                            alt="Background image of the card"
                            priority={true}
                            width="7"
                            height="7"
                            style={{
                              position: "absolute",
                              top: "62px",
                              left: "82px",
                              transform: "rotate(60deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/bar-icon-a.png"
                            alt="Background image of the card"
                            priority={true}
                            width="15"
                            height="15"
                            style={{
                              position: "absolute",
                              top: "48px",
                              left: "129px",
                              transform: "rotate(170deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/diamond-icon.png"
                            alt="Background image of the card"
                            priority={true}
                            width="15"
                            height="15"
                            style={{
                              position: "absolute",
                              top: "78px",
                              left: "143px",
                              transform: "rotate(30deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/bar-icon-a.png"
                            alt="Background image of the card"
                            priority={true}
                            width="15"
                            height="15"
                            style={{
                              position: "absolute",
                              top: "4px",
                              left: "227px",
                              transform: "rotate(50deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/diamond-icon.png"
                            alt="Background image of the card"
                            priority={true}
                            width="15"
                            height="15"
                            style={{
                              position: "absolute",
                              top: "28px",
                              left: "14px",
                              transform: "rotate(90deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/diamond-icon.png"
                            alt="Background image of the card"
                            priority={true}
                            width="10"
                            height="10"
                            style={{
                              position: "absolute",
                              top: "38px",
                              left: "14px",
                              transform: "rotate(20deg)",
                            }}
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
                              fontSize: "14px",
                              fontWeight: 600,
                              color: "#01313F",
                              textAlign: "center",
                              zIndex: 1,
                            }}
                          >
                            Enhance employer-candidate communication
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
                            position: "relative",
                          }}
                        >
                          <Image
                            src="/newhome_images/care-icon.png"
                            alt="Picture of the utilize best AI tools card"
                            priority={true}
                            width="40"
                            height="40"
                          />
                          <Image
                            src="/newhome_images/diamond-icon.png"
                            alt="Background image of the card"
                            priority={true}
                            width="10"
                            height="10"
                            style={{
                              position: "absolute",
                              top: "38px",
                              left: "14px",
                              transform: "rotate(20deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/bar-icon-a.png"
                            alt="Background image of the card"
                            priority={true}
                            width="15"
                            height="15"
                            style={{
                              position: "absolute",
                              top: "17px",
                              left: "79px",
                              transform: "rotate(100deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/circular-bar.png"
                            alt="Background image of the card"
                            priority={true}
                            width="10"
                            height="10"
                            style={{
                              position: "absolute",
                              top: "62px",
                              left: "182px",
                              transform: "rotate(60deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/diamond-icon.png"
                            alt="Background image of the card"
                            priority={true}
                            width="20"
                            height="20"
                            style={{
                              position: "absolute",
                              top: "62px",
                              left: "246px",
                              transform: "rotate(150deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/diamond-icon.png"
                            alt="Background image of the card"
                            priority={true}
                            width="10"
                            height="10"
                            style={{
                              position: "absolute",
                              top: "68px",
                              left: "88px",
                              transform: "rotate(30deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/curve-icon-a.png"
                            alt="Background image of the card"
                            priority={true}
                            width="20"
                            height="20"
                            style={{
                              position: "absolute",
                              top: "-3px",
                              left: "188px",
                              transform: "rotate(40deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/circular-bar.png"
                            alt="Background image of the card"
                            priority={true}
                            width="7"
                            height="7"
                            style={{
                              position: "absolute",
                              top: "62px",
                              left: "82px",
                              transform: "rotate(60deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/bar-icon-a.png"
                            alt="Background image of the card"
                            priority={true}
                            width="15"
                            height="15"
                            style={{
                              position: "absolute",
                              top: "48px",
                              left: "129px",
                              transform: "rotate(170deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/diamond-icon.png"
                            alt="Background image of the card"
                            priority={true}
                            width="15"
                            height="15"
                            style={{
                              position: "absolute",
                              top: "78px",
                              left: "143px",
                              transform: "rotate(30deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/bar-icon-a.png"
                            alt="Background image of the card"
                            priority={true}
                            width="15"
                            height="15"
                            style={{
                              position: "absolute",
                              top: "4px",
                              left: "227px",
                              transform: "rotate(50deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/diamond-icon.png"
                            alt="Background image of the card"
                            priority={true}
                            width="15"
                            height="15"
                            style={{
                              position: "absolute",
                              top: "28px",
                              left: "14px",
                              transform: "rotate(90deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/diamond-icon.png"
                            alt="Background image of the card"
                            priority={true}
                            width="10"
                            height="10"
                            style={{
                              position: "absolute",
                              top: "38px",
                              left: "14px",
                              transform: "rotate(20deg)",
                            }}
                          />
                          <Image
                            src="/newhome_images/curve-icon-a.png"
                            alt="Background image of the card"
                            priority={true}
                            width="20"
                            height="20"
                            style={{
                              position: "absolute",
                              top: "72px",
                              left: "10px",
                              transform: "rotate(40deg)",
                            }}
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
                              fontSize: "14px",
                              fontWeight: 600,
                              color: "#01313F",
                              textAlign: "center",
                              zIndex: 1,
                            }}
                          >
                            Facilitate interview coordination and scheduling
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
        <path
          fill="#E3F7FE"
          fill-opacity="1"
          d="M0,96L80,117.3C160,139,320,181,480,170.7C640,160,800,96,960,74.7C1120,53,1280,75,1360,85.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </Box>
  );
};

export default DedicatedManagers;
