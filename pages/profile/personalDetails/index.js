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
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
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

const PersonalDetails = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <box>
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open form dialog
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogContent>
            <Container>
              <CustomTypography
                className="personalDetailTitle"
                variant="h4"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 600,
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
                  sx={{ width: "50%" }}
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
                  sx={{ width: "500px" }}
                />
                <TextField
                  id="outlined-basic"
                  label="Mobile No *"
                  variant="outlined"
                  sx={{ width: "500px" }}
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
              </Stack>
            </Container>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Subscribe</Button>
          </DialogActions>
        </Dialog>
      </div>
    </box>
  );
};

export default PersonalDetails;
