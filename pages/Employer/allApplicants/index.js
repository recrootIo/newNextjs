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
  Chip,
  Menu,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  Pagination,
  Radio,
  RadioGroup,
  FormLabel,
  Typography,
  Dialog,
  InputBase,
  Tabs,
  Tab,
  Autocomplete,
  CircularProgress,
  styled,
  ListSubheader,
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import WorkIcon from "@mui/icons-material/Work";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import {
  DesktopDateTimePicker,
  LocalizationProvider,
  MobileDatePicker,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { BOLD } from "@/theme/fonts";
import EmployerNavbar from "@/components/EmployerNavbar/EmployerNavbar";
import Image from "next/image";

import styles from "./allApplicants.module.css";
import Employer from "../../../components/pages/index";
import { useDispatch, useSelector } from "react-redux";
import {
  DENOMINATIONS,
  NoticePeriod,
  USER_EXPERIENCES,
  WORK_PREFERENCE,
} from "@/utils/constants";
import { useEffect } from "react";
import {
  ApplicantsFilters,
  candidatesForrequest,
  candidatesIdreq,
  getCompanyDetails,
  getMachingAppl,
  getMatchApplicantsFilter,
  getRecommended,
  jobCandidatesRequest,
  matchShow,
  updateApplicantFilters,
} from "@/redux/slices/companyslice";

import { useRef } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import companyservice from "@/redux/services/company.service";
import LoadingSearchCards from "@/components/JobListings/LoadingSearchCards";
import SearchIcon from "@mui/icons-material/Search";
import Header from "@/components/Header";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import {
  a11yProps,
  BpCheckbox,
  BpRadio,
  StyledFormLabel,
} from "@/components/JobListings/SearchSection";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
} from "react-google-places-autocomplete";
import { v4 as uuidv4 } from "uuid";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ReplayIcon from "@mui/icons-material/Replay";
import { NEUTRAL } from "@/theme/colors";
import {
  COMMON_CURRENCIES,
  INDIAN_CURRENCY,
  OTHER_CURRENCIES,
} from "@/utils/currency";
import { currencyConvert } from "@/utils/HelperFunctions";
import RefreshIcon from "@mui/icons-material/Refresh";
import CandiDBCard from "@/components/Employers/CandiDBcard/CandiDBCard";
import AllApplicantsCard from "@/components/Employers/AllApplicantsCard/AllApplicantsCard";
const Tour = dynamic(() => import("reactour"), { ssr: false });

export const TabPanel = (props) => {
  const { children, value, index, title, clearAction, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      // style={{ padding: "0 15px" }}
    >
      <Stack
        direction={"row"}
        sx={{
          backgroundColor: "#F2F8FD",
          padding: "15px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <CustomTypography sx={{ fontWeight: "700" }}>{title}</CustomTypography>
        <IconButton onClick={() => clearAction()}>
          <HighlightOffIcon color="primary" fontSize="small" />
        </IconButton>
      </Stack>
      <Box sx={{ padding: "15px 20px" }}> {children}</Box>
    </div>
  );
};

export const StyledTab = styled(Tab)`
  && {
    justify-content: flex-start !important;
    text-align: left !important;
    -webkit-justify-content: flex-start !important;
    text-transform: capitalize;
  }
`;

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    width: "90%",
  },
}));

