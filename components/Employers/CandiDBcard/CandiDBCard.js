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
  Tooltip,
  styled,
  IconButton,
  Divider,
  Grid,
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
import { useMediaQuery } from "@mui/material";
import axios from "axios";
import {
  INTERVIEWING,
  REJECTED,
  SHORT_LISTED,
  VIEWED,
} from "@/utils/constants";
import { useState } from "react";
import Cookies from "js-cookie";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import { currencyConvert } from "@/utils/HelperFunctions";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { isEmpty } from "lodash";
import { updateStatus } from "@/redux/slices/companyslice";
import { makeStyles } from "@mui/styles";
import { tooltipClasses } from "@mui/material/Tooltip";
import CheckIcon from "@mui/icons-material/Check";
import CancelIcon from "@mui/icons-material/Cancel";

export const StyledAvatar = styled(Avatar)(({}) => ({
  "& .MuiAvatar-img": {
    width: "40px",
    height: "40px",
  },
  height: "40px",
  width: "40px",
}));

const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} placement="left" />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    minWidth: 300,
    /* From https://css.glass */
    background: "rgba(255, 255, 255, 0.61)",
    borderRadius: "16px",
    boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(6.1px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    padding: "10px",
  },
});

const useStyles = makeStyles({
  boxShadow: {
    borderRadius: "20px",
    boxShadow: " 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px",
    transition: "box-shadow 0.3s ease-in-out",

    "&:hover": {
      boxShadow: "0 0px 11px rgba(0,0,0,0.25), 0 4px 3px rgba(0,0,0,0.22)",
    },
  },
});

