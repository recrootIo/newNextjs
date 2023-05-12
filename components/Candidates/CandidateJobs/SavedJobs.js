import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { Box, CardContent, Stack } from "@mui/material";
import React from "react";
import { StyledCard } from "../ProfileStyles";
import AddIcon from "@mui/icons-material/Add";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { BOLD } from "@/theme/fonts";
import { NEUTRAL } from "@/theme/colors";

const SavedJobs = () => {
  return (
    <StyledCard variant="outlined">
      <Stack
        direction={"row"}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 30px",
          backgroundColor: "#5CA9E814",
        }}
      >
        <CustomTypography
          sx={{
            fontFamily: BOLD,
            color: "#00339B",
            fontSize: "20px",
          }}
        >
          Saved Jobs
        </CustomTypography>
        <AddIcon />
      </Stack>

      <CardContent sx={{ padding: "30px 30px" }}>
        <Stack
          sx={{
            backgroundColor: "#F6FCFF",
            borderRadius: "10px",
            padding: "20px 30px",
            border: "1px solid #D3EAFF",
            gap: "5px",
          }}
        >
          <Stack
            direction={"row"}
            sx={{
              alignItems: "center",
              gap: "10px",
              justifyContent: "space-between",
            }}
          >
            <Stack>
              <CustomTypography sx={{ fontFamily: BOLD, fontSize: "25px" }}>
                Graphic Designer
              </CustomTypography>
              <CustomTypography>Recroot</CustomTypography>
            </Stack>
            <Box
              sx={{
                border: "1px solid #DADADA",
                justifyContent: "space-between",
                alignContent: "center",
                padding: "12px",
                borderRadius: "10px",
              }}
            >
              <BookmarkIcon sx={{ color: "#2699FF" }} />
            </Box>
          </Stack>
          <Stack direction={"row"} sx={{ gap: "20px" }}>
            <CustomTypography sx={{ color: "gray", fontSize: "13px" }}>
              Remote
            </CustomTypography>
            <CustomTypography sx={{ color: "gray", fontSize: "13px" }}>
              Part Time
            </CustomTypography>
            <CustomTypography sx={{ color: "gray", fontSize: "13px" }}>
              3-6 Years
            </CustomTypography>
            <CustomTypography sx={{ color: "gray", fontSize: "13px" }}>
              3-6 LPA
            </CustomTypography>
          </Stack>
          <Stack
            direction={"row"}
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <CustomTypography
              sx={{
                color: "#00339B",
                textDecoration: "underline",
                fontSize: "15px",
              }}
            >
              See Full Description
            </CustomTypography>
            <button
              style={{
                backgroundColor: "#02A9F7",
                color: NEUTRAL,
                height: "50px",
                borderRadius: "8px",
                width: "250px",
                fontWeight: "900",
                fontSize: "18px",
              }}
            >
              Apply Now
            </button>
          </Stack>
        </Stack>

        <Stack
          direction={"row"}
          sx={{ justifyContent: "flex-end", mt: "10px" }}
        >
          <CustomTypography
            sx={{
              textDecoration: "underline",
              color: "#00339B",
              fontSize: "14px",
            }}
          >
            View Similar Jobs
          </CustomTypography>
        </Stack>
      </CardContent>
    </StyledCard>
  );
};

export default SavedJobs;
