import React from "react";
import { Box, Grid, Container, Button } from "@mui/material";
import Image from "next/image";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";

const IdentifyingBestCandidates = () => {
  return (
    <Box>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box>
              <Image
                src="/newhome_images/identifying-bestcandi-img.png"
                alt="Picture of the Identifying best candidates"
                priority={true}
                width="526"
                height="526"
              />
            </Box>
          </Grid>
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
                sx={{ fontSize: "36px", fontWeight: 700, color: "#01313F" }}
              >
                Identifying Best Candidates with AI
              </CustomTypography>
              <CustomTypography
                sx={{ fontSize: "16px", fontWeight: 400, color: "#01313F" }}
              >
                Utilizing advanced AI algorithms, we automate the discovery and
                identification of the best candidates who meet the job criteria,
                ensuring 90% of our employers hire the right talent within 24
                hours.
              </CustomTypography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          backgroundImage: `url("/newhome_images/guaranteed-hiring-bg.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "725px",
        }}
      >
        <Container>
          <Grid container spacing={4}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                <CustomTypography
                  sx={{ fontSize: "36px", fontWeight: 700, color: "#01313F" }}
                >
                  Guaranteed Hiring
                </CustomTypography>
                <CustomTypography
                  sx={{ fontSize: "16px", fontWeight: 400, color: "#01313F" }}
                >
                  We are the only recruitment platform that ensures our
                  employers hire the right candidates for their open positions,
                  with a success rate of over 90%.
                </CustomTypography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Image
                  src="/newhome_images/guaranteed-hiring-img.png"
                  alt="Picture of the Guaranteed hiring"
                  priority={true}
                  width="526"
                  height="526"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            mt: "80px",
          }}
        >
          <CustomTypography
            sx={{
              fontSize: "36px",
              fontWeight: 700,
              color: "#01313F",
              textAlign: "center",
            }}
          >
            Dedicated Candidate Managers
          </CustomTypography>
          <CustomTypography
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              color: "#01313F",
              textAlign: "center",
              width: "70%",
            }}
          >
            We own a team of dedicated candidate managers who adds a human touch
            to the automated talent discovery process to ensure our employers
            find the right candidates for their job openings.
          </CustomTypography>
          <Image
            src="/newhome_images/board-members-img.png"
            alt="Picture of the Dedicated Candidate Managers"
            priority={true}
            width="946"
            height="473"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default IdentifyingBestCandidates;
