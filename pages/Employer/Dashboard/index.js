/* eslint-disable @next/next/no-img-element */
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
  Tabs,
  Tab,
  AppBar,
  Divider,
  Menu,
  MenuItem,
  Slide,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  ArrowDropDownCircleOutlined,
  ArrowDropDownCircleRounded,
} from "@mui/icons-material";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Cookies from "js-cookie";
import { applyJobsdet, getJobsfil } from "@/redux/slices/applyJobs";
import { logout } from "@/redux/slices/auth";
import {
  addCandidatesRequest,
  getCandidatesRequest,
  getCompanyDetails,
  getapplCount,
} from "@/redux/slices/companyslice";
import { companyJobs, jobId, setEditJob } from "@/redux/slices/job";
import { getSchedules } from "@/redux/slices/interviewslice";
import moment from "moment";
import { capitalizeFirstLetter } from "@/utils/HelperFunctions";
import axios from "axios";
import { openAlert } from "@/redux/slices/alert";
import { ERROR, SUCCESS } from "@/utils/constants";
import Employer from "..";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: "center",
  },
  papercard: {
    minHeight: 140,
    minWidth: 190,
  },
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const EmpoyerDashboard = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(applyJobsdet())
      .then((res) => {
        if (res.error !== undefined) {
          res.error.message === "Request failed with status code 401" ||
          "Request failed with status code 403"
            ? dispatch(logout()).then(() => {
                push("/signin", { state: true });
              })
            : console.warn("error");
        }
      })
      .catch((error) => {
        if (
          error.message === "Request failed with status code 401" ||
          "Request failed with status code 403"
        ) {
          dispatch(logout()).then(() => {
            push("/signin", { state: true });
          });
        }
      });
    dispatch(getJobsfil());
    dispatch(getCompanyDetails());
    dispatch(companyJobs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open2 = Boolean(anchorEl2);
  // const [value, setValue] = React.useState(0);
  const [value2, setValue2] = React.useState(0);
  const [opena, setOpena] = React.useState(false);
  const handleClosea = () => {
    setOpena(false);
  };
  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  useEffect(() => {
    dispatch(getSchedules());
    dispatch(getCandidatesRequest());
    dispatch(getapplCount());
  }, [dispatch]);
  const sear = useSelector((state) => state?.sinterview?.schedules);

  const names = useSelector((state) => state?.apply?.names);
  const company = useSelector((state) => state?.company?.companyDetl);
  const requestJobs = useSelector((state) => state?.company?.requestJobs);
  const totalCount = useSelector((state) => state?.company?.totalCount);
  const shortlistCount = useSelector((state) => state?.company?.shortlistCount);
  const rejectCount = useSelector((state) => state?.company?.rejectCount);
  // const status = "active";
  // const count = names.filter((obj) => obj.status === status).length;
  const expired = [];
  const active = [];
  function isValuePresentInArray(array, value) {
    return array.some((obj) => obj.jobId === value);
  }
  const cjobs = useSelector((state) => state?.jobs?.companyJobs) || [];
  console.log(cjobs, "cjobs");
  names.map((nam) => {
    if (
      moment(nam.applicationDeadline).format() < moment(new Date()).format() ||
      nam.status === "inactive"
    ) {
      expired.push(nam.applicationDeadline);
    }
    if (
      moment(nam.applicationDeadline).format() >
        moment(new Date()).subtract(1, "days").format() &&
      nam.status === "active"
    ) {
      active.push(nam.applicationDeadline);
    }
    return null;
  });

  var formattedNumber = ("0" + expired.length).slice(-2);
  var formattedActive = ("0" + active.length).slice(-2);
  var formattedint = ("0" + sear.length).slice(-2);
  var namesFeautre = [];
  var namesFeautreNo = [];
  var namesjSlots = [];
  var namesjSlotsFeano = [];
  names.map((nam) => {
    if (nam.featureType === true) {
      namesFeautre.push(nam);
    }
    return null;
  });

  names.map((nam) => {
    // eslint-disable-next-line no-mixed-operators
    if (nam.featureType === false || nam.featureType === undefined) {
      namesFeautreNo.push(nam);
    }
    return null;
  });
  names.map((nam) => {
    if (nam.packageType === "jSlot" && nam.featureType === true) {
      namesjSlots.push(nam);
    }
    return null;
  });
  names.map((nam) => {
    // eslint-disable-next-line no-mixed-operators
    if (
      (nam.packageType === "jSlot" && nam.featureType === false) ||
      nam.featureType === undefined
    ) {
      namesjSlotsFeano.push(nam);
    }
    return null;
  });

  const rows = namesFeautreNo?.map((nam, index) => ({
    id: nam._id,
    _id: index + 1,
    title: nam.jobRole,
    jobtype: nam.jobType,
    Location: nam.address,
    company: nam.company,
    packType: nam.packageType,
    posteddate: moment(nam.createdAt).format("L"),
    status: capitalizeFirstLetter(nam?.status),
    deadline: moment(nam.applicationDeadline).format("MMM Do YY"),
    action: nam.packageType,
  }));

  const rows2 = namesFeautre?.map((nam, index) => ({
    id: nam._id,
    _id: index + 1,
    title: nam.jobRole,
    jobtype: nam.jobType,
    Location: nam.address,
    company: nam.company,
    packType: nam.packageType,
    posteddate: moment(nam.createdAt).format("L"),
    status: capitalizeFirstLetter(nam?.status),
    deadline: moment(nam.applicationDeadline).format("MMM Do YY"),
    action: nam.packageType,
  }));

  // const rows3 = namesjSlots?.map((nam, index) => ({
  //   id: nam._id,
  //   _id: index + 1,
  //   title: nam.jobRole,
  //   jobtype: nam.jobType,
  //   Location: nam.address,
  //   company: nam.company,
  //   packType:nam.packageType,
  //   posteddate: moment(nam.createdAt).format("L"),
  //   status: capitalizeFirstLetter(nam?.status),
  //   deadline: moment(nam.applicationDeadline).format("MMM Do YY"),
  //   action: nam.packageType,
  // }));
  // const rows4 = namesjSlotsFeano?.map((nam, index) => ({
  //   id: nam._id,
  //   _id: index + 1,
  //   title: nam.jobRole,
  //   jobtype: nam.jobType,
  //   Location: nam.address,
  //   company: nam.company,
  //   packType:nam.packageType,
  //   posteddate: moment(nam.createdAt).format("L"),
  //   status: capitalizeFirstLetter(nam?.status),
  //   deadline: moment(nam.applicationDeadline).format("MMM Do YY"),
  //   action: nam.packageType,
  // }));

  // let navigate = useNavigate();
  const { push } = useRouter();
  const classes = useStyles();

  const [jobid, setJobid] = useState("");

  const handleIdJob = (parms) => {
    setJobid(parms.id);
    setpackType(parms?.row?.packType);
    dispatch(jobId(parms.id));
  };

  useEffect(() => {
    dispatch(
      setEditJob({
        salary: {},
        question: [
          {
            id: new Date().getTime(),
            questions: "",
            answer: "",
            preferedAns: "",
          },
        ],
        requiredSkill: [],
      })
    );
  }, [dispatch]);

  const handleEdit = () => {
    dispatch(setEditJob(names.filter((i) => i._id === jobid)[0])).then(
      setTimeout(() => {
        push(`/Employer/PostNewJob?jid=${jobid}`);
      }, 500)
    );
  };

  const user = Cookies.get();

  const handleAppilcants = () => {
    // const details = {
    //   page: 1,
    //   status: [],
    //   jobid: jobid,
    // };
    // dispatch(seeAll({ jobId: jobid, state: true }));
    // dispatch(applyJobsdetFilter(details)).then(
    //   setTimeout(() => {
    push(`/Employer/AllApplicants?jid=${jobid}`, { state: true });
    // }, 500)
    // );
  };

  const handleActivate = () => {
    axios
      .put(
        `https://preprod.recroot.au/api/updateJobStatus/${jobid}`,
        { status: "active" },
        { headers: { "x-access-token": `${user.token}` } }
      )
      .then(function (res) {
        if (res.data.code) {
          if (res.data.code === 899) {
            push("/Pricing");
          }
          dispatch(
            openAlert({
              type: ERROR,
              message: res.data.message,
            })
          );
          // notifyEroor(res.data.message);
        } else {
          dispatch(
            openAlert({
              type: SUCCESS,
              message: res.data,
            })
          );
          // notify(res.data);
          dispatch(applyJobsdet());
          dispatch(getJobsfil());
        }
      })
      .catch(function (error) {
        console.warn(error);
      });
  };

  const handleDeActivate = () => {
    axios
      .put(
        `https://preprod.recroot.au/api/updateJobStatus/${jobid}`,
        { status: "inactive" },
        { headers: { "x-access-token": `${user.token}` } }
      )
      .then(function (res) {
        dispatch(
          openAlert({
            type: SUCCESS,
            message: res.data,
          })
        );
        // notify(res.data);
        dispatch(applyJobsdet());
        dispatch(getJobsfil());
      })
      .catch(function (error) {
        if (
          error.message === "Request failed with status code 401" ||
          "Request failed with status code 403"
        ) {
          dispatch(logout()).then(() => {
            push("/signin", { state: true });
          });
        }
      });
  };

  const handleRequest = (parms) => {
    if (parms === "addrequest") {
      dispatch(
        openAlert({
          type: SUCCESS,
          message:
            "Your request has been sent successfully. We are extracting candidates based on your job description and guarantee to populate matching candidates within 12 hours.",
        })
      );
      dispatch(addCandidatesRequest(jobid));
    } else {
      push(`/Employer/CandiDatabase?id=${jobid}`);
      // dispatch(jobCandidatesRequest(jobid));
    }
  };
  const [packType, setpackType] = useState("");
  const handleCloseJob = () => {
    if (packType === "free" || packType === "pro" || packType === "premium") {
      handleDeActivate();
      setOpena(true);
      handleClose();
    } else {
      handleClose();
      handleDeActivate();
    }
  };

  const columns = [
    { field: "id", headerName: "Id", width: 100, hide: true },
    { field: "_id", headerName: "Job", width: 120 },
    { field: "title", headerName: "Title", width: 260 },
    {
      field: "jobtype",
      headerName: "Job type",
      width: 130,
    },
    {
      field: "Location",
      headerName: "Location",
      width: 130,
    },
    {
      field: "posteddate",
      headerName: "Posted date",
      width: 130,
    },
    {
      field: "deadline",
      headerName: "Deadline",
      width: 130,
    },
    {
      field: "packType",
      headerName: "Package Type",
      width: 140,
      renderCell: (parms) => (
        <p>
          {parms?.value === "premium"
            ? "Premium"
            : parms?.value === "pro"
            ? "Pro Plan"
            : parms?.value === "free"
            ? "Free"
            : parms?.value === "jSlot"
            ? "Job Slot"
            : "N/A"}
        </p>
      ),
    },
    {
      field: "status",
      headerName: "Status",
      width: 140,
      renderCell: (parms) => (
        <>
          <p>
            {(parms?.row?.packType === "free" && parms?.value === "Inactive") ||
            (parms?.row?.packType === "pro" && parms?.value === "Inactive") ||
            (parms?.row?.packType === "premium" && parms?.value === "Inactive")
              ? "Closed"
              : parms.value === "Active"
              ? "Active"
              : "Inactive"}
          </p>
        </>
      ),
    },
    {
      field: "action",
      headerName: "Action",
      width: 130,
      renderCell: (parms) =>
        user?.memberType === "HiringManager" ? (
          <>
            <Button
              className="editButton"
              id="basic-button"
              aria-controls={open2 ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open2 ? "true" : undefined}
              onClick={(e) => {
                handleClick2(e);
                handleIdJob(parms);
              }}
            >
              Action <ArrowDropDownCircleRounded style={{ marginLeft: 10 }} />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl2}
              open={open2}
              onClose={handleClose2}
              aria-labelledby="basic-demo-button"
            >
              <MenuItem
                onClick={() => {
                  handleClose2();
                  handleAppilcants();
                }}
                value="applicNTS"
              >
                See Applicants
              </MenuItem>
            </Menu>
          </>
        ) : capitalizeFirstLetter(parms.row.status) ===
          capitalizeFirstLetter("inactive") ? (
          <>
            <Button
              className="editButton"
              id="basic-button"
              aria-controls={open2 ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open2 ? "true" : undefined}
              onClick={(e) => {
                handleClick2(e);
                handleIdJob(parms);
              }}
            >
              Action <ArrowDropDownCircleRounded style={{ marginLeft: 10 }} />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl2}
              open={open2}
              onClose={handleClose2}
              aria-labelledby="basic-demo-button"
            >
              <MenuItem
                onClick={() => {
                  handleClose2();
                  handleEdit(parms);
                }}
                value="edit"
              >
                Edit Jobs
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose2();
                  handleAppilcants();
                }}
                value="applicNTS"
              >
                See Applicants
              </MenuItem>

              <MenuItem
                onClick={() => {
                  handleClose2();
                  handleActivate();
                }}
                value="delete"
                disabled={
                  packType === "free" ||
                  packType === "pro" ||
                  packType === "premium"
                }
              >
                Activate
              </MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Button
              className="editButton"
              id="basic-button"
              // id="basic-demo-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              // variant="outlined"
              // color="neutral"
              onClick={(e) => {
                handleClick(e);
                handleIdJob(parms);
              }}
            >
              Action <ArrowDropDownCircleOutlined style={{ marginLeft: 10 }} />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              aria-labelledby="basic-demo-button"
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  handleEdit(parms);
                }}
                value="edit"
              >
                Edit Jobs
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  handleAppilcants();
                }}
                value="applicNTS"
              >
                See Applicants
              </MenuItem>

              <MenuItem
                onClick={() => {
                  handleCloseJob();
                }}
                value="delete"
              >
                {packType === "free" ||
                packType === "pro" ||
                packType === "premium"
                  ? "Close The Job"
                  : packType === "jSlot"
                  ? "Deactivate"
                  : "Deactivate"}
              </MenuItem>
              {isValuePresentInArray(requestJobs, jobid) === true ? (
                <MenuItem
                  onClick={() => {
                    handleRequest("requested");
                  }}
                  sx={{ color: "green" }}
                >
                  Candidate Database
                </MenuItem>
              ) : (
                <MenuItem
                  onClick={() => {
                    handleRequest("addrequest");
                  }}
                  sx={{ color: "#4fa9ff" }}
                >
                  Request Candidate Database
                </MenuItem>
              )}
            </Menu>
          </>
        ),
    },
  ];

  const handleGetRowId = (e) => {
    return e.id;
  };

  // eslint-disable-next-line no-mixed-operators

  const enableFeaturedJobs =
    // eslint-disable-next-line no-mixed-operators
    company?.package?.subscription_package === "SuperEmployer" ||
    company?.jobCounts?.premiumPayment === "Completed" ||
    company?.package?.subscription_package === "Gold" ||
    company?.jobSlotGold === true;
  const enableFeaturedJobs2 =
    // eslint-disable-next-line no-mixed-operators
    company?.package?.subscription_package === "SuperEmployer" ||
    company?.package?.subscription_package === "Gold" ||
    company?.jobSlotGold === true;
  const freePack = company?.package?.subscription_package === "Free";
  const freeCount =
    freePack === true ? (cjobs !== undefined ? 3 - cjobs?.length : 0) : 0;
  const proCOunt = company?.jobCounts?.proCount;
  const preCOunt = company?.jobCounts?.premiumCount;
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <Employer>
        {/* <Grid item xs={10}> */}
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Card
            sx={{
              width: "100%",
              // height: "215px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
              backgroundImage: 'url("/activejob-bg.svg")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "15px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: "25px",
              }}
            >
              <Image src="/active-jobs.png" alt="" height="60" width="60" />
            </Box>
            <CardContent>
              <CustomTypography
                sx={{ color: "white", fontSize: "30px" }}
                variant="h5"
              >
                {formattedActive}/
                {parseInt(formattedActive) + parseInt(formattedNumber)}
              </CustomTypography>
              <CustomTypography variant="body1" sx={{ color: "white" }}>
                Active Jobs
              </CustomTypography>
            </CardContent>
          </Card>
          <Card
            sx={{
              width: "100%",
              // height: "215px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
              backgroundImage: 'url("/inactivejobs-bg.svg")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "15px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: "25px",
              }}
            >
              <Image src="/inactive-jobs.png" alt="" height="60" width="60" />
            </Box>
            <CardContent>
              <CustomTypography
                sx={{ color: "white", fontSize: "30px" }}
                variant="h5"
              >
                {formattedNumber}/
                {parseInt(formattedActive) + parseInt(formattedNumber)}
              </CustomTypography>
              <CustomTypography variant="body1" sx={{ color: "white" }}>
                Inactive Jobs
              </CustomTypography>
            </CardContent>
          </Card>
          <Card
            sx={{
              width: "100%",
              // height: "235px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
              backgroundImage: 'url("/interviews-bg.svg")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "15px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: "25px",
              }}
            >
              <Image src="/interviews.png" alt="" height="60" width="60" />
            </Box>
            <CardContent>
              <CustomTypography
                sx={{ color: "white", fontSize: "30px" }}
                variant="h5"
              >
                {formattedint}
              </CustomTypography>
              <CustomTypography variant="body1" sx={{ color: "white" }}>
                Interviews
              </CustomTypography>
            </CardContent>
          </Card>
        </Stack>
        <Grid container spacing={3} sx={{ mt: "40px" }}>
          <Grid item xs={12} sm={6}>
            <Card
              sx={{
                width: "100%",
                height: "145px",
                borderRadius: "15px",
                boxShadow: "0px 2px 20px rgba(0, 51, 155, 0.2)",
                paddingBottom: "16px !important",
              }}
            >
              <CardContent sx={{ display: "flex" }}>
                <Box
                  sx={{
                    width: "30%",
                    height: "100px",
                    backgroundImage: 'url("/dashbaordcard-circle-bg.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src="/total-applicants-img.png"
                    alt=""
                    height="60"
                    width="50"
                  />
                </Box>
                <Box
                  sx={{
                    width: "70%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    ml: { xs: "10px", md: "0px" },
                  }}
                >
                  <CustomTypography
                    sx={{
                      fontSize: "22px",
                      fontWeight: 600,
                    }}
                  >
                    {totalCount}
                  </CustomTypography>
                  <CustomTypography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 600,
                    }}
                  >
                    Total Applicants
                  </CustomTypography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card
              sx={{
                width: "100%",
                height: "145px",
                borderRadius: "15px",
                boxShadow: "0px 2px 20px rgba(0, 51, 155, 0.2)",
                paddingBottom: "16px !important",
              }}
            >
              <CardContent sx={{ display: "flex" }}>
                <Box
                  sx={{
                    width: "30%",
                    height: "100px",
                    backgroundImage: 'url("/dashbaordcard-circle-bg.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src="/rejected-applicants-img.png"
                    alt=""
                    height="60"
                    width="50"
                  />
                </Box>
                <Box
                  sx={{
                    width: "70%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    ml: { xs: "10px", md: "0px" },
                  }}
                >
                  <CustomTypography
                    sx={{
                      fontSize: "22px",
                      fontWeight: 600,
                    }}
                  >
                    {rejectCount}
                  </CustomTypography>
                  <CustomTypography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 600,
                    }}
                  >
                    Rejected Applicants
                  </CustomTypography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card
              sx={{
                width: "100%",
                height: "145px",
                borderRadius: "15px",
                boxShadow: "0px 2px 20px rgba(0, 51, 155, 0.2)",
                paddingBottom: "16px !important",
              }}
            >
              <CardContent sx={{ display: "flex" }}>
                <Box
                  sx={{
                    width: "30%",
                    height: "100px",
                    backgroundImage: 'url("/dashbaordcard-circle-bg.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src="/shorlist-applicants-img.png"
                    alt=""
                    height="60"
                    width="50"
                  />
                </Box>
                <Box
                  sx={{
                    width: "70%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    ml: { xs: "10px", md: "0px" },
                  }}
                >
                  <CustomTypography
                    sx={{
                      fontSize: "22px",
                      fontWeight: 600,
                    }}
                  >
                    {shortlistCount}
                  </CustomTypography>
                  <CustomTypography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 600,
                    }}
                  >
                    Shortlisted Applicants
                  </CustomTypography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card
              sx={{
                width: "100%",
                height: "145px",
                borderRadius: "15px",
                boxShadow: "0px 2px 20px rgba(0, 51, 155, 0.2)",
                paddingBottom: "16px !important",
              }}
            >
              <CardContent sx={{ display: "flex" }}>
                <Box
                  sx={{
                    width: "30%",
                    height: "100px",
                    backgroundImage: 'url("/dashbaordcard-circle-bg.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src="/selected-applicants-img.png"
                    alt=""
                    height="60"
                    width="50"
                  />
                </Box>
                <Box
                  sx={{
                    width: "70%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    ml: { xs: "10px", md: "0px" },
                  }}
                >
                  <CustomTypography
                    sx={{
                      fontSize: "22px",
                      fontWeight: 600,
                    }}
                  >
                    0
                  </CustomTypography>
                  <CustomTypography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 600,
                    }}
                  >
                    Successful Applicants
                  </CustomTypography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ mt: 2 }}
        >
          <Card
            sx={{
              width: "100%",
              // height: "215px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
              backgroundImage: 'url("/activejob-bg.svg")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "15px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: "25px",
              }}
            >
              <img
                src="/free-board-sign-icon.svg"
                alt=""
                style={{
                  width: "60px",
                }}
              />
            </Box>
            <CardContent>
              <CustomTypography
                sx={{ color: "white", fontSize: "30px" }}
                variant="h5"
              >
                {freeCount}
              </CustomTypography>
              <CustomTypography variant="body1" sx={{ color: "white" }}>
                Free Jobs
              </CustomTypography>
            </CardContent>
          </Card>
          <Card
            sx={{
              width: "100%",
              // height: "215px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
              backgroundImage: 'url("/inactivejobs-bg.svg")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "15px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: "25px",
              }}
            >
              <img
                src="/projob.svg"
                alt=""
                style={{
                  width: "60px",
                }}
              />
            </Box>
            <CardContent>
              <CustomTypography
                sx={{ color: "white", fontSize: "30px" }}
                variant="h5"
              >
                {proCOunt}
              </CustomTypography>
              <CustomTypography variant="body1" sx={{ color: "white" }}>
                Pro Jobs
              </CustomTypography>
            </CardContent>
          </Card>
          <Card
            sx={{
              width: "100%",
              // height: "235px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
              backgroundImage: 'url("/interviews-bg.svg")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "15px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: "25px",
              }}
            >
              <img
                src="/premiumjob.svg"
                alt=""
                style={{
                  width: "60px",
                }}
              />
            </Box>
            <CardContent>
              <CustomTypography
                sx={{ color: "white", fontSize: "30px" }}
                variant="h5"
              >
                {preCOunt}
              </CustomTypography>
              <CustomTypography variant="body1" sx={{ color: "white" }}>
                Premium Jobs
              </CustomTypography>
            </CardContent>
          </Card>
        </Stack>
        {/* </Grid> */}
        {/* <Grid item xs={12} > */}
        <Box sx={{ width: "100%", mt: "40px" }}>
          <AppBar position="static">
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                variant="fullWidth"
                centered
              >
                <Tab label="Normal Jobs" {...a11yProps(0)} />
                <Tab label="Featured Jobs" {...a11yProps(1)} />
              </Tabs>
            </Box>
          </AppBar>
          <TabPanel id="simple-tab-0" value={value} index={0}>
            <Box sx={{ height: "550px", width: "100%" }}>
              <DataGrid
                sx={{ display: "flex", justifyContent: "center" }}
                getRowId={handleGetRowId}
                rows={rows}
                columns={columns}
              />
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            {enableFeaturedJobs ? (
              <div style={{ height: "550px", width: "100%" }}>
                <DataGrid
                  sx={{ display: "flex", justifyContent: "center" }}
                  getRowId={handleGetRowId}
                  rows={rows2}
                  columns={columns}
                />
              </div>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid rgba(224, 224, 224, 1)",
                  height: "200px",
                }}
              >
                <Typography>
                  {" "}
                  Subscribe Gold/Premium package to get Featured jobs
                </Typography>
              </Box>
            )}
          </TabPanel>
        </Box>
        {/* </Grid> */}
      </Employer>
    </>
  );
};

export default EmpoyerDashboard;
