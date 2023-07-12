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
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Divider,
  IconButton,
  FormHelperText,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
  Modal,
  Avatar,
  Dialog,
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { BOLD } from "@/theme/fonts";
import EmployerNavbar from "@/components/EmployerNavbar/EmployerNavbar";
import { styles } from "@/components/Employers/CompanyProfile/CompanyProfileStyle";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { UploadPhoto } from "@/components/UploadPhoto/UploadPhoto";
import { useState } from "react";
import { registerMember } from "@/redux/slices/auth";
import axios from "axios";
import { useEffect } from "react";
import {
  getCompanyDetails,
  memberPosting,
  updateFinaldetails,
} from "@/redux/slices/companyslice";
import Cookies from "js-cookie";
import {
  ControlPointDuplicateRounded,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import ReactPhoneInput from "react-phone-input-2";
import { validator } from "@/utils/Validator";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import { openAlert } from "@/redux/slices/alert";
import { ERROR, SUCCESS } from "@/utils/constants";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import dynamic from "next/dynamic";
import companyservice from "@/redux/services/company.service";
import stepsStyle from "../../../components/Employers/styles.module.css";
const Tour = dynamic(() => import("reactour"), { ssr: false });
import EditorToolbar, {
  modules,
  formats,
} from "@/components/EditorToolbar/EditorToolbar";
import Employer from "../../../components/pages/index";
import "react-phone-input-2/lib/bootstrap.css";
import "react-phone-input-2/lib/style.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

uuidv4();

const useStyles = makeStyles((theme) => ({
  squareAvatar: {
    width: "100%",
    height: "100%",
    borderRadius: "5px",
    border: "3px dashed #4fa9ff",
  },
}));

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

const WhyJoinUsContent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { push } = useRouter();
  const theme = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const [messagePhotoOpen, setMessagePhotoOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");
  useEffect(() => {
    dispatch(getCompanyDetails());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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

  const handleMessagePhotoClickOpen = () => {
    setMessagePhotoOpen(true);
    // setFirst("");
    // setFileNames("");
  };

  const handleMessagePhotoClose = () => {
    setMessagePhotoOpen(false);
  };

  return (
    <>
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
              push("/Employer/CompanyProfile");
            }}
          >
            <Box
              sx={{
                height: "61px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
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
            </Box>
            <Box sx={{ p: "16px" }}>
              <CustomTypography
                sx={{ color: "white", fontSize: { xs: "17px", sm: "30px" } }}
                variant="h5"
              >
                Basic Info
              </CustomTypography>
            </Box>
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
            }}
            onClick={() => {
              push("/Employer/WhyJoinUsContent");
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {isMobile ? (
                <Image
                  src="/why-joinusgym-card-img.png"
                  alt=""
                  width="42"
                  height="50"
                />
              ) : (
                <Image
                  src="/why-joinusgym-card-img.png"
                  alt=""
                  width="60"
                  height="62"
                />
              )}
            </Box>
            <Box sx={{ p: "16px" }}>
              <CustomTypography
                sx={{ color: "white", fontSize: { xs: "17px", sm: "30px" } }}
                variant="h5"
              >
                Why Join Us
              </CustomTypography>
            </Box>
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
            }}
            onClick={() => {
              push("/Employer/Members");
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {isMobile ? (
                <Image src="/members-img.png" alt="" width="42" height="50" />
              ) : (
                <Image src="/members-img.png" alt="" width="60" height="62" />
              )}
            </Box>
            <Box sx={{ p: "16px" }}>
              <CustomTypography
                sx={{ color: "white", fontSize: { xs: "17px", sm: "30px" } }}
                variant="h5"
              >
                Members
              </CustomTypography>
            </Box>
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
              push("/Employer/CompanyPreview");
            }}
          >
            <Box
              sx={{
                height: "61px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
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
            </Box>
            <Box sx={{ p: "16px" }}>
              <CustomTypography
                sx={{ color: "white", fontSize: { xs: "17px", sm: "30px" } }}
                variant="h5"
              >
                Preview
              </CustomTypography>
            </Box>
          </Card>
        </Stack>
        <Card
          sx={{
            width: "100%",
            backgroundColor: "#F2F8FD",
            mt: "40px",
            pb: "80px",
            backgroundImage: `url("/company-profile-elements-bg.svg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <CardContent>
            <Box>
              <CustomTypography variant="body2" sx={styles.sectxt}>
                Add a Message from the Company
              </CustomTypography>
              <FormControl
                sx={{ ...style.naminput, bgcolor: "white", width: "100%" }}
              >
                {" "}
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ color: "black" }}
                >
                  Designation
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Designation"
                  sx={selectstyle.naminputSelect}
                  name="infosector"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <CustomTypography
                sx={{ fontSize: "15px", fontWeight: 500, mt: "10px" }}
              >
                Upload a Photo
              </CustomTypography>
              <Box
                sx={{
                  height: "200px",
                  width: "200px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: "25px",
                }}
              >
                <Avatar className={classes.squareAvatar} alt="Avatar" src="" />
                <IconButton
                  onClick={handleMessagePhotoClickOpen}
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
                  open={messagePhotoOpen}
                  onClose={() => {
                    setMessagePhotoOpen(false);
                  }}
                >
                  <Box sx={{ p: "40px" }}>
                    <CustomTypography variant="h5" sx={{ textAlign: "center" }}>
                      Edit Company Message Photo
                    </CustomTypography>
                    <UploadPhoto />
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Button
                        variant="contained"
                        sx={{ mt: "10px", backgroundColor: "#4fa9ff" }}
                        onClick={() => {
                          handleMessagePhotoClose();
                        }}
                      >
                        save
                      </Button>
                      <Button
                        variant="outlined"
                        sx={{ mt: "10px", ml: "5px", color: "#4fa9ff" }}
                        onClick={() => {
                          handleMessagePhotoClose();
                        }}
                      >
                        Cancel
                      </Button>
                    </Box>
                  </Box>
                </Dialog>
              </Box>
              <CustomTypography
                sx={{ fontSize: "15px", fontWeight: 500, mt: "10px" }}
              >
                Message
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
                    placeholder="Type message here..."
                    // value={cmpin.infodes}
                    // onChange={handleDesc}
                    // onBlur={handleBlurDes}
                    // modules={modules}
                    // formats={formats}
                    className="textareaQuestion"
                    style={{ height: "250px" }}
                  />
                )}
              </Box>
              <Box sx={{ mt: "20px" }}>
                <CustomTypography variant="body2" sx={styles.sectxt}>
                  Verified Company Benefits
                </CustomTypography>
                <FormControl sx={{ width: "100%", bgcolor: "white" }}>
                  <InputLabel
                    id="demo-simple-select-label"
                    sx={{ color: "black" }}
                  >
                    Category
                  </InputLabel>
                </FormControl>
                <Select
                  name="category"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={member && member.role}
                  label="Category"
                  sx={styles.naminput2}
                  // onChange={(e) => {
                  //   handleMemChange(member.id, e);
                  // }}
                >
                  <MenuItem value="SuperAdmin"> Super Admin </MenuItem>
                  <MenuItem value="jobsAdmin">Jobs Admin</MenuItem>
                  <MenuItem value="HiringManager">Hiring Manager</MenuItem>
                </Select>
                <CustomTypography
                  sx={{ fontSize: "15px", fontWeight: 500, mt: "10px" }}
                >
                  Benefit 1
                </CustomTypography>
                <Box
                  sx={{
                    width: "100%",
                    minHeight: "170px",
                    backgroundColor: "white",
                    border: "1px solid white",
                  }}
                >
                  <EditorToolbar />
                  {typeof window !== "undefined" && (
                    <ReactQuill
                      placeholder="Type benefit here..."
                      // value={cmpin.infodes}
                      // onChange={handleDesc}
                      // onBlur={handleBlurDes}
                      // modules={modules}
                      // formats={formats}
                      className="textareaQuestion"
                      style={{ height: "100px" }}
                    />
                  )}
                </Box>
                <CustomTypography
                  sx={{ fontSize: "15px", fontWeight: 500, mt: "10px" }}
                >
                  Description
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
                      placeholder="Add a description..."
                      // value={cmpin.infodes}
                      // onChange={handleDesc}
                      // onBlur={handleBlurDes}
                      // modules={modules}
                      // formats={formats}
                      className="textareaQuestion"
                      style={{ height: "250px" }}
                    />
                  )}
                </Box>
              </Box>
              <Box sx={{ mt: "20px" }}>
                <CustomTypography variant="body2" sx={styles.sectxt}>
                  Additional Components (Optional)
                </CustomTypography>
                <CustomTypography
                  sx={{ fontSize: "15px", fontWeight: 500, mt: "10px" }}
                >
                  Add more components that help you attract potential candidates
                  (Ex: Opportunities given to employees, Culture and work
                  environment)
                </CustomTypography>
                <CustomTypography
                  sx={{ fontSize: "15px", fontWeight: 500, mt: "10px" }}
                >
                  Heading
                </CustomTypography>
                <TextField
                  InputLabelProps={{ style: { color: "black" } }}
                  sx={{ ...style.naminput, bgcolor: "white", width: "100%" }}
                  id="outlined-basic"
                  placeholder="Type a heading here..."
                  variant="outlined"
                />
                <CustomTypography
                  sx={{ fontSize: "15px", fontWeight: 500, mt: "10px" }}
                >
                  Description
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
                      placeholder="Add a description..."
                      // value={cmpin.infodes}
                      // onChange={handleDesc}
                      // onBlur={handleBlurDes}
                      // modules={modules}
                      // formats={formats}
                      className="textareaQuestion"
                      style={{ height: "250px" }}
                    />
                  )}
                </Box>
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
                onClick={() => {
                  push("/Employer/CompanyProfile");
                }}
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
                className="nextPreview"
                onClick={() => {
                  push("/employer/companyPreview");
                }}
              >
                Next
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Employer>
    </>
  );
};

export default WhyJoinUsContent;
