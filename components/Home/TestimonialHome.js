"use client";
import { PRIMARY } from "../../theme/colors";
import { MAX } from "../../theme/spacings";
import { CustomTypography } from "../../ui-components/CustomTypography/CustomTypography";
import { Grid, Box, Stack, Container, Avatar } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Carousel from "react-elastic-carousel";
import Image from "next/image";
import { useRef } from "react";

const TestimonialHome = () => {
  const breakPoints = [
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 974, itemsToShow: 1 },
  ];

  const carouselRef = useRef(null);
  const totalPages = 3;
  let resetTimeout;

  return (
    <Container>
      <Stack
        direction={"row"}
        sx={{ gap: "10px", justifyContent: "center", flexWrap: "wrap" }}
      >
        <CustomTypography
          sx={{
            fontSize: MAX,
            fontWeight: "700",
            fontFamily: "Inter-Bold",
          }}
        >
          Client
        </CustomTypography>
        <CustomTypography
          sx={{
            fontSize: MAX,
            fontWeight: "700",
            color: PRIMARY,
            fontFamily: "Inter-Bold",
          }}
        >
          Testimonial
        </CustomTypography>
      </Stack>
      <Carousel
        breakPoints={breakPoints}
        enableAutoPlay
        ref={carouselRef}
        showArrows={false}
        onNextEnd={({ index }) => {
          clearTimeout(resetTimeout);
          if (index + 1 === totalPages) {
            resetTimeout = setTimeout(() => {
              carouselRef.current.goTo(0);
            }, 1500); // same time
          }
        }}
      >
        <Box className="testimonialContainer">
          <Grid container>
            <Grid
              item
              md={3}
              xs={12}
              sm={12}
              sx={{
                display: "flex",
                justifyItems: "center",
                alignItems: "center",
                flexDirection: "column",
                minHeight: "200px",
                padding: "25px",
                top: "-100px",
                position: "relative",
              }}
            >
              <Box>
                <Avatar sx={{ width: 130, height: 130 }} />
              </Box>
              <CustomTypography sx={{ fontSize: "28px", fontWeight: "600" }}>
                Lorem ipsum
              </CustomTypography>
              <Stack direction="row" spacing={1}>
                <Image src="/Star.png" alt="" width={25} height={25} />
                <Image src="/Star.png" alt="" width={25} height={25} />
                <Image src="/Star.png" alt="" width={25} height={25} />
                <Image src="/Star.png" alt="" width={25} height={25} />
                <Image src="/Star.png" alt="" width={25} height={25} />
              </Stack>
            </Grid>
            <Grid
              item
              md={9}
              xs={12}
              sm={12}
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                minHeight: "200px",
                padding: "40px 30px",
                top: { md: "0", xs: "-100px", sm: "-100px" },
                position: "relative",
              }}
            >
              <CustomTypography sx={{ textAlign: "justify", fontSize: "18px" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore
                consectetur, neque doloribus, cupiditate numquam dignissimos
                laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </CustomTypography>
            </Grid>
          </Grid>
        </Box>

        <Box className="testimonialContainer">
          <Grid container>
            <Grid
              item
              md={3}
              xs={12}
              sm={12}
              sx={{
                display: "flex",
                justifyItems: "center",
                alignItems: "center",
                flexDirection: "column",
                minHeight: "200px",
                padding: "25px",
                top: "-100px",
                position: "relative",
              }}
            >
              <Box>
                <Avatar sx={{ width: 130, height: 130 }} src="Group 85.png" />
              </Box>
              <CustomTypography sx={{ fontSize: "28px", fontWeight: "600" }}>
                Lorem ipsum
              </CustomTypography>
              <Stack direction="row" spacing={1}>
                <Image src="/Star.png" alt="" width={25} height={25} />
                <Image src="/Star.png" alt="" width={25} height={25} />
                <Image src="/Star.png" alt="" width={25} height={25} />
                <Image src="/Star.png" alt="" width={25} height={25} />
                <Image src="/Star.png" alt="" width={25} height={25} />
              </Stack>
            </Grid>
            <Grid
              item
              md={9}
              xs={12}
              sm={12}
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                minHeight: "200px",
                padding: "40px 30px",
                top: { md: "0", xs: "-100px", sm: "-100px" },
                position: "relative",
              }}
            >
              <CustomTypography sx={{ textAlign: "justify", fontSize: "18px" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore
                consectetur, neque doloribus, cupiditate numquam dignissimos
                laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </CustomTypography>
            </Grid>
          </Grid>
        </Box>

        <Box className="testimonialContainer">
          <Grid container>
            <Grid
              item
              md={3}
              xs={12}
              sm={12}
              sx={{
                display: "flex",
                justifyItems: "center",
                alignItems: "center",
                flexDirection: "column",
                minHeight: "200px",
                padding: "25px",
                top: "-100px",
                position: "relative",
              }}
            >
              <Box>
                <Avatar sx={{ width: 130, height: 130 }} />
              </Box>
              <CustomTypography sx={{ fontSize: "28px", fontWeight: "600" }}>
                Lorem ipsum
              </CustomTypography>
              <Stack direction="row" spacing={1}>
                <Image src="/Star.png" alt="" width={25} height={25} />
                <Image src="/Star.png" alt="" width={25} height={25} />
                <Image src="/Star.png" alt="" width={25} height={25} />
                <Image src="/Star.png" alt="" width={25} height={25} />
                <Image src="/Star.png" alt="" width={25} height={25} />
              </Stack>
            </Grid>
            <Grid
              item
              md={9}
              xs={12}
              sm={12}
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                minHeight: "200px",
                padding: "40px 30px",
                top: { md: "0", xs: "-100px", sm: "-100px" },
                position: "relative",
              }}
            >
              <CustomTypography sx={{ textAlign: "justify", fontSize: "18px" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore
                consectetur, neque doloribus, cupiditate numquam dignissimos
                laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </CustomTypography>
            </Grid>
          </Grid>
        </Box>
      </Carousel>
    </Container>
  );
};

export default TestimonialHome;
