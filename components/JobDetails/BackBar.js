import { Box, Button, Container } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";

const BackBar = () => {
  const router = useRouter();

  const handleGoBack = (e) => {
    e.preventDefault();
    router.back();
  };

  return (
    <Box
      sx={{
        height: "100px",
        backgroundImage: 'url("/blue-background-bg.png")',
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
          onClick={handleGoBack}
          startIcon={<ArrowBackIcon />}
        >
          Back
        </Button>
      </Container>
    </Box>
  );
};

export default BackBar;
