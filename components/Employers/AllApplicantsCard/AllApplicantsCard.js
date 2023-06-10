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
import React, { useEffect } from "react";
import DownloadIcon from "@mui/icons-material/Download";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { useDispatch, useSelector } from "react-redux";
import download from "downloadjs";
import { getSinResume } from "@/redux/slices/applyJobs";
import applyJobService from "@/redux/services/applyjobs.service";
import { useRouter } from "next/router";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const StyledAvatar = styled(Avatar)(({}) => ({
  "& .MuiAvatar-img": {
    width: "40px",
    height: "40px",
  },
  height: "40px",
  width: "40px",
}));

const AllApplicantsCard = ({users}) => {
  const getImageUrl = (candi) => {
    return candi?.candidateId?.profpicFileLocation?.photo
      ? `https://preprod.recroot.au/api/openProfpic?photo=${candi?.candidateId?.profpicFileLocation?.photo}`
      : `data:image/jpeg;base64,${candi?.candidateId?.headShot}`;
  };
  const dispatch = useDispatch();
  const resume = useSelector((state) => state.apply.resume);
  useEffect(() => {
     dispatch(getSinResume(users?.resumeId));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users])
  const recroot = `https://preprod.recroot.au/api/downloadResume?resume=${resume?.resume?.replace(
    /\\/g,
    "/"
  )}`;

const router = useRouter()
const {jid} = router.query;
  const navigate = (id,status)=>{
    if (status === 'unview') {      
      new applyJobService().updateAppStatus(id,{status:'viewed'}).then((res)=>{
  if (res.status === 200) {
    router.push(`/Employer/CandiProfileFullView?appId=${id}`)
  }
      })
    } else {
    router.push(`/Employer/CandiProfileFullView?appId=${id}`)
    }
  }
  const type = useSelector((state) => state.company.matchType);
  const color =
  type === "strong"
    ? "green"
    : type === "good"
    ? "orange"
    : type === "minimum"
    ? "red"
    : "";
  return (
    <Card
      sx={{
        width: "100%",
        boxShadow: "4px 4px 10px rgba(3, 66, 117, 0.1) !important",
        borderRadius: "10px",
      }}
    >
              {jid !== undefined ? (
                        <Box
                          sx={{
                            padding: "5px 15px 3px 0",
                            direction: "rtl",
                            fontWeight: 600,
                            textTransform: "capitalize",
                            color: color,
                          }}
                        >
                          {type} Match
                        </Box>
                      ) : (
                        ""
                      )}
      <CardHeader
        avatar={
          <StyledAvatar
            sx={{
              objectFit: "cover",
              height: "60px",
              width: "60px",
              border: "1px solid #2699ff",
            }}
            src={getImageUrl(users)}
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
        title={`${users?.candidateId?.firstName} ${users?.candidateId?.lastName}`}
        subheader={users?.candidateId?.jobTitle}
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
        
             {users?.status === 'shortlist' || users?.status === 'rejected' ?
                <Checkbox
                  {...label}
                  icon={
                    <ThumbUpIcon sx={{ color: "#7AC1DA", fontSize: "30px" }} />
                  }
                  checked={users?.status === 'rejected'}
                  checkedIcon={
                    <ThumbDownIcon
                      sx={{ color: "#7AC1DA", fontSize: "30px" }}
                    />
                  }
                /> : ''}
              </Stack>
            </Box>
          </>
        }
        sx={{ p: '0 16px 0 16px' }}
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
            onClick={async () => {
              const res = await fetch(recroot);
              const blob = await res.blob();
              download(blob, `${resume.resumeName}`);
            }}
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
            onClick={()=>navigate(users?._id,users?.status)}
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
            {users?.jobId?.jobRole}
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
              Notice Period -  {users?.candidateId?.resume?.notice}
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
              Experience - {users?.candidateId?.resume?.totalWorkExperience} Years
            </CustomTypography>
          </Box>
        </Stack>
        <Box
          color="rgba(1, 49, 63, 0.8)"
          sx={{ mt: "25px", fontSize: "16px",     overflow: 'hidden',
          maxHeight: '100px',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
      }}
        >
      {users?.candidateId?.about}
        </Box>
        <CustomTypography
          sx={{ textAlign: "right", fontStyle: "italic", fontSize: "11px" }}
          variant="body2"
          color="text.secondary"
        >
           Applied {moment(users?.createdAt).fromNow()}
        </CustomTypography>
      </CardContent>
    </Card>
  );
};

export default AllApplicantsCard;
