"use client";
import { Box, Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Carousel from "react-elastic-carousel";
import { useRef } from "react";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { BOLD } from "@/theme/fonts";

const SearchByCategory = () => {
  const breakPoints = [
    { width: 687, itemsToShow: 1 },
    { width: 873, itemsToShow: 3 },
    { width: 974, itemsToShow: 6 },
  ];

  const carouselRef = useRef(null);
  const totalPages = 2;
  let resetTimeout;

  return (
    <div
      className="searchbycaregoryContainer"
      style={{ backgroundColor: "#D4F0FC", height: "300px" }}
    >
      <Container>
        <Box>
          <CustomTypography
            variant="h4"
            fontFamily={BOLD}
            pt="50px"
            textAlign="center"
            gutterBottom
          >
            Search By&nbsp;<span style={{ color: "#02A9F7" }}>Category</span>
          </CustomTypography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Carousel
            className="categoryCarousel"
            breakPoints={breakPoints}
            enableAutoPlay
            ref={carouselRef}
            onNextEnd={({ index }) => {
              clearTimeout(resetTimeout);
              if (index + 1 === totalPages) {
                resetTimeout = setTimeout(() => {
                  carouselRef.current.goTo(0);
                }, 1500); // same time
              }
            }}
          >
            <div>
              <Card className="categoryCard">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image="/Saly-25.png"
                    alt="green iguana"
                    sx={{ p: "10px", objectFit: "contain" }}
                    size="cover"
                  />
                </CardActionArea>
              </Card>
              <CustomTypography
                className="cousltypo"
                variant="body1"
                textAlign={"center"}
                gutterBottom
              >
                Design
              </CustomTypography>
            </div>
            <div>
              <Card className="categoryCard">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image="/Saly-13.png"
                    alt="green iguana"
                    sx={{
                      p: "10px",
                      objectFit: "contain",
                      height: "100%",
                      width: "100%",
                    }}
                    size="cover"
                  />
                </CardActionArea>
              </Card>
              <CustomTypography
                className="cousltypo"
                variant="body1"
                textAlign={"center"}
                gutterBottom
              >
                Development
              </CustomTypography>
            </div>
            <div>
              <Card className="categoryCard">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image="/Other 17.png"
                    alt="green iguana"
                    sx={{
                      p: "10px",
                      objectFit: "contain",
                      height: "100%",
                      width: "100%",
                    }}
                    size="cover"
                  />
                </CardActionArea>
              </Card>
              <CustomTypography
                className="cousltypo"
                variant="body1"
                textAlign={"center"}
                gutterBottom
              >
                Sales
              </CustomTypography>
            </div>
            <div>
              <Card className="categoryCard">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image="/Other 15.png"
                    alt="green iguana"
                    sx={{
                      p: "10px",
                      objectFit: "contain",
                      height: "100%",
                      width: "100%",
                    }}
                    size="cover"
                  />
                </CardActionArea>
              </Card>
              <CustomTypography
                className="cousltypo"
                variant="body1"
                textAlign={"center"}
                gutterBottom
              >
                Data Entry
              </CustomTypography>
            </div>
            <div>
              <Card className="categoryCard">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image="/1 1.png"
                    alt="green iguana"
                    sx={{
                      p: "10px",
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                    size="cover"
                  />
                </CardActionArea>
              </Card>
              <CustomTypography
                className="cousltypo"
                variant="body1"
                textAlign={"center"}
                gutterBottom
              >
                Management
              </CustomTypography>
            </div>
            <div>
              <Card className="categoryCard">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image="/Saly-31.png"
                    alt="green iguana"
                    sx={{
                      p: "10px",
                      objectFit: "contain",
                      height: "100%",
                      width: "100%",
                    }}
                    size="cover"
                  />
                </CardActionArea>
              </Card>
              <CustomTypography
                className="cousltypo"
                variant="body1"
                textAlign={"center"}
                gutterBottom
              >
                HR
              </CustomTypography>
            </div>
            <div>
              <Card className="categoryCard">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image="/Saly-13.png"
                    alt="green iguana"
                    sx={{
                      p: "10px",
                      objectFit: "contain",
                      height: "100%",
                      width: "100%",
                    }}
                    size="cover"
                  />
                </CardActionArea>
              </Card>
              <CustomTypography
                className="cousltypo"
                variant="body1"
                textAlign={"center"}
                gutterBottom
              >
                Development
              </CustomTypography>
            </div>
            <div>
              <Card className="categoryCard">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image="/Other 17.png"
                    alt="green iguana"
                    sx={{
                      p: "10px",
                      objectFit: "contain",
                      height: "100%",
                      width: "100%",
                    }}
                    size="cover"
                  />
                </CardActionArea>
              </Card>
              <CustomTypography
                className="cousltypo"
                variant="body1"
                textAlign={"center"}
                gutterBottom
              >
                Sales
              </CustomTypography>
            </div>
          </Carousel>
        </Box>
      </Container>
    </div>
  );
};

export default SearchByCategory;
