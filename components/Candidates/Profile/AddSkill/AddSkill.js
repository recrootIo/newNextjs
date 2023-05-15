"use client";
import * as React from "react";
import {
  Box,
  Stack,
  Button,
  TextField,
  Container,
  Autocomplete,
  FormControl,
  Card,
  CardContent,
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch } from "react-redux";
import { updateCurrentScreen } from "@/redux/slices/candidate";

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];

const AddSkill = () => {
  const dispatch = useDispatch();

  const gotToSkills = () => {
    dispatch(updateCurrentScreen(""));
  };
  const [level, setLevel] = React.useState("");

  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };

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
              onClick={() => gotToSkills()}
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
              Add Skill
            </CustomTypography>
            <Stack spacing={2} sx={{ mt: "100px" }}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ display: "flex", justifyContent: "center" }}
                renderInput={(params) => (
                  <TextField
                    fullWidth
                    {...params}
                    label="Select Skill"
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
                label="Experience(Years)"
                type="number"
                variant="outlined"
              />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Level</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={level}
                  label="Level"
                  onChange={handleLevelChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
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

export default AddSkill;
