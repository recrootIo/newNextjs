"use client";

import {
  Box,
  Collapse,
  Container,
  Drawer,
  Grid,
  ListItemButton,
  ListItemText,
  Stack,
  styled,
} from "@mui/material";
import React, { useEffect } from "react";
import List from "@mui/material/List";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Profile from "@/components/Candidates/Profile/Profile";
import Certifications from "@/components/Candidates/Certifications/Certifications";
import CandidateJobs from "@/components/Candidates/CandidateJobs/CandidateJobs";

import { useDispatch, useSelector } from "react-redux";
import { GetCandsPrefInfo, retrievePersonal } from "@/redux/slices/personal";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AddResume from "@/components/Candidates/Profile/AddResume/AddResume";
import AddEducation from "@/components/Candidates/Profile/Education/AddEducation";
import AddExperience from "@/components/Candidates/Profile/Experience/AddExperience";
import AddSkill from "@/components/Candidates/Profile/AddSkill/AddSkill";
import AddProjects from "@/components/Candidates/Certifications/AddProjects/AddProjects";
import EditPersonalDetails from "@/components/Candidates/Profile/PersonalDetails/EditPersonalDetails";
import AddTraining from "@/components/Candidates/Certifications/AddTraining/AddTraining";
import AddCertificates from "@/components/Candidates/Certifications/AddCertificates/AddCertificates";
import UpdatePassword from "@/components/Candidates/UpdatePassword/UpdatePassword";
import { updateCurrentScreen } from "@/redux/slices/candidate";
import AddCareerPreference from "@/components/Candidates/AddCareerPreference/AddCareerPreference";
import Navbar from "@/components/Navbar/Navbar";
import CandidateProfileHeader from "@/components/Candidates/CandidateProfileHeader/CandidateProfileHeader";
import { useRouter } from "next/router";
import { logout } from "@/redux/slices/auth";
import { openAlert } from "@/redux/slices/alert";
const StyledListItemText = styled(ListItemText)`
  & .MuiTypography-root {
    font-family: Inter;
    font-weight: 900;
  }
`;

const Index = () => {
  const router = useRouter();
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("User"));
    if (user === null) {
      router.push('/')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  const [profile, setProfile] = React.useState(true);
  const [certification, setCertification] = React.useState(true);
  const [jobs, setJobs] = React.useState(true);
  const { data } = useSelector((state) => state?.personal);
  const { currentScreen } = useSelector((state) => state?.candidate);
  // const { data = {} } = useSelector((state) => state?.personal);

  const dispatch = useDispatch();

  const handleClick = () => {
    setProfile(!profile);
  };

  const handleCertification = () => {
    setCertification(!certification);
  };

  const handleJobs = () => {
    setJobs(!jobs);
  };

  const gotToScreens = (screen) => {
    dispatch(updateCurrentScreen(screen));
  };

  useEffect(() => {
    dispatch(retrievePersonal());
    dispatch(GetCandsPrefInfo());
  }, [dispatch]);

  const logouts = () => {
    dispatch(logout()).then(() => {
     router.push("/signin", { state: true });
      dispatch(
        openAlert({
          type: SUCCESS,
          message: "Successfully Logged out",
        })
      );
    });
  };

  const getPages = () => {
    if (currentScreen === "resume") {
      return <AddResume />;
    }
    if (currentScreen === "personalDetails") {
      return <EditPersonalDetails />;
    }
    if (currentScreen === "education") {
      return <AddEducation />;
    }
    if (currentScreen === "experience") {
      return <AddExperience />;
    }
    if (currentScreen === "skill") {
      return <AddSkill />;
    }
    if (currentScreen === "projects") {
      return <AddProjects />;
    }
    if (currentScreen === "training") {
      return <AddTraining />;
    }
    if (currentScreen === "certificates") {
      return <AddCertificates />;
    }
    if (currentScreen === "updatePassword") {
      return <UpdatePassword />;
    }
    if (currentScreen === "careerPreference") {
      return <AddCareerPreference />;
    }

    return (
      <Stack className="scrollbarm" id="style-2" sx={{ gap: "30px" }}>
        <Profile {...data} />
        <Certifications />
        <CandidateJobs {...data} />
      </Stack>
    );
  };

  const menuList = () => {
    return (
      <>
        <Box sx={{ width: "100%" }}>
          <List
            sx={{
              width: "100%",
              backgroundColor: "#5CA9E814",
              borderRadius: "10px 10px 0px 0px",
              padding: "15px",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <Stack
              alignItems={"flex-end"}
              sx={{
                margin: "15px 0",
                display: { md: "none", lg: "node", sm: "flex", xs: "flex" },
              }}
            >
              <CloseIcon onClick={() => handleDrawerToggle()} />
            </Stack>

            <ListItemButton onClick={handleClick}>
              <StyledListItemText primary="My Profile" />
              {profile ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={profile} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Resume" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Personal details" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Education" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Experience" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Skills" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton onClick={handleCertification}>
              <StyledListItemText primary="Other Certification" />
              {certification ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={certification} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Projects" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Trainings" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Certification" />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton onClick={handleJobs}>
              <StyledListItemText primary="Jobs" />
              {certification ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={jobs} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Applied Jobs" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Saved Jobs" />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton onClick={() => gotToScreens("careerPreference")}>
              <StyledListItemText primary="Career Preference" />
            </ListItemButton>
            <ListItemButton onClick={() => gotToScreens("updatePassword")}>
              <StyledListItemText primary="Update Password" />
            </ListItemButton>
            <ListItemButton onClick={() => logouts()}>
              <StyledListItemText primary="Log Out" />
            </ListItemButton>
          </List>
        </Box>
      </>
    );
  };

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div>
      <Navbar />
      <CandidateProfileHeader {...data} />
      <Container>
        <Grid
          container
          spacing={2}
          sx={{ padding: { md: "20px", xs: "20px 3px" } }}
        >
          <Grid
            item
            md={4}
            sx={{ display: { md: "flex", xs: "none", sm: "none" } }}
          >
            {menuList()}
          </Grid>
          <Grid
            item
            md={8}
            xs={12}
            sm={12}
            sx={{ height: "100vh", overflowY: "auto" }}
          >
            <MenuIcon
              fontSize="large"
              onClick={() => handleDrawerToggle()}
              sx={{
                margin: "20px 0 20px 11px",
                display: { md: "none", sm: "flex", xs: "flex" },
              }}
            />

            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {menuList()}
            </Drawer>

            {getPages()}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default React.memo(Index);
