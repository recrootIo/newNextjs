"use client";
import React, { useState } from "react";
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
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { BOLD } from "@/theme/fonts";
import EmployerNavbar from "@/components/EmployerNavbar/EmployerNavbar";
import { styles } from "@/components/Employers/CompanyProfile/CompanyProfileStyle";
import Image from "next/image";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Layout from "../layout";

const style = {
  passinput: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
        width: { md: "100%", xs: "100%" },
        height: "60px",
        color: "#BAD4DF",
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

  return (
    <Layout>
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
          My Account
        </CustomTypography>
      </Box>
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
              <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  placeholder="Enter First Name"
                  autoFocus
                  //   value={user?.firstName}
                  //   onChange={onChange}
                  sx={{ ...style.passinput, bgcolor: "white" }}
                  InputLabelProps={{ style: { color: "#BAD4DF" } }}
                />
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  placeholder="Enter Last Name"
                  // value={user?.lastName}
                  // onChange={onChange}
                  sx={{ ...style.passinput, bgcolor: "white" }}
                  InputLabelProps={{ style: { color: "#BAD4DF" } }}
                />
              </Stack>
              <TextField
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
                InputLabelProps={{ style: { color: "#BAD4DF" } }}
                //   value={user?.email}
                //   onChange={onChange}
              />
              <FormControl sx={style.passinput}>
                <InputLabel htmlFor="password" sx={{ color: "#BAD4DF" }}>
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
                  //value={user.password}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        sx={{ bgcolor: "white" }}
                        aria-label="toggle password visibility"
                        // onClick={handleClickShowPassword}
                        // onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {passhow ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  type={passhow ? "text" : "password"}
                  //onChange={onChange}
                />
              </FormControl>
              <Stack direction="row" spacing={2}>
                <FormControl
                  variant="outlined"
                  sx={{ ...style.passinput, width: "100%" }}
                >
                  <InputLabel
                    htmlFor="outlined-confirm-adornment-password"
                    sx={{ color: "#BAD4DF" }}
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
                    //onChange={onChange}
                    type={passhownew ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          // onClick={handleClickShowPasswordnew}
                          // onMouseDown={handleMouseDownPasswordnew}
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
                    sx={{ color: "#BAD4DF" }}
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
                    // onChange={(e) => {
                    //   setconfrimp(e.target.value);
                    // }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          //   onClick={handleClickShowPasswordcon}
                          //   onMouseDown={handleMouseDownPasswordcon}
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
                    width: "360px",
                    height: "50px",
                    mt: "55px",
                  }}
                >
                  Update Password
                </Button>
              </Box>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default MyAccount;
