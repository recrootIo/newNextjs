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
import { useMemo } from "react";
import { useDropzone } from "react-dropzone";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch } from "react-redux";
import { updateCurrentScreen } from "@/redux/slices/candidate";
import { Upload } from "@/ui-components/Uploads/Uploads";
import personalService from "@/redux/services/personal.service";
import { retrievePersonal } from "@/redux/slices/personal";
import { openAlert } from "@/redux/slices/alert";
import { ERROR, SUCCESS } from "@/utils/constants";

const AddResume = () => {
  const [pdf, setPdf] = React.useState();
  const [fileNames, setFileNames] = React.useState("");

  const dispatch = useDispatch();

  const gotToResume = () => {
    dispatch(updateCurrentScreen(""));
  };

  const handleChange = (file) => {
    setPdf(file);
    setFileNames(file.name);
  };

  const send = () => {
    const formData = new FormData();
    console.log(pdf, "pdf");
    formData.append("resume", pdf);

    personalService
      .addResume(formData)
      .then(() => {
        dispatch(
          openAlert({
            type: SUCCESS,
            message: "Resume is Updated",
          })
        );
        dispatch(updateCurrentScreen(""));
        dispatch(retrievePersonal());
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

          <CardContent sx={{ p: "50px", paddingBottom: "100px !important" }}>
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
                  sx={{
                    bgcolor: "#015FB1 !important",
                    width: "50%",
                    borderRadius: "8px",
                  }}
                  onClick={() => send()}
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
