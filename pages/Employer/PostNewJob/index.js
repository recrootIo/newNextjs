/* eslint-disable no-unused-expressions */
import { Button, Card, CircularProgress, Container, Divider, Grid, List, ListItemButton, Stack } from "@mui/material";
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
import { addJobs, companyJobs, errorJobs, setEditJob, updateJobs } from "@/redux/slices/job";
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
import { useRouter } from "next/navigation";
import { openAlert } from "@/redux/slices/alert";
import { ERROR, SUCCESS } from "@/utils/constants";
import { applyJobsdet, getJobsfil } from "@/redux/slices/applyJobs";
import validator from "@/components/Validator";

function PostnewJob() {
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [apiAddress, setapiAddress] = useState("");
    //   const member = useSelector((state) => state.company.members);
    //   const [memberrole, setMemberrole] = React.useState(member);
  const  { push } = useRouter();
    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };
  let dispatch = useDispatch();

  const final = useSelector((state) => state?.jobs);
  const showq = useSelector((state) => state?.jobs?.queshow);
  const jLoad = useSelector((state) => state?.jobs?.jLoad);
  const packageType = useSelector((state) => state?.jobs?.packageType);

  React.useEffect(() => {
    dispatch(companyJobs());
    dispatch(getCompanyDetails())
      .then((res) => {
        if (res.error !== undefined) {
          res.error.message === "Request failed with status code 401" ||
          "Request failed with status code 403"
            ? dispatch(logout()).then(() => {
                push("/signin", { state: true });
              })
            : push(1);
        } else {
          push(1);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const postJobs = (final) => {
    dispatch(applyJobsdet());
    dispatch(addJobs(final))
      .then((res) => {
        if (res.error !== undefined) {
          res.error.message === "Request failed with status code 401" ||
          "Request failed with status code 403"
            ? dispatch(logout()).then(() => {
                push("/signin", { state: true });
              })
            : "";
        } else {
          if (res.payload.code) {
            if (res.payload.code === 899) {
                dispatch(openAlert({
                    type:ERROR,
                    message:res.payload.message
                }))
              push("/Pricing");
              return;
            }
            dispatch(openAlert({
                type:ERROR,
                message:res.payload.message
            }))
            if (
              res.payload.message ===
              "Subscribe for a pricing plan to activate the job!"
            ) {
              push("/Pricing");
            }
          } else {
            dispatch(openAlert({
                type:SUCCESS,
                message:"Your job has been posted successfully"
            }))
            setTimeout(() => {
              dispatch(getJobsfil()).then(push("/Employer/Dashboard"));
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
            push("/signin", { state: true });
          });
        }
      });
  };
  var Cid = final?._id;
  const handleEdit = () => {
    dispatch(updateJobs({ final, Cid }))
      .then((res) => {
        if (res.error !== undefined) {
          res.error.message === "Request failed with status code 401" ||
          "Request failed with status code 403"
            ? dispatch(logout()).then(() => {
                push("/signin", { state: true });
              })
            : "";
        } else {
          if (res.payload.code === 536) {
            dispatch(openAlert({
                type:ERROR,
                message:res.payload.message
            }))
            return;
          }
          push("/Employer/Dashboard");
          dispatch(openAlert({
            type:SUCCESS,
            message:"Your job has been updated successfully"
        }))
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
  };

 

  function Pages(index, cal) {
    if (cal === "add" && index <= 2) {
      if (index === 0) {
        if(packageType === ""){
            dispatch(openAlert({
                type:ERROR,
                message:"Please choose package type"
            }))
          return
        }
        const obj = validator(final);
        dispatch(errorJobs(validator(final)));
        if (Object.keys(obj).length > 0) {
          return;
        }
        if (final.details.requiredSkill.length === 0) {
            dispatch(openAlert({
                type:ERROR,
                message:"Please Provide Required Skills"
            }))
          return;
        }
        if (isEmpty(final.location)) {
            dispatch(openAlert({
                type:ERROR,
                message:"Please Provide Job Location"
            }))
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
            dispatch(openAlert({
                type:ERROR,
                message:"Please Provide Question And Answer"
            }))
            return;
          }
          setProfiletab({ index: 1, page: <EssentialInformation /> });
        }
        setProfiletab({ index: 1, page: <EssentialInformation /> });
      }
      if (index === 1) {
        if (Object.keys(final.essential).length === 0) {
            dispatch(openAlert({
                type:ERROR,
                message:"Please Fill All Mandotary Details"
            }))
        } else {
          const obj3 = validator(final.essential);
          dispatch(errorJobs(validator(final.essential)));
          if (Object.keys(obj3).length > 0) {
            return;
          }
          const obj2 = validator(final.details);
          dispatch(errorJobs(validator(final.details)));
          if (Object.keys(obj2).length > 0) {
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
//   const location = useLocation();
//   useEffect(() => {
//     if (location.state === true) {
//       setProfiletab({ index: 0, page: <JobDetails /> });
//     }
//   }, [location]);

  const [profiletab, setProfiletab] = useState(
    final?.details?.applicationDeadline !== undefined
      ? { index: 2, page: <JobPreview Pages={PagesTwo} /> }
      : { index: 0, page: <JobDetails /> }
  );

  return (
    <Box>
    <EmployerNavbar />
      <Box
        sx={{
          backgroundImage: 'url("/EmployerDashboardBG.svg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "250px",
        }}
      ></Box>
         <Container>
         <div style={{ position: "relative", top: "-150px" }}>
         <Grid container spacing={2} sx={{ pb: "50px" }}>
         <Grid item xs={2}>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 110,
                  bgcolor: "#034275",
                  borderRadius: "10px",
                  pb: "20px",
                }}
              >
                <List component="nav" aria-label="main mailbox folders">
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                  >
                    <Image src="/empImg.png" alt="" width="40" height="40" />
                  </ListItemButton>
                  <Divider variant="middle" color="gray" />
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                  >
                    <Image src="/home.png" alt="" width="40" height="40" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                  >
                    <Image src="/profile.png" alt="" width="40" height="40" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                  >
                    <Image src="/jobs.png" alt="" width="40" height="40" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 4}
                    onClick={(event) => handleListItemClick(event, 4)}
                  >
                    <Image src="/team.png" alt="" width="40" height="40" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 5}
                    onClick={(event) => handleListItemClick(event, 5)}
                  >
                    <Image src="/convo.png" alt="" width="40" height="40" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 6}
                    onClick={(event) => handleListItemClick(event, 6)}
                  >
                    <Image
                      src="/subscription.png"
                      alt=""
                      width="40"
                      height="40"
                    />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 7}
                    onClick={(event) => handleListItemClick(event, 7)}
                  >
                    <Image src="/myAccount.png" alt="" width="40" height="40" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 8}
                    onClick={(event) => handleListItemClick(event, 8)}
                  >
                    <Image
                      src="/power-icon.png"
                      alt=""
                      width="40"
                      height="40"
                    />
                  </ListItemButton>
                </List>
              </Box>
            </Grid>
            <Grid item xs={10}>
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
    <Card   sx={{
                  width: "100%",
                  backgroundColor: "#F2F8FD",
                  mt: "40px",
                  p: "25px 25px 80px 25px",
                }}
                 variant="outlined">
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
          {profiletab.index === 0 ? 
                        <Button
                        variant="outlined"
                        sx={{ width: "50%", height: "55px" }}
                        disabled
                      >
                        Previous
                      </Button> 
                       : 
                       <Button
                       variant="outlined"
                       sx={{ width: "50%", height: "55px" }}
                       onClick={() => {
                        PagesTwo(profiletab.index, "sub");
                      }}
                     >
                       Previous
                     </Button> }
                     {profiletab.index === 2 ? jLoad === true ? (
             <Button
             variant="contained"
             sx={{
               width: "50%",
               bgcolor: "#015FB1 !important",
               height: "55px",
             }}
            >
              <CircularProgress color="inherit" />
            </Button>) :
           (
            <Button
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
              {(final && final._id) !== undefined || null ? "Save" : "Submit"}
            </Button>
          ) : (
            <Button
              variant="contained"
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
            </Grid>
         </Grid>
         </div>
         </Container>
      {/* <Container> */}
        {/* <div style={{ position: "relative", top: "-150px" }}>
          <Grid container spacing={2} sx={{ pb: "50px" }}>
            <Grid item xs={2}>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 110,
                  bgcolor: "#034275",
                  borderRadius: "10px",
                  pb: "20px",
                }}
              >
                <List component="nav" aria-label="main mailbox folders">
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                  >
                    <Image src="/empImg.png" alt="" width="40" height="40" />
                  </ListItemButton>
                  <Divider variant="middle" color="gray" />
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                  >
                    <Image src="/home.png" alt="" width="40" height="40" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                  >
                    <Image src="/profile.png" alt="" width="40" height="40" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                  >
                    <Image src="/jobs.png" alt="" width="40" height="40" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 4}
                    onClick={(event) => handleListItemClick(event, 4)}
                  >
                    <Image src="/team.png" alt="" width="40" height="40" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 5}
                    onClick={(event) => handleListItemClick(event, 5)}
                  >
                    <Image src="/convo.png" alt="" width="40" height="40" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 6}
                    onClick={(event) => handleListItemClick(event, 6)}
                  >
                    <Image
                      src="/subscription.png"
                      alt=""
                      width="40"
                      height="40"
                    />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 7}
                    onClick={(event) => handleListItemClick(event, 7)}
                  >
                    <Image src="/myAccount.png" alt="" width="40" height="40" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 8}
                    onClick={(event) => handleListItemClick(event, 8)}
                  >
                    <Image
                      src="/power-icon.png"
                      alt=""
                      width="40"
                      height="40"
                    />
                  </ListItemButton>
                </List>
              </Box>
            </Grid>
            <Grid item xs={10}>
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
  
            </Grid>
          </Grid>
        </div> */}
      {/* </Container> */}
    </Box>
  );
}

export default PostnewJob;
