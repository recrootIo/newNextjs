"use client";
import React, { useEffect, useState } from "react";
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
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Divider,
  Switch,
  FormControlLabel,
  InputAdornment,
  TextField,
  FormHelperText,
  FormGroup,
  OutlinedInput,
  IconButton,
  Popover,
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { BOLD } from "@/theme/fonts";
import EmployerNavbar from "@/components/EmployerNavbar/EmployerNavbar";
import Image from "next/image";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useDispatch, useSelector } from "react-redux";
import styles from "./scheduledinterviews.module.css";

const style = {
  passinput: {
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

const ScheduledInterviews = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  let dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [result, setResult] = useState(false);
  const dateFormat = `${date.getDate()} ${date.toLocaleString("en-us", {
    month: "long",
  })} ${date.getFullYear()}`;
  //const jobs = useSelector((state) => state.apply.names);
  const [names, setNames] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [user, setUser] = React.useState([]);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const [arry, setArry] = useState([]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    if (names.length === 0) {
      setUser(arry);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    if (names.length > 0) {
      setArry(filterObjectArray(arry, names));
    }
    if (names.length === 0) {
      setArry(user);
    }
  };

  const handleName = (event) => {
    const {
      target: { value },
    } = event;

    let duplicateRemoved = [];

    value.forEach((item) => {
      if (duplicateRemoved.findIndex((o) => o === item) >= 0) {
        duplicateRemoved = duplicateRemoved.filter((x) => x === item);
      } else {
        duplicateRemoved.push(item);
      }
    });

    setNames(duplicateRemoved);
  };

  const handleDate = (e) => {
    setDate(e);
  };
  const mark = [];

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

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
              <Box sx={{ display: "flex", width: "100%", mb: "30px" }}>
                <CustomTypography
                  variant="h6"
                  sx={{
                    fontFamily: BOLD,
                    fontSize: "28px",
                    flex: 1,
                    color: "white",
                  }}
                  gutterBottom
                >
                  Scheduled Interviews
                </CustomTypography>
              </Box>
              <Card
                sx={{
                  width: "100%",
                  backgroundColor: "#F2F8FD",
                  mt: "40px",
                  p: "25px 25px 80px 25px",
                }}
              >
                <CardContent>
                  <Box>
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <Box
                          variant="outlined"
                          sx={{
                            ml: "34px",
                            mt: "20px",
                            display: "flex",
                            justifyContent: { xs: "center", lg: "none" },
                          }}
                        >
                          <Button
                            aria-describedby={id}
                            onClick={handleClick}
                            variant="outlined"
                            sx={{ height: "50px", width: "100%" }}
                          >
                            Filter
                          </Button>
                          <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "left",
                            }}
                          >
                            <FormControl sx={{ m: 1, width: 330 }}>
                              <InputLabel id="demo-multiple-checkbox-label">
                                Filter By Jobs
                              </InputLabel>
                              <Select
                                labelId="demo-multiple-checkbox-label"
                                id="demo-multiple-checkbox"
                                multiple
                                variant="outlined"
                                value={names}
                                onChange={handleName}
                                input={<OutlinedInput label="Filter By Jobs" />}
                                renderValue={(selected) =>
                                  selected.map((x) => x).join(", ")
                                }
                                MenuProps={MenuProps}
                                sx={{ width: "328px" }}
                              >
                                {/* {jobs.map((variant) => ( */}
                                {/* <MenuItem
                                  key={variant._id}
                                  value={variant.jobTitle}
                                >
                                  <Checkbox
                                    checked={
                                      names.findIndex(
                                        (item) => item === variant.jobTitle
                                      ) >= 0
                                    }
                                  />
                                  <ListItemText primary={variant.jobTitle} />
                                </MenuItem> */}
                                {/* ))} */}
                              </Select>
                            </FormControl>
                          </Popover>
                        </Box>
                        <Box
                          style={{
                            marginLeft: "32px",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <Calendar
                            // onChange={(e) => handleDate(e)}
                            // value={date}
                            // tileClassName={({ date }) => {
                            //   if (
                            //     mark.find(
                            //       (x) => x === moment(date).format("DD-MM-YYYY")
                            //     )
                            //   ) {
                            //     return "highlight";
                            //   }
                            // }}
                            className={["c1", "c2"]}
                            className="styles.calendar"
                            sx={{
                              border: "1px solid white !important",
                              borderRadius: "24px",
                            }}
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={8}></Grid>
                    </Grid>
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

export default ScheduledInterviews;
