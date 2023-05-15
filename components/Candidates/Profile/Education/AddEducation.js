"use client";
import * as React from "react";
import {
  Box,
  Stack,
  Button,
  TextField,
  Container,
  Autocomplete,
  Card,
  CardContent,
  Radio,
  RadioGroup,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { useState } from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import { SelectChangeEvent } from "@mui/material/Select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch } from "react-redux";
import { updateCurrentScreen } from "@/redux/slices/candidate";
// import { EDUCATION_LEVELS } from "./../constants";

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];

const AddEducation = () => {
  const dispatch = useDispatch();

  const gotToEducation = () => {
    dispatch(updateCurrentScreen(""));
  };

  const [fromDateValue, setFromDateValue] = React.useState();
  const [toDateValue, setToDateValue] = React.useState();

  return (
    <div>
      <Container>
        <Card>
          <Box sx={{ bgcolor: "#2699FF" }}>
            <Button
              variant="text"
              startIcon={<ArrowBackIcon />}
              sx={{
                color: "white",
                textTransform: "capitalize",
                fontSize: "18px",
              }}
              onClick={() => gotToEducation()}
            >
              Back
            </Button>
          </Box>

          <CardContent sx={{ p: "70px", paddingBottom: "100px !important" }}>
            <CustomTypography
              className="personalDetailTitle"
              variant="h4"
              sx={{
                display: "flex",
                justifyContent: "center",
                fontWeight: 600,
                fontFamily: "Inter-bold",
                mt: "60px",
              }}
              gutterBottom
            >
              Add Education
            </CustomTypography>
            <Stack spacing={2} sx={{ mt: "100px" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Graduation
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={name.graduate}
                  label="Graduation"
                  name="graduate"
                  // onChange={props.handleChangesChild}
                >
                  {/* {EDUCATION_LEVELS.map((educate) => (
                    <MenuItem value={educate}>{educate}</MenuItem>
                  ))} */}
                </Select>
              </FormControl>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ display: "flex", justifyContent: "center" }}
                renderInput={(params) => (
                  <TextField
                    fullWidth
                    {...params}
                    label="Specialization*"
                    sx={{
                      background: "#FFFFFF",
                      borderColor: "#949494",
                      borderRadius: "8px",
                    }}
                  />
                )}
              />
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ display: "flex", justifyContent: "center" }}
                renderInput={(params) => (
                  <TextField
                    fullWidth
                    {...params}
                    label="Location*"
                    sx={{
                      background: "#FFFFFF",
                      borderColor: "#949494",
                      borderRadius: "8px",
                    }}
                  />
                )}
              />
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ display: "flex", justifyContent: "center" }}
                renderInput={(params) => (
                  <TextField
                    fullWidth
                    {...params}
                    label="Institute*"
                    sx={{
                      background: "#FFFFFF",
                      borderColor: "#949494",
                      borderRadius: "8px",
                    }}
                  />
                )}
              />
              <Stack direction="row" spacing={2}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="From"
                    value={fromDateValue}
                    onChange={(newFromDateValue) =>
                      setFromDateValue(newFromDateValue)
                    }
                    sx={{ width: "50%" }}
                  />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="From"
                    value={toDateValue}
                    onChange={(newToDateValue) =>
                      setToDateValue(newToDateValue)
                    }
                    sx={{ width: "50%" }}
                  />
                </LocalizationProvider>
              </Stack>

              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#015FB1 !important",
                    width: "50%",
                    borderRadius: "8px",
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  sx={{ bgcolor: "#015FB1 !important", width: "50%" }}
                >
                  Add
                </Button>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default AddEducation;
