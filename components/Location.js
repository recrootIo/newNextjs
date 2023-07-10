import { Box, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { v4 as uuidv4 } from "uuid";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { countryInfor, updateFinaldetails } from "@/redux/slices/companyslice";
import { openAlert } from "@/redux/slices/alert";
import { ERROR, SUCCESS } from "@/utils/constants";
uuidv4();

export default function Location(props) {
  const coun = useSelector((state) => state.company.locate);
  const final = useSelector((state) => state.company);

  const dispatch = useDispatch();
  const [location, setLocation] = useState([
    { id: uuidv4(), address: { label: "", value: {} } },
  ]);
  useEffect(() => {
    if (coun.length > 0) {
      setLocation(coun);
    }
  }, [coun]);

  const handleAddInput = () => {
    setLocation([
      ...location,
      { id: uuidv4(), address: { label: "", value: {} } },
    ]);
  };
  const handleMemRemove = (id) => {
    let updatedField = [...location].filter((fiel) => fiel.id !== id);
    setLocation(updatedField);
    dispatch(countryInfor(updatedField));
    dispatch(
      openAlert({
        type: ERROR,
        message: "Company Location Was Removed",
      })
    );
    dispatch(updateFinaldetails({ ...final, locate: updatedField }));
  };

  const handleChange = (id, val) => {
    const newMemChange = location.map((i) => {
      if (id === i.id) {
        i = { ...i, address: val };
        i.id = id;
      }
      return i;
    });
    setLocation(newMemChange);
    dispatch(countryInfor(newMemChange));
    if (val === null) {
      return;
    }
    dispatch(updateFinaldetails({ ...final, locate: newMemChange }));
    dispatch(
      openAlert({
        type: SUCCESS,
        message: "Company Location Was Updated",
      })
    );
  };

  return (
    <>
      <form>
        <Box>
          {location.map((locate, index) => (
            <>
              <Typography
                variant="h5"
                sx={{
                  m: "0 0px 5px 20px",
                  fontWeight: "700",
                  fontSize: "15px",
                  lineHeight: "23px",
                }}
              >
                Location {index + 1}
              </Typography>
              <Box
                key={locate.id}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box sx={{ width: "85%" }}>
                  <GooglePlacesAutocomplete
                    apiKey="AIzaSyCLT3fP1-59v2VUVoifXXJX-MQ0HA55Jp4"
                    selectProps={{
                      isClearable: true,
                      placeholder: "Enter Your Location",
                      value: locate.address,
                      onChange: (val) => {
                        handleChange(locate.id, val);
                      },
                      styles: {
                        input: (provided) => ({
                          ...provided,
                          boxShadow: 0,
                          height: "40px",
                        }),
                        singleValue: (provided) => ({
                          ...provided,
                          boxShadow: 0,
                        }),
                      },
                    }}
                  />
                </Box>
                {location.length > 1 ? (
                  <IconButton
                    variant="contained"
                    onClick={() => {
                      handleMemRemove(locate.id);
                    }}
                  >
                    <RemoveCircleOutlineIcon
                      sx={{
                        fontSize: { sm: "1.5rem", xs: "1.5rem" },
                        color: "#4fa9ff",
                      }}
                    />
                  </IconButton>
                ) : (
                  ""
                )}
                <IconButton variant="contained" onClick={handleAddInput}>
                  <ControlPointIcon
                    sx={{
                      fontSize: { sm: "1.5rem", xs: "1.5rem" },
                      color: "#4fa9ff",
                    }}
                  />
                </IconButton>
              </Box>
            </>
          ))}
        </Box>
      </form>
    </>
  );
}
