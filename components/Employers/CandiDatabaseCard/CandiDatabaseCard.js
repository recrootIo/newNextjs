import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
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
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ScheduleIcon from "@mui/icons-material/Schedule";

const bull = (
  <Box
    component="span"
    sx={{
      display: "inline-block",
      mx: "2px",
      transform: "scale(1.0)",
      color: "#000000",
    }}
  >
    •
  </Box>
);

export const StyledAvatar = styled(Avatar)(({}) => ({
  "& .MuiAvatar-img": {
    width: "40px",
    height: "40px",
  },
  height: "40px",
  width: "40px",
}));

const CandiDatabaseCard = () => {
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
              height: "80px",
              width: "80px",
              border: "1px solid #2699ff",
            }}
            alt="logo"
            src="/candi-dashboard-avatar-img.png"
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
          color: "#01313F",
          fontWeight: 500,
        }}
        title="Candidate Name"
        subheader={
          <>
            Graphic Designer
            <Box sx={{ display: "flex", alignItems: "center", mt: "5px" }}>
              <LocationOnIcon sx={{ color: "#2699FF", fontSize: "17px" }} />{" "}
              <CustomTypography variant="body2" color="#01313F">
                Mumbai
              </CustomTypography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: "5px" }}>
              <ScheduleIcon sx={{ color: "#2699FF", fontSize: "17px" }} />{" "}
              <CustomTypography variant="body2" color="#01313F">
                Immediately
              </CustomTypography>
            </Box>
          </>
        }
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
                <Button
                  variant="contained"
                  size="medium"
                  sx={{
                    ml: "8px",
                    height: "52px",
                    width: "180px",
                    bgcolor: "#02A9F7 !important",
                    fontSize: "16px",
                  }}
                >
                  View Detail
                </Button>
                <Button
                  sx={{
                    height: "52px",
                    width: "180px",
                    padding: "5px !important",
                    color: "#034275",
                    borderColor: "#02A9F7",
                    fontSize: "16px",
                  }}
                  size="large"
                  variant="outlined"
                  bgcolor="#02A9F7 !important"
                >
                  Quick View
                </Button>
              </Stack>
            </Box>
          </>
        }
        sx={{ pb: 0 }}
      />
      <CardContent sx={{ pt: 0 }}>
        <Divider sx={{ bgcolor: "#D4F0FC", mt: "20px" }} />
        <Box sx={{ display: "flex", gap: "10px", mt: "20px", mb: "20px" }}>
          <HourglassTopIcon sx={{ color: "#00339B" }} />
          <CustomTypography
            color="#00339B"
            sx={{ fontSize: "16px", fontWeight: 600 }}
          >
            Experience :
          </CustomTypography>
          <Box>
            <ul>
              <li>
                {bull} SDE Intern at Elamingo{" "}
                <span
                  style={{
                    color: "#2699FF",
                    fontWeight: 600,
                  }}
                >
                  2022-2023
                </span>
              </li>
              <li>
                {bull} Web Developer Intern at The Sparks Foundation{" "}
                <span
                  style={{
                    color: "#2699FF",
                    fontWeight: 600,
                  }}
                >
                  2022-2023
                </span>
              </li>
              <li>
                {bull} at Internshala Student Partner (ISP 2022), Internshala{" "}
                <span
                  style={{
                    color: "#2699FF",
                    fontWeight: 600,
                  }}
                >
                  2021-2021
                </span>
              </li>
            </ul>
            <CustomTypography
              color="#00339B"
              sx={{
                fontSize: "14px",
                textDecoration: "underline",
              }}
            >
              View More
            </CustomTypography>
          </Box>
        </Box>
        <Divider sx={{ bgcolor: "#D4F0FC", mt: "20px" }} />
        <Box sx={{ display: "flex", gap: "10px", mt: "20px", mb: "20px" }}>
          <HourglassTopIcon sx={{ color: "#00339B" }} />
          <CustomTypography
            color="#00339B"
            sx={{ fontSize: "16px", fontWeight: 600 }}
          >
            Education :
          </CustomTypography>
          <Box>
            <ul>
              <li>
                {bull} Bachelors at Meerut Institute Of Technology{" "}
                <span
                  style={{
                    color: "#2699FF",
                    fontWeight: 600,
                  }}
                >
                  2020-2023
                </span>
              </li>
              <li>
                {bull} Masters in MA{" "}
                <span
                  style={{
                    color: "#2699FF",
                    fontWeight: 600,
                  }}
                >
                  2022-2022
                </span>
              </li>
            </ul>
            <CustomTypography
              color="#00339B"
              sx={{
                fontSize: "14px",
                textDecoration: "underline",
              }}
            >
              View More
            </CustomTypography>
          </Box>
        </Box>
        <Divider sx={{ bgcolor: "#D4F0FC", mt: "20px" }} />
        <Box sx={{ display: "flex", gap: "10px", mt: "20px", mb: "20px" }}>
          <CurrencyRupeeIcon sx={{ color: "#00339B" }} />
          <CustomTypography
            color="#00339B"
            sx={{ fontSize: "16px", fontWeight: 600 }}
          >
            Salary :
          </CustomTypography>
          <Box>
            <ul>
              <li>
                {bull}Current Salary -{" "}
                <span
                  style={{
                    color: "#2699FF",
                    fontWeight: 600,
                  }}
                >
                  4 LPA
                </span>
              </li>
              <li>
                {bull} Expected Salary -{" "}
                <span
                  style={{
                    color: "#2699FF",
                    fontWeight: 600,
                  }}
                >
                  6 LPA
                </span>
              </li>
            </ul>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CandiDatabaseCard;
