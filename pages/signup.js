/* eslint-disable @next/next/no-img-element */
"use client";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  styled,
} from "@mui/material";
import { MAX } from "../theme/spacings";
import { CustomTypography } from "../ui-components/CustomTypography/CustomTypography";
import Checkbox from "@mui/material/Checkbox";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
// import { register } from "../slices/auth";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { register } from "@/redux/slices/auth";
import Image from "next/image";

const StyledCard = styled(Card)({
  background: "rgba(255, 255, 255, 0.2)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5px)",
  border: " 1px solid rgba(255, 255, 255, 0.3)",
  width: "250px",
  // height: "250px",
  borderRadius: "20px",
  cursor: "pointer",
});

const NonCard = styled(Card)({
  /* From https://css.glass */
  background: "rgba(255, 255, 255, 0)",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(0.2px)",
  border: "1px solid rgba(255, 255, 255, 0.01)",
  width: "250px",
  // height: "250px",
  cursor: "pointer",
});

const StyledInput = styled("input")({
  height: "60px",
  border: "1px solid #c2c8d0",
  borderRadius: "8px",
  width: "95%",
  fontSize: "18px",
  fontWeight: "400",
  color: "#949494",
  padding: "10px",
});

const StyledPasswordInput = styled("input")({
  height: "60px",
  border: "1px solid #c2c8d0",
  borderRadius: "8px",
  width: "100%",
  fontSize: "18px",
  fontWeight: "400",
  color: "#949494",
  padding: "10px",
});

