"use client";
import * as React from "react";
import {
  Box,
  Stack,
  Button,
  TextField,
  Container,
  Card,
  CardContent,
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentScreen } from "@/redux/slices/candidate";

const UpdatePassword = () => {
  const dispatch = useDispatch();
  const gotToDashboard = () => {
    dispatch(updateCurrentScreen(""));
  };

  // const [user, setUser] = useState({
  //   _id: cand?._id,
  //   email: cand?.email,
  //   password: "",
  //   newPassword: "",
  //   mobile: "",
  //   otp: "",
  //   method: "",
  // });

  return (
    <div>
      <Container>
        <Card>
          <Box sx={{ bgcolor: "#2699FF" }}>
            <Button
              variant="text"
              startIcon={<ArrowBackIcon />}
              sx={{
                color: "white",
                textTransform: "capitalize",
                fontSize: "18px",
              }}
              onClick={() => gotToDashboard()}
            >
              Back
            </Button>
          </Box>

          <CardContent sx={{ p: "70px", paddingBottom: "100px !important" }}>
            <CustomTypography
              className="personalDetailTitle"
              variant="h4"
              sx={{
                display: "flex",
                justifyContent: "center",
                fontWeight: 600,
                fontFamily: "Inter-bold",
                mt: "60px",
              }}
              gutterBottom
            >
              UPDATE PASSWORD
            </CustomTypography>
            <Stack spacing={2} sx={{ mt: "100px" }}>
              <FormControl variant="outlined" sx={{ width: "100%" }}>
                <InputLabel htmlFor="password">Old Password</InputLabel>
                {/* <OutlinedInput
                  required
                  id="password"
                  label="Old Password"
                  value={user.password}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
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
                /> */}
              </FormControl>
              <TextField
                required
                id="outlined-basic"
                label="New Password"
                variant="outlined"
              />
              <TextField
                required
                id="outlined-basic"
                label="Confirm Password"
                variant="outlined"
              />
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#015FB1 !important",
                    width: "50%",
                    borderRadius: "8px",
                  }}
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
