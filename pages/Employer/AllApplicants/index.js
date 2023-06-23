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
import {
  CleaningServicesOutlined,
  Settings,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import styles from "./allApplicants.module.css";
import AllApplicantsCard from "@/components/Employers/AllApplicantsCard/AllApplicantsCard";
import Employer from "..";
import { useDispatch, useSelector } from "react-redux";
import { EMPLOYEE_STATUS, REJECTED, SHORT_LISTED } from "@/utils/constants";
import { useEffect } from "react";
import {
  getCompanyDetails,
  getMachingAppl,
  matchShow,
} from "@/redux/slices/companyslice";
import {
  applyJobsdet,
  applyJobsdetFilter,
  getEmailTemplapes,
  getJobsfil,
  getSinDetails,
  updateEmailTemplapes,
} from "@/redux/slices/applyJobs";
import { logout } from "@/redux/slices/auth";
import { isEmpty } from "lodash";
import { useRef } from "react";
import { useRouter } from "next/router";
import EditorToolbar, {
  modules,
  formats,
} from "@/components/EditorToolbar/EditorToolbar";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import companyservice from "@/redux/services/company.service";
const Tour = dynamic(() => import("reactour"), { ssr: false });

const shadow =
  "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px";
const AllApplicants = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [isTourOpen, setTourOpen] = React.useState(false);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const [isShown, setIsShown] = useState(true);
  // const classes = useStyles();
  const dispatch = useDispatch();
  // const { jid } = useParams();
  const { names, single } = useSelector((state) => state.apply);
  const {
    details,
    currentPage,
    totalPage,
    count,
    loading,
    unview,
    rejectcount,
    shortCount,
    selectedId,
    rejectedEmail,
    selectedEmail,
  } = useSelector((state) => state.apply);
  const [user, setUser] = useState(details);
  const [titles, setTitles] = useState([]);
  const [ids, setids] = useState([]);
  const [selectedStatus, setSelected] = useState([]);
  const match = useSelector((state) => state.company.matchingAppl);
  const loading2 = useSelector((data) => data.company.loading);
  const company = useSelector(
    (data) => data.company?.companyDetl?.basicInformation
  );
  // eslint-disable-next-line no-unused-vars
  const [filteredStatuses, setFilteredStatuses] = useState([]);
  const [rejectedTemp, setRejectedTemp] = useState({
    jobTitle: "",
    type: REJECTED,
    subject: "",
    emailBody: "",
    date: "",
    setting: "As_soon_as_reject",
    cand: "Hi",
  });
  const [selectedTemp, setSelectedTemp] = useState({
    jobTitle: "",
    type: SHORT_LISTED,
    subject: "",
    emailBody: "",
    date: "",
    setting: "Do_not_send",
    cand: "Hi",
  });
  // const filteredTitle = names.filter(
  //   (v, i, a) => a.findIndex((v2) => v2?.jobRole === v?.jobRole) === i
  //   );
  var name = [...names];
  // var output = [];

  var output = name.reduce(function (o, cur) {
    // Get the index of the key-value pair.
    var occurs = o.reduce(function (n, item, i) {
      return item.jobRole === cur.jobRole ? i : n;
    }, -1);

    // If the name is found,
    if (occurs >= 0) {
      // append the current value to its list of values.
      o[occurs]._id = [o[occurs]._id.concat(cur._id)];

      // Otherwise,
    } else {
      // add the current item to o (but make sure the value is an array).
      var obj = {
        jobRole: cur.jobRole,
        _id: [cur._id],
      };
      o = o.concat([obj]);
    }

    return o;
  }, []);

  // let mergedArray = names.reduce((accumulator, currentValue) => {
  //   let existingObject = accumulator.find(item => item.jobRole === currentValue.jobRole);

  //   if (!existingObject) {
  //     accumulator.router.push(currentValue);
  //   } else {
  //     console.log(existingObject,'exist')
  //     existingObject.jobTitle = Math.max(existingObject.jobTitle, currentValue.jobTitle);
  //     existingObject._id += `, ${currentValue._id}`;
  //   }

  //   return accumulator;
  // }, []);
  // console.log(rejectedEmail, "rejectedEmail");

  // const filteredTitle = names.filter(
  //   (v, i, a) => a.findIndex((v2) => v2?.jobRole === v?.jobRole) === i
  // );
  // const router.push = useNavigate()
  // const {router.push} = useRouter()
  const router = useRouter();
  const { jid } = router.query;
  // const jid = undefined;
  const matching = jid !== undefined;
  useEffect(() => {
    if (matching) {
      const value = {
        id: jid,
        page: 1,
      };
      dispatch(getMachingAppl(value));
      return;
    }
    dispatch(applyJobsdet(""))
      .then((res) => {
        if (res.error !== undefined) {
          res.error.message === "Request failed with status code 401" ||
          "Request failed with status code 403"
            ? dispatch(logout()).then(() => {
                router.push(
                  {
                    pathname: "/signin",
                    query: { name: "session" },
                  },
                  "/signin"
                );
              })
            : console.log("error");
        }
      })
      .catch((error) => {
        if (
          error.message === "Request failed with status code 401" ||
          "Request failed with status code 403"
        ) {
          dispatch(logout()).then(() => {
            router.push(
              {
                pathname: "/signin",
                query: { name: "session" },
              },
              "/signin"
            );
          });
        }
      });
    dispatch(getJobsfil());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, jid]);

  const type = useSelector((state) => state.company.matchType);

  const handleClear = (val) => {
    dispatch(matchShow(val));
    const value = {
      id: jid,
      page: 1,
    };
    if (cuurpage > 1) {
      dispatch(getMachingAppl(value)).then(setcuurpage(1));
    }
  };
  useEffect(() => {
    if (!matching) {
      setUser(details);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matching, details]);

  const getDetaulUser = () => {
    const defaultUser = user[0];
    const isUserAvailable = user.find((usr) => usr._id === selectedId);
    if (isUserAvailable) return isUserAvailable;

    return defaultUser;
  };

  useEffect(() => {
    dispatch(getSinDetails(getDetaulUser()));
    dispatch(getCompanyDetails());
    dispatch(getEmailTemplapes());
    if (!isEmpty(user)) dispatch(getSinDetails(getDetaulUser()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    if (single?.resumeId && single?.coverId) {
      dispatch(getSinResume(single?.resumeId));
      dispatch(getSinCover(single?.coverId));
    }
  }, [dispatch, single]);
  const strongCount = isEmpty(match?.strongCount)
    ? 0
    : match?.strongCount[0]?.count;
  const goodCount = isEmpty(match?.goodCount) ? 0 : match?.goodCount[0]?.count;
  const minCount = isEmpty(match?.minCount) ? 0 : match?.minCount[0]?.count;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl1, setAnchorEl1] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickStatus = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const seeAll = useSelector((state) => state.apply.seeCand);
  const handleChange = (e, value) => {
    const onlyTitles = titles.map((o) => o.jobRole);
    let data = names.filter((item) => onlyTitles.includes(item.jobRole));
    const arr = data.map((object) => object._id);

    const reqObject = {
      page: value,
      data: { status: selectedStatus, job: arr },
      jobid: seeAll?.jobId,
    };

    if (seeAll?.state === true) {
      dispatch(applyJobsdetFilter(reqObject));
    } else {
      dispatch(applyJobsdet(reqObject));
    }
  };

  const handleName = (value) => {
    // const value = val
    if (Array.isArray(value._id[0])) {
      value = {
        jobRole: value?.jobRole,
        _id: value._id[0],
      };
    }
    const hasbeenSelected = titles.some(
      (item) => item.jobRole === value?.jobRole
    );
    const result = value._id.some((item) => Array.isArray(item))
      ? ids.some((str) => value._id[0].includes(str))
      : ids.some((str) => value._id.includes(str));
    let newArray = [...titles];
    let arr3 = [...ids];
    if (hasbeenSelected) {
      newArray = newArray.filter((f) => f.jobRole !== value.jobRole);
    } else {
      newArray.push(value);
    }
    if (value._id.some((item) => Array.isArray(item))) {
      if (result === true) {
        arr3 = arr3.filter((str) => !value._id[0].includes(str));
      } else {
        value._id[0].forEach((item) => {
          if (!arr3.includes(item)) {
            arr3.push(item);
          }
        });
      }
    } else {
      if (result === true) {
        arr3 = arr3.filter((str) => !value._id.includes(str));
      } else {
        value._id.forEach((item) => {
          if (!arr3.includes(item)) {
            arr3.push(item);
          }
        });
      }
    }
    setTitles(() => [...newArray]);
    setids(() => [...arr3]);
    if (newArray?.length === 1) {
      if (newArray[0]._id.some((item) => Array.isArray(item))) {
        setSelectedTemp({ ...selectedTemp, jobTitle: newArray[0]._id[0] });
        setRejectedTemp({ ...rejectedTemp, jobTitle: newArray[0]._id[0] });
      } else {
        setSelectedTemp({ ...selectedTemp, jobTitle: newArray[0]._id });
        setRejectedTemp({ ...rejectedTemp, jobTitle: newArray[0]._id });
      }
    }
    const reqObject = {
      page: 1,
      data: { status: selectedStatus, job: arr3 || [] },
    };
    dispatch(applyJobsdet(reqObject));
  };
  useEffect(() => {
    const reqObject = {
      page: 1,
      data: { status: selectedStatus, job: ids },
    };
    dispatch(applyJobsdet(reqObject));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids, selectedStatus]);

  useEffect(() => {
    if (titles.length === 1) {
      setIsShown(false);
    } else {
      setSelectedTemp({ ...selectedTemp, jobTitle: "" });
      setIsShown(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [titles]);

  const handleNameStatus = (e, value) => {
    let newArray = [...selectedStatus];
    if (e.target.checked) {
      newArray.push(value);
    } else {
      newArray = newArray.filter((res) => res !== value);
    }
    setSelected(() => [...newArray]);
    const onlyTitles = titles.map((o) => o.jobRole);
    let data = names.filter((item) => onlyTitles.includes(item.jobRole));
    const arr = data.map((object) => object._id);

    const reqObject = {
      page: 1,
      data: { status: newArray, job: arr },
      jobid: seeAll?.jobId,
    };
    if (seeAll?.state === true) {
      dispatch(applyJobsdetFilter(reqObject));
    } else {
      dispatch(applyJobsdet(reqObject));
    }
  };

  function roundAndIncrease(decimalNumber) {
    let roundedNumber = Math.round(decimalNumber);
    if (
      decimalNumber - roundedNumber < 0.5 &&
      decimalNumber - roundedNumber > 0
    ) {
      roundedNumber++;
    }
    return roundedNumber;
  }

  const [cuurpage, setcuurpage] = useState(1);
  const handleChangePage = (e, page) => {
    const value = {
      id: jid,
      page: page,
    };
    dispatch(getMachingAppl(value)).then(setcuurpage(page));
  };

  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl1);
  const id1 = open2 ? "simple-popover" : undefined;

  // Rejected email content modal
  const [Modelopen, setModelopen] = React.useState(false);
  console.log(rejectedTemp.jobTitle, "ss");
  const handleDialogAction = () => {
    setModelopen(!Modelopen);
    const value = {
      id: rejectedTemp?.jobTitle[0],
      type: "rejected",
    };
    dispatch(getEmailTemplapes(value)).then((res) => {
      if (res?.payload?.data === null) {
        setRejectedTemp({
          jobTitle: rejectedTemp?.jobTitle,
          type: REJECTED,
          subject: "Status of Your Job Application",
          emailBody: defaultRej,
          date: "",
          setting: "As_soon_as_reject",
          cand: "Hi",
        });
      }
    });
  };
  const defaultRej = `<p> We hope this email finds you well. We appreciate the time and effort you put into applying for the <span style="font-weight: 600">${titles[0]?.jobRole}</span> position at <span style="font-weight: 600">${company?.cmpname}</span>. We carefully reviewed your application and qualifications, after thorough consideration, we regret to inform you that we have decided not to move forward with your application at this time. We received a large number of qualified candidates, and the selection process was highly competitive. Although your qualifications and experience are commendable, we have chosen to proceed with other candidates whose skills and expertise more closely align with our current needs.</p></br>
  <p>We understand that this news may be disappointing, and we want to assure you that this decision was not a reflection of your abilities or potential. The selection process is a challenging one, and we are compelled to make difficult choices based on the specific requirements of the role and the overall fit within our organization.</p></br>
  <p>Please note that we will keep your application on file for future reference should any suitable opportunities arise. We encourage you to continue to explore our career opportunities and submit applications for roles that match your skills and interests.</p></br>
  <p>We sincerely appreciate your interest in our company and wish you every success in your job search. Should you have any questions or require further feedback regarding your application, please feel free to reach out to us. We would be more than happy to provide any assistance or insights that may be helpful.</p></br>
  <p>Once again, thank you for your time and consideration. 
   </p>`;
  useEffect(() => {
    setRejectedTemp({
      ...rejectedTemp,
      emailBody:
        rejectedEmail?.emailBody === undefined
          ? defaultRej
          : rejectedEmail?.emailBody,
      type: rejectedEmail?.type || REJECTED,
      setting:
        rejectedEmail?.setting === undefined
          ? "As_soon_as_reject"
          : rejectedEmail?.setting,
      subject:
        rejectedEmail?.subject === undefined
          ? "Status of Your Job Application"
          : rejectedEmail?.subject,
      date: rejectedEmail?.date,
      cand: rejectedEmail?.cand === undefined ? "Hi" : rejectedEmail?.cand,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rejectedEmail, Modelopen]);
  useEffect(() => {
    setSelectedTemp({
      ...rejectedTemp,
      emailBody: selectedEmail?.emailBody,
      type: selectedEmail?.type || SHORT_LISTED,
      setting: selectedEmail?.setting || "",
      subject: selectedEmail?.subject,
      date: selectedEmail?.date,
      cand: selectedEmail?.cand === undefined ? "Hi" : selectedEmail?.cand,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedEmail]);

  const [emailAction, setemailAction] = React.useState(null);
  const emailActionOpen = Boolean(emailAction);
  const emailActionHandleClick = (event) => {
    setemailAction(event.currentTarget);
  };
  const emailActionHandleClose = () => {
    setemailAction(null);
  };

  //Shortlisted email content modal
  const [ShortlistedModelopen, setShortlistedModelopen] = React.useState(false);

  const handleShortlistedDialogAction = () => {
    setShortlistedModelopen(!ShortlistedModelopen);
    const value = {
      id: rejectedTemp?.jobTitle[0],
      type: "shortlist",
    };
    dispatch(getEmailTemplapes(value)).then((res) => {
      if (res?.payload?.data === null) {
        setSelectedTemp({
          jobTitle: selectedTemp?.jobTitle,
          type: SHORT_LISTED,
          subject: "",
          emailBody: "",
          date: "",
          setting: "Do_not_send",
          cand: "Hi",
        });
      }
    });
  };

  //zoom in function
  const wrapperRef = useRef(null);

  // useEffect(() => {
  //   wrapperRef.current.style.zoom = "80%";
  // }, []);
  const updateRejectedEmails = () => {
    dispatch(updateEmailTemplapes(rejectedTemp));
    setRejectedTemp({
      jobTitle: rejectedTemp?.jobTitle,
      type: REJECTED,
      subject: "",
      emailBody: "",
      date: "",
      setting: "Do_not_send",
      cand: "Hi",
    });
    handleDialogAction();
  };

  const updateShortlistedEmails = () => {
    dispatch(updateEmailTemplapes(selectedTemp));
    handleShortlistedDialogAction();
    setSelectedTemp({
      jobTitle: selectedTemp?.jobTitle,
      type: SHORT_LISTED,
      subject: "",
      emailBody: "",
      date: "",
      setting: "Do_not_send",
      cand: "Hi",
    });
  };

  //date time picker

  useEffect(() => {
    if (matching) {
      if (type === "strong") {
        setUser(match?.strongData);
      }
      if (type === "good") {
        setUser(match?.goodData);
      }
      if (type === "minimum") {
        setUser(match?.minData);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matching, type, loading2]);

  const handleDelete = (indexToRemove, typ, idds) => {
    console.info(idds, "You clicked the delete icon.");
    if (typ === "titl") {
      setids(ids.filter((element) => !idds.includes(element)));
      setTitles(titles.filter((_, index) => index !== indexToRemove));
    } else {
      setSelected(selectedStatus.filter((_, index) => index !== indexToRemove));
    }
  };
  const { aid } = router.query;
  useEffect(() => {
    if (aid) {
      scrollToDiv(aid);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aid]);
  function scrollToDiv(div) {
    // Get the target div element
    const targetElement = document.getElementById(div);

    // Scroll to the target element
    targetElement.scrollIntoView({ behavior: "smooth" });
    router.push("/Employer/AllApplicants", undefined, { shallow: true });
  }

  const updateValue = async () => {
    const companyService = new companyservice();
    await companyService.updateTourValue({ allApplicant: false });
  };

  const closeTour = () => {
    setTourOpen(false);
    updateValue();
  };

  const accentColor = "#5cb7b7";

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

  const comp = useSelector((state) => state?.company?.companyDetl);
  useEffect(() => {
    setTourOpen(() => comp?.tours?.allApplicant);
  }, [comp?.tours?.allApplicant]);

  return (
    <>
      <Employer>
        <Card
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
              {matching ? (
                <Stack direction="row" spacing={2}>
                  <Card
                    onClick={() => handleClear("strong")}
                    className={styles.allApplicantsCardstrong}
                    style={{ boxShadow: type === "strong" ? shadow : "" }}
                  >
                    <CardContent sx={{ pb: "16px !important" }}>
                      <CustomTypography
                        className={styles.allApplicantsCardTypo}
                        variant="h5"
                      >
                        Strong Match
                      </CustomTypography>
                      <CustomTypography
                        className={styles.allApplicantsCardNum}
                        variant="h5"
                      >
                        {strongCount}
                      </CustomTypography>
                    </CardContent>
                  </Card>
                  <Card
                    onClick={() => handleClear("good")}
                    className={styles.allApplicantsCardgood}
                    style={{ boxShadow: type === "good" ? shadow : "" }}
                  >
                    <CardContent sx={{ pb: "16px !important" }}>
                      <CustomTypography
                        className={styles.allApplicantsCardTypo}
                        variant="h5"
                      >
                        Good Match
                      </CustomTypography>
                      <CustomTypography
                        className={styles.allApplicantsCardNum}
                        variant="h5"
                      >
                        {goodCount}
                      </CustomTypography>
                    </CardContent>
                  </Card>
                </Stack>
              ) : (
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Card className={styles.allApplicantsCard}>
                    <CardContent sx={{ pb: "16px !important" }}>
                      <CustomTypography
                        className={styles.allApplicantsCardTypo}
                        variant="h5"
                      >
                        Total Applicants
                      </CustomTypography>
                      <CustomTypography
                        className={styles.allApplicantsCardNum}
                        variant="h5"
                      >
                        {count}
                      </CustomTypography>
                    </CardContent>
                  </Card>
                  <Card className={styles.allApplicantsCard}>
                    <CardContent sx={{ pb: "16px !important" }}>
                      <CustomTypography
                        className={styles.allApplicantsCardTypo}
                        variant="h5"
                      >
                        Total Shortlisted
                      </CustomTypography>
                      <CustomTypography
                        className={styles.allApplicantsCardNum}
                        variant="h5"
                      >
                        {shortCount}
                      </CustomTypography>
                    </CardContent>
                  </Card>
                  <Card className={styles.allApplicantsCard}>
                    <CardContent sx={{ pb: "16px !important" }}>
                      <CustomTypography
                        className={styles.allApplicantsCardTypo}
                        variant="h5"
                      >
                        Total Unviewed
                      </CustomTypography>
                      <CustomTypography
                        className={styles.allApplicantsCardNum}
                        variant="h5"
                      >
                        {unview}
                      </CustomTypography>
                    </CardContent>
                  </Card>
                  <Card className={styles.allApplicantsCard}>
                    <CardContent sx={{ pb: "16px !important" }}>
                      <CustomTypography
                        className={styles.allApplicantsCardTypo}
                        variant="h5"
                      >
                        Total Rejected
                      </CustomTypography>
                      <CustomTypography
                        className={styles.allApplicantsCardNum}
                        variant="h5"
                      >
                        {rejectcount}
                      </CustomTypography>
                    </CardContent>
                  </Card>
                </Stack>
              )}
              <Divider
                sx={{ mt: "30px", mb: "30px", borderColor: "#D4F0FC" }}
              />
              {matching ? (
                ""
              ) : (
                <Stack
                  className="filtersJob"
                  direction={{ xs: "column", md: "row" }}
                  spacing={2}
                  sx={{ mb: "30px", width: { xs: "100%", md: "50%" } }}
                >
                  <Button
                    id="demo-customized-button"
                    aria-controls={open ? "demo-customized-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    variant="contained"
                    disableElevation
                    onClick={handleClick}
                    endIcon={<WorkIcon />}
                    sx={{
                      bgcolor: "#1097CD !important",
                      width: { xs: "100%", md: "50%" },
                    }}
                  >
                    Filter by Jobs
                  </Button>
                  <Menu
                    id="demo-customized-menu"
                    MenuListProps={{
                      "aria-labelledby": "demo-customized-button",
                    }}
                    disablePortal={true}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    sx={{ maxHeight: "400px" }}
                  >
                    <List
                      sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                      }}
                    >
                      {output.map((variant) => {
                        const labelId = `checkbox-list-label-$
                          {variant.jobRole}`;
                        return (
                          <ListItem key={variant.jobRole} disablePadding>
                            <ListItemButton
                              role={undefined}
                              onClick={() => handleName(variant)}
                              dense
                            >
                              <ListItemIcon>
                                <Checkbox
                                  edge="start"
                                  checked={
                                    titles.findIndex(
                                      (item) => item.jobRole === variant.jobRole
                                    ) >= 0
                                  }
                                  disableRipple
                                  inputProps={{
                                    "aria-labelledby": labelId,
                                  }}
                                />
                              </ListItemIcon>
                              <ListItemText
                                id={labelId}
                                primary={variant?.jobRole}
                              />
                            </ListItemButton>
                          </ListItem>
                        );
                      })}
                    </List>
                  </Menu>
                  <Button
                    endIcon={<BeenhereIcon />}
                    onClick={handleClickStatus}
                    id="demo-customized-button"
                    aria-controls={open2 ? "demo-customized-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open2 ? "true" : undefined}
                    variant="contained"
                    disableElevation
                    aria-describedby={id1}
                    sx={{
                      bgcolor: "#1097CD !important",
                      width: { xs: "100%", md: "50%" },
                    }}
                  >
                    Filter By status
                  </Button>
                  <Menu
                    id="demo-customized-menu"
                    MenuListProps={{
                      "aria-labelledby": "demo-customized-button",
                    }}
                    anchorEl={anchorEl1}
                    open={open2}
                    onClose={handleClose1}
                    disablePortal={true}
                  >
                    {EMPLOYEE_STATUS.map((variant) => (
                      <MenuItem
                        key={variant}
                        sx={{ zIndex: 10001, width: "200px" }}
                      >
                        <Checkbox
                          checked={
                            selectedStatus.findIndex(
                              (item) => item === variant
                            ) >= 0
                          }
                          onClick={(e) => handleNameStatus(e, variant)}
                        />
                        <ListItemText
                          primary={variant}
                          sx={{ textTransform: "capitalize" }}
                        />
                      </MenuItem>
                    ))}
                  </Menu>
                  <div style={{ display: isShown ? "none" : "block" }}>
                    <Button
                      id="demo-customized-button"
                      variant="contained"
                      aria-controls={
                        emailActionOpen ? "demo-positioned-menu" : undefined
                      }
                      aria-haspopup="true"
                      aria-expanded={emailActionOpen ? "true" : undefined}
                      onClick={emailActionHandleClick}
                      disableElevation
                      sx={{
                        bgcolor: "#1097CD !important",
                        width: { xs: "100%" },
                      }}
                      endIcon={
                        <Settings
                          sx={{
                            bgcolor: "primary",
                          }}
                        />
                      }
                    >
                      Feedback Email Settings
                    </Button>
                    <Menu
                      id="demo-customized-menu"
                      aria-labelledby="demo-positioned-button"
                      anchorEl={emailAction}
                      open={emailActionOpen}
                      onClose={emailActionHandleClose}
                      // anchorOrigin={{
                      //   vertical: "top",
                      //   horizontal: "left",
                      // }}
                      // transformOrigin={{
                      //   vertical: "top",
                      //   horizontal: "left",
                      // }}
                    >
                      <MenuItem onClick={handleDialogAction}>
                        Email - Rejected Candidates
                      </MenuItem>
                      <MenuItem onClick={handleShortlistedDialogAction}>
                        Email - Shortlist Candidates
                      </MenuItem>
                    </Menu>
                    <Dialog
                      fullWidth
                      open={Modelopen}
                      onClose={handleDialogAction}
                    >
                      <Box sx={{ p: "40px" }}>
                        <Typography variant="h5" sx={{ textAlign: "center" }}>
                          Email - Rejected Candidates
                        </Typography>

                        <Box
                          component="form"
                          sx={{
                            "& > :not(style)": { width: "100%" },
                            mt: "10px",
                          }}
                          noValidate
                          autoComplete="off"
                        >
                          <TextField
                            sx={{ mt: 3 }}
                            id="Email subject"
                            label="Email subject"
                            variant="outlined"
                            onChange={(e) =>
                              setRejectedTemp((state) => ({
                                ...state,
                                subject: e.target.value,
                              }))
                            }
                            value={rejectedTemp.subject || ""}
                          />
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            mt: "10px",
                          }}
                        >
                          <EditorToolbar />
                          {typeof window !== "undefined" && (
                            <ReactQuill
                              value={rejectedTemp.emailBody}
                              onChange={(e) => {
                                setRejectedTemp((state) => ({
                                  ...state,
                                  emailBody: e,
                                }));
                              }}
                              theme={"snow"}
                              className="textareaQuestion"
                              modules={modules}
                              formats={formats}
                            />
                          )}

                          <FormControl>
                            <FormLabel id="demo-controlled-radio-buttons-group">
                              <Typography variant="subtitle1">
                                Sending settings
                              </Typography>
                            </FormLabel>
                            <RadioGroup
                              row
                              aria-labelledby="demo-controlled-radio-buttons-group"
                              name="controlled-radio-buttons-group"
                              value={rejectedTemp?.setting}
                              onChange={(e) => {
                                setRejectedTemp((state) => ({
                                  ...state,
                                  setting: e.target.value,
                                }));
                              }}
                              sx={{ justifyContent: "space-around" }}
                            >
                              <FormControlLabel
                                value="Do_not_send"
                                control={<Radio />}
                                label="Do not send"
                              />
                              <FormControlLabel
                                value="As_soon_as_reject"
                                control={<Radio />}
                                label="As soon as reject"
                              />
                              {/* <FormControlLabel
                          value="Schedule_email"
                          control={<Radio />}
                          label="Schedule email"
                        /> */}
                            </RadioGroup>
                          </FormControl>

                          {rejectedTemp?.setting === "Schedule_email" && (
                            <Box>
                              <LocalizationProvider
                                dateAdapter={AdapterDateFns}
                              >
                                <DesktopDateTimePicker
                                  label="Select Date and Time"
                                  // inputFormat="MM/dd/yyyy"
                                  minDate={new Date()}
                                  value={rejectedTemp?.date}
                                  onChange={(e) => {
                                    setRejectedTemp((state) => ({
                                      ...state,
                                      date: moment(e).format(),
                                    }));
                                  }}
                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      sx={styles.naminput}
                                    />
                                  )}
                                />
                              </LocalizationProvider>
                            </Box>
                          )}
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            mt: "10px",
                            gap: "5px",
                          }}
                        >
                          <Button
                            variant="contained"
                            sx={{ backgroundColor: "#4fa9ff !important" }}
                            type="submit"
                            onClick={() => updateRejectedEmails()}
                          >
                            Save
                          </Button>
                          <Button
                            variant="outlined"
                            onClick={() => {
                              setModelopen(false);
                              setRejectedTemp({
                                jobTitle: rejectedTemp?.jobTitle,
                                type: REJECTED,
                                subject: "",
                                emailBody: "",
                                date: "",
                                setting: "Do_not_send",
                              });
                            }}
                          >
                            Cancel
                          </Button>
                        </Box>
                      </Box>
                    </Dialog>

                    <Dialog
                      fullWidth
                      open={ShortlistedModelopen}
                      onClose={handleShortlistedDialogAction}
                    >
                      <Box sx={{ p: "40px" }}>
                        <Typography variant="h5" sx={{ textAlign: "center" }}>
                          Email - Shortlisted Candidates
                        </Typography>

                        <Box
                          component="form"
                          sx={{
                            "& > :not(style)": { width: "100%" },
                            mt: "10px",
                          }}
                          noValidate
                          autoComplete="off"
                        >
                          <TextField
                            sx={{ mt: 3 }}
                            id="Email subject"
                            label="Email subject"
                            variant="outlined"
                            onChange={(e) =>
                              setSelectedTemp((state) => ({
                                ...state,
                                subject: e.target.value,
                              }))
                            }
                            value={selectedTemp.subject || ""}
                          />
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            mt: "10px",
                          }}
                        >
                          <EditorToolbar />
                          {typeof window !== "undefined" && (
                            <ReactQuill
                              value={selectedTemp.emailBody}
                              onChange={(e) => {
                                setSelectedTemp((state) => ({
                                  ...state,
                                  emailBody: e,
                                }));
                              }}
                              theme={"snow"}
                              className="textareaQuestion"
                              modules={modules}
                              formats={formats}
                            />
                          )}

                          <FormControl>
                            <FormLabel id="demo-controlled-radio-buttons-group">
                              <Typography variant="subtitle1">
                                Sending settings
                              </Typography>
                            </FormLabel>
                            <RadioGroup
                              row
                              aria-labelledby="demo-controlled-radio-buttons-group"
                              name="controlled-radio-buttons-group"
                              value={selectedTemp?.setting}
                              onChange={(e) => {
                                setSelectedTemp((state) => ({
                                  ...state,
                                  setting: e.target.value,
                                }));
                              }}
                              sx={{ justifyContent: "space-around" }}
                            >
                              <FormControlLabel
                                value="Do_not_send"
                                control={<Radio />}
                                label="Do not send"
                              />
                              <FormControlLabel
                                value="As_soon_as_short"
                                control={<Radio />}
                                label="As soon as Shortlist"
                              />
                              {/* <FormControlLabel
                          value="Schedule_email"
                          control={<Radio />}
                          label="Schedule email"
                        /> */}
                            </RadioGroup>
                          </FormControl>

                          {selectedTemp?.setting === "Schedule_email" && (
                            <Box>
                              <LocalizationProvider
                                dateAdapter={AdapterDateFns}
                              >
                                <DesktopDateTimePicker
                                  label="Select Date and Time"
                                  // inputFormat="MM/dd/yyyy"
                                  minDate={new Date()}
                                  name="date"
                                  value={selectedTemp?.date}
                                  onChange={(e) => {
                                    setSelectedTemp((state) => ({
                                      ...state,
                                      date: moment(e).format(),
                                    }));
                                  }}
                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      sx={styles.naminput}
                                    />
                                  )}
                                />
                              </LocalizationProvider>
                            </Box>
                          )}
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            mt: "10px",
                            gap: "5px",
                          }}
                        >
                          <Button
                            variant="contained"
                            sx={{ backgroundColor: "#4fa9ff !important" }}
                            type="submit"
                            onClick={() => updateShortlistedEmails()}
                          >
                            Save
                          </Button>
                          <Button
                            variant="outlined"
                            onClick={() => {
                              setShortlistedModelopen(false);
                              setSelectedTemp({
                                jobTitle: selectedTemp?.jobTitle,
                                type: SHORT_LISTED,
                                subject: "",
                                emailBody: "",
                                date: "",
                                setting: "Do_not_send",
                              });
                            }}
                          >
                            Cancel
                          </Button>
                        </Box>
                      </Box>
                    </Dialog>
                  </div>
                </Stack>
              )}

              <Stack
                direction="row"
                sx={{ flexWrap: "wrap", gap: "10px" }}
                spacing={2}
              >
                {titles.map((tit, index) => (
                  <Chip
                    key={index}
                    label={tit?.jobRole}
                    onDelete={() => {
                      handleDelete(index, "titl", tit?._id);
                    }}
                    sx={{ bgcolor: "#1097CD", color: "white" }}
                  />
                ))}
              </Stack>
              <Stack
                direction="row"
                sx={{ mt: 1, flexWrap: "wrap", gap: "10px" }}
                spacing={2}
              >
                {selectedStatus?.map((sts, index) => (
                  <Chip
                    key={index}
                    label={sts}
                    onDelete={() => {
                      handleDelete(index, "sts");
                    }}
                    sx={{ bgcolor: "#D4F0FC", color: "#01313F" }}
                  />
                ))}
              </Stack>
              <Box
                className={styles.scrollbar}
                id="style-5"
                sx={{ mt: "20px", mb: "30px", width: "100%", pr: "10px" }}
              >
                <Stack spacing={2}>
                  {user.map((usr, index) => (
                    <div id={usr?._id} key={index}>
                      <AllApplicantsCard key={index} users={usr} />
                    </div>
                  ))}
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
                {matching ? (
                  <Stack sx={{ mt: "25px" }}>
                    {type === "strong" ? (
                      <Pagination
                        count={Number(roundAndIncrease(strongCount / 10)) || 1}
                        page={Number(cuurpage) || 1}
                        color="primary"
                        onChange={handleChangePage}
                      />
                    ) : type === "good" ? (
                      <Pagination
                        count={Number(roundAndIncrease(goodCount / 10)) || 1}
                        page={Number(cuurpage) || 1}
                        color="primary"
                        onChange={handleChangePage}
                      />
                    ) : type === "minimum" ? (
                      <Pagination
                        count={roundAndIncrease(minCount / 10) || 1}
                        page={cuurpage || 1}
                        color="primary"
                        onChange={handleChangePage}
                      />
                    ) : (
                      ""
                    )}
                  </Stack>
                ) : (
                  <Pagination
                    count={Number(totalPage) || 1}
                    page={Number(currentPage) || 1}
                    color="primary"
                    onChange={handleChange}
                    hidePrevButton
                    hideNextButton
                  />
                )}
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
