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
} from "@mui/material";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import styles from "./companyprofileview.module.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const CompanyOverview = () => {
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
          About the Company
        </CustomTypography>
        <Box
          sx={{
            backgroundImage:
              'url("/companyprofile_images/about-the-company-bg.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "10px",
            p: { xs: "10px", sm: "40px 30px 40px 30px" },
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={7}>
              <Image
                src="/companyprofile_images/company-profile-video-img.png"
                width="641"
                height="291"
                alt="Company profile video image"
                priority={true}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={5}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <CustomTypography
                sx={{ fontWeight: 600, fontSize: "18px", color: "#FFF" }}
              >
                CEO : Tim Cook
              </CustomTypography>
              <CustomTypography
                sx={{ fontWeight: 600, fontSize: "18px", color: "#FFF" }}
              >
                Founded : 1976
              </CustomTypography>
              <CustomTypography
                sx={{ fontWeight: 600, fontSize: "18px", color: "#FFF" }}
              >
                Industry : IT
              </CustomTypography>
              <CustomTypography
                sx={{ fontWeight: 600, fontSize: "18px", color: "#FFF" }}
              >
                Headquarters : United
              </CustomTypography>
              <CustomTypography
                sx={{
                  fontWeight: 600,
                  fontSize: "18px",
                  color: "#FFF",
                }}
              >
                Link :{" "}
                <span style={{ textDecoration: "underline" }}>
                  Apple Website
                </span>
              </CustomTypography>
            </Grid>
          </Grid>
          <CustomTypography
            sx={{
              fontWeight: 400,
              fontSize: "14px",
              color: "#FFF",
              mt: "40px",
            }}
          >
            We?re a diverse collective of thinkers and doers, continually
            reimagining what?s possible to help us all do what we love in new
            ways. And the same innovation that goes into our products also
            applies to our practices ? strengthening our commitment to leave the
            world better than we found it. This is where your work can make a
            difference in people?s lives. Including your own.
          </CustomTypography>
          <CustomTypography
            sx={{
              fontWeight: 400,
              fontSize: "17px",
              color: "#FFF",
              mt: "25px",
            }}
          >
            See More
          </CustomTypography>
        </Box>
      </Container>
      <Container>
        <CustomTypography className={styles.ComProfileSubtitleTypo}>
          Locations we are operating
        </CustomTypography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <Image
              src="/companyprofile_images/company-location-map-img.png"
              width="741"
              height="291"
              alt="Company location image"
              priority={true}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <CustomTypography
              sx={{
                fontWeight: 600,
                fontSize: "15px",
                color: "#01313F",
              }}
            >
              Address
            </CustomTypography>
            <CustomTypography
              sx={{
                fontWeight: 500,
                fontSize: "14px",
                color: "#01313F",
              }}
            >
              Lorem Ipsum lorem ipsum Lorem Ipsum lorem ipsum Lorem Ipsum lorem
              ipsum Lorem Ipsum lorem ipsum Lorem Ipsum lorem ipsum
            </CustomTypography>
            <CustomTypography
              sx={{
                fontWeight: 500,
                fontSize: "15px",
                color: "#01313F",
              }}
            >
              000000, United State
            </CustomTypography>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <CustomTypography className={styles.ComProfileSubtitleTypo}>
          Leaders at Apple
        </CustomTypography>
      </Container>
      <Box sx={{ bgcolor: "#E9F8FF", pt: "40px", pb: "40px" }}>
        <Container>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Image
                src="/companyprofile_images/company-leaders-img-1.png"
                width="388"
                height="451"
                alt="Company leaders image 1"
                priority={true}
              />
              <CustomTypography
                className={styles.comProfileLeaderName}
                sx={{
                  fontWeight: 600,
                  fontSize: "15px",
                  color: "#01313F",
                  textAlign: "center",
                }}
              >
                Lorem Ipsum
              </CustomTypography>
              <CustomTypography className={styles.comProfileLeaderTitle}>
                Director
              </CustomTypography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Image
                src="/companyprofile_images/company-leaders-img-2.png"
                width="388"
                height="451"
                alt="Company leaders image 2"
                priority={true}
              />
              <CustomTypography
                className={styles.comProfileLeaderName}
                sx={{
                  fontWeight: 600,
                  fontSize: "15px",
                  color: "#01313F",
                  textAlign: "center",
                }}
              >
                Lorem Ipsum
              </CustomTypography>
              <CustomTypography className={styles.comProfileLeaderTitle}>
                Director
              </CustomTypography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Image
                src="/companyprofile_images/company-leaders-img-3.png"
                width="388"
                height="451"
                alt="Company leaders image 3"
                priority={true}
              />
              <CustomTypography
                className={styles.comProfileLeaderName}
                sx={{
                  fontWeight: 600,
                  fontSize: "15px",
                  color: "#01313F",
                  textAlign: "center",
                }}
              >
                Lorem Ipsum
              </CustomTypography>
              <CustomTypography className={styles.comProfileLeaderTitle}>
                Director
              </CustomTypography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container>
        <CustomTypography className={styles.ComProfileSubtitleTypo}>
          Team and Culture
        </CustomTypography>
        {/* <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Image
              src="/companyprofile_images/company-cul-img-1.png"
              width="388"
              height="548"
              alt="Company culture image 1"
              priority={true}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Stack
              spacing={2}
              direction="column"
              justify="space-between"
              sx={{ height: "100%" }}
            >
              <Box sx={{ height: "50%" }}>
                <Image
                  src="/companyprofile_images/company-cul-img-2.png"
                  width="388"
                  height="261"
                  alt="Company culture image 2"
                  priority={true}
                />
              </Box>
              <Box sx={{ height: "50%" }}>
                <Image
                  src="/companyprofile_images/company-cul-img-3.png"
                  width="388"
                  height="261"
                  alt="Company culture image 3"
                  priority={true}
                />
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Image
              src="/companyprofile_images/company-cul-img-4.png"
              width="388"
              height="548"
              alt="Company culture image 4"
              priority={true}
            />
          </Grid>
        </Grid> */}
        <ImageList
          sx={{ width: "100%", height: 400 }}
          variant="quilted"
          cols={3}
          rowHeight={200}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 200, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
      <Container>
        <CustomTypography className={styles.ComProfileSubtitleTypo}>
          Social Media Links
        </CustomTypography>
        <Box
          sx={{
            backgroundImage:
              'url("/companyprofile_images/about-the-company-bg.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "10px",
            p: "40px 30px 40px 30px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid container spacing={2} sx={{ width: { xs: "100%", md: "80%" } }}>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <Box sx={{ width: "30px" }}>
                  <Image
                    src="/companyprofile_images/comProfile-fb-logo.png"
                    width="17"
                    height="29"
                    alt="Picture of the facebook logo"
                    priority={true}
                  />
                </Box>
                <CustomTypography className={styles.comProfileMediaTypo}>
                  Lorem Ipsum
                </CustomTypography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <Box sx={{ width: "30px" }}>
                  <Image
                    src="/companyprofile_images/comProfile-linkedin-logo.png"
                    width="30"
                    height="25"
                    alt="Picture of the linkedin logo"
                    priority={true}
                  />
                </Box>
                <CustomTypography className={styles.comProfileMediaTypo}>
                  Lorem Ipsum
                </CustomTypography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <Box sx={{ width: "30px" }}>
                  <Image
                    src="/companyprofile_images/comProfile-twitter-logo.png"
                    width="30"
                    height="25"
                    alt="Picture of the twitter logo"
                    priority={true}
                  />
                </Box>
                <CustomTypography className={styles.comProfileMediaTypo}>
                  Lorem Ipsum
                </CustomTypography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <Box sx={{ width: "30px" }}>
                  <Image
                    src="/companyprofile_images/comProfile-youtube-logo.png"
                    width="35"
                    height="25"
                    alt="Picture of the youtube logo"
                    priority={true}
                  />
                </Box>
                <CustomTypography className={styles.comProfileMediaTypo}>
                  Lorem Ipsum
                </CustomTypography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box>
        <Container>
          <CustomTypography className={styles.ComProfileSubtitleTypo}>
            Employee Reviews
          </CustomTypography>
          <Rating size="large" name="read-only" value={5} readOnly />
          <CustomTypography
            sx={{
              fontWeight: 600,
              fontSize: "15px",
              color: "#01313F",
            }}
          >
            3 Review
          </CustomTypography>
          <Divider sx={{ bgcolor: "rgba(3, 66, 117, 0.15)", mt: "30px" }} />
        </Container>
        <Box sx={{ pt: "24px", pb: "24px" }}>
          <Container>
            <CustomTypography className={styles.ComProfileReviewNameTypo}>
              Lorem Ipsum
            </CustomTypography>
            <Rating name="read-only" value={3} readOnly />
            <CustomTypography
              sx={{
                fontWeight: 500,
                fontSize: "15px",
                color: "#01313F",
                mt: "15px",
              }}
            >
              25 June 2023 | 12:45 PM
            </CustomTypography>
            <CustomTypography
              sx={{
                fontWeight: 500,
                fontSize: "14px",
                color: "#01313F",
                mt: "15px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam,
            </CustomTypography>
          </Container>
        </Box>
        <Box sx={{ pt: "24px", pb: "24px", bgcolor: "#E9F8FF" }}>
          <Container>
            <CustomTypography className={styles.ComProfileReviewNameTypo}>
              Lorem Ipsum
            </CustomTypography>
            <Rating name="read-only" value={3} readOnly />
            <CustomTypography
              sx={{
                fontWeight: 500,
                fontSize: "15px",
                color: "#01313F",
                mt: "15px",
              }}
            >
              25 June 2023 | 12:45 PM
            </CustomTypography>
            <CustomTypography
              sx={{
                fontWeight: 500,
                fontSize: "14px",
                color: "#01313F",
                mt: "15px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam,
            </CustomTypography>
          </Container>
        </Box>
        <Box sx={{ pt: "24px", pb: "24px" }}>
          <Container>
            <CustomTypography className={styles.ComProfileReviewNameTypo}>
              Lorem Ipsum
            </CustomTypography>
            <Rating name="read-only" value={3} readOnly />
            <CustomTypography
              sx={{
                fontWeight: 500,
                fontSize: "15px",
                color: "#01313F",
                mt: "15px",
              }}
            >
              25 June 2023 | 12:45 PM
            </CustomTypography>
            <CustomTypography
              sx={{
                fontWeight: 500,
                fontSize: "14px",
                color: "#01313F",
                mt: "15px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam,
            </CustomTypography>
          </Container>
        </Box>
        <Container>
          <CustomTypography
            sx={{
              fontWeight: 400,
              fontSize: "15px",
              color: "#00339B",
              textDecoration: "underline",
            }}
          >
            See All Reviews
          </CustomTypography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                backgroundImage:
                  'url("/companyprofile_images/rate-your-workplace-bg.png")',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: "10px",
                p: "40px 30px 40px 30px",
                width: { xs: "100%", sm: "60%" },
                mt: "40px",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <CustomTypography
                sx={{
                  fontWeight: 600,
                  fontSize: "22px",
                  color: "#FFF",
                }}
              >
                Rate Your Workplace
              </CustomTypography>
              <CustomTypography
                sx={{
                  fontWeight: 400,
                  fontSize: "14px",
                  color: "#FFF",
                  textAlign: "center",
                }}
              >
                Help Others sharing your experience with the company
              </CustomTypography>
              <Rating
                name="simple-controlled"
                value={0}
                sx={{
                  fontSize: "2.875rem",
                  "& .MuiRating-iconEmpty": {
                    color: "white",
                    borderColor: "white",
                  },
                }}
              />
            </Box>
            <Button
              variant="contained"
              sx={{
                mt: "40px",
                bgcolor: "#0D88E9 !important",
                textTransform: "capitalize",
                p: "15px 25px 15px 25px",
                borderRadius: "10px",
              }}
            >
              Share Your Review
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default dynamic(() => Promise.resolve(CompanyOverview), { ssr: false });

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 2,
    cols: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    rows: 2,
    cols: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
];
