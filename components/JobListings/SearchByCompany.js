"use client";
import { Typography, Box, Stack, Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Carousel from "react-elastic-carousel";
// import Slider from "react-slick";
import { useRef } from "react";

const SearchByCompany = () => {
  const breakPoints = [
    { width: 687, itemsToShow: 1 },
    { width: 750, itemsToShow: 3 },
    { width: 974, itemsToShow: 6 },
    { width: 1200, itemsToShow: 6 },
  ];

  const carouselRef = useRef(null);
  const totalPages = 2;
  let resetTimeout;

  return (
    <div
      style={{
        backgroundColor: "#D4F0FC",
        height: "300px",
      }}
    >
      <Container>
        <Box>
          <Typography
            variant="h4"
            fontWeight={700}
            pt="50px"
            textAlign="center"
            gutterBottom
          >
            Search By&nbsp;<span style={{ color: "#02A9F7" }}>Company</span>
          </Typography>
        </Box>
        <Box>
          <Stack
            direction="row"
            spacing={2}
            sx={{ display: "flex", justifyContent: "center", mt: "30px" }}
          >
            <Carousel
              breakPoints={breakPoints}
              enableAutoPlay
              ref={carouselRef}
              showArrows={true}
              onNextEnd={({ index }) => {
                clearTimeout(resetTimeout);
                if (index + 1 === totalPages) {
                  resetTimeout = setTimeout(() => {
                    carouselRef.current.goTo(0);
                  }, 1500); // same time
                }
              }}
            >
              <Card className="categoryCard">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image="/logo 7.png"
                    alt="green iguana"
                    sx={{ p: "10px", objectFit: "contain" }}
                    size="cover"
                  />
                </CardActionArea>
              </Card>
              <Card className="categoryCard">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image="/logo 7.png"
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
              <Card className="categoryCard">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image="/logo 7.png"
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
              <Card className="categoryCard">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image="/logo 7.png"
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
              <Card className="categoryCard">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image="/logo 7.png"
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
              <Card className="categoryCard">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image="/logo 7.png"
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
              <Card className="categoryCard">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image="/logo 7.png"
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
              <Card className="categoryCard">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image="/logo 7.png"
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
            </Carousel>
          </Stack>
        </Box>
      </Container>
    </div>
  );
};

export default SearchByCompany;
