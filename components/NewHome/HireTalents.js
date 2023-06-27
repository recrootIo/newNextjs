import React from "react";
import { Box, Grid, Container, Button } from "@mui/material";
import Image from "next/image";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";

const HireTalents = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url("/newhome_images/hire-talents-bg.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "1000px",
        pt: "100px",
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
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <CustomTypography
                sx={{ fontSize: "42px", fontWeight: 700, color: "#FFFFFF" }}
              >
                Hire Talents within 24 Hours
              </CustomTypography>
              <CustomTypography
                sx={{ fontSize: "16px", fontWeight: 400, color: "#FFFFFF" }}
              >
                Join us today and experience the power of hiring top-notch
                talents instantly for your organization.
              </CustomTypography>
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
          <Grid item xs={12} md={6}>
            <Box>
              <Image
                src="/newhome_images/home-hiretalents-img.png"
                alt="Picture of the Hire Talents"
                priority={true}
                width="626"
                height="526"
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
