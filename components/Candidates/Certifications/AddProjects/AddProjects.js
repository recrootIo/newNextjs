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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { updateCurrentScreen } from "@/redux/slices/candidate";
import { useDispatch } from "react-redux";

const AddProjects = () => {
  const dispatch = useDispatch();

  const gotToProjects = () => {
    dispatch(updateCurrentScreen(""));
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
              onClick={() => gotToProjects()}
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
              Add Projects
            </CustomTypography>
            <Stack spacing={2} sx={{ mt: "100px" }}>
              <TextField
                id="outlined-basic"
                label="Enter Portfolio Link"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Enter Project Name"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Organization"
                variant="outlined"
              />
              <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
              />

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

export default React.memo(AddProjects);
