/* eslint-disable @next/next/no-img-element */
import { Button, Select } from "@material-ui/core";
import {
  Box,
  ButtonBase,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles, styled, withStyles } from "@mui/styles";
import axios from "axios";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import "react-phone-input-2/lib/style.css";
import { styles } from "../../components/CompleteProfile/completeSignupStyle";
import { ERROR, SECTORS } from "@/utils/constants";
import { isEmpty } from "lodash";
import { useDispatch } from "react-redux";
import { openAlert } from "@/redux/slices/alert";
import { validator } from "../../components/CompleteProfile/Validator";
import Cookies from "js-cookie";
import { EMPLOYER, RECRUITER } from "@/utils/UserConstants";

const ColorButton = styled(Button)(({ theme }) => ({
  // "&:focus": {
  //   backgroundColor: "white",
  //   color: "#4F9AFF",
  // },
  // "&:active": {
  //   backgroundColor: "white",
  //   color: "#4F9AFF",
  // },
}));
const StyledButton = withStyles(() => ({
  // root: {
  //   marginRight: "1rem",
  //   width: "25%",
  //   padding: "1rem",
  //   fontSize: "1.2rem",
  //   borderRadius: "1rem",
  //   color: "#000",
  //   fontWeight: "400",
  //   textTransform: "capitalize",
  // },
}))(ButtonBase);

const useStyles = makeStyles(() => ({
  activeButton: {
    backgroundColor: "white!important",
    color: "#4F9AFF!important",
  },
}));

