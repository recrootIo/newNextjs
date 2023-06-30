import React, { useEffect } from "react";
import { Box, Grid, Container, Button } from "@mui/material";
import Image from "next/image";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { useDispatch } from "react-redux";
import { retrievePersonal } from "@/redux/slices/personal";
import { companyJobs } from "@/redux/slices/job";
import { getCompanyDetails } from "@/redux/slices/companyslice";
import Cookies from "js-cookie";

const HireTalents = () => {
  const dispatch = useDispatch()
  const user = Cookies.get()
  useEffect(() => {
    localStorage.removeItem("Redirect");
    if (user?.userType === "Candidate") {
      dispatch(retrievePersonal());
    }
    if (
      user?.userType === "Employer" ||
      user?.userType === "Member"
    ) {
      dispatch(companyJobs());
      dispatch(getCompanyDetails());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  return (
    <Box
      sx={{
        backgroundImage: `url("/newhome_images/hire-talents-bg.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "1000px",
        pt: "80px",
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              <CustomTypography
                sx={{ fontSize: "45px", fontWeight: 700, color: "#FFFFFF" }}
              >
                Hire Talents within 24 Hours
              </CustomTypography>
              <div>
              <CustomTypography
                sx={{ fontSize: "16px", fontWeight: 400, color: "#FFFFFF" }}
              >
                Join us today and experience the power of hiring top-notch
                talents instantly for your organization.
              </CustomTypography>
              </div>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "10px",
                  bgcolor: "#D4F0FC !important",
                  color: "#01313F",
                  fontWeight: 700,
                  width: "235px",
                }}
              >
                Get Started
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Image
                src="/newhome_images/home-hiretalentssection-img.png"
                alt="Picture of the Hire Talents"
                priority={true}
                width="726"
                height="626"
                // sizes="100vw"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HireTalents;
