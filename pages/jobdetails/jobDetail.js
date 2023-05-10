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
  Container,
  IconButton,
} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Chip from "@mui/material/Chip";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.9)" }}
  >
    •
  </Box>
);

const JobDetail = () => {
  return (
    <Box
      sx={{
        mt: "20px",
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Card
              variant="outlined"
              sx={{
                height: "100%",
                width: "100%",
                borderRadius: "7px",
                borderColor: "#d3eaff",
              }}
            >
              <CardHeader
                title="Job Description"
                titleTypographyProps={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#01313F",
                }}
                sx={{ bgcolor: "#EDF8FD", padding: "8px 16px" }}
              />
              <CardContent>
                <CustomTypography
                  variant="body2"
                  color="text.secondary"
                  lineHeight="27px"
                  fontSize="16px"
                  sx={{ color: "rgba(1, 49, 63, 0.8)" }}
                  gutterBottom
                >
                  The UX designer creates satisfying and compelling experiences
                  for users of a product, often drawing on results from user
                  research and workflow analysis. Generally, UX designers need
                  to possess strong creative, technical and problem-solving
                  skills. Areas of focus may include content, controls, visual
                  design and development, information architecture, user
                  research, branding, and customer/technical support.
                </CustomTypography>
                <CustomTypography
                  variant="body1"
                  sx={{
                    mt: "20px",
                    color: "#034275",
                    fontSize: "17px",
                    fontWeight: "600",
                  }}
                >
                  Responsibilities
                </CustomTypography>
                <CustomTypography
                  variant="body2"
                  color="text.secondary"
                  lineHeight="27px"
                  fontSize="16px"
                  sx={{ mt: "15px", color: "rgba(1, 49, 63, 0.8)" }}
                  gutterBottom
                >
                  {bull} Consulting with clients to understand their goals
                  <br></br>
                  {bull} Explaining user research results to internal and
                  external stakeholders<br></br>
                  {bull} Developing personas and usage scenarios<br></br>
                  {bull} Conducting usability testing <br></br>
                  {bull} Creating wireframes, storyboards, sitemaps and screen
                  flows<br></br>
                  {bull} Creating product prototypes<br></br>
                  {bull} Analyzing user feedback and activity, and iterating to
                  enhance the user experience<br></br>
                  {bull} Assisting with content development<br></br>
                  {bull} Conducting competitor and customer analysis.
                </CustomTypography>
                <CustomTypography
                  variant="body1"
                  sx={{
                    mt: "20px",
                    color: "#034275",
                    fontSize: "17px",
                    fontWeight: "600",
                  }}
                >
                  Requirements
                </CustomTypography>
                <CustomTypography
                  variant="body2"
                  color="rgba(1, 49, 63, 0.8)"
                  lineHeight="27px"
                  fontSize="16px"
                  sx={{ mt: "15px", color: "rgba(1, 49, 63, 0.8)" }}
                  gutterBottom
                >
                  {bull} Should have atleast 2+years of experience in UX
                  designing.
                  <br></br>
                  {bull} Good to have Visual design and design software
                  experience.
                  <br></br>
                  {bull} Good to have a basic understanding of application
                  development, including languages like JavaScript, CSS, and
                  HTML.
                  <br></br>
                  {bull} Conducting the right type of user research for the
                  product or feature you’re designing can empower you to make a
                  product even better. <br></br>
                  {bull} As you develop prototypes, you’ll conduct user testing
                  to validate your design choices. <br></br>
                  {bull} Knowing how to iterate through these two user-centric
                  phases can help make you a more effective designer. <br></br>
                  {bull} Since many software development teams use the Agile
                  methodology, it would make sense that UX designers could
                  benefit from an understanding of this popular product
                  management approach as well.
                </CustomTypography>
              </CardContent>
              <CardActions sx={{ mb: "20px" }}>
                <Button
                  variant="contained"
                  size="medium"
                  sx={{
                    ml: "8px",
                    bgcolor: "#02A9F7 !important",
                    fontSize: "15px",
                  }}
                >
                  Apply now
                </Button>
                <Button
                  className="bookmarkBtn"
                  size="small"
                  variant="outlined"
                  bgcolor="#02A9F7 !important"
                >
                  <ShareIcon sx={{ fontSize: "21px" }} />
                </Button>
                <Button
                  className="bookmarkBtn"
                  size="small"
                  variant="outlined"
                  bgcolor="#02A9F7 !important"
                >
                  <BookmarkBorderIcon sx={{ fontSize: "21px" }} />
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              <Card
                variant="outlined"
                sx={{
                  width: "100%",
                  borderRadius: "7px",
                  borderColor: "#d3eaff",
                }}
              >
                <CardHeader
                  title="Job Overview"
                  titleTypographyProps={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#01313F",
                  }}
                  sx={{ bgcolor: "#EDF8FD", padding: "8px 16px" }}
                />
                <CardContent>
                  <Stack spacing={2}>
                    <CustomTypography
                      variant="body2"
                      sx={{
                        fontSize: 16,
                        color: "rgba(1, 49, 63, 0.8)",
                        mt: "10px",
                      }}
                      gutterBottom
                    >
                      <CalendarMonthIcon fontSize="16px" /> Posted 5 Days Ago
                    </CustomTypography>
                    <CustomTypography
                      variant="body2"
                      sx={{
                        fontSize: 16,
                        color: "rgba(1, 49, 63, 0.8)",
                      }}
                      gutterBottom
                    >
                      <FavoriteBorderIcon fontSize="16px" /> 41 People
                      Interested
                    </CustomTypography>
                    <CustomTypography
                      variant="body2"
                      sx={{
                        fontSize: 16,
                        color: "rgba(1, 49, 63, 0.8)",
                      }}
                      gutterBottom
                    >
                      <AdsClickIcon fontSize="16px" /> 31 People Applied
                    </CustomTypography>
                    <CustomTypography
                      variant="body2"
                      sx={{
                        fontSize: 16,
                        color: "rgba(1, 49, 63, 0.8)",
                      }}
                      gutterBottom
                    >
                      <AccessTimeIcon fontSize="16px" /> Expires in 45 Days
                    </CustomTypography>
                  </Stack>
                </CardContent>
              </Card>
              <Card
                variant="outlined"
                sx={{
                  width: "100%",
                  borderRadius: "7px",
                  borderColor: "#d3eaff",
                }}
              >
                <CardHeader
                  title="Key Skills"
                  titleTypographyProps={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#01313F",
                  }}
                  sx={{ bgcolor: "#EDF8FD", padding: "8px 16px" }}
                />
                <CardContent sx={{ rowGap: "30px" }}>
                  <Chip
                    label="Visual Design"
                    size="small"
                    className="skillChip"
                  />
                  <Chip label="Figma" size="small" className="skillChip" />
                  <Chip label="Sketch" size="small" className="skillChip" />
                  <Chip
                    label="Illustrator"
                    size="small"
                    className="skillChip"
                  />
                  <Chip label="Adobe XD" size="small" className="skillChip" />
                  <Chip label="UI/UX" size="small" className="skillChip" />
                  <Chip label="Miro" size="small" className="skillChip" />
                  <Chip label="Photoshop" size="small" className="skillChip" />
                  <Chip
                    label="After Effect"
                    size="small"
                    className="skillChip"
                  />
                </CardContent>
              </Card>
              <Card
                variant="outlined"
                sx={{
                  width: "100%",
                  borderRadius: "7px",
                  borderColor: "#d3eaff",
                }}
              >
                <CardHeader
                  title="Company Profile"
                  titleTypographyProps={{
                    fontSize: 17,
                    fontWeight: "bold",
                    color: "#01313F",
                  }}
                  sx={{ bgcolor: "#EDF8FD", padding: "8px 16px" }}
                />
                <CardContent>
                  <Box>
                    <Grid container spacing={1}>
                      <Grid
                        item
                        xs={3}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <Avatar
                          className="similarAvatar"
                          alt="logo"
                          src="/logo 2.png"
                          size={100}
                          sx={{
                            "& .MuiAvatar-img": {
                              height: "35px",
                              width: "35px",
                            },
                            height: "65px",
                            width: "65px",
                          }}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={9}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <CustomTypography
                          variant="body2"
                          fontSize="18px"
                          fontWeight="700"
                          color="#034275"
                        >
                          Recroot
                        </CustomTypography>
                        <CustomTypography
                          variant="body2"
                          fontSize="17px"
                          color="#034275"
                        >
                          Location
                        </CustomTypography>
                        <CustomTypography
                          variant="body2"
                          fontSize="16px"
                          color="#034275"
                          gutterBottom
                        >
                          50-100 Employees
                        </CustomTypography>
                      </Grid>
                    </Grid>
                  </Box>
                  <CustomTypography
                    variant="body2"
                    // color="text.secondary"
                    lineHeight="27px"
                    fontSize="16px"
                    color="rgba(1, 49, 63, 0.8)"
                    sx={{ mt: "15px" }}
                    gutterBottom
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. .
                  </CustomTypography>
                  <Stack spacing={1} sx={{ mt: "25px" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <CallIcon
                        fontSize="14px"
                        sx={{ color: "rgba(3, 66, 117, 0.8)" }}
                      />
                      <CustomTypography
                        variant="body2"
                        color="text.secondary"
                        fontSize="16px"
                        sx={{ marginBottom: 0 }}
                      >
                        &nbsp;&nbsp;+00 0000000000
                      </CustomTypography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <MailOutlineIcon
                        fontSize="14px"
                        sx={{ color: "rgba(3, 66, 117, 0.8)" }}
                      />
                      <CustomTypography
                        variant="body2"
                        color="text.secondary"
                        fontSize="16px"
                        sx={{ marginBottom: 0 }}
                      >
                        &nbsp;&nbsp;lorem@recroot.io
                      </CustomTypography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <img src="/url.png" alt="" width="16px" />
                      <CustomTypography
                        variant="body2"
                        color="text.secondary"
                        fontSize="16px"
                        sx={{ marginBottom: 0 }}
                      >
                        &nbsp;&nbsp;lorem@recroot.io
                      </CustomTypography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default JobDetail;
