"use client";
import { CustomTypography } from "../../ui-components/CustomTypography/CustomTypography";
import {
  Grid,
  Box,
  Stack,
  Container,
  styled,
  Avatar,
  Rating,
  Tabs,
  Tab,
  Divider,
  Button,
  Card,
} from "@mui/material";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import styles from "./companyprofileview.module.css";

const WhyJoinUs = () => {
  return (
    <>
      <Container>
        <CustomTypography
          sx={{
            fontWeight: 600,
            fontSize: "17px",
            color: "#01313F",
            mb: "24px",
            mt: "16px",
          }}
        >
          A word From Our CEO
        </CustomTypography>
        <Box
          sx={{
            backgroundImage:
              'url("/companyprofile_images/about-the-company-bg.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "10px",
            p: { xs: "10px 10px 10px 10px", sm: "40px 50px 50px 50px" },
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
              <Image
                src="/companyprofile_images/CEO-img.png"
                width="431"
                height="389"
                alt="Picture of the comapny CEO"
                priority={true}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={7}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <CustomTypography
                sx={{
                  fontWeight: 400,
                  fontSize: "15px",
                  color: "#FFF",
                  mt: "40px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.<br></br>
                <br></br>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </CustomTypography>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Image
                  src="/companyprofile_images/CEO-signature-img.png"
                  width="100"
                  height="33"
                  alt="Signature image of the comapny CEO"
                  priority={true}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <CustomTypography className={styles.ComProfileSubtitleTypo}>
          Verified Company Benefits
        </CustomTypography>
      </Container>
      <Box
        sx={{
          bgcolor: "#E9F8FF",
          pt: { xs: "20px", md: "100px" },
          pb: { xs: "20px", md: "50px" },
        }}
      >
        <Container>
          <Grid container spacing={2} sx={{ height: "auto" }}>
            <Grid item xs={6} sm={4} md={2}>
              <Card
                sx={{
                  bgcolor: "#FBF3E9",
                  borderRadius: "10px",
                  border: "3px solid #FFFBF6",
                  height: "100%",
                  width: "100%",
                  minHeight: "90px",
                }}
              >
                <CustomTypography className={styles.comBenefitsTypo}>
                  Insurance
                </CustomTypography>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Card
                sx={{
                  bgcolor: "#DBFFF2",
                  borderRadius: "10px",
                  border: "3px solid #EEFFF9",
                  height: "100%",
                  width: "100%",
                  minHeight: "90px",
                }}
              >
                <CustomTypography className={styles.comBenefitsTypo}>
                  Flexibility at work
                </CustomTypography>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              {" "}
              <Card
                sx={{
                  bgcolor: "#C1E6F2",
                  borderRadius: "10px",
                  border: "3px solid #DCF1F7",
                  height: "100%",
                  width: "100%",
                  minHeight: "90px",
                }}
              >
                <CustomTypography className={styles.comBenefitsTypo}>
                  Leave
                </CustomTypography>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Card
                sx={{
                  bgcolor: "#FFEEEF",
                  borderRadius: "10px",
                  border: "3px solid #FFF8F8",
                  height: "100%",
                  width: "100%",
                  minHeight: "90px",
                }}
              >
                <CustomTypography className={styles.comBenefitsTypo}>
                  Health and Wellness
                </CustomTypography>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Card
                sx={{
                  bgcolor: "#EAEBF4",
                  borderRadius: "10px",
                  border: "3px solid #F5F6FF",
                  height: "100%",
                  width: "100%",
                  minHeight: "90px",
                }}
              >
                <CustomTypography className={styles.comBenefitsTypo}>
                  Financial Perks
                </CustomTypography>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Card
                sx={{
                  bgcolor: "#F9E1F5",
                  borderRadius: "10px",
                  border: "3px solid #F5F6FF",
                  height: "100%",
                  width: "100%",
                  minHeight: "90px",
                }}
              >
                <CustomTypography className={styles.comBenefitsTypo}>
                  Retirements
                </CustomTypography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ pb: "40px" }}>
        <Container>
          <CustomTypography className={styles.ComProfileSubtitleTypo}>
            Health Insurance
          </CustomTypography>
          <CustomTypography
            sx={{
              fontWeight: 400,
              fontSize: "15px",
              color: "#000",
              //   mt: "40px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.<br></br>
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </CustomTypography>
        </Container>
      </Box>
      <Box sx={{ bgcolor: "#FFFAF4", pb: "40px", pt: "1px" }}>
        <Container>
          <CustomTypography className={styles.ComProfileSubtitleTypo}>
            Life Insurance
          </CustomTypography>
          <CustomTypography
            sx={{
              fontWeight: 400,
              fontSize: "15x",
              color: "#000",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.<br></br>
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </CustomTypography>
        </Container>
      </Box>
      <Box>
        <Container>
          <CustomTypography className={styles.ComProfileSubtitleTypo}>
            Vision Insurance
          </CustomTypography>
          <CustomTypography
            sx={{
              fontWeight: 400,
              fontSize: "15px",
              color: "#000",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.<br></br>
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </CustomTypography>
        </Container>
      </Box>
      <Box
        sx={{
          backgroundImage:
            'url("/companyprofile_images/careergrowth-oppotunities-bg.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          p: { xs: "10px 10px 10px 10px", sm: "40px 50px 50px 50px" },
          mt: "40px",
        }}
      >
        <Container>
          {" "}
          <CustomTypography
            className={styles.ComProfileCareerGrowthSubtitleTypo}
          >
            Career Growth Opportunities
          </CustomTypography>
          <CustomTypography
            sx={{
              fontWeight: 400,
              fontSize: "15px",
              color: "#FFF",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.<br></br>
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </CustomTypography>
        </Container>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: "50px" }}>
        <Image
          src="/companyprofile_images/why-join-us-video-img.png"
          width="840"
          height="295"
          alt="Why join us video"
          priority={true}
        />
      </Box>
    </>
  );
};

export default dynamic(() => Promise.resolve(WhyJoinUs), { ssr: false });
