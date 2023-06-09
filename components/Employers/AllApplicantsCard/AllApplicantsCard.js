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
import moment from "moment";
import React, { useEffect } from "react";
import DownloadIcon from "@mui/icons-material/Download";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import { useDispatch, useSelector } from "react-redux";
import download from "downloadjs";
import applyJobService from "@/redux/services/applyjobs.service";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import PriceChangeOutlinedIcon from "@mui/icons-material/PriceChangeOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import { useRouter } from "next/router";
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
import { capitalize, isEmpty } from "lodash";
import { updateStatus } from "@/redux/slices/companyslice";
import { makeStyles } from "@mui/styles";
import { tooltipClasses } from "@mui/material/Tooltip";
import CheckIcon from "@mui/icons-material/Check";
import CancelIcon from "@mui/icons-material/Cancel";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import DoNotDisturbOutlinedIcon from "@mui/icons-material/DoNotDisturbOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import index from "@/pages/uploadResume";
const greenBorder = {
  color: "#000",
  fontSize: "13px",
  fontWeight: 500,
  padding: "5px",
  width: "auto",
  display: "flex",
  justifyContent: "center",
  borderColor: "#57FF57",
}
const redBorder = {
  color: "#000",
  fontSize: "13px",
  fontWeight: 500,
  padding: "5px",
  width: "auto",
  display: "flex",
  justifyContent: "center",
  borderColor: "#FF0000",
}
const StyledGreenSkillChip = styled(Chip)({
  color: "#000",
  fontSize: "13px",
  fontWeight: 500,
  padding: "5px",
  width: "auto",
  display: "flex",
  justifyContent: "center",
  borderColor: "#57FF57",
});

const StyledGraySkillChip = styled(Chip)({
  color: "#000",
  fontSize: "13px",
  fontWeight: 500,
  padding: "5px",
  width: "auto",
  display: "flex",
  justifyContent: "center",
  borderColor: "#DEDEDE",
});

const StyledMissingSkillChip = styled(Chip)({
  color: "#000",
  fontSize: "13px",
  fontWeight: 500,
  padding: "5px",
  width: "auto",
  display: "flex",
  justifyContent: "center",
  borderColor: "#E1A1FF",
});

const StyledCollapseTopic = styled(CustomTypography)({
  color: "#034275",
  fontSize: "16px",
  fontWeight: 600,
});

const StyledCollapseData = styled(CustomTypography)({
  color: "#01313F",
  fontSize: "14px",
  fontWeight: 500,
});
export const StyledAvatar = styled(Avatar)(({}) => ({
  "& .MuiAvatar-img": {
    width: "40px",
    height: "40px",
  },
  height: "40px",
  width: "40px",
}));

const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    minWidth: 300,
    background: "rgba(255, 255, 255, 0.61)",
    borderRadius: "16px",
    boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(6.1px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    padding: "10px",
  },
});

