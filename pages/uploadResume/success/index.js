"use client";
import Navbar from "@/components/Navbar/Navbar";
import { NEUTRAL } from "@/theme/colors";
import { BOLD } from "@/theme/fonts";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { Box, Stack, styled } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const StyledButton = styled("button")({
  backgroundColor: "#015FB1",
  color: NEUTRAL,
  cursor: "pointer",
  padding: "12px",
  borderRadius: "12px",
  fontFamily: BOLD,
  width: "300px",
  fontSize: "21px",
});

const Index = () => {
  const searchText = "OK";
  const { push } = useRouter();
  return (
    <Box
      sx={{
        backgroundImage: `url("/bg.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100vw",
      }}
    >
      <Navbar />
      <Stack
        sx={{
          mt: "100px",
          justifyContent: "center",
          alignItems: "center",
          p: "10px",
          gap: "20px",
          textAlign: "center",
        }}
      >
        <Image
          src={"/appliedSuccess.png"}
          alt=""
          className="successImage"
          height={500}
          width={500}
        />
        <div class="check-container">
          <div class="check-background">
            <svg
              viewBox="0 0 65 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 25L27.3077 44L58.5 7"
                stroke="white"
                stroke-width="13"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="check-shadow"></div>
        </div>
        <Stack
          sx={{
            gap: "10px",
            alignItems: "center",
            flexDirection: { md: "row", xs: "column" },
          }}
        >
          <CustomTypography fontSize="30px" fontWeight="400">
            Your Information has been saved successfully
          </CustomTypography>
        </Stack>
        <StyledButton
          variant="contained"
          onClick={() => {
            push('/');
          }}
        >
          {searchText}
        </StyledButton>
      </Stack>
    </Box>
  );
};

export default Index;
