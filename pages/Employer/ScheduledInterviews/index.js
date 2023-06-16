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
import AddIcon from "@mui/icons-material/Add";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import InterviewCalendar from "@/components/Employers/InterviewCalendar/InterviewCalendar";
import { getSchedules } from "@/redux/slices/interviewslice";
import moment from "moment";
import Employer from "..";

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
  let dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [result, setResult] = useState(false);
  const dateFormat = `${date.getDate()} ${date.toLocaleString("en-us", {
    month: "long",
  })} ${date.getFullYear()}`;
  const jobs = useSelector((state) => state?.apply?.names);
  const [names, setNames] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [user, setUser] = React.useState([]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    if (names.length === 0) {
      setUser(arry);
    }
  };

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
  useEffect(() => {
    dispatch(getSchedules());
    // dispatch(getJobsfil());
  }, [dispatch]);
  const sear = useSelector((state) => state?.sinterview?.schedules);

  const [arry, setArry] = useState([]);
  useEffect(() => {
    var arrras = [];
    sear.map((set) => {
      if (
        moment(set.day).format("YYYY-MM-DD") ===
        moment(date).format("YYYY-MM-DD")
      ) {
        arrras.push(set);
      }
      return setArry(arrras);
    });
  }, [date, sear]);

  var schedules = [];
  sear.map((set) => {
    schedules.push({
      title: `${set?.jobDetail?.jobRole}(${set.subject})`,
      start: `${set?.day}T${set?.time.split("T")[1].split("+")[0]}`,
      end: moment(`${set?.day}T${set?.time.split("T")[1].split("+")[0]}`)
        .add(set.duration, "minutes")
        .format(),
      datas: set,
    });
  });
  console.log(schedules, "s");
  const handleDate = (e) => {
    setDate(e);
  };
  const handlechange = () => {
    setResult(!result);
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

  const filterObjectArray = (arr, filterArr) => {
    return arr.filter((el) =>
      filterArr.some((f) => f === el.jobDetail.jobTitle)
    );
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

  const mark = [];
  sear.map((dat) => mark.push(moment(dat.day).format("DD-MM-YYYY")));

  const handleSetint = (id) => {
    dispatch(setinterview(sear.filter((job) => job._id === id)[0])).then(
      setTimeout(() => {
        navigate("/employerhome/interview");
      }, 500)
    );
  };
  console.log(mark, "ffff");
  return (
    <>
      <Employer>
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
                <Grid item xs={12} md={5}>
                  <Box
                    variant="outlined"
                    sx={{
                      ml: { xs: 0, md: "34px" },
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
                      marginLeft: { xs: "0px", md: "32px" },
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Calendar
                      onChange={(e) => handleDate(e)}
                      value={date}
                      tileClassName={({ date }) => {
                        if (
                          mark.find(
                            (x) => x === moment(date).format("DD-MM-YYYY")
                          )
                          // mark[0] === moment(date).format("DD-MM-YYYY")
                        ) {
                          return "highlight";
                        }
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: { xs: "center", md: "flex-end" },
                    }}
                  >
                    <Button
                      variant="contained"
                      startIcon={<AddIcon />}
                      sx={{
                        bgcolor: "#2699FF !important",
                        borderRadius: "8px",
                        width: "200px",
                        height: "47px",
                        textTransform: "capitalize",
                      }}
                    >
                      New Interview
                    </Button>
                  </Box>
                  <Divider sx={{ mt: "10px", color: "#CEF4F6" }} />
                  <InterviewCalendar date={date} schedules={schedules} />
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Employer>
    </>
  );
};

export default ScheduledInterviews;
