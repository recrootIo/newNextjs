"use client";
import { CustomTypography } from "../../ui-components/CustomTypography/CustomTypography";
import { Grid, Box, Stack, Container, styled, Avatar } from "@mui/material";
import dynamic from "next/dynamic";

export const StyledAvatar = styled(Avatar)(({}) => ({
  "& .MuiAvatar-img": {
    width: "105px",
    height: "130px",
  },
  height: "200px",
  width: "200px",
}));

const CompanyHeader = () => {
  return (
    <>
      <Box
        sx={{
          height: "270px",
          backgroundImage:
            'url("/companyprofile_images/companyProfile-bg.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></Box>
      <Container>
        <div>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <StyledAvatar
              alt=""
              src="/companyprofile_images/apple-logo.png"
              sx={{
                objectFit: "contain",
                height: "200x",
                width: "200px",
                border: "6px solid #E4F7FF",
                bgcolor: "#fff",
                border: "5px solid rgba(228, 247, 255, 0.46)",
              }}
            />
          </Box>
        </div>
      </Container>
    </>
  );
};

export default dynamic(() => Promise.resolve(CompanyHeader), { ssr: false });
