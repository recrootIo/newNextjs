"use client";
import React, { useState } from "react";
import "./upload.module.css";
import BackupIcon from "@mui/icons-material/Backup";
import Dropzone from "react-dropzone";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import Image from "next/image";

export function UploadPhoto(props) {
  const [fileNames, setFileNames] = useState([]);
  const [drag, setDrag] = useState();
  const [pdf, setPdf] = useState();

  const handleDrop = (acceptedFiles) => {
    setFileNames(acceptedFiles.map((file) => file.name));
    setPdf(acceptedFiles[0], pdf, drag, fileNames);
    props.handleChange(acceptedFiles[0]);
  };

  const maxSize = 3072000;
  return (
    <div className="App">
      <form action="#" encType="multipart/formdata">
        <Dropzone
          onDrop={handleDrop}
          accept={{
            "image/jpg": [".png", ".jpg", ".jpeg"],
          }}
          minSize={1024}
          maxSize={maxSize}
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
                          ? "* File size is Larger Than 3mb . Try Another File"
                          : `*${e.message}`}
                      </p>
                    ))}
                  </p>
                );
              }
            );
            const additionalClass = isDragAccept
              ? "accept" && setDrag(false)
              : isDragReject
              ? "reject" && setDrag(isDragReject)
              : "";

            if (acceptedFiles && acceptedFiles[0]?.name) {
              return (
                <Image
                  src={URL.createObjectURL(acceptedFiles[0])}
                  alt=""
                  height={"300px"}
                  width={"520px"}
                />
              );
            }

            return (
              <div
                {...getRootProps({
                  className: `dropzone ${additionalClass}`,
                })}
                style={{ cursor: "pointer" }}
              >
                <p style={{ color: "#fe7171" }}>{fileRejectionItems} </p>
                <input {...getInputProps()} />
                <span>
                  <BackupIcon sx={{ fontSize: "6em" }} />
                </span>
                <span>
                  Drag and drop or
                  <span style={{ color: "#4F9AFF" }}>Browse</span>
                </span>
              </div>
            );
          }}
        </Dropzone>
        {!pdf && (
          <CustomTypography variant="p" sx={{ color: "#6A6A6A", mb: "15px" }}>
            Max File size is 3mb (.jpg or .png or.jpeg files only)
          </CustomTypography>
        )}
      </form>
    </div>
  );
}
