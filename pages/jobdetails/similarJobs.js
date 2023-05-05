/* eslint-disable @next/next/no-img-element */
"use client";
import {
  Box,
  Grid,
  Stack,
  Button,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  IconButton,
  Container,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Carousel from "react-elastic-carousel";
import "./jobDetail.module.css";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const breakPoints = [
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 6 },
];

const SimilarJobs = () => {
  return (
    <Box
      sx={{
        pb: "30px",
      }}
    >
      <Container>
        <CustomTypography
          className="similarTopic"
          fontWeight={700}
          gutterBottom
        >
          <span style={{ color: "#034275" }}>Similar&nbsp;</span>
          <span style={{ color: "#02A9F7" }}>Jobs</span>
        </CustomTypography>

        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <Carousel breakPoints={breakPoints}>
            <Card className="similarCard">
              <CardHeader
                avatar={
                  <Avatar
                    className="similarAvatar"
                    alt="logo"
                    src="/logo 2.png"
                    sx={{
                      "& .MuiAvatar-img": {
                        height: "25px",
                        width: "25px",
                      },
                      height: "50px",
                      width: "50px",
                    }}
                  />
                }
                titleTypographyProps={{
                  fontSize: 17,
                  fontWeight: "bold",
                  color: "#034275",
                }}
                subheaderTypographyProps={{
                  fontSize: 14,
                  color: "#034275",
                }}
                title="Graphic Designer1"
                subheader="Recroot"
              />
              <CardContent className="similarCard" style={{ pb: 0 }}>
                <CustomTypography
                  className="similarBulletText"
                  variant="body2"
                  mb={1}
                >
                  Remote&nbsp;{bull}&nbsp;3-6 Years&nbsp;
                  {bull}&nbsp;3-6 LPA
                </CustomTypography>
                <CustomTypography variant="body2" className="similarText">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus.
                </CustomTypography>
                <Box>
                  <Box className="btnBox">
                    <Button
                      className="bookmarkBtn"
                      size="small"
                      variant="outlined"
                      bgcolor="#02A9F7 !important"
                    >
                      <BookmarkBorderIcon sx={{ fontSize: "21px" }} />
                    </Button>
                    <Button
                      className="viewDetailBtn"
                      variant="contained"
                      size="medium"
                    >
                      View Details
                    </Button>
                  </Box>
                  <Box className="similarTypoBox">
                    <CustomTypography
                      className="similarTypo"
                      variant="body2"
                      color="text.secondary"
                    >
                      10 days ago
                    </CustomTypography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
            <Card className="similarCard">
              <CardHeader
                avatar={
                  <Avatar
                    className="similarAvatar"
                    alt="logo"
                    src="/logo 2.png"
                    sx={{
                      "& .MuiAvatar-img": {
                        height: "25px",
                        width: "25px",
                      },
                      height: "50px",
                      width: "50px",
                    }}
                  />
                }
                titleTypographyProps={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "#034275",
                }}
                subheaderTypographyProps={{
                  fontSize: 12,
                  color: "#034275",
                }}
                title="Graphic Designer2"
                subheader="Recroot"
              />
              <CardContent className="similarCard" style={{ pb: 0 }}>
                <CustomTypography
                  className="similarBulletText"
                  variant="body2"
                  mb={1}
                >
                  Remote&nbsp;{bull}&nbsp;3-6 Years&nbsp;
                  {bull}&nbsp;3-6 LPA
                </CustomTypography>
                <CustomTypography variant="body2" className="similarText">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus.
                </CustomTypography>
                <Box>
                  <Box className="btnBox">
                    <Button
                      className="bookmarkBtn"
                      size="small"
                      variant="outlined"
                      bgcolor="#02A9F7 !important"
                    >
                      <BookmarkBorderIcon sx={{ fontSize: "21px" }} />
                    </Button>
                    <Button
                      className="viewDetailBtn"
                      variant="contained"
                      size="medium"
                    >
                      View Details
                    </Button>
                  </Box>
                  <Box className="similarTypoBox">
                    <CustomTypography
                      className="similarTypo"
                      variant="body2"
                      color="text.secondary"
                    >
                      10 days ago
                    </CustomTypography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
            <Card className="similarCard">
              <CardHeader
                avatar={
                  <Avatar
                    className="similarAvatar"
                    alt="logo"
                    src="/logo 2.png"
                    sx={{
                      "& .MuiAvatar-img": {
                        height: "25px",
                        width: "25px",
                      },
                      height: "50px",
                      width: "50px",
                    }}
                  />
                }
                titleTypographyProps={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "#034275",
                }}
                subheaderTypographyProps={{
                  fontSize: 12,
                  color: "#034275",
                }}
                title="Graphic Designer"
                subheader="Recroot"
              />
              <CardContent className="similarCard" style={{ pb: 0 }}>
                <CustomTypography
                  className="similarBulletText"
                  variant="body2"
                  mb={1}
                >
                  Remote&nbsp;{bull}&nbsp;3-6 Years&nbsp;
                  {bull}&nbsp;3-6 LPA
                </CustomTypography>
                <CustomTypography variant="body2" className="similarText">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus.
                </CustomTypography>
                <Box>
                  <Box className="btnBox">
                    <Button
                      className="bookmarkBtn"
                      size="small"
                      variant="outlined"
                      bgcolor="#02A9F7 !important"
                    >
                      <BookmarkBorderIcon sx={{ fontSize: "21px" }} />
                    </Button>
                    <Button
                      className="viewDetailBtn"
                      variant="contained"
                      size="medium"
                    >
                      View Details
                    </Button>
                  </Box>
                  <Box className="similarTypoBox">
                    <CustomTypography
                      className="similarTypo"
                      variant="body2"
                      color="text.secondary"
                    >
                      10 days ago
                    </CustomTypography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
            <Card className="similarCard">
              <CardHeader
                avatar={
                  <Avatar
                    className="similarAvatar"
                    alt="logo"
                    src="/logo 2.png"
                    sx={{
                      "& .MuiAvatar-img": {
                        height: "25px",
                        width: "25px",
                      },
                      height: "50px",
                      width: "50px",
                    }}
                  />
                }
                titleTypographyProps={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "#034275",
                }}
                subheaderTypographyProps={{
                  fontSize: 12,
                  color: "#034275",
                }}
                title="Graphic Designer 3"
                subheader="Recroot"
              />
              <CardContent className="similarCard" style={{ pb: 0 }}>
                <CustomTypography
                  className="similarBulletText"
                  variant="body2"
                  mb={1}
                >
                  Remote&nbsp;{bull}&nbsp;3-6 Years&nbsp;
                  {bull}&nbsp;3-6 LPA
                </CustomTypography>
                <CustomTypography variant="body2" className="similarText">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus.
                </CustomTypography>
                <Box>
                  <Box className="btnBox">
                    <Button
                      className="bookmarkBtn"
                      size="small"
                      variant="outlined"
                      bgcolor="#02A9F7 !important"
                    >
                      <BookmarkBorderIcon sx={{ fontSize: "21px" }} />
                    </Button>
                    <Button
                      className="viewDetailBtn"
                      variant="contained"
                      size="medium"
                    >
                      View Details
                    </Button>
                  </Box>
                  <Box className="similarTypoBox">
                    <CustomTypography
                      className="similarTypo"
                      variant="body2"
                      color="text.secondary"
                    >
                      10 days ago
                    </CustomTypography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
            <Card className="similarCard">
              <CardHeader
                avatar={
                  <Avatar
                    className="similarAvatar"
                    alt="logo"
                    src="/logo 2.png"
                    sx={{
                      "& .MuiAvatar-img": {
                        height: "25px",
                        width: "25px",
                      },
                      height: "50px",
                      width: "50px",
                    }}
                  />
                }
                titleTypographyProps={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "#034275",
                }}
                subheaderTypographyProps={{
                  fontSize: 12,
                  color: "#034275",
                }}
                title="Graphic Designer 4"
                subheader="Recroot"
              />
              <CardContent className="similarCard" style={{ pb: 0 }}>
                <CustomTypography
                  className="similarBulletText"
                  variant="body2"
                  mb={1}
                >
                  Remote&nbsp;{bull}&nbsp;3-6 Years&nbsp;
                  {bull}&nbsp;3-6 LPA
                </CustomTypography>
                <CustomTypography variant="body2" className="similarText">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus.
                </CustomTypography>
                <Box>
                  <Box className="btnBox">
                    <Button
                      className="bookmarkBtn"
                      size="small"
                      variant="outlined"
                      bgcolor="#02A9F7 !important"
                    >
                      <BookmarkBorderIcon sx={{ fontSize: "21px" }} />
                    </Button>
                    <Button
                      className="viewDetailBtn"
                      variant="contained"
                      size="medium"
                    >
                      View Details
                    </Button>
                  </Box>
                  <Box className="similarTypoBox">
                    <CustomTypography
                      className="similarTypo"
                      variant="body2"
                      color="text.secondary"
                    >
                      10 days ago
                    </CustomTypography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
            <Card className="similarCard">
              <CardHeader
                avatar={
                  <Avatar
                    className="similarAvatar"
                    alt="logo"
                    src="/logo 2.png"
                    size={100}
                    sx={{
                      "& .MuiAvatar-img": {
                        height: "25px",
                        width: "25px",
                      },
                      height: "50px",
                      width: "50px",
                    }}
                  />
                }
                titleTypographyProps={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "#034275",
                }}
                subheaderTypographyProps={{
                  fontSize: 12,
                  color: "#034275",
                }}
                title="Graphic Designer 5"
                subheader="Recroot"
              />
              <CardContent className="similarCard" style={{ pb: 0 }}>
                <CustomTypography
                  className="similarBulletText"
                  variant="body2"
                  mb={1}
                >
                  Remote&nbsp;{bull}&nbsp;3-6 Years&nbsp;{bull}&nbsp;3-6 LPA
                </CustomTypography>
                <CustomTypography variant="body2" className="similarText">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus.
                </CustomTypography>
                <Box>
                  <Box className="btnBox">
                    <Button
                      className="bookmarkBtn"
                      size="small"
                      variant="outlined"
                      bgcolor="#02A9F7 !important"
                    >
                      <BookmarkBorderIcon sx={{ fontSize: "21px" }} />
                    </Button>
                    <Button
                      className="viewDetailBtn"
                      variant="contained"
                      size="medium"
                    >
                      View Details
                    </Button>
                  </Box>
                  <Box className="similarTypoBox">
                    <CustomTypography
                      className="similarTypo"
                      variant="body2"
                      color="text.secondary"
                    >
                      10 days ago
                    </CustomTypography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
            <Card className="similarCard">
              <CardHeader
                avatar={
                  <Avatar
                    className="similarAvatar"
                    alt="logo"
                    src="/logo 2.png"
                    size={100}
                    sx={{
                      "& .MuiAvatar-img": {
                        height: "25px",
                        width: "25px",
                      },
                      height: "50px",
                      width: "50px",
                    }}
                  />
                }
                titleTypographyProps={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "#034275",
                }}
                subheaderTypographyProps={{
                  fontSize: 12,
                  color: "#034275",
                }}
                title="Graphic Designer 6"
                subheader="Recroot"
              />
              <CardContent className="similarCard" style={{ pb: 0 }}>
                <CustomTypography
                  className="similarBulletText"
                  variant="body2"
                  mb={1}
                >
                  Remote&nbsp;{bull}&nbsp;3-6 Years&nbsp;
                  {bull}&nbsp;3-6 LPA
                </CustomTypography>
                <CustomTypography variant="body2" className="similarText">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus.
                </CustomTypography>
                <Box>
                  <Box className="btnBox">
                    <Button
                      className="bookmarkBtn"
                      size="small"
                      variant="outlined"
                      bgcolor="#02A9F7 !important"
                    >
                      <BookmarkBorderIcon sx={{ fontSize: "21px" }} />
                    </Button>
                    <Button
                      className="viewDetailBtn"
                      variant="contained"
                      size="medium"
                    >
                      View Details
                    </Button>
                  </Box>
                  <Box className="similarTypoBox">
                    <CustomTypography
                      className="similarTypo"
                      variant="body2"
                      color="text.secondary"
                    >
                      10 days ago
                    </CustomTypography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Carousel>
        </Stack>

        <Box
          sx={{
            mt: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="./Frame 93.png" alt="" />
        </Box>
      </Container>
    </Box>
  );
};

export default SimilarJobs;
