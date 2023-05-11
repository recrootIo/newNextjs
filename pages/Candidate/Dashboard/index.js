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
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import UploadIcon from "@mui/icons-material/Upload";
import CreateIcon from "@mui/icons-material/Create";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { DANGER, NEUTRAL } from "@/theme/colors";
import { LAZY, MID } from "@/theme/spacings";
import DeleteIcon from "@mui/icons-material/Delete";
import LinearProgress from "@mui/material/LinearProgress";
import CustomizedSteppers from "@/ui-components/CustomStpper/CustomStepper";
import List from "@mui/material/List";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Profile from "@/components/Candidates/Profile/Profile";
import Certifications from "@/components/Candidates/Certifications/Certifications";
import CandidateJobs from "@/components/Candidates/CandidateJobs/CandidateJobs";
import CandidateProfileHeader from "@/pages/candiProfileHeader";

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

  const handleClick = () => {
    setProfile(!profile);
  };

  const handleCertification = () => {
    setCertification(!certification);
  };

  const handleJobs = () => {
    setJobs(!jobs);
  };

  return (
    <div>
      <CandidateProfileHeader />
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
            <Stack sx={{ gap: "30px" }}>
              <Profile />
              <Certifications />
              <CandidateJobs />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Index;
