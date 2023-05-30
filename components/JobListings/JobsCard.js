import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Stack,
  styled,
} from "@mui/material";
import { bull, getImageLogo, getSalary, StyledAvatar } from "./SearchSection";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import dynamic from "next/dynamic";
import moment from "moment";
import VerifiedIcon from "@mui/icons-material/Verified";
import { PRIMARY } from "@/theme/colors";
import React from "react";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const StyledIconWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "2px",
});

const JobsCard = ({ handleNavigate, ...lateJob }) => {
  const extractFirstTwoTags = (data) => {
    const container = document.createElement("div");
    container.innerHTML = data;
    const firstPTag = container.querySelector("p");
    return firstPTag ? firstPTag.textContent : "";
  };

  return (
    <Card className="jobCard">
      <CardHeader
        avatar={
          <StyledAvatar
            className="recentAvatar"
            alt="logo"
            src={getImageLogo(lateJob?.company?.companyLogo?.logo)}
            size={100}
          />
        }
        titleTypographyProps={{
          fontSize: 18,
          fontWeight: "bold",
          color: "#034275",
        }}
        subheaderTypographyProps={{
          fontSize: 15,
          color: "#034275",
        }}
        title={lateJob?.jobRole}
        subheader={lateJob?.company?.company_name}
        action={
          <>
            <Box className="searchRstBtn" sx={{ mb: "7px" }}>
              {/* <Button
                className="bookmarkBtn"
                size="small"
                variant="outlined"
                bgcolor="#02A9F7 !important"
              >
                <BookmarkBorderIcon sx={{ fontSize: "21px" }} />
              </Button> */}
              <Button
                variant="contained"
                size="medium"
                sx={{
                  ml: "8px",
                  bgcolor: "#02A9F7 !important",
                  fontSize: "14px",
                }}
                onClick={() =>
                  handleNavigate(
                    lateJob?.jobTitle,
                    lateJob?.jobRole,
                    lateJob?._id
                  )
                }
              >
                View Details
              </Button>
            </Box>
            <CustomTypography
              className="searchRstTypo"
              variant="body2"
              color="text.secondary"
            >
              {moment(lateJob.createdAt).fromNow()}
            </CustomTypography>
          </>
        }
      />
      <CardContent sx={{ pt: 0 }} className="searchCard">
        {lateJob?.featureType ||
          (lateJob?.immediate && (
            <Stack direction={"row"} sx={{ gap: "15px", margin: "10px 0" }}>
              {lateJob?.featureType && (
                <StyledIconWrapper>
                  <span style={{ color: PRIMARY }}>Featured</span>
                  <TurnedInNotOutlinedIcon color="primary" fontSize="medium" />
                </StyledIconWrapper>
              )}
              {lateJob?.immediate && (
                <StyledIconWrapper>
                  <span style={{ color: PRIMARY }}>Immediate</span>
                  <VerifiedIcon color="primary" fontSize="medium" />
                </StyledIconWrapper>
              )}
            </Stack>
          ))}

        <CustomTypography
          variant="body2"
          color="text.secondary"
          fontSize={15}
          mb={1}
        >
          {lateJob?.jobType}&nbsp;{bull}&nbsp;Part Time&nbsp;
          {bull}
          &nbsp;{lateJob?.essentialInformation?.experience}
          s&nbsp;
          {bull}
          &nbsp;{getSalary(lateJob?.salary)}
        </CustomTypography>

        <CustomTypography variant="body2" color="text.secondary" fontSize={15}>
          <div
            style={{
              overflow: "hidden",
              maxHeight: "100px",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {extractFirstTwoTags(lateJob?.jobDescription)}
            {/* <ReactQuill
              value={}
              readOnly={true}
              theme={"bubble"}
            /> */}
            {/* {} */}
          </div>
        </CustomTypography>

        <Stack direction={"row"} sx={{ padding: "7px 0" }}>
          {lateJob?.requiredSkill?.map((skill, index) => (
            <Chip
              key={index}
              label={`#${skill?.skill}`}
              color="primary"
              variant="outlined"
            />
          ))}
        </Stack>

        <Box className="mobileBtn">
          <Box className="btnBox">
            <Button
              className="bookmarkBtn"
              size="small"
              variant="outlined"
              bgcolor="#02A9F7 !important"
            >
              <BookmarkBorderIcon sx={{ fontSize: "21px" }} />
            </Button>
            <Button
              className="viewDetailBtn"
              variant="contained"
              size="medium"
              onClick={() =>
                handleNavigate(
                  lateJob?.jobTitle,
                  lateJob?.jobRole,
                  lateJob?._id
                )
              }
            >
              View Details
            </Button>
          </Box>
          <Box className="recentTypoBox">
            <CustomTypography
              className="recentTypo"
              variant="body2"
              color="text.secondary"
            >
              {moment(lateJob.createdAt).fromNow()} days ago
            </CustomTypography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default JobsCard;
