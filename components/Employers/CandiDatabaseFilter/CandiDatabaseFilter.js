import * as React from "react";
import {
  Autocomplete,
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  InputBase,
  Stack,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./CandiDatabaseFilter.module.css";

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];

const CandiDatabaseFilter = () => {
  return (
    <>
      <Grid container spacing={3} sx={{ mt: "30px" }}>
        <Grid item xs={3}>
          <Stack spacing={1}>
            <Box sx={{ borderBottom: "1px solid rgba(1, 49, 63, 0.2)" }}>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Job Title"
                inputProps={{ "aria-label": "Job Title" }}
              />
              <SearchIcon sx={{ color: "rgba(1, 49, 63, 0.2)" }} />
            </Box>
            <FormGroup
              className={styles.scrollbar}
              id="style-5"
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <div style={{ columnCount: 1 }}>
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="AutoCad Designer"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Apparel Designer"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Graphic Designer"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Architectural Designer"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Assistant Designer"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="ASIC Designer"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Apparel Designer"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Graphic Designer"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Architectural Designer"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Assistant Designer"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="ASIC Designer"
                />
              </div>
            </FormGroup>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack spacing={1}>
            <Box sx={{ borderBottom: "1px solid rgba(1, 49, 63, 0.2)" }}>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Skills"
                inputProps={{ "aria-label": "Skills" }}
              />
              <SearchIcon sx={{ color: "rgba(1, 49, 63, 0.2)" }} />
            </Box>
            <FormGroup
              className={styles.scrollbar}
              id="style-5"
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <div style={{ columnCount: 1 }}>
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Photoshop"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Animate"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe After Effect"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Illustrator"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Indesign"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe XD"
                />
              </div>
            </FormGroup>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack spacing={1}>
            <Box sx={{ borderBottom: "1px solid rgba(1, 49, 63, 0.2)" }}>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Industry"
                inputProps={{ "aria-label": "Industry" }}
              />
              <SearchIcon sx={{ color: "rgba(1, 49, 63, 0.2)" }} />
            </Box>
            <FormGroup
              className={styles.scrollbar}
              id="style-5"
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <div style={{ columnCount: 1 }}>
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Photoshop"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Animate"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe After Effect"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Illustrator"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Indesign"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe XD"
                />
              </div>
            </FormGroup>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack spacing={1}>
            <Box sx={{ borderBottom: "1px solid rgba(1, 49, 63, 0.2)" }}>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Availability"
                inputProps={{ "aria-label": "Availability" }}
              />
              <SearchIcon sx={{ color: "rgba(1, 49, 63, 0.2)" }} />
            </Box>
            <FormGroup
              className={styles.scrollbar}
              id="style-5"
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <div style={{ columnCount: 1 }}>
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Photoshop"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Animate"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe After Effect"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Illustrator"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Indesign"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe XD"
                />
              </div>
            </FormGroup>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack spacing={1}>
            <Box sx={{ borderBottom: "1px solid rgba(1, 49, 63, 0.2)" }}>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Years Of Exeperience"
                inputProps={{ "aria-label": "Years Of Exeperience" }}
              />
              <SearchIcon sx={{ color: "rgba(1, 49, 63, 0.2)" }} />
            </Box>
            <FormGroup
              className={styles.scrollbar}
              id="style-5"
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <div style={{ columnCount: 1 }}>
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Photoshop"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Animate"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe After Effect"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Illustrator"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Indesign"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe XD"
                />
              </div>
            </FormGroup>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack spacing={1}>
            <Box sx={{ borderBottom: "1px solid rgba(1, 49, 63, 0.2)" }}>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Communication Skills"
                inputProps={{ "aria-label": "Communication Skills" }}
              />
              <SearchIcon sx={{ color: "rgba(1, 49, 63, 0.2)" }} />
            </Box>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Beginner"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Intermediate"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Expert"
              />
            </FormGroup>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack spacing={1}>
            <Box sx={{ borderBottom: "1px solid rgba(1, 49, 63, 0.2)" }}>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Location"
                inputProps={{ "aria-label": "Location" }}
              />
              <SearchIcon sx={{ color: "rgba(1, 49, 63, 0.2)" }} />
            </Box>
            <FormGroup
              className={styles.scrollbar}
              id="style-5"
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <div style={{ columnCount: 1 }}>
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Photoshop"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Animate"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe After Effect"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Illustrator"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Indesign"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe XD"
                />
              </div>
            </FormGroup>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack spacing={1}>
            <Box sx={{ borderBottom: "1px solid rgba(1, 49, 63, 0.2)" }}>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Language"
                inputProps={{ "aria-label": "Language" }}
              />
              <SearchIcon sx={{ color: "rgba(1, 49, 63, 0.2)" }} />
            </Box>
            <FormGroup
              className={styles.scrollbar}
              id="style-5"
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <div style={{ columnCount: 1 }}>
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Photoshop"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Animate"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe After Effect"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Illustrator"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Indesign"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe XD"
                />
              </div>
            </FormGroup>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack spacing={1}>
            <Box sx={{ borderBottom: "1px solid rgba(1, 49, 63, 0.2)" }}>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Nationality"
                inputProps={{ "aria-label": "Nationality" }}
              />
              <SearchIcon sx={{ color: "rgba(1, 49, 63, 0.2)" }} />
            </Box>
            <FormGroup
              className={styles.scrollbar}
              id="style-5"
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <div style={{ columnCount: 1 }}>
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Photoshop"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Animate"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe After Effect"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Illustrator"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Indesign"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe XD"
                />
              </div>
            </FormGroup>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack spacing={1}>
            <Box sx={{ borderBottom: "1px solid rgba(1, 49, 63, 0.2)" }}>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Work Preference"
                inputProps={{ "aria-label": "Work Preference" }}
              />
              <SearchIcon sx={{ color: "rgba(1, 49, 63, 0.2)" }} />
            </Box>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Remote"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Onsite"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Hybrid"
              />
            </FormGroup>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack spacing={1}>
            <Box sx={{ borderBottom: "1px solid rgba(1, 49, 63, 0.2)" }}>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Working Rights Country"
                inputProps={{ "aria-label": "Working Rights Country" }}
              />
              <SearchIcon sx={{ color: "rgba(1, 49, 63, 0.2)" }} />
            </Box>
            <FormGroup
              className={styles.scrollbar}
              id="style-5"
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <div style={{ columnCount: 1 }}>
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Photoshop"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Animate"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe After Effect"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Illustrator"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Indesign"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe XD"
                />
              </div>
            </FormGroup>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack spacing={1}>
            <Box sx={{ borderBottom: "1px solid rgba(1, 49, 63, 0.2)" }}>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Education"
                inputProps={{ "aria-label": "Education" }}
              />
              <SearchIcon sx={{ color: "rgba(1, 49, 63, 0.2)" }} />
            </Box>
            <FormGroup
              className={styles.scrollbar}
              id="style-5"
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <div style={{ columnCount: 1 }}>
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Photoshop"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Animate"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe After Effect"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Illustrator"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Indesign"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe XD"
                />
              </div>
            </FormGroup>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack spacing={1}>
            <Box sx={{ borderBottom: "1px solid rgba(1, 49, 63, 0.2)" }}>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Offer In Hand"
                inputProps={{ "aria-label": "Offer In Hand" }}
              />
              <SearchIcon sx={{ color: "rgba(1, 49, 63, 0.2)" }} />
            </Box>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Yes"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="No"
              />
            </FormGroup>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack spacing={1}>
            <Box sx={{ borderBottom: "1px solid rgba(1, 49, 63, 0.2)" }}>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Current Salary"
                inputProps={{ "aria-label": "Current Salary" }}
              />
              <SearchIcon sx={{ color: "rgba(1, 49, 63, 0.2)" }} />
            </Box>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{
                mt: "10px",
                width: "100%",
                "& .MuiInputBase-root": {
                  height: "48px",
                  width: "100%",
                },
                "& .MuiAutocomplete-inputRoot": {
                  display: "flex",
                  alignItems: "center",
                  width: "100% !important",
                },
              }}
              renderInput={(params) => (
                <TextField {...params} label="Select Currency" />
              )}
            />
            <FormGroup
              className={styles.scrollbar}
              id="style-5"
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <div style={{ columnCount: 1 }}>
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Photoshop"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Animate"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe After Effect"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Illustrator"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Indesign"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe XD"
                />
              </div>
            </FormGroup>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack spacing={1}>
            <Box sx={{ borderBottom: "1px solid rgba(1, 49, 63, 0.2)" }}>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Expected salary"
                inputProps={{ "aria-label": "Expected salary" }}
              />
              <SearchIcon sx={{ color: "rgba(1, 49, 63, 0.2)" }} />
            </Box>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{
                mt: "10px",
                width: "100%",
                "& .MuiInputBase-root": {
                  height: "48px",
                  width: "100%",
                },
                "& .MuiAutocomplete-inputRoot": {
                  display: "flex",
                  alignItems: "center",
                  width: "100% !important",
                },
              }}
              renderInput={(params) => (
                <TextField {...params} label="Select Currency" />
              )}
            />
            <FormGroup
              className={styles.scrollbar}
              id="style-5"
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <div style={{ columnCount: 1 }}>
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Photoshop"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Animate"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe After Effect"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Illustrator"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe Indesign"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Adobe XD"
                />
              </div>
            </FormGroup>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default CandiDatabaseFilter;
