"use client";
import Navbar from "@/components/Navbar/Navbar";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
} from "@mui/material";
import Image from "next/image";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import SubscribHome from "@/components/Home/SubscribHome";
import FooterHome from "@/components/Home/FooterHome";
import styles from "./aboutus.module.css";
import { useState } from "react";

const AboutUs = () => {
  const [isShown, setIsShown] = useState(false);

  const handleViewMoreFeaturesClick = (event) => {
    setIsShown((current) => !current);
  };
  return (
    <>
      <Navbar />
      <Box
        sx={{
          backgroundImage: 'url("/aboutus_images/JobListingPageBG.svg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "400px",
          pt: "30px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", md: "center" },
              }}
            >
              <CustomTypography
                sx={{
                  fontSize: "45px",
                  fontWeight: 700,
                  color: "white",
                  textAlign: { xs: "center", md: "center" },
                }}
              >
                Who We Are
              </CustomTypography>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  marginTop: "auto",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={"/aboutus_images/aboutus-who-we-arepeople-img.png"}
                  alt=""
                  height={300}
                  width={500}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          height: "autopx",
          bgcolor: "rgba(212, 240, 252, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: { xs: "60px 0px", md: "40px" },
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <CustomTypography
              sx={{
                fontSize: "30px",
                fontWeight: 600,
                color: "#01313F",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Unlock your career potential with{" "}
              <span
                style={{
                  color: "#2699FF",
                }}
              >
                Recroot
              </span>
            </CustomTypography>
            <CustomTypography
              sx={{
                fontSize: "19px",
                fontWeight: 600,
                color: "rgba(1, 49, 63, 0.8)",
                width: { xs: "100%", md: "50%" },
                textAlign: "center",
                mt: "15px",
              }}
            >
              We connect talents with top-tier employers across the globe,
              providing access to exciting job opportunities in a variety of
              fields and functions.
            </CustomTypography>
          </Box>
        </Container>
      </Box>
      <Box sx={{ p: { xs: "50px 0px 100px 0px", md: "50px 50px 100px 50px" } }}>
        <Container>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={7}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                order: { xs: "2", md: "1" },
              }}
            >
              <CustomTypography
                sx={{
                  fontSize: "30px",
                  fontWeight: 600,
                  color: "#01313F",
                  display: { xs: "none", md: "block" },
                }}
              >
                Company{" "}
                <span
                  style={{
                    color: "#2699FF",
                  }}
                >
                  Overview
                </span>
              </CustomTypography>
              <CustomTypography
                sx={{
                  fontSize: "19px",
                  fontWeight: 400,
                  color: "rgba(1, 49, 63, 0.8)",
                  width: "100%",
                  mt: "15px",
                }}
              >
                Recroot is a renowned global platform introduced by AR
                Innovations Pty (Ltd), based in Sydney, Australia that bridges
                the gap between job seekers and employment opportunities.{" "}
                <br></br>
                <br></br>
                Founded in 2022 as a small job board website, and over the
                course of the period, Recroot has undergone a transformative
                journey reshaping the recruitment industry. 
                <br></br>
                <br></br>
                The company is always committed to providing innovative features
                and tools every quarter by investing in advanced technology and
                artificial intelligence to bring the job search and recruitment
                experience to the next level.
              </CustomTypography>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                order: { xs: "1", md: "2" },
              }}
            >
              <CustomTypography
                sx={{
                  fontSize: "30px",
                  fontWeight: 600,
                  color: "#01313F",
                  display: { xs: "block", md: "none" },
                }}
              >
                Company{" "}
                <span
                  style={{
                    color: "#2699FF",
                  }}
                >
                  Overview
                </span>
              </CustomTypography>
              <Box
                sx={{
                  bgcolor: { xs: "none", md: "#D9D9D9" },
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src={"/aboutus_images/aboutus-company-overview-img.png"}
                  alt=""
                  height={400}
                  width={310}
                />
                <Image
                  className={styles.CompanyOverviewPersonImg}
                  src={
                    "/aboutus_images/aboutus-company-overview-person-img.png"
                  }
                  alt=""
                  height={391}
                  width={159}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          p: { xs: "40px 0px 40px 0px", md: "130px 0px 40px 0px" },
          bgcolor: "rgba(212, 240, 252, 0.5)",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ marginTop: { xs: "100px", md: 0 } }}
            >
              <Box
                sx={{
                  bgcolor: "#2699FF",
                  height: "300px",
                  borderRadius: "20px",
                  pl: "40px",
                  pr: "40px",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    height: "90px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Image
                    className={styles.aboutusOurvisionEclipseImg}
                    src={"/aboutus_images/aboutus-ourvision-eclipse-img.png"}
                    alt=""
                    height={180}
                    width={180}
                  />
                  <Image
                    className={styles.aboutusOurvisionBlueborderImg}
                    src={"/aboutus_images/aboutus-ourvision-blueboder-img.png"}
                    alt=""
                    height={180}
                    width={180}
                  />
                  <Image
                    className={styles.ourvisionArrowImg}
                    src={"/aboutus_images/ourvision-arrow-img.png"}
                    alt=""
                    height={190}
                    width={228}
                  />
                </Box>
                <CustomTypography
                  sx={{
                    fontSize: "30px",
                    fontWeight: 600,
                    color: "rgba(255, 255, 255, 0.8)",
                    textAlign: "center",
                    mt: "15px",
                  }}
                >
                  Our Vision
                </CustomTypography>
                <CustomTypography
                  sx={{
                    fontSize: "19px",
                    fontWeight: 500,
                    color: "rgba(255, 255, 255, 0.8)",
                    textAlign: "center",
                    mt: "15px",
                  }}
                >
                  Generate financial possibilities for all individuals in the
                  global labor force.
                </CustomTypography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ marginTop: { xs: "130px", md: 0 } }}
            >
              <Box
                sx={{
                  bgcolor: "#2699FF",
                  minHeight: "300px",
                  borderRadius: "20px",
                  pl: "40px",
                  pr: "40px",
                }}
              >
                <Box
                  sx={{
                    height: "90px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Image
                    className={styles.aboutusOurmissionEclipseImg}
                    src={"/aboutus_images/aboutus-ourvision-eclipse-img.png"}
                    alt=""
                    height={180}
                    width={180}
                  />
                  <Image
                    className={styles.aboutusOurmissionBlueborderImg}
                    src={"/aboutus_images/aboutus-ourvision-blueboder-img.png"}
                    alt=""
                    height={180}
                    width={180}
                  />
                  <Image
                    className={styles.ourmissionManImg}
                    src={"/aboutus_images/ourmission-man-img.png"}
                    alt=""
                    height={240}
                    width={278}
                  />
                </Box>
                <CustomTypography
                  sx={{
                    fontSize: "30px",
                    fontWeight: 600,
                    color: "rgba(255, 255, 255, 0.8)",
                    textAlign: "center",
                    mt: "15px",
                  }}
                >
                  Our Mission
                </CustomTypography>
                <CustomTypography
                  sx={{
                    fontSize: "19px",
                    fontWeight: 500,
                    color: "rgba(255, 255, 255, 0.8)",
                    textAlign: "center",
                    mt: "15px",
                  }}
                >
                  Connect skilled job seekers with top-notch employers in
                  various industries globally to maximize their productivity and
                  accomplishment.
                </CustomTypography>
              </Box>
            </Grid>
          </Grid>
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
              mt: "60px",
              mb: "90px",
            }}
          >
            Discover The{" "}
            <span
              style={{
                color: "#2699FF",
              }}
            >
              Features
            </span>
          </CustomTypography>
          <Box>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Grid container spacing={2} sx={{ width: "100%" }}>
                <Grid item xs={12} md={4}>
                  <Box className={styles.discovertheFeaturesCard}>
                    <Box className={styles.discovertheFeaturesImgBox}>
                      <Image
                        src={"/aboutus_images/candidate-database-img.png"}
                        alt=""
                        height={130}
                        width={158}
                      />
                    </Box>
                    <Box className={styles.discovertheFeaturesTypoBox}>
                      <CustomTypography
                        className={styles.discovertheFeaturesTypo}
                      >
                        Candidate Database
                      </CustomTypography>
                      <CustomTypography
                        className={styles.discovertheFeaturesTypoContent}
                      >
                        Our candidate database is filled with pre-screened
                        candidates actively seeking employment.
                      </CustomTypography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box className={styles.discovertheFeaturesCard}>
                    <Box className={styles.discovertheFeaturesImgBox}>
                      <Image
                        src={"/aboutus_images/AI-engine-img.png"}
                        alt=""
                        height={80}
                        width={108}
                      />
                    </Box>
                    <Box className={styles.discovertheFeaturesTypoBox}>
                      <CustomTypography
                        className={styles.discovertheFeaturesTypo}
                      >
                        AI Engine
                      </CustomTypography>
                      <CustomTypography
                        className={styles.discovertheFeaturesTypoContent}
                      >
                        Use AI algorithms to find candidates automatically and
                        match job descriptions with the most suitable candidates
                        based on their skills, experience, education, and other
                        relevant factors.
                      </CustomTypography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box className={styles.discovertheFeaturesCard}>
                    <Box className={styles.discovertheFeaturesImgBox}>
                      <Image
                        src={"/aboutus_images/quick&easy-regis-img.png"}
                        alt=""
                        height={130}
                        width={158}
                      />
                    </Box>
                    <Box className={styles.discovertheFeaturesTypoBox}>
                      <CustomTypography
                        className={styles.discovertheFeaturesTypo}
                      >
                        Quick and Easy Registration
                      </CustomTypography>
                      <CustomTypography
                        className={styles.discovertheFeaturesTypoContent}
                      >
                        With Recroot, setting up an account for employers and
                        candidates is a breeze - all it takes is a few clicks.
                      </CustomTypography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4} sx={{ pl: 0 }}>
                  <Box className={styles.discovertheFeaturesCard}>
                    <Box className={styles.discovertheFeaturesImgBox}>
                      <Image
                        src={"/aboutus_images/resume-parsing-img.png"}
                        alt=""
                        height={130}
                        width={158}
                      />
                    </Box>
                    <Box className={styles.discovertheFeaturesTypoBox}>
                      <CustomTypography
                        className={styles.discovertheFeaturesTypo}
                      >
                        Resume Parsing
                      </CustomTypography>
                      <CustomTypography
                        className={styles.discovertheFeaturesTypoContent}
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
                  <Box className={styles.discovertheFeaturesCard}>
                    <Box className={styles.discovertheFeaturesImgBox}>
                      <Image
                        src={"/aboutus_images/quick-discovery-img.png"}
                        alt=""
                        height={130}
                        width={158}
                      />
                    </Box>
                    <Box className={styles.discovertheFeaturesTypoBox}>
                      <CustomTypography
                        className={styles.discovertheFeaturesTypo}
                      >
                        Quick Discovery
                      </CustomTypography>
                      <CustomTypography
                        className={styles.discovertheFeaturesTypoContent}
                      >
                        With Recroot, job seekers have the ability to quickly
                        and easily find relevant job opportunities based on
                        their preferences, qualifications, and search criteria.
                      </CustomTypography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box className={styles.discovertheFeaturesCard}>
                    <Box className={styles.discovertheFeaturesImgBox}>
                      <Image
                        src={"/aboutus_images/job-posting-img.png"}
                        alt=""
                        height={130}
                        width={158}
                      />
                    </Box>
                    <Box className={styles.discovertheFeaturesTypoBox}>
                      <CustomTypography
                        className={styles.discovertheFeaturesTypo}
                      >
                        Job Posting
                      </CustomTypography>
                      <CustomTypography
                        className={styles.discovertheFeaturesTypoContent}
                      >
                        Allows employers to advertise job openings including
                        details about the position, such as job title, location,
                        job description, qualifications, and requirements.
                      </CustomTypography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box className={styles.discovertheFeaturesCard}>
                    <Box className={styles.discovertheFeaturesImgBox}>
                      <Image
                        src={"/aboutus_images/quick-apply-img.png"}
                        alt=""
                        height={130}
                        width={158}
                      />
                    </Box>
                    <Box className={styles.discovertheFeaturesTypoBox}>
                      <CustomTypography
                        className={styles.discovertheFeaturesTypo}
                      >
                        Quick Apply
                      </CustomTypography>
                      <CustomTypography
                        className={styles.discovertheFeaturesTypoContent}
                      >
                        After completing the profile up to 70%, job seekers can
                        quickly apply for job openings using their stored
                        profile information
                      </CustomTypography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box className={styles.discovertheFeaturesCard}>
                    <Box className={styles.discovertheFeaturesImgBox}>
                      <Image
                        src={"/aboutus_images/application-tracking-img.png"}
                        alt=""
                        height={130}
                        width={158}
                      />
                    </Box>
                    <Box className={styles.discovertheFeaturesTypoBox}>
                      <CustomTypography
                        className={styles.discovertheFeaturesTypo}
                      >
                        Application Tracking
                      </CustomTypography>
                      <CustomTypography
                        className={styles.discovertheFeaturesTypoContent}
                      >
                        Allow employers to manage job applications, track
                        applicant status, and communicate with job seekers.  For
                        candidates, it allows them to track the status of their
                        job applications.
                      </CustomTypography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box className={styles.discovertheFeaturesCard}>
                    <Box className={styles.discovertheFeaturesImgBox}>
                      <Image
                        src={"/aboutus_images/blogs&- videos-img.png"}
                        alt=""
                        height={130}
                        width={158}
                      />
                    </Box>
                    <Box className={styles.discovertheFeaturesTypoBox}>
                      <CustomTypography
                        className={styles.discovertheFeaturesTypo}
                      >
                        Blogs and Videos
                      </CustomTypography>
                      <CustomTypography
                        className={styles.discovertheFeaturesTypoContent}
                      >
                        Includes blog posts, articles, and videos that provide
                        information and resources tailored to the needs of both
                        job seekers and employers.
                      </CustomTypography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <Grid container spacing={2} sx={{ width: "100%", ml: 0 }}>
                <Grid item xs={12} md={4} sx={{ pl: 0 }}>
                  <Box className={styles.discovertheFeaturesCard}>
                    <Box className={styles.discovertheFeaturesImgBox}>
                      <Image
                        src={"/aboutus_images/candidate-database-img.png"}
                        alt=""
                        height={130}
                        width={158}
                      />
                    </Box>
                    <Box className={styles.discovertheFeaturesTypoBox}>
                      <CustomTypography
                        className={styles.discovertheFeaturesTypo}
                      >
                        Candidate Database
                      </CustomTypography>
                      <CustomTypography
                        className={styles.discovertheFeaturesTypoContent}
                      >
                        Our candidate database is filled with pre-screened
                        candidates actively seeking employment.
                      </CustomTypography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box className={styles.discovertheFeaturesCard}>
                    <Box className={styles.discovertheFeaturesImgBox}>
                      <Image
                        src={"/aboutus_images/AI-engine-img.png"}
                        alt=""
                        height={80}
                        width={108}
                      />
                    </Box>
                    <Box className={styles.discovertheFeaturesTypoBox}>
                      <CustomTypography
                        className={styles.discovertheFeaturesTypo}
                      >
                        AI Engine
                      </CustomTypography>
                      <CustomTypography
                        className={styles.discovertheFeaturesTypoContent}
                      >
                        Use AI algorithms to find candidates automatically and
                        match job descriptions with the most suitable candidates
                        based on their skills, experience, education, and other
                        relevant factors.
                      </CustomTypography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box className={styles.discovertheFeaturesCard}>
                    <Box className={styles.discovertheFeaturesImgBox}>
                      <Image
                        src={"/aboutus_images/quick&easy-regis-img.png"}
                        alt=""
                        height={130}
                        width={158}
                      />
                    </Box>
                    <Box className={styles.discovertheFeaturesTypoBox}>
                      <CustomTypography
                        className={styles.discovertheFeaturesTypo}
                      >
                        Quick and Easy Registration
                      </CustomTypography>
                      <CustomTypography
                        className={styles.discovertheFeaturesTypoContent}
                      >
                        With Recroot, setting up an account for employers and
                        candidates is a breeze - all it takes is a few clicks.
                      </CustomTypography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              {!isShown && (
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    mt: "30px",
                    mb: "30px",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#02A9F7 !important",
                      borderRadius: "8px",
                      width: "168px",
                      height: "52px",
                    }}
                    onClick={handleViewMoreFeaturesClick}
                  >
                    VIEW MORE
                  </Button>
                </Box>
              )}
              {isShown && (
                <>
                  <Grid
                    container
                    spacing={2}
                    sx={{ width: "100%", mt: "3px", ml: 0 }}
                  >
                    <Grid item xs={12} md={4} sx={{ pl: 0 }}>
                      <Box className={styles.discovertheFeaturesCard}>
                        <Box className="discovertheFeaturesImgBox">
                          <Image
                            src={"/aboutus_images/resume-parsing-img.png"}
                            alt=""
                            height={130}
                            width={158}
                          />
                        </Box>
                        <Box className={styles.discovertheFeaturesTypoBox}>
                          <CustomTypography
                            className={styles.discovertheFeaturesTypo}
                          >
                            Resume Parsing
                          </CustomTypography>
                          <CustomTypography
                            className={styles.discovertheFeaturesTypoContent}
                          >
                            Once a candidate uploads a CV to the portal, we
                            automatically extract information from it that’s
                            important to recruiters and store them in a secured
                            database.
                          </CustomTypography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ pl: 0 }}>
                      <Box className={styles.discovertheFeaturesCard}>
                        <Box className={styles.discovertheFeaturesImgBox}>
                          <Image
                            src={"/aboutus_images/quick-discovery-img.png"}
                            alt=""
                            height={130}
                            width={158}
                          />
                        </Box>
                        <Box className={styles.discovertheFeaturesTypoBox}>
                          <CustomTypography
                            className={styles.discovertheFeaturesTypo}
                          >
                            Quick Discovery
                          </CustomTypography>
                          <CustomTypography
                            className={styles.discovertheFeaturesTypoContent}
                          >
                            With Recroot, job seekers have the ability to
                            quickly and easily find relevant job opportunities
                            based on their preferences, qualifications, and
                            search criteria.
                          </CustomTypography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ pl: 0 }}>
                      <Box className={styles.discovertheFeaturesCard}>
                        <Box className={styles.discovertheFeaturesImgBox}>
                          <Image
                            src={"/aboutus_images/job-posting-img.png"}
                            alt=""
                            height={130}
                            width={158}
                          />
                        </Box>
                        <Box className={styles.discovertheFeaturesTypoBox}>
                          <CustomTypography
                            className={styles.discovertheFeaturesTypo}
                          >
                            Job Posting
                          </CustomTypography>
                          <CustomTypography
                            className={styles.discovertheFeaturesTypoContent}
                          >
                            Allows employers to advertise job openings including
                            details about the position, such as job title,
                            location, job description, qualifications, and
                            requirements.
                          </CustomTypography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ pl: 0 }}>
                      <Box className={styles.discovertheFeaturesCard}>
                        <Box className={styles.discovertheFeaturesImgBox}>
                          <Image
                            src={"/aboutus_images/quick-apply-img.png"}
                            alt=""
                            height={130}
                            width={158}
                          />
                        </Box>
                        <Box className={styles.discovertheFeaturesTypoBox}>
                          <CustomTypography
                            className={styles.discovertheFeaturesTypo}
                          >
                            Quick Apply
                          </CustomTypography>
                          <CustomTypography
                            className={styles.discovertheFeaturesTypoContent}
                          >
                            After completing the profile up to 70%, job seekers
                            can quickly apply for job openings using their
                            stored profile information
                          </CustomTypography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ pl: 0 }}>
                      <Box className={styles.discovertheFeaturesCard}>
                        <Box className={styles.discovertheFeaturesImgBox}>
                          <Image
                            src={"/aboutus_images/application-tracking-img.png"}
                            alt=""
                            height={130}
                            width={158}
                          />
                        </Box>
                        <Box className={styles.discovertheFeaturesTypoBox}>
                          <CustomTypography
                            className={styles.discovertheFeaturesTypo}
                          >
                            Application Tracking
                          </CustomTypography>
                          <CustomTypography
                            className={styles.discovertheFeaturesTypoContent}
                          >
                            Allow employers to manage job applications, track
                            applicant status, and communicate with job seekers. 
                            For candidates, it allows them to track the status
                            of their job applications.
                          </CustomTypography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ pl: 0 }}>
                      <Box className={styles.discovertheFeaturesCard}>
                        <Box className={styles.discovertheFeaturesImgBox}>
                          <Image
                            src={"/aboutus_images/blogs&- videos-img.png"}
                            alt=""
                            height={130}
                            width={158}
                          />
                        </Box>
                        <Box className={styles.discovertheFeaturesTypoBox}>
                          <CustomTypography
                            className={styles.discovertheFeaturesTypo}
                          >
                            Blogs and Videos
                          </CustomTypography>
                          <CustomTypography
                            className={styles.discovertheFeaturesTypoContent}
                          >
                            Includes blog posts, articles, and videos that
                            provide information and resources tailored to the
                            needs of both job seekers and employers.
                          </CustomTypography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      mt: "30px",
                      mb: "30px",
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "#02A9F7 !important",
                        borderRadius: "8px",
                        width: "168px",
                        height: "52px",
                      }}
                      onClick={handleViewMoreFeaturesClick}
                    >
                      VIEW LESS
                    </Button>
                  </Box>
                </>
              )}
            </Box>
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
            Technologies we{" "}
            <span
              style={{
                color: "#2699FF",
              }}
            >
              Used
            </span>
          </CustomTypography>
          <Box>
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item xs={6} md={2.4}>
                <Card className={styles.technologiesCard}>
                  <CardContent className={styles.technologiesCardcontent}>
                    <Image
                      src={"/aboutus_images/mongodb-img.svg"}
                      alt=""
                      height={110}
                      width={200}
                    />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={2.4}>
                <Card className={styles.technologiesCard}>
                  <CardContent className={styles.technologiesCardcontent}>
                    <Image
                      src={"/aboutus_images/laravel-logo-img.svg"}
                      alt=""
                      height={110}
                      width={200}
                    />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={2.4}>
                <Card className={styles.technologiesCard}>
                  <CardContent className={styles.technologiesCardcontent}>
                    <Image
                      src={"/aboutus_images/mysql-logo-img.svg"}
                      alt=""
                      height={110}
                      width={200}
                    />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={2.4}>
                <Card className={styles.technologiesCard}>
                  <CardContent className={styles.technologiesCardcontent}>
                    <Image
                      src={"/aboutus_images/react-logo.svg"}
                      alt=""
                      height={110}
                      width={200}
                    />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={2.4}>
                <Card className={styles.technologiesCard}>
                  <CardContent className={styles.technologiesCardcontent}>
                    <Image
                      src={"/aboutus_images/react-native-logo.svg"}
                      alt=""
                      height={40}
                      width={80}
                    />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={2.4}>
                <Card className={styles.technologiesCard}>
                  <CardContent className={styles.technologiesCardcontent}>
                    <Image
                      src={"/aboutus_images/intelligence-logo.svg"}
                      alt=""
                      height={40}
                      width={80}
                    />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={2.4}>
                <Card className={styles.technologiesCard}>
                  <CardContent className={styles.technologiesCardcontent}>
                    <Image
                      src={"/aboutus_images/api-logo.svg"}
                      alt=""
                      height={50}
                      width={100}
                    />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={2.4}>
                <Card className={styles.technologiesCard}>
                  <CardContent className={styles.technologiesCardcontent}>
                    <Image
                      src={"/aboutus_images/seo-logo.svg"}
                      alt=""
                      height={50}
                      width={100}
                    />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={2.4}>
                <Card className={styles.technologiesCard}>
                  <CardContent className={styles.technologiesCardcontent}>
                    <Image
                      src={"/aboutus_images/nginx-logo.svg"}
                      alt=""
                      height={60}
                      width={120}
                    />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={2.4}>
                <Card className={styles.technologiesCard}>
                  <CardContent className={styles.technologiesCardcontent}>
                    <Image
                      src={"/aboutus_images/docker-logo.svg"}
                      alt=""
                      height={110}
                      width={200}
                    />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={2.4}>
                <Card className={styles.technologiesCard}>
                  <CardContent className={styles.technologiesCardcontent}>
                    <Image
                      src={"/aboutus_images/aws-logo.svg"}
                      alt=""
                      height={50}
                      width={100}
                    />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={2.4}>
                <Card className={styles.technologiesCard}>
                  <CardContent className={styles.technologiesCardcontent}>
                    <Image
                      src={"/aboutus_images/node-js-logo.svg"}
                      alt=""
                      height={110}
                      width={200}
                    />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={2.4}>
                <Card className={styles.technologiesCard}>
                  <CardContent className={styles.technologiesCardcontent}>
                    <Image
                      src={"/aboutus_images/flutter-logo.svg"}
                      alt=""
                      height={110}
                      width={200}
                    />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={2.4}>
                <Card className={styles.technologiesCard}>
                  <CardContent className={styles.technologiesCardcontent}>
                    <Image
                      src={"/aboutus_images/firebase-logo.svg"}
                      alt=""
                      height={110}
                      width={200}
                    />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      {/* <Box>
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
            Our{" "}
            <span
              style={{
                color: "#2699FF",
              }}
            >
              Team
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
                  <CardContent className={styles.ourTeamCardContent}>
                    <Box className={styles.ourTeamImgBox}>
                      <Image
                        className={styles.ourTeamImgOne}
                        src={"/aboutus_images/person-one-img.jpg"}
                        alt=""
                        height={191}
                        width={121}
                      />
                    </Box>
                    <CustomTypography className={styles.ourTeamTypo}>
                      Lorem Ipsum
                    </CustomTypography>
                    <CustomTypography className={styles.ourTeamTypoContent}>
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
                  <CardContent className={styles.ourTeamCardContent}>
                    <Box className={styles.ourTeamImgBox}>
                      <Image
                        className={styles.ourTeamImgTwo}
                        src={"/aboutus_images/person-one-img.jpg"}
                        alt=""
                        height={391}
                        width={221}
                      />
                    </Box>
                    <CustomTypography className={styles.ourTeamTypo}>
                      Lorem Ipsum
                    </CustomTypography>
                    <CustomTypography className={styles.ourTeamTypoContent}>
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
                  <CardContent className={styles.ourTeamCardContent}>
                    <Box className={styles.ourTeamImgBox}>
                      <Image
                        className={styles.ourTeamImgOne}
                        src={"/aboutus_images/person-one-img.jpg"}
                        alt=""
                        height={191}
                        width={121}
                      />
                    </Box>
                    <CustomTypography className={styles.ourTeamTypo}>
                      Lorem Ipsum
                    </CustomTypography>
                    <CustomTypography className={styles.ourTeamTypoContent}>
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
      </Box> */}
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
            Our Global{" "}
            <span
              style={{
                color: "#2699FF",
              }}
            >
              Presence
            </span>
          </CustomTypography>
          <Grid container spacing={2} sx={{ mb: "90px" }}>
            <Grid item xs={12} md={6}>
              <Box sx={{ border: "1px solid #D4F0FC", borderRadius: "20px" }}>
                <Box
                  sx={{
                    p: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={"/aboutus_images/autralia-arinnovate-lication-img.png"}
                    alt=""
                    height={221}
                    width={558}
                    style={{ m: "10px" }}
                  />
                </Box>
                <Box sx={{ bgcolor: "#D4F0FC", p: "10px" }}>
                  <CustomTypography
                    sx={{
                      fontSize: "24px",
                      fontWeight: 600,
                      color: "#01313F",
                      textAlign: "center",
                    }}
                  >
                    Australia
                  </CustomTypography>
                  <CustomTypography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 400,
                      color: "#01313F",
                      textAlign: "center",
                    }}
                  >
                    AR Innovations Pty Ltd
                  </CustomTypography>
                </Box>
                <Box sx={{ p: "20px" }}>
                  <CustomTypography
                    sx={{
                      fontSize: "19px",
                      fontWeight: 400,
                      color: "#01313F",
                      textAlign: "center",
                    }}
                  >
                    107, College Street, Cambridge Park,
                  </CustomTypography>
                  <CustomTypography
                    sx={{
                      fontSize: "19px",
                      fontWeight: 400,
                      color: "#01313F",
                      textAlign: "center",
                    }}
                  >
                    Sydney, 2747
                  </CustomTypography>
                  <CustomTypography
                    sx={{
                      fontSize: "19px",
                      fontWeight: 400,
                      color: "#01313F",
                      textAlign: "center",
                    }}
                  >
                    Australian Business Number (ABN):
                  </CustomTypography>
                  <CustomTypography
                    sx={{
                      fontSize: "19px",
                      fontWeight: 400,
                      color: "#01313F",
                      textAlign: "center",
                    }}
                  >
                    58652722337
                  </CustomTypography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ border: "1px solid #D4F0FC", borderRadius: "20px" }}>
                <Box
                  sx={{
                    p: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={"/aboutus_images/india-arinnovate-location-img.png"}
                    alt=""
                    height={221}
                    width={558}
                    style={{ m: "10px" }}
                  />
                </Box>
                <Box sx={{ bgcolor: "#D4F0FC", p: "10px" }}>
                  <CustomTypography
                    sx={{
                      fontSize: "24px",
                      fontWeight: 600,
                      color: "#01313F",
                      textAlign: "center",
                    }}
                  >
                    India
                  </CustomTypography>
                  <CustomTypography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 400,
                      color: "#01313F",
                      textAlign: "center",
                    }}
                  >
                    AR Innovations Pty Ltd
                  </CustomTypography>
                </Box>
                <Box
                  sx={{
                    p: "20px",
                    dispaly: "flex",
                    alignItems: "flex-start",
                    height: "154px",
                  }}
                >
                  <CustomTypography
                    sx={{
                      fontSize: "19px",
                      fontWeight: 400,
                      color: "#01313F",
                      textAlign: "center",
                    }}
                  >
                    251, Pilla Reddy Layout, Dodda Banaswadi,
                  </CustomTypography>
                  <CustomTypography
                    sx={{
                      fontSize: "19px",
                      fontWeight: 400,
                      color: "#01313F",
                      textAlign: "center",
                    }}
                  >
                    Bangalore - 43
                  </CustomTypography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{ bgcolor: "#1097CD", p: { xs: "50px 0px 50px 0px", md: "50px" } }}
      >
        <Container>
          <Stack spacing={2}>
            <CustomTypography
              sx={{
                fontSize: "30px",
                fontWeight: 600,
                color: "#FFFFFF",
                textDecoration: "underline",
              }}
            >
              Contact Information
            </CustomTypography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginLeft: { xs: "0px", md: "20px !important" },
              }}
            >
              <MailOutlineIcon sx={{ color: "#FFFFFF", fontSize: "26px" }} />
              <CustomTypography
                sx={{
                  fontSize: "23px",
                  fontWeight: 400,
                  color: "#FFFFFF",
                }}
              >
                Email: grow@arinnovate.io
              </CustomTypography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: { xs: "flex-start", md: "center" },
                gap: "10px",
                marginLeft: { xs: "0px", md: "20px !important" },
              }}
            >
              <SupervisorAccountIcon
                sx={{ color: "#FFFFFF", fontSize: "26px" }}
              />
              <CustomTypography
                sx={{
                  fontSize: "23px",
                  fontWeight: 400,
                  color: "#FFFFFF",
                }}
              >
                Management: Gokul Srinivasan, CEO Suji Gokul, COO
              </CustomTypography>
            </Box>
          </Stack>
        </Container>
      </Box>
      <SubscribHome />
      <FooterHome />
    </>
  );
};

export default AboutUs;
