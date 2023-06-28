/* eslint-disable @next/next/no-img-element */
"use client";
import { PRIMARY } from "../../theme/colors";
import { MAX } from "../../theme/spacings";
import CounterUpCom from "../../ui-components/CounterUpCom/CounterUpCom";
import { CustomTypography } from "../../ui-components/CustomTypography/CustomTypography";
import { Grid, Stack, Card, CardContent, Container } from "@mui/material";
import Image from "next/image";
// import "./homepage.css";

const WeAreProud = () => {
  return (
    <div className="numbers" id="OurNumHome">
      <Container>
        <Grid
          container
          className="numberclz"
          sx={{ gap: { md: "1px", xs: "20px", sm: "20px" } }}
        >
          <Grid item xs={12} md={12}>
            <CustomTypography
              sx={{
                fontSize: "30px",
                fontWeight: 700,
                color: "#01313F",
                textAlign: "center",
                mb: "80px",
                mt: "80px",
              }}
            >
              We are proud of our work
            </CustomTypography>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              justifyContent: { md: "flex-start", xs: "center", sm: "center" },
            }}
          >
            <Image
              src="/newhome_images/we-are-proud-img.png"
              alt="Picture of the We are proud section"
              priority={true}
              width="493"
              height="584"
              data-aos="fade-up"
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={3.4}
            sx={{
              display: "flex",
              justifyContent: { md: "flex-end", sm: "center", xs: "center" },
              alignItems: "center",
            }}
          >
            <Stack
              sx={{
                width: "100%",
                flexDirection: { md: "column", sm: "row", xs: "row" },
                justifyContent: "center",
                alignItems: { md: "center", sm: "flex-end", xs: "flex-end" },
                flexWrap: "wrap",
                gap: "20px",
              }}
            >
              <Card className="numcardpink userDetailCard">
                <CardContent>
                  <CustomTypography
                    sx={{ fontSize: "35px", fontFamily: "Inter-bold" }}
                  >
                    <CounterUpCom endValue={130} sectionSelect="OurNumHome" />+
                  </CustomTypography>
                  <CustomTypography sx={{ fontSize: "18px" }} fontWeight="500">
                    Total jobs
                  </CustomTypography>
                </CardContent>
              </Card>

              <Card className="numcardblue userDetailCard">
                <CardContent>
                  <CustomTypography
                    sx={{ fontSize: "35px", fontFamily: "Inter-bold" }}
                  >
                    <CounterUpCom endValue={130} sectionSelect="OurNumHome" />+
                  </CustomTypography>
                  <CustomTypography sx={{ fontSize: "18px" }} fontWeight="500">
                    Total candidates registered
                  </CustomTypography>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            md={3.4}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "align-items",
            }}
          >
            <Stack
              sx={{
                width: "100%",
                flexDirection: { md: "column", sm: "row", xs: "row" },
                justifyContent: "center",
                alignItems: { md: "center", sm: "flex-end", xs: "flex-end" },
                flexWrap: "wrap",
                gap: "20px",
              }}
            >
              <Card className="numcardblue userDetailCard">
                <CardContent>
                  <CustomTypography
                    sx={{ fontSize: "35px", fontFamily: "Inter-bold" }}
                  >
                    <CounterUpCom endValue={130} sectionSelect="OurNumHome" />+
                  </CustomTypography>
                  <CustomTypography sx={{ fontSize: "18px" }} fontWeight="500">
                    Total companies actively hiring
                  </CustomTypography>
                </CardContent>
              </Card>

              <Card className="numcardpink userDetailCard">
                <CardContent>
                  <CustomTypography
                    sx={{ fontSize: "35px", fontFamily: "Inter-bold" }}
                  >
                    <CounterUpCom endValue={130} sectionSelect="OurNumHome" />+
                  </CustomTypography>
                  <CustomTypography sx={{ fontSize: "18px" }} fontWeight="500">
                    Total job categories available
                  </CustomTypography>
                </CardContent>
              </Card>

              <Card className="numcardblue userDetailCard">
                <CardContent>
                  <CustomTypography
                    sx={{ fontSize: "35px", fontFamily: "Inter-bold" }}
                  >
                    <CounterUpCom endValue={130} sectionSelect="OurNumHome" />+
                  </CustomTypography>
                  <CustomTypography sx={{ fontSize: "18px" }} fontWeight="500">
                    Total job applications submitted
                  </CustomTypography>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default WeAreProud;
