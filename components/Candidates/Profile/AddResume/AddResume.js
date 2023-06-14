"use client";
import * as React from "react";
import {
  Box,
  Stack,
  Button,
  // TextField,
  Container,
  Card,
  CardContent,
} from "@mui/material";
// import { useMemo } from "react";
// import { useDropzone } from "react-dropzone";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch } from "react-redux";
import { updateCurrentScreen } from "@/redux/slices/candidate";
import { Upload } from "@/ui-components/Uploads/Uploads";
import personalService from "@/redux/services/personal.service";
// import { AddResumeAndThenGet, retrievePersonal } from "@/redux/slices/personal";
import { openAlert } from "@/redux/slices/alert";
import { ERROR, SUCCESS } from "@/utils/constants";
import { retrievePersonal } from "@/redux/slices/personal";
import CalculatePercentage from "@/utils/CalculatePercentange";

const AddResume = () => {
  const [pdf, setPdf] = React.useState();
  // const [fileNames, setFileNames] = React.useState("");

  const dispatch = useDispatch();

  const gotToResume = () => {
    dispatch(updateCurrentScreen(""));
    setPdf("");
  };

  const handleChange = (file) => {
    setPdf(file);
    // setFileNames(file.name);
  };

  const send = (file) => {
    let formData = new FormData();
    formData.append("resume", file);
    // console.log(formData, "formData");

    personalService
      .addResume(formData)
      .then((res) => {
        dispatch(
          openAlert({
            type: SUCCESS,
            message: "Resume is Updated",
          })
        );
        dispatch(updateCurrentScreen(""));
        CalculatePercentage();
      })
      .catch((error) => {
        dispatch(
          openAlert({
            type: ERROR,
            message: error.response.data.message || "Something went wrong",
          })
        );
      });
    setTimeout(() => {
      dispatch(retrievePersonal());
    }, 1500);
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
              onClick={() => gotToResume()}
            >
              Back
            </Button>
          </Box>

          <CardContent
            sx={{
              p: { md: "50px", sm: "22px", xs: "22px" },
              paddingBottom: "100px !important",
            }}
          >
            <CustomTypography
              className="personalDetailTitle"
              variant="h4"
              sx={{
                display: "flex",
                justifyContent: "center",
                fontFamily: "Inter-bold",
                fontSize: "33px",
              }}
            >
              Add Resume
            </CustomTypography>
            <Stack spacing={2} sx={{ mt: "50px" }}>
              <Upload handleChange={handleChange} pdf={pdf} />
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  className={pdf ? "activeButton" : "disabledButtons"}
                  disabled={!pdf}
                  sx={{ width: "50%" }}
                  onClick={() => send(pdf)}
                >
                  Add
                </Button>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default AddResume;
