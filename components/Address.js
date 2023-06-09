import {
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { addressSet } from "../slices/job";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { v4 as uuidv4 } from "uuid";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { addressSet } from "@/redux/slices/job";
uuidv4();


export default function Address() {
  const dispatch = useDispatch();
  const addrss = useSelector((state) => state.jobs?.location) || [];
  const [gaddres, setgaddres] = useState('')
  const handleChange2 = (val) => {
    setgaddres(val)
    dispatch(addressSet([...addrss,val.label])).then(
    setgaddres('')
    )
  };

  function removeElementByIndex(array, indexToRemove) {
    return array.slice(0, indexToRemove).concat(array.slice(indexToRemove + 1));
  }
 const handleRemove = (ind) =>{
  dispatch(addressSet(removeElementByIndex(addrss,ind)))
 }  

  return (
    <Box sx={{ p: "20px" }}>
      <Typography variant="p" sx={{
         fontWeight: "700",
         fontSize: "16px",
         lineHeight: "30px",
         mb: "8px",
         mt: "20px",
         color: "#4a4a4a",
      }}>
        Add Location
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <GooglePlacesAutocomplete
            apiKey="AIzaSyCLT3fP1-59v2VUVoifXXJX-MQ0HA55Jp4"
            selectProps={{
              isClearable: true,
              placeholder: "Enter Location",
              value:gaddres || "",
              onChange: (val) => {
                handleChange2(val);
              },
              styles: {
                input: (provided) => ({
                  ...provided,
                  boxShadow: 0,
                  height: "40px",
                  "&:hover": {
                    border: "1px solid purple",
                  },
                }),
                singleValue: (provided) => ({
                  ...provided,
                  boxShadow: 0,
                  "&:hover": {
                    border: "1px solid purple",
                  },
                }),
              },
            }}
          />
        </Box>
      </Box>
      <Box sx={{display:'flex',gap:'10px',flexWrap:'wrap',mt:'15px'}}>
        {addrss?.map((addd,index)=>(
          <Box key={index} sx={{background: "#EFF6FF",
          width:"fit-content",
          p: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "16px",
          cursor: "pointer",}}>
        <Typography sx={{  fontWeight: 700,
    fontSize: "16px",
    lineHeight: "18px",
    color: "#4fa9ff",}}>{addd}</Typography> 
        <IconButton onClick={()=>{handleRemove(index)}}>
        <CloseRoundedIcon />
        </IconButton>
          </Box>
        ))
        }
      </Box>
    </Box>
  );
}
