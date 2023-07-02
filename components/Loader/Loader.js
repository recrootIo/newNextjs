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
        {/* <Image
          src="/logorecR-logo.png"
          alt="Logo og the page loader"
          priority={true}
          width="300"
          height="200"
          style={{ height: "300px", width: "auto" }}
        /> */}
        <img alt="" src={"/R-logorec.png"} style={{ height: "300px" }} />
        <div className="custom-loader"></div>
      </Box>
    </Box>
  );
}

export default Loader;
