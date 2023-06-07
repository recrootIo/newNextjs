"use client";
import * as React from "react";
import {
  Box,
  Grid,
  Container,
  List,
  ListItemButton,
  Button,
  Card,
  CardContent,
  Stack,
  Divider,
  Avatar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  InputAdornment,
  IconButton,
  LinearProgress,
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import FactoryOutlinedIcon from "@mui/icons-material/FactoryOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import BoyIcon from "@mui/icons-material/Boy";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { BOLD } from "@/theme/fonts";
import EmployerNavbar from "@/components/EmployerNavbar/EmployerNavbar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TwitterIcon from "@mui/icons-material/Twitter";
import PropTypes from "prop-types";
// import styles from "./candidateView.module.css";
import Image from "next/image";
import styled from "styled-components";
import { AccountCircle } from "@mui/icons-material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import BeenhereOutlinedIcon from "@mui/icons-material/BeenhereOutlined";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "./candiProfileFullView.module.css";
const style = {
  txtinput: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
        width: { md: "100%", xs: "100%" },
        height: "60px",
        color: "#BAD4DF",
      },
      "&:hover fieldset": {
        borderColor: "#BAD4DF",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#BAD4DF",
      },
    },
  },
};

const bull = (
  <Box
    component="span"
    sx={{
      display: "inline-block",
      mx: "2px",
      transform: "scale(0.8)",
      color: "rgba(1, 49, 63, 0.4)",
    }}
  >
    •
  </Box>
);

export const StyledAvatar = styled(Avatar)(({}) => ({
  "& .MuiAvatar-img": {
    width: "150px",
    height: "165px",
  },
  height: "200px",
  width: "200px",
}));

