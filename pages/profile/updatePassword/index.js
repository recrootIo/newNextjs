"use client";
import * as React from "react";
import { Box, Stack, Button, TextField, Container } from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";

const UpdatePassword = () => {
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
          UPDATE PASSWORD
        </CustomTypography>
        <Stack spacing={2} sx={{ mt: "40px" }}>
          <TextField
            required
            id="outlined-basic"
            label="Old Passwords"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-basic"
            label="New Password"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-basic"
            label="Confirm Password"
            variant="outlined"
          />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
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
          </Box>
        </Stack>
      </Container>
    </div>
  );
};

export default UpdatePassword;
