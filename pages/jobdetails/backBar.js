"use client";
import { Box, Button, Container } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Backbar = () => {
  return (
    <Box
      sx={{
        height: "100px",
        backgroundImage: 'url("/Group 86.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Button
          variant="text"
          sx={{
            color: "white",
            fontWeight: "500",
            fontSize: "20px",
            textTransform: "capitalize",
          }}
          startIcon={<ArrowBackIcon />}
        >
          Back
        </Button>
      </Container>
    </Box>
  );
};

export default Backbar;