const CandiFullProfileView = () => {
  return (
    <>
      <EmployerNavbar />
      <Box
        sx={{
          backgroundImage: 'url("/EmployerDashboardBG.svg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "250px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Container>
          <Button
            variant="text"
            sx={{
              color: "white",
              fontWeight: "500",
              fontSize: "20px",
              textTransform: "capitalize",
            }}
            startIcon={<ArrowBackIcon />}
          >
            Back
          </Button>
        </Container>
      </Box>

      <Container>
        <div style={{ position: "relative", top: "-150px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              mb: "30px",
            }}
          >
            <CustomTypography
              variant="h6"
              sx={{
                fontFamily: BOLD,
                fontSize: "28px",
                color: "white",
              }}
              gutterBottom
            >
              Profile
            </CustomTypography>
          </Box>
          <Stack spacing={3}>
            <Box
              sx={{
                width: "100%",
                height: "310px",
                borderRadius: "15px",
                backgroundImage:
                  'url("/candidate-full-profile-view-card-bg.svg")',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                display: "flex",
                alignItems: "center",
                p: "40px 20px 20px 20px",
              }}
            >
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <StyledAvatar
                    alt="Remy Sharp"
                    src="/candi-details-view--img.png"
                    sx={{
                      objectFit: "contain",
                      height: "180px",
                      width: "180px",
                      border: "6px solid #E4F7FF",
                      bgcolor: "#F4FBFE",
                      border: "10px solid rgba(228, 247, 255, 0.46)",
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={4}
                  sx={{
                    borderRight: "1px solid white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <CustomTypography
                    variant="h6"
                    sx={{
                      fontFamily: BOLD,
                      fontSize: "24px",
                      color: "white",
                    }}
                    gutterBottom
                  >
                    Candidate Name
                  </CustomTypography>
                  <CustomTypography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "white",
                    }}
                    gutterBottom
                  >
                    Designation
                  </CustomTypography>
                  <CustomTypography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "white",
                    }}
                    gutterBottom
                  >
                    +91 00000-00000
                  </CustomTypography>
                  <CustomTypography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "white",
                    }}
                    gutterBottom
                  >
                    loremipsum@lorem.com
                  </CustomTypography>
                  <CustomTypography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "white",
                    }}
                    gutterBottom
                  >
                    Location
                  </CustomTypography>
                </Grid>
                <Grid
                  item
                  xs={4}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    paddingLeft: "60px !important",
                  }}
                >
                  <CustomTypography
                    variant="h6"
                    sx={{
                      fontSize: "18px",
                      color: "white",
                      fontWeight: 600,
                    }}
                    gutterBottom
                  >
                    Other Info:
                  </CustomTypography>
                  <CustomTypography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "white",
                    }}
                    gutterBottom
                  >
                    Country : United States
                  </CustomTypography>
                  <CustomTypography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "white",
                    }}
                    gutterBottom
                  >
                    Nationality : Indian
                  </CustomTypography>
                  <CustomTypography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "white",
                    }}
                    gutterBottom
                  >
                    Working rights : India
                  </CustomTypography>
                  <CustomTypography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "white",
                    }}
                    gutterBottom
                  >
                    Times of available to work :
                  </CustomTypography>
                  <CustomTypography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "white",
                    }}
                    gutterBottom
                  >
                    Total Work Experience : 4 Years
                  </CustomTypography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-end",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      width: "33%",
                      justifyContent: "center",
                      gap: "10px",
                      borderRight: "1px solid white",
                    }}
                  >
                    <LinkedInIcon sx={{ color: "white" }} />
                    <CustomTypography
                      sx={{
                        fontSize: "18px",
                        fontWeight: 500,
                        color: "white",
                      }}
                    >
                      https://Lorem Ipsum
                    </CustomTypography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      width: "33%",
                      justifyContent: "center",
                      gap: "10px",
                    }}
                  >
                    <TwitterIcon sx={{ color: "white" }} />
                    <CustomTypography
                      sx={{
                        fontSize: "18px",
                        fontWeight: 500,
                        color: "white",
                      }}
                    >
                      https://Lorem Ipsum
                    </CustomTypography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "310px",
                border: "1px solid #D3EAFF",
                borderRadius: "15px",
              }}
            >
              <Box
                sx={{
                  bgcolor: "#D3EAFF",
                  width: "100%",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  height: "50px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: "0 25px 0 25px",
                }}
              >
                <CustomTypography className={styles.FullProfileSectionTitle}>
                  Personal Details
                </CustomTypography>
              </Box>
              <Box sx={{ p: "25px" }}>
                <Stack spacing={1}>
                  <CustomTypography className={styles.FullProfileSectionTypo}>
                    About
                  </CustomTypography>
                  <CustomTypography className={styles.FullProfileSectionData}>
                    Professional Python Developer with more than two years of
                    experience in software industry. Involved in product
                    requirement, testing and development of various solutions
                  </CustomTypography>
                  <Box className={styles.FullProfilePersonalDetailsTypoBox}>
                    <CustomTypography className={styles.FullProfileSectionTypo}>
                      Current Salary :
                    </CustomTypography>
                    <CustomTypography className={styles.FullProfileSectionData}>
                      4 LPA
                    </CustomTypography>
                  </Box>
                  <Box className={styles.FullProfilePersonalDetailsTypoBox}>
                    <CustomTypography className={styles.FullProfileSectionTypo}>
                      Expected Salary :
                    </CustomTypography>
                    <CustomTypography className={styles.FullProfileSectionData}>
                      6 LPA
                    </CustomTypography>
                  </Box>
                  <Box className={styles.FullProfilePersonalDetailsTypoBox}>
                    <CustomTypography className={styles.FullProfileSectionTypo}>
                      Notice Period :
                    </CustomTypography>
                    <CustomTypography className={styles.FullProfileSectionData}>
                      15 Days
                    </CustomTypography>
                  </Box>
                  <Box className={styles.FullProfilePersonalDetailsTypoBox}>
                    <CustomTypography className={styles.FullProfileSectionTypo}>
                      Work Preference :
                    </CustomTypography>
                    <CustomTypography className={styles.FullProfileSectionData}>
                      Remote
                    </CustomTypography>
                  </Box>
                </Stack>
              </Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "auto",
                border: "1px solid #D3EAFF",
                borderRadius: "15px",
              }}
            >
              <Box
                sx={{
                  bgcolor: "#D3EAFF",
                  width: "100%",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  height: "50px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: "0 25px 0 25px",
                }}
              >
                <CustomTypography className={styles.FullProfileSectionTitle}>
                  Work Experience
                </CustomTypography>
              </Box>
              <Box sx={{ p: "25px" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "15px",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                  }}
                >
                  <Box className={styles.ViewFullCandiProfileCard}>
                    <BeenhereOutlinedIcon
                      sx={{ color: "rgba(3, 66, 117, 0.8)" }}
                    />
                    <Stack spacing={1}>
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.ViewFullInfoMainText}
                      >
                        Lorem Ipsum
                      </CustomTypography>
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.ViewFullInfoText}
                      >
                        Lorem Ipsum company
                      </CustomTypography>
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.ViewFullInfoText}
                      >
                        June 2000 - July 2001 {bull} 1 Year, 1 Month
                      </CustomTypography>
                    </Stack>
                  </Box>
                  <Box className={styles.ViewFullCandiProfileCard}>
                    <BeenhereOutlinedIcon
                      sx={{ color: "rgba(3, 66, 117, 0.8)" }}
                    />
                    <Stack spacing={1}>
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.ViewFullInfoMainText}
                      >
                        Lorem Ipsum
                      </CustomTypography>
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.ViewFullInfoText}
                      >
                        Lorem Ipsum company
                      </CustomTypography>
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.ViewFullInfoText}
                      >
                        June 2000 - July 2001 {bull} 1 Year, 1 Month
                      </CustomTypography>
                    </Stack>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "auto",
                border: "1px solid #D3EAFF",
                borderRadius: "15px",
              }}
            >
              <Box
                sx={{
                  bgcolor: "#D3EAFF",
                  width: "100%",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  height: "50px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: "0 25px 0 25px",
                }}
              >
                <CustomTypography className={styles.FullProfileSectionTitle}>
                  Education
                </CustomTypography>
              </Box>
              <Box sx={{ p: "25px" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "15px",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                  }}
                >
                  <Box className={styles.ViewFullCandiProfileCard}>
                    <BeenhereOutlinedIcon
                      sx={{ color: "rgba(3, 66, 117, 0.8)" }}
                    />
                    <Stack spacing={1}>
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.ViewFullInfoMainText}
                      >
                        Lorem Ipsum
                      </CustomTypography>
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.ViewFullInfoText}
                      >
                        Master’s
                      </CustomTypography>
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.ViewFullInfoText}
                      >
                        Lorem Ipsum company
                      </CustomTypography>
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.ViewFullInfoText}
                      >
                        June 2000 - July 2001 {bull} 1 Year, 1 Month
                      </CustomTypography>
                    </Stack>
                  </Box>
                  <Box className={styles.ViewFullCandiProfileCard}>
                    <BeenhereOutlinedIcon
                      sx={{ color: "rgba(3, 66, 117, 0.8)" }}
                    />
                    <Stack spacing={1}>
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.ViewFullInfoMainText}
                      >
                        Lorem Ipsum
                      </CustomTypography>
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.ViewFullInfoText}
                      >
                        Master’s
                      </CustomTypography>
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.ViewFullInfoText}
                      >
                        Lorem Ipsum company
                      </CustomTypography>
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.ViewFullInfoText}
                      >
                        June 2000 - July 2001 {bull} 1 Year, 1 Month
                      </CustomTypography>
                    </Stack>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "auto",
                border: "1px solid #D3EAFF",
                borderRadius: "15px",
              }}
            >
              <Box
                sx={{
                  bgcolor: "#D3EAFF",
                  width: "100%",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  height: "50px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: "0 25px 0 25px",
                }}
              >
                <CustomTypography className={styles.FullProfileSectionTitle}>
                  Skills
                </CustomTypography>
              </Box>
              <Box sx={{ p: "25px" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "15px",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                  }}
                >
                  <Box className={styles.ViewFullCandiProfileSkillCard}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        width: "100%",
                      }}
                    >
                      <Box sx={{ width: "30%" }}>
                        <CustomTypography
                          variant="subtitle2"
                          className={styles.ViewFullInfoMainText}
                        >
                          Lorem Ipsum
                        </CustomTypography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={50}
                        sx={{
                          width: "70%",
                          height: "10px",
                          borderRadius: "5px",
                        }}
                      />
                    </Box>
                  </Box>
                  <Box className={styles.ViewFullCandiProfileSkillCard}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        width: "100%",
                      }}
                    >
                      <Box sx={{ width: "30%" }}>
                        <CustomTypography
                          variant="subtitle2"
                          className={styles.ViewFullInfoMainText}
                        >
                          Lorem Ipsum
                        </CustomTypography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={50}
                        sx={{
                          width: "70%",
                          height: "10px",
                          borderRadius: "5px",
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "auto",
                border: "1px solid #D3EAFF",
                borderRadius: "15px",
              }}
            >
              <Box
                sx={{
                  bgcolor: "#D3EAFF",
                  width: "100%",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  height: "50px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: "0 25px 0 25px",
                }}
              >
                <CustomTypography className={styles.FullProfileSectionTitle}>
                  Industry
                </CustomTypography>
              </Box>
              <Box sx={{ p: "25px" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "15px",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                  }}
                >
                  <Box className={styles.ViewFullCandiProfileCard}>
                    <BeenhereOutlinedIcon
                      sx={{ color: "rgba(3, 66, 117, 0.8)" }}
                    />
                    <Stack spacing={1}>
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.ViewFullInfoMainText}
                      >
                        IT
                      </CustomTypography>
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.ViewFullInfoText}
                      >
                        June 2000 - July 2001 {bull} 1 Year, 1 Month
                      </CustomTypography>
                    </Stack>
                  </Box>
                  <Box className={styles.ViewFullCandiProfileCard}>
                    <BeenhereOutlinedIcon
                      sx={{ color: "rgba(3, 66, 117, 0.8)" }}
                    />
                    <Stack spacing={1}>
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.ViewFullInfoMainText}
                      >
                        Media
                      </CustomTypography>
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.ViewFullInfoText}
                      >
                        June 2000 - July 2001 {bull} 1 Year, 1 Month
                      </CustomTypography>
                    </Stack>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "auto",
                border: "1px solid #D3EAFF",
                borderRadius: "15px",
              }}
            >
              <Box
                sx={{
                  bgcolor: "#D3EAFF",
                  width: "100%",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  height: "50px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: "0 25px 0 25px",
                }}
              >
                <CustomTypography className={styles.FullProfileSectionTitle}>
                  Project
                </CustomTypography>
              </Box>
              <Box sx={{ p: "25px" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "15px",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                  }}
                >
                  <Box className={styles.ViewFullCandiProfileCard}>
                    <BeenhereOutlinedIcon
                      sx={{ color: "rgba(3, 66, 117, 0.8)" }}
                    />
                    <Stack spacing={1}>
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.ViewFullInfoMainText}
                      >
                        Lorem Ipsum
                      </CustomTypography>
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.ViewFullInfoText}
                      >
                        Lorem Ipsum company
                      </CustomTypography>
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.ViewFullInfoText}
                      >
                        June 2000 - July 2001 {bull} 1 Year, 1 Month
                      </CustomTypography>
                    </Stack>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "auto",
                border: "1px solid #D3EAFF",
                borderRadius: "15px",
              }}
            >
              <Box
                sx={{
                  bgcolor: "#D3EAFF",
                  width: "100%",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  height: "50px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: "0 25px 0 25px",
                }}
              >
                <CustomTypography className={styles.FullProfileSectionTitle}>
                  Certification
                </CustomTypography>
              </Box>
              <Box sx={{ p: "25px" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "15px",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                  }}
                >
                  <Box className={styles.ViewFullCandiProfileCard}>
                    <Box sx={{ flex: "1", display: "flex", gap: "10px" }}>
                      <BeenhereOutlinedIcon
                        sx={{ color: "rgba(3, 66, 117, 0.8)" }}
                      />
                      <Stack spacing={1}>
                        <CustomTypography
                          variant="subtitle2"
                          className={styles.ViewFullInfoMainText}
                        >
                          Lorem Ipsum
                        </CustomTypography>
                        <CustomTypography
                          variant="subtitle2"
                          className={styles.ViewFullInfoText}
                        >
                          Lorem Ipsum company
                        </CustomTypography>
                        <CustomTypography
                          variant="subtitle2"
                          className={styles.ViewFullInfoText}
                        >
                          June 2000 - July 2001 {bull} 1 Year, 1 Month
                        </CustomTypography>
                      </Stack>
                    </Box>
                    <FileDownloadOutlinedIcon sx={{ cursor: "pointer" }} />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "auto",
                border: "1px solid #D3EAFF",
                borderRadius: "15px",
              }}
            >
              <Box
                sx={{
                  bgcolor: "#D3EAFF",
                  width: "100%",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  height: "50px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: "0 25px 0 25px",
                }}
              >
                <CustomTypography className={styles.FullProfileSectionTitle}>
                  Training
                </CustomTypography>
              </Box>
              <Box sx={{ p: "25px" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "15px",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                  }}
                >
                  <Box className={styles.ViewFullCandiProfileCard}>
                    <BeenhereOutlinedIcon
                      sx={{ color: "rgba(3, 66, 117, 0.8)" }}
                    />
                    <Stack spacing={1}>
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.ViewFullInfoMainText}
                      >
                        Lorem Ipsum
                      </CustomTypography>
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.ViewFullInfoText}
                      >
                        Lorem Ipsum company
                      </CustomTypography>
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.ViewFullInfoText}
                      >
                        June 2000 - July 2001 {bull} 1 Year, 1 Month
                      </CustomTypography>
                    </Stack>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "auto",
                border: "1px solid #D3EAFF",
                borderRadius: "15px",
              }}
            >
              <Box
                sx={{
                  bgcolor: "#D3EAFF",
                  width: "100%",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  height: "50px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: "0 25px 0 25px",
                }}
              >
                <CustomTypography className={styles.FullProfileSectionTitle}>
                  Resume
                </CustomTypography>
              </Box>
              <Box sx={{ p: "25px" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button
                    variant="contained"
                    startIcon={<FileDownloadOutlinedIcon />}
                    sx={{
                      bgcolor: "#00339B !important",
                      height: "50px",
                      width: "200px",
                      textTransform: "capitalize",
                      borderRadius: "10px",
                    }}
                  >
                    Download
                  </Button>
                </Box>
              </Box>
            </Box>
          </Stack>
        </div>
      </Container>
    </>
  );
};

export default CandiFullProfileView;
