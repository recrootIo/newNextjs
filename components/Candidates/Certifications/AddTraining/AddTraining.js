"use client";
import * as React from "react";
import {
  Box,
  Stack,
  Button,
  TextField,
  Container,
  Card,
  CardContent,
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch } from "react-redux";
import { updateCurrentScreen } from "@/redux/slices/candidate";

const AddTraining = () => {
  const dispatch = useDispatch();

  const gotToTraining = () => {
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
              onClick={() => gotToTraining()}
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
              Add Training
            </CustomTypography>
            <Stack spacing={2} sx={{ mt: "100px" }}>
              <TextField
                required
                id="outlined-basic"
                label="Title"
                variant="outlined"
              />
              <TextField
                required
                id="outlined-basic"
                label="Institute"
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

export default AddTraining;
