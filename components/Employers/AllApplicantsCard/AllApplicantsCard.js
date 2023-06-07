import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Chip,
  Stack,
  styled,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import dynamic from "next/dynamic";
import moment from "moment";
import VerifiedIcon from "@mui/icons-material/Verified";
import { PRIMARY } from "@/theme/colors";
import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const StyledAvatar = styled(Avatar)(({}) => ({
  "& .MuiAvatar-img": {
    width: "40px",
    height: "40px",
  },
  height: "40px",
  width: "40px",
}));

const AllApplicantsCard = ({ handleNavigate, ...lateJob }) => {
  return (
    <Card
      sx={{
        width: "100%",
        boxShadow: "4px 4px 10px rgba(3, 66, 117, 0.1) !important",
        borderRadius: "10px",
      }}
    >
      <CardHeader
        avatar={
          <StyledAvatar
            sx={{
              objectFit: "cover",
              height: "60px",
              width: "60px",
              border: "1px solid #2699ff",
            }}
            alt="logo"
            src="/applicant-img.png"
            size={300}
          />
        }
        titleTypographyProps={{
          fontSize: 19,
          fontWeight: "bold",
          color: "#034275",
        }}
        subheaderTypographyProps={{
          fontSize: 16,
          color: "#034275",
        }}
        title="Candidate Name"
        subheader="Graphic Designer"
        action={
          <>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                mt: "16px",
                paddingRight: "16px",
              }}
            >
              <Stack
                direction="row"
                spacing={2}
                sx={{ display: "flex", justifyContent: "flex-end", mb: "10px" }}
              >
                {/* <ThumbUpOffAltIcon
                  sx={{ color: "#7AC1DA", fontSize: "30px" }}
                />
                <ThumbDownOffAltIcon
                  sx={{ color: "#7AC1DA", fontSize: "30px" }}
                /> */}
                <Checkbox
                  {...label}
                  icon={
                    <ThumbUpOffAltIcon
                      sx={{ color: "#7AC1DA", fontSize: "30px" }}
                    />
                  }
                  checkedIcon={
                    <ThumbUpIcon sx={{ color: "#7AC1DA", fontSize: "30px" }} />
                  }
                />
                <Checkbox
                  {...label}
                  icon={
                    <ThumbDownOffAltIcon
                      sx={{ color: "#7AC1DA", fontSize: "30px" }}
                    />
                  }
                  checkedIcon={
                    <ThumbDownIcon
                      sx={{ color: "#7AC1DA", fontSize: "30px" }}
                    />
                  }
                />
              </Stack>
            </Box>
          </>
        }
        sx={{ pb: 0 }}
      />
      <CardContent sx={{ pt: 0 }}>
        <Box sx={{ mb: "7px", display: "flex", justifyContent: "flex-end" }}>
          <Button
            sx={{
              minWidth: "10px !important",
              minHeight: "10px !important",
              padding: "5px !important",
              color: "#02a9f7",
              borderColor: "#02a9f7",
              fontSize: "18px",
            }}
            size="large"
            variant="outlined"
            bgcolor="#02A9F7 !important"
          >
            <DownloadIcon sx={{ fontSize: "35px" }} />
          </Button>
          <Button
            variant="contained"
            size="medium"
            sx={{
              ml: "8px",
              height: "52px",
              width: "180px",
              bgcolor: "#02A9F7 !important",
              fontSize: "18px",
            }}
          >
            View Details
          </Button>
        </Box>
        <Stack direction={"row"} sx={{ gap: "59px", mb: "10px" }}>
          <Box sx={{ display: "flex" }}>
            <AssignmentIndIcon sx={{ color: "#1097CD" }} />
            <CustomTypography
              sx={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#1097CD",
              }}
            >
              Creative Director
            </CustomTypography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <CurrencyRupeeIcon sx={{ color: "#1097CD" }} />
            <CustomTypography
              sx={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                color: "rgba(1, 49, 63, 0.8)",
              }}
            >
              Notice Period - 15 Days
            </CustomTypography>
          </Box>
        </Stack>
        <Stack direction={"row"} sx={{ gap: "15px", margin: "10px 0" }}>
          <Box sx={{ display: "flex" }}>
            <HourglassTopIcon sx={{ color: "#1097CD" }} />
            <CustomTypography
              sx={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                color: "rgba(1, 49, 63, 0.8)",
              }}
            >
              Experience - 3 Years
            </CustomTypography>
          </Box>
        </Stack>
        <CustomTypography
          color="rgba(1, 49, 63, 0.8)"
          sx={{ mt: "25px", fontSize: "16px" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad
          minim veniamUt enim ad minim veniam...
        </CustomTypography>
        <CustomTypography
          sx={{ textAlign: "right", fontStyle: "italic", fontSize: "11px" }}
          variant="body2"
          color="text.secondary"
        >
          Applied 10 days ago
        </CustomTypography>
      </CardContent>
    </Card>
  );
};

export default AllApplicantsCard;
