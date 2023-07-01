"use client";
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  styled,
} from "@mui/material";
import { CustomTypography } from "../ui-components/CustomTypography/CustomTypography";
import Checkbox from "@mui/material/Checkbox";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
// import { useDispatch } from "react-redux";
// import { useRouter } from "next/navigation";
import Link from "next/link";
// import { register } from "@/redux/slices/auth";
import Image from "next/image";
import { CANDIDATE, ERROR, SECTORS } from "@/utils/constants";
import { validator } from "@/utils/Validator";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { register } from "@/redux/slices/auth";
import { openAlert } from "@/redux/slices/alert";
import { Inter, Roboto_Mono } from "next/font/google";
import Cookies from "js-cookie";
import axios from "axios";
import { EMPLOYER, RECRUITER } from "@/utils/UserConstants";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });
const StyledInput = styled(TextField)({
  width: "95%",
  fontSize: "18px",
});

const StyledPasswordInput = styled("input")({
  height: "60px",
  border: "1px solid #c2c8d0",
  borderRadius: "8px",
  width: "100%",
  fontSize: "18px",
  fontWeight: "400",
  color: "#000",
  padding: "10px",
});

function Signup() {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const [userType, setuserType] = useState(CANDIDATE);
  const [showPassword, setshowPassword] = useState(false);
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
  const [errors, setErrors] = useState({});
  const [confirmP, setconfirmP] = useState({
    confirmPassword: "",
    showConfirmPassword: false,
  });
  const [freeemail, setFreeemail] = useState({
    sts: false,
    msg: "",
  });

  const StyledFirstCard = styled(Card)(
    userType === CANDIDATE
      ? {
          background: "rgba(255, 255, 255, 0.5)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          border: " 1px solid rgba(255, 255, 255, 0.5)",
          width: "250px",
          // height: "250px",
          borderRadius: "20px",
          cursor: "pointer",
        }
      : {
          /* From https://css.glass */
          background: "rgba(255, 255, 255, 0)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(0.2px)",
          border: "1px solid rgba(255, 255, 255, 0.01)",
          width: "250px",
          // height: "250px",
          cursor: "pointer",
        }
  );

  const StyledCard = styled(Card)(
    userType === EMPLOYER
      ? {
          background: "rgba(255, 255, 255, 0.5)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          border: " 1px solid rgba(255, 255, 255, 0.5)",
          width: "250px",
          // height: "250px",
          borderRadius: "20px",
          cursor: "pointer",
        }
      : {
          /* From https://css.glass */
          background: "rgba(255, 255, 255, 0)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(0.2px)",
          border: "1px solid rgba(255, 255, 255, 0.01)",
          width: "250px",
          // height: "250px",
          cursor: "pointer",
        }
  );

  const NonCard = styled(Card)(
    userType === RECRUITER
      ? {
          background: "rgba(255, 255, 255, 0.5)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          border: " 1px solid rgba(255, 255, 255, 0.5)",
          width: "250px",
          // height: "250px",
          borderRadius: "20px",
          cursor: "pointer",
        }
      : {
          /* From https://css.glass */
          background: "rgba(255, 255, 255, 0)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(0.2px)",
          border: "1px solid rgba(255, 255, 255, 0.01)",
          width: "250px",
          // height: "250px",
          cursor: "pointer",
        }
  );

  const handleChange = (event) => {
    const field = event.target.name;
    let value = event.target.value;

    if (field === "email") {
      value = value.toLowerCase();
    }
    setValues({ ...values, [field]: value });
  };

  const handleClickShowPassword = () => {
    setshowPassword(!showPassword);
  };

  const handleCheckboxChange = (event) => {
    setValues({ ...values, checked: event.target.checked });
  };

  const handleClickShowConfirmPassword = () => {
    setconfirmP({
      ...confirmP,
      showConfirmPassword: !confirmP.showConfirmPassword,
    });
  };

  function isNotFreeEmail(email) {
    const regex = /^(?!.*(gmail\.com|yahoo\.com|hotmail\.com)).+@.+$/i;
    return regex.test(email);
  }

  const employers = [RECRUITER, EMPLOYER];
  const isEmployer = employers.includes(userType);

  const handleRegister = (e) => {
    e.preventDefault();
    setErrors(() => validator(values));
    const obj = validator(values);

    if (Object.keys(obj).length > 0) {
      return;
    }

    if (isEmployer) {
      if (isNotFreeEmail(values.email) === false) {
        setFreeemail({
          sts: true,
          msg: "Please Provide Company Email",
        });
        return;
      } else {
        setFreeemail({
          sts: false,
          msg: "",
        });
      }
    }

    dispatch(register({ values }))
      .unwrap()
      .then((originalPromiseResult) => {
        console.log(originalPromiseResult);
        axios.get("https://ipapi.co/json/").then((response) => {
          Cookies.set("country", response.data?.country);
        });
        push("/verifyMobile");
      })
      .catch((error) => {
        dispatch(
          openAlert({
            type: ERROR,
            message: "The User Already Exists",
          })
        );
        console.warn(error);
      });
  };

  const handleClick = (val) => {
    if (val === "google") {
      window.location.replace("https://preprod.recroot.au/auth/google");
    } else {
      window.location.replace("https://preprod.recroot.au/auth/linkedin");
    }
  };

  // //zoom in function
  const wrapperRef = useRef(null);

  useEffect(() => {
    wrapperRef.current.style.zoom = "70%";
  }, []);

  return (
    <>
      <Header title={"SIGN UP"} />
      <Box
        sx={{
          height: { md: "100%", xs: "100%" },
          p: { sm: "50px", xs: "0px" },
          width: "100vw",
          backgroundImage: "url(/SignUpBg.webp)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          overflow: "auto",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <div ref={wrapperRef}>
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Grid container spacing={2}>
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
                    blurDataURL="URL"
                    placeholder="blur"
                  />
                </Stack>
                <CustomTypography
                  sx={{
                    color: "white",
                    fontWeight: "600",
                    fontSize: "1.1rem",
                  }}
                >
                  Choose your profile
                </CustomTypography>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    md={6}
                    lg={5}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      order: { xs: 2, md: 1 },
                    }}
                  >
                    <StyledFirstCard
                      variant="outlined"
                      sx={{
                        width: {
                          lg: "250px",
                          md: "100%",
                          xs: "50%",
                          sm: "100%",
                        },
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "5px",
                      }}
                      onClick={() => {
                        setuserType(CANDIDATE);
                        setValues({ ...values, recrootUserType: CANDIDATE });
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
                          blurDataURL="URL"
                          placeholder="blur"
                        />
                        <CustomTypography
                          sx={{ color: "white", fontWeight: "900" }}
                        >
                          Candidate
                        </CustomTypography>
                      </CardContent>
                    </StyledFirstCard>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={8}
                    md={6}
                    lg={7}
                    sx={{ order: { xs: 1, sm: 2 } }}
                  >
                    <Stack
                      sx={{
                        justifyContent: "center",
                        gap: "20px",
                        alignItems: "flex-start",
                        flexDirection: { md: "column", sm: " row", xs: "row" },
                        width: "100%",
                      }}
                    >
                      <StyledCard
                        variant="outlined"
                        sx={{
                          width: {
                            lg: "250px",
                            md: "100%",
                            xs: "100%",
                            sm: "100%",
                          },
                          display: "flex",
                          justifyContent: "center",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: "5px",
                        }}
                        onClick={() => {
                          setuserType(EMPLOYER);
                          setValues({ ...values, recrootUserType: EMPLOYER });
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
                            blurDataURL="URL"
                            placeholder="blur"
                          />
                          <CustomTypography
                            sx={{ color: "white", fontWeight: "900" }}
                          >
                            {EMPLOYER}
                          </CustomTypography>
                        </CardContent>
                      </StyledCard>

                      <NonCard
                        variant="outlined"
                        sx={{
                          width: {
                            lg: "250px",
                            md: "100%",
                            xs: "100%",
                            sm: "100%",
                          },
                          display: "flex",
                          justifyContent: "center",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: "5px",
                        }}
                        onClick={() => {
                          setuserType(RECRUITER);
                          setValues({ ...values, recrootUserType: RECRUITER });
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
                            src="/recruiter.png"
                            className="loginImages"
                            alt=""
                            width="0"
                            height="0"
                            sizes="100vw"
                            blurDataURL="URL"
                            placeholder="blur"
                          />
                          <CustomTypography
                            sx={{ color: "white", fontWeight: "900" }}
                          >
                            {RECRUITER}
                          </CustomTypography>
                        </CardContent>
                      </NonCard>
                    </Stack>
                  </Grid>
                </Grid>
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
                            display: { md: "flex", xs: "flex" },
                            flexDirection: { xs: "column", sm: "row" },
                            alignItems: "center",
                          }}
                        >
                          <CustomTypography
                            sx={{
                              textAlign: "center",
                              textTransform: "capitalize",
                            }}
                          >
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
                      <Stack
                        sx={{
                          width: "95%",
                          gap: "10px",
                          flexDirection: {
                            md: "row",
                            sm: "column",
                            sx: "column",
                          },
                        }}
                      >
                        <button
                          onClick={handleClick}
                          className="linkedinButton"
                        >
                          <span>
                            <Image
                              src={"/linkedInLogo.png"}
                              alt=""
                              height={20}
                              width={20}
                            />
                          </span>
                          <span
                            style={{ marginTop: "6px", fontFamily: "Inter" }}
                          >
                            Sign up with LinkedIn
                          </span>
                        </button>

                        <button
                          onClick={() => {
                            handleClick("google");
                          }}
                          className="linkedinButton"
                        >
                          <span>
                            <Image
                              src={"/googleLogo.png"}
                              alt=""
                              height={20}
                              width={20}
                            />
                          </span>
                          <span
                            style={{ marginTop: "1px", fontFamily: "Inter" }}
                          >
                            sign up with Google
                          </span>
                        </button>
                      </Stack>

                      <Divider>OR</Divider>
                      <form
                        style={{
                          width: "100%",
                          display: "flex",
                          flexDirection: "column",
                          gap: "20px",
                          alignItems: "center",
                        }}
                        onSubmit={handleRegister}
                      >
                        <Stack
                          direction={{ sm: "row", xs: "column" }}
                          sx={{
                            width: "95%",
                            gap: "10px",
                            alignItems: "center",
                          }}
                        >
                          <StyledInput
                            autoComplete="given-name"
                            name="firstName"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            placeholder="Enter First Name"
                            autoFocus
                            value={values.firstName}
                            onChange={handleChange}
                            error={errors.firstName ? true : false}
                            helperText={errors.firstName}
                          />
                          <StyledInput
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            autoComplete="family-name"
                            placeholder="Enter Last Name"
                            value={values.lastName}
                            onChange={handleChange}
                            error={errors.lastName ? true : false}
                            helperText={errors.lastName}
                          />
                        </Stack>

                        <StyledInput
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                          placeholder="Enter E-mail"
                          type="email"
                          required
                          value={values.email}
                          onChange={handleChange}
                          error={errors.email || freeemail.sts}
                          helperText={errors.email || freeemail.msg}
                        />

                        <Stack
                          direction={{ sm: "row", xs: "column" }}
                          sx={{ width: "95%", gap: "10px" }}
                        >
                          <FormControl fullWidth>
                            <OutlinedInput
                              placeholder="Password"
                              type={showPassword ? "text" : "password"}
                              name="password"
                              sx={{
                                height: "60px",
                                borderRadius: "8px",
                                width: "100%",
                                fontSize: "18px",
                                fontWeight: "400",
                                color: "#000",
                                padding: "10px",
                              }}
                              onChange={handleChange}
                              endAdornment={
                                <InputAdornment position="end">
                                  <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleClickShowPassword}
                                    edge="end"
                                  >
                                    {showPassword ? (
                                      <VisibilityOff />
                                    ) : (
                                      <Visibility />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              }
                              error={errors.password ? true : false}
                            />
                            {!!errors.password && (
                              <FormHelperText
                                error
                                id="accountId-error"
                                sx={{
                                  width: {
                                    sm: "400px",
                                    xs: "100%",
                                    marginLeft: "0px",
                                  },
                                }}
                              >
                                {errors.password}
                              </FormHelperText>
                            )}
                            {!errors.password && (
                              <FormHelperText
                                id="accountpAss-error"
                                // sx={{
                                //   width: {
                                //     sm: "400px",
                                //     xs: "100%",
                                //     marginLeft: "0px",
                                //   },
                                // }}
                              >
                                Password must contain at least one uppercase
                                character, one lowercase character, one special
                                character and one number
                              </FormHelperText>
                            )}
                          </FormControl>
                          <FormControl fullWidth>
                            <OutlinedInput
                              placeholder="Confirm Password"
                              type={
                                confirmP.showConfirmPassword
                                  ? "text"
                                  : "password"
                              }
                              name="confirmPassword"
                              sx={{
                                height: "60px",
                                borderRadius: "8px",
                                width: "100%",
                                fontSize: "18px",
                                fontWeight: "400",
                                color: "#000",
                                padding: "10px",
                              }}
                              onChange={handleChange}
                              endAdornment={
                                <InputAdornment position="end">
                                  <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowConfirmPassword}
                                    onMouseDown={handleClickShowConfirmPassword}
                                    edge="end"
                                  >
                                    {confirmP.showConfirmPassword ? (
                                      <VisibilityOff />
                                    ) : (
                                      <Visibility />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              }
                            />
                            {!!errors.confirmPassword && (
                              <FormHelperText error id="accountId-error">
                                {errors.confirmPassword}
                              </FormHelperText>
                            )}
                          </FormControl>
                        </Stack>

                        {isEmployer ? (
                          <Stack
                            direction={{ sm: "row", xs: "column" }}
                            sx={{ width: "95%", gap: "10px" }}
                          >
                            <TextField
                              required
                              fullWidth
                              id="organization"
                              label="Organization Name"
                              name="organization"
                              autoComplete="name"
                              onChange={handleChange}
                              placeholder="Enter Your Organization Name"
                              // sx={{mt:'20px'}}
                            />

                            <FormControl fullWidth>
                              <InputLabel id="demo-simple-select-label">
                                Sector
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={values.sector}
                                name="sector"
                                required
                                label="sector"
                                onChange={handleChange}
                              >
                                {SECTORS.map((job, ind) => (
                                  <MenuItem key={ind} value={job}>
                                    {job}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </Stack>
                        ) : (
                          ""
                        )}

                        <FormControl sx={{ mt: "15px", width: "95%" }}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                value={values.checked}
                                color="primary"
                                checked={values.checked}
                                onChange={(e) => {
                                  handleCheckboxChange(e);
                                }}
                              />
                            }
                            label={
                              <span>
                                By clicking checkbox, you agree to our{" "}
                                <span>
                                  <Link
                                    style={{ color: "#4fa9ff" }}
                                    target="blank"
                                    href="https://graceful-donut-d1174d.netlify.app/WebsiteUse"
                                  >
                                    Terms and Conditions and Privacy Policy
                                  </Link>
                                </span>
                              </span>
                            }
                          />
                          {!!errors.agreeTermasValue && (
                            <FormHelperText error id="accountId-error">
                              {errors.agreeTermasValue}
                            </FormHelperText>
                          )}
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
                      </form>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Box>
    </>
  );
}

export default Signup;
