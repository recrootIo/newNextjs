"use client";
import React, { useEffect, useState } from "react";
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
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Employer from "..";
import { useDispatch } from "react-redux";
import http from "@/redux/http-common";
import { openAlert } from "@/redux/slices/alert";
import { ERROR, SUCCESS } from "@/utils/constants";
import { retrievePersonal } from "@/redux/slices/personal";

const style = {
  passinput: {
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

const MyAccount = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [passhow, setpasshow] = useState(false);
  const [passhownew, setpasshownew] = useState(false);
  const [passhowcon, setpasshowcon] = useState(false);
  //   const member = useSelector((state) => state.company.members);
  //   const [memberrole, setMemberrole] = React.useState(member);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const [cand, setcand] = useState({});
  useEffect(() => {
    setcand(JSON.parse(localStorage.getItem("User"))?.User);
  }, []);

  const dispatch = useDispatch();

  const [user, setUser] = useState({
    _id: cand?._id,
    firstName: cand?.firstName,
    lastName: cand?.lastName,
    email: cand?.email,
    password: "",
    newPassword: "",
    mobile: "",
    otp: "",
    method: "",
  });

  useEffect(() => {
    setUser({
      _id: cand?._id,
      firstName: cand?.firstName,
      lastName: cand?.lastName,
      email: cand?.email,
      password: "",
      newPassword: "",
      mobile: "",
      otp: "",
      method: cand?.method,
    });
  }, [cand?._id, cand?.email, cand?.firstName, cand?.lastName, cand?.method]);

  const [confrimp, setconfrimp] = useState("");

  function validateEmail(email) {
    let result = true;

    const re =
      /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    result = re.test(String(email).toLowerCase());
    if (!result) {
      dispatch(openAlert({ type: ERROR, message: "Invalid Email address" }));
    }
    return result;
  }
  /**
   * Action to update the User
   */
  const updateUser = () => {
    if (user.newPassword !== "") {
      if (user.newPassword.length < 8) {
        dispatch(
          openAlert({
            type: ERROR,
            message: "Password should be minimum 8 characters!",
          })
        );
        return;
      }
      var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      if (re.test(user.newPassword) === false) {
        dispatch(
          openAlert({
            type: ERROR,
            message:
              "Password must contain at least One uppercase character, One lowercase character ,One Special character and One number",
          })
        );
        return;
      } else {
        if (user.newPassword !== confrimp) {
          dispatch(
            openAlert({
              type: ERROR,
              message: "New Password And Confirm Password Are Not Same",
            })
          );
          return;
        }
      }
    }
    if (cand?.email !== user.email) {
      validateEmail(user.email);
      return;
    }

    http
      .put("updateUser", user)
      .then((res) => {
        dispatch(openAlert({ type: SUCCESS, message: res?.data?.message }));
        if (res.status === 200) {
          dispatch(retrievePersonal());
        }
      })
      .catch((res) =>
        dispatch(
          openAlert({ type: ERROR, message: res?.response?.data?.message })
        )
      );
    if (
      cand?.email !== user.email ||
      cand?.firstName !== user.firstName ||
      cand?.lastName !== user.lastName
    ) {
      const loggedInUser = JSON.parse(localStorage.getItem("User"));
      loggedInUser.User.firstName = user.firstName;
      loggedInUser.User.lastName = user.lastName;
      localStorage.setItem("User", JSON.stringify(loggedInUser));
    }
  };

  const onChange = (e) => {
    const { id, value } = e.target;

    setUser((state) => ({
      ...state,
      [id]: value,
    }));
  };

  const handleMouseDownPasswordnew = (event) => {
    event.preventDefault();
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownPasswordcon = (event) => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => {
    setpasshow(!passhow);
  };
  const handleClickShowPasswordnew = () => {
    setpasshownew(!passhownew);
  };
  const handleClickShowPasswordcon = () => {
    setpasshowcon(!passhowcon);
  };

  return (
    <>
      <Employer>
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
              <Stack spacing={3} sx={{ mt: "25px" }}>
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  spacing={2}
                  sx={{ width: "100%" }}
                >
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    placeholder="Enter First Name"
                    autoFocus
                    value={user?.firstName || ""}
                    onChange={onChange}
                    sx={{ ...style.passinput, bgcolor: "white" }}
                    InputLabelProps={{ style: { color: "black" } }}
                  />
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    placeholder="Enter Last Name"
                    value={user?.lastName || ""}
                    onChange={onChange}
                    sx={{ ...style.passinput, bgcolor: "white" }}
                    InputLabelProps={{ style: { color: "black" } }}
                  />
                </Stack>
                {/* <TextField
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        type="email"
                        placeholder="Enter E-mail"
                        required
                        //sx={style.txtinput}
                        sx={{ ...style.passinput, bgcolor: "white" }}
                        InputLabelProps={{ style: { color: "black" } }}
                          value={user?.email || ''}
                          onChange={onChange}
                      /> */}
                <FormControl sx={style.passinput}>
                  <InputLabel htmlFor="password" sx={{ color: "black" }}>
                    Old Password
                  </InputLabel>
                  <OutlinedInput
                    inputProps={{
                      style: {
                        backgroundColor: "white",
                        borderColor: "white",
                      },
                    }}
                    required
                    id="password"
                    label="Old Password"
                    placeholder="Enter Password"
                    value={user.password}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          sx={{ bgcolor: "white" }}
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {passhow ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    type={passhow ? "text" : "password"}
                    onChange={onChange}
                  />
                </FormControl>
                <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                  <FormControl
                    variant="outlined"
                    sx={{ ...style.passinput, width: "100%" }}
                  >
                    <InputLabel
                      htmlFor="outlined-confirm-adornment-password"
                      sx={{ color: "black" }}
                    >
                      New Password
                    </InputLabel>
                    <OutlinedInput
                      inputProps={{
                        style: {
                          backgroundColor: "white",
                          borderColor: "white",
                        },
                      }}
                      id="newPassword"
                      label="newPassword"
                      onChange={onChange}
                      type={passhownew ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPasswordnew}
                            onMouseDown={handleMouseDownPasswordnew}
                            edge="end"
                          >
                            {passhownew ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControl
                    variant="outlined"
                    sx={{ ...style.passinput, width: "100%" }}
                  >
                    <InputLabel
                      htmlFor="outlined-confirm-adornment-password"
                      sx={{ color: "black" }}
                    >
                      Confirm Password
                    </InputLabel>
                    <OutlinedInput
                      inputProps={{
                        style: {
                          backgroundColor: "white",
                          borderColor: "white",
                        },
                      }}
                      id="outlined-confirm-adornment-password"
                      label="Confirm Password"
                      placeholder="Confirm Password"
                      type={passhowcon ? "text" : "password"}
                      onChange={(e) => {
                        setconfrimp(e.target.value);
                      }}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPasswordcon}
                            onMouseDown={handleMouseDownPasswordcon}
                            edge="end"
                          >
                            {passhowcon ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Stack>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#015FB1 !important",
                      width: { xs: "100%", sm: "360px" },
                      height: "50px",
                      mt: { xs: "30px", md: "55px" },
                    }}
                    onClick={() => updateUser()}
                  >
                    Update
                  </Button>
                </Box>
              </Stack>
            </Box>
          </CardContent>
        </Card>
      </Employer>
    </>
  );
};

export default MyAccount;
