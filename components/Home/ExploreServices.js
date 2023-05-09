import React from "react";
import Container from "@mui/material/Container";
import { Grid, Stack } from "@mui/material";
import { CustomTypography } from "../../ui-components/CustomTypography/CustomTypography";
import { PRIMARY } from "../../theme/colors";
import { MAX } from "../../theme/spacings";
import Image from "next/image";

const ExploreServices = () => {
  return (
    <div style={{ padding: "35px 0 50px 0" }}>
      <Container>
        <Stack
          sx={{
            rowGap: "50px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack
            direction={"row"}
            sx={{ gap: "10px", flexWrap: "wrap", justifyContent: "center" }}
          >
            <CustomTypography
              sx={{
                fontSize: MAX,
                fontWeight: "700",
                fontFamily: "Inter-Bold",
              }}
            >
              Explore
            </CustomTypography>
            <CustomTypography
              sx={{
                fontSize: MAX,
                fontWeight: "700",
                color: PRIMARY,
                fontFamily: "Inter-Bold",
              }}
            >
              Services
            </CustomTypography>
          </Stack>

          <Grid container spacing={2.5}>
            <Grid item md={3} sm={6} xs={12}>
              <Stack
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  width: "100%",
                }}
              >
                <Image src="/service1.png" alt="" width={200} height={200} />

                <CustomTypography
                  sx={{
                    fontWeight: "600",
                    fontSize: "24px",
                    fontFamily: "Inter-Bold",
                  }}
                >
                  Recroot Platform
                </CustomTypography>
                <CustomTypography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "300",
                    textAlign: "justify",
                    padding: "0 5px",
                  }}
                >
                  Recroot.io is a platforms for employers to recroot skilled
                  tech professionals from anywhere in the world. All jobs are
                  posted in the Recroot platforms
                </CustomTypography>
              </Stack>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <Stack sx={{ alignItems: "center", gap: "10px" }}>
                <Image src="/service2.png" alt="" width={200} height={200} />
                <CustomTypography
                  sx={{
                    fontWeight: "600",
                    fontSize: "24px",
                    fontWeight: "600",
                    fontFamily: "Inter-Bold",
                  }}
                >
                  Ad Campaigns
                </CustomTypography>
                <CustomTypography
                  sx={{
                    fontSize: "17px",
                    fontWeight: "300",
                    textAlign: "justify",
                    padding: "0 5px",
                  }}
                >
                  We run organic and paid ad campaigns on social media. This
                  includes Facebook ,instagram, LinkedIn and Twitter.
                </CustomTypography>
              </Stack>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <Stack sx={{ alignItems: "center", gap: "10px" }}>
                <Image src="/service3.png" alt="" width={200} height={200} />
                <CustomTypography
                  sx={{
                    fontWeight: "600",
                    fontSize: "24px",
                    fontFamily: "Inter-Bold",
                  }}
                >
                  Screening & Selection
                </CustomTypography>
                <CustomTypography
                  sx={{
                    fontSize: "17px",
                    fontWeight: "300",
                    textAlign: "justify",
                    padding: "0 5px",
                  }}
                >
                  Every resume received through the Recroot platform is
                  assessed, interviewed and selected by our experienced tech
                  leads
                </CustomTypography>
              </Stack>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <Stack sx={{ alignItems: "center", gap: "10px" }}>
                <Image src="/service4.png" alt="" width={200} height={200} />
                <CustomTypography
                  sx={{
                    fontWeight: "600",
                    fontSize: "24px",
                    fontFamily: "Inter-Bold",
                  }}
                >
                  Interview & Selection
                </CustomTypography>
                <CustomTypography
                  sx={{
                    fontSize: "17px",
                    fontWeight: "300",
                    textAlign: "justify",
                    padding: "0 5px",
                  }}
                >
                  We schedule interviews for the selected candidates with client
                  representatives. We work with clients to negotiate salary and
                  draft contract for successful candidates.
                </CustomTypography>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </div>
  );
};

export default ExploreServices;
