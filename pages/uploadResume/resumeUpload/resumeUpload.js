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
} from "@mui/material";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import { useMemo } from "react";
import Image from "next/image";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";

const steps = [
  "Select master blaster campaign settings",
  "Create an ad group",
  "Create an ad",
  "Select master blaster campaign settings",
  "Create an ad group",
];

const options = { multi: true };

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#1097CD",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  height: "200px",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const AddResume = () => {
  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: {
      "/.pdf": [],
      "/.docx": [],
      "/.doc": [],
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map((e) => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));

  return (
    <div
      style={{
        backgroundImage: `url("/bg.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box className="topbar"></Box>
      <Container>
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
          <Stepper sx={{ width: "50%" }} activeStep={0} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel></StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <Box>
          <CustomTypography
            className="resumeUploadTitle"
            variant="h5"
            gutterBottom
          >
            Add Resume
          </CustomTypography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CustomTypography
              width="70%"
              className="resumeUploadText"
              gutterBottom
            >
              Use our uploader to save your resume and search and apply for
              thousand of jobs without uploading resume each time
            </CustomTypography>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <Stack width="70%" spacing={3}>
              <div className="container">
                <div {...getRootProps({ style })}>
                  <input {...getInputProps()} />
                  <p>Drag and drop some files here, or click to select files</p>
                  <em>(Only *.jpeg and *.png images will be accepted)</em>
                </div>
                <aside>
                  <h4>Accepted files</h4>
                  <ul>{acceptedFileItems}</ul>
                  <h4>Rejected files</h4>
                  <ul>{fileRejectionItems}</ul>
                </aside>
              </div>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Button className="nextBtn" variant="contained">
                  Next
                </Button>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default AddResume;
