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
  useMediaQuery,
  FormHelperText,
  styled,
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import { BOLD } from "@/theme/fonts";
import EmployerNavbar from "@/components/EmployerNavbar/EmployerNavbar";
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
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import {
  Setprivacy,
  basicInfor,
  cmpInfor,
  cmpLogo,
  getCompanyDetails,
  linkInfor,
  updateFinalPhoto,
  updateFinaldetails,
} from "@/redux/slices/companyslice";
import { ERROR, SECTORS, SUCCESS } from "@/utils/constants";
import { openAlert } from "@/redux/slices/alert";
import Location from "@/components/Location";
import Employer from "../../../components/pages/index";
import { useTheme } from "@mui/material/styles";
import { isEmpty } from "lodash";
import companyservice from "@/redux/services/company.service";
import { useRouter } from "next/router";
const Tour = dynamic(() => import("reactour"), { ssr: false });

const style = {
  naminput: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
        width: { md: "100%", xs: "100%" },
        height: "60px",
        color: "black",
      },
      "&:hover fieldset": {
        borderColor: "black",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
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
        color: "black",
        backgroundColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "black",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
  },
};

const CompanyProfile = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [isTourOpen, setTourOpen] = React.useState(false);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const basicin = useSelector((state) => state.company.basicinformation);
  const cmpin = useSelector((state) => state.company.cmpinformation);
  const links = useSelector((state) => state.company.links);
  const logo = useSelector((state) => state.company.companylogo);
  const errors = useSelector((state) => state.company.error);
  const privacy = useSelector((state) => state.company.privacy);
  const [basic, setBasic] = useState({
    cmpname: basicin && basicin.cmpname,
    cmpphone: basicin && basicin.cmpphone,
    cmpemail: basicin && basicin.cmpemail,
    cmpwebsite: basicin && basicin.cmpwebsite,
  });
  const [cpinfor, setCmpinfor] = useState({
    infosector: cmpin && cmpin.infosector,
    infodes: cmpin && cmpin.infodes,
  });
  useEffect(() => {
    dispatch(getCompanyDetails());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setBasic({
      cmpname: basicin.cmpname,
      cmpphone: basicin.cmpphone,
      cmpemail: basicin.cmpemail,
      cmpwebsite: basicin.cmpwebsite,
    });
    setCmpinfor({
      infosector: cmpin && cmpin.infosector,
      infodes: cmpin && cmpin.infodes,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [basicin]);
  const dispatch = useDispatch();

  const [first, setFirst] = useState("");
  const [fileNames, setFileNames] = useState("");

  function handleImageChange(file) {
    setFirst(file);
    setFileNames(file.name);
  }
  const router = useRouter();
  const basicadd = (e) => {
    const { name, value } = e.target;
    setBasic({ ...basic, [name]: value });
    dispatch(basicInfor({ ...basic, [name]: value }));
  };

  const basicPhone = (value) => {
    setBasic({ ...basic, cmpphone: value });
    dispatch(basicInfor({ ...basic, cmpphone: value }));
  };

  const matches = useMediaQuery("(max-width:900px)");
  const matches2 = useMediaQuery("(max-width:970px)");

  const handleLinks = (e) => {
    const { name, value } = e.target;
    dispatch(linkInfor({ ...links, [name]: value }));
  };
  const companyadd = (e) => {
    const { name, value } = e.target;
    setCmpinfor({ ...cpinfor, [name]: value });
    dispatch(cmpInfor({ ...cpinfor, [name]: value }));
  };
  const handleDesc = (value) => {
    dispatch(cmpInfor({ ...cpinfor, infodes: value }));
  };

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
    dispatch(updateFinalPhoto(first)).then((res) => {
      if (res?.meta?.requestStatus === "fulfilled") {
        dispatch(getCompanyDetails());
        dispatch(
          openAlert({ type: SUCCESS, message: "Your Company Logo Was Updated" })
        );
      }
    });
    setOpen(false);
  };

  const handleCloseP = () => {
    setOpen(false);
    setFullWidth(true);
    setMaxWidth("sm");
  };
  const final = useSelector((state) => state.company);
  const re =
    /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleBlur = (e, msg) => {
    console.log("object1");
    // e.preventDefault();
    e.stopPropagation();
    if (e.target.name === "cmpemail") {
      let result = re.test(String(e.target.value).toLowerCase());
      if (!result) {
        dispatch(openAlert({ type: ERROR, message: "Invalid Email address" }));
        return;
      }
    }
    if (e.target.value === "") {
      return;
    }
    dispatch(updateFinaldetails(final)).then((res) => {
      console.log(res, "res");
      if (res?.meta?.requestStatus === "fulfilled") {
        dispatch(openAlert({ type: SUCCESS, message: msg }));
      }
    });
  };
  const handleBlurDes = (value) => {
    if (value.index === 0) {
      return;
    }
    dispatch(updateFinaldetails(final));
    dispatch(
      openAlert({ type: SUCCESS, message: "Company Description Was Updated" })
    );
  };
  const [open1, setOpen1] = React.useState(false);
  const [message, setmessage] = React.useState("");

  const handleClose1 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen1(false);
  };
  const handleChange = (event) => {
    dispatch(Setprivacy(event.target.checked));
    dispatch(updateFinaldetails({ ...final, privacy: event.target.checked }));
    dispatch(
      openAlert({ type: SUCCESS, message: "Basic Info Privacy Was Updated" })
    );
  };
  const StyledAvatar = styled(Avatar)(({}) => ({
    "& .MuiAvatar-img": {
      objectFit: "contain",
    },
  }));

  const theme = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const company = useSelector((state) => state?.company?.companyDetl);

  const updateValue = async () => {
    const companyService = new companyservice();
    await companyService.updateTourValue({ profileIndex: false });
  };

  const closeTour = () => {
    setTourOpen(false);
    updateValue();
  };

  const doneTour = () => {
    closeTour();
  };

  const tourConfig = [
    {
      selector: ".basicInfo",
      style: {
        color: "black",
      },
      content: ({ goTo }) => (
        <Stack
          sx={{
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomTypography>
            Here, you can find company basic details
          </CustomTypography>
          <Button onClick={() => closeTour()}>SKIP</Button>
        </Stack>
      ),
    },
    {
      selector: ".nextProfile",
      style: {
        color: "black",
      },
      content: ({ goTo }) => (
        <Stack
          sx={{
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomTypography>
            Here, you can navigate to Members page
          </CustomTypography>
          <Button onClick={() => doneTour()}>Done</Button>
        </Stack>
      ),
    },
  ];

  const accentColor = "#5cb7b7";

  useEffect(() => {
    setTourOpen(() => company?.tours?.profileIndex);
  }, [company?.tours?.profileIndex]);

  return (
    <Box sx={{ p: "-100px" }}>
      <Employer>
        <Stack direction="row" spacing={theme.breakpoints.down("xs") ? 2 : 6}>
          <Card
            sx={{
              width: "100%",
              height: { xs: "150px", sm: "190px" },
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
              backgroundImage: 'url("/activejob-bg.svg")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "15px",
              cursor: "pointer",
            }}
            onClick={() => {
              router.push("/Employer/CompanyProfile");
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: "25px",
              }}
            >
              {isMobile ? (
                <Image
                  src="/basic-info-img.png"
                  alt=""
                  width="50"
                  height="42"
                />
              ) : (
                <Image
                  src="/basic-info-img.png"
                  alt=""
                  width="60"
                  height="42"
                />
              )}
            </Box>
            <CardContent>
              <CustomTypography
                sx={{ color: "white", fontSize: { xs: "17px", sm: "30px" } }}
                variant="h5"
              >
                Basic Info
              </CustomTypography>
            </CardContent>
          </Card>
          <Card
            sx={{
              width: "100%",
              height: { xs: "150px", sm: "190px" },
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
              backgroundImage: 'url("/inactivejobs-bg.svg")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "15px",
              cursor: "pointer",
            }}
            onClick={() => {
              if (isEmpty(basicin?.cmpemail)) {
                dispatch(
                  openAlert({
                    type: ERROR,
                    message: "Please Provide Company Email",
                  })
                );
                return;
              }
              router.push("/Employer/Members");
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: "25px",
              }}
            >
              {isMobile ? (
                <Image src="/members-img.png" alt="" width="42" height="50" />
              ) : (
                <Image src="/members-img.png" alt="" width="60" height="62" />
              )}
            </Box>
            <CardContent>
              <CustomTypography
                sx={{ color: "white", fontSize: { xs: "17px", sm: "30px" } }}
                variant="h5"
              >
                Members
              </CustomTypography>
            </CardContent>
          </Card>
          <Card
            sx={{
              width: "100%",
              height: { xs: "150px", sm: "190px" },
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
              backgroundImage: 'url("/interviews-bg.svg")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "15px",
              cursor: "pointer",
            }}
            onClick={() => {
              if (isEmpty(basicin?.cmpemail)) {
                dispatch(
                  openAlert({
                    type: ERROR,
                    message: "Please Provide Company Email",
                  })
                );
                return;
              }
              router.push("/Employer/CompanyPreview");
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: "25px",
              }}
            >
              {isMobile ? (
                <Image src="/preview-img.png" alt="" width="42" height="50" />
              ) : (
                <Image
                  src="/preview-img.png"
                  alt=""
                  width="70"
                  height="62"
                  style={{
                    width: "60px",
                  }}
                />
              )}
            </Box>
            <CardContent>
              <CustomTypography
                sx={{ color: "white", fontSize: { xs: "17px", sm: "30px" } }}
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
            backgroundImage: `url("/company-profile-elements-bg.svg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="basicInfo"
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
                  <StyledAvatar
                    src={
                      logo && logo.logo !== undefined
                        ? `https://preprod.recroot.au/api/getCompanyPhotos?compPhotos=${logo.logo}`
                        : URL.createObjectURL(logo)
                    }
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
                  onClose={() => {
                    setOpen(false);
                  }}
                >
                  <Box sx={{ p: "40px" }}>
                    <CustomTypography variant="h5" sx={{ textAlign: "center" }}>
                      Edit Profile Photo
                    </CustomTypography>
                    <UploadPhoto handleChange={handleImageChange} />
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
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Button
                        variant="contained"
                        sx={{ mt: "10px", backgroundColor: "#4fa9ff" }}
                        onClick={() => {
                          handleClose();
                        }}
                      >
                        save
                      </Button>
                      <Button
                        variant="outlined"
                        sx={{ mt: "10px", ml: "5px", color: "#4fa9ff" }}
                        onClick={() => {
                          handleCloseP();
                        }}
                      >
                        Cancel
                      </Button>
                    </Box>
                  </Box>
                </Dialog>
              </Box>
            </Box>
            <Divider />
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                mt: "20px",
                mb: "35px",
              }}
            >
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
                <FormControlLabel
                  control={
                    <Switch
                      checked={privacy}
                      onChange={handleChange}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  }
                />
              </Stack>
            </Box>
            <Stack spacing={2}>
              <TextField
                InputLabelProps={{ style: { color: "black" } }}
                sx={{ ...style.naminput, bgcolor: "white" }}
                id="outlined-basic"
                label="Company Name"
                placeholder="Enter Company Name"
                variant="outlined"
                name="cmpname"
                onChange={(e) => basicadd(e)}
                onBlur={(e) => handleBlur(e, "Company Name Was Updated")}
                value={basicin?.cmpname || ""}
                error={errors.cmpname ? true : false}
                helperText={errors.cmpname}
              />
              <TextField
                InputLabelProps={{ style: { color: "black" } }}
                sx={{ ...style.naminput, bgcolor: "white" }}
                id="outlined-basic"
                label="Email"
                type="email"
                placeholder="Enter Email ID"
                variant="outlined"
                name="cmpemail"
                onChange={(e) => basicadd(e)}
                onBlur={(e) => handleBlur(e, "Company Email Was Updated")}
                value={
                  basicin !== null && basicin !== undefined
                    ? basicin.cmpemail
                    : ""
                }
                required
                error={errors.cmpemail ? true : false}
                helperText={errors.cmpemail}
              />
              <TextField
                InputLabelProps={{ style: { color: "black" } }}
                sx={{ ...style.naminput, bgcolor: "white" }}
                id="outlined-basic"
                label="Website(Optional)"
                placeholder="Company URL"
                variant="outlined"
                name="cmpwebsite"
                onChange={(e) => basicadd(e)}
                onBlur={(e) => handleBlur(e, "Company Website Was Updated")}
                value={
                  basicin !== null && basicin !== undefined
                    ? basicin.cmpwebsite
                    : ""
                }
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
              <FormControl sx={{ ...style.naminput, bgcolor: "white" }}>
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ color: "black" }}
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
                  value={cmpin?.infosector || ""}
                  error={errors.infosector ? true : false}
                  helperText={errors.infosector}
                  onBlur={(e) => handleBlur(e, "Company Sector Was Updated")}
                >
                  {SECTORS.map((sec, index) => (
                    <MenuItem key={index} value={sec}>
                      {sec}
                    </MenuItem>
                  ))}
                </Select>
                {!!errors.infosector && (
                  <FormHelperText error id="accountId-error">
                    {errors.infosector}
                  </FormHelperText>
                )}
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
                {typeof window !== "undefined" && (
                  <ReactQuill
                    placeholder="Add Description"
                    value={cmpin.infodes}
                    onChange={handleDesc}
                    onBlur={handleBlurDes}
                    modules={modules}
                    formats={formats}
                    className="textareaQuestion"
                    style={{ height: "250px" }}
                  />
                )}
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
                  InputLabelProps={{ style: { color: "black" } }}
                  sx={{
                    ...style.naminput,
                    bgcolor: "white",
                    width: "100%",
                  }}
                  id="outlined-basic"
                  placeholder="Enter FaceBook Link"
                  variant="outlined"
                  name="fb"
                  onChange={(e) => handleLinks(e)}
                  onBlur={(e) => handleBlur(e, "Facebook Link Was Updated")}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FacebookIcon sx={{ color: "#1877F2" }} />
                      </InputAdornment>
                    ),
                  }}
                  value={links && links.fb}
                  error={errors.fb ? true : false}
                  helperText={errors.fb}
                />

                <TextField
                  InputLabelProps={{ style: { color: "black" } }}
                  sx={{
                    ...style.naminput,
                    bgcolor: "white",
                    width: "100%",
                  }}
                  id="outlined-basic"
                  placeholder="Enter Twitter Link"
                  variant="outlined"
                  name="twitter"
                  onChange={(e) => handleLinks(e)}
                  onBlur={(e) => handleBlur(e, "Twitter Link Was Updated")}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <TwitterIcon
                          sx={{ color: "#5CB6F2", fontSize: "1.5rem" }}
                        />
                      </InputAdornment>
                    ),
                  }}
                  value={links && links.twitter}
                  error={errors.twitter ? true : false}
                  helperText={errors.twitter}
                />
                <TextField
                  InputLabelProps={{ style: { color: "black" } }}
                  sx={{
                    ...style.naminput,
                    bgcolor: "white",
                    width: "100%",
                  }}
                  id="outlined-basic"
                  placeholder="Enter LinkedIn Link"
                  variant="outlined"
                  name="linkin"
                  onChange={(e) => handleLinks(e)}
                  onBlur={(e) => handleBlur(e, "LinkedIn Link Was Updated")}
                  value={links && links.linkin}
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
                  InputLabelProps={{ style: { color: "black" } }}
                  sx={{
                    ...style.naminput,
                    bgcolor: "white",
                    width: "100%",
                  }}
                  id="outlined-basic"
                  placeholder="Enter Youtube Link"
                  variant="outlined"
                  name="utube"
                  onChange={(e) => handleLinks(e)}
                  onBlur={(e) => handleBlur(e, "Youtube Link Was Updated")}
                  value={links && links?.utube}
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
            <Box display="block" sx={styles.infofld}>
              <CustomTypography variant="body2" sx={styles.sectxt}>
                Location
              </CustomTypography>
              <Location />
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
                disabled
                variant="outlined"
                sx={{ width: "50%", height: "55px" }}
              >
                Previous
              </Button>
              <Button
                variant="contained"
                className="nextProfile"
                sx={{
                  width: "50%",
                  bgcolor: "#015FB1 !important",
                  height: "55px",
                }}
                onClick={() => {
                  if (isEmpty(basicin?.cmpemail)) {
                    dispatch(
                      openAlert({
                        type: ERROR,
                        message: "Please Provide Company Email",
                      })
                    );
                    return;
                  }
                  router.push("/Employer/Members");
                }}
              >
                Next
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Employer>
      <Tour
        onRequestClose={closeTour}
        disableInteraction={true}
        steps={tourConfig}
        isOpen={isTourOpen}
        maskClassName={styles.mask}
        className={styles.helper}
        rounded={8}
        accentColor={accentColor}
      />
    </Box>
  );
};

export default CompanyProfile;
