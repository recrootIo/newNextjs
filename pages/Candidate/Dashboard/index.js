import { BOLD } from "@/theme/fonts";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Container,
  Divider,
  Grid,
  ListItemButton,
  ListItemText,
  Stack,
  styled,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import List from "@mui/material/List";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Profile from "@/components/Candidates/Profile/Profile";
import Certifications from "@/components/Candidates/Certifications/Certifications";
import CandidateJobs from "@/components/Candidates/CandidateJobs/CandidateJobs";
import CandidateProfileHeader from "@/pages/candiProfileHeader";
import { useDispatch, useSelector } from "react-redux";
import { retrievePersonal } from "@/redux/slices/personal";
import AddResume from "@/pages/profile/addResume";

const StyledListItemText = styled(ListItemText)`
  & .MuiTypography-root {
    font-family: Inter;
    font-weight: 900;
  }
`;

const Index = () => {
  const [profile, setProfile] = React.useState(true);
  const [certification, setCertification] = React.useState(true);
  const [jobs, setJobs] = React.useState(true);
  const { data = {} } = useSelector((state) => state?.personal);
  const { currentScreen } = useSelector((state) => state?.candidate);

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

  useEffect(() => {
    dispatch(retrievePersonal());
  }, [dispatch]);

  const getPages = () => {
    if (currentScreen === "resume") {
      return <AddResume />;
    } else {
      return (
        <Stack sx={{ gap: "30px" }}>
          <Profile {...data} />
          <Certifications />
          <CandidateJobs {...data} />
        </Stack>
      );
    }
  };

  return (
    <div>
      <CandidateProfileHeader {...data} />
      <Container>
        <Grid container spacing={2} sx={{ padding: "20px" }}>
          <Grid item md={4}>
            <Box>
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

                <ListItemButton>
                  <StyledListItemText primary="Career Preference" />
                </ListItemButton>
                <ListItemButton>
                  <StyledListItemText primary="Update Password" />
                </ListItemButton>
                <ListItemButton>
                  <StyledListItemText primary="Log Out" />
                </ListItemButton>
              </List>
            </Box>
          </Grid>
          <Grid item md={8}>
            {getPages()}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default React.memo(Index);
