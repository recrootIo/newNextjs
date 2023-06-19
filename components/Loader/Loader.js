/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Box } from "@mui/material";
import Image from 'next/image';


function Loader() {
  return (
    <Box sx={{display: "flex", justifyContent: "center",  
    flexDirection:'column',alignItems:'center'
    //  backgroundImage: 'url("/logoR.png")',
   }}>
    <Box sx={{marginTop:'40vh', display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "30px"}}>
    <img  alt='' src={"/logorec.png"} style={{height:'100px'}}/>
<div className="custom-loader"></div>
    </Box>
    </Box>
  )
}

export default Loader
