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
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
  Divider,
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { BOLD } from "@/theme/fonts";
import EmployerNavbar from "@/components/EmployerNavbar/EmployerNavbar";
import PropTypes from "prop-types";

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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
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
        <div style={{ position: "absolute", top: "150px" }}>
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
              <Stack direction="row" spacing={2}>
                <Card
                  sx={{
                    width: "100%",
                    // height: "215px",
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
                      src="/active-jobs.png"
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
                      0/00
                    </CustomTypography>
                    <CustomTypography variant="body1" sx={{ color: "white" }}>
                      Active Jobs
                    </CustomTypography>
                  </CardContent>
                </Card>
                <Card
                  sx={{
                    width: "100%",
                    // height: "215px",
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
                      src="/inactive-jobs.png"
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
                      0/00
                    </CustomTypography>
                    <CustomTypography variant="body1" sx={{ color: "white" }}>
                      Inactive Jobs
                    </CustomTypography>
                  </CardContent>
                </Card>
                <Card
                  sx={{
                    width: "100%",
                    height: "235px",
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
                      src="/interviews.png"
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
                      0/00
                    </CustomTypography>
                    <CustomTypography variant="body1" sx={{ color: "white" }}>
                      Interviews
                    </CustomTypography>
                  </CardContent>
                </Card>
              </Stack>
              <Grid container spacing={3} sx={{ mt: "40px" }}>
                <Grid item xs={6}>
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
                      <Box sx={{ width: "30%" }}>
                        <img
                          src="/dashbaordcard-circle-bg.png"
                          alt=""
                          style={{ width: "100px", height: "100px" }}
                        />
                      </Box>
                      <Box
                        sx={{
                          width: "70%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
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
                          Total Applicants
                        </CustomTypography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6}>
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
                      <Box sx={{ width: "30%" }}>
                        <img
                          src="/dashbaordcard-circle-bg.png"
                          alt=""
                          style={{ width: "100px", height: "100px" }}
                        />
                      </Box>
                      <Box
                        sx={{
                          width: "70%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
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
                          Total Applicants
                        </CustomTypography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6}>
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
                      <Box sx={{ width: "30%" }}>
                        <img
                          src="/dashbaordcard-circle-bg.png"
                          alt=""
                          style={{ width: "100px", height: "100px" }}
                        />
                      </Box>
                      <Box
                        sx={{
                          width: "70%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
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
                          Total Applicants
                        </CustomTypography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6}>
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
                      <Box sx={{ width: "30%" }}>
                        <img
                          src="/dashbaordcard-circle-bg.png"
                          alt=""
                          style={{ width: "100px", height: "100px" }}
                        />
                      </Box>
                      <Box
                        sx={{
                          width: "70%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
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
                          Total Applicants
                        </CustomTypography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ width: "100%" }}>
              <AppBar position="static">
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    variant="fullWidth"
                    centered
                  >
                    <Tab label="Normal Jobs" {...a11yProps(0)} />
                    <Tab label="Featured Jobs" {...a11yProps(1)} />
                  </Tabs>
                </Box>
              </AppBar>
              <TabPanel value={value} index={0}>
                {/* <TableContainer component={Paper} sx={{ p: 0 }}> */}
                <Table
                  sx={{ minWidth: 650, backgroundColor: "#F2F8FD", p: 0 }}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>Job</TableCell>
                      <TableCell align="right">Title</TableCell>
                      <TableCell align="right">Job Type</TableCell>
                      <TableCell align="right">Location</TableCell>
                      <TableCell align="right">Posted Date</TableCell>
                      <TableCell align="right">Deadline</TableCell>
                      <TableCell align="right">Status</TableCell>
                      <TableCell align="right">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                {/* </TableContainer> */}
              </TabPanel>
              <TabPanel value={value} index={1}>
                Item Two
              </TabPanel>
            </Box>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default EmpoyerDashboard;
