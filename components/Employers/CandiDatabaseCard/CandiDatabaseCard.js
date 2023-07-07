import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Dialog,
  Divider,
  IconButton,
  Stack,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ScheduleIcon from "@mui/icons-material/Schedule";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import Image from "next/image";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import styles from "./CandiDatabaseCard.module.css";
import moment from "moment";
import { useEffect } from "react";
import CampaignIcon from "@mui/icons-material/Campaign";
import { currencyConvert } from "@/utils/HelperFunctions";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import { Document, Page, pdfjs } from "react-pdf";
import download from "downloadjs";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  bgcolor: "#EEFAFF",
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle
      sx={{
        m: 0,
        p: 2,
        color: "#034275",
        fontWeight: 600,
        borderBottom: "1px solid red",
      }}
      {...other}
    >
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "#034275",
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

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

const CandiDatabaseCard = ({ ...props }) => {
  const [open, setOpen] = React.useState(false);
  const candi = props?.can;
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [showExperience, setShowExperiences] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);
  const showExperienceMore = () => {
    const shouldVisible = showExperience;
    if (!shouldVisible) {
      setExperiences(() => [...candi?.resume?.workExperience]);
    } else {
      setExperiences(() => [...candi?.resume?.workExperience.slice(0, 3)]);
    }
  };

  const showEducationMore = () => {
    const shouldVisible = showEducation;
    if (!shouldVisible) {
      setEducations(() => [...candi?.resume?.education]);
    } else {
      setEducations(() => [...candi?.resume?.education.slice(0, 3)]);
    }
  };

  useEffect(() => {
    setExperiences([...candi?.resume?.workExperience.slice(0, 3)]);
    setEducations([...candi?.resume?.education.slice(0, 3)]);
  }, [candi?.resume?.workExperience, candi?.resume?.education]);

  const experienceStrenght = candi?.resume?.workExperience.length > 3;
  const educationStrenght = candi?.resume?.education.length > 3;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const changePage = (offSet) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offSet);
  };

  const changePageBack = () => {
    changePage(-1);
  };

  const changePageNext = () => {
    changePage(+1);
  };
  const matches = useMediaQuery("(max-width:600px)");
  const cvUrl =
    candi?.resume?.resumeFileLocation?.length > 0
      ? ` https://api.arinnovate.io/api/downloadResume?resume=${candi?.resume?.resumeFileLocation[0]?.resume}`
      : "";
  const isItPdfFile = cvUrl.includes("pdf");
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
            src={
              candi?.profpicFileLocation?.photo &&
              ` https://api.arinnovate.io/api/openProfpic?photo=${candi?.profpicFileLocation?.photo}`
            }
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
        title={`${candi?.firstName} ${candi?.lastName}`}
        subheader={
          <>
            {candi?.jobTitle}
            {candi?.resume?.location?.city && (
              <Box sx={{ display: "flex", alignItems: "center", mt: "5px" }}>
                <LocationOnIcon sx={{ color: "#2699FF", fontSize: "17px" }} />{" "}
                <CustomTypography variant="body2" color="#01313F">
                  {candi?.resume?.location?.city}
                </CustomTypography>
              </Box>
            )}
            {candi?.myPreferenceInfo?.immediateJoiner === "yes" ? (
              <Box sx={{ display: "flex", alignItems: "center", mt: "5px" }}>
                <ScheduleIcon sx={{ color: "#2699FF", fontSize: "17px" }} />{" "}
                <CustomTypography variant="body2" color="#01313F">
                  Immediately
                </CustomTypography>
              </Box>
            ) : (
              ""
            )}
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
                    height: "45px",
                    width: "180px",
                    bgcolor: "#02A9F7 !important",
                    fontSize: "16px",
                  }}
                  onClick={() => {
                    props?.handle(candi?._id);
                  }}
                >
                  View Detail
                </Button>
                <Button
                  sx={{
                    height: "45px",
                    width: "180px",
                    padding: "5px !important",
                    color: "#034275",
                    borderColor: "#02A9F7",
                    fontSize: "16px",
                  }}
                  size="large"
                  variant="outlined"
                  bgcolor="#02A9F7 !important"
                  onClick={handleClickOpen}
                >
                  Quick View
                </Button>
              </Stack>
              <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                fullWidth={true}
                maxWidth={"md"}
              >
                <DialogTitle>
                  <Stack>
                    <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
                      {candi?.firstName} Resume
                    </Typography>
                    {isItPdfFile && (
                      <>
                        <Stack
                          direction={"row"}
                          sx={{ justifyContent: "space-between" }}
                        >
                          <Stack
                            direction={"row"}
                            sx={{ alignItems: "center" }}
                          >
                            {pageNumber > 1 && (
                              <IconButton onClick={changePageBack}>
                                <SkipPreviousRoundedIcon
                                  sx={{ color: "#4fa9ff", fontSize: "2rem" }}
                                />
                              </IconButton>
                            )}

                            <Typography>
                              Page {pageNumber} of {numPages}
                            </Typography>

                            {pageNumber < numPages && (
                              <IconButton onClick={changePageNext}>
                                <SkipNextRoundedIcon
                                  sx={{ color: "#4fa9ff", fontSize: "2rem" }}
                                />
                              </IconButton>
                            )}
                          </Stack>

                          <IconButton onClick={handleClose}>
                            <CloseIcon
                              sx={{ color: "#4fa9ff", fontSize: "2rem" }}
                            />
                          </IconButton>
                        </Stack>
                      </>
                    )}
                  </Stack>
                </DialogTitle>
                <DialogContent>
                  {isItPdfFile ? (
                    <Document
                      file={cvUrl}
                      onLoadSuccess={onDocumentLoadSuccess}
                    >
                      <Page
                        width={matches === true ? 300 : 600}
                        pageNumber={pageNumber}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                      />
                    </Document>
                  ) : (
                    <Typography>
                      Unfortunately, the CV cannot be opened. Kindly download
                      the document to review.
                    </Typography>
                  )}
                </DialogContent>
                <DialogActions>
                  <Stack direction={"row"} sx={{ gap: "10px" }}>
                    <Button
                      variant="contained"
                      onClick={async () => {
                        const res = await fetch(cvUrl);
                        const blob = await res.blob();
                        download(
                          blob,
                          `${candi?.resume?.resumeFileLocation.resumeName}`
                        );
                      }}
                      sx={{ background: "#4fa9ff !important" }}
                    >
                      Download
                    </Button>
                    <Button variant="outlined" onClick={handleClose}>
                      Close
                    </Button>
                  </Stack>
                </DialogActions>
              </Dialog>
            </Box>
          </>
        }
        sx={{ pb: 0 }}
      />
      <CardContent sx={{ pt: 0 }}>
        <Divider sx={{ bgcolor: "#D4F0FC", mt: "20px" }} />
        {candi?.resume?.workExperience?.length > 0 ? (
          <>
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
                  {experiences.map((wrk, index) => (
                    <li key={index}>
                      {bull} {wrk?.role} at {wrk?.companyName}{" "}
                      <span
                        style={{
                          color: "#2699FF",
                          fontWeight: 600,
                        }}
                      >
                        {moment(wrk?.fromDate, "DD-MM-YYYY").format("YYYY")} -{" "}
                        {moment(wrk?.toDate, "DD-MM-YYYY").format("YYYY")}
                      </span>
                    </li>
                  ))}
                </ul>
                {experienceStrenght && (
                  <CustomTypography
                    color="#00339B"
                    sx={{
                      fontSize: "14px",
                      textDecoration: "underline",
                    }}
                    onClick={() => {
                      showExperienceMore();
                      setShowExperiences(!showExperience);
                    }}
                  >
                    {showExperience ? "View less" : "View More"}
                  </CustomTypography>
                )}
              </Box>
            </Box>
            <Divider sx={{ bgcolor: "#D4F0FC", mt: "20px" }} />
          </>
        ) : (
          ""
        )}

        {candi?.resume?.education.length > 0 ? (
          <>
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
                  {educations.map((edu, index) => (
                    <li key={index}>
                      {bull} {edu?.graduate} at {edu?.collegeName}{" "}
                      <span
                        style={{
                          color: "#2699FF",
                          fontWeight: 600,
                        }}
                      >
                        {moment(edu?.fromDate, "DD-MM-YYYY").format("YYYY")} -{" "}
                        {moment(edu?.toDate, "DD-MM-YYYY").format("YYYY")}
                      </span>
                    </li>
                  ))}
                </ul>
                {educationStrenght && (
                  <CustomTypography
                    color="#00339B"
                    sx={{
                      fontSize: "14px",
                      textDecoration: "underline",
                    }}
                    onClick={() => {
                      showEducationMore();
                      setShowEducation(!showEducation);
                    }}
                  >
                    {showEducation ? "View less" : "View More"}
                  </CustomTypography>
                )}
              </Box>
            </Box>
            <Divider sx={{ bgcolor: "#D4F0FC", mt: "20px" }} />
          </>
        ) : (
          ""
        )}

        {candi?.resume?.notice && (
          <>
            <Box sx={{ display: "flex", gap: "10px", mt: "20px", mb: "20px" }}>
              <CampaignIcon sx={{ color: "#00339B" }} />
              <CustomTypography
                color="#00339B"
                sx={{ fontSize: "16px", fontWeight: 600 }}
              >
                Notice Period :
              </CustomTypography>
              {bull} {candi?.resume?.notice}
            </Box>
            <Divider sx={{ bgcolor: "#D4F0FC", mt: "20px" }} />
          </>
        )}
        {candi?.resume?.currentSalary?.salary && (
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
                    {currencyConvert(
                      candi?.resume?.currentSalary?.salary,
                      candi?.resume?.salaryCurrency
                    )}{" "}
                    {candi?.resume?.currentSalary?.denomination}
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
                    {currencyConvert(
                      candi?.resume?.expectedSalary?.salary,
                      candi?.resume?.salaryCurrency
                    )}{" "}
                    {candi?.resume?.expectedSalary?.denomination}
                  </span>
                </li>
              </ul>
            </Box>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default CandiDatabaseCard;
