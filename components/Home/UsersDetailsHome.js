import { NEUTRAL } from "../../theme/colors";
import { MAX } from "../../theme/spacings";
import { CustomTypography } from "../../ui-components/CustomTypography/CustomTypography";
import { Box, Container, Grid, Stack } from "@mui/material";
import React from "react";
import Image from "next/image";

const UsersDetailsHome = () => {
  // const mobile = useMediaQuery("(max-width:900px)");

  return (
    <Box
      sx={{
        backgroundImage: "url(/UserDetailBackground.svg)",
        height: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // backgroundSize: "200vh 100vw",
        // minHeight: "880px",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "center",
        paddingBottom: "50px",
        alignItems: "center",
        paddingTop: { md: "0", sm: "50px", xs: "50px" },
        backgroundSize: "cover",
      }}
    >
      <Container
        sx={{
          minHeight: "615px",
          display: "flex",
          flexDirection: "column",
          justifyContent: { sm: "center", md: "flex-end", xs: "center" },
          alignItems: "flex-end",
          padding: "10px",
        }}
      >
        <Stack sx={{ alignItems: "center" }}>
          <CustomTypography
            sx={{
              padding: "0 0 50px 0",
              fontSize: MAX,
              color: NEUTRAL,
              fontFamily: "Inter-bold",
              marginBottom: "50px",
              textAlign: "center",
            }}
          >
            Ready to level up?
          </CustomTypography>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
              mt: { md: "0", sm: "40px", xs: "40px" },
            }}
          >
            <Grid
              item
              md={5.6}
              xs={12}
              sm={12}
              sx={{
                borderRadius: "10px",
                backgroundColor: "#E9F8FF",
                width: "46%",
                height: { md: "377px", xs: "auto", sm: "auto" },
                boxShadow: "inset 0px 0px 10px rgba(0,0,0,0.5)",
              }}
              className="userDetailCard"
            >
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/Frame87.png"
                  className="userDetailsImages"
                  height={290}
                  width={330}
                  alt=""
                />
                <Stack
                  sx={{
                    top: "-100px",
                    position: "relative",
                    alignItems: "center",
                    padding: "0 40px 40px 40px",
                  }}
                >
                  <CustomTypography
                    sx={{ fontFamily: "Inter-Bold", fontSize: "30px" }}
                  >
                    Candidate
                  </CustomTypography>
                  <CustomTypography sx={{ fontSize: "18px" }}>
                    Join our community of job seekers and gain access to
                    thousands of job opportunities to achieve your career goals.
                  </CustomTypography>
                </Stack>
              </Box>
            </Grid>

            <Grid
              item
              md={5.6}
              xs={12}
              sm={12}
              sx={{
                borderRadius: "10px",
                backgroundColor: "#E9F8FF",
                width: "46%",
                height: { md: "377px", xs: "auto", sm: "auto" },
                boxShadow: "inset 0px 0px 10px rgba(0,0,0,0.5)",
                mt: { md: 0, xs: "105px", sm: "105px" },
              }}
              className="userDetailCard"
            >
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/Frame109.png"
                  className="userDetailsImages"
                  height={290}
                  width={330}
                  alt=""
                />
                <Stack
                  sx={{
                    top: "-100px",
                    position: "relative",
                    alignItems: "center",
                    padding: "0 40px 40px 40px",
                  }}
                >
                  <CustomTypography
                    sx={{ fontFamily: "Inter-Bold", fontSize: "30px" }}
                  >
                    Employer
                  </CustomTypography>
                  <CustomTypography sx={{ fontSize: "18px" }}>
                    Join our community of employers and take your hiring process
                    to the next level with our powerful job posting and
                    candidate management tools.
                  </CustomTypography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default UsersDetailsHome;
