import { PRIMARY } from "../../theme/colors";
import { Box, Container, Grid, Stack, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CustomTypography } from "../../ui-components/CustomTypography/CustomTypography";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

import "./GetHired.module.css";
import { MAX } from "../../theme/spacings";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { searchJobs } from "@/redux/slices/search";
import { useRouter } from "next/router";

const GetHiredHome = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const latestJobs = useSelector((state) => state?.searchJobs?.searchDetails) || [];

  const [active, setActive] = useState(2);

  const mobile = useMediaQuery("(max-width:700px)");
  const tablet = useMediaQuery("(max-width:1039px)");

  const getNextActive = () => {
    setActive((state) => state + 1);
  };

  const getPrvActive = () => {
    setActive((state) => state - 1);
  };

  const getActiveBody = (id) => {
    return active === id ? `activeBody` : "nonActiveBody";
  };

  const getJobs = () => {
    dispatch(
      searchJobs({
        value: 1,
        names: [],
        exper: [],
        title: "",
        address: "",
        jobVariant: "",
        selectedCompanies: "",
        selectedSector: "",
      })
    )
      .then(() => {})
      .catch((error) => {
        console.warn(error);
      });
  };

  const handleNavigate = (jobTitle, jobRole, _id) => {
    router.push(`/jobs/${jobTitle}/${jobRole}/${_id}`);
  };

  const extractFirstTwoTags = (data) => {
    const container = document.createElement("div");
    container.innerHTML = data;
    const firstPTag = container.querySelector("p");
    if (firstPTag) {
      const textContent = firstPTag.textContent.trim();
      return textContent.length <= 60
        ? textContent
        : `${textContent.substring(0, 60)}...`;
    }
    return "";
  };

  useEffect(() => {
    getJobs();
  }, []);

  const numberOfCards = mobile ? 1 : tablet ? 2 : 3;

  return (
    <Box sx={{ padding: "50px 0" }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Stack direction={"row"} sx={{ gap: "20px", flexWrap: "wrap" }}>
            <CustomTypography
              sx={{
                fontSize: MAX,
                fontWeight: "700",
                fontFamily: "Inter-Bold",
              }}
            >
              Get
            </CustomTypography>
            <CustomTypography
              sx={{
                fontSize: MAX,
                fontWeight: "700",
                color: PRIMARY,
                fontFamily: "Inter-Bold",
              }}
            >
              Hired
            </CustomTypography>
          </Stack>

          <Stack
            direction={"row"}
            sx={{ justifyContent: "space-between", width: "100%" }}
          >
            <div className="swiper-prev">
              <WestIcon
                onClick={() => getPrvActive()}
                sx={{ cursor: "pointer" }}
              />
            </div>
            <div className="swiper-next">
              <EastIcon
                onClick={() => getNextActive()}
                sx={{ cursor: "pointer" }}
              />
            </div>
          </Stack>
        </Box>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={numberOfCards}
          loop={true}
          coverflowEffect={{
            rotate: 1,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="swiper_container"
        >
          {latestJobs.map((jobs, index) => (
            <SwiperSlide key={index}>
              <Box className={`hiredCard hiredCardActive`}>
                <Grid container>
                  <Grid
                    item
                    md={7}
                    sm={6}
                    xs={12}
                    sx={{ padding: "15px 30px" }}
                  >
                    <Stack
                      sx={{
                        gap: "15px",
                        justifyContent: "center",
                        width: "100%",
                      }}
                    >
                      <CustomTypography
                        sx={{
                          fontFamily: "Inter-Bold",
                          fontSize: "22px",
                          color: "white",
                          fontWeight: 700,
                        }}
                      >
                        {jobs.jobRole}
                      </CustomTypography>
                      <CustomTypography
                        className={`${getActiveBody(3)} wrapText`}
                      >
                        {extractFirstTwoTags(jobs?.jobDescription)}
                      </CustomTypography>
                      <button
                        style={{
                          backgroundColor: "#F3FCFF",
                          borderRadius: "5px",
                          fontSize: "25px",
                          fontWeight: "700",
                        }}
                        onClick={() => {
                          handleNavigate(
                            jobs.jobTitle,
                            jobs?.jobRole,
                            jobs?._id
                          );
                        }}
                      >
                        View More
                      </button>
                    </Stack>
                  </Grid>
                  <Grid
                    item
                    md={4.8}
                    sm={6}
                    xs={0}
                    sx={{ display: { md: "flex", sm: "flex", xs: "none" } }}
                  >
                    <Image
                      src="/hired1.png"
                      className="getHiredImage"
                      alt=""
                      width="0"
                      height="0"
                      sizes="100vw"
                    />
                  </Grid>
                </Grid>
              </Box>
            </SwiperSlide>
          ))}

          <div className="slider-controler">
            {/* <div className="swiper-button-prev slider-arrow"></div>
            <div className="swiper-button-next slider-arrow"></div> */}
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </Container>
    </Box>
  );
};

export default GetHiredHome;
