import React, { useState } from "react";
// import "./upload.css";
import BackupIcon from "@mui/icons-material/Backup";
import Dropzone from "react-dropzone";
import { Typography } from "@mui/material";
import Image from "next/image";

export function Uploader(props) {
  const [fileNames, setFileNames] = useState([]);
  const [pdf, setPdf] = useState();

  const handleDrop = (acceptedFiles) => {
    setFileNames(acceptedFiles.map((file) => file.name));
    setPdf(acceptedFiles[0], pdf, fileNames);
    props.handleChange(acceptedFiles[0]);
  };

  return (
    <div className="App">
      <form action="#" encType="multipart/formdata">
        <Dropzone
          onDrop={handleDrop}
          accept={{ "application/pdf": [".pdf", ".docx", ".doc"] }}
          minSize={1024}
          maxSize={5072000}
        >
          {({
            getRootProps,
            getInputProps,
            isDragActive,
            isDragAccept,
            isDragReject,
            fileRejections,
            acceptedFiles,
          }) => {
            const fileRejectionItems = fileRejections.map(
              ({ file, errors }) => {
                return (
                  <p key={file.path}>
                    {errors.map((e) => (
                      <p key={e.code}>
                        {e.code === "file-too-large"
                          ? "* File size is Larger Than 5mb . Try Another File"
                          : `*${e.message}`}
                      </p>
                    ))}
                  </p>
                );
              }
            );
            const additionalClass = isDragAccept
              ? "accept"
              : isDragReject
              ? "reject"
              : "";

            return (
              <div
                {...getRootProps({
                  className: `dropzone ${additionalClass}`,
                })}
                style={{ cursor: "pointer" }}
              >
                <Typography variant="h7" style={{ color: "red" }}>
                  {fileRejectionItems}{" "}
                </Typography>
                <input {...getInputProps()} />

                {props?.pdf?.name !== undefined ? (
                  <>
                    <Image
                      src={"/pdfImage.png"}
                      alt=""
                      height={300}
                      width={400}
                      style={{margin:'auto'}}
                    />
                    <Typography fontWeight={600}>{props?.pdf?.name}</Typography>
                  </>
                ) : props?.pdfC?.name !== undefined ? (
                  <>
                    <Image
                      src={"/pdfImage.png"}
                      alt=""
                      height={300}
                      style={{margin:'auto'}}
                      width={400}
                    />
                    <Typography fontWeight={600}>{props?.pdfC?.name}</Typography>
                  </>
                ) : (
                  <>
                    <span>
                      <BackupIcon sx={{ fontSize: "6em" }} />
                    </span>
                    <span>
                      Drag & drop some files here, or
                      <span style={{ color: "#4F9AFF" }}>
                        click here to select files
                      </span>
                    </span>
                  </>
                )}
              </div>
            );
          }}
        </Dropzone>

        <Typography variant="p" sx={{ color: "#6A6A6A", mb: "15px" }}>
          Max File size is 5mb (.pdf or .doc files only)
        </Typography>
      </form>
    </div>
  );
}