function Signup() {
  const { push } = useRouter();
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const [showPassword, setshowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setshowPassword(!showPassword);
  };

  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
    firstName: "",
    lastName: "",
    sector: "",
    organization: "",
    recrootUserType: "Candidate",
    confirmPassword: "",
    checked: false,
  });

  const dispatch = useDispatch();
  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register({ values }))
      .unwrap()
      .then((originalPromiseResult) => {
        console.log(originalPromiseResult);
        push("/");
        // navigate("/verifymobile", { replace: true });
      })
      .catch((error) => {
        // toastyErrorFunction("The User Already Exists");
        console.warn(error);
      });
  };
  return (
    <Box
      sx={{
        height: { md: "100vh", xs: "150vh" },
        width: "100vw",
        backgroundImage: "url(/SignUpBG.svg)",
        overflow: "auto",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* <Container
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Grid container>
          <Grid
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Stack
              sx={{
                alignItems: "flex-start",
                gap: "30px",
                padding: "10px",
                justifyContent: "space-between",
              }}
            >
              <img src="/whiteLogo.png" className="loginLogo" alt="" />
              <CustomTypography
                sx={{
                  fontSize: "40px",
                  color: "white",
                  fontFamily: "Inter-Bold",
                }}
              >
                Sign Up and Find Your Dream Job
              </CustomTypography>
            </Stack>
            <Stack
              sx={{
                justifyContent: "center",
                gap: "20px",
                alignItems: "center",
              }}
            >
              <StyledCard variant="outlined">
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <img alt="" src="/candidate.png" className="loginImages" />
                  <CustomTypography sx={{ color: "white", fontWeight: "900" }}>
                    Candidate
                  </CustomTypography>
                </CardContent>
              </StyledCard>
              <NonCard variant="outlined">
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <img alt="" src="/Employer.png" className="loginImages" />
                  <CustomTypography sx={{ color: "white", fontWeight: "900" }}>
                    Employer
                  </CustomTypography>
                </CardContent>
              </NonCard>
            </Stack>
          </Grid>

          <Grid md={6}>
            <Card
              variant="outlined"
              sx={{
                background: "white",
                borderRadius: "20px",
                padding: "30px",
              }}
            >
              <form
                onSubmit={(e) => {
                  handleRegister(e);
                }}
              >
                <CardContent>
                  <Stack sx={{ alignItems: "center", gap: "20px" }}>
                    <Stack sx={{ alignItems: "center" }}>
                      <CustomTypography
                        sx={{ fontSize: "30px", fontWeight: "900" }}
                      >
                        Sign Up
                      </CustomTypography>
                      <Stack direction={"row"} sx={{ gap: "5px" }}>
                        <CustomTypography>
                          Sign Up Already have an account?
                        </CustomTypography>
                        <Link href="/signin">
                          <CustomTypography
                            sx={{
                              color: "#034275",
                              textDecoration: "underline",
                            }}
                          >
                            Log In
                          </CustomTypography>
                        </Link>
                      </Stack>
                    </Stack>
                    <button className="linkedinButton">
                      <span>
                        <img src={"/linkedInLogo.png"} alt="" height={"30px"} />
                      </span>
                      <span style={{ marginTop: "6px" }}>
                        Log in with LinkedIn
                      </span>
                    </button>
                    <button className="linkedinButton">
                      <span>
                        <img src={"/googleLogo.png"} alt="" height={"30px"} />
                      </span>
                      <span style={{ marginTop: "1px" }}>
                        Log in with Google
                      </span>
                    </button>
                    <Divider>OR</Divider>
                    <StyledInput
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      placeholder="Enter First Name"
                      autoFocus
                      value={values?.firstName}
                      onChange={handleChange}
                    />
                    <StyledInput
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                      placeholder="Enter Last Name"
                      onChange={handleChange}
                      value={values?.lastName}
                    />
                    <StyledInput
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      required
                      placeholder="Enter Email ID"
                      type="email"
                      onChange={handleChange}
                      value={values?.email}
                    />
                    
                    <FormControl sx={{ mt: "15px", width: "95%" }}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            // value={values.checked}
                            color="primary"
                            // checked={values.checked}
                          />
                        }
                        label={
                          <p>
                            By clicking checkbox, you agree to our{" "}
                            <span>
                              <a
                                style={{ color: "#4fa9ff" }}
                                target="blank"
                                href="https://graceful-donut-d1174d.netlify.app/WebsiteUse"
                              >
                                Terms and Conditions and Privacy Policy
                              </a>
                            </span>
                          </p>
                        }
                      />
                    </FormControl>
                    <button
                      style={{
                        height: "60px",
                        backgroundColor: "#015FB1",
                        borderRadius: "8px",
                        width: "95%",
                        fontSize: "18px",
                        fontWeight: "400",
                        color: "white",
                      }}
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </Stack>
                </CardContent>
              </form>
            </Card>
          </Grid>
        </Grid>
      </Container> */}

      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Grid container sx={{ gap: { md: "0", sm: "20px", xs: "20px" } }}>
          <Grid
            item
            md={6}
            sm={12}
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: "20px",
            }}
          >
            <Stack
              sx={{
                alignItems: "flex-start",
                gap: "30px",
                padding: "10px",
                justifyContent: "space-between",
              }}
            >
              <Image
                src="/whiteLogo.png"
                alt=""
                width="0"
                height="0"
                sizes="100vw"
                className="loginLogo"
              />
            </Stack>
            <Stack
              sx={{
                justifyContent: "center",
                gap: "20px",
                alignItems: "center",
                flexDirection: { md: "column", sm: " row", xs: "row" },
                width: "100%",
              }}
            >
              <StyledCard
                variant="outlined"
                sx={{
                  width: { md: "250px", xs: "100%", sm: "100%" },
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <Image
                    src="/candidate.png"
                    className="loginImages"
                    alt=""
                    width="0"
                    height="0"
                    sizes="100vw"
                  />
                  <CustomTypography sx={{ color: "white", fontWeight: "900" }}>
                    Candidate
                  </CustomTypography>
                </CardContent>
              </StyledCard>

              <NonCard
                variant="outlined"
                sx={{
                  width: { md: "250px", xs: "100%", sm: "100%" },
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <Image
                    src="/Employer.png"
                    className="loginImages"
                    alt=""
                    width="0"
                    height="0"
                    sizes="100vw"
                  />
                  <CustomTypography sx={{ color: "white", fontWeight: "900" }}>
                    Employer
                  </CustomTypography>
                </CardContent>
              </NonCard>
            </Stack>
          </Grid>

          <Grid item md={6} sm={12} xs={12}>
            <Card
              variant="outlined"
              sx={{
                background: "white",
                borderRadius: "20px",
                padding: { md: "30px", xs: "10px", sm: "10px" },
              }}
            >
              <CardContent>
                <Stack sx={{ alignItems: "center", gap: "20px" }}>
                  <Stack sx={{ alignItems: "center" }}>
                    <CustomTypography
                      sx={{ fontSize: "30px", fontWeight: "900" }}
                    >
                      Sign Up
                    </CustomTypography>
                    <Stack
                      direction={"row"}
                      sx={{
                        gap: "5px",
                        display: { md: "flex", xs: "none", sm: "none" },
                      }}
                    >
                      <CustomTypography>
                        Sign Up Already have an account?
                      </CustomTypography>
                      <Link href="/signin">
                        <CustomTypography
                          sx={{ color: "#034275", textDecoration: "underline" }}
                        >
                          Log In
                        </CustomTypography>
                      </Link>
                    </Stack>
                  </Stack>
                  <button className="linkedinButton">
                    <span>
                      <img src={"/linkedInLogo.png"} alt="" height={"30px"} />
                    </span>
                    <span style={{ marginTop: "6px" }}>
                      Log in with LinkedIn
                    </span>
                  </button>
                  <button className="linkedinButton">
                    <span>
                      <img src={"/googleLogo.png"} alt="" height={"30px"} />
                    </span>
                    <span style={{ marginTop: "1px" }}>Log in with Google</span>
                  </button>
                  <Divider>OR</Divider>
                  <StyledInput placeholder="Enter Full Name" />
                  <StyledInput placeholder="Enter Email ID" />

                  <Stack direction={"row"} sx={{ width: "95%", gap: "10px" }}>
                    <StyledPasswordInput
                      placeholder="Password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      onChange={handleChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleClickShowPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    <StyledPasswordInput placeholder="Password" />
                  </Stack>

                  <FormControl sx={{ mt: "15px", width: "95%" }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          // value={values.checked}
                          color="primary"
                          // checked={values.checked}
                        />
                      }
                      label={
                        <p>
                          By clicking checkbox, you agree to our{" "}
                          <span>
                            <a
                              style={{ color: "#4fa9ff" }}
                              target="blank"
                              href="https://graceful-donut-d1174d.netlify.app/WebsiteUse"
                            >
                              Terms and Conditions and Privacy Policy
                            </a>
                          </span>
                        </p>
                      }
                    />
                  </FormControl>
                  <button
                    style={{
                      height: "60px",
                      backgroundColor: "#015FB1",
                      borderRadius: "8px",
                      width: "95%",
                      fontSize: "18px",
                      fontWeight: "400",
                      color: "white",
                    }}
                  >
                    Log in
                  </button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Signup;
