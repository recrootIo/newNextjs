"use client";
import * as React from "react";
import {
  Box,
  Stack,
  Button,
  TextField,
  Container,
  Autocomplete,
  Stepper,
  Step,
  StepLabel,
  Chip,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { useState } from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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
  const [fromDateValue, setFromDateValue] = React.useState();
  const [toDateValue, setToDateValue] = React.useState();

  return (
    <div style={{ paddingBottom: "100px" }}>
      <Container>
        <CustomTypography
          className="personalDetailTitle"
          variant="h4"
          sx={{
            display: "flex",
            justifyContent: "center",
            fontWeight: 600,
            mt: "100px",
          }}
          gutterBottom
        >
          Edit Personal Details
        </CustomTypography>
        <Stack spacing={2} sx={{ mt: "40px" }}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ display: "flex", justifyContent: "center" }}
            renderInput={(params) => (
              <TextField
                fullWidth
                {...params}
                label="Degree*"
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
                onChange={(newToDateValue) => setToDateValue(newToDateValue)}
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
      </Container>
    </div>
  );
};

export default AddEducation;
