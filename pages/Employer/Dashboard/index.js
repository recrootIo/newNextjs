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
  styled,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
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
  CheckBox,
} from "@mui/icons-material";
import { useEffect } from "react";
import { useState } from "react";
import Cookies from "js-cookie";
import {
  applyJobsdet,
  applyJobsdetFilter,
  getJobsfil,
  seeAll,
} from "@/redux/slices/applyJobs";
import { logout } from "@/redux/slices/auth";
import {
  addCandidatesRequest,
  getCandidatesRequest,
  getCompanyDetails,
  getapplCount,
} from "@/redux/slices/companyslice";
import {
  companyJobs,
  getfreeCount,
  jobId,
  setEditJob,
  upgradejob,
} from "@/redux/slices/job";
import { getSchedules } from "@/redux/slices/interviewslice";
import moment from "moment";
import { capitalizeFirstLetter } from "@/utils/HelperFunctions";
import axios from "axios";
import { openAlert } from "@/redux/slices/alert";
import { ERROR, SUCCESS } from "@/utils/constants";
import dynamic from "next/dynamic";
import Employer from "../../../components/pages/index";
import { useRouter } from "next/navigation";

const DatagridClient = dynamic(
  () => import("../../../components/Employers/DatagridClient"),
  {
    ssr: false,
  }
);

import http from "@/redux/http-common";
import styles from "../../../components/Employers/styles.module.css";
import companyservice from "@/redux/services/company.service";
import { isEmpty } from "lodash";
// import { useRouter } from "next/router";
const Tour = dynamic(() => import("reactour"), { ssr: false });

