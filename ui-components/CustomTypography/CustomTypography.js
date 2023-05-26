"use client";
import React from "react";
import { Typography } from "@mui/material";

export const CustomTypography = ({ children, ...props }) => {
  return <Typography {...props}>{children}</Typography>;
};