const CustomWidthTooltipSkills = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    minWidth: 450,
    width: "auto",
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

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const AllApplicantsCard = ({
  users,
  matchingDetails = {},
  matchingSkill = [],
  desiredSkills = [],
  candidatesType,
  order,
}) => {
  const classes = useStyles();
  const router = useRouter();
  const dispatch = useDispatch();
  const [resume, setresume] = useState();
  const [open, setOpen] = React.useState(false);
  const [openSkill, setOpenSkill] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    if (users?.status === 'unview') {  
      dispatch(
        updateStatus({ _id: users?._id, status: VIEWED, candidatesType, order })
      );    
      new applyJobService()
      .updateAppStatus(users?._id, { status: "viewed" })
      .then((res) => {
        console.warn(res)
      })
    }
  };

  const user = Cookies.get();

  const getImageUrl = (candi) => {
    return candi?.candidateId?.profpicFileLocation?.photo
      ? `https://preprod.recroot.au/api/openProfpic?photo=${candi?.candidateId?.profpicFileLocation?.photo}`
      : `data:image/jpeg;base64,${candi?.candidateId?.headShot}`;
  };

  const handleTooltipOpen = () => {
    setOpen(!open);
  };

  const handleTooltipOpenSkill = () => {
    setOpenSkill(!openSkill);
  };

  useEffect(() => {
    if (users?.resumeId) {
      new applyJobService().getResume(users?.resumeId).then((res) => {
        setresume(res.data?.resume?.resumeFileLocation[0]);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users]);
  function findMatchingElements(arr1, arr2) {
    const matchedElements = [];

    for (let i = 0; i < arr1.length; i++) {
      const regex = new RegExp(arr1[i], "i"); // 'i' flag for case-insensitive matching
      const matchedItem = arr2.find((item) => regex.test(item));
      if (matchedItem) {
        matchedElements.push(arr1[i]);
      }
    }

    return matchedElements;
  }
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

    result.sort((a, b) => {
      if (a.match && !b.match) {
        return -1;
      } else if (!a.match && b.match) {
        return 1;
      } else {
        return 0;
      }
    });

    return { count, result };
  };

  /**
   *
   * @returns matchingElements, displaySkills
   */
  const getCalculatedSkills = () => {
    let displaySkills = [];
    // candidate skills
    const skills = users.candidateId.resume.skills.map((skill) =>
      skill.skillName.toLowerCase()
    );
    //job skill
    const loverCaseSkills = matchingSkill.map((s) => s.toLowerCase());

    const matchingElements = findMatchingElements(loverCaseSkills, skills);
    // const matchingElements = skills.filter((skill) =>
    //   loverCaseSkills.includes(skill)
    // );

    displaySkills = loverCaseSkills.map((s) => {
      let newSkill = { skill: "", match: false };

      if (skills.includes(s)) {
        newSkill.skill = s;
        newSkill.match = true;
      } else {
        newSkill.skill = s;
        newSkill.match = false;
      }

      return newSkill;
    });

    displaySkills.sort((a, b) => {
      if (a.match && !b.match) {
        return -1;
      } else if (!a.match && b.match) {
        return 1;
      } else {
        return 0;
      }
    });

    return { matchingElements, displaySkills };
  };

  const navigate = (id, status) => {
    if (status === "unview") {
      dispatch(
        updateStatus({ _id: id, status: VIEWED, candidatesType, order })
      );
      new applyJobService()
        .updateAppStatus(id, { status: "viewed" })
        .then((res) => {
          if (res.status === 200) {
            window.open(
              `http://extraordinary-melba-a931eb.netlify.app/Employer/candiProfileFullView?appId=${id}`
            );
            // router.push(`/Employer/candiProfileFullView?appId=${id}`);
          }
        });
    } else {
      window.open(
        `http://extraordinary-melba-a931eb.netlify.app/Employer/candiProfileFullView?appId=${id}`
      );
      // router.push(`/Employer/candiProfileFullView?appId=${id}`);
    }
  };

  const handleReject = (id) => {
    axios
      .put(
        `https://preprod.recroot.au/api/updateStatus/${id}`,
        { status: "rejected" },
        { headers: { "x-access-token": `${user.token}` } }
      )
      .then(function (res) {
        dispatch(
          updateStatus({ _id: id, status: REJECTED, candidatesType, order })
        );
        dispatch(updatCountes());
      })
      .catch(function (error) {});
  };

  const handleShort = (id) => {
    axios
      .put(
        `https://preprod.recroot.au/api/updateStatus/${id}`,
        { status: "shortlist" },
        { headers: { "x-access-token": `${user.token}` } }
      )
      .then(function (res) {
        dispatch(
          updateStatus({ _id: id, status: SHORT_LISTED, candidatesType, order })
        );
        dispatch(updatCountes());
      })
      .catch(function (error) {});
  };

  const getStatusSpan = (status) => {
    switch (status) {
      case VIEWED:
        return (
          <span
            style={{
              backgroundColor: "#CCF8F5",
              padding: "9px",
              borderRadius: "7px",
              boxShadow: "4px 4px 10px rgba(3, 66, 117, 0.1)!important",
            }}
          >
            <CustomTypography sx={{ fontSize: "13px" }}>
              Viewed
            </CustomTypography>
          </span>
        );
      case SHORT_LISTED:
        return (
          <span
            style={{
              backgroundColor: "#D8FFD1",
              padding: "9px",
              borderRadius: "7px",
              boxShadow: "4px 4px 10px rgba(3, 66, 117, 0.1)!important",
            }}
          >
            <CustomTypography sx={{ fontSize: "13px" }}>
              Shortlisted
            </CustomTypography>
          </span>
        );
      case REJECTED:
        return (
          <span
            style={{
              backgroundColor: "#F5C7C1",
              padding: "9px",
              borderRadius: "7px",
              boxShadow: "4px 4px 10px rgba(3, 66, 117, 0.1)!important",
            }}
          >
            <CustomTypography sx={{ fontSize: "13px" }}>
              Rejected
            </CustomTypography>
          </span>
        );
      case INTERVIEWING:
        return (
          <span
            style={{
              backgroundColor: "#CCD8F8",
              padding: "9px",
              borderRadius: "7px",
              boxShadow: "4px 4px 10px rgba(3, 66, 117, 0.1)!important",
            }}
          >
            <CustomTypography sx={{ fontSize: "13px" }}>
              Interviewing
            </CustomTypography>
          </span>
        );
      default:
        return (
          <span
            style={{
              backgroundColor: "#F8CCE4",
              padding: "9px",
              borderRadius: "7px",
              boxShadow: "4px 4px 10px rgba(3, 66, 117, 0.1)!important",
            }}
          >
            <CustomTypography sx={{ fontSize: "13px" }}>
              Unviewed
            </CustomTypography>
          </span>
        );
    }
  };

  const getCandidateSalary = (candidate) => {
    if (!candidate.expectedSalary?.salary) return;

    const salaryDetails = `${currencyConvert(
      candidate.expectedSalary?.salary,
      candidate?.salaryCurrency
    )} ${candidate.expectedSalary?.denomination}`;

    return salaryDetails;
  };

  const countAnswers = (candidate) => {
    const question = candidate.question;
    let marks = 0;
    question.map((q) => {
      if (q.answer === q.preferedAns) {
        marks++;
      }
    });
    return `${marks}/${question.length}`;
  };

  const getMatchingText = (item) => {
    let text = "";

    if (item.item === 0) {
      text = "Country";
    }

    if (item.item === 1) {
      text = "Experience";
    }

    if (item.item === 2) {
      text = "Skill Matches";
    }

    if (item.item === 3) {
      text = "Job Preference";
    }

    if (item.item === 4) {
      text = "City";
    }

    if (item.item === 5 && desiredSkills.length > 0) {
      text = "Desired Skills";
    }

    if (item.item === 6) {
      text = "Notice Period";
    }

    if (item.item === 7) {
      text = "State";
    }

    if (item.item === 5 && desiredSkills.length < 1) return "";

    return (
      <Grid container spacing={1} sx={{ padding: "0 10px" }}>
        <Grid item md={6}>
          <CustomTypography sx={{ color: "gray", fontSize: "14px" }}>
            {text}
          </CustomTypography>
        </Grid>
        <Grid item md={6}>
          {item.match ? (
            <CheckIcon color="success" />
          ) : (
            <CancelIcon color="warning" />
          )}
        </Grid>
      </Grid>
    );
  };

  const addEllipsis = (text, maxLength) => {
    if (!text) return "";

    let modifiedText = text;

    if (text?.length > maxLength) {
      modifiedText = text.slice(0, maxLength) + "...";
    }

    return modifiedText;
  };

  function isObjectPresent(arr, searchObj) {
    return arr.some(obj => obj.item === searchObj.item && obj.match === searchObj.match);
  }
  const getSkillText = (item) => {
    return (
      <Grid container sx={{ padding: "0 10px" }}>
        <Grid item md={10}>
          <CustomTypography sx={{ color: "gray", fontSize: "14px" }}>
            {item.skill}
          </CustomTypography>
        </Grid>
        <Grid item md={2}>
          {item.match ? (
            <CheckIcon color="success" />
          ) : (
            <CancelIcon color="warning" />
          )}
        </Grid>
      </Grid>
    );
  };

  /**
   * constants
   */
  const location = users?.candidateId?.resume?.location;
  const address = `${location?.city}, ${location?.state}, ${location?.country} `;
  const recroot =
    resume &&
    `https://preprod.recroot.au/api/downloadResume?resume=${resume?.resume?.replace(
      /\\/g,
      "/"
    )}`;

  const { count, result } = isEmpty(matchingDetails)
    ? 0
    : countElementInArrays(
        users?._id,
        matchingDetails?.countryMatches,
        matchingDetails?.experMatches,
        matchingDetails?.skillMatches,
        matchingDetails?.typeMatches,
        matchingDetails?.cityMatches,
        matchingDetails?.desiredskillMatches,
        matchingDetails?.noticeMatches,
        matchingDetails?.statesMatches
      );

  const { matchingElements, displaySkills } = getCalculatedSkills();
  const totalMatchingCritaria = desiredSkills.length > 0 ? 8 : 7;

  return (
    <Tooltip
      title={
        users?.status === "shortlist"
          ? "Applicant has been Shortlisted"
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
        }}
      >
        <CardHeader
          titleTypographyProps={{
            fontSize: 19,
            fontWeight: "bold",
            color: "#034275",
          }}
          subheaderTypographyProps={{
            fontSize: 16,
            color: "#034275",
          }}
          sx={{ p: "5px 20px 10px 20px" }}
        />
        <CardContent sx={{ p: 0, pb: "0 !important" }}>
          <Box sx={{ p: "0 20px", mb: "10px" }}>
            <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
              <Stack
                direction={"row"}
                sx={{ alignItems: "center", gap: "10px" }}
              >
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
                <Stack>
                  <CustomTypography
                    sx={{ fontSize: 19, fontWeight: "bold", color: "#034275" }}
                  >
                    {users?.candidateId?.firstName}{" "}
                    {users?.candidateId?.lastName}
                  </CustomTypography>
                  <CustomTypography sx={{ fontSize: 16, color: "#034275" }}>
                    {users?.candidateId?.jobTitle}
                  </CustomTypography>
                </Stack>
              </Stack>
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
                    height: "45px",
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
                    height: "45px",
                    width: "180px",
                    bgcolor: "#02A9F7 !important",
                    fontSize: "18px",
                  }}
                  onClick={() => navigate(users?._id, users?.status)}
                >
                  View Details
                </Button>
              </Stack>
            </Stack>
          </Box>

          <Grid container sx={{ p: "0 20px", rowGap: "5px" }}>
            {users?.candidateId?.resume?.notice && (
              <Grid md={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <DateRangeOutlinedIcon sx={{ color: "#1097CD" }} />
                  <CustomTypography
                    sx={{
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "rgba(1, 49, 63, 0.8)",
                    }}
                  >
                    {users?.candidateId?.resume?.notice}
                  </CustomTypography>
                </Box>
              </Grid>
            )}

            {!isEmpty(users?.candidateId?.resume?.workPrefence) && (
              <Grid md={4}>
                <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
                  <AssignmentIndIcon sx={{ color: "#1097CD" }} />
                  <Stack direction={"row"} sx={{ gap: "5px" }}>
                    {users?.candidateId?.resume?.workPrefence.map(
                      (w, index) => (
                        <CustomTypography
                          key={index}
                          sx={{
                            fontWeight: "400",
                            fontSize: "16px",
                            lineHeight: "24px",
                          }}
                        >
                          {users?.candidateId?.resume?.workPrefence.length -
                            1 ===
                          index
                            ? w
                            : `${w},`}
                        </CustomTypography>
                      )
                    )}
                  </Stack>
                </Box>
              </Grid>
            )}

            {address && (
              <Grid md={4}>
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
                    {addEllipsis(address, 25)}
                  </CustomTypography>
                </Box>
              </Grid>
            )}

            {users?.candidateId?.resume?.totalWorkExperience && (
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
                    Experience -{" "}
                    {users?.candidateId?.resume?.totalWorkExperience}
                    Years
                  </CustomTypography>
                </Box>
              </Grid>
            )}

            {getCandidateSalary(users?.candidateId?.resume) && (
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
                    {getCandidateSalary(users?.candidateId?.resume)}
                  </CustomTypography>
                </Box>
              </Grid>
            )}
          </Grid>

          <Box
            color="gray"
            sx={{
              mt: "25px",
              fontSize: "16px",
              p: "0 20px",
            }}
          >
            {addEllipsis(users?.candidateId?.about, 320)}
          </Box>

          <Stack
            direction={"row"}
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <CustomTypography
              sx={{
                textAlign: "right",
                fontStyle: "italic",
                fontSize: "11px",
                p: "8px 20px",
              }}
              variant="body2"
              color="text.secondary"
            >
              Applied {moment(users?.createdAt).fromNow()}
            </CustomTypography>

            <Stack
              direction={"row"}
              sx={{
                justifyContent: "flex-end",
                gap: "10px",
                alignItems: "center",
                margin: "10px 0",
                p: "0 20px",
              }}
            >
              {getStatusSpan(users?.status)}
              <IconButton onClick={() => handleShort(users?._id)}>
              {users?.status === "shortlist" ? <ThumbUpIcon sx={{color:'#4fa9ff'}} /> : <ThumbUpOffAltIcon sx={{ cursor: "pointer" }} /> }  
              </IconButton>
              <IconButton onClick={() => handleReject(users?._id)}>
               {users?.status === "rejected" ?<ThumbDownIcon sx={{color:'#f78b7d'}} /> :<ThumbDownOffAltIcon sx={{ cursor: "pointer" }} /> }
              </IconButton>
            </Stack>
          </Stack>

          <Stack
            direction={"row"}
            sx={{ backgroundColor: "#D4F0FC", width: "100%", p: "10px 20px" }}
          >
            <Box sx={{ width: "33%" }}>
              <Stack
                direction={"row"}
                sx={{ gap: "10px", alignItems: "center" }}
              >
                <CustomTypography>Matching Criteria :</CustomTypography>
                <CustomTypography sx={{ color: "#1565C0" }}>
                  {count}/{totalMatchingCritaria}
                </CustomTypography>
                <CustomWidthTooltip
                  placement="left"
                  PopperProps={{
                    disablePortal: true,
                  }}
                  arrow
                  onClose={handleTooltipOpen}
                  open={open}
                  title={
                    <React.Fragment>
                      <Divider>
                        <Box>
                          <CustomTypography
                            sx={{
                              color: "gray",
                              fontSize: "15px",
                              fontWeight: 700,
                            }}
                          >
                            Matching Criteria
                          </CustomTypography>
                        </Box>
                      </Divider>
                      {isEmpty(!result) && result && (
                        <Stack>
                          <ul>
                            {result &&
                              result?.length > 0 &&
                              result?.map((data, index) => (
                                <li key={index}>
                                  <Stack direction="row">
                                    {getMatchingText(data)}
                                  </Stack>
                                </li>
                              ))}
                          </ul>
                        </Stack>
                      )}
                    </React.Fragment>
                  }
                >
                  <img
                    src={"/info.png"}
                    alt=""
                    width="18px"
                    height={"17px"}
                    className={classes.boxShadow}
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() => handleTooltipOpen()}
                  />
                </CustomWidthTooltip>
              </Stack>
            </Box>
            <Box
              sx={{
                width: "33%",
              }}
            >
              <Stack
                direction={"row"}
                sx={{
                  gap: "10px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CustomTypography sx={{ fontSize: "15px" }}>
                  Mandatory Skills :
                </CustomTypography>
                <CustomTypography sx={{ color: "#1565C0", fontSize: "15px" }}>
                  {matchingElements.length}/{matchingSkill.length}
                </CustomTypography>
                <CustomWidthTooltipSkills
                  placement="right"
                  PopperProps={{
                    disablePortal: true,
                  }}
                  // sx={{ width: "400px" }}
                  arrow
                  onClose={handleTooltipOpenSkill}
                  open={openSkill}
                  title={
                    <React.Fragment>
                      <Divider>
                        <Box>
                          <CustomTypography
                            sx={{
                              color: "gray",
                              fontSize: "15px",
                              fontWeight: 700,
                            }}
                          >
                            Mandatory Skills
                          </CustomTypography>
                        </Box>
                      </Divider>
                      {isEmpty(!displaySkills) && displaySkills && (
                        <Stack sx={{ width: "100%" }}>
                          <Grid container>
                            {displaySkills &&
                              displaySkills?.length > 0 &&
                              displaySkills?.slice(0, 20).map((data, index) => (
                                <Grid item md={6} key={index}>
                                  {getSkillText(data)}
                                </Grid>
                              ))}
                            {displaySkills.length > 19 && (
                              <Grid
                                item
                                md={6}
                                sx={{ justifyContent: "center" }}
                              >
                                <CustomTypography
                                  sx={{ color: "gray", textAlign: "center" }}
                                >
                                  ...
                                </CustomTypography>
                              </Grid>
                            )}
                          </Grid>
                        </Stack>
                      )}
                    </React.Fragment>
                  }
                >
                  <img
                    src={"/info.png"}
                    alt=""
                    width="18px"
                    height={"17px"}
                    className={classes.boxShadow}
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() => handleTooltipOpenSkill()}
                  />
                </CustomWidthTooltipSkills>
              </Stack>
            </Box>
            <Box sx={{ width: "33%" }}>
              <Stack
                direction={"row"}
                sx={{ gap: "10px", justifyContent: "flex-end" }}
              >
                <CustomTypography sx={{ fontSize: "15px" }}>
                  Screening Questions :
                </CustomTypography>
                <CustomTypography sx={{ color: "#1565C0", fontSize: "15px" }}>
                  {users?.jobId?.queshow === "false"
                    ? "N/A"
                    : countAnswers(users)}
                </CustomTypography>
              </Stack>
            </Box>
            {console.log(displaySkills,'skilllsss')}
          </Stack>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              backgroundColor: "#D4F0FC",
              pb: "10px",
            }}
          >
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              sx={{
                p: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </Box>
        </CardContent>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent sx={{ bgcolor: "#F1FBFF" }}>
            <Grid container spacing={1} sx={{ mt: "10px" }}>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  position: "relative",
                  paddingRight: "20px",
                  borderRight: "2px solid #D4F0FC",
                }}
              >
              {users?.jobId?.queshow === "true"
               ?       <Box sx={{ mt: "20px" }}>
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <QuizOutlinedIcon
                      sx={{ fontSize: "1.3rem", color: "#034275" }}
                    />
                    <StyledCollapseTopic>
                      Screening Question
                    </StyledCollapseTopic>
                  </Stack>
                  <Box
                    sx={{
                      mt: "8px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                     {users?.question?.map((qes,ind)=>(
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                      key={index}
                    >
                      <StyledCollapseData sx={{ display: "flex", flexGrow: 1 }}>
                      {qes?.questions}
                      </StyledCollapseData>
                      <Chip
                    label={capitalize(qes?.answer)}
                    variant="outlined"
                    sx={ qes?.answer === qes?.preferedAns ? greenBorder : redBorder}
                      />
                    </Stack>
                     ))}
                  </Box>
                </Box> : ""}
                <Box sx={{ mt: "20px" }}>
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <AssignmentIndOutlinedIcon
                      sx={{ fontSize: "1.3rem", color: "#034275" }}
                    />
                    <StyledCollapseTopic>Skills</StyledCollapseTopic>
                  </Stack>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                      flexWrap: "wrap",
                      mt: "8px",
                    }}
                  >
                   {displaySkills?.map((skil,ind)=>(
                    <Chip
                      key={ind}
                      sx={skil.match ? greenBorder : redBorder}
                      label={skil.skill}
                      variant="outlined"
                    />
                   )) }
                  </Box>
                </Box>
                {/* <Box sx={{ mt: "20px" }}>
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <DoNotDisturbOutlinedIcon
                      sx={{ fontSize: "1.3rem", color: "#034275" }}
                    />
                    <StyledCollapseTopic>Missing Skills</StyledCollapseTopic>
                  </Stack>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                      flexWrap: "wrap",
                      mt: "8px",
                    }}
                  >
                    <StyledMissingSkillChip
                      label="6 Thousand"
                      variant="outlined"
                    >
                      6 Thousand
                    </StyledMissingSkillChip>
                    <StyledMissingSkillChip
                      label="6 Thousand"
                      variant="outlined"
                    >
                      6 Thousand
                    </StyledMissingSkillChip>
                    <StyledMissingSkillChip
                      label="6 Thousand"
                      variant="outlined"
                    >
                      6 Thousand
                    </StyledMissingSkillChip>
                    <StyledMissingSkillChip
                      label="6 Thousand"
                      variant="outlined"
                    >
                      6 Thousand
                    </StyledMissingSkillChip>
                  </Box>
                </Box> */}
              </Grid>
              <Grid item xs={12} sm={6} sx={{ paddingLeft: "20px !important" }}>
                <Box sx={{ mt: "20px" }}>
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <WorkHistoryOutlinedIcon
                      sx={{ fontSize: "1.3rem", color: "#034275" }}
                    />
                    <StyledCollapseTopic sx={{ display: "flex", flexGrow: 1 }}>
                      Experience
                    </StyledCollapseTopic>
                    <Chip
                      label="Yes"
                      variant="outlined"
                      sx={isObjectPresent(result || [],{item: 1, match: true}) ? greenBorder : redBorder}
                    />
                  </Stack>
                  <Box sx={{ mt: "8px" }}>
                    <StyledCollapseData sx={{ lineHeight: "28px" }}>
                      <ol>
                        <li>
                         Total Work Experience {users?.candidateId?.resume?.totalWorkExperience} years
                        </li>
                      </ol>
                    </StyledCollapseData>
                  </Box>
                </Box>
                
                <Box sx={{ mt: "20px" }}>
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <HomeWorkOutlinedIcon
                      sx={{ fontSize: "1.3rem", color: "#034275" }}
                    />
                    <StyledCollapseTopic sx={{ display: "flex", flexGrow: 1 }}>
                      Work Preference
                    </StyledCollapseTopic>
                    {users?.candidateId?.resume?.workPrefence.map((pre,ind)=>(
                  <Chip
                  label={pre}
                  key={ind}
                  variant="outlined"
                  sx={pre === users?.jobId?.jobType ? greenBorder : redBorder }
                  />
                ))   }
                  </Stack>
                </Box>
                                <Box sx={{ mt: "20px" }}>
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <DateRangeOutlinedIcon
                      sx={{ fontSize: "1.3rem", color: "#034275" }}
                    />
                    <StyledCollapseTopic sx={{ display: "flex", flexGrow: 1 }}>
                      Notice Period
                    </StyledCollapseTopic>
                    <Chip
                      label={users?.candidateId?.resume?.notice}
                      variant="outlined"
                      sx={isObjectPresent(result || [],{item: 6, match: true}) ? greenBorder : redBorder}
                    />
                  </Stack>
                </Box>
                <Box sx={{ mt: "20px" }}>
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <LocationOnOutlinedIcon
                      sx={{ fontSize: "1.3rem", color: "#034275" }}
                    />
                    <StyledCollapseTopic sx={{ display: "flex", flexGrow: 1 }}>
                      Location
                    </StyledCollapseTopic>
                    <Chip
                      label={users?.candidateId?.resume?.location?.city}
                      variant="outlined"
                      sx={isObjectPresent(result || [],{item: 4, match: true}) ? greenBorder : redBorder}
                    />
                    <Chip
                      label={users?.candidateId?.resume?.location?.state}
                      variant="outlined"
                      sx={isObjectPresent(result || [],{item: 7, match: true}) ? greenBorder : redBorder}
                    />
                    <Chip
                      label={users?.candidateId?.resume?.location?.country}
                      variant="outlined"
                      sx={isObjectPresent(result || [],{item: 0, match: true}) ? greenBorder : redBorder}
                    />
                  </Stack>
                </Box>

                <Box sx={{ mt: "20px" }}>
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <PriceChangeOutlinedIcon
                      sx={{ fontSize: "1.3rem", color: "#034275" }}
                    />
                    <StyledCollapseTopic sx={{ display: "flex", flexGrow: 1 }}>Salary</StyledCollapseTopic>
                      <Chip
                      label="Yes"
                      variant="outlined"
                      sx={isObjectPresent(result || [],{item: 8, match: true}) ? greenBorder : redBorder}
                    />
                  </Stack>
                  <Box
                    sx={{
                      mt: "8px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                    <StyledCollapseData>
                      Salary Currency- {users?.candidateId?.resume?.salaryCurrency}
                    </StyledCollapseData>
                    <StyledCollapseData>
                      Current Salary - {users?.candidateId?.resume?.currentSalary?.salary} {users?.candidateId?.resume?.currentSalary?.denomination}
                    </StyledCollapseData>
                      <StyledCollapseData sx={{ display: "flex", flexGrow: 1 }}>
                        Expected Salary - {users?.candidateId?.resume?.expectedSalary?.salary} {users?.candidateId?.resume?.expectedSalary?.denomination}
                      </StyledCollapseData>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Collapse>
      </Card>
    </Tooltip>
  );
};

export default AllApplicantsCard;
