"use client";
import Navbar from "@/components/Navbar/Navbar";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  styled,
} from "@mui/material";
import Image from "next/image";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import SubscribHome from "@/components/Home/SubscribHome";
import FooterHome from "@/components/Home/FooterHome";
import styles from "./aboutus.module.css";
// import styled from "styled-components";

// const StyledCardA = styled(Card)({
//   width: "230px",
//   height: "120px",
//   borderRadius: "8px",
//   bgcolor: "#D4F0FC",
//   boxShadow: "none",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// });

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          backgroundImage: 'url("/JobListingPageBG.svg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "400px",
          pt: "30px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={5} sx={{ display: "flex", alignItems: "center" }}>
              <CustomTypography
                sx={{
                  fontSize: "45px",
                  fontWeight: 700,
                  color: "white",
                }}
              >
                Who We Are
              </CustomTypography>
            </Grid>
            <Grid item xs={7}>
              <Box sx={{ marginTop: "auto" }}>
                <Image
                  src={"/aboutus-who-we-arepeople-img.png"}
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
          height: "250px",
          bgcolor: "rgba(212, 240, 252, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: "40px",
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
                //textAlign: "center",
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
                width: "50%",
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
      <Box sx={{ p: "50px" }}>
        <Container>
          <Grid container spacing={2}>
            <Grid
              item
              xs={7}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <CustomTypography
                sx={{
                  fontSize: "30px",
                  fontWeight: 600,
                  color: "#01313F",
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
              xs={5}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  bgcolor: "#D9D9D9",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src={"/aboutus-company-overview-img.png"}
                  alt=""
                  height={400}
                  width={310}
                />
                <Image
                  src={"/aboutus-company-overview-person-img.png"}
                  alt=""
                  height={391}
                  width={159}
                  style={{
                    position: "absolute",
                    top: "962px",
                    left: "1157px",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          p: "40px",
          bgcolor: "rgba(212, 240, 252, 0.5)",
          height: "480px",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <Container>
          <Grid container spacing={2} sx={{}}>
            <Grid item xs={6}>
              <Box
                sx={{
                  bgcolor: "#2699FF",
                  height: "300px",
                  borderRadius: "20px",
                  pl: "40px",
                  pr: "40px",
                }}
              >
                <Box sx={{ height: "90px" }}>
                  <Image
                    src={"/aboutus-ourvision-eclipse-img.png"}
                    alt=""
                    height={180}
                    width={180}
                    style={{
                      position: "relative",
                      top: "-89px",
                      left: "173px",
                    }}
                  />
                  <Image
                    src={"/aboutus-ourvision-blueboder-img.png"}
                    alt=""
                    height={180}
                    width={180}
                    style={{
                      position: "relative",
                      top: "-276px",
                      left: "173px",
                      zIndex: "-1",
                    }}
                  />
                  <Image
                    src={"/ourvision-arrow-img.png"}
                    alt=""
                    height={190}
                    width={228}
                    style={{
                      position: "relative",
                      top: "-436px",
                      left: "172px",
                    }}
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
            <Grid item xs={6}>
              <Box
                sx={{
                  bgcolor: "#2699FF",
                  height: "300px",
                  borderRadius: "20px",
                  pl: "40px",
                  pr: "40px",
                }}
              >
                <Box sx={{ height: "90px" }}>
                  <Image
                    src={"/aboutus-ourvision-eclipse-img.png"}
                    alt=""
                    height={180}
                    width={180}
                    style={{
                      position: "relative",
                      top: "-89px",
                      left: "173px",
                    }}
                  />
                  <Image
                    src={"/aboutus-ourvision-blueboder-img.png"}
                    alt=""
                    height={180}
                    width={180}
                    style={{
                      position: "relative",
                      top: "-276px",
                      left: "173px",
                      zIndex: "-1",
                    }}
                  />
                  <Image
                    src={"/ourmission-man-img.png"}
                    alt=""
                    height={240}
                    width={278}
                    style={{
                      position: "relative",
                      top: "-485px",
                      left: "128px",
                    }}
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
          <Box
          // sx={{
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   height: "auto",
          //   width: "100%",
          //   borderRadius: "25px",
          // }}
          >
            <Grid container spacing={2} sx={{ width: "100%" }}>
              <Grid item xs={4}>
                <Box className={styles.discovertheFeaturesCard}>
                  <Box className={styles.discovertheFeaturesImgBox}>
                    <Image
                      src={"/candidate-database-img.png"}
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
              <Grid item xs={4}>
                <Box className={styles.discovertheFeaturesCard}>
                  <Box className={styles.discovertheFeaturesImgBox}>
                    <Image
                      src={"/AI-engine-img.png"}
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
              <Grid item xs={4}>
                <Box className={styles.discovertheFeaturesCard}>
                  <Box className={styles.discovertheFeaturesImgBox}>
                    <Image
                      src={"/quick&easy-regis-img.png"}
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
              <Grid item xs={4}>
                <Box className={styles.discovertheFeaturesCard}>
                  <Box className="discovertheFeaturesImgBox">
                    <Image
                      src={"/resume-parsing-img.png"}
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
                      automatically extract information from it that’s important
                      to recruiters and store them in a secured database.
                    </CustomTypography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box className={styles.discovertheFeaturesCard}>
                  <Box className={styles.discovertheFeaturesImgBox}>
                    <Image
                      src={"/quick-discovery-img.png"}
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
                      With Recroot, job seekers have the ability to quickly and
                      easily find relevant job opportunities based on their
                      preferences, qualifications, and search criteria.
                    </CustomTypography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box className={styles.discovertheFeaturesCard}>
                  <Box className={styles.discovertheFeaturesImgBox}>
                    <Image
                      src={"/job-posting-img.png"}
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
              <Grid item xs={4}>
                <Box className={styles.discovertheFeaturesCard}>
                  <Box className={styles.discovertheFeaturesImgBox}>
                    <Image
                      src={"/quick-apply-img.png"}
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
                      quickly apply for job openings using their stored profile
                      information
                    </CustomTypography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box className={styles.discovertheFeaturesCard}>
                  <Box className={styles.discovertheFeaturesImgBox}>
                    <Image
                      src={"/application-tracking-img.png"}
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
              <Grid item xs={4}>
                <Box className={styles.discovertheFeaturesCard}>
                  <Box className={styles.discovertheFeaturesImgBox}>
                    <Image
                      src={"/blogs&- videos-img.png"}
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "15px",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card className={styles.technologiesCard}>
              <CardContent className={styles.technologiesCardcontent}>
                <Image
                  src={"/mongodb-img.svg"}
                  alt=""
                  height={110}
                  width={200}
                />
              </CardContent>
            </Card>
            <Card className={styles.technologiesCard}>
              <CardContent className={styles.technologiesCardcontent}>
                <Image
                  src={"/laravel-logo-img.svg"}
                  alt=""
                  height={110}
                  width={200}
                />
              </CardContent>
            </Card>
            <Card className={styles.technologiesCard}>
              <CardContent className={styles.technologiesCardcontent}>
                <Image
                  src={"/mysql-logo-img.svg"}
                  alt=""
                  height={110}
                  width={200}
                />
              </CardContent>
            </Card>
            <Card className={styles.technologiesCard}>
              <CardContent className={styles.technologiesCardcontent}>
                <Image
                  src={"/react-logo.svg"}
                  alt=""
                  height={110}
                  width={200}
                />
              </CardContent>
            </Card>
            <Card className={styles.technologiesCard}>
              <CardContent className={styles.technologiesCardcontent}>
                <Image
                  src={"/react-native-logo.svg"}
                  alt=""
                  height={40}
                  width={80}
                />
              </CardContent>
            </Card>
            <Card className={styles.technologiesCard}>
              <CardContent className={styles.technologiesCardcontent}>
                <Image
                  src={"/intelligence-logo.svg"}
                  alt=""
                  height={40}
                  width={80}
                />
              </CardContent>
            </Card>
            <Card className={styles.technologiesCard}>
              <CardContent className={styles.technologiesCardcontent}>
                <Image src={"/api-logo.svg"} alt="" height={50} width={100} />
              </CardContent>
            </Card>
            <Card className={styles.technologiesCard}>
              <CardContent className={styles.technologiesCardcontent}>
                <Image src={"/seo-logo.svg"} alt="" height={50} width={100} />
              </CardContent>
            </Card>
            <Card className={styles.technologiesCard}>
              <CardContent className={styles.technologiesCardcontent}>
                <Image src={"/nginx-logo.svg"} alt="" height={60} width={120} />
              </CardContent>
            </Card>
            <Card className={styles.technologiesCard}>
              <CardContent className={styles.technologiesCardcontent}>
                <Image
                  src={"/docker-logo.svg"}
                  alt=""
                  height={110}
                  width={200}
                />
              </CardContent>
            </Card>
            <Card className={styles.technologiesCard}>
              <CardContent className={styles.technologiesCardcontent}>
                <Image src={"/aws-logo.svg"} alt="" height={50} width={100} />
              </CardContent>
            </Card>
            <Card className={styles.technologiesCard}>
              <CardContent className={styles.technologiesCardcontent}>
                <Image
                  src={"/node-js-logo.svg"}
                  alt=""
                  height={110}
                  width={200}
                />
              </CardContent>
            </Card>
            <Card className={styles.technologiesCard}>
              <CardContent className={styles.technologiesCardcontent}>
                <Image
                  src={"/flutter-logo.svg"}
                  alt=""
                  height={110}
                  width={200}
                />
              </CardContent>
            </Card>
            <Card className={styles.technologiesCard}>
              <CardContent className={styles.technologiesCardcontent}>
                <Image
                  src={"/firebase-logo.svg"}
                  alt=""
                  height={110}
                  width={200}
                />
              </CardContent>
            </Card>
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
                xs={4}
                sx={{
                  height: "520px",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <Card
                  variant="outlined"
                  sx={{ height: "455px", borderColor: "#D4F0FC" }}
                >
                  <CardContent className={styles.ourTeamCardContent}>
                    <Box className={styles.ourTeamImgBox}>
                      <Image
                        className={styles.ourTeamImgOne}
                        src={"/person-one-img.jpg"}
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
                xs={4}
                sx={{
                  height: "520px",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <Card
                  variant="outlined"
                  sx={{
                    height: "455px",
                    borderColor: "#D4F0FC",
                    bgcolor: "#F8FDFF",
                    boxShadow: "3px 3px 10px #D4F0FC",
                  }}
                >
                  <CardContent className={styles.ourTeamCardContent}>
                    <Box className={styles.ourTeamImgBox}>
                      <Image
                        className={styles.ourTeamImgTwo}
                        src={"/person-one-img.jpg"}
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
                xs={4}
                sx={{
                  height: "520px",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <Card
                  variant="outlined"
                  sx={{ height: "455px", borderColor: "#D4F0FC" }}
                >
                  <CardContent className={styles.ourTeamCardContent}>
                    <Box className={styles.ourTeamImgBox}>
                      <Image
                        className={styles.ourTeamImgThree}
                        src={"/person-one-img.jpg"}
                        alt=""
                        height={291}
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
            <Grid item xs={6}>
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
                    src={"/autralia-arinnovate-lication-img.png"}
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
            <Grid item xs={6}>
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
                    src={"/india-arinnovate-location-img.png"}
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
      <Box sx={{ bgcolor: "#1097CD", p: "50px" }}>
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
                marginLeft: "20px !important",
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
                alignItems: "center",
                gap: "10px",
                marginLeft: "20px !important",
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
