"use client";
import Navbar from "@/components/Navbar/Navbar";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
} from "@mui/material";
import Image from "next/image";
import SubscribHome from "@/components/Home/SubscribHome";
import FooterHome from "@/components/Home/FooterHome";
import styles from "./candidatePage.module.css";
import { useState } from "react";
import BrowseCategory from "@/components/BrowseCategories/browseCategory";

const CandidatePage = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          backgroundImage: 'url("/candipage_images/CandidatePageBG.svg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "400px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
                justifyContent: { xs: "center", md: "center" },
              }}
            >
              <CustomTypography
                sx={{
                  fontSize: "40px",
                  fontWeight: 700,
                  color: "white",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Find your path to success with{" "}
                <span style={{ fontStyle: "italic" }}>Recroot</span>
              </CustomTypography>
              <CustomTypography
                sx={{
                  fontSize: "17px",
                  fontWeight: 400,
                  color: "white",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Embark on a transformative job search journey by joining us now!
              </CustomTypography>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#FAFDFF !important",
                  color: "#01313F",
                  fontWeight: 700,
                  fontSize: "12px",
                  mt: "20px",
                }}
              >
                Search Jobs
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  marginTop: "auto",
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-end" },
                }}
              >
                <Image
                  src={"/candipage_images/find-your-path-to-success-img.png"}
                  alt=""
                  height={300}
                  width={400}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ pb: "70px" }}>
        <Container>
          <CustomTypography
            sx={{
              fontSize: "30px",
              fontWeight: 600,
              color: "#01313F",
              textAlign: "center",
              mt: "60px",
              mb: "90px",
            }}
          >
            Why Candidates{" "}
            <span
              style={{
                color: "#2699FF",
              }}
            >
              Choose Us
            </span>
          </CustomTypography>
          <Box>
            <Box>
              <Grid container spacing={2} sx={{ width: "100%", ml: 0 }}>
                <Grid item xs={12} md={4} sx={{ pl: 0 }}>
                  <Box className={styles.whyCandidatesChooseUsCard}>
                    <Box className={styles.whyCandidatesChooseUsImgBox}>
                      <Image
                        src={
                          "/candipage_images/wide-range-of-job-oppotunities.png"
                        }
                        alt=""
                        height={120}
                        width={138}
                      />
                    </Box>
                    <Box className={styles.whyCandidatesChooseUsTypoBox}>
                      <Box sx={{ height: "80px" }}>
                        <CustomTypography
                          className={styles.whyCandidatesChooseUsTypo}
                        >
                          Access to a wide range of job opportunities
                        </CustomTypography>
                      </Box>
                      <CustomTypography
                        className={styles.whyCandidatesChooseUsTypoContent}
                      >
                        Recroot aggregates job listings from various industries,
                        companies, and locations providing candidates with the
                        chance to find the right opportunity.
                      </CustomTypography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box className={styles.whyCandidatesChooseUsCard}>
                    <Box className={styles.whyCandidatesChooseUsImgBox}>
                      <Image
                        src={"/candipage_images/hiring-within-24-hours.png"}
                        alt=""
                        height={150}
                        width={168}
                      />
                    </Box>
                    <Box className={styles.whyCandidatesChooseUsTypoBox}>
                      <Box sx={{ height: "80px" }}>
                        <CustomTypography
                          className={styles.whyCandidatesChooseUsTypo}
                        >
                          Hiring within 24 hours
                        </CustomTypography>
                      </Box>
                      <CustomTypography
                        className={styles.whyCandidatesChooseUsTypoContent}
                      >
                        We are committed to using a fast-tracked hiring process
                        to attract candidates who are actively seeking immediate
                        employment.
                      </CustomTypography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box className={styles.whyCandidatesChooseUsCard}>
                    <Box className={styles.whyCandidatesChooseUsImgBox}>
                      <Image
                        src={
                          "/candipage_images/enhance-visibility-to-employers.png"
                        }
                        alt=""
                        height={120}
                        width={138}
                      />
                    </Box>
                    <Box className={styles.whyCandidatesChooseUsTypoBox}>
                      <Box sx={{ height: "80px" }}>
                        <CustomTypography
                          className={styles.whyCandidatesChooseUsTypo}
                        >
                          Enhanced visibility to employers
                        </CustomTypography>
                      </Box>
                      <CustomTypography
                        className={styles.whyCandidatesChooseUsTypoContent}
                      >
                        Recroot enhances the chances of being noticed and
                        considered of candidates&apos; profiles for job
                        opportunities exposing them to potential employers.
                      </CustomTypography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box className={styles.whyCandidatesChooseUsCard}>
                    <Box className={styles.whyCandidatesChooseUsImgBox}>
                      <Image
                        src={"/candipage_images/resume-parsing-img.png"}
                        alt=""
                        height={120}
                        width={138}
                      />
                    </Box>
                    <Box className={styles.whyCandidatesChooseUsTypoBox}>
                      <Box sx={{ height: "80px" }}>
                        <CustomTypography
                          className={styles.whyCandidatesChooseUsTypo}
                        >
                          Resume Parsing
                        </CustomTypography>
                      </Box>
                      <CustomTypography
                        className={styles.whyCandidatesChooseUsTypoContent}
                      >
                        Once a candidate uploads a CV to the portal, we
                        automatically extract information from it that’s
                        important to recruiters and store them in a secured
                        database.
                      </CustomTypography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box className={styles.whyCandidatesChooseUsCard}>
                    <Box className={styles.whyCandidatesChooseUsImgBox}>
                      <Image
                        src={"/candipage_images/quick-apply-img.png"}
                        alt=""
                        height={100}
                        width={108}
                      />
                    </Box>
                    <Box className={styles.whyCandidatesChooseUsTypoBox}>
                      <Box sx={{ height: "80px" }}>
                        <CustomTypography
                          className={styles.whyCandidatesChooseUsTypo}
                        >
                          Quick Apply
                        </CustomTypography>
                      </Box>
                      <CustomTypography
                        className={styles.whyCandidatesChooseUsTypoContent}
                      >
                        After completing the profile up to 70%, job seekers can
                        quickly apply for job openings using their stored
                        profile information with just a few clicks.
                      </CustomTypography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box className={styles.whyCandidatesChooseUsCard}>
                    <Box className={styles.whyCandidatesChooseUsImgBox}>
                      <Image
                        src={"/candipage_images/application-tracking-img.png"}
                        alt=""
                        height={120}
                        width={138}
                      />
                    </Box>
                    <Box className={styles.whyCandidatesChooseUsTypoBox}>
                      <Box sx={{ height: "80px" }}>
                        <CustomTypography
                          className={styles.whyCandidatesChooseUsTypo}
                        >
                          Application tracking and management
                        </CustomTypography>
                      </Box>
                      <CustomTypography
                        className={styles.whyCandidatesChooseUsTypoContent}
                      >
                        With Recroot, candidates can view the status of their
                        applications, and receive feedback from employers in one
                        centralized location.
                      </CustomTypography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
      <BrowseCategory />
      <Box>
        <Container>
          <CustomTypography
            sx={{
              fontSize: "30px",
              fontWeight: 600,
              color: "#01313F",
              textAlign: "center",
              mt: "90px",
              mb: "60px",
            }}
          >
            How It{" "}
            <span
              style={{
                color: "#2699FF",
              }}
            >
              Works
            </span>
          </CustomTypography>
          <Box>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  height: { xs: "440px", md: "520px" },
                  display: "flex",
                  alignItems: { xs: "flex-end", md: "flex-start" },
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <Box
                    sx={{
                      bgcolor: "#2699FF",
                      borderRadius: "20px",
                      p: "30px",
                      width: { xs: "100%", md: "80%" },
                      height: { xs: "100%", md: "80%" },
                    }}
                  >
                    <Box
                      style={{
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        top: "-35px",
                        left: { xs: "0", md: "-132px" },
                      }}
                    >
                      <Image
                        src={
                          "/candipage_images/create-an-account-circle-bg.png"
                        }
                        alt=""
                        height={120}
                        width={138}
                        style={{ position: "absolute", zIndex: "1" }}
                      />
                      <Image
                        src={"/candipage_images/create-an-account-img.png"}
                        alt=""
                        height={70}
                        width={78}
                        style={{ position: "absolute", zIndex: "2" }}
                      />
                    </Box>
                    <Box sx={{ mt: "80px", minHeight: "200px" }}>
                      <CustomTypography
                        sx={{
                          color: "white",
                          fontSize: "24px",
                          fontWeight: 600,
                        }}
                      >
                        Create an Account
                      </CustomTypography>
                      <CustomTypography
                        sx={{
                          color: "white",
                          fontSize: "18px",
                          fontWeight: 400,
                          mt: "20px",
                        }}
                      >
                        Start your job search journey by creating a candidate
                        account on Recroot to gain access to the platform.
                      </CustomTypography>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ display: { xs: "none", md: "block" } }}>
                  <Image
                    src={"/candipage_images/create-an-account-arrow-img.png"}
                    alt=""
                    height={170}
                    width={278}
                    style={{
                      display: { xs: "none", md: "block" },
                      position: "absolute",
                      zIndex: "2",
                      left: "575px",
                    }}
                  />
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  height: { xs: "500px", md: "520px" },
                  display: "flex",
                  alignItems: { xs: "flex-end", md: "flex-end" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-end",
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: "#03E7F4",
                      borderRadius: "20px",
                      p: "30px",
                      width: { xs: "100%", md: "80%" },
                      height: { xs: "100%", md: "80%" },
                    }}
                  >
                    <Box
                      style={{
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        top: "-35px",
                        left: { xs: "0", md: "-132px" },
                      }}
                    >
                      <Image
                        src={
                          "/candipage_images/build-your-profile-circle-bg.png"
                        }
                        alt=""
                        height={120}
                        width={138}
                        style={{ position: "absolute", zIndex: "1" }}
                      />
                      <Image
                        src={"/candipage_images/build-your-profile-img.png"}
                        alt=""
                        height={40}
                        width={58}
                        style={{
                          position: "absolute",
                          zIndex: "2",
                        }}
                      />
                    </Box>
                    <Box sx={{ mt: "80px", minHeight: "200px" }}>
                      <CustomTypography
                        sx={{
                          color: "white",
                          fontSize: "24px",
                          fontWeight: 600,
                        }}
                      >
                        Build your profile with a minimum of 70% completion rate
                      </CustomTypography>
                      <CustomTypography
                        sx={{
                          color: "white",
                          fontSize: "18px",
                          fontWeight: 400,
                          mt: "20px",
                        }}
                      >
                        Complete your profile up to 70% by uploading a resume
                        and filling out other mandatory information like notice
                        period, work preference, salary expectations, etc.
                      </CustomTypography>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ display: { xs: "none", md: "block" } }}>
                  <Image
                    src={"/candipage_images/build-your-profile-arrow-img.png"}
                    alt=""
                    height={120}
                    width={258}
                    style={{
                      display: { xs: "none", md: "block" },
                      position: "absolute",
                      zIndex: "1",
                    }}
                  />
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  height: { xs: "440px", md: "520px" },
                  display: "flex",
                  alignItems: { xs: "flex-end", md: "flex-start" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "center", md: "flex-end" },
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: "#2699FF",
                      borderRadius: "20px",
                      p: "30px",
                      width: { xs: "100%", md: "80%" },
                      height: { xs: "100%", md: "80%" },
                    }}
                  >
                    <Box
                      style={{
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        top: "-35px",
                        left: { xs: "0", md: "-132px" },
                      }}
                    >
                      <Image
                        src={
                          "/candipage_images/create-an-account-circle-bg.png"
                        }
                        alt=""
                        height={120}
                        width={138}
                        style={{ position: "absolute", zIndex: "1" }}
                      />
                      <Image
                        src={"/candipage_images/explore-job-listings-img.png"}
                        alt=""
                        height={70}
                        width={78}
                        style={{ position: "absolute", zIndex: "2" }}
                      />
                    </Box>
                    <Box sx={{ mt: "80px", minHeight: "200px" }}>
                      <CustomTypography
                        sx={{
                          color: "white",
                          fontSize: "24px",
                          fontWeight: 600,
                        }}
                      >
                        Explore job listings
                      </CustomTypography>
                      <CustomTypography
                        sx={{
                          color: "white",
                          fontSize: "18px",
                          fontWeight: 400,
                          mt: "20px",
                        }}
                      >
                        Browse through the thousands of job listings available
                        on Recroot using advanced search filters, ensuring that
                        you find positions that match your interests and
                        qualifications.
                      </CustomTypography>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ display: { xs: "none", md: "block" } }}>
                  <Image
                    src={"/candipage_images/explore-job-arrow-img.png"}
                    alt=""
                    height={170}
                    width={278}
                    style={{
                      position: "absolute",
                      zIndex: "2",
                      left: "857px",
                    }}
                  />
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  height: { xs: "440px", md: "520px" },
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "center", md: "flex-end" },
                    alignItems: { xs: "center", md: "flex-end" },
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: "#03E7F4",
                      borderRadius: "20px",
                      p: "30px",
                      width: { xs: "100%", md: "80%" },
                      height: { xs: "100%", md: "80%" },
                    }}
                  >
                    <Box
                      style={{
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        top: "-35px",
                        left: { xs: "0", md: "-132px" },
                      }}
                    >
                      <Image
                        src={
                          "/candipage_images/build-your-profile-circle-bg.png"
                        }
                        alt=""
                        height={120}
                        width={138}
                        style={{ position: "absolute", zIndex: "1" }}
                      />
                      <Image
                        src={"/candipage_images/apply-to-jobs-img.png"}
                        alt=""
                        height={60}
                        width={78}
                        style={{ position: "absolute", zIndex: "2" }}
                      />
                    </Box>
                    <Box sx={{ mt: "80px", minHeight: "200px" }}>
                      <CustomTypography
                        sx={{
                          color: "white",
                          fontSize: "24px",
                          fontWeight: 600,
                        }}
                      >
                        Apply to jobs
                      </CustomTypography>
                      <CustomTypography
                        sx={{
                          color: "white",
                          fontSize: "18px",
                          fontWeight: 400,
                          mt: "20px",
                        }}
                      >
                        If you find suitable job openings, proceed to apply
                        directly through the Recroot portal.
                      </CustomTypography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box>
        <Container>
          <CustomTypography
            sx={{
              fontSize: "30px",
              fontWeight: 600,
              color: "#01313F",
              textAlign: "center",
              mt: "90px",
              mb: "60px",
            }}
          >
            Candidate Success{" "}
            <span
              style={{
                color: "#2699FF",
              }}
            >
              Stories
            </span>
          </CustomTypography>
          <Box>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  height: { xs: "auto", md: "520px" },
                  display: "flex",
                  alignItems: { xs: "center", md: "flex-end" },
                }}
              >
                <Card
                  variant="outlined"
                  sx={{
                    height: { xs: "auto", md: "455px" },
                    borderColor: "#D4F0FC",
                  }}
                >
                  <CardContent className={styles.ourSuccessStoriesCardContent}>
                    <Box className={styles.ourSuccessStoriesImgBox}>
                      <Image
                        className={styles.ourSuccessStoriesImgOne}
                        src={"/aboutus_images/person-one-img.jpg"}
                        alt=""
                        height={191}
                        width={121}
                      />
                    </Box>
                    <CustomTypography className={styles.ourSuccessStoriesTypo}>
                      Lorem Ipsum
                    </CustomTypography>
                    <CustomTypography
                      className={styles.ourSuccessStoriesTypoContent}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna.
                    </CustomTypography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  height: { xs: "auto", md: "520px" },
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <Card
                  variant="outlined"
                  sx={{
                    height: { xs: "auto", md: "455px" },
                    borderColor: "#D4F0FC",
                    bgcolor: "#F8FDFF",
                    boxShadow: "3px 3px 10px #D4F0FC",
                  }}
                >
                  <CardContent className={styles.ourSuccessStoriesCardContent}>
                    <Box className={styles.ourSuccessStoriesImgBox}>
                      <Image
                        className={styles.ourSuccessStoriesImgTwo}
                        src={"/aboutus_images/person-one-img.jpg"}
                        alt=""
                        height={391}
                        width={221}
                      />
                    </Box>
                    <CustomTypography className={styles.ourSuccessStoriesTypo}>
                      Lorem Ipsum
                    </CustomTypography>
                    <CustomTypography
                      className={styles.ourSuccessStoriesTypoContent}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna.
                    </CustomTypography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  height: { xs: "auto", md: "520px" },
                  display: "flex",
                  alignItems: { xs: "center", md: "flex-end" },
                }}
              >
                <Card
                  variant="outlined"
                  sx={{
                    height: { xs: "auto", md: "455px" },
                    borderColor: "#D4F0FC",
                  }}
                >
                  <CardContent className={styles.ourSuccessStoriesCardContent}>
                    <Box className={styles.ourSuccessStoriesImgBox}>
                      <Image
                        className={styles.ourSuccessStoriesImgThree}
                        src={"/aboutus_images/person-one-img.jpg"}
                        alt=""
                        height={191}
                        width={121}
                      />
                    </Box>
                    <CustomTypography className={styles.ourSuccessStoriesTypo}>
                      Lorem Ipsum
                    </CustomTypography>
                    <CustomTypography
                      className={styles.ourSuccessStoriesTypoContent}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna.
                    </CustomTypography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box sx={{ pb: "70px" }}>
        <Container>
          <CustomTypography
            sx={{
              fontSize: "30px",
              fontWeight: 600,
              color: "#01313F",
              textAlign: "center",
              mt: "90px",
              mb: "60px",
            }}
          >
            Career Advice and{" "}
            <span
              style={{
                color: "#2699FF",
              }}
            >
              Tips
            </span>
          </CustomTypography>
          <Box>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  height: { xs: "auto", md: "590px" },
                  display: "flex",
                  alignItems: { xs: "center", md: "flex-end" },
                }}
              >
                <Card
                  variant="outlined"
                  sx={{
                    height: { xs: "auto", md: "525px" },
                    borderColor: "#D4F0FC",
                    bgcolor: "#D4F0FC",
                    borderRadius: "20px",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="/candipage_images/career-advice-andtips-img.webp"
                    sx={{
                      bgcolor: "#D4F0FC",
                    }}
                  />
                  <CardContent>
                    {/* <Image
                      src={"/candipage_images/career-advice-andtips-img.webp"}
                      alt=""
                      height={323}
                      width={660}
                    /> */}

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <CustomTypography
                        sx={{
                          fontSize: "15px",
                          fontWeight: 500,
                          color: "#01313F",
                          textAlign: "left",
                        }}
                      >
                        07-06-2023
                      </CustomTypography>
                      <CustomTypography
                        sx={{
                          fontSize: "15px",
                          fontWeight: 500,
                          color: "#01313F",
                          textAlign: "left",
                        }}
                      >
                        Recruitment
                      </CustomTypography>
                    </Box>
                    <CustomTypography
                      sx={{
                        fontSize: "22px",
                        fontWeight: 600,
                        color: "#01313F",
                        textAlign: "left",
                        mt: "20px",
                      }}
                    >
                      AustraliaThe Do&apos;s and Don&apos;ts of Recruiting
                      Passive Candidates
                    </CustomTypography>
                    <CustomTypography
                      sx={{
                        fontSize: "17px",
                        fontWeight: 500,
                        color: "#00339B",
                        textAlign: "left",
                        mt: "20px",
                      }}
                    >
                      Read More
                    </CustomTypography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  height: { xs: "auto", md: "590px" },
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <Card
                  variant="outlined"
                  sx={{
                    height: { xs: "auto", md: "525px" },
                    borderColor: "#D4F0FC",
                    bgcolor: "#D4F0FC",
                    borderRadius: "20px",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="/candipage_images/career-advice-andtips-img.webp"
                    sx={{
                      bgcolor: "#D4F0FC",
                    }}
                  />
                  <CardContent>
                    {/* <Image
                      src={"/candipage_images/career-advice-andtips-img.webp"}
                      alt=""
                      height={323}
                      width={660}
                    /> */}

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <CustomTypography
                        sx={{
                          fontSize: "15px",
                          fontWeight: 500,
                          color: "#01313F",
                          textAlign: "left",
                        }}
                      >
                        07-06-2023
                      </CustomTypography>
                      <CustomTypography
                        sx={{
                          fontSize: "15px",
                          fontWeight: 500,
                          color: "#01313F",
                          textAlign: "left",
                        }}
                      >
                        Recruitment
                      </CustomTypography>
                    </Box>
                    <CustomTypography
                      sx={{
                        fontSize: "22px",
                        fontWeight: 600,
                        color: "#01313F",
                        textAlign: "left",
                        mt: "20px",
                      }}
                    >
                      AustraliaThe Do&apos;s and Don&apos;ts of Recruiting
                      Passive Candidates
                    </CustomTypography>
                    <CustomTypography
                      sx={{
                        fontSize: "17px",
                        fontWeight: 500,
                        color: "#00339B",
                        textAlign: "left",
                        mt: "20px",
                      }}
                    >
                      Read More
                    </CustomTypography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  height: { xs: "auto", md: "590px" },
                  display: "flex",
                  alignItems: { xs: "center", md: "flex-end" },
                }}
              >
                <Card
                  variant="outlined"
                  sx={{
                    height: { xs: "auto", md: "525px" },
                    borderColor: "#D4F0FC",
                    bgcolor: "#D4F0FC",
                    borderRadius: "20px",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="/candipage_images/career-advice-andtips-img.webp"
                    sx={{
                      bgcolor: "#D4F0FC",
                    }}
                  />
                  <CardContent>
                    {/* <Image
                      src={"/candipage_images/career-advice-andtips-img.webp"}
                      alt=""
                      height={323}
                      width={660}
                    /> */}

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <CustomTypography
                        sx={{
                          fontSize: "15px",
                          fontWeight: 500,
                          color: "#01313F",
                          textAlign: "left",
                        }}
                      >
                        07-06-2023
                      </CustomTypography>
                      <CustomTypography
                        sx={{
                          fontSize: "15px",
                          fontWeight: 500,
                          color: "#01313F",
                          textAlign: "left",
                        }}
                      >
                        Recruitment
                      </CustomTypography>
                    </Box>
                    <CustomTypography
                      sx={{
                        fontSize: "22px",
                        fontWeight: 600,
                        color: "#01313F",
                        textAlign: "left",
                        mt: "20px",
                      }}
                    >
                      AustraliaThe Do&apos;s and Don&apos;ts of Recruiting
                      Passive Candidates
                    </CustomTypography>
                    <CustomTypography
                      sx={{
                        fontSize: "17px",
                        fontWeight: 500,
                        color: "#00339B",
                        textAlign: "left",
                        mt: "20px",
                      }}
                    >
                      Read More
                    </CustomTypography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box
        sx={{ bgcolor: "#1097CD", p: { xs: "50px 0px 50px 0px", md: "50px" } }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid
              item
              xs={0}
              md={2}
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src="/candipage_images/contact-calendar-img.png"
                alt=""
                width="0"
                height="0"
                sizes="120vw"
                className="pointers"
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={8}
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <CustomTypography
                sx={{
                  fontSize: "30px",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  textAlign: "center",
                }}
              >
                Contact
              </CustomTypography>
              <CustomTypography
                sx={{
                  fontSize: "17px",
                  fontWeight: 500,
                  color: "#FFFFFF",
                  textAlign: "center",
                }}
              >
                Click on the link below to connect with one of our candidate
                managers by scheduling a conversation at your convenience.
              </CustomTypography>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#FAFDFF !important",
                  color: "#01313F",
                  fontWeight: 700,
                  borderRadius: "8px",
                  p: "10px",
                  width: "auto",
                  height: "45px",
                  fontSize: "12px",
                }}
              >
                Schedule a Meeting
              </Button>
            </Grid>
            <Grid
              item
              xs={0}
              md={2}
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src="/candipage_images/contact_file_img.png"
                alt=""
                width="0"
                height="0"
                sizes="70vw"
                className="pointers"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <SubscribHome />
      <FooterHome />
    </>
  );
};

export default CandidatePage;
