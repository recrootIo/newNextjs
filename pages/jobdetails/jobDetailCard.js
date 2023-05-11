"use client";
import {
  Box,
  Grid,
  Stack,
  Button,
  Card,
  CardContent,
  IconButton,
  Container,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";
import { CustomTypography } from "../../ui-components/CustomTypography/CustomTypography";
const JobDetailCard = () => {
  return (
    <Box
      sx={{
        mt: "40px",
      }}
    >
      <Container>
        <Card
          variant="outlined"
          sx={{
            minWidth: 275,
            border: 0,
            backgroundImage: `url("/Job detail page Background.svg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            padding: "8px 16px",
          }}
        >
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8}>
                <Stack spacing={1}>
                  <Box
                    className="mobileLogo"
                    sx={{ display: "flex", justifyContent: "flex-start" }}
                  >
                    <img
                      src="/logo 8.png"
                      alt=""
                      style={{
                        width: "120px",
                        height: "35px",
                        maxWidth: "160px",
                        maxHeight: "40px",
                      }}
                    />
                  </Box>
                  <Box>
                    <CustomTypography
                      variant="h6"
                      sx={{
                        fontSize: 30,
                        fontWeight: "bold",
                        color: "#034275",
                      }}
                    >
                      Graphic Designer
                    </CustomTypography>
                    <CustomTypography
                      variant="body1"
                      sx={{
                        fontSize: 23,
                        color: "#02A9F7",
                        fontWeight: "500",
                      }}
                      gutterBottom
                    >
                      Recroot
                    </CustomTypography>
                  </Box>
                  <Stack
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      marginRight: { xs: "10px", md: "0px" },
                      flexWrap: "wrap",
                    }}
                    spacing={1}
                  >
                    <Box className="imgTypo" sx={{ alignItems: "center" }}>
                      <img
                        className="firsticonImg"
                        src="/currency.png"
                        alt=""
                      />
                      <CustomTypography
                        variant="body2"
                        sx={{
                          fontSize: 17,
                          color: "#034275",
                          marginTop: "8px",
                        }}
                        gutterBottom
                      >
                        5 -6 LPA
                      </CustomTypography>
                    </Box>
                    <Box className="imgTypo">
                      <img className="iconImg" src="/bag.png" alt="" />
                      <CustomTypography
                        variant="body2"
                        sx={{
                          fontSize: 17,
                          color: "#034275",
                        }}
                        gutterBottom
                      >
                        On Site
                      </CustomTypography>
                    </Box>
                    <Box className="imgTypo">
                      <img className="iconImg" src="/hourglass.png" alt="" />
                      <CustomTypography
                        variant="body2"
                        sx={{
                          fontSize: 17,
                          color: "#034275",
                        }}
                        gutterBottom
                      >
                        2+ Years
                      </CustomTypography>
                    </Box>
                  </Stack>
                  <Box>
                    <Stack
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: { xs: "0px", md: "0px" },
                        flexWrap: "wrap",
                      }}
                      spacing={1}
                    >
                      <Box className="imgTypo" sx={{ alignItems: "center" }}>
                        <img className="iconImg" src="/location.png" alt="" />
                        <CustomTypography
                          variant="body2"
                          sx={{
                            fontSize: 17,
                            color: "#034275",
                            marginTop: "8px",
                          }}
                          gutterBottom
                        >
                          Mumbai
                        </CustomTypography>
                      </Box>
                      <Box className="imgTypo">
                        <img
                          className="iconImg"
                          src="/professional.png"
                          alt=""
                        />
                        <CustomTypography
                          variant="body2"
                          sx={{
                            fontSize: 17,
                            color: "#034275",
                          }}
                          gutterBottom
                        >
                          Junior Professional
                        </CustomTypography>
                      </Box>
                      <Box className="imgTypo">
                        <img className="iconImg" src="/degree.png" alt="" />
                        <CustomTypography
                          variant="body2"
                          sx={{
                            fontSize: 17,
                            color: "#034275",
                          }}
                          gutterBottom
                        >
                          Bachelor’s Degree
                        </CustomTypography>
                      </Box>
                    </Stack>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={4} style={{ display: "grid" }}>
                <Box
                  className="logo"
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <img
                    src="/logo 8.png"
                    alt=""
                    style={{ width: "180px", height: "50px", marginTop: "5px" }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "flex-start", md: "flex-end" },
                    alignItems: "flex-end",
                  }}
                >
                  <Stack direction="row" spacing={1}>
                    <IconButton
                      aria-label="share"
                      size="large"
                      sx={{
                        color: "#02a9f7",
                        fontSize: "14px",
                        padding: 0,
                      }}
                    >
                      <BookmarkBorderIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share"
                      sx={{ color: "#02a9f7", fontSize: "14px" }}
                    >
                      <ShareIcon />
                    </IconButton>
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
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default JobDetailCard;