const BasicButton = styled(Button)({
  color: "#ffff",
  padding: "15px",
  borderRadius: "10px",
  border: "2px solid #e7eaef",
  background: "#4fa9ff !important",
  textTransform: "capitalize",
  // width: "50%",
  marginBottom: "10px",
  marginTop: "15px",
});
const BasicButtonUp = styled(Button)({
  color: "#ffff",
  padding: "15px",
  borderRadius: "10px",
  background: "#4fa9ff !important",
  textTransform: "capitalize",
  // width: "50%",
  marginBottom: "10px",
  marginTop: "15px",
  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
});

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
    axios.get("https://ipapi.co/json/").then((response) => {
      Cookies.set("country", response.data?.country);
    });
    dispatch(applyJobsdet())
      .then((res) => {
        if (res.error !== undefined) {
          res.error.message === "Request failed with status code 401" ||
          "Request failed with status code 403"
            ? dispatch(logout()).then(() => {
                push(
                  {
                    pathname: "/signin",
                    query: { name: "session" },
                  },
                  "/signin"
                );
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
            push(
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

  const [isTourOpen, setTourOpen] = React.useState(false);

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
  useEffect(() => {
    const job = JSON.parse(localStorage.getItem("jobDetail"));
    if (!isEmpty(job)) {
      localStorage.removeItem("jobDetail");
    }
  });
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
    premium: nam.premium,
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
    premium: nam.premium,
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
  const [premium, setpremium] = useState("");

  const handleIdJob = (parms) => {
    setJobid(parms.id);
    setpackType(parms?.row?.packType);
    setpremium(parms?.row?.premium);
    dispatch(jobId(parms.id));
  };

  useEffect(() => {
    http.get(`/getfreeJobs/${company?._id}`).then((res) => {
      setsectors(res.data?.data);
    });
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
  }, [company?._id, dispatch]);

  const handleEdit = () => {
    dispatch(setEditJob(names.filter((i) => i._id === jobid)[0])).then(
      setTimeout(() => {
        push(`/Employer/postNewJob?jid=${jobid}`);
      }, 500)
    );
  };

  const user = Cookies.get();

  const handleAppilcants = (params) => {
    // const details = {
    //   page: 1,
    //   status: [],
    //   jobid: params?.id,
    // };
    // dispatch(seeAll({ jobId: params?.id, state: true }));
    // dispatch(applyJobsdetFilter(details)).then(
    //   setTimeout(() => {
    push(
      `/Employer/AllApplicants?jid=${params?.id}&title=${params.row?.title}&page=1`,
      {
        state: true,
      }
    );
    //   }, 500)
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
            push(
              {
                pathname: "/signin",
                query: { name: "session" },
              },
              "/signin"
            );
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
      push(`/Employer/candiDatabase?id=${jobid}`);
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

  const handleUpgrade = (parms) => {
    Cookies.set("jids", JSON.stringify([parms.id]));
    dispatch(upgradejob([parms.id]));
    push("/Employer/jobpayment");
  };

  const columns = [
    { field: "_id", headerName: "Job", width: 60 },
    {
      // field: "status",
      headerName: "Upgrade",
      width: 100,
      renderCell: (parms) => (
        <>
          <Button
            sx={{ textTransform: "capitalize", color: "green" }}
            onClick={() => {
              handleClose2();
              handleUpgrade(parms?.row);
            }}
          >
            Upgrade
          </Button>
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
            {/* <Menu
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
            </Menu> */}
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
                Edit Job
              </MenuItem>
              {/* <MenuItem
                onClick={() => {
                  handleClose2();
                  handleAppilcants();
                }}
                value="applicNTS"
              >
                See Applicants
              </MenuItem> */}

              {packType === null ? (
                ""
              ) : (
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
              )}
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
              {/* <MenuItem
                onClick={() => {
                  handleClose();
                  handleAppilcants();
                }}
                value="applicNTS"
              >
                See Applicants
              </MenuItem> */}

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
              {premium === false ? (
                ""
              ) : isValuePresentInArray(requestJobs, jobid) === true ? "": (
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
    {
      field: "applicants",
      headerName: "Applicants",
      width: 130,
      renderCell: (parms) => (
        <>
          <Button
            variant="outlined"
            onClick={() => {
              handleClose();
              handleAppilcants(parms);
            }}
          >
            View
          </Button>
        </>
      ),
    },
    {
      field: "status",
      headerName: "Status",
      width: 80,
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
    { field: "title", headerName: "Title", width: 260 },
    // {
    //   field: "jobtype",
    //   headerName: "Job type",
    //   width: 130,
    // },
    // {
    //   field: "Location",
    //   headerName: "Location",
    //   width: 130,
    // },
    {
      field: "posteddate",
      headerName: "Posted date",
      width: 120,
    },
    {
      field: "deadline",
      headerName: "Deadline",
      width: 120,
    },
    {
      field: "packType",
      headerName: "Package Type",
      width: 120,
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
            : parms?.row?.premium === false
            ? "Free"
            : parms?.row?.premium === true
            ? "Premium"
            : "N/A"}
        </p>
      ),
    },
  ];

  const updatedColumns = columns.filter(
    (column) => column.headerName !== "Upgrade"
  );

  const handleGetRowId = (e) => {
    return e.id;
  };

  // eslint-disable-next-line no-mixed-operators

  const enableFeaturedJobs =
    // eslint-disable-next-line no-mixed-operators
    company?.package?.subscription_package === "SuperEmployer" ||
    company?.jobCounts?.premiumPayment === "Completed" ||
    company?.package?.subscription_package === "Gold" ||
    company?.jobSlotGold === true ||
    user?.country === "IN";

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

  const [open1, setOpen1] = React.useState(false);
  const [sectors, setsectors] = useState([]);
  const handleClickOpen = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    if (freejobs?.length > 0) {
      Cookies.set("jids", JSON.stringify(freejobs));
      dispatch(upgradejob(freejobs)).then(push("/employer/jobpayment"));
    }
    setOpen1(false);
  };
  const [freejobs, setfreejobs] = useState([]);
  const selectJobs = (e) => {
    const { value, checked } = e.target;
    let newJobs = freejobs;
    if (checked) {
      setfreejobs([...new Set([...freejobs, value])]);
      newJobs.push(value);
    } else {
      newJobs = freejobs.filter((arr) => value != arr);
      setfreejobs(() => [...newJobs]);
    }
  };

  const closeTour = () => {
    setTourOpen(false);
    updateValue();
  };

  const updateValue = async () => {
    const companyService = new companyservice();
    await companyService.updateTourValue({ home: false });
  };

  const tourConfig = [
    {
      selector: ".welcome",
      style: {
        color: "black",
        maxWidth: "500px",
      },
      navDotAriaLabel: "12345",
      content: ({ goTo }) => (
        <Card variant="outlined" sx={{ border: "0" }}>
          <CardContent>
            <Stack
              sx={{
                gap: "10px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src="/welcome.png"
                width={250}
                height={250}
                alt=""
                priority={true}
              />
              <CustomTypography sx={{ fontSize: "20px", fontWeight: "900" }}>
                Hi {user?.firstName}, Welcome to Recroot!
              </CustomTypography>
              <CustomTypography>
                Lets get started a quick website tour. This&apos;ll take no more
                than a few minutes
              </CustomTypography>

              <CustomTypography>Are you ready? Let&apos;s go</CustomTypography>
              <Button onClick={() => closeTour()}>SKIP</Button>
            </Stack>
          </CardContent>
        </Card>
      ),
    },
    {
      selector: ".Dashboard",
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
            Here, you can view and manage your created jobs!
          </CustomTypography>
          <Button onClick={() => closeTour()}>SKIP</Button>
        </Stack>
      ),
    },
    {
      selector: ".companyProfile",
      content: (
        <Stack
          sx={{
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomTypography>
            You can highlight company information in this dedicated section.
          </CustomTypography>
          <Button onClick={() => closeTour()}>SKIP</Button>
        </Stack>
      ),
      style: {
        color: "black",
      },
    },
    {
      selector: ".postNewJob",
      content: (
        <Stack
          sx={{
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomTypography>
            You can post job listings to attract candidates here.
          </CustomTypography>
          <Button onClick={() => closeTour()}>SKIP</Button>
        </Stack>
      ),
      style: {
        color: "black",
      },
    },
    {
      selector: ".allApplicants",
      content: (
        <Stack
          sx={{
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomTypography>
            You can manage applications received for your job listings on this
            page
          </CustomTypography>
          <Button onClick={() => closeTour()}>SKIP</Button>
        </Stack>
      ),
      style: {
        color: "black",
      },
    },
    {
      selector: ".interview",
      content: (
        <Stack
          sx={{
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomTypography>
            Upcoming interviews scheduled with applicants can be viewed here.
          </CustomTypography>
          <Button onClick={() => closeTour()}>SKIP</Button>
        </Stack>
      ),
      style: {
        color: "black",
      },
    },
    {
      selector: ".subscription",
      content: (
        <Stack
          sx={{
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomTypography>
            You can manage subscription plans and billing details on this page.
          </CustomTypography>
          <Button onClick={() => closeTour()}>SKIP</Button>
        </Stack>
      ),
      style: {
        color: "black",
      },
    },
    {
      selector: ".account",
      content: (
        <Stack
          sx={{
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomTypography>
            This section allows you to update your account information
          </CustomTypography>
          <Button
            sx={{ backgroundColor: "#1976d2 !important" }}
            variant="contained"
            onClick={() => closeTour()}
          >
            Done
          </Button>
        </Stack>
      ),
      style: {
        color: "black",
      },
    },
  ];

  const accentColor = "#5cb7b7";

  useEffect(() => {
    setTourOpen(() => company?.tours?.home);
  }, [company?.tours?.home]);

  return (
    <>
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

      <Employer>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
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

        {user.country !== "LK" ? (
          sectors?.length > 0 ? (
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <BasicButtonUp
                onClick={() => {
                  handleClickOpen();
                }}
              >
                Upgrade To Premium
              </BasicButtonUp>
            </Box>
          ) : (
            ""
          )
        ) : (
          ""
        )}

        {user?.country === "LK" ? (
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ mt: 2 }}
          >
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
        ) : (
          ""
        )}

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
                <Tab
                  label="Normal Jobs"
                  {...a11yProps(0)}
                  sx={{
                    color: value !== 0 ? "white" : "initial",
                  }}
                />

                <Tab
                  label="Featured Jobs"
                  {...a11yProps(1)}
                  sx={{
                    color: value !== 1 ? "white" : "initial",
                  }}
                />
              </Tabs>
            </Box>
          </AppBar>

          <TabPanel id="simple-tab-0" value={value} index={0}>
            <Box sx={{ height: "550px", width: "100%" }}>
              <DatagridClient
                sx={{ display: "flex", justifyContent: "center" }}
                getRowId={handleGetRowId}
                rows={rows}
                columns={user?.country === "LK" ? updatedColumns : columns}
              />
            </Box>
          </TabPanel>

          <TabPanel value={value} index={1}>
            {enableFeaturedJobs ? (
              <DatagridClient
                value={value}
                index={1}
                getRowId={handleGetRowId}
                rows={rows2}
                columns={updatedColumns}
              />
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
                  Subscribe Gold/Premium package to get Featured jobs
                </Typography>
              </Box>
            )}
          </TabPanel>
        </Box>

        <Dialog
          open={open1}
          onClose={handleClose1}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          fullWidth
        >
          <DialogTitle id="alert-dialog-title">
            {"Upgrade Free Jobs To Premium"}
          </DialogTitle>
          <DialogContent>
            <Box
              sx={{
                border: "1px solid grey",
                borderRadius: "8px",
                padding: "10px",
              }}
            >
              <FormControl sx={{ m: 1 }} fullWidth>
                <FormLabel component="legend">Jobs List</FormLabel>
                <FormGroup>
                  {sectors?.map((sec, index) => (
                    <FormControlLabel
                      key={index}
                      sx={{ width: "fit-content" }}
                      control={
                        <Checkbox
                          checked={freejobs.includes(sec?._id)}
                          onChange={(e) => {
                            selectJobs(e);
                          }}
                          name={sec?.jobRole}
                          value={sec?._id}
                        />
                      }
                      label={`${sec?.jobRole} (${moment(sec?.createdAt).format(
                        "LL"
                      )})`}
                    />
                  ))}
                  {/* {sectors.map((sec, index) => (
        <FormLabel
          key={index}
          control={<CheckBox
            size="small"
            // checked={selectedSector.includes(sec)}
            name={sec?.jobRole}
            // onChange={handleSector}
             />}
          label={sec?.jobRole} />
      ))} */}
                </FormGroup>
              </FormControl>
            </Box>
          </DialogContent>
          <DialogActions>
            <BasicButton
              sx={{ p: "5px !important", m: "0 !important" }}
              onClick={() => {
                setOpen1(false);
              }}
              autoFocus
            >
              Cancel
            </BasicButton>
            <BasicButton
              sx={{ p: "5px !important", m: "0 !important" }}
              onClick={handleClose1}
              autoFocus
            >
              Upgrade
            </BasicButton>
          </DialogActions>
        </Dialog>
      </Employer>
    </>
  );
};
export default dynamic(() => Promise.resolve(EmpoyerDashboard), { ssr: false });
