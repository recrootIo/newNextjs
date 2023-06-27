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
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
// import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { BOLD } from "@/theme/fonts";
import EmployerNavbar from "@/components/EmployerNavbar/EmployerNavbar";
import { styles } from "@/components/Employers/CompanyProfile/CompanyProfileStyle";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  detailsSet,
  essentialSet,
  featureSet,
  immediateSet,
  salarySet,
  skillSet,
  skillSetmand,
} from "@/redux/slices/job";
import moment from "moment";
import {
  CAREER_LEVEL,
  EDUCATION_LEVELS,
  NoticePeriod,
  USER_EXPERIENCES,
} from "@/utils/constants";
import { CURRENCY } from "@/utils/currency";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Cookies from "js-cookie";
import dynamic from "next/dynamic";
import companyservice from "@/redux/services/company.service";
const Tour = dynamic(() => import("reactour"), { ssr: false });

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

const EssentialInformation = () => {
  const essen = useSelector((state) => state.jobs.essential);
  const _id = useSelector((state) => state.jobs._id);
  const errors = useSelector((state) => state.jobs.error);
  const feature = useSelector((state) => state.jobs.featureType);
  const companyDet = useSelector((state) => state.company.companyDetl);
  const jobs = useSelector((state) => state.jobs.details);
  const full = useSelector((state) => state.jobs.packageType);
  const roles = useSelector((state) => state.jobs.details.requiredSkill);
  const rolesmand = useSelector((state) => state.jobs.details.mandatorySkill);
  const immediate = useSelector((state) => state.jobs.immediate);
  const jobsmeen = useSelector((state) => state.jobs);
  const country = Cookies.get("country");
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 2);
  const [value, setValue] = useState(
    full === "jSlot" ? new Date() : futureDate
  );
  const dispatch = useDispatch();
  const [salary, setSalary] = useState({
    salaryType: jobs.salary && jobs.salary.salaryType,
    minSalary: jobs.salary && jobs.salary.minSalary,
    maxSalary: jobs.salary && jobs.salary.maxSalary,
    salaryCrrancy: jobs.salary && jobs.salary.salaryCrrancy,
  });
  useEffect(() => {
    if (full === "jSlot") {
      return;
    }
    if (jobs?.applicationDeadline === undefined) {
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 2);
      setDatas({ ...datas, applicationDeadline: futureDate });
      dispatch(
        detailsSet({
          ...datas,
          applicationDeadline: futureDate,
          salary,
          roles,
        })
      );
      dispatch(skillSet([...roles]));
      dispatch(skillSetmand([...rolesmand]));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jobs]);
  useEffect(() => {
    const element = document.getElementById("top");
       element.scrollIntoView({
         behavior: "smooth",
       });
   }, []);
  const [datas, setDatas] = useState({
    jobType: jobs && jobs.jobType,
    applicationDeadline: jobs && jobs.applicationDeadline,
  });

  const handleChangesChild = (e) => {
    let { name, value } = e.target;
    setDatas({
      ...datas,
      [name]: value,
      salary,
    });
    dispatch(detailsSet({ ...datas, [name]: value, salary }));
    dispatch(skillSet([...roles]));
    dispatch(skillSetmand([...rolesmand]));
  };

  const handleChangeDate = (newValue) => {
    setValue(newValue);
    setDatas({
      ...datas,
      applicationDeadline: newValue,
    });
    dispatch(
      detailsSet({
        ...datas,
        applicationDeadline: newValue,
        salary,
        roles,
      })
    );
    dispatch(skillSet([...roles]));
    dispatch(skillSetmand([...rolesmand]));
  };
  const handleChangesSalary = (e) => {
    if (e.target.value === "noprovide") {
      dispatch(
        salarySet({
          salaryType: "noprovide",
        })
      );
      dispatch(skillSet([...roles]));
      dispatch(skillSetmand([...rolesmand]));
    } else {
      let { name, value } = e.target;
      setSalary({
        ...salary,
        [name]: value,
      });
      dispatch(salarySet({ ...salary, [name]: value }));
      dispatch(skillSet([...roles]));
      dispatch(skillSetmand([...rolesmand]));
    }
  };

  // eslint-disable-next-line no-extend-native
  Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };

  const [level, setLevel] = useState({
    careerlevel: essen && essen.careerlevel,
    experience: essen && essen.experience,
    qualification: essen && essen.qualification,
  });

  const handleChangeLevel = (e) => {
    let { name, value } = e.target;
    setLevel({
      ...level,
      [name]: value,
    });
    dispatch(essentialSet({ ...level, [name]: value }));
  };

  const handleFeatureType = (event) => {
    dispatch(featureSet(event.target.checked));
  };

  const handleImmediateType = (event) => {
    dispatch(immediateSet(event.target.checked));
  };

  const [isTourOpen, setTourOpen] = React.useState(false);

  const updateValue = async () => {
    const companyService = new companyservice();
    await companyService.updateTourValue({ jobEssential: false });
  };

  const closeTour = () => {
    setTourOpen(false);
    updateValue();
  };

  const accentColor = "#5cb7b7";

  const tourConfig = [
    {
      selector: ".essentialInfo",
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
            Provide the essential information to make your job post more
            appealing to candidates
          </CustomTypography>
          <Button onClick={() => closeTour()}>SKIP</Button>
        </Stack>
      ),
    },

    {
      selector: ".nextButton",
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
            Click here to proceed to the next step
          </CustomTypography>
          <Button onClick={() => closeTour()}>Done</Button>
        </Stack>
      ),
    },
  ];

  const company = useSelector((state) => state?.company?.companyDetl);

  useEffect(() => {
    setTourOpen(() => company?.tours?.jobEssential);
  }, [company?.tours?.jobEssential]);

  return (
    <>
      <Box  className="essentialInfo">
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
        <Divider sx={{ bgcolor: "rgba(122, 193, 218, 0.6)", mb: "40px" }} />
        <Stack spacing={3}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <FormControl
              sx={{
                ...style.txtinput,
                bgcolor: "white",
                width: { xs: "100%", sm: "50%" },
              }}
            >
              <InputLabel id="demo-simple-select-label">
                Career Level
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Career Level"
                value={level.careerlevel}
                name="careerlevel"
                onChange={(e) => {
                  handleChangeLevel(e);
                }}
                error={errors.careerlevel ? true : false}
                helperText={errors.careerlevel}
              >
                {CAREER_LEVEL.map((CareerLevel) => (
                  <MenuItem key={CareerLevel} value={CareerLevel}>
                    <CustomTypography>{CareerLevel}</CustomTypography>
                  </MenuItem>
                ))}
              </Select>
              {!!errors.careerlevel && (
                <FormHelperText error id="accountId-error">
                  {errors.careerlevel}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl
              sx={{
                ...style.txtinput,
                bgcolor: "white",
                width: { xs: "100%", sm: "50%" },
              }}
            >
              <InputLabel id="demo-simple-select-label">Experience</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Experience"
                sx={styles.naminput2}
                value={level.experience}
                name="experience"
                onChange={(e) => {
                  handleChangeLevel(e);
                }}
                error={errors.experience ? true : false}
                helperText={errors.experience}
              >
                {USER_EXPERIENCES.map((Experiences) => (
                  <MenuItem key={Experiences} value={Experiences}>
                    <CustomTypography>{Experiences}</CustomTypography>
                  </MenuItem>
                ))}
              </Select>
              {!!errors.experience && (
                <FormHelperText error id="accountId-error">
                  {errors.experience}
                </FormHelperText>
              )}
            </FormControl>
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <FormControl
              sx={{
                ...style.txtinput,
                bgcolor: "white",
                width: { xs: "100%", sm: "50%" },
              }}
            >
              <InputLabel id="demo-simple-select-label">
                Qualifications
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Qualifications"
                sx={styles.naminput2}
                value={level.qualification}
                name="qualification"
                error={errors.qualification ? true : false}
                helperText={errors.qualification}
                onChange={(e) => {
                  handleChangeLevel(e);
                }}
              >
                {EDUCATION_LEVELS.map((Qualifications) => (
                  <MenuItem key={Qualifications} value={Qualifications}>
                    <CustomTypography>{Qualifications}</CustomTypography>
                  </MenuItem>
                ))}
              </Select>
              {!!errors.qualification && (
                <FormHelperText error id="accountId-error">
                  {errors.qualification}
                </FormHelperText>
              )}
            </FormControl>
            <Box sx={{ width: "100%" }}>
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
                style={{ width: { xs: "100%", sm: "50%" }, bgcolor: "white" }}
              >
                <MobileDatePicker
                  slotProps={{
                    textField: {
                      ...style.txtinput,
                      bgcolor: "white",
                      width: { xs: "100%", sm: "50%" },
                    },
                  }}
                  style={{ width: { xs: "100%", sm: "50%" }, bgcolor: "white" }}
                  label="Deadline"
                  name="applicationDeadline"
                  inputFormat="dd/MM/yyyy"
                  minDate={new Date()}
                  maxDate={full === "jSlot" ? "" : futureDate}
                  value={
                    (jobs.applicationDeadline === undefined
                      ? value
                      : new Date(jobs.applicationDeadline)) || new Date()
                  }
                  disabled={
                    !(full !== null) ||
                    !(companyDet?.jobSlot === true && full === "jSlot") ||
                    companyDet?.package?.subscription_package ===
                      "SuperEmployer"
                  }
                  onChange={handleChangeDate}
                  renderInput={(params) => (
                    <TextField
                      error={errors.applicationDeadline ? true : false}
                      {...params}
                      style={{ width: "100% !important" }}
                    />
                  )}
                />
              </LocalizationProvider>
              {!!errors.applicationDeadline && (
                <FormHelperText error id="accountId-error">
                  {errors.applicationDeadline}
                </FormHelperText>
              )}
            </Box>
          </Stack>
          <FormControl sx={{ ...style.txtinput, bgcolor: "white" }}>
            <InputLabel id="demo-simple-select-label">Notice Period</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={jobs && jobs?.notice}
              onChange={(e) => {
                handleChangesChild(e);
              }}
              name="notice"
              error={errors.notice ? true : false}
              helperText={errors.notice}
              label="notice period"
              sx={styles.naminput2}
            >
              {NoticePeriod.map((not, ind) => (
                <MenuItem key={ind} value={not}>
                  {not}
                </MenuItem>
              ))}
            </Select>
            {!!errors.notice && (
              <FormHelperText error id="accountId-error">
                {errors.notice}
              </FormHelperText>
            )}
          </FormControl>
          <FormControl sx={{ ...style.txtinput, bgcolor: "white" }}>
            <InputLabel id="demo-simple-select-label">Job Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={jobs && jobs.jobType}
              onChange={(e) => {
                handleChangesChild(e);
              }}
              name="jobType"
              error={errors.jobType ? true : false}
              helperText={errors.jobType}
              label="Job Type"
              sx={styles.naminput2}
            >
              <MenuItem value={"Remote"}>Remote</MenuItem>
              <MenuItem value={"Onsite"}>Onsite</MenuItem>
              <MenuItem value={"Hybrid"}>Hybrid</MenuItem>
            </Select>
            {!!errors.jobType && (
              <FormHelperText error id="accountId-error">
                {errors.jobType}
              </FormHelperText>
            )}
          </FormControl>
          <FormControl sx={{ ...style.txtinput, bgcolor: "white" }}>
            <InputLabel id="demo-simple-select-label">Salary Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={jobs?.salary?.salaryType}
              name={"salaryType"}
              onChange={(e) => {
                handleChangesSalary(e);
              }}
              label="Salary Type"
              error={errors.salaryType ? true : false}
              helperText={errors.salaryType}
              sx={styles.naminput2}
            >
              <MenuItem selected value={"noprovide"}>
                Negotiable
              </MenuItem>
              <MenuItem value={"yearly"}>Yearly</MenuItem>
              <MenuItem value={"monthly"}>Monthly</MenuItem>
              <MenuItem value={"hourly"}>Hourly</MenuItem>
            </Select>
            {!!errors.salaryType && (
              <FormHelperText error id="accountId-error">
                {errors.salaryType}
              </FormHelperText>
            )}
          </FormControl>
          {jobs?.salary?.salaryType === "noprovide" ||
          jobs?.salary?.salaryType === undefined ? (
            ""
          ) : (
            <Stack direction="row" spacing={2}>
              <FormControl
                sx={{
                  ...style.txtinput,
                  bgcolor: "white",
                  width: "50%",
                }}
              >
                <InputLabel id="demo-simple-select-label">
                  Salary Currency
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="salaryCrrancy"
                  label="Salary Currency"
                  value={jobs.salary && jobs.salary.salaryCrrancy}
                  onChange={(e) => {
                    handleChangesSalary(e);
                  }}
                  error={errors.salaryCrrancy ? true : false}
                  helperText={errors.salaryCrrancy}
                >
                  {CURRENCY.map((cur, ind) => (
                    <MenuItem key={ind} value={cur.symbol}>
                      {cur.country}-{cur.symbol}
                    </MenuItem>
                  ))}
                </Select>
                {!!errors.salaryCrrancy && (
                  <FormHelperText error id="accountId-error">
                    {errors.salaryCrrancy}
                  </FormHelperText>
                )}
              </FormControl>
              <TextField
                id="outlined-basic"
                label="Min Salary"
                value={jobs.salary && jobs.salary.minSalary}
                onChange={(e) => {
                  handleChangesSalary(e);
                }}
                type="number"
                name="minSalary"
                error={errors.minSalary ? true : false}
                helperText={errors.minSalary}
                placeholder="Enter Min Salary"
                variant="outlined"
                sx={{
                  ...style.txtinput,
                  bgcolor: "white",
                  width: "25%",
                }}
              />
              <TextField
                id="outlined-basic"
                value={jobs.salary && jobs.salary.maxSalary}
                onChange={(e) => {
                  handleChangesSalary(e);
                }}
                label="Max Salary"
                error={errors.maxSalary ? true : false}
                helperText={errors.maxSalary}
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
          )}
          {(companyDet?.jobSlotGold === true && full === "jSlot") ||
          companyDet?.package?.subscription_package === "SuperEmployer"  ? (
            <Box>
              <FormGroup>
                <FormControlLabel
                  sx={{ justifyContent: "flex-end", ml: 0 }}
                  control={
                    <Switch
                      checked={feature}
                      onChange={handleFeatureType}
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
          ) : (
            ""
          )}
          <Box>
            <FormGroup>
              <FormControlLabel
                sx={{ justifyContent: "flex-end", ml: 0 }}
                control={
                  <Switch
                    checked={immediate}
                    onChange={handleImmediateType}
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
      </Box>
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

export default EssentialInformation;
