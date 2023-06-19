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
  Avatar,
} from "@mui/material";
import { bull, getImageLogo, getSalary, StyledAvatar } from "./SearchSection";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import dynamic from "next/dynamic";
import moment from "moment";
import VerifiedIcon from "@mui/icons-material/Verified";
import { PRIMARY } from "@/theme/colors";
import React from "react";
import Link from "next/link";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SchoolIcon from "@mui/icons-material/School";
import CampaignIcon from "@mui/icons-material/Campaign";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const StyledIconWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "2px",
});

const JobsCard = ({ handleNavigate, ...lateJob }) => {
  console.log(lateJob, "lateJob");
  const extractFirstTwoTags = (data) => {
    const container = document?.createElement("div");
    container.innerHTML = data;
    // const firstPTag = container.querySelector("p");
    const firstPTag = data.replace(/<\/?[^>]+(>|$)/g, "");
    // console.log(firstPTag);
    return firstPTag;
  };

  const compImage = lateJob?.company[0]?.companyLogo?.logo
    ? getImageLogo(lateJob?.company[0]?.companyLogo?.logo)
    : "/defaultCompany.svg";

  return (
    <Card className="jobCard">
      <CardHeader
        avatar={
          <Avatar alt="logo" src={compImage} sx={{ width: 65, height: 65 }} />
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
        subheader={<Link href={""}>{lateJob?.company[0]?.company_name}</Link>}
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
          </>
        }
      />
      <CardContent sx={{ pt: 0 }} className="searchCard">
        {(lateJob?.featureType || lateJob?.immediate) && (
          <>
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
          </>
        )}

        <Stack
          direction={"row"}
          sx={{ flexWrap: "wrap", gap: "20px", m: "10px 0" }}
        >
          {lateJob?.jobType && (
            <Stack
              direction={"row"}
              sx={{ gap: "10px", color: "#034275", alignItems: "center" }}
            >
              <AddBusinessIcon />
              <CustomTypography variant="body2" fontSize={15} color={"#034275"}>
                {lateJob?.jobType}
              </CustomTypography>
            </Stack>
          )}

          {lateJob?.essentialInformation?.experience && (
            <Stack
              direction={"row"}
              sx={{ gap: "10px", color: "#034275", alignItems: "center" }}
            >
              <GroupAddIcon />
              <CustomTypography variant="body2" color={"#034275"} fontSize={15}>
                {lateJob?.essentialInformation?.experience}
              </CustomTypography>
            </Stack>
          )}

          {lateJob?.salary && (
            <Stack
              direction={"row"}
              sx={{
                gap: "10px",
                color: "#034275 !important",
                alignItems: "center",
              }}
            >
              <CurrencyExchangeIcon />
              {getSalary(lateJob?.salary, false)}
            </Stack>
          )}

          {lateJob?.essentialInformation?.qualification && (
            <Stack
              direction={"row"}
              sx={{ gap: "10px", color: "#034275", alignItems: "center" }}
            >
              <SchoolIcon />
              <CustomTypography variant="body2" color={"#034275"} fontSize={15}>
                {lateJob?.essentialInformation?.qualification}
              </CustomTypography>
            </Stack>
          )}
          {lateJob.createdAt && (
            <Stack
              direction={"row"}
              sx={{ gap: "10px", color: "#034275", alignItems: "center" }}
            >
              <EventRepeatIcon />
              <CustomTypography variant="body2" color={"#034275"} fontSize={15}>
                {moment(lateJob.createdAt).fromNow()}
              </CustomTypography>
            </Stack>
          )}
          {lateJob.notice && (
            <Stack
              direction={"row"}
              sx={{ gap: "10px", color: "#034275", alignItems: "center" }}
            >
              <CampaignIcon />
              <CustomTypography variant="body2" color={"#034275"} fontSize={15}>
                {lateJob.notice}
              </CustomTypography>
            </Stack>
          )}

          {lateJob.essentialInformation?.careerlevel && (
            <Stack
              direction={"row"}
              sx={{ gap: "10px", color: "#034275", alignItems: "center" }}
            >
              <AccountBoxIcon />
              <CustomTypography variant="body2" color={"#034275"} fontSize={15}>
                {lateJob.essentialInformation?.careerlevel}
              </CustomTypography>
            </Stack>
          )}
        </Stack>

        <CustomTypography variant="body2" color="text.secondary" fontSize={15}>
          <div
            style={{
              overflow: "hidden",
              maxHeight: "68px",
              textOverflow: "ellipsis",
              // whiteSpace: "nowrap",
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

        <Stack
          direction={"row"}
          sx={{ padding: "7px 0", flexWrap: "wrap", gap: "5px" }}
        >
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
