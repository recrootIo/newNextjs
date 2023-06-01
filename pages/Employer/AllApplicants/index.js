"use client";
import React, { useState } from "react";
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
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Divider,
  Switch,
  FormControlLabel,
  InputAdornment,
  TextField,
  FormHelperText,
  FormGroup,
  OutlinedInput,
  IconButton,
  Chip,
  Menu,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import WorkIcon from "@mui/icons-material/Work";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { BOLD } from "@/theme/fonts";
import EmployerNavbar from "@/components/EmployerNavbar/EmployerNavbar";
import Image from "next/image";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import styles from "./allApplicants.module.css";
import AllApplicantsCard from "@/components/Employers/AllApplicantsCard/AllApplicantsCard";

const AllApplicants = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickStatus = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
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
                  All applicants
                </CustomTypography>
              </Box>
              <Card
                sx={{
                  width: "100%",
                  backgroundColor: "#F2F8FD",
                  mt: "40px",
                  p: "25px 25px 80px 25px",
                }}
              >
                <CardContent>
                  <Box>
                    <Stack direction="row" spacing={2}>
                      <Card className={styles.allApplicantsCard}>
                        <CardContent sx={{ pb: "16px !important" }}>
                          <CustomTypography
                            className={styles.allApplicantsCardTypo}
                            variant="h5"
                          >
                            Total Applicants
                          </CustomTypography>
                          <CustomTypography
                            className={styles.allApplicantsCardNum}
                            variant="h5"
                          >
                            23
                          </CustomTypography>
                        </CardContent>
                      </Card>
                      <Card className={styles.allApplicantsCard}>
                        <CardContent sx={{ pb: "16px !important" }}>
                          <CustomTypography
                            className={styles.allApplicantsCardTypo}
                            variant="h5"
                          >
                            Total Shortlisted
                          </CustomTypography>
                          <CustomTypography
                            className={styles.allApplicantsCardNum}
                            variant="h5"
                          >
                            23
                          </CustomTypography>
                        </CardContent>
                      </Card>
                      <Card className={styles.allApplicantsCard}>
                        <CardContent sx={{ pb: "16px !important" }}>
                          <CustomTypography
                            className={styles.allApplicantsCardTypo}
                            variant="h5"
                          >
                            Total Not Viewed
                          </CustomTypography>
                          <CustomTypography
                            className={styles.allApplicantsCardNum}
                            variant="h5"
                          >
                            23
                          </CustomTypography>
                        </CardContent>
                      </Card>
                      <Card className={styles.allApplicantsCard}>
                        <CardContent sx={{ pb: "16px !important" }}>
                          <CustomTypography
                            className={styles.allApplicantsCardTypo}
                            variant="h5"
                          >
                            Total Rejected
                          </CustomTypography>
                          <CustomTypography
                            className={styles.allApplicantsCardNum}
                            variant="h5"
                          >
                            23
                          </CustomTypography>
                        </CardContent>
                      </Card>
                    </Stack>
                    <Divider
                      sx={{ mt: "30px", mb: "30px", borderColor: "#D4F0FC" }}
                    />
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{ mb: "30px", width: "50%" }}
                    >
                      <Button
                        id="demo-customized-button"
                        aria-controls={
                          open ? "demo-customized-menu" : undefined
                        }
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        variant="contained"
                        disableElevation
                        // onClick={handleClick}
                        endIcon={<WorkIcon />}
                        sx={{ bgcolor: "#1097CD !important", width: "50%" }}
                      >
                        Filter by Jobs
                      </Button>
                      <Menu
                        id="demo-customized-menu"
                        MenuListProps={{
                          "aria-labelledby": "demo-customized-button",
                        }}
                        disablePortal={true}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        sx={{ maxHeight: "400px" }}
                      >
                        <List
                          sx={{
                            width: "100%",
                            maxWidth: 360,
                            bgcolor: "background.paper",
                          }}
                        >
                          {/* {output.map((variant) => { */}
                          {/* const labelId = `checkbox-list-label-$
                          {variant.jobRole}`; return ( */}
                          <ListItem
                            //key={variant.jobRole}
                            disablePadding
                          >
                            <ListItemButton
                              role={undefined}
                              //onClick={() => handleName(variant)}
                              dense
                            >
                              <ListItemIcon>
                                <Checkbox
                                  edge="start"
                                  // checked={
                                  //   titles.findIndex(
                                  //     (item) => item.jobRole === variant.jobRole
                                  //   ) >= 0
                                  // }
                                  disableRipple
                                  // inputProps={{
                                  //   "aria-labelledby": labelId,
                                  // }}
                                />
                              </ListItemIcon>
                              <ListItemText
                              // id={labelId}
                              //primary={variant?.jobRole}
                              />
                            </ListItemButton>
                          </ListItem>
                          {/* ); */}
                          {/* })} */}
                        </List>
                      </Menu>
                      <Button
                        endIcon={<BeenhereIcon />}
                        //onClick={handleClickStatus}
                        id="demo-customized-button"
                        // aria-controls={
                        //   open2 ? "demo-customized-menu" : undefined
                        // }
                        aria-haspopup="true"
                        //aria-expanded={open2 ? "true" : undefined}
                        variant="contained"
                        disableElevation
                        //aria-describedby={id1}
                        sx={{ bgcolor: "#1097CD !important", width: "50%" }}
                      >
                        Filter By status
                      </Button>
                      <Menu
                        id="demo-customized-menu"
                        MenuListProps={{
                          "aria-labelledby": "demo-customized-button",
                        }}
                        anchorEl={anchorEl1}
                        //open={open2}
                        onClose={handleClose1}
                        disablePortal={true}
                      >
                        {/* {EMPLOYEE_STATUS.map((variant) => ( */}
                        <MenuItem
                          //key={variant}
                          sx={{ zIndex: 10001, width: "200px" }}
                        >
                          <Checkbox
                          // checked={
                          //   selectedStatus.findIndex(
                          //     (item) => item === variant
                          //   ) >= 0
                          // }
                          // onClick={(e) => handleNameStatus(e, variant)}
                          />
                          <ListItemText
                            //primary={variant}
                            sx={{ textTransform: "capitalize" }}
                          />
                        </MenuItem>
                        {/* ))} */}
                      </Menu>
                    </Stack>

                    <Stack direction="row" spacing={2}>
                      <Chip
                        label="Deletable"
                        onDelete={handleDelete}
                        sx={{ bgcolor: "#1097CD", color: "white" }}
                      />
                      <Chip
                        label="Deletable"
                        onDelete={handleDelete}
                        sx={{ bgcolor: "#D4F0FC" }}
                      />
                    </Stack>
                    <Stack spacing={2} sx={{ mt: "20px" }}>
                      <AllApplicantsCard />
                      <AllApplicantsCard />
                      <AllApplicantsCard />
                      <AllApplicantsCard />
                      <AllApplicantsCard />
                      <AllApplicantsCard />
                      <AllApplicantsCard />
                    </Stack>
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

export default AllApplicants;
