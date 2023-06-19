/* eslint-disable @next/next/no-img-element */
import { Box, Button, ButtonBase, CircularProgress, Container, Typography } from '@mui/material';
import { makeStyles, styled ,withStyles} from '@mui/styles';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { styles } from '../../completeSignupStyle';
import { setUserFromGoogle } from '@/redux/slices/auth';
import Cookies from 'js-cookie';

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
function RedirectUser() {
    let dispatch = useDispatch();
    const classes = useStyles();
    const [recrootUserType] = useState("Candidate");
    const router = useRouter()
    const { id } = router.query;
console.log(id,'ssss')
    const redirect = null
    const getUser = () => {
      axios
        .get(`https://preprod.recroot.au/getUser/${id}`)
        .then((resObject) => {
          localStorage.setItem("User", JSON.stringify(resObject.data));
          Cookies.set("userID", resObject.data.User?._id, { expires: 1 });
          Cookies.set("verifyCode", resObject.data.User?.referral_code, {
            expires: 1,
          });
          Cookies.set("token", resObject.data.token, { expires: 1 });
          Cookies.set("userType", resObject.data.User?.recrootUserType, {
            expires: 1,
          });
          Cookies.set("companyId", resObject.data.User?.companyId, { expires: 1 });
          Cookies.set("firstName", resObject.data.User?.firstName, { expires: 1 });
          dispatch(setUserFromGoogle(resObject.data));
          if (resObject.data.User) {
            if (resObject.data.User.recrootUserType === "Employer") {
              router.push("/");
            } else if (resObject.data.User.recrootUserType === "TempSocial") {
              router.push("CompleteProfile");
            } else {
              if (resObject.data.User.resume.resumeFileLocation.length > 0) {
                // if(redirect !== null){
                // router.push(redirect);
                // }else{
                  router.push("/");
                // }
              } else {
                router.push("/uploadResume");
              }
            }
          }
        })
        .catch((err) => {
          console.warn(err);
        });
    };
    useEffect(() => {
        if (id !== undefined) {
          getUser()
        }
          console.log('object')
          setTimeout(() => {
          }, 1000);
        // }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);
  return (
    <div>
            <Box sx={styles.signup}>
        <Container maxWidth="xl">
          <Box sx={styles.img}>
            <Link href="/">
              <img style={{ width: "175px" }} src={'/logo.png'} alt="" />
            </Link>
          </Box>
          <Box sx={styles.topspc}>
            <ColorButton
              sx={styles.topbtn}
              variant="outlined"
              className={
                recrootUserType === "Candidate" ? `${classes.activeButton}` : ""
              }
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
            </ColorButton>
            <ColorButton
              sx={styles.topbtn}
              variant="outlined"
              className={
                recrootUserType === "Employer" ? `${classes.activeButton}` : ""
              }
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
            </ColorButton>
          </Box>
          <Typography
            sx={styles.sinup}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            Please Wait
          </Typography>
          <Typography
            sx={styles.candsub}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            Please wait while we verify your Account
          </Typography>
          <Typography
            sx={styles.candsub}
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
        <Box sx={styles.blue}>
          <Box sx={styles.rightbtn}>
            <StyledButton
              name="Candidate"
              className={
                recrootUserType === "Candidate" ? `${classes.activeButton}` : ""
              }
              sx={styles.btncand}
              variant="outlined"
              // onClick={() => clickedButtonHandler("Candidate")}
            >
              <Typography sx={styles.candtxt}>Candidate</Typography>
              <Typography sx={styles.candsub}>
                I want to discover awesome companies
              </Typography>
            </StyledButton>
            <StyledButton
              name="second"
              className={
                recrootUserType === "Employer" ? `${classes.activeButton}` : ""
              }
              sx={styles.btncand}
              variant="outlined"
              // onClick={() => clickedButtonHandler("Employer")}
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
  )
}

export default RedirectUser
