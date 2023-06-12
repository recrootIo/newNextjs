import FooterHome from "@/components/Home/FooterHome";
import Navbar from "@/components/Navbar/Navbar";
import { BOLD } from "@/theme/fonts";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { Box, Button, Container, Grid, Stack } from "@mui/material";
import Image from "next/image";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const StyledMainTypo = styled(CustomTypography)({
  fontSize: "22px",
  color: "#034275",
  fontWeight: 600,
  whiteSpace: "nowrap",
});

const StyledSecondTypo = styled(CustomTypography)({
  fontSize: "20px",
  color: "#034275",
  fontWeight: 400,
});

const CorporateInfo = () => {
  return (
    <div>
      <Navbar />
      <Box
        sx={{
          backgroundImage: 'url("/EmployerDashboardBG.svg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "250px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Container>
          <CustomTypography
            variant="h6"
            sx={{
              fontFamily: BOLD,
              fontSize: "45px",
              color: "white",
              textAlign: "center",
            }}
            gutterBottom
          >
            Corporate Info
          </CustomTypography>
        </Container>
      </Box>
      <Container>
        <Box sx={{ mb: "100px" }}>
          <Grid
            container
            spacing={2}
            sx={{ mt: "50px", width: "100%", marginLeft: 0 }}
          >
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Box sx={{ mt: "20px" }}>
                <Image
                  src="/corporateinfo-pc-img.png"
                  alt=""
                  width="300"
                  height="450"
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={8}
              sx={{
                bgcolor: "#F2FBFF",
                p: { xs: 0, md: "45px" },
              }}
            >
              <Stack spacing={2}>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <StyledMainTypo variant="h6" gutterBottom>
                    Company :
                  </StyledMainTypo>
                  <StyledSecondTypo variant="h6" gutterBottom>
                    Recroot is a business of{" "}
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: "20px",
                        color: "#034275",
                      }}
                    >
                      AR Innovations Pty Ltd (ABN: 58652722337)
                    </span>
                  </StyledSecondTypo>
                </Box>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <StyledMainTypo variant="h6" gutterBottom>
                    Overview :
                  </StyledMainTypo>
                  <StyledSecondTypo variant="h6" gutterBottom>
                    Recroot is a specialised recruitment platform connecting
                    organisations with remote tech professionals through
                    temporary, contract and permanent recruitment solutions
                  </StyledSecondTypo>
                </Box>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <StyledMainTypo variant="h6" gutterBottom>
                    Headquarters :
                  </StyledMainTypo>
                  <StyledSecondTypo variant="h6" gutterBottom>
                    Sydney, Australia
                  </StyledSecondTypo>
                </Box>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <StyledMainTypo variant="h6" gutterBottom>
                    Management :
                  </StyledMainTypo>
                  <StyledSecondTypo variant="h6" gutterBottom>
                    Gokul Srinivasan, CEO Suji Gokul, COO
                  </StyledSecondTypo>
                </Box>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <StyledMainTypo variant="h6" gutterBottom>
                    Founded :
                  </StyledMainTypo>
                  <StyledSecondTypo variant="h6" gutterBottom>
                    2022
                  </StyledSecondTypo>
                </Box>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <StyledMainTypo variant="h6" gutterBottom>
                    Website:
                  </StyledMainTypo>
                  <StyledSecondTypo variant="h6" gutterBottom>
                    Recroot.io
                  </StyledSecondTypo>
                </Box>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <StyledMainTypo variant="h6" gutterBottom>
                    Email Id:
                  </StyledMainTypo>
                  <StyledSecondTypo
                    variant="h6"
                    gutterBottom
                    sx={{ textDecoration: "underline" }}
                  >
                    grow@arinnovate.io
                  </StyledSecondTypo>
                </Box>
              </Stack>
            </Grid>
          </Grid>
          <CustomTypography
            variant="h6"
            sx={{
              fontFamily: BOLD,
              fontSize: "30px",
              color: "#034275",
              textAlign: "center",
              mt: "50px",
              mb: "50px",
            }}
            gutterBottom
          >
            Locations
          </CustomTypography>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  height: "250px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/corporateinfo-australia-img.png"
                  alt=""
                  width="200"
                  height="250"
                />
              </Box>
              <CustomTypography
                variant="h6"
                sx={{
                  fontFamily: BOLD,
                  fontSize: "23px",
                  color: "#034275",
                  textAlign: "center",
                }}
                gutterBottom
              >
                Australia
              </CustomTypography>
              <StyledSecondTypo
                variant="h6"
                sx={{ textAlign: " center", width: "70%" }}
                gutterBottom
              >
                AR Innovations Pty Ltd107, College Street, Cambridge Park,
                Sydney, 2747Australian Business Number (ABN): 58652722337
              </StyledSecondTypo>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mt: { xs: "60px", md: "0px" },
              }}
            >
              <Box sx={{ height: "250px" }}>
                <Image
                  src="/corporateinfo-india-img.png"
                  alt=""
                  width="200"
                  height="250"
                />
              </Box>
              <CustomTypography
                variant="h6"
                sx={{
                  fontFamily: BOLD,
                  fontSize: "23px",
                  color: "#034275",
                  textAlign: "center",
                }}
                gutterBottom
              >
                India
              </CustomTypography>
              <StyledSecondTypo
                variant="h6"
                gutterBottom
                sx={{ textAlign: " center", width: "70%" }}
              >
                AR Innovations India Pty Ltd251, Pilla Reddy Layout, Dodda
                Banaswadi, Bangalore – 43
              </StyledSecondTypo>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <FooterHome />
    </div>
  );
};

export default CorporateInfo;
