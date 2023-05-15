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
  Card,
  CardContent,
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { useState } from "react";
import { Theme, useTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import MenuItem from "@mui/material/MenuItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentScreen } from "@/redux/slices/candidate";
import ReactPhoneInput from "react-phone-input-2";
// import { debounce } from "@/utils/HelperFunctions";

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

const EditPersonalDetails = () => {
  const { data = {} } = useSelector((state) => state?.personal);
  const dispatch = useDispatch();

  const gotToPersonalDetails = () => {
    dispatch(updateCurrentScreen(""));
  };

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

  const { email, firstName, jobTitle, lastName, mobile, resume } = data;
  const location = resume?.location;
  const locationDetails = `${location?.country} , ${location?.state}  , ${location?.city}`;
  const fullName = `${firstName} ${lastName}`;

  const [type, setType] = useState([]);
  const [titleLoading, setTitleLoading] = useState(false);
  const [personal, setPersonal] = useState({
    fullName: fullName,
    jobTitle: jobTitle,
    languages: [],
    currentOffer: "",
    notice: "",
    salaryCurrency: "",
    expectedSalary: null,
    currentSalary: null,
    workPrefence: "",
    mobile: "",
  });

  const handleChangeName = (e) => {
    let { name, value } = e.target;
    setPersonal({
      ...personal,
      [name]: value,
    });
  };

  const handleTitle = (e) => {
    setPersonal({
      ...personal,
      jobTitle: e,
    });
  };

  const [timetoLoad, setTimeTLoad] = useState(null);

  // const getJobTitles = (e) => {
  //   debounce(requestTitles, null, timetoLoad, setTimeTLoad, e);
  // };
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
              onClick={() => gotToPersonalDetails()}
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
              Edit Personal Details
            </CustomTypography>
            <Stack spacing={2} sx={{ mt: "100px" }}>
              <TextField
                required
                id="outlined-basic"
                label="Full Name *"
                name="fullName"
                variant="outlined"
                value={fullName}
                autoComplete="user-name"
                onChange={(e) => {
                  handleChangeName(e);
                }}
                error={fullName === "" ? true : false}
                sx={{ width: "100%%" }}
              />
              <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                fullWidth
                name="jobTitle"
                value={jobTitle}
                disablePortal={true}
                options={type.map((option) => option)}
                onChange={(e, a) => {
                  handleTitle(a);
                }}
                required
                loading={titleLoading}
                sx={{ display: "flex", justifyContent: "center" }}
                renderInput={(params) => (
                  <TextField
                    fullWidth
                    {...params}
                    label="Job Title"
                    name="jobTitle"
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                    }}
                    // onChange={(e) => {
                    //   getJobTitles(e.target.value);
                    // }}
                    loading={titleLoading}
                    required
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
                label="Email Id"
                variant="outlined"
                required
                name="email"
                value={email}
                autoComplete="email"
                InputProps={{
                  readOnly: true,
                }}
                error={email === "" ? true : false}
                sx={{ width: "100%" }}
              />
              {/* <ReactPhoneInput
                inputExtraProps={{
                  name: "phoneNumber",
                  required: true,
                  autoFocus: true,
                }}
                id="phoneNumber"
                name="phoneNumber"
                specialLabel="Mobile Number"
                defaultCountry={"au"}
                value={mobile}
                //onChange={handlePhoneNumber}
                inputStyle={{
                  width: "100%",
                  height: "3.7375em",
                  fontSize: "16px",
                }}
              /> */}
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

              <Stack gap={1}>
                <Box sx={{ display: "flex" }}>
                  {/* code copied from job preferences of job positions at current site */}
                  <Autocomplete
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    fullWidth
                    disablePortal={true}
                    name="language"
                    //value={title}
                    //options={titleDesc.map((option) => option.rol.role)}
                    renderInput={(params) => (
                      <TextField
                        variant="outlined"
                        {...params}
                        label="Language"
                        name="language"
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
                    label="sinhala"
                    //onDelete={() => removeTitle(t)}
                    deleteIcon={<CloseIcon />}
                    sx={{ fontSize: "17px", bgcolor: "#D4F0FC" }}
                  />
                </Box>
              </Stack>

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
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
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
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default EditPersonalDetails;
