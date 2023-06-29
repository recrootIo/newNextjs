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
  Checkbox,
  ListItemText,
  Typography,
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
import Employer from "../../../components/pages/index";
import { getJobsfil } from "@/redux/slices/applyJobs";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import dynamic from "next/dynamic";
import styles from "../../../components/Employers/styles.module.css";
import companyservice from "@/redux/services/company.service";
import { useRouter } from "next/router";
const Tour = dynamic(() => import("reactour"), { ssr: false });

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
  const [names, setNames] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [user, setUser] = React.useState([]);
  const router = useRouter();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    if (names.length === 0) {
      setUser(arry);
    }
    router.push(
      {
        pathname: router.pathname,
        query: { status: "queryString" },
      },
      undefined,
      { shallow: true } // This option prevents the page from rerendering
    );
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        // width: 250,
      },
    },
  };
  useEffect(() => {
    dispatch(getSchedules());
    dispatch(getJobsfil());
  }, [dispatch]);
  const inters = useSelector((state) => state?.sinterview?.schedules);
  const [sear, setsear] = useState([]);
  const [seared, setseared] = useState([]);
  useEffect(() => {
    if (inters) {
      setsear(inters);
      setseared(inters);
    }
  }, [inters]);

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
      start: `${set?.day.split("T")[0]}T${
        set?.time.split("T")[1].split("+")[0]
      }`,
      end: moment(
        `${set?.day.split("T")[0]}T${set?.time.split("T")[1].split("+")[0]}`
      )
        .add(set.duration, "minutes")
        .format(),
      datas: set,
    });
  });
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
    setNames(value);
    setsear(seared.filter((it) => it.jobId === value));
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const mark = [];
  sear.map((dat) => mark.push(moment(dat.day).format("DD-MM-YYYY")));

  const handleDelete = () => {
    setNames("");
    setsear(seared);
  };
  const [isTourOpen, setTourOpen] = React.useState(false);

  const updateValue = async () => {
    const companyService = new companyservice();
    await companyService.updateTourValue({ interview: false });
  };

  const closeTour = () => {
    setTourOpen(false);
    updateValue();
  };

  const accentColor = "#5cb7b7";

  const tourConfig = [
    {
      selector: ".interviewPage",
      style: {
        color: "black",
      },
      content: ({ goTo }) => (
        <Stack
          sx={{
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomTypography>
            This section allows you to update the applicants&apos; status and
            schedule interviews with them
          </CustomTypography>
          <Button onClick={() => closeTour()}>DONE</Button>
        </Stack>
      ),
    },
  ];

  const company = useSelector((state) => state?.company?.companyDetl);

  useEffect(() => {
    setTourOpen(() => company?.tours?.interview);
  }, [company?.tours?.interview]);

  return (
    <>
      <Employer>
        <Card
          className="interviewPage"
          sx={{
            width: "100%",
            backgroundColor: "#F2F8FD",
            mt: "40px",
            p: { xs: 0, md: "25px 25px 80px 25px" },
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
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        alignItems: "center",
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
                      {names !== "" ? (
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "10px",
                          }}
                        >
                          <Typography sx={{ mt: 1 }}>
                            {sear[0]?.jobDetail?.jobRole}
                          </Typography>
                          <Button sx={{ mt: "2px" }} onClick={handleDelete}>
                            <DeleteForeverIcon sx={{ color: "red" }} />
                          </Button>
                        </Box>
                      ) : (
                        ""
                      )}
                    </Box>
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
                      <FormControl
                        sx={{
                          width: "100%",
                          minWidth: { sm: "400px", xs: "250px" },
                          m: 1,
                        }}
                      >
                        <InputLabel id="demo-multiple-checkbox-label">
                          Filter By Jobs
                        </InputLabel>
                        <Select
                          labelId="demo-multiple-checkbox-label"
                          id="demo-multiple-checkbox"
                          variant="outlined"
                          value={names}
                          onChange={handleName}
                          input={<OutlinedInput label="Filter By Jobs" />}
                          MenuProps={MenuProps}
                          sx={{ width: "95%" }}
                        >
                          {jobs.map((variant) => (
                            <MenuItem
                              key={variant._id}
                              value={variant._id}
                              sx={{ width: "100%" }}
                            >
                              <ListItemText
                                primary={`${variant.jobRole} (${moment(
                                  variant.createdAt
                                ).format("LL")})`}
                              />
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Popover>
                  </Box>
                  <Box
                    sx={{
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
                <Grid
                  item
                  xs={12}
                  md={7}
                  sx={{ mt: { xs: "20px", md: "0px" } }}
                >
                  {/* <Box
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
                  </Box> */}
                  <Divider sx={{ mt: "10px", color: "#CEF4F6" }} />
                  <InterviewCalendar
                    date={moment(date).format()}
                    schedules={schedules}
                  />
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Employer>
      <Tour
        onRequestClose={closeTour}
        disableInteraction={true}
        steps={tourConfig}
        isOpen={isTourOpen}
        maskClassName={styles.mask}
        className={styles.helper}
        rounded={8}
        accentColor={accentColor}
      />
    </>
  );
};

export default ScheduledInterviews;
