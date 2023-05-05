/* eslint-disable @next/next/no-img-element */
import { NEUTRAL } from "../../theme/colors";
import { MAX } from "../../theme/spacings";
import { CustomTypography } from "../../ui-components/CustomTypography/CustomTypography";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  useMediaQuery,
} from "@mui/material";
import React from "react";

const UsersDetailsHome = () => {
  const mobile = useMediaQuery("(max-width:900px)");

  return (
    <div
      style={{
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
          justifyContent: mobile ? "center" : "flex-end",
          alignItems: "flex-end",
        }}
      >
        {mobile ? (
          <>
            <Stack sx={{ gap: "10px" }}>
              <CustomTypography
                sx={{
                  padding: "0 0 50px 0",
                  fontSize: MAX,
                  color: NEUTRAL,
                  fontFamily: "Inter-bold",
                  textAlign: "center",
                }}
              >
                Ready to level up?
              </CustomTypography>
              <Stack direction={"row"} sx={{ gap: "10px" }}>
                <Card
                  sx={{ width: "50%", backgroundColor: "transparent" }}
                  variant="outlined"
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img alt=""  src="/candidateMan.png" style={{ height: "170px" }} />
                  </CardContent>
                </Card>
                <Card
                  sx={{ width: "50%", backgroundColor: "transparent" }}
                  variant="outlined"
                >
                  <CardContent
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <img alt="" src="/businessMan.png" style={{ height: "165px" }} />
                  </CardContent>
                </Card>
              </Stack>
              <Box
                sx={{
                  backgroundColor: "#E9F8FF",
                  borderRadius: "10px",
                  boxShadow: "inset 0px 0px 10px rgba(0,0,0,0.5)",
                  height: "150px",
                  padding: "20px",
                  marginTop: "10px",
                }}
              >
                <Stack sx={{ gap: "10px" }}>
                  <CustomTypography
                    sx={{ fontFamily: "Inter-Bold", fontSize: "30px" }}
                  >
                    Candidate
                  </CustomTypography>
                  <CustomTypography>
                    Join our community of job seekers and gain access to
                    thousands of job opportunities to achieve your career goals.
                  </CustomTypography>
                </Stack>
              </Box>
            </Stack>
          </>
        ) : (
          <Stack sx={{ alignItems: "center" }}>
            <CustomTypography
              sx={{
                padding: "0 0 50px 0",
                fontSize: MAX,
                color: NEUTRAL,
                fontFamily: "Inter-bold",
                marginBottom: "50px",
              }}
            >
              Ready to level up?
            </CustomTypography>
            <Grid
              container
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Grid
                item
                md={5.6}
                sx={{
                  borderRadius: "10px",
                  backgroundColor: "#E9F8FF",
                  width: "46%",
                  height: "377px",
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
                  <img alt=""
                    src="/Frame87.png"
                    className="userDetailsImages"
                    style={{ height: "290px", width: "330px" }}
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
                    <CustomTypography>
                      Join our community of job seekers and gain access to
                      thousands of job opportunities to achieve your career
                      goals.
                    </CustomTypography>
                  </Stack>
                </Box>
              </Grid>

              <Grid
                item
                md={5.6}
                sx={{
                  borderRadius: "10px",
                  backgroundColor: "#E9F8FF",
                  width: "46%",
                  height: "377px",
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
                  <img alt=""
                    src="/Frame109.png"
                    className="userDetailsImages"
                    style={{ height: "290px", width: "330px" }}
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
                    <CustomTypography>
                      Join our community of employers and take your hiring
                      process to the next level with our powerful job posting
                      and candidate management tools.
                    </CustomTypography>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Stack>
        )}
      </Container>
    </div>
  );
};

export default UsersDetailsHome;