const CandiDBCard = ({
  users,
  candidatesType,
  order,
}) => {
  const classes = useStyles();
  const router = useRouter();
  const dispatch = useDispatch();
  const [resume, setresume] = useState();
  const [open, setOpen] = React.useState(false);
  const [matchingArray, setMatchingArray] = React.useState([]);

  const user = Cookies.get();
  const { title } = router.query;
  const getImageUrl = (candi) => {
    return candi?.profpicFileLocation?.photo
      ? `https://preprod.recroot.au/api/openProfpic?photo=${candi?.profpicFileLocation?.photo}`
      : `data:image/jpeg;base64,${candi?.headShot}`;
  };

  const handleTooltipOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (users) {
      new applyJobService().getResume(users?.resume?.resumeFileLocation[0]?._id).then((res) => {
        setresume(res.data?.resume?.resumeFileLocation[0]);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users]);

  /**
   * Get points for matchings
   * @param {*} applicationId
   * @returns
   */
  const countElementInArrays = (applicationId, ...arrays) => {
    let count = 0;

    // Iterate over each array
    for (const array of arrays) {
      // Check if the element exists in the current array
      if (!isEmpty(array)) {
        const newIds = array.map((a) => a?._id);
        if (newIds.includes(applicationId)) {
          count++;
        }
      }
    }

    let result = [];

    // Iterate over each array
    for (let i = 0; i < arrays.length; i++) {
      const array = arrays[i];
      const newIds = array.map((a) => a?._id);

      if (newIds.includes(applicationId)) {
        result.push({ item: i, match: true });
      } else {
        result.push({ item: i, match: false });
      }
    }

    // setMatchingArray(() => [...result]);

    return { count, result };
  };

  /**
   * Get points for matchings
   * @param {*} applicationId
   * @returns
   */
  const getCalculatedSkills = () => {
    const skills = user.resume.skills.map(
      (skill) => skill.skillName
    );
    const matchingElements = skills.filter((skill) =>
      matchingSkill.includes(skill)
    );

    return matchingElements.length;
  };


  const getCandidateSalary = (candidate) => {
    const salaryDetails = `${currencyConvert(
      candidate.expectedSalary?.salary,
      candidate?.salaryCurrency
    )} ${candidate.expectedSalary?.denomination}`;

    return salaryDetails;
  };


  /**
   * constants
   */
  const location = users?.resume?.location;
  const address = `${location?.city}, ${location?.state}, ${location?.country} `;
  const recroot =
    resume &&
    `https://preprod.recroot.au/api/downloadResume?resume=${resume?.resume?.replace(
      /\\/g,
      "/"
    )}`;
    const handleProfile = (id) => {
      // dispatch(getCandi(id))
      //   .unwrap()
      //   .then((originalPromiseResult) => {
      //     dispatch(
      //       getSinResumeLaid(originalPromiseResult?.resume?.resumeFileLocation[0])
      //     );
      //   });
      window.open(
        `http://localhost:3001/Employer/candiProfileFullView?canId=${id}`
      );
      // Navigate(`/employerhome/applicant/${id}?rc`);
    };

  return (
    <Tooltip
      title={
        users?.status === "shortlist"
          ? "Applicant has been Short listed"
          : users?.status === "rejected"
          ? "Applicant has been Rejected"
          : ""
      }
      arrow
    >
      <Card
        sx={{
          width: "100%",
          boxShadow: "4px 4px 10px rgba(3, 66, 117, 0.25) !important",
          borderRadius: "10px",
          background: users?.status === "unview" ? "rgb(240, 242, 245)" : "",
          padding:'20px'
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
          title={`${users?.firstName} ${users?.lastName}`}
          subheader={users?.jobTitle}
          action={
            <Box>
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  mb: "10px",
                  mt: "10px",
                }}
              >
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
                  className="viewDetails"
                  variant="contained"
                  size="medium"
                  sx={{
                    ml: "8px",
                    height: "52px",
                    width: "180px",
                    bgcolor: "#02A9F7 !important",
                    fontSize: "18px",
                  }}
                  onClick={() => handleProfile(users?._id)}
                >
                  View Details
                </Button>
              </Stack>
            </Box>
          }
          sx={{ p: "12px 20px 16px 20px" }}
        />
        <CardContent sx={{ p: 0, pb: "0 !important" }}>
        <Grid container sx={{ p: "0 20px", rowGap: "5px" }}>
            <Grid md={4}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <AssignmentIndIcon sx={{ color: "#1097CD" }} />
                <CustomTypography
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#1097CD",
                  }}
                >
                  {title}
                </CustomTypography>
              </Box>
            </Grid>
            <Grid md={4}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <CurrencyRupeeIcon sx={{ color: "#1097CD" }} />
                <CustomTypography
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(1, 49, 63, 0.8)",
                  }}
                >
                  {users?.resume?.notice}
                </CustomTypography>
              </Box>
            </Grid>
            <Grid md={4}>
              {address && (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <AddLocationIcon sx={{ color: "#1097CD" }} />
                  <CustomTypography
                    sx={{
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "rgba(1, 49, 63, 0.8)",
                    }}
                  >
                    {address}
                  </CustomTypography>
                </Box>
              )}
            </Grid>
            <Grid md={4}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <HourglassTopIcon sx={{ color: "#1097CD" }} />
                <CustomTypography
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(1, 49, 63, 0.8)",
                  }}
                >
                  Experience - {users?.resume?.totalWorkExperience}{" "}
                  Years
                </CustomTypography>
              </Box>
            </Grid>
            <Grid md={4}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "7px" }}>
                <CurrencyExchangeIcon sx={{ color: "#1097CD" }} />{" "}
                <CustomTypography
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(1, 49, 63, 0.8)",
                  }}
                >
                  {getCandidateSalary(users?.resume)}
                </CustomTypography>
              </Box>
            </Grid>
          </Grid>

          <Box
            color="rgba(1, 49, 63, 0.8)"
            sx={{
              mt: "25px",
              fontSize: "16px",
              overflow: "hidden",
              maxHeight: "100px",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              p: "0 20px",
            }}
          >
            {users?.about}
          </Box>

          <Box
            sx={{
              mb: "7px",
              display: { xs: "flex", sm: "none" },
              justifyContent: "flex-end",
              p: "0 20px",
            }}
          >
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
                flexGrow: 1,
                bgcolor: "#02A9F7 !important",
                fontSize: { xs: "13px", md: "18px" },
                whiteSpace: "nowrap",
              }}
              className="viewDetails"
              onClick={() => handleProfile(users?._id)}
            >
              View Details
            </Button>
          </Box>

        </CardContent>
      </Card>
    </Tooltip>
  );
};

export default CandiDBCard;
