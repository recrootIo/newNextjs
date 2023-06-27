/* eslint-disable no-unused-expressions */
import {
  Backdrop,
  Button,
  Card,
  CircularProgress,
  Container,
  Divider,
  Grid,
  List,
  ListItemButton,
  Stack,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
// import { Jobdetails } from "./Jobdetails";
// import { EssentialInfo } from "./EssentialInfo";
import { useSelector, useDispatch } from "react-redux";
// import { PreviewJob } from "./PreviewJob
// import { addJobs, companyJobs, errorJobs, updateJobs } from "../slices/job";
// import { applyJobsdet, getJobsfil } from "../slices/applyJobs";
// import { logout } from "../slices/auth";
// import { getCompanyDetails } from "../slices/companyslice";
import { useEffect } from "react";
import { isEmpty } from "lodash";
import {
  addJobs,
  addJobsNew,
  addJobsNewPre,
  companyJobs,
  errorJobs,
  getfreeCount,
  setEditJob,
  setpremium,
  singleJobs,
  updateJobs,
  upgradejob,
} from "@/redux/slices/job";
// import JobDetails from "./JobDetails/jobDetails";
import EmployerNavbar from "@/components/EmployerNavbar/EmployerNavbar";
import Image from "next/image";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import JobDetails from "./JobDetails";
import EssentialInformation from "./EssentialInformation";
import JobPreview from "./JobPreview";
import { BOLD } from "@/theme/fonts";
import { getCompanyDetails } from "@/redux/slices/companyslice";
import { logout } from "@/redux/slices/auth";
// import { useRouter } from "next/navigation";
import { openAlert } from "@/redux/slices/alert";
import { ERROR, SUCCESS } from "@/utils/constants";
import { applyJobsdet, getJobsfil } from "@/redux/slices/applyJobs";
import validator from "@/components/Validator";
import Employer from "..";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Chooseplan from "./ChoosePlan";
import { updateCurrentScreen } from "@/redux/slices/candidate";

function PostnewJob() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [apiAddress, setapiAddress] = useState("");
  //   const member = useSelector((state) => state.company.members);
  //   const [memberrole, setMemberrole] = React.useState(member);
  // const  { router.push } = useRouter();
  const router = useRouter();
  const { jid } = router.query;
  useEffect(() => {
    if (jid) {
      dispatch(singleJobs(jid));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jid]);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  let dispatch = useDispatch();

  const final = useSelector((state) => state?.jobs);
  console.log(final, "u");
  const showq = useSelector((state) => state?.jobs?.queshow);
  const jLoad = useSelector((state) => state?.jobs?.jLoad);
  const packageType = useSelector((state) => state?.jobs?.packageType);
  const companyDet = useSelector((state) => state.company.companyDetl);
  const full = useSelector((state) => state.jobs.packageType);

  const scrollToElement = (section) => {
    dispatch(updateCurrentScreen(""));
    let element = null;

    if (section === "add_jobtitle") {
      element = document.getElementById("add_jobtitle");
      element.scrollIntoView({
        behavior: "smooth",
      });
      // setMobileOpen(false);
      return;
    }

    if (section === "add_packageType") {
      element = document.getElementById("add_packageType");
      element.scrollIntoView({
        behavior: "smooth",
      });
      // setMobileOpen(false);
      return;
    }

    if (section === "add_jobskills") {
      element = document.getElementById("add_jobskills");
      element.scrollIntoView({
        behavior: "smooth",
      });
      // setMobileOpen(false);
      return;
    }

    if (section === "add_joblocation") {
      element = document.getElementById("add_joblocation");
      element.scrollIntoView({
        behavior: "smooth",
      });
      // setMobileOpen(false);
      return;
    }

    if (section === "screening_ques") {
      element = document.getElementById("screening_ques");
      element.scrollIntoView({
        behavior: "smooth",
      });
      // setMobileOpen(false);
      return;
    }
  };

  React.useEffect(() => {
    dispatch(companyJobs());
    dispatch(getfreeCount());
    dispatch(getCompanyDetails())
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
            : "";
        } else {
          ("");
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const country = Cookies.get("country");

  const postJobs = () => {
    dispatch(applyJobsdet());
    if (
      (companyDet?.jobSlotGold === true && full === "jSlot") ||
      companyDet?.package?.subscription_package === "SuperEmployer" ||
      country === "LK"
    ) {
      dispatch(addJobs(final))
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
              : "";
          } else {
            if (res.payload.code) {
              if (res.payload.code === 899) {
                dispatch(
                  openAlert({
                    type: ERROR,
                    message: res.payload.message,
                  })
                );
                router.push("/Pricing");
                return;
              }
              dispatch(
                openAlert({
                  type: ERROR,
                  message: res.payload.message,
                })
              );
              if (
                res.payload.message ===
                "Subscribe for a pricing plan to activate the job!"
              ) {
                router.push("/Pricing");
              }
            } else {
              dispatch(
                openAlert({
                  type: SUCCESS,
                  message: "Your job has been posted successfully",
                })
              );
              setTimeout(() => {
                dispatch(getJobsfil()).then(router.push("/Employer/Dashboard"));
              }, 500);
            }
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
    } else {
      dispatch(addJobsNew(final))
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
              : "";
          } else {
            if (res.payload.code) {
              if (res.payload.code === 500) {
                dispatch(
                  openAlert({
                    type: ERROR,
                    message: res.payload.message,
                  })
                );
                return;
              }
              dispatch(
                openAlert({
                  type: ERROR,
                  message: res.payload.message,
                })
              );
              if (
                res.payload.message ===
                "Subscribe for a pricing plan to activate the job!"
              ) {
                router.push("/Pricing");
              }
            } else {
              dispatch(
                openAlert({
                  type: SUCCESS,
                  message: "Your job has been posted successfully",
                })
              );
              setTimeout(() => {
                dispatch(getJobsfil()).then(router.push("/Employer/Dashboard"));
              }, 500);
            }
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
    }
  };
  var Cid = final?._id;
  const handleEdit = () => {
    dispatch(updateJobs({ final, Cid }))
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
            : "";
        } else {
          if (res.payload.code === 536) {
            dispatch(
              openAlert({
                type: ERROR,
                message: res.payload.message,
              })
            );
            return;
          }
          router.push("/Employer/Dashboard");
          dispatch(
            openAlert({
              type: SUCCESS,
              message: "Your job has been updated successfully",
            })
          );
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
  };

  console.log(final, "quest");
  function Pages(index, cal) {
    console.log(index);
    if (index === -1) {
      setProfiletab({ index: 0, page: <JobDetails /> });
      return;
    }
    if (cal === "add" && index <= 2) {
      if (index === 0) {
        if (country === "LK") {
          if (packageType === "") {
            scrollToElement("add_packageType");
            dispatch(
              openAlert({
                type: ERROR,
                message: "Please Choose A Plan",
              })
            );
            return;
          }
        }
        const obj = validator(final);
        dispatch(errorJobs(validator(final)));
        if (Object.keys(obj).length > 0) {
          return;
        }
        if (final.jobRole.length === 0) {
          scrollToElement("add_jobtitle");
          return;
        }
        if (final.details.requiredSkill.length === 0) {
          scrollToElement("add_jobskills");
          dispatch(
            openAlert({
              type: ERROR,
              message: "Please Provide Required Skills",
            })
          );
          return;
        }
        if (isEmpty(final.location)) {
          dispatch(
            openAlert({
              type: ERROR,
              message: "Please Provide Job Location",
            })
          );
          scrollToElement("add_joblocation");
          return;
        }
        if (showq === "") {
          scrollToElement("screening_ques");
          dispatch(
            openAlert({
              type: ERROR,
              message: "Please Select An Option For Screening Questions",
            })
          );
          return;
        }
        if (showq === "true") {
          var arryMem = final.question.map((mem) => {
            if (mem.questions === "" || mem.preferedAns === "") {
              return false;
            }
            return null;
          });
          if (arryMem.includes(false) === true) {
            dispatch(
              openAlert({
                type: ERROR,
                message: "Please Provide Question And Answer",
              })
            );
            return;
          }
          setProfiletab({ index: 1, page: <EssentialInformation /> });
        }
        setProfiletab({ index: 1, page: <EssentialInformation /> });
      }
      if (index === 1) {
        if (Object.keys(final.essential).length === 0) {
          dispatch(
            openAlert({
              type: ERROR,
              message: "Please Fill All Mandotary Details",
            })
          );
        } else {
          const obj3 = validator(final.essential);
          dispatch(errorJobs(validator(final.essential)));
          if (Object.keys(obj3).length > 0) {
            dispatch(
              openAlert({
                type: ERROR,
                message: "Please Fill All Mandotary Details",
              })
            );
            return;
          }
          const obj2 = validator(final.details);
          dispatch(errorJobs(validator(final.details)));
          if (Object.keys(obj2).length > 0) {
            return;
          }
          if (final.details.notice === undefined) {
            dispatch(
              openAlert({
                type: ERROR,
                message: "Provide Notice Period",
              })
            );
            return;
          }
          if (final.details.salary === undefined) {
            setProfiletab({ index: 2, page: <JobPreview Pages={PagesTwo} /> });
          }
          if (final.details.salary.salaryType === "noprovide") {
            setProfiletab({ index: 2, page: <JobPreview Pages={PagesTwo} /> });
          }
          if (!Object.values(final.details.salary).some((v) => v) === false) {
            const obj2 = validator(final.details.salary);
            dispatch(errorJobs(validator(final.details.salary)));
            if (Object.keys(obj2).length > 0) {
              return;
            }
          }
          setProfiletab({ index: 2, page: <JobPreview Pages={PagesTwo} /> });
        }
      }
      if (index === 2) {
        const obj3s = validator(final.essential);
        if (Object.keys(obj3s).length > 0) {
          dispatch(
            openAlert({
              type: ERROR,
              message: "Please Fill All Mandotary Details",
            })
          );
          return;
        }
        setProfiletab({
          index: 3,
          page: (
            <Chooseplan
              postJobs={postJobs}
              Pages={PagesTwo}
              postPremJobs={postPremJobs}
            />
          ),
        });
      }
    }
  }
  const PagesTwo = (index, cal) => {
    if (cal === "sub" && index > 0) {
      setProfiletab({ index: --index });
    }
    switch (index) {
      case 0:
        setProfiletab({ index: index, page: <JobDetails /> });
        break;
      case 1:
        setProfiletab({ index: index, page: <EssentialInformation /> });
        break;

      case 2:
        setProfiletab({ index: index, page: <JobPreview Pages={PagesTwo} /> });
        break;
      default:
        setProfiletab({ index: index, page: "" });
        break;
    }
  };

  const [profiletab, setProfiletab] = useState(
    final?.details?.applicationDeadline !== undefined
      ? { index: 2, page: <JobPreview Pages={PagesTwo} /> }
      : { index: 0, page: <JobDetails /> }
  );
  const [open, setopen] = useState(false);
  console.log(final, "final");
  const postPremJobs = () => {
    setopen(true);
    localStorage.setItem("jobDetail", JSON.stringify(final));
    setopen(false), router.push("/Employer/Jobpayment?pre=true");
  };

  const steps =
    (companyDet?.jobSlotGold === true && full === "jSlot") ||
    companyDet?.package?.subscription_package === "SuperEmployer" ||
    country === "LK" ||
    Cid !== undefined
      ? ["Job Details", "Essential Information", "Preview"]
      : ["Job Details", "Essential Information", "Preview", "Choose Payment"];
  return (
    <Employer>
      <Box>
        <Card
          sx={{
            width: "100%",
            backgroundColor: "#F2F8FD",
            mt: "40px",
            p: "25px 25px 80px 25px",
            backgroundImage: `url("/company-profile-elements-bg.svg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          variant="outlined"
          id="top"
        >
          {console.log(profiletab.index, "index")}
          <Box sx={{ width: "fit-content", margin: "auto", mb: 3 }}>
            <Stepper activeStep={profiletab.index} alternativeLabel>
              {steps.map((label, index) => (
                <Step
                  onClick={() => {
                    Pages(index - 1, "add");
                  }}
                  key={label}
                >
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
          {profiletab.index === profiletab.index + 0 ? profiletab.page : ""}
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
            {profiletab.index === 0 ? (
              <Button
                variant="outlined"
                sx={{ width: "50%", height: "55px" }}
                disabled
              >
                Previous
              </Button>
            ) : (
              <Button
                variant="outlined"
                sx={{ width: "50%", height: "55px" }}
                onClick={() => {
                  PagesTwo(profiletab.index, "sub");
                }}
              >
                Previous
              </Button>
            )}
            {profiletab.index === 2 ? (
              jLoad === true ? (
                <Button
                  variant="contained"
                  sx={{
                    width: "50%",
                    bgcolor: "#015FB1 !important",
                    height: "55px",
                  }}
                >
                  <CircularProgress color="inherit" />
                </Button>
              ) : (companyDet?.jobSlotGold === true && full === "jSlot") ||
                companyDet?.package?.subscription_package === "SuperEmployer" ||
                country === "LK" ||
                Cid !== undefined ? (
                <Button
                  className="nextButton"
                  variant="contained"
                  sx={{
                    width: "50%",
                    bgcolor: "#015FB1 !important",
                    height: "55px",
                  }}
                  onClick={
                    (final && final._id) !== undefined || null
                      ? () => {
                          handleEdit();
                        }
                      : () => {
                          postJobs(final);
                        }
                  }
                >
                  {(final && final._id) !== undefined || null
                    ? "Save"
                    : "Submit"}
                </Button>
              ) : (
                <Button
                  variant="contained"
                  className="nextButton"
                  onClick={() => {
                    Pages(profiletab.index, "add");
                    dispatch(setpremium(true));
                  }}
                  sx={{
                    width: "50%",
                    bgcolor: "#015FB1 !important",
                    height: "55px",
                  }}
                >
                  Next
                </Button>
              )
            ) : profiletab.index === 3 ? (
              ""
            ) : (
              <Button
                variant="contained"
                className="nextButton"
                onClick={() => {
                  Pages(profiletab.index, "add");
                }}
                sx={{
                  width: "50%",
                  bgcolor: "#015FB1 !important",
                  height: "55px",
                }}
              >
                Next
              </Button>
            )}
          </Stack>
        </Card>
      </Box>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={() => {
          setopen(false);
        }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Employer>
  );
}

export default PostnewJob;
