/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";

function Loader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        //  backgroundImage: 'url("/logoR.png")',
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
        }}
      >
        {/* <img
            src="/recrootlogo-R-white.png"
            alt="Logo of the page loader"
            className="logo-image"
          /> */}
        <div className="custom-loader"></div>
      </Box>
    </Box>
  );
}

export default Loader;
