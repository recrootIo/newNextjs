"use client";
import dynamic from "next/dynamic";
import { PRIMARY } from "../../theme/colors";
import { MAX } from "../../theme/spacings";
import { CustomTypography } from "../../ui-components/CustomTypography/CustomTypography";
import {
  Box,
  Button,
  Grid,
  TextField,
  Card,
  styled,
  Stack,
  Container,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { openAlert } from "@/redux/slices/alert";
import { ERROR, SUCCESS } from "@/utils/constants";
import http from "@/redux/http-common";

const CssTextField = styled(TextField)({
  width: "100%",
  "& label.Mui-focused": {
    color: "#00004d",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },

    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
});

const SubscribHome = () => {
  const [userEmail, setEmail] = useState("");
  const dispatch = useDispatch();
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const subscribeNow = async () => {
    if (emailRegex.test(userEmail)) {
      await http
        .post("addSubscribers", { userEmail })
        .then((res) => {
          console.log(res, "res");
          dispatch(
            openAlert({
              type: SUCCESS,
              message: res.data,
            })
          );
        })
        .catch((res) => {
          dispatch(
            openAlert({
              type: ERROR,
              message: res.data,
            })
          );
        });
    } else {
      dispatch(
        openAlert({
          type: ERROR,
          message: "invalid Email",
        })
      );
    }
  };

  return (
    <div className="subscribe">
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Container>
          <Card
            sx={{
              minHeight: "240px",
              borderRadius: "15px",
              backgroundColor: "#D4F0FC",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              top: { xs: "80px", md: "120px" },
            }}
            variant="outlined"
          >
            <Grid container>
              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <Stack
                  direction={"row"}
                  gap={"10px"}
                  justifyContent="center"
                  sx={{ flexWrap: "wrap" }}
                >
                  <CustomTypography
                    sx={{
                      fontWeight: "800",
                      fontSize: MAX,
                      fontFamily: "Inter-Bold",
                    }}
                  >
                    Subscribe
                  </CustomTypography>
                  <CustomTypography
                    sx={{
                      fontWeight: "800",
                      fontSize: MAX,
                      color: PRIMARY,
                      fontFamily: "Inter-Bold",
                    }}
                  >
                    Us
                  </CustomTypography>
                </Stack>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: { md: "row", sm: "column", xs: "column" },
                  padding: { md: "10px", sm: "20px", xs: "20px" },
                }}
              >
                <CssTextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  size="small"
                  type={"email"}
                  sx={{
                    width: { md: "60%", sm: "100%", xs: "100%" },
                    backgroundColor: "white",
                    borderRadius: "10px",
                  }}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    m: "10px",
                    height: "40px",
                    width: { md: "20%", sm: "100%", xs: "100%" },
                    bgcolor: "#034275 !important",
                  }}
                  onClick={() => subscribeNow()}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </Box>
    </div>
  );
};

export default dynamic(() => Promise.resolve(SubscribHome), { ssr: false });
