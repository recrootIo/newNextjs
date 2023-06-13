"use client";
import { PRIMARY } from "../../theme/colors";
import { MAX } from "../../theme/spacings";
import { CustomTypography } from "../../ui-components/CustomTypography/CustomTypography";
import {
  Box,
  Button,
  Grid,
  TextField,
  Card,
  styled,
  Stack,
  Container,
} from "@mui/material";

const CssTextField = styled(TextField)({
  width: "100%",
  "& label.Mui-focused": {
    color: "#00004d",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },

    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
});

const SubscribHome = () => {
  return (
    <div className="subscribe">
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Container>
          <Card
            sx={{
              minHeight: "240px",
              borderRadius: "15px",
              backgroundColor: "#D4F0FC",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              top: { xs: "80px", md: "120px" },
            }}
            variant="outlined"
          >
            <Grid container>
              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <Stack
                  direction={"row"}
                  gap={"10px"}
                  justifyContent="center"
                  sx={{ flexWrap: "wrap" }}
                >
                  <CustomTypography
                    sx={{
                      fontWeight: "800",
                      fontSize: MAX,
                      fontFamily: "Inter-Bold",
                    }}
                  >
                    Subscribe
                  </CustomTypography>
                  <CustomTypography
                    sx={{
                      fontWeight: "800",
                      fontSize: MAX,
                      color: PRIMARY,
                      fontFamily: "Inter-Bold",
                    }}
                  >
                    Us
                  </CustomTypography>
                </Stack>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: { md: "row", sm: "column", xs: "column" },
                  padding: { md: "10px", sm: "20px", xs: "20px" },
                }}
              >
                <CssTextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  size="small"
                  sx={{
                    width: { md: "60%", sm: "100%", xs: "100%" },
                    backgroundColor: "white",
                    borderRadius: "10px",
                  }}
                />
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    m: "10px",
                    height: "40px",
                    width: { md: "20%", sm: "100%", xs: "100%" },
                    bgcolor: "#034275 !important",
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </Box>
    </div>
  );
};

export default SubscribHome;
