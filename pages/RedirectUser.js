import { Button, Typography, ButtonBase } from "@mui/material";

import { Box, Container } from "@mui/system";
import React, { useState, useEffect } from "react";
// import { styles } from "./completeSignupStyle";
// import logo from "./logo/logo.png";
import { styled } from "@mui/material/styles";
// import { useNavigate, Link, useParams } from "react-router-dom";
// import { makeStyles, withStyles } from "@mui/styles";
import { ToastContainer } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";
import "react-toastify/dist/ReactToastify.css";
// import { setUserFromGoogle } from "../slices/auth";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Router } from "next/router";
import { useRouter } from "next/router";
import { EMPLOYER, RECRUITER } from "@/utils/UserConstants";
// const Button = styled(Button)(({ theme }) => ({
//   // "&:focus": {
//   //   backgroundColor: "white",
//   //   color: "#4F9AFF",
//   // },
//   // "&:active": {
//   //   backgroundColor: "white",
//   //   color: "#4F9AFF",
//   // },
// }));
// const Button = withStyles(() => ({
//   // root: {
//   //   marginRight: "1rem",
//   //   width: "25%",
//   //   padding: "1rem",
//   //   fontSize: "1.2rem",
//   //   borderRadius: "1rem",
//   //   color: "#000",
//   //   fontWeight: "400",
//   //   textTransform: "capitalize",
//   // },
// }))(ButtonBase);

// const useStyles = makeStyles(() => ({
//   activeButton: {
//     backgroundColor: "white!important",
//     color: "#4F9AFF!important",
//   },
// }));

function RedirectUser() {
  let dispatch = useDispatch();
  //   const classes = useStyles();
  //   let navigate = useNavigate();
  const [recrootUserType] = useState("Candidate");
  const selector = useSelector((state) => state?.apply?.applyPath);
  //   const { id } = useParams();

  const employerTypes = [EMPLOYER, RECRUITER];

  const router = useRouter();
  const { id } = router.query;
  const getUser = () => {
    axios
      .get(`https://preprod.recroot.au/getUser/${id}`)
      .then((resObject) => {
        localStorage.setItem("User", JSON.stringify(resObject.data));
        dispatch(setUserFromGoogle(resObject.data));
        if (resObject.data.User) {
          if (employerTypes.includes(resObject.data.User.recrootUserType)) {
            Router.push("/");
          } else if (resObject.data.User.recrootUserType === "TempSocial") {
            Router.push("/completeProfile");
          } else {
            if (resObject.data.User.resume.resumeFileLocation.length > 0) {
              if (selector !== null) {
                Router.push(selector);
              } else {
                Router.push("/");
              }
            } else {
              Router.push("/resumeSecond", { replace: true });
            }
          }
        }
      })
      .catch((err) => {
        console.warn(err);
      });
  };
  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="signupmain">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      <Box>
        <Container maxWidth="xl">
          {/* <Box sx={styles.img}>
            <Link to="/">
              <img style={{ width: "175px" }} src={logo} alt="" />
            </Link>
          </Box> */}
          <Box>
            <Button
              variant="outlined"
              //   className={
              //     recrootUserType === "Candidate" ? `${classes.activeButton}` : ""
              //   }
              // onClick={() => clickedButtonHandler("Candidate")}
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
                Candidate
              </div>
            </Button>
            <Button
              //   sx={styles.topbtn}
              variant="outlined"
              //   className={
              //     recrootUserType === "Employer" ? `${classes.activeButton}` : ""
              //   }
              // onClick={() => clickedButtonHandler("Employer")}
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
            </Button>
          </Box>
          <Typography
            // sx={styles.sinup}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            Please Wait
          </Typography>
          <Typography
            // sx={styles.candsub}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            Please wait while we verify your Account
          </Typography>
          <Typography
            // sx={styles.candsub}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CircularProgress color="success" />
          </Typography>

          {/* <form onSubmit={handleRegister}>
            <Grid container spacing={2} sx={styles.grid}>
              <Grid item xs={12} sm={12} md={12}>
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
              {recrootUserType === "Employer" && (
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
              {recrootUserType === "Employer" && (
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
                      onChange={handleChange("sector")}
                    >
                      {sector.map((job, ind) => (
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
                        // onChange={handleCheckboxChange("checked")}
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
                <Button
                  type="submit"
                  align="center"
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    width: 442,
                    maxWidth: 450,
                    height: 60,
                    backgroundColor: "#4F9AFF",
                    borderRadius: "8px",
                    fontWeight: 700,
                    fontSize: "20px",
                  }}
                >
                  Complete
                </Button>
              </Grid>
            </Grid>
          </form> */}
        </Container>
        <Box
        // sx={styles.blue}
        >
          <Box
          //   sx={styles.rightbtn}
          >
            <Button
              name="Candidate"
              //   className={
              //     recrootUserType === "Candidate" ? `${classes.activeButton}` : ""
              //   }
              //   sx={styles.btncand}
              variant="outlined"
              // onClick={() => clickedButtonHandler("Candidate")}
            >
              <Typography
              //    sx={styles.candtxt}
              >
                Candidate
              </Typography>
              <Typography
              //   sx={styles.candsub}
              >
                I want to discover awesome companies
              </Typography>
            </Button>
            <Button
              name="second"
              //   className={
              //     recrootUserType === "Employer" ? `${classes.activeButton}` : ""
              //   }
              //   sx={styles.btncand}
              variant="outlined"
              // onClick={() => clickedButtonHandler("Employer")}
            >
              <Typography
              //    sx={styles.candtxt}
              >
                Employer
              </Typography>
              <Typography
              //   sx={styles.candsub}
              >
                I want to attract the best talent
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default RedirectUser;
