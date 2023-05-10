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
import "./personalDetails.module.css";

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const PersonalDetails = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectedOptionsChange = (event, newValue) => {
    setSelectedOptions(newValue);
  };

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  //Experience
  const [age, setAge] = React.useState("");

  const handleExperienceChange = (event) => {
    setAge(event.target.value);
  };

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
          <TextField
            id="outlined-basic"
            label="Full Name *"
            variant="outlined"
            sx={{ width: "100%%" }}
          />
          <Autocomplete
            freeSolo
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ display: "flex", justifyContent: "center" }}
            renderInput={(params) => (
              <TextField
                fullWidth
                {...params}
                label="Job Title *"
                sx={{
                  background: "#FFFFFF",
                  borderColor: "#949494",
                  borderRadius: "8px",
                }}
              />
            )}
          />
          <TextField
            id="outlined-basic"
            label="Email Id *"
            variant="outlined"
            sx={{ width: "100%" }}
          />
          <TextField
            id="outlined-basic"
            label="Mobile No *"
            variant="outlined"
            sx={{ width: "100%" }}
          />
          <Stack direction="row" sx={{ width: "100%" }} spacing={2}>
            <Autocomplete
              freeSolo
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
              renderInput={(params) => (
                <TextField
                  fullWidth
                  {...params}
                  label="Enter your Location *"
                  sx={{
                    background: "#FFFFFF",
                    borderColor: "#949494",
                    borderRadius: "8px",
                    width: "100%",
                  }}
                />
              )}
            />
            <Autocomplete
              freeSolo
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
              renderInput={(params) => (
                <TextField
                  fullWidth
                  {...params}
                  label="Region *"
                  sx={{
                    background: "#FFFFFF",
                    borderColor: "#949494",
                    borderRadius: "8px",
                    width: "100%",
                  }}
                />
              )}
            />
          </Stack>
          <FormControl sx={{ m: 1, width: "100%" }}>
            <InputLabel id="demo-multiple-chip-label">Language</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 0.5,
                  }}
                >
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Stack direction="row" spacing={2}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Experience(Years)
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleExperienceChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Current Salary(Per Annum)
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleExperienceChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Do you already have an offer?*
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              sx={{ gap: "100px", mt: "12px" }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
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
              Save
            </Button>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};

export default PersonalDetails;
