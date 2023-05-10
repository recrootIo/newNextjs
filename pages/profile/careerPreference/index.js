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
  IconButton,
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
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

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

const AddCareerPreference = () => {
  const [availability, setAvailability] = React.useState("");
  const [address, setaddress] = useState("");
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleAvailabilityChange = (event) => {
    setAvailability(event.target.value);
  };

  const handleWorkPreferenceChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleSelect = async (selected) => {
    if (selected?.label) {
      setjobLocations((state) => [...state, selected?.label]);
      try {
        const res = await userService.insertNewLocation(
          users?._id,
          selected?.label
        );
        NotifySuccess(res.data);
      } catch (err) {
        NotifyFailed();
      }
      setaddress("");
    }
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
          Add Career Preference
        </CustomTypography>
        <Stack spacing={2} sx={{ mt: "40px" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Availability</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={availability}
              label="Availability"
              onChange={handleAvailabilityChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
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
                label="Job Position"
                sx={{
                  background: "#FFFFFF",
                  borderColor: "#949494",
                  borderRadius: "8px",
                }}
              />
            )}
          />
          <Stack gap={1}>
            <Box sx={{ display: "flex" }}>
              {/* code copied from job preferences of job positions at current site */}
              <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                fullWidth
                disablePortal={true}
                name="workPreference"
                //value={title}
                //options={titleDesc.map((option) => option.rol.role)}
                renderInput={(params) => (
                  <TextField
                    variant="outlined"
                    {...params}
                    label="Work Preference"
                    name="workPreference"
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                    }}
                  />
                )}
              />
              <IconButton>
                <AddIcon sx={{ color: "#1976d2" }} />
              </IconButton>
            </Box>
            <Stack direction={"row"} gap={1}></Stack>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
              <Chip
                label="On-Site"
                //onDelete={() => removeTitle(t)}
                deleteIcon={<CloseIcon />}
                sx={{ fontSize: "17px", bgcolor: "#D4F0FC" }}
              />
            </Box>
          </Stack>
          <Box sx={{ width: "100%" }}>
            <GooglePlacesAutocomplete
              apiKey="AIzaSyCLT3fP1-59v2VUVoifXXJX-MQ0HA55Jp4"
              selectProps={{
                isClearable: true,
                placeholder: "Enter Your Location",
                value: address,
                onChange: (val) => {
                  setaddress(val);
                  handleSelect(val);
                },
                styles: {
                  textInputContainer: (provided) => ({
                    ...provided,
                    backgroundColor: "red",
                  }),
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
                    // "&:hover": {
                    //   border: "1px solid purple",
                    // },
                  }),
                  // textInputContainer: {
                  //   backgroundColor: "grey",
                  // },
                },
              }}
              // styles={}
            />
          </Box>
          <Stack gap={1}>
            <Box sx={{ display: "flex" }}>
              {/* code copied from job preferences of job positions at current site */}
              <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                fullWidth
                disablePortal={true}
                name="jobtype"
                //value={title}
                //options={titleDesc.map((option) => option.rol.role)}
                renderInput={(params) => (
                  <TextField
                    variant="outlined"
                    {...params}
                    label="Job Type"
                    name="jobtype"
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                    }}
                  />
                )}
              />
              <IconButton>
                <AddIcon sx={{ color: "#1976d2" }} />
              </IconButton>
            </Box>
            <Stack direction={"row"} gap={1}></Stack>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
              <Chip
                label="Full time"
                //onDelete={() => removeTitle(t)}
                deleteIcon={<CloseIcon />}
                sx={{ fontSize: "17px", bgcolor: "#D4F0FC" }}
              />
            </Box>
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
              sx={{
                bgcolor: "#015FB1 !important",
                width: "50%",
                borderRadius: "8px",
              }}
            >
              Save
            </Button>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};

export default AddCareerPreference;
