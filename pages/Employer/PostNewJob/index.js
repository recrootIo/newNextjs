"use client";
import React, { useState } from "react";
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
  TextField,
  Autocomplete,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { Close } from "@mui/icons-material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { BOLD } from "@/theme/fonts";
import EmployerNavbar from "@/components/EmployerNavbar/EmployerNavbar";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import AddIcon from "@mui/icons-material/Add";
import EditorToolbar, {
  modules,
  formats,
} from "@/components/EditorToolbar/EditorToolbar";
// import ReactQuill from "react-quill";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import ScreeningQuestions from "@/components/Employers/ScreeningQuestions/ScreeningQuestions";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import Image from "next/image";
import Layout from "../layout";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

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

const JobDetails = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [active, setActive] = useState(1);
  const [apiAddress, setapiAddress] = useState("");
  //   const member = useSelector((state) => state.company.members);
  //   const [memberrole, setMemberrole] = React.useState(member);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Layout>
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
          Create New Job
        </CustomTypography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "white !important",
            color: "#01313F",
            height: "42px",
          }}
        >
          Post New Job
        </Button>
      </Box>

      {active === 1 && (
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: "30px",
                  mb: "100px",
                }}
              >
                <Image
                  src="/post-newjob-firststep-img.png"
                  alt=""
                  width="320"
                  height="20"
                />
              </Box>
              <CustomTypography
                sx={{
                  color: "#034275",
                  fontFamily: BOLD,
                  fontSize: "28px",
                  mb: "25px",
                }}
              >
                Job Details
              </CustomTypography>
              <Divider
                sx={{ bgcolor: "rgba(122, 193, 218, 0.6)", mb: "40px" }}
              />
              <Stack spacing={3}>
                <Autocomplete
                  freeSolo
                  id="free-solo-2-demo"
                  disableClearable
                  fullWidth
                  name="jobRole"
                  // value={level}
                  // onBlur={(value) => {
                  //   handleChangesRole(value);
                  // }}
                  // options={titleDesc.map((option) => option.rol.role)}
                  renderInput={(params) => (
                    <TextField
                      sx={{ ...style.txtinput, bgcolor: "white" }}
                      {...params}
                      label="Job Title"
                      //error={errors.jobRole ? true : false}
                      //helperText={errors.jobRole}
                      name="jobRole"
                      InputProps={{
                        ...params.InputProps,
                        type: "search",
                      }}
                      color="warning"
                      //sx={{ color: "" }}
                    />
                  )}
                />
                <Box
                  sx={{
                    width: "100%",
                    height: "320px",
                  }}
                >
                  <EditorToolbar sx={{ bgcolor: "#F2F8FD" }} />
                  <ReactQuill
                    placeholder="Add Description"
                    // value={cmpin.infodes}
                    // onChange={handleDesc}
                    // onBlur={handleBlurDes}
                    // modules={modules}
                    // formats={formats}
                    // className="textareaQuestion"
                    style={{ height: "250px" }}
                  />
                </Box>
                <Stack direction="row" spacing={2}>
                  <Autocomplete
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable={false}
                    name="skills"
                    sx={{
                      ...style.txtinput,
                      bgcolor: "white",
                      width: "80%",
                    }}
                    // value={role.skill}
                    // onBlurCapture={(e) =>
                    //   setRole({ skill: e.target.value, id: uuidv4() })
                    // }
                    // open={open}
                    // onOpen={() => {
                    //   setOpen(true);
                    // }}
                    // onClose={() => {
                    //   setOpen(false);
                    // }}
                    // onBlur={addSkil}
                    // onKeyUp={(e) => {
                    //   handleKey(e);
                    // }}
                    // options={arrskills.map((option) => option)}
                    // loading={loading}
                    renderInput={(params) => (
                      <TextField
                        sx={style.txtinput}
                        {...params}
                        label="Skills"
                        // error={errors.jobRole ? true : false}
                        // helperText={errors.jobRole}
                        // onChange={(e) => {
                        //   inputChanged(e);
                        // }}
                        name="jobRole"
                        InputProps={{
                          ...params.InputProps,
                          type: "search",
                          endAdornment: (
                            <React.Fragment>
                              {/* {loading && load ? (
                                  <CircularProgress color="inherit" size={20} />
                                ) : null} */}
                            </React.Fragment>
                          ),
                        }}
                      />
                    )}
                  />
                  <Button
                    sx={{
                      width: "20%",
                      bgcolor: "white !important",
                      color: "#01313F",
                      textTransform: "capitalize",
                    }}
                    //sx={styles.roleblue2}
                    // onClick={() => {
                    //   addSkil();
                    // }}
                    startIcon={<AddIcon />}
                  >
                    Add Skills
                  </Button>
                </Stack>
                {/* {isEmpty(!jobs.requiredSkill) && ( */}
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                  }}
                >
                  {/* {jobs.requiredSkill &&
                            jobs.requiredSkill.map((role, index) => ( */}
                  <Box
                  //key={index}
                  >
                    <Chip
                      // label={role?.skill}
                      // onDelete={() => {
                      //   handleRemove(role?.id);
                      // }}
                      sx={{ bgcolor: "#D4F0FC" }}
                    />
                  </Box>
                  {/* ))} */}
                </Box>
                {/* )} */}
                <Box sx={{ width: "100%" }}>
                  <GooglePlacesAutocomplete
                    apiKey="AIzaSyCLT3fP1-59v2VUVoifXXJX-MQ0HA55Jp4"
                    selectProps={{
                      isClearable: true,
                      placeholder: "Job Location",

                      value: apiAddress.address || "",
                      // onChange: (val) => {
                      //   handleChange2(val);
                      // },
                      styles: {
                        input: (provided) => ({
                          ...provided,
                          color: "#BAD4DF",
                          height: "47px",
                          borderColor: "#BAD4DF",
                        }),
                        option: (provided) => ({
                          ...provided,
                          color: "#BAD4DF",
                        }),
                        singleValue: (provided) => ({
                          ...provided,
                          color: "#BAD4DF",
                          borderColor: "#BAD4DF",
                        }),
                      },
                    }}
                  />
                </Box>
                <ScreeningQuestions />
              </Stack>
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: "40px",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{ width: "50%", height: "55px" }}
                >
                  Previous
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    width: "50%",
                    bgcolor: "#015FB1 !important",
                    height: "55px",
                  }}
                >
                  Submit
                </Button>
              </Stack>
            </Box>
          </CardContent>
        </Card>
      )}

      {active === 2 && (
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: "30px",
                  mb: "100px",
                }}
              >
                <Image
                  src="/post-newjob-secondstep-img.png"
                  alt=""
                  width="320"
                  height="20"
                />
              </Box>
              <CustomTypography
                sx={{
                  color: "#034275",
                  fontFamily: BOLD,
                  fontSize: "28px",
                  mb: "25px",
                }}
              >
                Essential Information
              </CustomTypography>
              <Divider
                sx={{ bgcolor: "rgba(122, 193, 218, 0.6)", mb: "40px" }}
              />
              <Stack spacing={3}>
                <Stack direction="row" spacing={2}>
                  <FormControl
                    sx={{
                      ...style.txtinput,
                      bgcolor: "white",
                      width: "50%",
                    }}
                  >
                    <InputLabel
                      id="demo-simple-select-label"
                      sx={{ color: "#BAD4DF" }}
                    >
                      Career Level
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Career Level"
                      //value={level.careerlevel}
                      name="careerlevel"
                      // onChange={(e) => {
                      //   handleChangeLevel(e);
                      // }}
                      // error={errors.careerlevel ? true : false}
                      // helperText={errors.careerlevel}
                    >
                      {/* {CAREER_LEVEL.map((CareerLevel) => ( */}
                      <MenuItem
                      //   key={CareerLevel} value={CareerLevel}
                      >
                        <CustomTypography textAlign="center">
                          {/* {CareerLevel} */}
                        </CustomTypography>
                      </MenuItem>
                      {/* ))} */}
                    </Select>
                    {/* {!!errors.careerlevel && ( */}
                    <FormHelperText error id="accountId-error">
                      {/* {errors.careerlevel} */}
                    </FormHelperText>
                    {/* )} */}
                  </FormControl>
                  <FormControl
                    sx={{
                      ...style.txtinput,
                      bgcolor: "white",
                      width: "50%",
                    }}
                  >
                    <InputLabel
                      id="demo-simple-select-label"
                      sx={{ color: "#BAD4DF" }}
                    >
                      Experience
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Experience"
                      sx={styles.naminput2}
                      // value={level.experience}
                      // name="experience"
                      // onChange={(e) => {
                      //   handleChangeLevel(e);
                      // }}
                      // error={errors.experience ? true : false}
                      // helperText={errors.experience}
                    >
                      {/* {USER_EXPERIENCES.map((Experiences) => ( */}
                      <MenuItem
                      //key={Experiences} value={Experiences}
                      >
                        <CustomTypography textAlign="center">
                          {/* {Experiences} */}
                        </CustomTypography>
                      </MenuItem>
                      {/* ))} */}
                    </Select>
                    {/* {!!errors.experience && ( */}
                    <FormHelperText error id="accountId-error">
                      {/* {errors.experience} */}
                    </FormHelperText>
                    {/* )} */}
                  </FormControl>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <FormControl
                    sx={{
                      ...style.txtinput,
                      bgcolor: "white",
                      width: "50%",
                    }}
                  >
                    <InputLabel
                      id="demo-simple-select-label"
                      sx={{ color: "#BAD4DF" }}
                    >
                      Qualifications
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Qualifications"
                      sx={styles.naminput2}
                      //value={level.qualification}
                      name="qualification"
                      // error={errors.qualification ? true : false}
                      // helperText={errors.qualification}
                      // onChange={(e) => {
                      //   handleChangeLevel(e);
                      // }}
                    >
                      {/* {EDUCATION_LEVELS.map((Qualifications) => ( */}
                      <MenuItem
                      // key={Qualifications}
                      // value={Qualifications}
                      >
                        <CustomTypography textAlign="center">
                          {/* {Qualifications} */}
                        </CustomTypography>
                      </MenuItem>
                      {/* ))} */}
                    </Select>
                    {/* {!!errors.qualification && (
                            <FormHelperText error id="accountId-error">
                              {errors.qualification}
                            </FormHelperText>
                          )} */}
                  </FormControl>
                  <Box sx={{ width: "50%" }}>
                    <LocalizationProvider
                      dateAdapter={AdapterDateFns}
                      style={{ width: "50%", bgcolor: "white" }}
                    >
                      <MobileDatePicker
                        slotProps={{
                          textField: {
                            ...style.txtinput,
                            bgcolor: "white",
                            width: "50%",
                          },
                        }}
                        style={{ width: "50%", bgcolor: "white" }}
                        label="Deadline"
                        name="applicationDeadline"
                        inputFormat="dd/MM/yyyy"
                        minDate={new Date()}
                        //   value={
                        //     jobs === ""
                        //       ? value
                        //       : jobs && jobs.applicationDeadline
                        //   }
                        //   onChange={handleChangeDate}
                        renderInput={(params) => (
                          <TextField
                            error={errors.applicationDeadline ? true : false}
                            {...params}
                            style={{ width: "100% !important" }}
                          />
                        )}
                      />
                    </LocalizationProvider>
                    {/* {!!errors.applicationDeadline && (
                            <FormHelperText error id="accountId-error">
                              {errors.applicationDeadline}
                            </FormHelperText>
                          )} */}
                  </Box>
                </Stack>
                <FormControl sx={{ ...style.txtinput, bgcolor: "white" }}>
                  <InputLabel
                    id="demo-simple-select-label"
                    sx={{ color: "#BAD4DF" }}
                  >
                    Notice Period
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    //   value={jobs && jobs?.notice}
                    //   onChange={(e) => {
                    //     handleChangesChild(e);
                    //   }}
                    name="notice"
                    //   error={errors.notice ? true : false}
                    //   helperText={errors.notice}
                    label="notice period"
                    sx={styles.naminput2}
                  >
                    {/* {NoticePeriod.map((not, ind) => (
                            <MenuItem key={ind} value={not}>
                              {not}
                            </MenuItem>
                          ))} */}
                  </Select>
                  {/* {!!errors.notice && (
                          <FormHelperText error id="accountId-error">
                            {errors.notice}
                          </FormHelperText>
                        )} */}
                </FormControl>
                <FormControl sx={{ ...style.txtinput, bgcolor: "white" }}>
                  <InputLabel
                    id="demo-simple-select-label"
                    sx={{ color: "#BAD4DF" }}
                  >
                    Job Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    //   value={jobs && jobs.jobType}
                    //   onChange={(e) => {
                    //     handleChangesChild(e);
                    //   }}
                    name="jobType"
                    //   error={errors.jobType ? true : false}
                    //   helperText={errors.jobType}
                    label="Job Type"
                    sx={styles.naminput2}
                  >
                    <MenuItem value={"Remote"}>Remote</MenuItem>
                    <MenuItem value={"Onsite"}>Onsite</MenuItem>
                    <MenuItem value={"Hybrid"}>Hybrid</MenuItem>
                  </Select>
                  {/* {!!errors.jobType && (
                          <FormHelperText error id="accountId-error">
                            {errors.jobType}
                          </FormHelperText>
                        )} */}
                </FormControl>
                <FormControl sx={{ ...style.txtinput, bgcolor: "white" }}>
                  <InputLabel
                    id="demo-simple-select-label"
                    sx={{ color: "#BAD4DF" }}
                  >
                    Salary Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    //   value={jobs?.salary?.salaryType}
                    //   name={"salaryType"}
                    //   onChange={(e) => {
                    //     handleChangesSalary(e);
                    //   }}
                    label="Salary Type"
                    //   error={errors.salaryType ? true : false}
                    //   helperText={errors.salaryType}
                    sx={styles.naminput2}
                  >
                    <MenuItem selected value={"noprovide"}>
                      Negotiable
                    </MenuItem>
                    <MenuItem value={"yearly"}>Yearly</MenuItem>
                    <MenuItem value={"monthly"}>Monthly</MenuItem>
                    <MenuItem value={"hourly"}>Hourly</MenuItem>
                  </Select>
                </FormControl>
                <Stack direction="row" spacing={2}>
                  <FormControl
                    sx={{
                      ...style.txtinput,
                      bgcolor: "white",
                      width: "50%",
                    }}
                  >
                    <InputLabel
                      id="demo-simple-select-label"
                      sx={{ color: "#BAD4DF" }}
                    >
                      Salary Currency
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="salaryCrrancy"
                      label="Salary Currency"
                      //   value={jobs.salary && jobs.salary.salaryCrrancy}
                      //   onChange={(e) => {
                      //     handleChangesSalary(e);
                      //   }}
                      //   error={errors.salaryCrrancy ? true : false}
                      //   helperText={errors.salaryCrrancy}
                    >
                      {/* {CURRENCY.map((cur, ind) => (
                            <MenuItem key={ind} value={cur.symbol}>
                              {cur.country}-{cur.symbol}
                            </MenuItem>
                          ))} */}
                    </Select>
                    {/* {!!errors.salaryCrrancy && (
                          <FormHelperText error id="accountId-error">
                            {errors.salaryCrrancy}
                          </FormHelperText>
                        )} */}
                  </FormControl>
                  <TextField
                    InputLabelProps={{ style: { color: "#BAD4DF" } }}
                    id="outlined-basic"
                    label="Min Salary"
                    //   value={jobs.salary && jobs.salary.minSalary}
                    //   onChange={(e) => {
                    //     handleChangesSalary(e);
                    //   }}
                    type="number"
                    name="minSalary"
                    //   error={errors.minSalary ? true : false}
                    //   helperText={errors.minSalary}
                    placeholder="Enter Min Salary"
                    variant="outlined"
                    sx={{
                      ...style.txtinput,
                      bgcolor: "white",
                      width: "25%",
                    }}
                  />
                  <TextField
                    InputLabelProps={{ style: { color: "#BAD4DF" } }}
                    id="outlined-basic"
                    //   value={jobs.salary && jobs.salary.maxSalary}
                    //   onChange={(e) => {
                    //     handleChangesSalary(e);
                    //   }}
                    label="Max Salary"
                    //   error={errors.maxSalary ? true : false}
                    //   helperText={errors.maxSalary}
                    type="number"
                    name="maxSalary"
                    placeholder="Enter Max Salary"
                    variant="outlined"
                    sx={{
                      ...style.txtinput,
                      bgcolor: "white",
                      width: "25%",
                    }}
                  />
                </Stack>
                <Box>
                  <FormGroup>
                    <FormControlLabel
                      sx={{ justifyContent: "flex-end", ml: 0 }}
                      control={
                        <Switch
                          // checked={feature}
                          // onChange={handleFeatureType}
                          inputProps={{ "aria-label": "controlled" }}
                        />
                      }
                      label={
                        <CustomTypography
                          sx={{
                            fontWeight: "300",
                            fontSize: "16px",
                            lineHeight: "30px",
                            color: "#01313F",
                          }}
                        >
                          Make this job a featured job
                        </CustomTypography>
                      }
                      labelPlacement="start"
                    />
                  </FormGroup>
                </Box>
                <Box>
                  <FormGroup>
                    <FormControlLabel
                      sx={{ justifyContent: "flex-end", ml: 0 }}
                      control={
                        <Switch
                          // checked={immediate}
                          // onChange={handleImmediateType}
                          inputProps={{ "aria-label": "controlled" }}
                        />
                      }
                      label={
                        <CustomTypography
                          sx={{
                            fontWeight: "300",
                            fontSize: "16px",
                            lineHeight: "30px",
                            color: "#01313F",
                          }}
                        >
                          Make this job an immediate job
                        </CustomTypography>
                      }
                      labelPlacement="start"
                    />
                  </FormGroup>
                </Box>
              </Stack>
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: "40px",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{ width: "50%", height: "55px" }}
                >
                  Previous
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    width: "50%",
                    bgcolor: "#015FB1 !important",
                    height: "55px",
                  }}
                >
                  Submit
                </Button>
              </Stack>
            </Box>
          </CardContent>
        </Card>
      )}

      {active === 3 && (
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: "30px",
                  mb: "100px",
                }}
              >
                <Image
                  src="/post-newjob-thirdstep-img.png"
                  alt=""
                  width="320"
                  height="20"
                />
              </Box>
              <CustomTypography
                sx={{
                  color: "#034275",
                  fontFamily: BOLD,
                  fontSize: "28px",
                  mb: "25px",
                }}
              >
                Preview
              </CustomTypography>
              <Box
                sx={{
                  bgcolor: "#2699FF",
                  height: "55px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  p: "0px 15px 0px 15px",
                }}
              >
                <CustomTypography
                  sx={{
                    color: "white",
                    fontSize: "16px",
                  }}
                >
                  Basic Information
                </CustomTypography>
                <EditOutlinedIcon color="white" sx={{ color: "white" }} />
              </Box>
              <Box sx={{ p: "20px 15px 0px 15px" }}>
                <Stack spacing={3}>
                  <Box sx={{ display: "flex", gap: "10px" }}>
                    <CustomTypography className={styles.JobPreviewTypo}>
                      Job Title :
                    </CustomTypography>
                    <CustomTypography className={styles.JobPreviewData}>
                      Lorem Ipsum
                    </CustomTypography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "10px" }}>
                    <CustomTypography className={styles.JobPreviewTypo}>
                      Job Description :
                    </CustomTypography>
                    <CustomTypography className={styles.JobPreviewData}>
                      Are you looking for the next professional opportunity that
                      will challenge you and advance your career? Join our team
                      now!
                    </CustomTypography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "10px" }}>
                    <CustomTypography className={styles.JobPreviewTypo}>
                      Requirements :
                    </CustomTypography>
                    <CustomTypography className={styles.JobPreviewData}>
                      {bull} Collaborate with other team members and
                      stakeholders
                      <br></br>
                      {bull} Contribute to team productivity, product quality,
                      and tech adoption<br></br>
                      {bull} Communicate technical design, requirements,
                      functionality, and limitations
                      <br></br>
                      {bull} Be overall responsible for all the deliverables and
                      for meeting targets<br></br>
                      {bull} Recommend and execute<br></br>
                    </CustomTypography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "10px" }}>
                    <CustomTypography className={styles.JobPreviewTypo}>
                      Job Requirements :
                    </CustomTypography>
                    <CustomTypography className={styles.JobPreviewData}>
                      {bull} Bachelor&apos;s degree
                      <br></br>
                      {bull} At least 1+ years of prior experience in a similar
                      area<br></br>
                      {bull} Ability to work effectively both individually and
                      in a team environment
                      <br></br>
                      {bull} Excellent verbal and written communication skills
                      <br></br>
                      {bull} Great attention to detail<br></br>
                    </CustomTypography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "10px" }}>
                    <CustomTypography className={styles.JobPreviewTypo}>
                      Required Skills :
                    </CustomTypography>
                    <Stack direction="row" spacing={2}>
                      <Chip
                        label="Deletable"
                        onDelete={handleDelete}
                        sx={{ bgcolor: "#D4F0FC" }}
                      />
                    </Stack>
                  </Box>
                  <Box sx={{ display: "flex", gap: "10px" }}>
                    <CustomTypography className={styles.JobPreviewTypo}>
                      Job Location :
                    </CustomTypography>
                    <CustomTypography className={styles.JobPreviewData}>
                      Lorem Ipsum
                    </CustomTypography>
                  </Box>
                </Stack>
              </Box>
              <Box
                sx={{
                  bgcolor: "#2699FF",
                  height: "55px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  p: "0px 15px 0px 15px",
                  mt: "25px",
                }}
              >
                <CustomTypography
                  sx={{
                    color: "white",
                    fontSize: "16px",
                  }}
                >
                  Essential Information
                </CustomTypography>
                <EditOutlinedIcon color="white" sx={{ color: "white" }} />
              </Box>
              <Box sx={{ p: "20px 15px 0px 15px" }}>
                <Stack spacing={3}>
                  <Box sx={{ display: "flex", gap: "10px" }}>
                    <CustomTypography className={styles.JobPreviewTypo}>
                      Career Level :
                    </CustomTypography>
                    <CustomTypography className={styles.JobPreviewData}>
                      Lorem Ipsum
                    </CustomTypography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "10px" }}>
                    <CustomTypography className={styles.JobPreviewTypo}>
                      Experience :
                    </CustomTypography>
                    <CustomTypography className={styles.JobPreviewData}>
                      3+ Years
                    </CustomTypography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "10px" }}>
                    <CustomTypography className={styles.JobPreviewTypo}>
                      Qualifications :
                    </CustomTypography>
                    <CustomTypography className={styles.JobPreviewData}>
                      Postgraduate Diploma
                    </CustomTypography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "10px" }}>
                    <CustomTypography className={styles.JobPreviewTypo}>
                      Application Deadline :
                    </CustomTypography>
                    <CustomTypography className={styles.JobPreviewData}>
                      05/26/2023
                    </CustomTypography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "10px" }}>
                    <CustomTypography className={styles.JobPreviewTypo}>
                      Notice Period :
                    </CustomTypography>
                    <CustomTypography className={styles.JobPreviewData}>
                      15 Days
                    </CustomTypography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "10px" }}>
                    <CustomTypography className={styles.JobPreviewTypo}>
                      Job Type :
                    </CustomTypography>
                    <CustomTypography className={styles.JobPreviewData}>
                      Remote
                    </CustomTypography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "10px" }}>
                    <CustomTypography className={styles.JobPreviewTypo}>
                      Salary :
                    </CustomTypography>
                    <CustomTypography className={styles.JobPreviewData}>
                      Negotiable
                    </CustomTypography>
                  </Box>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: "40px",
                  }}
                >
                  <Button
                    variant="outlined"
                    sx={{ width: "50%", height: "55px" }}
                  >
                    Previous
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      width: "50%",
                      bgcolor: "#015FB1 !important",
                      height: "55px",
                    }}
                  >
                    Submit
                  </Button>
                </Stack>
              </Box>
            </Box>
          </CardContent>
        </Card>
      )}
    </Layout>
  );
};

export default JobDetails;