const AllApplicants = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { page, jid, title } = router.query;
  const comp = useSelector((state) => state?.company?.companyDetl);
  const {
    allApplicants = [],
    allApplicantsCount = 0,
    recommendedApplicants = [],
    recommendedApplicantsCount = 0,
  } = useSelector((state) => state.company.matchingAppl);
  const filtaration = useSelector(
    (state) => state.company.allApplicantsFilters
  );

  const { loadingRecommended, loadingAllApplicants } = useSelector(
    (state) => state.company
  );
  const loadingCand = useSelector((state) => state.company.loading);
  const reqJob = useSelector((data) => data.company.taskbyjob);
  const data = useSelector((data) => data.company.search);
  const newCompanyservice = new companyservice();

  var myHeaders = new Headers();
  myHeaders.append("apikey", "pTpYIFKqYkVkRSBgriOF1KTp4kNrHRpe");
  const requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  const {
    //   details,
    //   currentPage,
    //   totalPage,
    //   count,
    loading,
    //   unview,
    //   rejectcount,
    //   shortCount,
    //   selectedId,
    //   rejectedEmail,
    //   selectedEmail,
  } = useSelector((state) => state.apply);

  const [isTourOpen, setTourOpen] = React.useState(false);
  const [role, setRole] = useState({ skill: "", id: uuidv4() });
  const [matchingDetails, setMatchingDetails] = React.useState({});
  const [matchingSkill, setMatchingSkills] = React.useState([]);
  const [openFilter, setOpenFilter] = React.useState(false);
  const [value, setValue] = useState(0);
  const [open, setOpen] = React.useState(false);
  const [arrskills, setArrskills] = useState([]);
  const [timer, setTimer] = useState(null);
  const [candidatesType, setCandidatesType] = useState("allApplicants");

  const [names, setNames] = useState(filtaration.workPrefence);
  const [selectedExperience, setSelectedExperience] = useState(
    filtaration?.exper
  );
  const [selectedNotice, setSelectedNotice] = useState(filtaration.notice);
  const [address, setAddress] = React.useState(null);
  const [inputPersonalDetailsCountry, setInputPersonalDetailsCountry] =
    useState({
      country: filtaration.location.country,
      state: filtaration.location.state,
      city: filtaration.location.city,
    });
  const [currency, setCurrency] = React.useState();
  const [salary, setSalary] = React.useState({
    denomination: filtaration.denomination,
    salary: filtaration.salary,
  });
  const [name, setName] = useState(filtaration.name);
  const [tempSkills, setTempSkill] = useState(filtaration.skillSet);
  const [status, setStatus] = useState(filtaration.status);
  const [load, setLoad] = React.useState(false);
  const [desiredSkills, setDesiredSkills] = React.useState([]);

  /**
   * get matching details
   */
  const getMatchingCriteria = async () => {
    await newCompanyservice
      .getMatchingCriterias(jid)
      .then((res) => {
        setMatchingDetails(() => res.data?.candidates[0]);
      })
      .catch((res) => console.log(res, "getMatchingCriteria"));

    await newCompanyservice
      .getMatchingSkills(jid)
      .then((res) => {
        setDesiredSkills(() => res.data.desiredskills);
        setMatchingSkills(() => res.data.skills);
      })
      .catch((res) => console.log(res, "getMatchingSkills"));
  };

  useEffect(() => {
    if (jid) {
      addAllToFilter(status);
      getMatchingCriteria();
      const data = { status, name };
      dispatch(getRecommended({ id: jid, page, data }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jid, page, status]);

  useEffect(() => {
    if (jid) {
      dispatch(jobCandidatesRequest(jid));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jid]);

  useEffect(() => {
    if (reqJob?.stage === "completed") {
      const value = {
        id: reqJob?.Candidates,
        page: 1,
        filter: filtaration,
      };
      dispatch(candidatesIdreq(reqJob?.Candidates));
      dispatch(candidatesForrequest(value));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reqJob]);

  const handleChange = (e, value) => {
    if (candidatesType === "candiDB") {
      const values = {
        id: reqJob?.Candidates,
        page: value,
        filter: filtaration,
        name: name,
      };

      const { ...otherParams } = router.query;
      const updatedQueryParams = {
        ...otherParams,
        page: value,
      };

      router.push(
        {
          pathname: router.pathname,
          query: updatedQueryParams,
        },
        undefined,
        { shallow: true } // This option prevents the page from rerendering
      );
      if (reqJob?.stage === "completed") {
        dispatch(candidatesIdreq(reqJob?.Candidates));
        dispatch(candidatesForrequest(values));
      }
      return;
    } else {
      const { ...otherParams } = router.query;

      const updatedQueryParams = {
        ...otherParams,
        page: value,
        jid,
        title,
      };

      router.push(
        {
          pathname: router.pathname,
          query: updatedQueryParams,
        },
        undefined,
        { shallow: true } // This option prevents the page from rerendering
      );
      // } else {
      //   addAllToFilter(status);
      //   const data = { status, name };
      //   dispatch(getRecommended({ id: jid, page, data }));
      // }
    }

    scrollToTop();
    scrollToDiv();
  };

  const divRef = useRef(null);
  const scrollToTop = () => {
    if (divRef.current) {
      divRef.current.scrollTop = 0;
    }
  };

  const updateValue = async () => {
    const companyService = new companyservice();
    await companyService.updateTourValue({ allApplicant: false });
  };

  const closeTour = () => {
    setTourOpen(false);
    updateValue();
  };

  const tourConfig = [
    {
      selector: ".filtersJob",
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
            Here, you can sort applicants by either the jobs you posted on
            Recroot or their current status
          </CustomTypography>
          <Button onClick={() => closeTour()}>SKIP</Button>
        </Stack>
      ),
    },
    {
      selector: ".viewDetails",
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
            By clicking here, you can access more details about the applicant
            and download their resume
          </CustomTypography>
          <Button onClick={() => closeTour()}>Done</Button>
        </Stack>
      ),
    },
  ];

  useEffect(() => {
    setTourOpen(() => comp?.tours?.allApplicant);
  }, [comp?.tours?.allApplicant]);

  const scrollToDiv = () => {
    const element = document.getElementById("style-5");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleExperience = (re) => {
    const { name, checked } = re.target;
    setSelectedExperience(name);
  };

  const handleNotice = (re) => {
    const { name, checked } = re.target;
    setSelectedNotice(name);
  };

  const handleName = (re) => {
    const { name, checked } = re.target;
    let newJobs = [...names];

    if (checked) {
      newJobs.push(name);
    } else {
      newJobs = names.filter((arr) => name != arr);
    }

    setNames(() => [...newJobs]);
  };

  const handleSelect = async (selected) => {
    const results = await geocodeByAddress(selected?.label);
    setInputPersonalDetailsCountry({
      country: results[0].address_components.find((c) =>
        c.types.includes("country")
      )?.long_name,
      state: results[0].address_components.find((c) =>
        c.types.includes("administrative_area_level_1")
      )?.long_name,
      city: results[0].address_components.find((c) =>
        c.types.includes("locality")
      )?.long_name,
    });
  };

  const clearAddress = () => {
    setAddress("");
    setInputPersonalDetailsCountry(() => ({
      country: null,
      state: null,
      city: null,
    }));
  };

  const selectCurrency = (e) => {
    setCurrency(e.target.value);
  };

  const skillApi = (skil) => {
    fetch(`https://api.apilayer.com/skills?q=${skil}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setArrskills(result);
      })
      .catch((error) => console.warn("error", error));
  };

  const inputChanged = (e) => {
    if (e.target.value === "") {
      setArrskills([]);
      setLoad(false);
      return;
    }
    setLoad(true);
    clearTimeout(timer);
    const newTimer = setTimeout(() => {
      if (e.target.value === "") {
        setArrskills([]);
        return;
      }
      skillApi(e.target.value);
    }, 500);

    setTimer(newTimer);
  };

  const addSkill = () => {
    setTempSkill((state) => [...state, role]);
    setRole({ skill: "", id: uuidv4() });
  };

  const handleDelete = (e) => {
    let newTemps = tempSkills.filter((a) => a.skill !== e);
    setTempSkill(() => [...newTemps]);
  };

  const addAllToFilter = (newStatus = "", customPage = null) => {
    const allApplicantsFilters = {
      workPrefence: names,
      skillSet: tempSkills,
      location: {
        city: inputPersonalDetailsCountry.city,
        country: inputPersonalDetailsCountry.country,
        state: inputPersonalDetailsCountry.state,
      },
      notice: selectedNotice,
      salaryCurrency: currency,
      denomination: salary.denomination,
      salary: salary.salary,
      exper: selectedExperience,
      status: newStatus,
      name: name,
    };

    dispatch(ApplicantsFilters({ ...allApplicantsFilters }));

    dispatch(
      getMatchApplicantsFilter({
        jid,
        page: customPage || page,
        data: allApplicantsFilters,
      })
    );
  };

  const addAllToFilterCanddb = (newStatus = "", customPage = null) => {
    const allApplicantsFilters = {
      workPrefence: names,
      skillSet: tempSkills,
      location: {
        city: inputPersonalDetailsCountry.city,
        country: inputPersonalDetailsCountry.country,
        state: inputPersonalDetailsCountry.state,
      },
      notice: selectedNotice,
      salaryCurrency: currency,
      denomination: salary.denomination,
      salary: salary.salary,
      exper: selectedExperience,
      status: newStatus,
      name: name,
    };

    dispatch(ApplicantsFilters({ ...allApplicantsFilters }));

    const value = {
      id: reqJob?.Candidates,
      page: 1,
      filter: allApplicantsFilters,
    };
    const { ...otherParams } = router.query;
    const updatedQueryParams = {
      ...otherParams,
      page: 1,
    };

    router.push(
      {
        pathname: router.pathname,
        query: updatedQueryParams,
      },
      undefined,
      { shallow: true } // This option prevents the page from rerendering
    );
    if (reqJob?.stage === "completed") {
      dispatch(candidatesIdreq(reqJob?.Candidates));
      dispatch(candidatesForrequest(value));
    }
  };

  const getCandidateSalary = (candidate) => {
    const salaryDetails = `${currencyConvert(
      candidate.salary,
      candidate?.salaryCurrency
    )} ${candidate?.denomination}`;

    return salaryDetails;
  };

  const clearAll = () => {
    const allApplicantsFilters = {
      workPrefence: [],
      skillSet: [],
      location: {
        city: "",
        country: "",
        state: "",
      },
      notice: "",
      salaryCurrency: "",
      denomination: "",
      salary: "",
      exper: "",
      name: "",
    };
    dispatch(ApplicantsFilters({ ...allApplicantsFilters }));
    if (candidatesType === "candiDB") {
      const { ...otherParams } = router.query;
      const updatedQueryParams = {
        ...otherParams,
        page: 1,
      };

      router.push(
        {
          pathname: router.pathname,
          query: updatedQueryParams,
        },
        undefined,
        { shallow: true } // This option prevents the page from rerendering
      );
      const value = {
        id: reqJob?.Candidates,
        page: 1,
        filter: allApplicantsFilters,
      };
      if (reqJob?.stage === "completed") {
        dispatch(candidatesIdreq(reqJob?.Candidates));
        dispatch(candidatesForrequest(value));
      }
    }
    dispatch(getRecommended({ id: jid, page: 1 }));
    dispatch(
      getMatchApplicantsFilter({ jid, page: 1, data: allApplicantsFilters })
    );
    setInputPersonalDetailsCountry(() => ({
      city: "",
      state: "",
      country: "",
    }));
    setSelectedNotice("");
    setTempSkill([]);
    setNames([]);
    setSelectedNotice("");
    setSelectedExperience("");
    setAddress("");
    setCurrency("");
    setSalary({
      denomination: filtaration.denomination,
      salary: filtaration.salary,
    });
    setName("");
    setStatus("");
  };

  const addFilterStatus = (e) => {
    setStatus(() => e.target.value);
    // addAllToFilter(e.target.value);
    // handleChange(null, 1);
  };

  const clearFields = (field, item) => {
    let newFilters = { ...filtaration };
    if (field === "address") {
      newFilters.location = { city: "", country: "", state: "" };
      setAddress("");
      setInputPersonalDetailsCountry({
        country: "",
        state: "",
        city: "",
      });
    }
    if (field === "notice") {
      newFilters.notice = "";
      setSelectedNotice("");
    }
    if (field === "exper") {
      newFilters.exper = "";
      setSelectedExperience("");
    }

    if (field === "salary") {
      newFilters.salary = "";
      newFilters.salaryCurrency = "";
      newFilters.denomination = "";
      setSalary({
        salary: "",
        denomination: "",
      });
      setCurrency("");
    }

    if (field === "skillSet" || field === "workPrefence") {
      let filteredArray = [];
      if (field === "skillSet") {
        setTempSkill([]);
        filteredArray = newFilters.skillSet.filter((a) => item !== a.skill);
        setTempSkill(filteredArray);
      } else {
        setNames([]);
        filteredArray = newFilters.workPrefence.filter((a) => item !== a);
        setNames(filteredArray);
      }

      newFilters[field] = filteredArray;
    } else {
      newFilters[field] = "";
    }

    // setSelectedNotice;
    if (field === "notice") {
      setSelectedNotice("");
    }
    if (field === "exper") {
      setSelectedExperience("");
    }

    if (candidatesType === "candiDB") {
      dispatch(ApplicantsFilters({ ...newFilters }));
      const value = {
        id: reqJob?.Candidates,
        page: 1,
        filter: newFilters,
      };
      const { ...otherParams } = router.query;
      const updatedQueryParams = {
        ...otherParams,
        page: 1,
      };

      router.push(
        {
          pathname: router.pathname,
          query: updatedQueryParams,
        },
        undefined,
        { shallow: true } // This option prevents the page from rerendering
      );
      if (reqJob?.stage === "completed") {
        dispatch(candidatesIdreq(reqJob?.Candidates));
        dispatch(candidatesForrequest(value));
      }
      return;
    }

    dispatch(ApplicantsFilters({ ...newFilters }));
    dispatch(getMatchApplicantsFilter({ jid, page: 1, data: newFilters }));
    // addAllToFilter(status);
  };

  const changeApplicantType = (type) => {
    handleChange(status, 1);
    setCandidatesType(type);
  };

  const pages =
    candidatesType === "allApplicants"
      ? Math.ceil(allApplicantsCount / 10)
      : candidatesType === "candiDB"
      ? data?.totalPages
      : Math.ceil(recommendedApplicantsCount / 10);
  const getPagesCount = pages < 0 ? 1 : pages;
  const accentColor = "#5cb7b7";
  const loadingSection =
    candidatesType === "allApplicants"
      ? loadingAllApplicants
      : loadingRecommended;
  const loadingCount = ["1", "2", "3", "4", "5", "6", "0", "2", "3", "3", "3"];

  const displayData =
    candidatesType === "allApplicants"
      ? allApplicants
      : candidatesType === "candiDB"
      ? data?.candidates
      : recommendedApplicants;

  const handleFilter = () => {
    if (candidatesType === "candiDB") {
      addAllToFilterCanddb();
      setOpenFilter(!openFilter);
    } else {
      addAllToFilter();
      setOpenFilter(!openFilter);
    }
  };

  return (
    <>
      <Header title={"Applicants"} />
      <Employer title={title}>
        <Card
          variant="outlined"
          sx={{
            width: "100%",
            backgroundColor: "#F2F8FD",
            mt: "40px",
            // p: "25px 25px 80px 25px",
            p: { xs: "0px", md: "25px 25px 80px 25px" },
          }}
        >
          <CardContent>
            <Box>
              <Stack direction={"row"} sx={{ gap: "10px" }}>
                <Card
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    textAlign: "center",
                    backgroundImage: 'url("/activejob-bg.svg")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    borderRadius: "15px",
                    cursor: "pointer",
                    border: "0",
                    boxShadow:
                      candidatesType === "allApplicants"
                        ? "0 0px 8px rgba(0,0,0,0.30), 0 6px 7px rgba(0,0,0,0.22)"
                        : "",
                  }}
                  onClick={() => {
                    changeApplicantType("allApplicants");
                  }}
                  variant="outlined"
                >
                  <CardContent>
                    <CustomTypography
                      sx={{
                        color: "white",
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      All Applicants
                    </CustomTypography>
                    <CustomTypography
                      sx={{
                        color: "white",
                        fontSize: "33px",
                        fontWeight: "600",
                      }}
                    >
                      {allApplicantsCount}
                    </CustomTypography>
                  </CardContent>
                </Card>

                <Card
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    textAlign: "center",
                    backgroundImage: 'url("/activejob-bg.svg")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    borderRadius: "15px",
                    cursor: "pointer",
                    border: "0",
                    boxShadow:
                      candidatesType === "recommendedApplicants"
                        ? "0 0px 8px rgba(0,0,0,0.30), 0 6px 7px rgba(0,0,0,0.22)"
                        : "",
                  }}
                  variant="outlined"
                  onClick={() => {
                    changeApplicantType("recommendedApplicants");
                  }}
                >
                  <CardContent>
                    <CustomTypography
                      sx={{
                        color: "white",
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      Recommended Applicants
                    </CustomTypography>
                    <CustomTypography
                      sx={{
                        color: "white",
                        fontSize: "33px",
                        fontWeight: "600",
                      }}
                    >
                      {recommendedApplicantsCount}
                    </CustomTypography>
                  </CardContent>
                </Card>
                <Card
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    textAlign: "center",
                    backgroundImage: 'url("/activejob-bg.svg")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    borderRadius: "15px",
                    cursor: "pointer",
                    border: "0",
                    boxShadow:
                      candidatesType === "candiDB"
                        ? "0 0px 8px rgba(0,0,0,0.30), 0 6px 7px rgba(0,0,0,0.22)"
                        : "",
                  }}
                  variant="outlined"
                  onClick={() => {
                    changeApplicantType("candiDB");
                  }}
                >
                  <CardContent>
                    <CustomTypography
                      sx={{
                        color: "white",
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      Candidate Database
                    </CustomTypography>
                    <CustomTypography
                      sx={{
                        color: "white",
                        fontSize: "33px",
                        fontWeight: "600",
                      }}
                    >
                      {data?.totalCounts}
                    </CustomTypography>
                  </CardContent>
                </Card>
              </Stack>

              <Divider
                id="style-5"
                sx={{ mt: "30px", mb: "30px", borderColor: "#D4F0FC" }}
              />

              <Stack
                direction={"row"}
                sx={{
                  justifyContent:
                    candidatesType === "candiDB" ? "center" : "space-between",
                  alignItems: "flex-end",
                  gap: "10px",
                }}
              >
                <Box className={styles.searchField}>
                  <InputBase
                    variant="outlined"
                    sx={{ ml: 1, flex: 1, height: "54px !important" }}
                    placeholder="Search Applicant Name"
                    inputProps={{ "aria-label": "Location" }}
                    onChange={(e) => {
                      // dispatch(updateApplicantFilters("name", e.target.value));
                      setName(e.target.value);
                    }}
                    value={name}
                  />

                  <Button
                    variant="outlined"
                    sx={{
                      backgroundColor: "#00339b !important",
                      width: "80px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    onClick={() => handleChange(null, 1)}
                  >
                    <SearchIcon
                      className="searchIcon"
                      sx={{ cursor: "pointer", color: "white" }}
                    />
                  </Button>
                </Box>
                {candidatesType === "candiDB" ? (
                  ""
                ) : (
                  <FormControl
                    sx={{ width: "40% !important" }}
                    variant="outlined"
                  >
                    <InputLabel id="demo-simple-select-label">
                      Filter
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={status}
                      label="Status"
                      sx={{ backgroundColor: "white" }}
                      onChange={addFilterStatus}
                    >
                      <MenuItem value={""}>All</MenuItem>
                      <MenuItem value={"shortlist"}>Shortlisted</MenuItem>
                      <MenuItem value={"rejected"}>Rejected</MenuItem>
                      <MenuItem value={"viewed"}>Viewed</MenuItem>
                      <MenuItem value={"unview"}>Unviewed</MenuItem>
                    </Select>
                  </FormControl>
                )}

                {candidatesType === "allApplicants" ||
                candidatesType === "candiDB" ? (
                  <Stack
                    direction={"row"}
                    sx={{ gap: "10px", justifyContent: "center" }}
                  >
                    <Button
                      variant="outlined"
                      sx={{ height: "56px" }}
                      onClick={() => setOpenFilter(!openFilter)}
                    >
                      <FilterAltIcon fontSize="large" />
                    </Button>
                    <Button
                      sx={{ height: "56px" }}
                      variant="outlined"
                      onClick={() => clearAll()}
                    >
                      <RefreshIcon fontSize="large" />
                    </Button>
                  </Stack>
                ) : (
                  ""
                )}
              </Stack>

              {candidatesType === "allApplicants" ||
              candidatesType === "candiDB" ? (
                <Stack
                  direction={"row"}
                  sx={{ mt: "10px", gap: "10px", flexWrap: "wrap" }}
                >
                  {filtaration.exper && (
                    <Chip
                      label={filtaration.exper}
                      variant="outlined"
                      onDelete={() => clearFields("exper")}
                    />
                  )}

                  {filtaration.notice && (
                    <Chip
                      label={filtaration.notice}
                      variant="outlined"
                      // onClick={handleClick}
                      onDelete={() => clearFields("notice")}
                    />
                  )}

                  {filtaration.location.country &&
                    filtaration.location.city &&
                    filtaration.location.state && (
                      <Chip
                        label={`${filtaration.location.city}, ${filtaration.location.state},  ${filtaration.location.country}`}
                        variant="outlined"
                        // onClick={handleClick}
                        onDelete={() => clearFields("address")}
                      />
                    )}

                  {filtaration.salary &&
                    filtaration.salaryCurrency &&
                    filtaration.denomination && (
                      <Chip
                        label={`${getCandidateSalary(filtaration)}`}
                        variant="outlined"
                        // onClick={handleClick}
                        onDelete={() => clearFields("salary")}
                      />
                    )}

                  {filtaration.workPrefence.map((w, index) => (
                    <Chip
                      key={index}
                      label={w}
                      variant="outlined"
                      onDelete={() => clearFields("workPrefence", w)}
                    />
                  ))}

                  {filtaration.skillSet.map((w, index) => (
                    <Chip
                      key={index}
                      label={w?.skill}
                      variant="outlined"
                      onDelete={() => clearFields("skillSet", w?.skill)}
                    />
                  ))}
                </Stack>
              ) : (
                ""
              )}

              <Box
                ref={divRef}
                className={styles.scrollbar}
                id="style-5"
                sx={{ mt: "20px", mb: "30px", width: "100%", pr: "10px" }}
              >
                <Stack spacing={3}>
                  {openFilter &&
                    (candidatesType === "allApplicants" ||
                    candidatesType === "candiDB" ? (
                      <Card variant="outlined">
                        <CardContent>
                          <Grid container>
                            <Grid item md={4}>
                              <Tabs
                                orientation="vertical"
                                variant="scrollable"
                                value={value}
                                onChange={handleTabChange}
                                aria-label="Vertical tabs example"
                                sx={{ borderRight: 1, borderColor: "divider" }}
                              >
                                <StyledTab
                                  label="Experience"
                                  {...a11yProps(0)}
                                  iconPosition="start"
                                />
                                <StyledTab
                                  label="Location"
                                  {...a11yProps(1)}
                                  iconPosition="start"
                                />
                                <StyledTab
                                  label="Work Preference"
                                  {...a11yProps(2)}
                                  iconPosition="start"
                                />
                                <StyledTab
                                  label="Salary"
                                  {...a11yProps(3)}
                                  iconPosition="start"
                                />
                                <StyledTab
                                  label="Skills"
                                  {...a11yProps(4)}
                                  iconPosition="start"
                                />
                                <StyledTab
                                  label="Notice Period"
                                  {...a11yProps(5)}
                                  iconPosition="start"
                                />
                              </Tabs>
                            </Grid>
                            <Grid
                              item
                              md={8}
                              sx={{ maxHeight: "300px", overflow: "auto" }}
                            >
                              <TabPanel
                                value={value}
                                index={0}
                                sx={{ padding: "10px" }}
                                title={"Experience"}
                                clearAction={() => setSelectedExperience("")}
                              >
                                <FormGroup>
                                  <FormControl>
                                    <RadioGroup
                                      onChange={handleExperience}
                                      value={selectedExperience}
                                    >
                                      {USER_EXPERIENCES.map((com, index) => (
                                        <FormControlLabel
                                          key={index}
                                          control={<BpRadio size="small" />}
                                          label={com}
                                          value={com}
                                          name={com}
                                        />
                                      ))}
                                    </RadioGroup>
                                  </FormControl>
                                </FormGroup>
                              </TabPanel>
                              <TabPanel
                                value={value}
                                index={1}
                                title={"Location"}
                                clearAction={() => clearAddress()}
                              >
                                <Stack sx={{ mt: "10px" }}>
                                  <GooglePlacesAutocomplete
                                    style={{ width: "100%", marginTop: "10px" }}
                                    apiKey="AIzaSyCLT3fP1-59v2VUVoifXXJX-MQ0HA55Jp4"
                                    selectProps={{
                                      isClearable: true,
                                      placeholder: "Enter Location",
                                      value: address,
                                      onChange: (val) => {
                                        setAddress(val);
                                        handleSelect(val);
                                      },
                                      onSelect: { handleSelect },
                                      styles: {
                                        input: (provided) => ({
                                          ...provided,
                                          height: "2.8em",
                                          paddingTop: "10px",
                                        }),
                                        option: (provided) => ({
                                          ...provided,
                                          height: "2.8em",
                                        }),
                                        singleValue: (provided) => ({
                                          ...provided,
                                          height: "2.8em",
                                          paddingTop: "10px",
                                        }),
                                      },
                                    }}
                                  />
                                  {(inputPersonalDetailsCountry?.country ||
                                    inputPersonalDetailsCountry?.state ||
                                    inputPersonalDetailsCountry?.city) && (
                                    <Stack
                                      direction={{ md: "row", xs: "column" }}
                                      spacing={2}
                                      marginTop={2}
                                      sx={{
                                        alignItems: "flex-start",
                                        width: { xs: "100%" },
                                      }}
                                    >
                                      <FormControl fullWidth>
                                        <CustomTypography fontSize="10px">
                                          Country
                                        </CustomTypography>
                                        <TextField
                                          autoComplete="given-name"
                                          name="country"
                                          fullWidth
                                          id="about"
                                          placeholder="Country"
                                          onChange={(e) =>
                                            setInputPersonalDetailsCountry(
                                              (state) => ({
                                                ...state,
                                                country: e.target.value,
                                              })
                                            )
                                          }
                                          value={
                                            inputPersonalDetailsCountry?.country
                                          }
                                          sx={{
                                            backgroundColor: NEUTRAL,
                                            width: { xs: "100%" },
                                          }}
                                        />
                                      </FormControl>
                                      <FormControl fullWidth>
                                        <CustomTypography fontSize="10px">
                                          State
                                        </CustomTypography>
                                        <TextField
                                          autoComplete="given-name"
                                          name="state"
                                          fullWidth
                                          id="about"
                                          placeholder="State"
                                          sx={{
                                            backgroundColor: NEUTRAL,
                                            width: { xs: "100%" },
                                          }}
                                          onChange={(e) =>
                                            setInputPersonalDetailsCountry(
                                              (state) => ({
                                                ...state,
                                                state: e.target.value,
                                              })
                                            )
                                          }
                                          value={
                                            inputPersonalDetailsCountry?.state
                                          }
                                        />
                                      </FormControl>
                                      <FormControl fullWidth>
                                        <CustomTypography fontSize="10px">
                                          City
                                        </CustomTypography>
                                        <TextField
                                          autoComplete="given-name"
                                          name="city"
                                          fullWidth
                                          id="about"
                                          placeholder="City"
                                          sx={{
                                            backgroundColor: NEUTRAL,
                                            width: { xs: "100%" },
                                          }}
                                          onChange={(e) =>
                                            setInputPersonalDetailsCountry(
                                              (state) => ({
                                                ...state,
                                                city: e.target.value,
                                              })
                                            )
                                          }
                                          value={
                                            inputPersonalDetailsCountry?.city
                                          }
                                        />
                                      </FormControl>
                                    </Stack>
                                  )}
                                </Stack>
                              </TabPanel>
                              <TabPanel
                                value={value}
                                index={2}
                                title={"Work Preference"}
                                clearAction={() => setNames([])}
                              >
                                <Box
                                  sx={{ width: { sm: "300px", xs: "100px" } }}
                                >
                                  <FormGroup>
                                    {WORK_PREFERENCE.map((reference, index) => (
                                      <StyledFormLabel
                                        key={index}
                                        control={
                                          <BpCheckbox
                                            size="small"
                                            name={reference}
                                            onChange={(e) => handleName(e)}
                                            checked={names.includes(reference)}
                                          />
                                        }
                                        label={reference}
                                      />
                                    ))}
                                  </FormGroup>
                                </Box>
                              </TabPanel>
                              <TabPanel
                                value={value}
                                index={3}
                                title={"Salary"}
                                clearAction={() => {
                                  setCurrency("");
                                  setSalary({
                                    salary: "",
                                    denomination: "",
                                  });
                                }}
                              >
                                {/* Currency of your Salary */}

                                <FormControl variant="outlined" fullWidth>
                                  <InputLabel id="demo-simple-select-label">
                                    Salary Currency
                                  </InputLabel>
                                  <Select
                                    defaultValue=""
                                    id="grouped-select"
                                    // label="Currency of your Salary"
                                    onChange={selectCurrency}
                                    sx={{
                                      backgroundColor: NEUTRAL,
                                      width: "100%",
                                    }}
                                    value={currency}
                                  >
                                    <ListSubheader>Common</ListSubheader>
                                    {COMMON_CURRENCIES.map((o, id) => (
                                      <MenuItem value={o.country} key={id}>
                                        {o.country} {o.symbol}
                                      </MenuItem>
                                    ))}
                                    <ListSubheader>Other</ListSubheader>
                                    {OTHER_CURRENCIES.map((o, id) => (
                                      <MenuItem value={o.country} key={id}>
                                        {o.country} {o.symbol}
                                      </MenuItem>
                                    ))}
                                  </Select>
                                </FormControl>

                                <Stack
                                  direction={"row"}
                                  sx={{ alignItems: "center", mt: "10px" }}
                                >
                                  <TextField
                                    id="outlined-number"
                                    label="Expected Annual Salary"
                                    type="number"
                                    InputLabelProps={{
                                      shrink: true,
                                    }}
                                    value={salary.salary}
                                    onChange={(e) =>
                                      setSalary((state) => ({
                                        ...state,
                                        salary: e.target.value,
                                      }))
                                    }
                                    sx={{
                                      width: { xs: "50%", md: "80%" },
                                      mr: "5px",
                                    }}
                                  />

                                  <FormControl
                                    sx={{ width: { xs: "50%", md: "20%" } }}
                                  >
                                    <InputLabel id="demo-simple-select-required-label">
                                      Denomination
                                    </InputLabel>
                                    <Select
                                      labelId="demo-simple-select-required-label"
                                      id="demo-simple-select-required"
                                      value={salary.denomination}
                                      label="Denomination *"
                                      onChange={(e, a) => {
                                        setSalary((state) => ({
                                          ...state,
                                          denomination: a.props.value,
                                        }));
                                      }}
                                    >
                                      {DENOMINATIONS.map((data, ind) => (
                                        <MenuItem key={ind} value={data}>
                                          {data}
                                        </MenuItem>
                                      ))}
                                    </Select>
                                  </FormControl>
                                </Stack>
                              </TabPanel>
                              <TabPanel
                                value={value}
                                index={4}
                                title={"Skills"}
                              >
                                <Stack
                                  direction={"row"}
                                  sx={{ gap: "10px", mt: "10px" }}
                                >
                                  <Autocomplete
                                    freeSolo
                                    id="free-solo-2-demo"
                                    disableClearable={false}
                                    name="skills"
                                    sx={{
                                      bgcolor: "white",
                                      width: { xs: "95%", md: "80%" },
                                    }}
                                    value={role.skill}
                                    onBlurCapture={(e) =>
                                      setRole({
                                        skill: e.target.value,
                                        id: uuidv4(),
                                      })
                                    }
                                    open={open}
                                    onOpen={() => {
                                      setOpen(true);
                                    }}
                                    onClose={() => {
                                      setOpen(false);
                                    }}
                                    options={arrskills.map((option) => option)}
                                    loading={loading}
                                    renderInput={(params) => (
                                      <TextField
                                        {...params}
                                        label="Mandatory Skills"
                                        onChange={(e) => {
                                          inputChanged(e);
                                        }}
                                        name="jobRole"
                                        InputProps={{
                                          ...params.InputProps,
                                          type: "search",
                                          endAdornment: (
                                            <React.Fragment>
                                              {loading && load ? (
                                                <CircularProgress
                                                  color="inherit"
                                                  size={20}
                                                />
                                              ) : null}
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
                                      display: { xs: "none", md: "block" },
                                      whiteSpace: "nowrap",
                                    }}
                                    //sx={styles.roleblue2}
                                    onClick={() => {
                                      addSkill();
                                    }}
                                    variant="outlined"
                                  >
                                    Add
                                  </Button>
                                </Stack>

                                <Stack
                                  direction={"row"}
                                  sx={{ mt: "10px", gap: "10px" }}
                                >
                                  {tempSkills.map((s, index) => (
                                    <Chip
                                      key={index}
                                      label={s.skill}
                                      variant="outlined"
                                      // onClick={handleClick}
                                      onDelete={() => handleDelete(s.skill)}
                                    />
                                  ))}
                                </Stack>
                              </TabPanel>
                              <TabPanel
                                value={value}
                                index={5}
                                title={"Notice Period"}
                                clearAction={() => setSelectedNotice("")}
                              >
                                <FormGroup>
                                  <FormControl>
                                    <RadioGroup
                                      onChange={handleNotice}
                                      value={selectedNotice}
                                    >
                                      {NoticePeriod.map((com, index) => (
                                        <FormControlLabel
                                          key={index}
                                          control={<BpRadio size="small" />}
                                          label={com}
                                          value={com}
                                          name={com}
                                        />
                                      ))}
                                    </RadioGroup>
                                  </FormControl>
                                </FormGroup>
                              </TabPanel>
                            </Grid>
                          </Grid>

                          <Stack direction="row" spacing={2}>
                            <Button
                              variant="outlined"
                              onClick={() => setOpenFilter(!openFilter)}
                              sx={{ width: "50% !important" }}
                            >
                              Close
                            </Button>

                            <Button
                              variant="contained"
                              onClick={() => {
                                handleFilter();
                              }}
                              sx={{
                                backgroundColor: "#00339B !important",
                                width: "50% !important",
                              }}
                            >
                              Apply
                            </Button>
                          </Stack>
                        </CardContent>
                      </Card>
                    ) : (
                      ""
                    ))}

                  {candidatesType === "candiDB" ? (
                    ""
                  ) : loadingSection ? (
                    loadingCount.map((a, index) => (
                      <LoadingSearchCards key={index} />
                    ))
                  ) : displayData.length === 0 ? (
                    <Typography textAlign={"center"}>
                      No Candidates Found
                    </Typography>
                  ) : (
                    displayData.map((usr, index) => (
                      <div id={usr?._id} key={index}>
                        <AllApplicantsCard
                          key={index}
                          users={usr}
                          matchingDetails={matchingDetails}
                          matchingSkill={matchingSkill}
                          candidatesType={candidatesType}
                          desiredSkills={desiredSkills}
                          order={index}
                        />
                      </div>
                    ))
                  )}
                  {candidatesType === "candiDB" ? (
                    loadingCand ? (
                      loadingCount.map((a, index) => (
                        <LoadingSearchCards key={index} />
                      ))
                    ) : displayData.length === 0 ? (
                      <Typography textAlign={"center"}>
                        No Candidates Found
                      </Typography>
                    ) : (
                      displayData.map((usr, index) => (
                        <div id={usr?._id} key={index}>
                          <CandiDBCard
                            key={index}
                            users={usr}
                            candidatesType={candidatesType}
                            order={index}
                          />
                        </div>
                      ))
                    )
                  ) : (
                    ""
                  )}
                </Stack>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Pagination
                  count={Number(getPagesCount) || 1}
                  page={Number(page) || 1}
                  color="primary"
                  onChange={handleChange}
                  hidePrevButton
                  hideNextButton
                />
              </Box>
            </Box>
          </CardContent>
        </Card>
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
      </Employer>
    </>
  );
};

export default AllApplicants;
