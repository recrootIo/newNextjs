"use client";
import { CustomTypography } from "../../ui-components/CustomTypography/CustomTypography";
import { Grid, Box, Stack, Container, styled } from "@mui/material";
import Image from "next/image";

const StyledTypo = styled(CustomTypography)({
  cursor: "pointer",
});

const FooterHome = () => {
  return (
    <div className="footer">
      <Box
        sx={{
          pt: { xs: "20px", md: "80px" },
          pb: "20px",
          maxHeight: { md: "370px" },
          textAlign: { xs: "center", md: "left" },
          mt: "30px",
          backgroundImage: "url(/FooterBG.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          color: "white",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Container>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: { lg: "space-between" },
              mt: "30px",
            }}
          >
            <Grid
              item
              xs={12}
              sm={6}
              md={5}
              lg={4}
              sx={{
                flexDirection: "column",
                gap: "10px",
                alignItems: { md: "flex-start", sm: "center", xs: "center" },
                display: "flex",
                marginTop: { sm: "20px", xs: "20px", md: "0" },
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: { md: "flex-start", sm: "center", xs: "center" },
                  justifyContent: {
                    md: "flex-start",
                    sm: "center",
                    xs: "center",
                  },
                }}
              >
                <Image
                  src="/whiteLogo.png"
                  alt=""
                  height="59px"
                  style={{ marginRight: "10px" }}
                />
              </div>
              <div className="para">
                <StyledTypo sx={{ fontSize: "18px" }}>
                  Recroot is a Next Gen Jobs Platform Connecting Organisations
                  with Remote Tech Professionals through Permanent, Contract and
                  Freelancing Recruitment Solutions.
                </StyledTypo>
              </div>
            </Grid>

            <Grid item xs={12} sm={6} md={2} lg={2}>
              <Box>
                <div className="jobs">
                  <StyledTypo
                    variant="h6"
                    sx={{
                      mb: "10px",
                      marginTop: "20px",
                      fontSize: "22px",
                      fontFamily: "Inter-Bold",
                    }}
                  >
                    Jobs
                  </StyledTypo>
                </div>
                <div className="abt">
                  <StyledTypo>Job Listing</StyledTypo>
                  <StyledTypo>Post New Job</StyledTypo>
                  <StyledTypo>Job Packages</StyledTypo>
                </div>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={2} lg={2}>
              <Box>
                <div className="jobs">
                  <StyledTypo
                    variant="h6"
                    sx={{
                      mb: "10px",
                      fontSize: "22px",
                      fontFamily: "Inter-Bold",
                      marginTop: "20px",
                    }}
                  >
                    Legal
                  </StyledTypo>
                </div>
                <div className="abt">
                  <StyledTypo>Corporate Info</StyledTypo>
                  <StyledTypo>Privacy Info</StyledTypo>
                  <StyledTypo>Information Security Policy</StyledTypo>
                  <StyledTypo>Website Term of Use</StyledTypo>
                </div>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={2} lg={2}>
              <Box>
                <div className="jobs">
                  <StyledTypo
                    sx={{
                      mb: "10px",
                      fontSize: "22px",
                      fontFamily: "Inter-Bold",
                      marginTop: "20px",
                    }}
                  >
                    Useful Links
                  </StyledTypo>
                </div>
                <div className="abt">
                  <StyledTypo>Blogs</StyledTypo>
                  <StyledTypo>Videos</StyledTypo>
                  <StyledTypo>FAQ</StyledTypo>
                </div>
              </Box>

              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                sx={{
                  backgroundColor: "#D4F0FC",
                  display: { md: "none", xs: "flex", sm: "none" },
                  height: "50px",
                  borderRadius: "5px",
                  padding: "10px",
                  marginTop: "20px",
                }}
              >
                <Image
                  src="/instagram.png"
                  alt=""
                  style={{ mr: "20px" }}
                  height={"45px"}
                />
                <Image src="/linkedin.png" alt="" height="45px" />
                <Image src="/facebook.png" alt="" height="45px" />
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ backgroundColor: "#004d99" }}>
        <Container>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Grid
              item
              xs={-1}
              md={6}
              sm={-1}
              sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
            >
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
              >
                <Image
                  src="/instagram.png"
                  alt=""
                  style={{ mr: "20px" }}
                  height={"30px"}
                />
                <Image src="/linkedin.png" alt="" height={"30px"} />
                <Image src="/facebook.png" alt="" height={"30px"} />
              </Stack>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: { md: "flex-end", sm: "center", xs: "center" },
                alignItems: "center",
                minHeight: "40px",
              }}
            >
              <StyledTypo style={{ color: "white", fontSize: "12px" }}>
                Recroot © 2023, All Right Reserved by Recroot.io
              </StyledTypo>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default FooterHome;
