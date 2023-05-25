"use client";
import { MAX } from "../../theme/spacings";
import { CustomTypography } from "../../ui-components/CustomTypography/CustomTypography";
import { Box, Container, useMediaQuery } from "@mui/material";

const NicheTechHome = () => {
  const tablet = useMediaQuery("(max-width:909px)");
  const background = tablet ? "" : `url(/searchlepi.png),url(/searchbar.png)`;

  return (
    <div className="nichetech">
      <Container
        sx={{
          backgroundImage: background,
          backgroundRepeat: "no-repeat,no-repeat",
          paddingBottom: "1px",
          backgroundPosition: "bottom left,bottom right",
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
            Search Niche Tech Professionals
          </CustomTypography>
          <Box sx={{ textAlign: "center" }}>
            <CustomTypography sx={{ fontWeight: "900", fontSize: "18px" }}>
              Find great tech talent with customizable solutions from Recroot.io
            </CustomTypography>
            <Box sx={{ textAlign: "center", marginTop: "20px" }}>
              <button
                style={{
                  height: "62px",
                  backgroundColor: "#DDF2FA",
                  borderRadius: "5px",
                  fontSize: "20px",
                  fontWeight: "700",
                  width: "227px",
                  color: "black",
                  fontFamily: "Inter",
                }}
              >
                GET STARTED
              </button>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default NicheTechHome;
