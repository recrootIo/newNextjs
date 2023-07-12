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
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { BOLD } from "@/theme/fonts";
import EmployerNavbar from "@/components/EmployerNavbar/EmployerNavbar";
import { styles } from "@/components/Employers/CompanyProfile/CompanyProfileStyle";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
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
import { useTheme } from "@mui/material/styles";
import dynamic from "next/dynamic";
import companyservice from "@/redux/services/company.service";
import stepsStyle from "../../../components/Employers/styles.module.css";
const Tour = dynamic(() => import("reactour"), { ssr: false });

import Employer from "../../../components/pages/index";
import "react-phone-input-2/lib/bootstrap.css";
import "react-phone-input-2/lib/style.css";

uuidv4();

const Members = () => {
  const company = useSelector((state) => state?.company?.companyDetl);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [isTourOpen, setTourOpen] = React.useState(true);
  //   const member = useSelector((state) => state.company.members);
  //   const [memberrole, setMemberrole] = React.useState(member);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const [errors, setErrors] = React.useState(true);
  const user = Cookies.get();
  // const user = JSON.parse(localStorage.getItem("User"));

  const companyId = user?.companyId;

  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
    firstName: "",
    lastName: "",
    sector: "",
    companyId: companyId,
    organization: "",
    recrootUserType: "Member",
    confirmPassword: "",
    checked: true,
  });
  const [phoneNumber, setphoneNumber] = useState("");
  const [confirmP, setconfirmP] = useState({
    confirmPassword: "",
    showConfirmPassword: false,
  });
  useEffect(() => {
    dispatch(getCompanyDetails());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChanges = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleConfirmPasswordChange = (prop) => (event) => {
    setconfirmP({ ...confirmP, [prop]: event.target.value });
    setValues({
      ...values,
      confirmPassword: event.target.value,
    });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleClickShowConfirmPassword = () => {
    setconfirmP({
      ...confirmP,
      showConfirmPassword: !confirmP.showConfirmPassword,
    });
  };

  const handleMouseConfirmDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChangeTWo = (value) => {
    setphoneNumber(value);
  };
  const handleRegister = (event) => {
    event.preventDefault();
    setErrors(validator(values));
    const obj = validator(values);

    if (Object.keys(obj).length > 0) {
      return phoneNumber;
    }

    dispatch(registerMember({ values }))
      .unwrap()
      .then((originalPromiseResult) => {
        dispatch(
          openAlert({
            type: SUCCESS,
            message: "New Account Member Added Successfully",
          })
        );
        // toastySucessFunction("New Account Member Added Successfully");
        getMember();
        handleClose();
        setValues("");
        setconfirmP("");
      })
      .catch((error) => {
        dispatch(
          openAlert({
            type: ERROR,
            message: "The User Already Exists",
          })
        );
        // toastyErrorFunction("The User Already Exists");
        console.warn(error);
      });
  };
  const dispatch = useDispatch();

  const [result, setResult] = useState([]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setValues("");
    setOpen(false);
    setconfirmP("");
  };

  const style1 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: "300px",
    width: "auto",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const style2 = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  };

  const member = useSelector((state) => state.company.members);
  const getMember = () => {
    axios
      .get(`http://preprod.recroot.au/api/getMember/${companyId}`, {
        headers: { "x-access-token": `${user?.token}` },
      })
      .then((res) => setResult(res.data))
      .catch((error) => console.warn(error));
  };
  useEffect(() => {
    axios
      .get(`http://preprod.recroot.au/api/getMember/${companyId}`, {
        headers: { "x-access-token": `${user?.token}` },
      })
      .then((res) => setResult(res.data))
      .catch((error) => console.warn(error));
  }, [companyId, user?.token]);

  const [memberrole, setMemberrole] = useState(member);
  useEffect(() => {
    if (member.length !== 0) {
      setMemberrole(member);
    }
  }, [member]);

  var mems = [];

  memberrole?.map((mem) => {
    if (user?.memberType === "jobsAdmin") {
      if (mem.memberId !== user?.userID) {
        mems.push(mem);
      }
    } else {
      mems.push(mem);
    }
    return null;
  });
  useEffect(() => {
    if (member.length === 0) {
      setMemberrole([
        { memberId: "", role: "", id: new Date().getTime(), fname: "" },
      ]);
    }
  }, [member.length]);

  const final = useSelector((state) => state.company);

  const handleAddInput = () => {
    setMemberrole([
      ...memberrole,
      { id: uuidv4(), memberId: "", role: "", fname: "" },
    ]);
  };

  const handleMemChange = (id, event) => {
    var name;
    if (event.target.name === "memberId") {
      if (mems.find((mems) => mems.id === id).role === "") {
        name = result.filter((res) => res._id === event.target.value);
        const newMemChange = memberrole.map((i) => {
          if (id === i.id) {
            i = {
              ...i,
              [event.target.name]: event.target.value,
              fname: name[0].firstName,
            };

            i.id = id;
          }
          return i;
        });

        setMemberrole(newMemChange);
      }
    }
    if (event.target.name === "memberId") {
      if (mems.find((mems) => mems.id === id).role !== "") {
        name = result.filter((res) => res._id === event.target.value);
        const newMemChange = memberrole.map((i) => {
          if (id === i.id) {
            i = {
              ...i,
              [event.target.name]: event.target.value,
              fname: name[0].firstName,
            };

            i.id = id;
          }
          return i;
        });

        setMemberrole(newMemChange);
        dispatch(updateFinaldetails({ ...final, members: newMemChange }));
        dispatch(
          openAlert({
            type: SUCCESS,
            message: "Company Member Details Were Updated",
          })
        );
      }
    }
    if (event.target.name === "role") {
      const newMemChange = memberrole.map((i) => {
        if (id === i.id) {
          i = { ...i, [event.target.name]: event.target.value };
          i.id = id;
        }
        return i;
      });
      setMemberrole(newMemChange);
      let obj = newMemChange.find((o) => o.id === id);

      if (event.target.value === "") {
        return;
      }
      axios
        .post(
          `http://preprod.recroot.au/api/updateMemberState/${obj.memberId}`,

          {
            type: event.target.value,
          }
        )
        //  .post(`http://preprod.recroot.au/api/updateMemberState/${obj.memberId}`, {
        //  .post(`http://preprod.recroot.au/api/updateMemberState/${obj.memberId}`, {

        //  .post(`http://preprod.recroot.au/api/updateMemberState/${obj.memberId}`, {

        //   type: event.target.value,
        // })

        .then(function (response) {
          return;
        })
        .catch(function (error) {
          console.warn(error);
        });
      dispatch(updateFinaldetails({ ...final, members: newMemChange }));
      dispatch(
        openAlert({
          type: SUCCESS,
          message: "Company Member Details Were Updated",
        })
      );
    }
  };

  const handleMemRemove = (id) => {
    const memId = mems.find((d) => d.id === id).memberId;
    if (memId !== "") {
      axios
        .post(`http://preprod.recroot.au/api/updateMemberState/${memId}`, {
          type: "normal",
        })
        .then(function (response) {
          return;
        })
        .catch(function (error) {
          console.warn(error);
        });
    }
    let updatedField = [...mems].filter((fiel) => fiel.id !== id);
    setMemberrole(updatedField);
    dispatch(updateFinaldetails({ ...final, members: updatedField }));
    dispatch(
      openAlert({ type: ERROR, message: "Company Member Details Were Removed" })
    );
  };

  useEffect(() => {
    dispatch(memberPosting(memberrole));
  }, [dispatch, memberrole]);

  const { push } = useRouter();

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

  const updateValue = async () => {
    const companyService = new companyservice();
    await companyService.updateTourValue({ profileMember: false });
  };

  const closeTour = () => {
    setTourOpen(false);
    updateValue();
  };

  const gotoPreview = () => {
    closeTour();
    push("/Employer/CompanyPreview");
  };

  const tourConfig = [
    {
      selector: ".addAccount",
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
            Click here to add new members to the list
          </CustomTypography>
          <Button onClick={() => closeTour()}>SKIP</Button>
        </Stack>
      ),
    },
    {
      selector: ".addRole",
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
            Select members, assign roles, and click &quot;+&quot; to grant
            access them to your company profile
          </CustomTypography>
          <Button onClick={() => closeTour()}>SKIP</Button>
        </Stack>
      ),
    },
    {
      selector: ".nextPreview",
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
            Click NEXT to Preview Company Profile
          </CustomTypography>
          <Button onClick={() => gotoPreview()}>Done</Button>
        </Stack>
      ),
    },
  ];

  const accentColor = "#5cb7b7";

  useEffect(() => {
    setTourOpen(() => company?.tours?.profileMember);
  }, [company?.tours?.profileMember]);
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
          {/* <Box sx={styles.infofld}> */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            // sx={{
            //   display: "flex",
            //   alignItems: "center",
            //   justifyContent: "center",
            //   "& .MuiPaper-root": {
            //     width: "90%",
            //     maxWidth: 600, // Adjust the max width as needed
            //   },
            // }}
          >
            <form onSubmit={handleRegister}>
              <Box sx={style1}>
                <Typography
                  variant="h5"
                  style={{ fontWeight: "900", marginBottom: "15px" }}
                >
                  ADD ACCOUNT MEMBER
                </Typography>
                <Box sx={style2}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    placeholder="Enter First Name"
                    autoFocus
                    value={values.firstName}
                    onChange={handleChanges("firstName")}
                    error={errors.firstName ? true : false}
                    helperText={errors.firstName}
                  />
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    placeholder="Enter Last Name"
                    value={values.lastName}
                    onChange={handleChanges("lastName")}
                    error={errors.lastName ? true : false}
                    helperText={errors.lastName}
                  />

                  <TextField
                    fullWidth
                    required
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    placeholder="Enter E-mail"
                    value={values.email}
                    onChange={handleChanges("email")}
                    error={errors.email ? true : false}
                    helperText={errors.email}
                  />

                  <FormControl sx={{ width: "100%" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      required
                      id="outlined-adornment-password"
                      type={values.showPassword ? "text" : "password"}
                      value={values.password}
                      onChange={handleChanges("password")}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                      placeholder="Enter Password"
                      error={errors.password ? true : false}
                    />
                    {!!errors.password && (
                      <FormHelperText error id="accountId-error">
                        {errors.password}
                      </FormHelperText>
                    )}
                  </FormControl>
                  <FormControl sx={{ width: "100%" }} variant="outlined">
                    <InputLabel htmlFor="outlined-confirm-adornment-password">
                      Confirm Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-confirm-adornment-password"
                      type={confirmP.showConfirmPassword ? "text" : "password"}
                      value={confirmP.confirmPassword}
                      name="confirmPassword"
                      onChange={handleConfirmPasswordChange("confirmPassword")}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle confirm-password visibility"
                            onClick={handleClickShowConfirmPassword}
                            onMouseDown={handleMouseConfirmDownPassword}
                            edge="end"
                          >
                            {confirmP.showConfirmPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Confirm Password"
                      placeholder="Confirm Password"
                    />
                    {!!errors.confirmPassword && (
                      <FormHelperText error id="accountId-error">
                        {errors.confirmPassword}
                      </FormHelperText>
                    )}
                  </FormControl>

                  <ReactPhoneInput
                    inputExtraProps={{
                      name: "phoneNumber",
                      required: true,
                      autoFocus: true,
                    }}
                    id="phoneNumber"
                    name="phoneNumber"
                    defaultCountry={"au"}
                    value={values.phoneNumber}
                    onChange={handleChangeTWo}
                    inputStyle={{
                      width: "100%",
                      height: "3.7375em",
                      fontSize: "16px",
                    }}
                  />
                </Box>
                <Button
                  size="medium"
                  type="submit"
                  align="center"
                  variant="contained"
                  sx={{
                    mt: 3,
                    backgroundColor: "#4fa9ff !important",
                  }}
                >
                  Ok
                </Button>
                &nbsp;
                <Button
                  sx={{
                    mt: 3,
                    backgroundColor: "#4fa9ff !important",
                  }}
                  variant="contained"
                  size="medium"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </Box>
            </form>
          </Modal>
          {/* </Box> */}
          <CardContent>
            <Box>
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: "20px",
                }}
              >
                <CustomTypography
                  sx={{
                    color: "#034275",
                    fontFamily: BOLD,
                    fontSize: "28px",
                  }}
                >
                  Members
                </CustomTypography>
                {/* {memberrole.length === index + 1 ? ( */}
                <Button
                  variant="text"
                  // onClick={handleAddInput}
                  onClick={handleOpen}
                  sx={{
                    color: "#034275",
                  }}
                  className="addAccount"
                >
                  + Add New Member
                </Button>
              </Stack>
              <Box
                sx={{
                  display: "flex",
                  mt: "20px",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                {mems.map((member, index) => (
                  <Box sx={styles.membox} key={index}>
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{ width: "100%", display: "flex" }}
                    >
                      <Stack
                        spacing={2}
                        sx={{
                          display: "flex",
                          flexDirection: { xs: "column", sm: "row" },
                          width: "90%",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{
                            width: { xs: "100%", sm: "57%" },
                            display: "flex",
                            alignItems: "center",
                            mr: { xs: 0, sm: "18px" },
                          }}
                        >
                          <FormControl sx={{ width: "100%", bgcolor: "white" }}>
                            <InputLabel
                              id="demo-simple-select-label"
                              sx={{ color: "#BAD4DF" }}
                            >
                              Member Name
                            </InputLabel>
                            <Select
                              name="memberId"
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={member.memberId}
                              onChange={(e) => {
                                handleMemChange(member.id, e);
                              }}
                              label="Account Members"
                              sx={styles.naminput2}
                              // error={errors.cmpemail ? true : false}
                              // helperText={errors.cmpemail}
                            >
                              {result.map((res) => (
                                <MenuItem
                                  key={res.firstName}
                                  value={res._id}
                                  hidden={mems.some(
                                    (vendor) => vendor["memberId"] === res._id
                                  )}
                                >
                                  {res.firstName} {res.lastName}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Box>
                        <Box
                          sx={{
                            width: { xs: "100%", sm: "43%" },
                            display: "flex",
                            alignItems: "center",
                            mt: { xs: "normal", sm: "0px !important" },
                          }}
                        >
                          <FormControl
                            disabled={member?.memberId === ""}
                            sx={{ width: "100%", bgcolor: "white" }}
                          >
                            <InputLabel
                              id="demo-simple-select-label"
                              sx={{ color: "#BAD4DF" }}
                            >
                              Roles
                            </InputLabel>
                            {user?.memberType === "jobsAdmin" ? (
                              <Select
                                name="role"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={member && member.role}
                                label="Roles"
                                sx={styles.naminput2}
                                onChange={(e) => {
                                  handleMemChange(member.id, e);
                                }}
                              >
                                <MenuItem value="HiringManager">
                                  Hiring Manager
                                </MenuItem>
                              </Select>
                            ) : (
                              <Select
                                name="role"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={member && member.role}
                                label="Roles"
                                sx={styles.naminput2}
                                onChange={(e) => {
                                  handleMemChange(member.id, e);
                                }}
                              >
                                <MenuItem value="SuperAdmin">
                                  {" "}
                                  Super Admin{" "}
                                </MenuItem>
                                <MenuItem value="jobsAdmin">
                                  Jobs Admin
                                </MenuItem>
                                <MenuItem value="HiringManager">
                                  Hiring Manager
                                </MenuItem>
                              </Select>
                            )}
                          </FormControl>
                        </Box>
                      </Stack>
                      <Box
                        className="addRole"
                        sx={{
                          display: "flex",
                          width: "10%",
                          flexDirection: { xs: "column", sm: "row" },
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {memberrole.length === index + 1 ? (
                          <IconButton
                            variant="contained"
                            sx={styles.addbtn}
                            onClick={handleAddInput}
                          >
                            <ControlPointDuplicateRounded
                              sx={{
                                fontSize: { sm: "1.5rem", xs: "1.5rem" },
                                color: "#4fa9ff",
                              }}
                            />
                          </IconButton>
                        ) : (
                          ""
                        )}
                        {memberrole.length > 1 ? (
                          <IconButton
                            variant="contained"
                            sx={styles.addbtn}
                            onClick={() => {
                              handleMemRemove(member.id);
                            }}
                          >
                            <RemoveCircleIcon
                              sx={{
                                fontSize: { sm: "1.5rem", xs: "1.5rem" },
                                color: "#FF543E",
                              }}
                            />
                          </IconButton>
                        ) : (
                          ""
                        )}
                      </Box>
                    </Stack>
                  </Box>
                ))}
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
      <Tour
        onRequestClose={closeTour}
        disableInteraction={true}
        steps={tourConfig}
        isOpen={isTourOpen}
        maskClassName={stepsStyle.mask}
        className={stepsStyle.helper}
        rounded={8}
        accentColor={accentColor}
      />
    </>
  );
};

export default Members;
