import React, { useCallback } from "react";
import Image from "next/image";
import { Box, Divider, List, ListItemButton, Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectRoute } from "@/redux/slices/companyslice";
import Link from "next/link";
import { useRouter } from "next/router";
import { setEditJob } from "@/redux/slices/job";
import { openAlert } from "@/redux/slices/alert";
import { ERROR, SUCCESS } from "@/utils/constants";
import { logout } from "@/redux/slices/auth";

export default function EmployerSidebar() {
  const background =
    "linear-gradient(90deg, rgba(38, 153, 255, 0.3) 0%, #03E7F4 111.15%);";
  const dispatch = useDispatch();
  // const select = useSelector(data => data.company.selectedRoute)
  const router = useRouter();
  const { pathname } = router;
  const pathSegments = pathname.split("/");
  const select = pathSegments[2];
  const company = useSelector((state) => state.company?.companyDetl);
  const cjobs = useSelector((state) => state.jobs.companyJobs) || [];
  const freePack = company.package?.subscription_package === "Free";
  const freeCount = freePack === true ? 2 - cjobs.length : 0;
  const proCOunt = company?.jobCounts?.proCount;
  const preCOunt = company?.jobCounts?.premiumCount;
  const handleListItemClick = (val) => {
    dispatch(selectRoute(val));
    if (val === "PostNewJob") {
      console.log(company.jobSlot === true, "side");
      if (
        company.jobSlot === true &&
        company.package?.paymentStatus === "Completed"
      ) {
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
            address: [],
            featureType: false,
            queshow: "",
          })
        ).then(
          setTimeout(() => {
            router.push("/Employer/PostNewJob");
          }, 500)
        );
        return;
      }
      // eslint-disable-next-line no-mixed-operators
      if (
        (freeCount === 0 && preCOunt === 0 && proCOunt === 0) ||
        (freeCount === 0 && preCOunt === undefined && proCOunt === undefined)
      ) {
        if (company.package?.subscription_package === undefined) {
          dispatch(
            openAlert({
              type: ERROR,
              message: "Subscribe A Plan To Post A job",
            })
          );
        } else {
          dispatch(
            openAlert({
              type: ERROR,
              message: "Your Job Limit Was Reached!",
            })
          );
        }
        router.push("/Pricing");
        return;
      }
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
          address: [],
          featureType: false,
          queshow: "",
        })
      ).then(
        setTimeout(() => {
          router.push("/Employer/PostNewJob");
        }, 500)
      );
    }
  };
  const logOut = useCallback(() => {
    dispatch(logout()).then(() => {
      router.push("/");
      dispatch(
        openAlert({
          type: SUCCESS,
          message: "You are logged out successfully!",
        })
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
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
          onClick={() => handleListItemClick()}
        >
          <Image src="/empImg.png" alt="" width="40" height="40" />
        </ListItemButton>
        <Divider variant="middle" color="gray" />
        <Link href={"/Employer/Dashboard"}>
          <Tooltip title="Dashboard" placement="right">
            <ListItemButton
              sx={{
                display: "flex",
                justifyContent: "center",
                background: select === "Dashboard" ? background : "",
                height: "65px",
              }}
              onClick={() => handleListItemClick("Dashboard")}
            >
              <Image src="/home.png" alt="" width="40" height="40" />
            </ListItemButton>
          </Tooltip>
        </Link>
        <Tooltip title="Company Profile" placement="right">
          <Link href={"/Employer/CompanyProfile"}>
            <ListItemButton
              sx={{
                display: "flex",
                justifyContent: "center",
                height: "65px",
                background:
                  select === "CompanyProfile" ||
                  select === "Members" ||
                  select === "CompanyPreview"
                    ? background
                    : "",
              }}
              onClick={() => handleListItemClick("CompanyProfile")}
            >
              <Image src="/profile.png" alt="" width="40" height="40" />
            </ListItemButton>
          </Link>
        </Tooltip>
        {/* <Link href={'/Employer/PostNewJob'}> */}
        <Tooltip title="Post New Job" placement="right">
          <ListItemButton
            sx={{
              display: "flex",
              height: "65px",
              justifyContent: "center",
              background: select === "PostNewJob" ? background : "",
            }}
            onClick={() => handleListItemClick("PostNewJob")}
          >
            <Image src="/jobs.png" alt="" width="40" height="40" />
          </ListItemButton>
        </Tooltip>
        {/* </Link> */}
        <Tooltip title="All Applicants" placement="right">
          <Link href={"/Employer/AllApplicants"}>
            <ListItemButton
              sx={{
                display: "flex",
                justifyContent: "center",
                height: "65px",
                background: select === "AllApplicants" ? background : "",
              }}
              onClick={() => handleListItemClick("AllApplicants")}
            >
              <Image src="/team.png" alt="" width="40" height="40" />
            </ListItemButton>
          </Link>
        </Tooltip>
        <Tooltip title="Scheduled Interviews" placement="right">
          <Link href={"/Employer/ScheduledInterviews"}>
            <ListItemButton
              sx={{
                display: "flex",
                justifyContent: "center",
                height: "65px",
                background: select === "ScheduledInterviews" ? background : "",
              }}
              onClick={() => handleListItemClick("ScheduledInterviews")}
            >
              <Image src="/convo.png" alt="" width="40" height="40" />
            </ListItemButton>
          </Link>
        </Tooltip>
        <Tooltip title="Subscription" placement="right">
          <Link href={"/Employer/Subscription"}>
            <ListItemButton
              sx={{ display: "flex", justifyContent: "center", height: "65px" }}
              onClick={() => handleListItemClick()}
            >
              <Image src="/subscription.png" alt="" width="40" height="40" />
            </ListItemButton>
          </Link>
        </Tooltip>
        <Tooltip title="My Account" placement="right">
          <Link href={"/Employer/MyAccount"}>
            <ListItemButton
              sx={{ display: "flex", justifyContent: "center", height: "65px" }}
              onClick={() => handleListItemClick()}
            >
              <Image src="/myAccount.png" alt="" width="40" height="40" />
            </ListItemButton>
          </Link>
        </Tooltip>
        <Tooltip title="Logout" placement="right">
          <ListItemButton
            sx={{ display: "flex", justifyContent: "center", height: "65px" }}
            onClick={logOut}
          >
            <Image src="/power-icon.png" alt="" width="40" height="40" />
          </ListItemButton>
        </Tooltip>
      </List>
    </Box>
  );
}
