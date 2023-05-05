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

const TestimonialHome = () => {
  const breakPoints = [
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 974, itemsToShow: 1 },
  ];

  return (
    <Container>
      <Stack direction={"row"} sx={{ gap: "10px", justifyContent: "center" }}>
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
      <Carousel breakPoints={breakPoints}>
        <Box
          sx={{
            backgroundImage: "url(/union.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            marginTop: "150px",
            borderColor: "#034275",
            borderStyle: "solid",
          }}
        >
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
                <img src="/Star.png" alt="" />
                <img src="/Star.png" alt="" />
                <img src="/Star.png" alt="" />
                <img src="/Star.png" alt="" />
                <img src="/Star.png" alt="" />
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
