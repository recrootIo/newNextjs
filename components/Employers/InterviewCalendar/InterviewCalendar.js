import React, { useRef } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  Divider,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import Addinterview from "../Addinterview/Addinterview";
import {
  DesktopDatePicker,
  LocalizationProvider,
  MobileTimePicker,
} from "@mui/x-date-pickers";
import { styles } from "../Addinterview/allapplicationstyle";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { SUCCESS, TIME_ZONES } from "@/utils/constants";
import axios from "axios";
import Cookies from "js-cookie";
import { getSchedules } from "@/redux/slices/interviewslice";
import { useDispatch } from "react-redux";
import moment from "moment";
import { openAlert } from "@/redux/slices/alert";
var evnets = [
  "Individual interview",
  "Group interview",
  "Panel interview",
  "Technical interview",
  "Multiple-round interview",
  "Stress Interview",
  "Informational interview",
  "Case interview",
  "Competency-based interview",
  "Behavioral interview",
  "Hiring manager interview ",
  "Second Interview",
  "Final interview",
  "Unstructured interview",
  "Structured interview",
  "Informal interview",
];
const InterviewCalendar = (props) => {
  const [open, setopen] = useState(false);
  const [open1, setopen1] = useState(false);
  const [values, setvalues] = useState("");
  const handleDateClick = (val) => {
    setvalues(val?.event?._def?.extendedProps?.datas);
    const data = val?.event?._def?.extendedProps?.datas;
    setTime({
      day: new Date(data?.day),
      canditateId: data?.candidateId,
      companyId: data?.companyId,
      jobId: data?.jobId,
      time: new Date(data?.time),
      duration: data?.duration,
      zone: data?.zone,
      event: data?.event,
      subject: data?.subject,
      meetlink: data?.meetlink,
      _id: data?._id,
    });
    setopen(true);
  };
  const handleClose = () => {
    setopen(false);
  };
  const handleOpen = () => {
    setopen(false);
    setopen1(true);
  };
  const handleClose1 = () => {
    setopen1(false);
  };
  const dispatch = useDispatch();
  // const targetDate = moment(props?.date).format('L');
  const [targetDate, setTargetDate] = useState(props?.date?.split("T")[0]);
  useEffect(() => {
    setTargetDate(props?.date?.split("T")[0]);
    if (calendarRef.current) {
      calendarRef.current.getApi().gotoDate(props?.date?.split("T")[0]);
    }
  }, [props?.date]);

  // const targetDate = props?.date?.split("T")[0];
  const [Time, setTime] = useState({
    day: "",
    canditateId: "",
    companyId: "",
    jobId: "",
    time: "",
    duration: "",
    zone: "",
    event: "",
    subject: "",
    meetlink: "",
    _id: "",
  });
  // const [values, setValue] = useState();
  const [timeErrorText, setTimeErrorText] = useState("");
  const [durationErrorText, setDurationErrorText] = useState("");
  const [zoneErrorText, setZoneErrorText] = useState("");
  const [eventErrorText, setEventErrorText] = useState("");
  const [subjectErrorText, setSubjectErrorText] = useState("");
  const [meetText, setMeetText] = useState("");
  const handleChange = (newValue) => {
    var date = newValue,
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    setTime({ ...Time, day: newValue });
    //   dispatch(
    //     interview({ ...Time, day: newValue })
    //   );
  };

  const handleChange1 = (event) => {
    const value = event.target.value;
    setTime({
      ...Time,
      [event.target.name]: value,
    });
    //   dispatch(interview({ ...Time, [event.target.name]: value }));

    Time.date = values;
  };
  const handleChangeTime = (event) => {
    setTime({
      ...Time,
      time: event,
    });
    //   dispatch(interview({ ...Time, time: event }));
  };
  const user = Cookies.get();
  const onSubmit = (e) => {
    e.preventDefault();

    if (!Time.time) {
      setTimeErrorText("Please Enter time");
    } else {
      setTimeErrorText("");
    }
    if (!Time.duration) {
      setDurationErrorText("Please Enter duration");
    } else {
      setDurationErrorText("");
    }
    if (!Time.zone) {
      setZoneErrorText("Please Enter Time Zone");
    } else {
      setZoneErrorText("");
    }
    if (!Time.event) {
      setEventErrorText("Please Enter Event Type");
    } else {
      setEventErrorText("");
    }

    if (!Time.subject) {
      setSubjectErrorText("Please Enter Subject");
    } else {
      setSubjectErrorText("");
    }
    if (!Time.meetlink) {
      setMeetText("Please Enter Meet Link");
    } else {
      setMeetText("");
    }
    if (
      Time.time !== "" &&
      Time.duration !== "" &&
      Time.zone !== "" &&
      Time.event !== "" &&
      Time.subject !== "" &&
      Time.meetlink !== ""
    ) {
      axios
        .post(" https://api.arinnovate.io/api/updateInterview", Time, {
          headers: { "x-access-token": `${user.token}` },
        })
        .then((data) => {
          //   navigate("/employerhome/schedule");
          if (data?.status === 200) {
            dispatch(getSchedules());
            dispatch(
              openAlert({
                type: SUCCESS,
                message: "Interview Was Updated Succesfullfy",
              })
            );
            setopen1(false);
          }
        })
        .catch((err) => {
          console.warn(err);
        });
    }
  };
  const calendarRef = useRef(null);

  return (
    <>
      <FullCalendar
        new={props?.date}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"timeGridDay"}
        headerToolbar={{
          start: "today prev", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "next",
        }}
        dateClick={props?.date}
        selectable
        eventContent={renderEventContent}
        eventClick={(e) => handleDateClick(e)}
        events={props?.schedules}
        height={"90vh"}
        select={targetDate}
        // datesSet={targetDate}
        ref={calendarRef}
        className="responsive-calendar"
      />
      <Dialog fullWidth max onClose={handleClose} open={open}>
        <DialogTitle>Interview Details</DialogTitle>
        <Box
          sx={{ display: "flex", flexDirection: "column", gap: "20px", p: 4 }}
        >
          <Typography>Job Title : {values?.jobDetail?.jobRole}</Typography>
          <Typography> Subject : {values?.subject}</Typography>
          <Typography>Day: {moment(values?.day).format("LL")}</Typography>
          <Typography>Time: {moment(values?.time).format("LT")}</Typography>
          <Typography>Time Zone: {values?.zone}</Typography>
          <Typography>
            Candidate Name: {values?.userDetail?.firstName}{" "}
            {values?.userDetail?.lastName}
          </Typography>
          <Typography>Link: {values?.meetlink}</Typography>
        </Box>
        <Box sx={{ m: 2, display: "flex", justifyContent: "center" }}>
          <Button
            sx={{ background: "#4fa9ff !important", color: "white !important" }}
            onClick={handleOpen}
          >
            Edit
          </Button>
          <Button
            sx={{
              background: "#4fa9ff !important",
              color: "white !important",
              ml: 2,
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
        </Box>
      </Dialog>
      <Dialog
        onClose={handleClose1}
        fullWidth
        maxWidth="md"
        sx={{
          p: "20px !important",
          display: "flex",
          justifyContent: "center",
        }}
        open={open1}
      >
        <Box sx={{ m: "20px" }}>
          <DialogTitle sx={{ textAlign: "center" }}>Edit Interview</DialogTitle>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              gap: "15px",
              // width: "100%",
            }}
          >
            <Box sx={styles.infofldloc}>
              {/* <Typography sx={styles.sectxtloca}>Date</Typography> */}
              <Box>
                <LocalizationProvider
                  dateAdapter={AdapterDateFns}
                  sx={{ width: { sm: "290px", xs: "100%" } }}
                >
                  <DesktopDatePicker
                    label="Date"
                    inputFormat="MM/dd/yyyy"
                    value={Time.day}
                    name="day"
                    onChange={handleChange}
                    renderInput={(params) => (
                      <TextField {...params} sx={styles.naminput} />
                    )}
                  />
                </LocalizationProvider>
              </Box>
            </Box>
            <Box sx={styles.infofldloc}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <MobileTimePicker
                  label="Time"
                  value={Time.time}
                  onChange={(e) => handleChangeTime(e)}
                  renderInput={(params) => (
                    <TextField
                      error={!!timeErrorText}
                      helperText={timeErrorText}
                      sx={styles.naminput}
                      {...params}
                    />
                  )}
                />
              </LocalizationProvider>
            </Box>
            <Box sx={styles.infofldloc}>
              <TextField
                InputLabelProps={{ style: { color: "black" } }}
                // sx={styles.naminput}
                // sx={styles.naminput1}

                id="outlined-basic"
                label="Duration (Mins)"
                value={Time.duration}
                type="number"
                name="duration"
                placeholder="Enter Duration"
                variant="outlined"
                onChange={handleChange1}
                error={!!durationErrorText}
                helperText={durationErrorText}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              mt: "40px",
              justifyContent: { xs: "center", sm: "space-around" },
              alignItems: "center",
              flexWrap: "wrap",
              gap: "15px",
            }}
          >
            <Box sx={styles.infofldloc}>
              <FormControl>
                <InputLabel
                  id="demo-simple-select-label"
                  // style={{ marginLeft: "40px" }}
                >
                  Select Time Zone
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Time.zone}
                  name="zone"
                  label="Select Time Zone"
                  sx={{
                    width: { sm: "290px", xs: "auto" },
                    height: "60px",
                    color: "black",
                  }}
                  onChange={handleChange1}
                  error={!!zoneErrorText}
                >
                  {TIME_ZONES.map((zones, ind) => (
                    <MenuItem key={ind} value={zones}>
                      {zones}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText sx={styles.helpertext}>
                  {zoneErrorText}
                </FormHelperText>
              </FormControl>
            </Box>
            <Box sx={styles.infofldloc}>
              <FormControl>
                <InputLabel
                  id="demo-simple-select-label"
                  // style={{ marginLeft: "40px" }}
                >
                  Select Event Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Time.event}
                  name="event"
                  label="Select Event Type"
                  sx={{
                    width: { sm: "290px", xs: "auto" },
                    height: "60px",
                    color: "black",
                  }}
                  onChange={handleChange1}
                  error={!!eventErrorText}
                >
                  {evnets.map((evnt, ind) => (
                    <MenuItem key={ind} value={evnt}>
                      {evnt}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText sx={styles.helpertext}>
                  {eventErrorText}
                </FormHelperText>
              </FormControl>
            </Box>
            <Box sx={styles.infofldloc}>
              <TextField
                InputLabelProps={{ style: { color: "black" } }}
                sx={styles.naminput}
                id="outlined-basic"
                value={Time.subject}
                name="subject"
                label="Subject"
                placeholder="Enter Subject"
                variant="outlined"
                onChange={handleChange1}
                error={!!subjectErrorText}
                helperText={subjectErrorText}
              />
              {/* </Box> */}
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box sx={styles.infofldloc2}>
              <Typography sx={styles.sectxtloca}>Meeting Link</Typography>
              <TextField
                InputLabelProps={{ style: { color: "black" } }}
                sx={styles.naminput2}
                id="outlined-basic"
                value={Time.meetlink}
                fullWidth
                name="meetlink"
                label="Meeting Link"
                placeholder="Enter Link"
                variant="outlined"
                onChange={handleChange1}
                error={!!meetText}
                helperText={meetText}
              />
            </Box>
          </Box>
          <Divider />

          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-end" },
              padding: { xs: 0, sm: "24px 56px 20px 0" },
              gap: "20px",
              width: "100%",
            }}
          >
            <Button
              variant="contained"
              sx={{
                background: "#4fa9ff !important",
                width: { xs: "30%", sm: "auto" },
              }}
              onClick={handleClose1}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                background: "#4fa9ff !important",
                width: { xs: "30%", sm: "auto" },
              }}
              onClick={onSubmit}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};
function renderEventContent(eventInfo) {
  return (
    <div style={{ height: "40px" }}>
      {eventInfo.timeText}-{eventInfo.event.title}
    </div>
  );
}
export default InterviewCalendar;
