/* eslint-disable @next/next/no-img-element */
"use client";
import { PRIMARY } from "../../theme/colors";
import { MAX } from "../../theme/spacings";
import CounterUpCom from "../../ui-components/CounterUpCom/CounterUpCom";
import { CustomTypography } from "../../ui-components/CustomTypography/CustomTypography";
import {
  Grid,
  Typography,
  Stack,
  Card,
  CardContent,
  Container,
} from "@mui/material";
// import "./homepage.css";

const OurNumHome = () => {
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
                fontWeight: 800,
                fontSize: MAX,
                fontFamily: "Inter-Bold",
              }}
              gutterBottom
            >
              Our&nbsp;<span style={{ color: PRIMARY }}>Numbers</span>
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
            <img
              src="/numbers.png"
              alt=""
              style={{ height: "600px" }}
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
              <Card className="numcard userDetailCard">
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

              <Card className="numcard userDetailCard">
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
              <Card className="numcard userDetailCard">
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

              <Card className="numcard userDetailCard">
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

              <Card className="numcard userDetailCard">
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

export default OurNumHome;
