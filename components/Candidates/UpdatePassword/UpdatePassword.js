"use client";
import * as React from "react";
import {
  Box,
  Stack,
  Button,
  Container,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { openAlert } from "@/redux/slices/alert";
import { ERROR, SUCCESS } from "@/utils/constants";
import { getUserId } from "@/utils/HelperFunctions";
// import { DANGER } from "@/theme/colors";
import userService from "@/redux/services/user.service";
import {
  COMPLETE_FIELDS,
  INVALID_PASSWORD,
  NOT_MINIMUM,
  NOT_SAME_PASSWORDS,
  OLD_NOT_PROVIDED,
} from "./constants";
import { updateCurrentScreen } from "@/redux/slices/candidate";

const UpdatePassword = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [newPassVisible, setNewPassVisible] = React.useState(false);
  const [passConfirm, setPassConfirm] = React.useState(false);
  const dispatch = useDispatch();

  const [user, setUser] = React.useState({
    _id: getUserId(),
    password: "",
    confirmPassword: "",
    newPassword: "",
  });

  const handleClickShowPassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleClickShowPasswordnew = () => {
    setNewPassVisible(!newPassVisible);
  };

  const handleClickShowPasswordcon = () => {
    setPassConfirm(!passConfirm);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownPasswordcon = (event) => {
    event.preventDefault();
  };
  const handleMouseDownPasswordnew = (event) => {
    event.preventDefault();
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser((state) => ({
      ...state,
      [name]: value,
    }));
  };

  /**
   * Action to update the User
   */
  const updateUserDetails = async () => {
    const hasDigit = /\d/;
    const hasSpecialChar = /[!@#$%^&*]/;
    const hasLowercase = /[a-z]/;
    const hasUppercase = /[A-Z]/;
    const minLength = 8;

    if (user.password === "") {
      dispatch(
        openAlert({
          type: ERROR,
          message: OLD_NOT_PROVIDED,
        })
      );
      return;
    }

    if (user.newPassword !== "") {
      if (user.newPassword.length < 8) {
        dispatch(
          openAlert({
            type: ERROR,
            message: NOT_MINIMUM,
          })
        );
        return;
      }

      if (
        hasDigit.test(user.newPassword) &&
        hasSpecialChar.test(user.newPassword) &&
        hasLowercase.test(user.newPassword) &&
        hasUppercase.test(user.newPassword) &&
        user.newPassword.length >= minLength
      ) {
        if (user.newPassword !== user.confirmPassword) {
          dispatch(
            openAlert({
              type: ERROR,
              message: NOT_SAME_PASSWORDS,
            })
          );
          return;
        } else {
          await userService
            .updateService(user)
            .then(() => {
              dispatch(
                openAlert({
                  type: SUCCESS,
                  message: "New Password has been saved !",
                })
              );
              dispatch(updateCurrentScreen(""));
            })
            .catch((resend) => {
              dispatch(
                openAlert({
                  type: ERROR,
                  message:
                    resend?.response?.data?.message || "Something went wrong",
                })
              );
            });
          return;
        }
      } else {
        dispatch(
          openAlert({
            type: ERROR,
            message: INVALID_PASSWORD,
          })
        );
        return;
      }
    }

    dispatch(
      openAlert({
        type: ERROR,
        message: COMPLETE_FIELDS,
      })
    );
  };

  return (
    <div>
      <Container>
        <Card variant="outlined">
          <Box sx={{ bgcolor: "#2699FF" }}>
            <Button
              variant="text"
              startIcon={<ArrowBackIcon />}
              sx={{
                color: "white",
                textTransform: "capitalize",
                fontSize: "18px",
              }}
              onClick={() => dispatch(updateCurrentScreen(""))}
            >
              Back
            </Button>
          </Box>

          <CardContent sx={{ p: "50px", paddingBottom: "100px !important" }}>
            <CustomTypography
              className="personalDetailTitle"
              sx={{
                display: "flex",
                justifyContent: "center",
                fontFamily: "Inter-bold",
                fontSize: "33px",
              }}
              gutterBottom
            >
              Update Password
            </CustomTypography>
            <Stack spacing={2} sx={{ mt: "50px" }}>
              <FormControl variant="outlined" sx={{ width: "100%" }}>
                <InputLabel htmlFor="password">Old Password</InputLabel>
                <OutlinedInput
                  required
                  id="password"
                  label="Old Password"
                  placeholder="Enter Password"
                  value={user.password}
                  name="password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {passwordVisible ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  type={passwordVisible ? "text" : "password"}
                  onChange={onChange}
                />
              </FormControl>

              <FormControl variant="outlined" sx={{ width: "100%" }}>
                <InputLabel htmlFor="outlined-confirm-adornment-password">
                  New Password
                </InputLabel>
                <OutlinedInput
                  id="newPassword"
                  label="newPassword"
                  name="newPassword"
                  onChange={onChange}
                  value={user.newPassword}
                  type={newPassVisible ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPasswordnew}
                        onMouseDown={handleMouseDownPasswordnew}
                        edge="end"
                      >
                        {newPassVisible ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              <FormControl variant="outlined" sx={{ width: "100%" }}>
                <InputLabel htmlFor="outlined-confirm-adornment-password">
                  Confirm Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-confirm-adornment-password"
                  label="Confirm Password"
                  name="confirmPassword"
                  value={user.confirmPassword}
                  placeholder="Confirm Password"
                  type={passConfirm ? "text" : "password"}
                  onChange={onChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPasswordcon}
                        onMouseDown={handleMouseDownPasswordcon}
                        edge="end"
                      >
                        {passConfirm ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#015FB1 !important",
                    width: "50%",
                    borderRadius: "8px",
                  }}
                  onClick={() => updateUserDetails()}
                >
                  UPDATE
                </Button>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default UpdatePassword;
