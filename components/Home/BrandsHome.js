"use client";
import { MAX } from "../../theme/spacings";
import { CustomTypography } from "../../ui-components/CustomTypography/CustomTypography";
import { Grid, Box, Stack, Container } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Carousel from "react-elastic-carousel";
import Image from "next/image";
import companyservice from "@/redux/services/company.service";
import http from "@/redux/http-common";

const BrandsHome = () => {
  const newService = new companyservice();
  const [brands, setBrands] = useState([]);

  const getCompanies = async () => {
    await newService
      .getCompanies()
      .then((res) => {
        console.log(res.data, "companies");
        setBrands(res.data);
      })
      .catch(() => {
        console.log("something went wrong 1");
      });
  };

  const getLogo = (logo) => {
    if (logo) {
      return ` http://localhost:3000/api/getCompanyPhotos?compPhotos=${logo}`;
      // return await http
      //   .get(`getCompanyPhotos?compPhotos=${logo}`)
      //   .then((res) => res);
    }
    return "/logo4.png";
  };

  const breakPoints = [
    // { width: 451, itemsToShow: 1 },
    { width: 687, itemsToShow: 1 },
    { width: 873, itemsToShow: 3 },
    { width: 974, itemsToShow: 4 },
  ];

  const carouselRef = useRef(null);
  const totalPages = 4;
  let resetTimeout;

  useEffect(() => {
    getCompanies();
  }, []);

  if (brands.length < 1) return;

  return (
    <div>
      <Box
        className="brands"
        sx={{
          mt: "30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          textAlign: "center",
          color: "white",
          fontWeight: "800",
        }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CustomTypography
                sx={{
                  fontSize: MAX,
                  fontWeight: "900",
                  fontFamily: "Inter-Bold",
                }}
              >
                Brands We work
              </CustomTypography>
            </Grid>
            <Grid item xs={12}>
              <CustomTypography
                gutterBottom
                style={{
                  textAlign: "center",
                  position: "relative",
                  fontWeight: "900",
                  fontSize: "18px",
                }}
              >
                Find great tech talent with customizable solutions from
                Recroot.io
              </CustomTypography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container>
        <Stack
          direction="row"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
            bottom: "100px",
            zIndex: "2",
          }}
        >
          <Carousel
            breakPoints={breakPoints}
            enableAutoPlay
            ref={carouselRef}
            onNextEnd={({ index }) => {
              clearTimeout(resetTimeout);
              if (index + 1 === totalPages) {
                resetTimeout = setTimeout(() => {
                  carouselRef?.current?.goTo(0);
                }, 1500); // same time
              }
            }}
            itemsToShow={3}
          >
            {brands.map((brand, index) => (
              <Box
                key={index}
                sx={{
                  backgroundImage: "url(/Polygon1.png)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  height: "205px",
                  width: "180px",
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box className="brandsLogos">
                  <Image
                    src={getLogo(brand?.logo)}
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="brandsImages"
                    alt=""
                  />
                </Box>
              </Box>
            ))}
          </Carousel>
        </Stack>
      </Container>
    </div>
  );
};

export default BrandsHome;
