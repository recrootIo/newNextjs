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
import PropTypes from "prop-types";
import styles from "./candidateView.module.css";
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
  height: "228px",
  width: "228px",
}));

const CandiProfileView = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const boxes = [
    { text: "Adobe Creative Suits", duration: "1 Year", level: "Expert" },
    { text: "Adobe Creative Suits", duration: "1 Year", level: "Expert" },
    { text: "Adobe Creative Suits", duration: "1 Year", level: "Expert" },
    { text: "Adobe Creative Suits", duration: "1 Year", level: "Expert" },
  ];

  const AnsweredQuestions = [
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
      answer: "Yes",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
      answer: "Yes",
    },
  ];

  return (
    <>
      <EmployerNavbar />
      <Box
        sx={{
          backgroundImage: 'url("/EmployerDashboardBG.svg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "250px",
        }}
      ></Box>

      <Container>
        <div style={{ position: "relative", top: "-150px" }}>
          <Grid container spacing={2} sx={{ pb: "50px" }}>
            <Grid item xs={2}>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 110,
                  bgcolor: "#034275",
                  borderRadius: "10px",
                  pb: "20px",
                }}
              >
                <List component="nav" aria-label="main mailbox folders">
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                  >
                    <Image src="/empImg.png" alt="" width="40" height="40" />
                  </ListItemButton>
                  <Divider variant="middle" color="gray" />
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                  >
                    <Image src="/home.png" alt="" width="40" height="40" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                  >
                    <Image src="/profile.png" alt="" width="40" height="40" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                  >
                    <Image src="/jobs.png" alt="" width="40" height="40" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 4}
                    onClick={(event) => handleListItemClick(event, 4)}
                  >
                    <Image src="/team.png" alt="" width="40" height="40" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 5}
                    onClick={(event) => handleListItemClick(event, 5)}
                  >
                    <Image src="/convo.png" alt="" width="40" height="40" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 6}
                    onClick={(event) => handleListItemClick(event, 6)}
                  >
                    <Image
                      src="/subscription.png"
                      alt=""
                      width="40"
                      height="40"
                    />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 7}
                    onClick={(event) => handleListItemClick(event, 7)}
                  >
                    <Image src="/myAccount.png" alt="" width="40" height="40" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 8}
                    onClick={(event) => handleListItemClick(event, 8)}
                  >
                    <Image
                      src="/power-icon.png"
                      alt=""
                      width="40"
                      height="40"
                    />
                  </ListItemButton>
                </List>
              </Box>
            </Grid>
            <Grid item xs={10}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
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
              <Card
                variant="outlined"
                sx={{
                  width: "100%",
                  backgroundColor: "#F2F8FD",
                  pb: "80px",
                  boder: "none",
                  overflow: "visible",
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      backgroundColor: "#D4F0FC",
                      padding: "20px",
                      mt: "157px",
                      borderRadius: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        height: "127px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                        top: "-126px",
                        mt: "80px",
                      }}
                    >
                      <StyledAvatar
                        alt="Remy Sharp"
                        src="/candi-details-view--img.png"
                        sx={{
                          objectFit: "contain",
                          height: "228px",
                          width: "228px",
                          border: "6px solid #E4F7FF",
                          bgcolor: "#F4FBFE",
                        }}
                      />
                      <CustomTypography
                        className={styles.condiNameTypo}
                        variant="h5"
                      >
                        Candidate Name
                      </CustomTypography>
                    </Box>
                    <Divider sx={{ borderColor: "rgba(3, 66, 117, 0.19)" }} />
                    <CustomTypography
                      variant="subtitle2"
                      className={styles.CandiSectionTopic}
                    >
                      About
                    </CustomTypography>
                    <CustomTypography
                      variant="subtitle2"
                      className={styles.CandiProfileData}
                    >
                      {bull} To become a part of your growth-oriented company,
                      to explore my analytical and problem-solving skills with
                      complete sincerity.
                      <br></br>
                      {bull} Work towards building a challenging career with
                      challenging work assignments, which offers healthy working
                      environment.
                      <br></br>
                      {bull} Opportunity to grasp more for career growth for my
                      job profile.
                      <br></br>
                    </CustomTypography>
                    <CustomTypography className={styles.SeeFullProfileLink}>
                      See Full Profile
                    </CustomTypography>
                    <Divider />
                    <FormControl
                      fullWidth
                      sx={{
                        ...style.txtinput,
                        bgcolor: "white",
                        mt: "35px",
                      }}
                    >
                      <InputLabel
                        id="demo-select-small-label"
                        sx={{ color: "#BAD4DF" }}
                      >
                        Status
                      </InputLabel>
                      <Select
                        labelId="demo-select-small"
                        aria-controls="demo-select-small"
                        id="demo-select-small"
                        label="Status"
                        // onChange={onChangeSelect}
                        // value={status ?? ""}
                        // disablePortal={true}
                      >
                        <MenuItem value="">Schedule Interview</MenuItem>
                        <MenuItem value=""> Short List</MenuItem>
                        <MenuItem value="">Reject</MenuItem>
                      </Select>
                    </FormControl>
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{ mt: "25px", mb: "46px" }}
                    >
                      <TextField
                        id="outlined-basic"
                        label="Add a Message"
                        variant="outlined"
                        sx={{
                          ...style.txtinput,
                          bgcolor: "white",
                          width: "78%",
                        }}
                        InputLabelProps={{ style: { color: "#BAD4DF" } }}
                      />
                      <Stack
                        direction="row"
                        spacing={1}
                        sx={{
                          width: "22%",
                          display: "flex",
                          justifyContent: "flex-end",
                          alignItems: "center",
                        }}
                      >
                        <CustomTypography
                          variant="subtitle2"
                          sx={{ color: "#01313F", fontSize: "28px" }}
                        >
                          CV :
                        </CustomTypography>
                        <IconButton aria-label="view">
                          <VisibilityOutlinedIcon
                            sx={{ color: "#034275", fontSize: "2.5rem" }}
                          />
                        </IconButton>
                        <IconButton aria-label="download">
                          <FileDownloadOutlinedIcon
                            sx={{ color: "#034275", fontSize: "2.5rem" }}
                          />
                        </IconButton>
                      </Stack>
                    </Stack>
                  </Box>
                  <Box sx={{ p: "0 20px 0 20px" }}>
                    <CustomTypography
                      variant="subtitle2"
                      className={styles.CandiSectionTopic}
                    >
                      Essential Information
                    </CustomTypography>
                    <Stack spacing={2}>
                      <Box sx={{ display: "flex", gap: "13px" }}>
                        <WorkOutlineOutlinedIcon sx={{ color: "#2699FF" }} />
                        <CustomTypography
                          variant="subtitle2"
                          className={styles.ViewEssentialInfoTypo}
                        >
                          Work Preference : Remote
                        </CustomTypography>
                      </Box>
                      <Box sx={{ display: "flex", gap: "13px" }}>
                        <CalendarMonthIcon sx={{ color: "#2699FF" }} />
                        <CustomTypography
                          variant="subtitle2"
                          className={styles.ViewEssentialInfoTypo}
                        >
                          Notice Period : 15 Days
                        </CustomTypography>
                      </Box>
                      <Box sx={{ display: "flex", gap: "13px" }}>
                        <CurrencyRupeeIcon sx={{ color: "#2699FF" }} />
                        <CustomTypography
                          variant="subtitle2"
                          className={styles.ViewEssentialInfoTypo}
                        >
                          Current Salary : 4 LPA
                        </CustomTypography>
                      </Box>
                      <Box sx={{ display: "flex", gap: "13px" }}>
                        <CurrencyRupeeIcon sx={{ color: "#2699FF" }} />
                        <CustomTypography
                          variant="subtitle2"
                          className={styles.ViewEssentialInfoTypo}
                        >
                          Expected Salary : 6 LPA
                        </CustomTypography>
                      </Box>
                    </Stack>
                    <Divider
                      sx={{
                        borderColor: "rgba(3, 66, 117, 0.19)",
                        mt: "40px",
                        mb: "40px",
                      }}
                    />
                    <CustomTypography
                      variant="subtitle2"
                      className={styles.CandiSectionTopic}
                    >
                      Experience
                    </CustomTypography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "15px",
                        flexWrap: "wrap",
                      }}
                    >
                      <Box className={styles.ViewCandiProfileCard}>
                        <BeenhereOutlinedIcon
                          sx={{ color: "rgba(3, 66, 117, 0.8)" }}
                        />
                        <Stack spacing={1}>
                          <CustomTypography
                            variant="subtitle2"
                            className={styles.ViewInfoMainText}
                          >
                            Lorem Ipsum
                          </CustomTypography>
                          <CustomTypography
                            variant="subtitle2"
                            className={styles.ViewInfoText}
                          >
                            Lorem Ipsum company
                          </CustomTypography>
                          <CustomTypography
                            variant="subtitle2"
                            className={styles.ViewInfoText}
                          >
                            June 2000 - July 2001 {bull} 1 Year, 1 Month
                          </CustomTypography>
                        </Stack>
                      </Box>
                      <Box className={styles.ViewCandiProfileCard}>
                        <BeenhereOutlinedIcon
                          sx={{ color: "rgba(3, 66, 117, 0.8)" }}
                        />
                        <Stack spacing={1}>
                          <CustomTypography
                            variant="subtitle2"
                            className={styles.ViewInfoMainText}
                          >
                            Lorem Ipsum
                          </CustomTypography>
                          <CustomTypography
                            variant="subtitle2"
                            className={styles.ViewInfoText}
                          >
                            Lorem Ipsum company
                          </CustomTypography>
                          <CustomTypography
                            variant="subtitle2"
                            className={styles.ViewInfoText}
                          >
                            June 2000 - July 2001 {bull} 1 Year, 1 Month
                          </CustomTypography>
                        </Stack>
                      </Box>
                      <Box className={styles.ViewCandiProfileCard}>
                        <BeenhereOutlinedIcon
                          sx={{ color: "rgba(3, 66, 117, 0.8)" }}
                        />
                        <Stack spacing={1}>
                          <CustomTypography
                            variant="subtitle2"
                            className={styles.ViewInfoMainText}
                          >
                            Lorem Ipsum
                          </CustomTypography>
                          <CustomTypography
                            variant="subtitle2"
                            className={styles.ViewInfoText}
                          >
                            Lorem Ipsum company
                          </CustomTypography>
                          <CustomTypography
                            variant="subtitle2"
                            className={styles.ViewInfoText}
                          >
                            June 2000 - July 2001 {bull} 1 Year, 1 Month
                          </CustomTypography>
                        </Stack>
                      </Box>
                      <Box className={styles.ViewCandiProfileCard}>
                        <BeenhereOutlinedIcon
                          sx={{ color: "rgba(3, 66, 117, 0.8)" }}
                        />
                        <Stack spacing={1}>
                          <CustomTypography
                            variant="subtitle2"
                            className={styles.ViewInfoMainText}
                          >
                            Lorem Ipsum
                          </CustomTypography>
                          <CustomTypography
                            variant="subtitle2"
                            className={styles.ViewInfoText}
                          >
                            Lorem Ipsum company
                          </CustomTypography>
                          <CustomTypography
                            variant="subtitle2"
                            className={styles.ViewInfoText}
                          >
                            June 2000 - July 2001 {bull} 1 Year, 1 Month
                          </CustomTypography>
                        </Stack>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        mt: "9px",
                      }}
                    >
                      <CustomTypography className={styles.SeeFullProfileLink}>
                        View More
                      </CustomTypography>
                    </Box>
                    <Divider
                      sx={{
                        borderColor: "rgba(3, 66, 117, 0.19)",
                        mt: "5px",
                        mb: "40px",
                      }}
                    />
                    <CustomTypography
                      variant="subtitle2"
                      className={styles.CandiSectionTopic}
                    >
                      Education
                    </CustomTypography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "15px",
                        flexWrap: "wrap",
                      }}
                    >
                      <Box className={styles.ViewCandiProfileCard}>
                        <BeenhereOutlinedIcon
                          sx={{ color: "rgba(3, 66, 117, 0.8)" }}
                        />
                        <Stack spacing={1}>
                          <CustomTypography
                            variant="subtitle2"
                            className={styles.ViewInfoMainText}
                          >
                            Lorem Ipsum
                          </CustomTypography>
                          <CustomTypography
                            variant="subtitle2"
                            className={styles.ViewInfoText}
                          >
                            University
                          </CustomTypography>
                          <CustomTypography
                            variant="subtitle2"
                            className={styles.ViewInfoText}
                          >
                            June 2000 - July 2001
                          </CustomTypography>
                        </Stack>
                      </Box>
                      <Box className={styles.ViewCandiProfileCard}>
                        <BeenhereOutlinedIcon
                          sx={{ color: "rgba(3, 66, 117, 0.8)" }}
                        />
                        <Stack spacing={1}>
                          <CustomTypography
                            variant="subtitle2"
                            className={styles.ViewInfoMainText}
                          >
                            Lorem Ipsum
                          </CustomTypography>
                          <CustomTypography
                            variant="subtitle2"
                            className={styles.ViewInfoText}
                          >
                            University
                          </CustomTypography>
                          <CustomTypography
                            variant="subtitle2"
                            className={styles.ViewInfoText}
                          >
                            June 2000 - July 2001
                          </CustomTypography>
                        </Stack>
                      </Box>
                      <Box className={styles.ViewCandiProfileCard}>
                        <BeenhereOutlinedIcon
                          sx={{ color: "rgba(3, 66, 117, 0.8)" }}
                        />
                        <Stack spacing={1}>
                          <CustomTypography
                            variant="subtitle2"
                            className={styles.ViewInfoMainText}
                          >
                            Lorem Ipsum
                          </CustomTypography>
                          <CustomTypography
                            variant="subtitle2"
                            className={styles.ViewInfoText}
                          >
                            University
                          </CustomTypography>
                          <CustomTypography
                            variant="subtitle2"
                            className={styles.ViewInfoText}
                          >
                            June 2000 - July 2001
                          </CustomTypography>
                        </Stack>
                      </Box>
                      <Box className={styles.ViewCandiProfileCard}>
                        <BeenhereOutlinedIcon
                          sx={{ color: "rgba(3, 66, 117, 0.8)" }}
                        />
                        <Stack spacing={1}>
                          <CustomTypography
                            variant="subtitle2"
                            className={styles.ViewInfoMainText}
                          >
                            Lorem Ipsum
                          </CustomTypography>
                          <CustomTypography
                            variant="subtitle2"
                            className={styles.ViewInfoText}
                          >
                            University
                          </CustomTypography>
                          <CustomTypography
                            variant="subtitle2"
                            className={styles.ViewInfoText}
                          >
                            June 2000 - July 2001
                          </CustomTypography>
                        </Stack>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        mt: "9px",
                      }}
                    >
                      <CustomTypography className={styles.SeeFullProfileLink}>
                        View More
                      </CustomTypography>
                    </Box>
                    <Divider
                      sx={{
                        borderColor: "rgba(3, 66, 117, 0.19)",
                        mt: "5px",
                        mb: "40px",
                      }}
                    />
                    <CustomTypography
                      variant="subtitle2"
                      className={styles.CandiSectionTopic}
                    >
                      Skills
                    </CustomTypography>
                    <Stack spacing={2}>
                      {boxes.map((box, index) => (
                        <Box
                          key={index}
                          sx={{
                            display: "flex",
                            backgroundColor:
                              index % 2 === 0 ? "#D4F0FC" : "white",
                            height: "64px",
                            borderRadius: "10px",
                          }}
                        >
                          <Box
                            sx={{
                              width: "40%",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <DoneOutlineIcon sx={{ m: "10px" }} />
                            <CustomTypography
                              variant="subtitle2"
                              className={styles.ViewInfoMainText}
                            >
                              {box.text}
                            </CustomTypography>
                          </Box>
                          <Box
                            sx={{
                              width: "30%",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <CustomTypography
                              variant="subtitle2"
                              className={styles.ViewInfoText}
                            >
                              {bull}
                              {box.duration}
                            </CustomTypography>
                          </Box>
                          <Box
                            sx={{
                              width: "30%",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <CustomTypography
                              variant="subtitle2"
                              className={styles.ViewInfoText}
                            >
                              {bull}
                              {box.level}
                            </CustomTypography>
                          </Box>
                        </Box>
                      ))}
                    </Stack>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        mt: "9px",
                      }}
                    >
                      <CustomTypography className={styles.SeeFullProfileLink}>
                        View More
                      </CustomTypography>
                    </Box>
                    <Divider
                      sx={{
                        borderColor: "rgba(3, 66, 117, 0.19)",
                        mt: "5px",
                        mb: "40px",
                      }}
                    />
                    <CustomTypography
                      variant="subtitle2"
                      className={styles.CandiSectionTopic}
                    >
                      Projects
                    </CustomTypography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "15px",
                        flexWrap: "wrap",
                      }}
                    >
                      <Box className={styles.ViewCandiProfileCard}>
                        <BeenhereOutlinedIcon
                          sx={{ color: "rgba(3, 66, 117, 0.8)" }}
                        />
                        <Stack spacing={1}>
                          <CustomTypography
                            variant="subtitle2"
                            className={styles.ViewInfoMainText}
                          >
                            Lorem Ipsum
                          </CustomTypography>
                          <CustomTypography
                            variant="subtitle2"
                            className={styles.ViewInfoText}
                          >
                            University
                          </CustomTypography>
                          <CustomTypography
                            variant="subtitle2"
                            className={styles.ViewInfoText}
                          >
                            June 2000 - July 2001
                          </CustomTypography>
                        </Stack>
                      </Box>
                      <Box className={styles.ViewCandiProfileCard}>
                        <BeenhereOutlinedIcon
                          sx={{ color: "rgba(3, 66, 117, 0.8)" }}
                        />
                        <Stack spacing={1}>
                          <CustomTypography
                            variant="subtitle2"
                            className={styles.ViewInfoMainText}
                          >
                            Lorem Ipsum
                          </CustomTypography>
                          <CustomTypography
                            variant="subtitle2"
                            className={styles.ViewInfoText}
                          >
                            University
                          </CustomTypography>
                          <CustomTypography
                            variant="subtitle2"
                            className={styles.ViewInfoText}
                          >
                            June 2000 - July 2001
                          </CustomTypography>
                        </Stack>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        mt: "9px",
                      }}
                    >
                      <CustomTypography className={styles.SeeFullProfileLink}>
                        View More
                      </CustomTypography>
                    </Box>
                    <Divider
                      sx={{
                        borderColor: "rgba(3, 66, 117, 0.19)",
                        mt: "5px",
                        mb: "40px",
                      }}
                    />
                    <CustomTypography
                      variant="subtitle2"
                      className={styles.CandiSectionTopic}
                    >
                      Training
                    </CustomTypography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "15px",
                        flexWrap: "wrap",
                      }}
                    >
                      <Box className={styles.ViewCandiProfileCard}>
                        <BeenhereOutlinedIcon
                          sx={{ color: "rgba(3, 66, 117, 0.8)" }}
                        />
                        <Stack spacing={1}>
                          <CustomTypography
                            variant="subtitle2"
                            className={styles.ViewInfoMainText}
                          >
                            Lorem Ipsum
                          </CustomTypography>
                          <CustomTypography
                            variant="subtitle2"
                            className={styles.ViewInfoText}
                          >
                            University
                          </CustomTypography>
                          <CustomTypography
                            variant="subtitle2"
                            className={styles.ViewInfoText}
                          >
                            June 2000 - July 2001
                          </CustomTypography>
                        </Stack>
                      </Box>
                      <Box className={styles.ViewCandiProfileCard}>
                        <BeenhereOutlinedIcon
                          sx={{ color: "rgba(3, 66, 117, 0.8)" }}
                        />
                        <Stack spacing={1}>
                          <CustomTypography
                            variant="subtitle2"
                            className={styles.ViewInfoMainText}
                          >
                            Lorem Ipsum
                          </CustomTypography>
                          <CustomTypography
                            variant="subtitle2"
                            className={styles.ViewInfoText}
                          >
                            University
                          </CustomTypography>
                          <CustomTypography
                            variant="subtitle2"
                            className={styles.ViewInfoText}
                          >
                            June 2000 - July 2001
                          </CustomTypography>
                        </Stack>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        mt: "9px",
                      }}
                    >
                      <CustomTypography className={styles.SeeFullProfileLink}>
                        View More
                      </CustomTypography>
                    </Box>
                    <Divider
                      sx={{
                        borderColor: "rgba(3, 66, 117, 0.19)",
                        mt: "5px",
                        mb: "40px",
                      }}
                    />
                    <CustomTypography
                      variant="subtitle2"
                      className={styles.CandiSectionTopic}
                    >
                      Answered Questions
                    </CustomTypography>
                    <Stack spacing={2}>
                      {AnsweredQuestions.map((box, index) => (
                        <Box
                          key={index}
                          className={styles.AnsweredQuestionsCard}
                        >
                          <QuestionMarkIcon
                            sx={{
                              color: "rgba(3, 66, 117, 0.8)",
                              fontSize: "16px",
                              mt: "5px",
                            }}
                          />
                          <Stack spacing={1}>
                            <CustomTypography
                              variant="subtitle2"
                              className={styles.ViewInfoMainText}
                            >
                              {box.question}
                            </CustomTypography>
                            <CustomTypography
                              variant="subtitle2"
                              className={styles.ViewInfoText}
                            >
                              {box.answer}
                            </CustomTypography>
                          </Stack>
                        </Box>
                      ))}
                    </Stack>
                    <Divider
                      sx={{
                        borderColor: "rgba(3, 66, 117, 0.19)",
                        mt: "5px",
                        mb: "40px",
                      }}
                    />
                    <Box sx={{ display: "flex" }}>
                      <Box sx={{ flex: 1 }}>
                        <CustomTypography
                          variant="subtitle2"
                          className={styles.CandiSectionTopic}
                        >
                          Resume
                        </CustomTypography>
                      </Box>
                      <IconButton aria-label="view">
                        <VisibilityOutlinedIcon
                          sx={{ color: "#034275", fontSize: "2.5rem" }}
                        />
                      </IconButton>
                      <IconButton aria-label="download">
                        <FileDownloadOutlinedIcon
                          sx={{ color: "#034275", fontSize: "2.5rem" }}
                        />
                      </IconButton>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default CandiProfileView;
