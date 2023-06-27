"use client";
import { MAX } from "../../theme/spacings";
import { CustomTypography } from "../../ui-components/CustomTypography/CustomTypography";
import { Box, Container, useMediaQuery } from "@mui/material";
import styles from "./newhome.module.css";

const WatchDemo = () => {
  const tablet = useMediaQuery("(max-width:909px)");
  const background = tablet ? "" : `url(/searchlepi.png),url(/searchbar.png)`;

  return (
    <div className={styles.watchDemo}>
      <Container
        sx={{
          backgroundImage: background,
          backgroundRepeat: "no-repeat,no-repeat",
          paddingBottom: "1px",
          backgroundPosition: "bottom left,top right",
          backgroundSize: "288px ,288px",
        }}
      >
        <Box className="nicheMinHight">
          <CustomTypography
            sx={{
              fontSize: MAX,
              fontWeight: "700",
              fontFamily: "Inter-Bold",
              textAlign: "center",
            }}
            gutterBottom
          >
            Learn How Our Platform Work
          </CustomTypography>
          <Box sx={{ textAlign: "center", marginTop: "20px" }}>
            <button
              style={{
                height: "62px",
                backgroundColor: "#DDF2FA",
                borderRadius: "5px",
                fontSize: "17px",
                fontWeight: "700",
                width: "227px",
                color: "black",
                fontFamily: "Inter",
                textTransform: "uppercase",
              }}
            >
              Watch Demo
            </button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default WatchDemo;
