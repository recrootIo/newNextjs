"use client";
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
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  AppBar,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
  Divider,
  Switch,
  FormControlLabel,
  InputAdornment,
  TextField,
  IconButton,
  Avatar,
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import BoyIcon from "@mui/icons-material/Boy";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { BOLD } from "@/theme/fonts";
import EmployerNavbar from "@/components/EmployerNavbar/EmployerNavbar";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { styles } from "@/components/Employers/CompanyProfile/CompanyProfileStyle";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import EditorToolbar, {
  modules,
  formats,
} from "@/components/EditorToolbar/EditorToolbar";
// import ReactQuill from "react-quill";
import dynamic from "next/dynamic";
import "./companyPreview.module.css";
import { useSelector } from "react-redux";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <CustomTypography>{children}</CustomTypography>
        </Box>
      )}
    </div>
  );
}

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

//Table
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const EmpoyerDashboard = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  //   const member = useSelector((state) => state.company.members);
  //   const [memberrole, setMemberrole] = React.useState(member);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleAddInput = () => {
    setMemberrole([
      ...memberrole,
      { id: uuidv4(), memberId: "", role: "", fname: "" },
    ]);
  };

  return (
    <>
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
        <div
        //style={{ position: "absolute" }}
        >
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
                    <img src="/empImg.png" alt="" />
                  </ListItemButton>
                  <Divider variant="middle" color="gray" />
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                  >
                    <img src="/home.png" alt="" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                  >
                    <img src="/profile.png" alt="" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                  >
                    <img src="/jobs.png" alt="" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 4}
                    onClick={(event) => handleListItemClick(event, 4)}
                  >
                    <img src="/team.png" alt="" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 5}
                    onClick={(event) => handleListItemClick(event, 5)}
                  >
                    <img src="/convo.png" alt="" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 6}
                    onClick={(event) => handleListItemClick(event, 6)}
                  >
                    <img src="/subscription.png" alt="" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 7}
                    onClick={(event) => handleListItemClick(event, 7)}
                  >
                    <img src="/myAccount.png" alt="" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ display: "flex", justifyContent: "center" }}
                    selected={selectedIndex === 8}
                    onClick={(event) => handleListItemClick(event, 8)}
                  >
                    <img src="/power-icon.png" alt="" />
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
                  Hello User
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
              <Stack direction="row" spacing={7}>
                <Card
                  sx={{
                    width: "100%",
                    height: "190px",
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
                      src="/basic-info-img.png"
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
                      Basic Info
                    </CustomTypography>
                  </CardContent>
                </Card>
                <Card
                  sx={{
                    width: "100%",
                    height: "190px",
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
                      src="/members-img.png"
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
                      Members
                    </CustomTypography>
                  </CardContent>
                </Card>
                <Card
                  sx={{
                    width: "100%",
                    height: "190px",
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
                      src="/preview-img.png"
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
                      Preview
                    </CustomTypography>
                  </CardContent>
                </Card>
              </Stack>
              <Card
                variant="outlined"
                sx={{
                  width: "100%",
                  backgroundColor: "#F2F8FD",
                  mt: "40px",
                  pb: "80px",
                  boder: "none",
                }}
              >
                <CardContent>
                  <Box sx={{ backgroundColor: "#D4F0FC", padding: "20px" }}>
                    <Box
                      sx={{
                        height: "300px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          height: "270px",
                          width: "270px",
                          border: "5px solid rgba(2, 169, 247, 0.6)",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Avatar
                          alt="Remy Sharp"
                          src="/profile.png"
                          sx={{ height: "228px", width: "228px" }}
                        />
                      </Box>
                    </Box>
                    <Box>
                      <CustomTypography
                        variant="subtitle2"
                        className="PreviewTypo"
                        gutterBottom
                      >
                        <EmailOutlinedIcon className="PreviewIcon" />
                        &nbsp;&nbsp;loremIpsum@lorem.com
                      </CustomTypography>
                      <Divider variant="middle" />
                    </Box>
                    <Box>
                      <CustomTypography
                        variant="subtitle2"
                        className="PreviewTypo"
                        gutterBottom
                      >
                        <PhoneOutlinedIcon className="PreviewIcon" />
                        &nbsp;&nbsp;+91 00000-00000
                      </CustomTypography>
                      <Divider variant="middle" />
                    </Box>
                    <Box>
                      <CustomTypography
                        variant="subtitle2"
                        className="PreviewTypo"
                        gutterBottom
                      >
                        <PlaceOutlinedIcon className="PreviewIcon" />
                        &nbsp;&nbsp;Location
                      </CustomTypography>
                      <Divider variant="middle" />
                    </Box>
                    <Box>
                      <CustomTypography
                        variant="subtitle2"
                        className="PreviewTypo"
                        gutterBottom
                      >
                        <LanguageOutlinedIcon className="PreviewIcon" />
                        &nbsp;&nbsp;www.loremipsum.com
                      </CustomTypography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
              <Card
                sx={{
                  mt: "20px",
                  bgcolor: "#D4F0FC",
                  borderRadius: "10px",
                  ml: "16px",
                  mr: "16px",
                }}
              >
                <CardContent>
                  <Box>
                    <CustomTypography
                      variant="subtitle2"
                      className="PreviewTypo"
                      gutterBottom
                    >
                      <BoyIcon className="PreviewIcon" />
                      &nbsp;&nbsp;loremIpsum@lorem.com
                    </CustomTypography>
                    <Divider variant="middle" />
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <CustomTypography
                      variant="subtitle2"
                      className="PreviewTypoRole"
                      sx={{ width: "50%" }}
                      gutterBottom
                    >
                      <BoyIcon className="PreviewIcon" />
                      &nbsp;&nbsp;Member Name
                    </CustomTypography>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <CustomTypography
                      variant="subtitle2"
                      className="PreviewTypo"
                      gutterBottom
                    >
                      &nbsp;&nbsp;Role
                    </CustomTypography>
                  </Box>
                </CardContent>
              </Card>
              <Card
                sx={{
                  mt: "20px",
                  bgcolor: "#D4F0FC",
                  borderRadius: "10px",
                  ml: "16px",
                  mr: "16px",
                }}
              >
                <CardContent>
                  <Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <img
                        src="/outlined-linkedin.png"
                        alt=""
                        style={{ height: "18px" }}
                      />
                      <CustomTypography
                        variant="subtitle2"
                        className="PreviewTypo"
                        gutterBottom
                      >
                        &nbsp;&nbsp;&nbsp;loremIpsum@lorem.com
                      </CustomTypography>
                    </Box>
                    <Divider variant="middle" />
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="/outlined-insta.png"
                      alt=""
                      style={{ height: "28px" }}
                    />
                    <CustomTypography
                      variant="subtitle2"
                      className="PreviewTypo"
                      gutterBottom
                    >
                      &nbsp;&nbsp;loremIpsum@lorem.com
                    </CustomTypography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default EmpoyerDashboard;
