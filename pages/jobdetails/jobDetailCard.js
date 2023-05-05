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
  IconButton,
  Container,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import ShareIcon from "@mui/icons-material/Share";
import "./jobDetail.module.css";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";

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
          sx={{ minWidth: 275, borderRadius: "7px", borderColor: "#d3eaff" }}
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
                        width: "100px",
                        height: "30px",
                        maxWidth: "160px",
                        maxHeight: "40px",
                      }}
                    />

                    {/* <p>gsgdywg</p> */}
                  </Box>
                  <Box>
                    <CustomTypography
                      variant="h6"
                      sx={{
                        fontSize: 24,
                        fontWeight: "bold",
                        color: "#034275",
                      }}
                    >
                      Graphic Designer
                    </CustomTypography>
                    <CustomTypography
                      variant="body1"
                      sx={{
                        fontSize: 18,
                        color: "#034275",
                      }}
                      gutterBottom
                    >
                      Recroot
                    </CustomTypography>
                  </Box>
                  <Stack direction="row" spacing={4}>
                    <CustomTypography
                      variant="body2"
                      sx={{
                        fontSize: 14,
                        color: "#034275",
                      }}
                      gutterBottom
                    >
                      <CurrencyRupeeIcon fontSize="16px" /> 5 - 6 LPA
                    </CustomTypography>
                    <CustomTypography
                      variant="body2"
                      sx={{
                        fontSize: 14,
                        color: "#034275",
                      }}
                      gutterBottom
                    >
                      <BusinessCenterIcon fontSize="16px" /> On Site
                    </CustomTypography>
                    <CustomTypography
                      variant="body2"
                      sx={{
                        fontSize: 14,
                        color: "#034275",
                      }}
                      gutterBottom
                    >
                      <HourglassTopIcon fontSize="16px" /> 2+ Years
                    </CustomTypography>
                  </Stack>
                  <Box>
                    <CustomTypography
                      variant="body2"
                      sx={{
                        fontSize: 14,
                        color: "#034275",
                      }}
                      gutterBottom
                    >
                      <LocationOnIcon fontSize="16px" /> Mumbai
                    </CustomTypography>
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
                    style={{ width: "160px", height: "40px" }}
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
                      sx={{ color: "#02a9f7", fontSize: "9px" }}
                    >
                      <BookmarkBorderIcon />
                    </IconButton>
                    <IconButton aria-label="share" sx={{ color: "#02a9f7" }}>
                      <ShareIcon />
                    </IconButton>
                    <Button
                      variant="contained"
                      size="medium"
                      sx={{
                        ml: "8px",
                        bgcolor: "#02A9F7 !important",
                        fontSize: "14px",
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
