"use client";
import React from "react";
import { Typography } from "@mui/material";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const CustomTypography = ({ children, ...props }) => {
  return (
    <Typography className={inter.className} {...props}>
      {children}
    </Typography>
  );
};

// CustomTypography.defaultProps = {
//   fontFamily: "Inter",
// };
