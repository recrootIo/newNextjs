import { Box, Button, Divider, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { DesktopDatePicker, LocalizationProvider, MobileTimePicker } from '@mui/x-date-pickers'
import React, { useEffect } from 'react'
import { styles } from "./allapplicationstyle";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import moment from 'moment';
import { SUCCESS, TIME_ZONES } from '@/utils/constants';
import { interview, setinterview } from '@/redux/slices/interviewslice';
import Cookies from 'js-cookie';
import axios from 'axios';
import { openAlert } from '@/redux/slices/alert';
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

function Addinterview({users,setinterviewshow}) {
    const sear = useSelector((state) => state.sinterview.scheduleinterview);
    // const single = useSelector((state) => state.apply.single);
    const dispatch = useDispatch();
    // let navigate = useNavigate();
    const user = Cookies.get()
  
    const [Time, setTime] = useState(
      sear._id === undefined
        ? {
            day: new Date(),
            canditateId: users?.candidateId?._id,
            companyId: users?.companyId,
            jobId: users?.jobId,
            time: new Date(),
            duration: "",
            zone: "",
            event: "",
            subject: "",
            meetlink: "",
          }
        : {
            day: sear?.day,
            canditateId: sear?.canditateId,
            companyId: sear?.companyId,
            jobId: sear?.jobId,
            time: sear?.time,
            duration: sear?.duration,
            zone: sear?.zone,
            event: sear?.event,
            subject: sear?.subject,
            meetlink: sear?.meetlink,
            _id: sear?._id,
          }
    );

    useEffect(() => {
     setTime(  sear._id === undefined
        ? {
            day: new Date(),
            canditateId: users?.candidateId?._id,
            companyId: users?.companyId,
            jobId: users?.jobId,
            time: new Date(),
            duration: "",
            zone: "",
            event: "",
            subject: "",
            meetlink: "",
          }
        : {
            day:new Date(sear?.day),
            canditateId: sear?.canditateId,
            companyId: sear?.companyId,
            jobId: sear?.jobId,
            time:new Date(sear?.time),
            duration: sear?.duration,
            zone: sear?.zone,
            event: sear?.event,
            subject: sear?.subject,
            meetlink: sear?.meetlink,
            _id: sear?._id,
          })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [users?.candidateId,sear])
    const [values, setValue] = useState();
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
      setValue([date.getFullYear(), mnth, day].join("-"));
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
        if (!sear._id) {
          axios
            .post("https://preprod.recroot.au/api/addinterview", Time, {
              headers: { "x-access-token": `${user.token}` },
            })
            .then((data) => {
                dispatch(openAlert({
                    type:SUCCESS,
                    message:"Interview Was Added Succesfullfy"
                }))
                setTime({
                    day: new Date(),
                    canditateId: users?.candidateId?._id,
                    companyId: users?.companyId,
                    jobId: users?.jobId,
                    time: new Date(),
                    duration: "",
                    zone: "",
                    event: "",
                    subject: "",
                    meetlink: "",
                  })
                  setinterviewshow(false)
            //   notify();
            //   navigate("/employerhome/schedule");
            })
            .catch((err) => {
              console.warn(err);
            });
        } else {
          axios
            .post("https://preprod.recroot.au/api/updateInterview", Time, {
              headers: { "x-access-token": `${user.token}` },
            })
            .then((data) => {
                dispatch(openAlert({
                    type:SUCCESS,
                    message:"Interview Was Updated Succesfullfy"
                }))
            //   navigate("/employerhome/schedule");
            setinterviewshow(false)
              dispatch(setinterview({ search: [] }));
            })
            .catch((err) => {
              console.warn(err);
            });
        }
      }
    };
  return (
    <div>
        <Box sx={{p:'25px'}}>
        <Box style={{ border: "1px solid #cacaca", borderRadius: "10px" }}>
        <Box>
          <Typography variant="h5" sx={styles.addtxt}>
            Schedule an Event
          </Typography>
          <Box sx={{display:'flex',justifyContent:'space-around'}}>
            <Box sx={styles.infofldloc}>
              {/* <Typography sx={styles.sectxtloca}>Date</Typography> */}
              <Box>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
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
            <Box sx={{display:'flex',mt:'40px',justifyContent:'space-around'}}>
            <Box sx={styles.infofldloc}>
              <FormControl>
                <InputLabel
                  id="demo-simple-select-label"
                  style={{ marginLeft: "40px" }}
                >
                  Select Time Zone
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Time.zone}
                  name="zone"
                  label="Select Time Zone"
                  sx={styles.naminput1}
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
                  style={{ marginLeft: "40px" }}
                >
                  Select Event Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Time.event}
                  name="event"
                  label="Select Event Type"
                  sx={styles.naminput1}
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
        </Box>
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
        <Divider />

        <Box
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            padding: "24px 24px 20px 0",
          }}
        >
          {!sear._id ? (
            <Button variant="contained" sx={{background:'#4fa9ff !important'}} onClick={onSubmit}>
              Submit
            </Button>
          ) : (
            <Button variant="contained" sx={{background:'#4fa9ff !important'}} onClick={onSubmit}>
              Save
            </Button>
          )}
        </Box>
      </Box>
        </Box>
    </div>
  )
}

export default Addinterview
