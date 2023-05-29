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
  Divider,
  Avatar,
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import FactoryOutlinedIcon from "@mui/icons-material/FactoryOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import BoyIcon from "@mui/icons-material/Boy";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { BOLD } from "@/theme/fonts";
import EmployerNavbar from "@/components/EmployerNavbar/EmployerNavbar";
import PropTypes from "prop-types";
import styles from "./companyPreview.module.css";

const CompanyPreview = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  //   const member = useSelector((state) => state.company.members);
  //   const [memberrole, setMemberrole] = React.useState(member);

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
              <CustomTypography
                sx={{
                  color: "#034275",
                  fontSize: "30px",
                  width: "100%",
                  textAlign: "center",
                  mt: "80px",
                  mb: "160px",
                  fontFamily: BOLD,
                }}
                variant="h5"
              >
                Preview
              </CustomTypography>
              <Card
                variant="outlined"
                sx={{
                  width: "100%",
                  backgroundColor: "#F2F8FD",
                  pb: "80px",
                  boder: "none",
                  overflow: "visible",
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      backgroundColor: "#D4F0FC",
                      padding: "20px",
                      borderRadius: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        height: "300px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                        top: "-220px",
                        mt: "80px",
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
                          backgroundColor: "white",
                        }}
                      >
                        <Avatar
                          alt="Remy Sharp"
                          src=""
                          sx={{ height: "228px", width: "228px" }}
                        />
                      </Box>
                      <CustomTypography
                        className={styles.comapnyNameTypo}
                        variant="h5"
                      >
                        Lorem Ipsum Pvt. Ltd
                      </CustomTypography>
                    </Box>
                    <Box className={styles.PreviewTypoBox}>
                      <EmailOutlinedIcon className={styles.PreviewIcon} />
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.PreviewTypo}
                      >
                        &nbsp;&nbsp;loremIpsum@lorem.com
                      </CustomTypography>
                    </Box>
                    <Divider />
                    <Box className={styles.PreviewTypoBox}>
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.PreviewTypo}
                      >
                        <PhoneOutlinedIcon className={styles.PreviewIcon} />
                        &nbsp;&nbsp;+91 00000-00000
                      </CustomTypography>
                    </Box>
                    <Divider />
                    <Box className={styles.PreviewTypoBox}>
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.PreviewTypo}
                      >
                        <PlaceOutlinedIcon className={styles.PreviewIcon} />
                        &nbsp;&nbsp;Location
                      </CustomTypography>
                    </Box>
                    <Divider />
                    <Box className={styles.PreviewTypoBox}>
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.PreviewTypo}
                      >
                        <LanguageOutlinedIcon className={styles.PreviewIcon} />
                        &nbsp;&nbsp;www.loremipsum.com
                      </CustomTypography>
                    </Box>
                  </Box>
                  <Box className={styles.PreviewTypoContainer}>
                    <Box className={styles.PreviewTypoBox}>
                      <FactoryOutlinedIcon className={styles.PreviewIcon} />
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.PreviewTypo}
                      >
                        &nbsp;&nbsp;&nbsp;Industry
                      </CustomTypography>
                    </Box>
                    <Divider />
                    <Box className={styles.PreviewTypoBox}>
                      <ErrorOutlineOutlinedIcon
                        className={styles.PreviewIcon}
                      />
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.PreviewCompanyDescriptionTypo}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.loremIpsum@lorem.com
                      </CustomTypography>
                    </Box>
                  </Box>
                  <Box className={styles.PreviewTypoContainer}>
                    <Box className={styles.PreviewTypoBox}>
                      <BoyIcon className={styles.PreviewIcon} />
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.PreviewTypo}
                        sx={{ width: "50%" }}
                      >
                        &nbsp;&nbsp;Member Name
                      </CustomTypography>
                      <Divider
                        orientation="vertical"
                        variant="middle"
                        flexItem
                      />
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.PreviewTypo}
                      >
                        &nbsp;&nbsp;Role
                      </CustomTypography>
                    </Box>
                    <Divider />
                    <Box className={styles.PreviewTypoBox}>
                      <BoyIcon className={styles.PreviewIcon} />
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.PreviewTypo}
                        sx={{ width: "50%" }}
                      >
                        &nbsp;&nbsp;Member Name
                      </CustomTypography>
                      <Divider
                        orientation="vertical"
                        variant="middle"
                        flexItem
                      />
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.PreviewTypo}
                      >
                        &nbsp;&nbsp;Role
                      </CustomTypography>
                    </Box>
                  </Box>
                  <Box className={styles.PreviewTypoContainer}>
                    <Box className={styles.PreviewTypoBox}>
                      <img
                        src="/outlined-linkedin.png"
                        alt=""
                        style={{ height: "18px" }}
                      />
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.PreviewTypo}
                      >
                        &nbsp;&nbsp;&nbsp;loremIpsum@lorem.com
                      </CustomTypography>
                    </Box>
                    <Divider />
                    <Box className={styles.PreviewTypoBox}>
                      <img
                        src="/outlined-insta.png"
                        alt=""
                        style={{ height: "28px" }}
                      />
                      <CustomTypography
                        variant="subtitle2"
                        className={styles.PreviewTypo}
                      >
                        &nbsp;&nbsp;loremIpsum@lorem.com
                      </CustomTypography>
                    </Box>
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

export default CompanyPreview;