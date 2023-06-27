import React from "react";
import { Box, Grid, Container, Button } from "@mui/material";
import Image from "next/image";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";

const IdentifyingBestCandidates = () => {
  return (
    <Box>
      <Container sx={{ pb: "150px" }}>
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
          bgcolor: "#edfcff",
          pb: "150px",
        }}
      >
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,192L60,160C120,128,240,64,360,58.7C480,53,600,107,720,154.7C840,203,960,245,1080,234.7C1200,224,1320,160,1380,128L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg> */}
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
                  src="/newhome_images/gyaraneed-hiring.png"
                  alt="Picture of the Guaranteed hiring"
                  priority={true}
                  width="526"
                  height="526"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,192L60,160C120,128,240,64,360,58.7C480,53,600,107,720,154.7C840,203,960,245,1080,234.7C1200,224,1320,160,1380,128L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg> */}
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
