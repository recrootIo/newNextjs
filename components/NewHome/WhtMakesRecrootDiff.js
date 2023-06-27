import React from "react";
import { Box, Grid, Container, Button, Card } from "@mui/material";
import Image from "next/image";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";

const WhtMakesRecrootDiff = () => {
  return (
    <Box>
      <Container>
        <Box>
          <CustomTypography
            sx={{
              fontSize: "36px",
              fontWeight: 700,
              color: "#01313F",
              textAlign: "center",
            }}
          >
            Why Makes Recroot Different
          </CustomTypography>
          {/* <Card>
            <CardContent>
<Grid container spacing={2}>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  </Grid>
            </CardContent>
          </Card> */}
        </Box>
      </Container>
    </Box>
  );
};

export default WhtMakesRecrootDiff;
