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
  Dialog,
  Avatar,
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import { BOLD } from "@/theme/fonts";
import EmployerNavbar from "@/components/EmployerNavbar/EmployerNavbar";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { styles } from "@/components/Employers/CompanyProfile/CompanyProfileStyle";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EditorToolbar, {
  modules,
  formats,
} from "@/components/EditorToolbar/EditorToolbar";
// import ReactQuill from "react-quill";
import dynamic from "next/dynamic";
import { UploadPhoto } from "@/components/UploadPhoto/UploadPhoto";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const style = {
  naminput: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
        width: { md: "100%", xs: "100%" },
        height: "60px",
        color: "#BAD4DF",
        backgroundColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "#BAD4DF",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#BAD4DF",
      },
    },
  },
};

const selectstyle = {
  naminputSelect: {
    "& .MuiOutlinedInput-root-MuiSelect-root": {
      "& fieldset": {
        borderColor: "white",
        width: { md: "100%", xs: "100%" },
        height: "60px",
        color: "#BAD4DF",
        backgroundColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "#BAD4DF",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#BAD4DF",
      },
    },
  },
};

const CompanyProfile = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [value, setValue] = React.useState(0);
  const [checked, setChecked] = React.useState(true);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setFirst("");
    setFileNames("");
  };

  const handleClose = () => {
    dispatch(cmpLogo(first));
    dispatch(updateFinalPhoto(first)).then(
      notify("Your Company Logo Was Updated")
    );
    setOpen(false);
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
              <Card
                sx={{
                  width: "100%",
                  backgroundColor: "#F2F8FD",
                  mt: "40px",
                  p: "25px 25px 80px 25px",
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      height: "300px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={styles.logosec}>
                      <Box sx={styles.companylogo}>
                        <Avatar
                          alt="Remy Sharp"
                          //src={imageUrl}
                          sx={{
                            width: "200px",
                            height: "200px",
                            border: "12px solid #03B2EF",
                          }}
                        />
                      </Box>
                      <IconButton
                        onClick={handleClickOpen}
                        sx={{
                          position: "relative",
                          top: "31px",
                          left: "-14px",
                          background: "white",
                          border: "3px solid rgba(3, 66, 117, 0.6)",
                          height: "30px",
                          width: "30px",
                        }}
                      >
                        <EditSharpIcon
                          sx={{
                            color: "rgba(3, 66, 117, 0.6)",
                            fontSize: "0.8em",
                          }}
                        />
                      </IconButton>
                      <Dialog
                        fullWidth={fullWidth}
                        maxWidth={maxWidth}
                        open={open}
                        onClose={handleClose}
                      >
                        <Box sx={{ p: "40px" }}>
                          <CustomTypography
                            variant="h5"
                            sx={{ textAlign: "center" }}
                          >
                            Edit Profile Photo
                          </CustomTypography>
                          <UploadPhoto
                          //handleChange={handleImageChange}
                          />
                          {/* {first !== "" ? (
                            <>
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  flexDirection: "column",
                                }}
                              >
                                <img
                                  alt=""
                                  src={
                                    first !== ""
                                      ? URL.createObjectURL(first)
                                      : ""
                                  }
                                  width="123px"
                                  height="118px"
                                  style={{
                                    borderRadius: "10px",
                                    objectFit: "contain",
                                  }}
                                />
                                <Box
                                  sx={{ display: "flex", alignItems: "center" }}
                                >
                                  <Typography variant="h6">
                                    File Name :{" "}
                                  </Typography>{" "}
                                  <Typography variant="h7">
                                    {fileNames}
                                  </Typography>
                                </Box>
                              </Box>
                            </>
                          ) : (
                            ""
                          )} */}
                          <Box
                            sx={{ display: "flex", justifyContent: "center" }}
                          >
                            <Button
                              variant="contained"
                              sx={{ mt: "10px", backgroundColor: "#4fa9ff" }}
                              // onClick={() => {
                              //   handleClose();
                              // }}
                            >
                              save
                            </Button>
                            <Button
                              variant="outlined"
                              sx={{ mt: "10px", ml: "5px", color: "#4fa9ff" }}
                              // onClick={() => {
                              //   handleCloseP();
                              // }}
                            >
                              Cancel
                            </Button>
                          </Box>
                        </Box>
                      </Dialog>
                    </Box>
                  </Box>
                  <Divider />
                  <Box sx={{ display: "flex", mt: "20px", mb: "35px" }}>
                    <CustomTypography
                      sx={{
                        color: "#034275",
                        fontFamily: BOLD,
                        fontSize: "28px",
                      }}
                    >
                      Basic Info
                    </CustomTypography>
                    <Stack
                      direction="row"
                      spacing={1}
                      alignItems="center"
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        flexGrow: 1,
                      }}
                    >
                      <CustomTypography sx={{ color: "#01313F" }}>
                        Make Basic Info As Private
                      </CustomTypography>
                      <FormControlLabel control={<Switch />} />
                    </Stack>
                  </Box>
                  <Stack spacing={2}>
                    <TextField
                      InputLabelProps={{ style: { color: "#BAD4DF" } }}
                      sx={style.naminput}
                      id="outlined-basic"
                      label="Company Name"
                      placeholder="Enter Company Name"
                      variant="outlined"
                      name="cmpname"
                      //onChange={(e) => basicadd(e)}
                      //onBlur={(e) => handleBlur(e, "Company Name Was Updated")}
                      //value={basicin?.cmpname || ""}
                      //error={errors.cmpname ? true : false}
                      //helperText={errors.cmpname}
                    />
                    <TextField
                      InputLabelProps={{ style: { color: "#BAD4DF" } }}
                      sx={style.naminput}
                      id="outlined-basic"
                      label="Email"
                      type="email"
                      placeholder="Enter Email ID"
                      variant="outlined"
                      name="cmpemail"
                      //onChange={(e) => basicadd(e)}
                      //onBlur={(e) => handleBlur(e, "Company Email Was Updated")}
                      // value={
                      //   basicin !== null && basicin !== undefined
                      //     ? basicin.cmpemail
                      //     : ""
                      // }
                      required
                      // error={errors.cmpemail ? true : false}
                      // helperText={errors.cmpemail}
                    />
                    <TextField
                      InputLabelProps={{ style: { color: "#BAD4DF" } }}
                      sx={style.naminput}
                      id="outlined-basic"
                      label="Website(Optional)"
                      placeholder="Company URL"
                      variant="outlined"
                      name="cmpwebsite"
                      // onChange={(e) => basicadd(e)}
                      // onBlur={(e) =>
                      //   handleBlur(e, "Company Website Was Updated")
                      // }
                      // value={
                      //   basicin !== null && basicin !== undefined
                      //     ? basicin.cmpwebsite
                      //     : ""
                      // }
                    />
                    <Divider variant="middle" />
                  </Stack>
                  <CustomTypography
                    sx={{
                      color: "#034275",
                      fontFamily: BOLD,
                      fontSize: "28px",
                      mt: "20px",
                    }}
                  >
                    Company Information
                  </CustomTypography>
                  <Box sx={styles.infofld}>
                    <FormControl sx={style.naminput}>
                      <InputLabel
                        id="demo-simple-select-label"
                        sx={{ color: "#BAD4DF" }}
                      >
                        Sector
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Sector"
                        sx={selectstyle.naminputSelect}
                        name="infosector"
                        onChange={(e) => companyadd(e)}
                        //   value={cmpin?.infosector || ""}
                        //   error={errors.infosector ? true : false}
                        //   helperText={errors.infosector}
                        //   onBlur={(e) =>
                        //     handleBlur(e, "Company Sector Was Updated")
                        //   }
                      >
                        {/* {sector.map((sec, index) => (
                          <MenuItem key={index} value={sec}>
                            {sec}
                          </MenuItem>
                        ))} */}
                      </Select>
                      {/* {!!errors.infosector && (
                        <FormHelperText error id="accountId-error">
                          {errors.infosector}
                        </FormHelperText>
                      )} */}
                    </FormControl>
                  </Box>
                  <Box sx={styles.infofld}>
                    <CustomTypography variant="body2" sx={styles.sectxt}>
                      Company Description
                    </CustomTypography>
                    <Box
                      sx={{
                        width: "100%",
                        minHeight: "320px",
                        backgroundColor: "white",
                        border: "1px solid white",
                      }}
                    >
                      <EditorToolbar />
                      <ReactQuill
                        placeholder="Add Description"
                        // value={cmpin.infodes}
                        // onChange={handleDesc}
                        // onBlur={handleBlurDes}
                        // modules={modules}
                        // formats={formats}
                        // className="textareaQuestion"
                        style={{ height: "250px" }}
                      />
                    </Box>
                  </Box>
                  <Box display="block" sx={styles.infofld}>
                    <CustomTypography variant="body2" sx={styles.sectxt}>
                      Social Media Links
                    </CustomTypography>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        rowGap: "17px",
                        marginTop: "14px",
                      }}
                    >
                      <TextField
                        InputLabelProps={{ style: { color: "#BAD4DF" } }}
                        sx={styles.naminput}
                        id="outlined-basic"
                        placeholder="Enter FaceBook Link"
                        variant="outlined"
                        name="fb"
                        // onChange={(e) => handleLinks(e)}
                        // onBlur={(e) =>
                        //   handleBlur(e, "Facebook Link Was Updated")
                        // }
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <FacebookIcon sx={{ color: "#1877F2" }} />
                            </InputAdornment>
                          ),
                        }}
                        // value={links && links.fb}
                        // error={errors.fb ? true : false}
                        // helperText={errors.fb}
                      />

                      <TextField
                        InputLabelProps={{ style: { color: "#BAD4DF" } }}
                        sx={styles.naminput}
                        id="outlined-basic"
                        placeholder="Enter Twitter Link"
                        variant="outlined"
                        name="twitter"
                        // onChange={(e) => handleLinks(e)}
                        // onBlur={(e) =>
                        //   handleBlur(e, "Twitter Link Was Updated")
                        // }
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <TwitterIcon
                                sx={{ color: "#5CB6F2", fontSize: "1.5rem" }}
                              />
                            </InputAdornment>
                          ),
                        }}
                        // value={links && links.twitter}
                        // error={errors.twitter ? true : false}
                        // helperText={errors.twitter}
                      />
                      <TextField
                        InputLabelProps={{ style: { color: "black" } }}
                        sx={styles.naminput}
                        id="outlined-basic"
                        placeholder="Enter LinkedIn Link"
                        variant="outlined"
                        name="linkin"
                        // onChange={(e) => handleLinks(e)}
                        // onBlur={(e) =>
                        //   handleBlur(e, "LinkedIn Link Was Updated")
                        // }
                        // value={links && links.linkin}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <LinkedInIcon
                                sx={{ color: "#0065ED", fontSize: "1.5rem" }}
                              />
                            </InputAdornment>
                          ),
                        }}
                        required
                        // error={errors.linkin ? true : false}
                        // helperText={errors.linkin}
                      />
                      <TextField
                        width="100%"
                        InputLabelProps={{ style: { color: "black" } }}
                        sx={{
                          ...style.naminput,
                          width: "100%",
                        }}
                        id="outlined-basic"
                        placeholder="Enter Youtube Link"
                        variant="outlined"
                        name="utube"
                        // onChange={(e) => handleLinks(e)}
                        // onBlur={(e) =>
                        //   handleBlur(e, "Youtube Link Was Updated")
                        // }
                        // value={links && links.utube}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <YouTubeIcon
                                sx={{
                                  color: "#E7274B",
                                  fontSize: "1.5rem",
                                  zIndex: 1,
                                }}
                              />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Box>
                  </Box>
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mt: "40px",
                    }}
                  >
                    <Button
                      variant="outlined"
                      sx={{ width: "50%", height: "55px" }}
                    >
                      Previous
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        width: "50%",
                        bgcolor: "#015FB1 !important",
                        height: "55px",
                      }}
                    >
                      Submit
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default CompanyProfile;