const BasicButton = styled(Button)({
  mt: 3,
  mb: 2,
  width: "442px !important",
  maxWidth: 450,
  height: 60,
  backgroundColor: "#4F9AFF !important",
  borderRadius: "8px",
  fontWeight: 700,
  fontSize: "20px",
  color: "white !important",
});
function CompleteProfile() {
  const [errors, setErrors] = useState({});
  // const [checked, setChecked] = React.useState(true);

  const classes = useStyles();
  const [recrootUserType, setRecrootUserType] = useState("Candidate");
  const [values, setValues] = useState({
    sector: "",
    organization: "",
    recrootUserType: "Candidate",
    checked: false,
  });
  const [phoneNumber, setphoneNumber] = useState("");
  const [country, setCountry] = useState({});
  const enableAction = phoneNumber && phoneNumber.length >= 10;

  const getUser = () => {
    fetch("https://preprod.recroot.au/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        throw new Error("authentication has been failed!");
      })
      .then((resObject) => {
        localStorage.setItem("User", JSON.stringify(resObject.User));
        navigate("/", { replace: false });
      })
      .catch((err) => {
        console.warn(err);
      });
  };
  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(values.email.length);
  //   if (values.email.length <= 0) {
  //   }

  //   try {
  //     const userObject = {
  //       email: values.email,
  //       password: values.password,
  //     };
  //     axios.post("https://preprod.recroot.au/register", userObject).then(
  //       (res) => {
  //         if (res.status == 200) {
  //           console.log("DFg");
  //         }
  //       },
  //       (error) => {
  //         toastyErrorFunction(error.response.data.errors[0].msg);
  //       }
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleInputChange = (event) => {
  //   console.log(event);
  // };

  const clickedButtonHandler = (e) => {
    setRecrootUserType(e);
    setValues({ ...values, recrootUserType: e });
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const dispatch = useDispatch();
  const handleRegister = (event) => {
    event.preventDefault();
    if (phoneNumber === "") {
      dispatch(
        openAlert({
          type: ERROR,
          message: "Please Provide Mobile Number With Country Code!",
        })
      );
      //  if (phoneNumber.length === 0) {
      //   notifyFailed("Please Provide Mobile Number With Contry Code!");

      return;
    }
    if (isEmpty(country)) {
      dispatch(
        openAlert({
          type: ERROR,
          message: "Please Provide Country Code To Mobile Number!",
        })
      );
      return;
    }
    const UserId = JSON.parse(localStorage.getItem("User")).User._id;
    setErrors(validator(values));
    const obj = validator(values);
    if (Object.keys(obj).length > 0) {
      return;
    }

    try {
      const userObject = {
        sector: values.sector,
        organization: values.organization,
        recrootUserType: values.recrootUserType,
        userId: UserId,
        phoneNumber: phoneNumber,
      };
      axios
        .post("https://preprod.recroot.au/api/completeProfile", userObject)
        .then((res) => {
          if (res.status === 200) {
            console.log(res);
            let userType = res.data.User.recrootUserType;
            // var existing = JSON.parse(localStorage.getItem("User"));
            console.log(userType);
            // existing.User.User.recrootUserType = userType;
            // localStorage.setItem("User", JSON.stringify(existing));
            const loggedInUser = JSON.parse(localStorage.getItem("User"));
            const Redirect = localStorage.getItem("Redirect");
            loggedInUser.User.recrootUserType = userObject.recrootUserType;
            loggedInUser.User.companyId = res.data.User.companyId;
            localStorage.setItem("User", JSON.stringify(loggedInUser));
            Cookies.set("userID", loggedInUser.User?._id, { expires: 1 });
            Cookies.set("verifyCode", loggedInUser.User?.referral_code, {
              expires: 1,
            });
            Cookies.set("token", loggedInUser.token, { expires: 1 });
            Cookies.set("userType", loggedInUser.User?.recrootUserType, {
              expires: 1,
            });
            Cookies.set("companyId", loggedInUser.User?.companyId, {
              expires: 1,
            });
            Cookies.set("firstName", loggedInUser.User?.firstName, {
              expires: 1,
            });
            if (userType === "TempSocial") {
              window.location.replace(
                `https://recroot.io/completeProfile`
              );
              // navigate("/resume", { replace: false });
            }
            if (userType === "Candidate") {
              if (
                loggedInUser?.User?.resume?.resumeFileLocation?.length === 0
              ) {
                window.location.replace(
                  `https://recroot.io/uploadResume`
                );
              } else {
                if (Redirect !== null) {
                  window.location.replace(
                    `https://recroot.io${Redirect}`
                  );
                }
                window.location.replace(
                  `https://recroot.io/`
                );
              }
              // navigate("/resume", { replace: false });
            } else {
              window.location.replace(
                `https://recroot.io/Pricing`
              );
              // navigate("/", { replace: false });
            }
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckboxChange = (prop) => (event) => {
    setValues({ ...values, checked: event.target.checked });
  };

  const handleChangeTWo = (value, country) => {
    setphoneNumber(value);
    setCountry(country);
  };

  const employerTypes = [EMPLOYER, RECRUITER];
  const IsEmployer = employerTypes.includes(recrootUserType);

  return (
    <div>
      <Box sx={styles.signup}>
        <Container maxWidth="xl">
          <Box sx={styles.img}>
            <Link href="/">
              <img style={{ width: "175px" }} src={"/logo.png"} alt="" />
            </Link>
          </Box>
          <Box sx={styles.topspc}>
            <ColorButton
              sx={styles.topbtn}
              variant="outlined"
              className={
                recrootUserType === "Candidate" ? `${classes.activeButton}` : ""
              }
              onClick={() => clickedButtonHandler("Candidate")}
            >
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  lineHeight: "35px",
                  letterSpacing: "1.5px",
                }}
              >
                Candidate
              </div>
            </ColorButton>
            {/* <ColorButton
              sx={styles.topbtn}
              variant="outlined"
              className={
                IsEmployer ? `${classes.activeButton}` : ""
              }
              onClick={() => clickedButtonHandler("Employer")}
            >
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  fontFamily: "GreycliffCF-Bold",
                  lineHeight: "35px",
                  letterSpacing: "1.5px",
                }}
              >
                Employer
              </div>
            </ColorButton> */}
          </Box>
          <Typography sx={styles.sinup}>Account Type</Typography>
          <Typography sx={styles.candsub}>
            Your account was created successfully. Please select your account
            type to complete the sign-up process.
          </Typography>
          <form onSubmit={handleRegister}>
            <Grid container spacing={2} sx={styles.grid}>
              <Grid item xs={12} sm={12} md={12}>
                <Typography
                  sx={{ mb: "5px", fontSize: "15px", fontWeight: "600" }}
                >
                  Add your mobile number
                </Typography>
                <ReactPhoneInput
                  inputExtraProps={{
                    name: "phoneNumber",
                    required: true,
                    autoFocus: true,
                    // inputStyle: { width: "100%" },
                  }}
                  id="phoneNumber"
                  name="phoneNumber"
                  defaultCountry={"au"}
                  value={phoneNumber}
                  onChange={handleChangeTWo}
                  inputStyle={{
                    width: "100%",
                    height: "3.7375em",
                    fontSize: "16px",
                  }}
                />
              </Grid>

              {IsEmployer && (
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    required
                    fullWidth
                    id="organization"
                    label="Organization Name"
                    name="organization"
                    autoComplete="name"
                    onChange={handleChange("organization")}
                    placeholder="Enter Your Organization Name"
                  />
                </Grid>
              )}

              {IsEmployer && (
                <Grid item xs={12} sm={12} md={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Sector
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={values.sector}
                      name="sector"
                      required
                      label="sector"
                      onChange={handleChange}
                      variant="outlined"
                    >
                      {SECTORS.map((job, ind) => (
                        <MenuItem key={ind} value={job}>
                          {job}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              )}

              <Grid item xs={12} sm={12}>
                <FormControl>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value={values.checked}
                        color="primary"
                        checked={values.checked}
                        onChange={handleCheckboxChange("checked")}
                      />
                    }
                    label="By clicking checkbox, you agree to our Terms and Conditions and Privacy Policy"
                  />
                  {!!errors.agreeTermasValue && (
                    <FormHelperText error id="accountId-error">
                      {errors.agreeTermasValue}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12} container justifyContent="center">
                <BasicButton
                  type="submit"
                  align="center"
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    width: "442px !important",
                    maxWidth: 450,
                    height: 60,
                    backgroundColor: "#4F9AFF !important",
                    borderRadius: "8px",
                    fontWeight: 700,
                    fontSize: "20px",
                  }}
                  disabled={!enableAction}
                >
                  Complete
                </BasicButton>
              </Grid>
            </Grid>
          </form>
        </Container>
        <Box sx={styles.blue}>
          <Box sx={styles.rightbtn}>
            <StyledButton
              name="Candidate"
              className={
                recrootUserType === "Candidate" ? `${classes.activeButton}` : ""
              }
              sx={styles.btncand}
              variant="outlined"
              onClick={() => clickedButtonHandler("Candidate")}
            >
              <Typography sx={styles.candtxt}>Candidate</Typography>
              <Typography sx={styles.candsub}>
                I want to discover awesome companies
              </Typography>
            </StyledButton>
            <StyledButton
              name="second"
              className={IsEmployer ? `${classes.activeButton}` : ""}
              sx={styles.btncand}
              variant="outlined"
              onClick={() => clickedButtonHandler("Employer")}
            >
              <Typography sx={styles.candtxt}>Employer</Typography>
              <Typography sx={styles.candsub}>
                I want to attract the best talent
              </Typography>
            </StyledButton>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default CompleteProfile;
