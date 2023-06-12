"use client";
import * as React from "react";
import {
  Box,
  Stack,
  Button,
  Container,
  Stepper,
  Step,
  StepLabel,
  Backdrop,
  CircularProgress,
} from "@mui/material";

import Image from "next/image";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { Upload } from "@/ui-components/Uploads/Uploads";
import { isEmpty } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { uplodeResumeFiles } from "@/redux/slices/uploadingResume";
import { openAlert } from "@/redux/slices/alert";
import { ERROR } from "@/utils/constants";
import http from "@/redux/http-common";
import { retrievePersonal } from "@/redux/slices/personal";
import Cookies from "js-cookie";

const steps = [
  "Select master blaster campaign settings",
  "Create an ad group",
  "Create an ad",
  "Select master blaster campaign settings",
  "Create an ad group",
];

const AddResume = ({ ...props }) => {
  const dispatch = useDispatch();
  const { scroll, position } = props;
  const user = Cookies.get("userID");
  const [open, setOpen] = React.useState(false);
  const [uplodeResumeFile, setuplodeResumeFile] = React.useState([]);

  const enableUpload = isEmpty(uplodeResumeFile);

  const actionNext = () => {
    handleFirstresumeSubmit();
  };

  const handleChange = (file) => {
    setuplodeResumeFile(file);
    setFileNames(file.name);
  };

  const handleFirstresumeSubmit = async () => {
    if (!enableUpload) {
      setOpen(true);
      dispatch(uplodeResumeFiles({ uplodeResumeFile }))
        .unwrap()
        .then(async (originalPromiseResult) => {
          if (originalPromiseResult === undefined) {
            dispatch(
              openAlert({
                type: ERROR,
                message:
                  "Please check file extension and size, and upload a compatible file from your local device that is not sourced from Google Drive",
              })
            );

            setuplodeResumeFile([]);
            setOpen(false);
            return;
          }

          const userObject = {
            userId: user,
            file: originalPromiseResult.Data[0].Location,
          };

          await http
            .post("updateResume", userObject)
            .then((res) => {
              setOpen(false);
              dispatch(retrievePersonal());
              scroll(position + 1);
            })
            .catch(() => {
              console.warn(error, "error");
              setOpen(false);
            });
        })
        .catch((error) => {
          console.log(error);
          setOpen(false);
        });
    }
  };

  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            width: { md: "70%", sm: "100%", xs: "100%" },
          }}
        >
          <Box className="logoContainer">
            <Image
              className="logoImage"
              src="/logo 8.png"
              alt=""
              width="0"
              height="0"
              sizes="100vw"
            />
          </Box>
          <Box className="stepperContainer">
            <Stepper activeStep={0} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel></StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
          <Stack sx={{ gap: "10px" }}>
            <CustomTypography
              className="resumeUploadTitle"
              variant="h5"
              gutterBottom
            >
              Add Resume
            </CustomTypography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <CustomTypography
                width="100%"
                className="resumeUploadText"
                gutterBottom
              >
                Use our uploader to save your resume and search and apply for
                thousand of jobs without uploading resume each time
              </CustomTypography>
            </Box>
          </Stack>
          <Stack
            sx={{
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "30px",
              width: "100%",
              mt: "20px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Stack sx={{ gap: "20px", width: "100%" }}>
                <Upload handleChange={handleChange} pdf={uplodeResumeFile} />
                <Backdrop
                  sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                  }}
                  open={open}
                >
                  <Box sx={{ display: "inline-flex", width: 50 }}>
                    <CircularProgress color="inherit" />
                    <Box
                      sx={{
                        top: 100,
                        left: 10,
                        bottom: 0,
                        right: 10,
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CustomTypography
                        component="div"
                        variant="h6"
                        gutterBottom
                      >
                        Hold tight while our AI extracts the information from
                        your CV. This could take a while. Please wait for it to
                        finish before closing this window.
                      </CustomTypography>
                    </Box>
                  </Box>
                </Backdrop>
              </Stack>
            </Box>

            <Stack
              direction={"row"}
              sx={{
                width: "100%",
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant="contained"
                sx={{ width: "277px" }}
                className={enableUpload ? "disabledButtons" : "nextBtn"}
                onClick={() => actionNext()}
                disabled={enableUpload}
              >
                Next
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default AddResume;
