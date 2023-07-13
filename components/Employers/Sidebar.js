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
import { styled } from "@mui/system";
import Cookies from "js-cookie";

const HoverListItemButton = styled(ListItemButton)`
  display: flex;
  justify-content: center;
  height: 65px;
  transition: transform 0.2s, font-size 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export default function EmployerSidebar() {
  const dispatch = useDispatch();
  // const select = useSelector(data => data.company.selectedRoute)
  const router = useRouter();
  const { pathname } = router;
  const { push } = router;
  const pathSegments = pathname.split("/");
  const select = pathSegments[2];
  const company = useSelector((state) => state.company?.companyDetl);
  const cjobs = useSelector((state) => state.jobs.companyJobs) || [];
  const freePack = company.package?.subscription_package === "Free";
  const freeCount = freePack === true ? 2 - cjobs.length : 0;
  const proCOunt = company?.jobCounts?.proCount;
  const preCOunt = company?.jobCounts?.premiumCount;
  const user = Cookies.get();

  const handleListItemClick = (val) => {
    dispatch(selectRoute(val));
    if (val === "PostNewJob") {
      if (
        user?.country === "LK" ||
        (company.jobSlot === true &&
          company.package?.paymentStatus === "Completed")
      ) {
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
              mandatorySkill: [],
              address: [],
              featureType: false,
              queshow: "false",
            })
          ).then(push("/Employer/PostNewJob"));
          return;
        }
        // eslint-disable-next-line no-mixed-operators
        if (
          (freeCount === 0 && preCOunt === 0) ||
          (freeCount === 0 && preCOunt === undefined)
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
          push("/Pricing");
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
            mandatorySkill: [],
            address: [],
            featureType: false,
            queshow: "false",
            packageType: "",
          })
        ).then(push("/Employer/PostNewJob"));
      } else {
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
            mandatorySkill: [],
            address: [],
            featureType: false,
            queshow: "false",
          })
        ).then(push("/Employer/PostNewJob"));
      }
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
        {/* <ListItemButton
          sx={{ display: "flex", justifyContent: "center" }}
          onClick={() => handleListItemClick()}
        >
          <Image src="/empImg.png" alt="" width="40" height="40" />
        </ListItemButton>
        <Divider variant="middle" color="gray" /> */}

        <Link href={"/Employer/Dashboard"} className={"Dashboard"}>
          <Tooltip title="Dashboard" placement="right">
            <HoverListItemButton
              sx={{
                background:
                  select === "dashboard"
                    ? "linear-gradient(90deg, rgba(38, 153, 255, 0.3) 0%, #03E7F4 111.15%);"
                    : "",
              }}
              onClick={() => handleListItemClick("Dashboard")}
            >
              <Image src="/home.png" alt="" width="40" height="40" />
            </HoverListItemButton>
          </Tooltip>
        </Link>

        <Tooltip
          title="Company Profile"
          placement="right"
          className="companyProfile"
        >
          <Link href={"/Employer/CompanyProfile"}>
            <HoverListItemButton
              sx={{
                background:
                  select === "companyProfile"
                    ? "linear-gradient(90deg, rgba(38, 153, 255, 0.3) 0%, #03E7F4 111.15%);"
                    : "",
              }}
              onClick={() => handleListItemClick("CompanyProfile")}
            >
              <Image src="/profile.png" alt="" width="40" height="40" />
            </HoverListItemButton>
          </Link>
        </Tooltip>

        <Tooltip title="Post New Job" placement="right" className="postNewJob">
          <HoverListItemButton
            sx={{
              background:
                select === "postNewJob"
                  ? "linear-gradient(90deg, rgba(38, 153, 255, 0.3) 0%, #03E7F4 111.15%);"
                  : "",
            }}
            onClick={() => handleListItemClick("PostNewJob")}
          >
            <Image src="/jobs.png" alt="" width="40" height="40" />
          </HoverListItemButton>
        </Tooltip>
        {/* 
        <Tooltip
          title="All Applicants"
          placement="right"
          className="allApplicants"
        >
          <Link href={"/Employer/allApplicants?SeeAll=all"}>
            <HoverListItemButton
              sx={{
                background:
                  select === "allApplicants"
                    ? "linear-gradient(90deg, rgba(38, 153, 255, 0.3) 0%, #03E7F4 111.15%);"
                    : "",
              }}
              onClick={() => handleListItemClick("AllApplicants")}
            >
              <Image src="/team.png" alt="" width="40" height="40" />
            </HoverListItemButton>
          </Link>
        </Tooltip> */}

        <Tooltip
          title="Scheduled Interviews"
          placement="right"
          className="interview"
        >
          <Link href={"/Employer/ScheduledInterviews"}>
            <HoverListItemButton
              sx={{
                background:
                  select === "scheduledInterviews"
                    ? "linear-gradient(90deg, rgba(38, 153, 255, 0.3) 0%, #03E7F4 111.15%);"
                    : "",
              }}
              onClick={() => handleListItemClick("ScheduledInterviews")}
            >
              <Image src="/convo.png" alt="" width="40" height="40" />
            </HoverListItemButton>
          </Link>
        </Tooltip>

        <Tooltip
          title="Subscription"
          placement="right"
          className="subscription"
        >
          <Link href={"/Employer/Subscription"}>
            <HoverListItemButton
              sx={{
                background:
                  select === "subscription"
                    ? "linear-gradient(90deg, rgba(38, 153, 255, 0.3) 0%, #03E7F4 111.15%);"
                    : "",
              }}
              onClick={() => handleListItemClick("Subscription")}
            >
              <Image src="/subscription.png" alt="" width="40" height="40" />
            </HoverListItemButton>
          </Link>
        </Tooltip>

        <Tooltip title="My Account" placement="right" className="account">
          <Link href={"/Employer/MyAccount"}>
            <HoverListItemButton
              sx={{
                background:
                  select === "myAccount"
                    ? "linear-gradient(90deg, rgba(38, 153, 255, 0.3) 0%, #03E7F4 111.15%);"
                    : "",
              }}
              onClick={() => handleListItemClick("MyAccount")}
            >
              <Image src="/myAccount.png" alt="" width="40" height="40" />
            </HoverListItemButton>
          </Link>
        </Tooltip>

        <Tooltip title="Logout" placement="right">
          <HoverListItemButton onClick={logOut}>
            <Image src="/power-icon.png" alt="" width="40" height="40" />
          </HoverListItemButton>
        </Tooltip>
      </List>
    </Box>
  );
}
