"use client";
import * as React from "react";
import {
  Box,
  Stack,
  Button,
  TextField,
  Container,
  Autocomplete,
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

const AddCertificates = () => {
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
          Add Certificates
        </CustomTypography>
        <Stack spacing={2} sx={{ mt: "40px" }}>
          <TextField id="outlined-basic" label="Title" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Project Name"
            variant="outlined"
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
            <TextField
              id="outlined-basic"
              label="Certificate link"
              variant="outlined"
              sx={{ width: "95%" }}
            />
            <Button
              variant="outlined"
              component="label"
              sx={{
                bgcolor: "transparent",
                borderColor: "#a3c2c2",
                width: "5%",
              }}
            >
              <img src="/upload.png" alt="" style={{ width: "20px" }} />
              <input
                type="file"
                accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.pdf,.jpg,.jpeg,.png"
                hidden
                name="certificate"
                // onChange={(e) => {
                //   handleChange(e);
                // }}
              />
            </Button>
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

export default AddCertificates;
