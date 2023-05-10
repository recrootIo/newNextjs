"use client";
import * as React from "react";
import { Box, Stack, Button, TextField, Container } from "@mui/material";
import { useMemo } from "react";
import { useDropzone } from "react-dropzone";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";

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
    <div style={{ paddingBottom: "100px" }}>
      <Container>
        <CustomTypography
          className="personalDetailTitle"
          variant="h4"
          sx={{
            display: "flex",
            justifyContent: "center",
            fontWeight: 600,
            mt: "100px",
          }}
          gutterBottom
        >
          Add Resume
        </CustomTypography>
        <Stack spacing={2} sx={{ mt: "40px" }}>
          <div className="container">
            <div {...getRootProps({ style })}>
              <input {...getInputProps()} />
              <p>Drag and drop some files here, or click to select files</p>
              <em>(Only *.pdf, .docx and *.doc files will be accepted)</em>
            </div>
            <aside>
              <h4>Accepted files</h4>
              <ul>{acceptedFileItems}</ul>
              <h4>Rejected files</h4>
              <ul>{fileRejectionItems}</ul>
            </aside>
          </div>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#015FB1 !important",
                width: "50%",
                borderRadius: "8px",
              }}
            >
              Add
            </Button>
          </Box>
        </Stack>
      </Container>
    </div>
  );
};

export default AddResume;
