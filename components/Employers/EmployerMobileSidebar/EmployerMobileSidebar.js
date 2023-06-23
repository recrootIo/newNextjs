import React, { useCallback } from "react";
import Image from "next/image";
import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Tooltip,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectRoute } from "@/redux/slices/companyslice";
import Link from "next/link";
import { useRouter } from "next/router";
import { setEditJob } from "@/redux/slices/job";
import { openAlert } from "@/redux/slices/alert";
import { ERROR, SUCCESS } from "@/utils/constants";
import { logout } from "@/redux/slices/auth";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import ApartmentIcon from "@mui/icons-material/Apartment";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import GroupsIcon from "@mui/icons-material/Groups";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";

const EmployerMobileSidebar = ({ setIsDrawerOpen }) => {
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
        maxWidth: 260,
        bgcolor: "#034275",
        borderRadius: "10px",
        pb: "50px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          height: "150px",
          p: "10px",
        }}
      >
        <CloseIcon
          sx={{ color: "white" }}
          onClick={() => setIsDrawerOpen(false)}
        />
      </Box>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
          sx={{ display: "flex", justifyContent: "center", height: "80px" }}
          onClick={() => handleListItemClick()}
        >
          <Image src="/empImg.png" alt="" width="40" height="40" />
        </ListItemButton>
        <Divider variant="middle" color="gray" />
        <Link href={"/Employer/Dashboard"} className={"Dashboard"}>
          <ListItemButton
            sx={{
              display: "flex",
              justifyContent: "center",
              background: select === "Dashboard" ? background : "",
            }}
            onClick={() => handleListItemClick("Dashboard")}
          >
            <ListItemIcon>
              <HomeIcon sx={{ color: "#03d3fc" }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" sx={{ color: "white" }} />
          </ListItemButton>
        </Link>
        <Link href={"/Employer/CompanyProfile"}>
          <ListItemButton
            sx={{
              display: "flex",
              justifyContent: "center",
              background:
                select === "CompanyProfile" ||
                select === "Members" ||
                select === "CompanyPreview"
                  ? background
                  : "",
            }}
            onClick={() => handleListItemClick("CompanyProfile")}
          >
            <ListItemIcon>
              <ApartmentIcon sx={{ color: "#03d3fc" }} />
            </ListItemIcon>
            <ListItemText primary="Company Profile" sx={{ color: "white" }} />
          </ListItemButton>
        </Link>
        <ListItemButton
          sx={{
            display: "flex",
            justifyContent: "center",
            background: select === "PostNewJob" ? background : "",
          }}
          onClick={() => handleListItemClick("PostNewJob")}
        >
          <ListItemIcon>
            <NewspaperIcon sx={{ color: "#03d3fc" }} />
          </ListItemIcon>
          <ListItemText primary="Post New Job" sx={{ color: "white" }} />
        </ListItemButton>
        <Link href={"/Employer/AllApplicants"}>
          <ListItemButton
            sx={{
              display: "flex",
              justifyContent: "center",
              background: select === "AllApplicants" ? background : "",
            }}
            onClick={() => handleListItemClick("AllApplicants")}
          >
            <ListItemIcon>
              <GroupsIcon sx={{ color: "#03d3fc" }} />
            </ListItemIcon>
            <ListItemText primary="All Applicants" sx={{ color: "white" }} />
          </ListItemButton>
        </Link>
        <Link href={"/Employer/ScheduledInterviews"}>
          <ListItemButton
            sx={{
              display: "flex",
              justifyContent: "center",
              background: select === "ScheduledInterviews" ? background : "",
            }}
            onClick={() => handleListItemClick("ScheduledInterviews")}
          >
            <ListItemIcon>
              <ContactMailIcon sx={{ color: "#03d3fc" }} />
            </ListItemIcon>
            <ListItemText
              primary="Scheduled Interviews"
              sx={{ color: "white" }}
            />
          </ListItemButton>
        </Link>
        <Link href={"/Employer/Subscription"}>
          <ListItemButton
            sx={{ display: "flex", justifyContent: "center" }}
            onClick={() => handleListItemClick()}
          >
            <ListItemIcon>
              <LocalAtmIcon sx={{ color: "#03d3fc" }} />
            </ListItemIcon>
            <ListItemText primary="Subscription" sx={{ color: "white" }} />
          </ListItemButton>
        </Link>
        <Link href={"/Employer/MyAccount"}>
          <ListItemButton
            sx={{ display: "flex", justifyContent: "center" }}
            onClick={() => handleListItemClick()}
          >
            <ListItemIcon>
              <AccountBoxOutlinedIcon sx={{ color: "#03d3fc" }} />
            </ListItemIcon>
            <ListItemText primary="My Account" sx={{ color: "white" }} />
          </ListItemButton>
        </Link>
        <ListItemButton
          sx={{ display: "flex", justifyContent: "center" }}
          onClick={logOut}
        >
          <ListItemIcon>
            <PowerSettingsNewOutlinedIcon sx={{ color: "#03d3fc" }} />
          </ListItemIcon>
          <ListItemText primary="Logout" sx={{ color: "white" }} />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default EmployerMobileSidebar;
