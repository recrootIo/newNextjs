/* eslint-disable @next/next/no-img-element */
"use client";
import {
  Card,
  CardContent,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { PRIMARY } from "../theme/colors";
import { CustomTypography } from "../ui-components/CustomTypography/CustomTypography";
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link";
import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { login } from "../slices/auth";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "@/redux/slices/auth";
const StyledCard = styled(Card)({
  background: "rgba(255, 255, 255, 0.2)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5px)",
  border: " 1px solid rgba(255, 255, 255, 0.3)",
  width: "200px",
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
  width: "200px",
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

function Signin() {
    const handleChange =(event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
      };
      const [showPassword, setshowPassword] = useState(false)
      const handleClickShowPassword = () =>{
      setshowPassword(!showPassword)
      }
      const [values, setValues] = React.useState({
        email: "",
        password: "",
      });
      const dispatch = useDispatch()
      const { push } = useRouter();
      const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login({ values }))
          .unwrap()
          .then((originalPromiseResult) => {
            console.log(originalPromiseResult)
            push('/')
            // if (originalPromiseResult.User.email_is_verified === false) {
            //   navigate("/Verifymobile");
            // } else if (originalPromiseResult.User.recrootUserType === "Member") {
            //   if (path === true) {
            //     navigate("/Pricing", { replace: true });
            //     return;
            //   }
            //   navigate("/", { replace: true });
            // } else if (originalPromiseResult.User.recrootUserType === "Candidate") {
            //   if (originalPromiseResult?.User?.profilePercentage > 69) {
            //     if (redirect) {
            //       navigate(redirect, { replace: true });
            //     } else {
            //       navigate("/", { replace: true });
            //     }
            //   } else {
            //     console.log("resumeSecond");
            //     navigate("/resumeSecond", { replace: true });
            //   }
            // } else {
            //   if (path === true) {
            //     navigate("/Pricing", { replace: true });
            //     return;
            //   }
            //   if (redirect === null) {
            //     navigate("/", { replace: true });
            //   } else {
            //     navigate(redirect, { replace: true });
            //   }
            // }
          })
          .catch((error) => {
            console.warn(error);
            // toastyErrorFunction("Please Check Your Email And Password");
          });
      };
  return (
    <section
    style={{
      height: "100vh",
      width: "100vw",
      backgroundImage: "url(/SignUpBG.svg)",
      overflow: "auto",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
     <Container
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <Grid container>
        <Grid item md={6} sx={{}}>
          <Stack
            sx={{ alignItems: "flex-start", gap: "20px", padding: "10px" }}
          >
            <img alt="" src="/whiteLogo.png" className="loginLogo" />
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
          <Stack sx={{ alignItems: "center" }}>
            <img
              alt="temp"
              src="/signIn2.png"
              style={{
                height: "530px",
              }}
            />
          </Stack>
        </Grid>
        <Grid item md={6}>
          <Card
            variant="outlined"
            sx={{
              background: "white",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <form onSubmit={(e)=>{handleLogin(e)}}>
            <CardContent>
              <Stack sx={{ alignItems: "center", gap: "20px" }}>
                <Stack sx={{ alignItems: "center" }}>
                  <CustomTypography
                    sx={{ fontSize: "30px", fontWeight: "900" }}
                  >
                    Log in
                  </CustomTypography>
                  <Stack direction={"row"} sx={{ gap: "5px" }}>
                    <CustomTypography>
                      Log in Don’t have an account?
                    </CustomTypography>
                    <Link href={'/signup'}>
                    <CustomTypography
                      sx={{ color: "#034275", textDecoration: "underline" }}
                    >
                      Sign up
                    </CustomTypography>
                    </Link>
                  </Stack>
                </Stack>
                <Stack
                  sx={{ alignItems: "center", gap: "20px", width: "100%" }}
                >
                  <button className="linkedinButton">
                    <span>
                      <img src={"/linkedInLogo.png"} alt="" height={"30px"} />
                    </span>
                    <span style={{ marginTop: "6px" }}>
                      Log in with LinkedIn
                    </span>
                  </button>
                  <button onClick={()=>{signIn('google',{callbackUrl:"http://localhost:3000"})}} className="linkedinButton">
                    <span>
                      <img src={"/googleLogo.png"} alt="" height={"30px"} />
                    </span>
                    <span style={{ marginTop: "1px" }}>Log in with Google</span>
                  </button>
                </Stack>

                <Divider>OR</Divider>

                <StyledInput 
                   autoComplete="given-name"
                   name="email"
                   required
                   fullWidth
                   id="email"
                   placeholder="Enter Email ID" 
                   onChange={handleChange}
                   />
                <StyledInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                value={values.password}
                 placeholder="Password" 
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
                    {showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
                 }
                 />

                <Stack
                  direction={"row"}
                  sx={{ justifyContent: "space-between", width: "95%" }}
                >
                  <FormControl>
                    <FormControlLabel
                      control={
                        <Checkbox
                          // value={values.checked}
                          color="primary"
                          // checked={values.checked}
                        />
                      }
                      label={<p>Remember Me</p>}
                    />
                  </FormControl>
                  <CustomTypography>Forget Your Password</CustomTypography>
                </Stack>

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
                  Log in
                </button>
              </Stack>
            </CardContent>
            </form>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </section>
  )
}

export default Signin
