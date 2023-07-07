import React, { useState } from "react";
import Box from "@mui/material/Box";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import download from "downloadjs";
import {
  Button,
  Card,
  CardContent,
  Stack,
  Container,
  Chip,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Slide,
} from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Link from "next/link";
import moment from "moment";
import { NEUTRAL, PRIMARY, DANGER } from "@/theme/colors";
import { useDispatch, useSelector } from "react-redux";
import CreateIcon from "@mui/icons-material/Create";
import ApplyJobStepper from "@/components/ApplyJobStepper/ApplyJobStepper";
import {
  deleteSkillAndGet,
  retrievePersonal,
  setSection,
  updateAndThenGet,
} from "@/redux/slices/personal";
import { BOLD } from "@/theme/fonts";
import styles from "./applyJobs.module.css";
import DownloadIcon from "@mui/icons-material/Download";
import { useRouter } from "next/router";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const bull = (
  <Box
    component="span"
    sx={{
      display: "inline-block",
      mx: "2px",
      transform: "scale(1.5)",
      color: "#034275",
    }}
  >
    •
  </Box>
);

const StyledBoxed = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 5px 10px 15px",
  fontSize: "14px",
  fontWeight: "700",
  backgroundColor: PRIMARY,
  color: NEUTRAL,
  alignItems: "center",
});

const StyledProjectBoxed = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 5px 10px 15px",
  fontSize: "14px",
  fontWeight: "700",
  backgroundColor: "gray",
  color: NEUTRAL,
  alignItems: "center",
});

const lightTheme = createTheme({ palette: { mode: "light" } });

function ReviewAppication({ ...props }) {
  const router = useRouter();

  const { setCurrentScreen, submit, jobTitle, hasQuestions } = props;

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(retrievePersonal());
  }, [dispatch]);

  const details = useSelector((state) => state.personal.data);
  const resumeSin = useSelector((state) => state.personal.resume);
  const CoverSin = useSelector((state) => state.personal.cover);

  const [opena, setOpena] = React.useState(false);
  const [did, setDid] = useState("");
  const [diaDel, setDiaDel] = useState("");

  const handleSkillDelete = (id) => {
    handleClickOpena(id);
    setDiaDel(id);
  };

  const handleClickOpena = (id) => {
    setDid(id);
    setOpena(true);
  };

  const handleClosea = () => {
    setOpena(false);
  };

  const handleDelete = () => {
    dispatch(deleteSkillAndGet(diaDel));
    setDiaDel("");
  };

  const [openDel, setOpenDel] = React.useState(false);
  const [delResume, setDelResume] = useState("");
  const handleClickOpenDeleteResume = (id) => {
    setDelResume(id);
    setOpenDel(true);
  };

  const handleCloseDel = () => {
    setOpenDel(false);
  };

  const handleResumeDelete = () => {
    dispatch(updateAndThenGet(delResume));
  };

  const goToProfile = (section) => {
    router.push("/Candidate/Dashboard");
    dispatch(setSection(section));
  };

  return (
    <div
      style={{
        backgroundImage: `url("/selectResumeBg.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        minHeight: "1000px",
        overflow: "auto",
      }}
    >
      <Box
        sx={{
          height: "100px",
          backgroundImage: 'url("/blue-background-bg.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
        }}
      ></Box>
      <Container sx={{ width: { md: "50%", sm: "100%", xs: "100%" } }}>
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
            mt: "20px",
          }}
        >
          <CustomTypography sx={{ fontFamily: BOLD }} variant="h4">
            {jobTitle}
          </CustomTypography>
          <ApplyJobStepper
            hasQuestions={hasQuestions}
            setCurrentScreen={setCurrentScreen}
            activeStep={hasQuestions ? 1 : 2}
          />
        </Stack>

        <Box sx={{ marginTop: "60px" }}>
          {[lightTheme].map((theme, index) => (
            <Box sx={{ margin: 0, padding: 0 }} key={index}>
              <ThemeProvider theme={theme}>
                <Card
                  variant="outlined"
                  sx={{
                    mt: "10px",
                    borderColor: "rgba(122, 193, 218, 0.5)",
                    borderRadius: "8px",
                  }}
                >
                  <StyledBoxed>
                    <CustomTypography
                      variant="h6"
                      sx={{
                        fontWeight: 400,
                        fontSize: "19px",
                      }}
                    >
                      Personal Info
                    </CustomTypography>
                    <Button
                      variant="body1"
                      className="iconPointers"
                      color="initial"
                      sx={{ fontSize: "14px", float: "right", color: NEUTRAL }}
                      onClick={() => {
                        goToProfile("personal_details_section");
                      }}
                    >
                      <CreateIcon />
                    </Button>
                  </StyledBoxed>
                  <CardContent>
                    <Stack spacing={2}>
                      <Box className="personalinfoBox">
                        <CustomTypography
                          variant="body1"
                          sx={{
                            fontSize: { sm: "20px", xs: "15px" },
                            flex: 1,
                            color: "rgba(3, 66, 117, 0.6)",
                            marginLeft: "20px",
                          }}
                        >
                          Name
                        </CustomTypography>
                        <Divider orientation="vertical" flexItem />
                        <Box sx={{ width: "70%" }}>
                          <CustomTypography
                            variant="body1"
                            color="#01313F"
                            sx={{
                              fontWeight: 500,
                              fontSize: { sm: "20px", xs: "15px" },
                              marginLeft: "20px",
                              flex: 1,
                            }}
                          >
                            {details.firstName} {details.lastName}
                          </CustomTypography>
                        </Box>
                      </Box>
                      <Box className="personalinfoBox">
                        <CustomTypography
                          variant="body1"
                          color="initial"
                          sx={{
                            fontSize: { sm: "20px", xs: "15px" },
                            flex: 1,
                            color: "rgba(3, 66, 117, 0.6)",
                            marginLeft: "20px",
                          }}
                        >
                          Email
                        </CustomTypography>
                        <Divider orientation="vertical" flexItem />
                        <Box sx={{ width: "70%" }}>
                          <CustomTypography
                            variant="body1"
                            color="#01313F"
                            sx={{
                              fontWeight: 500,
                              fontSize: { sm: "20px", xs: "15px" },
                              marginLeft: "20px",
                              flex: 1,
                            }}
                          >
                            {details.email}
                          </CustomTypography>
                        </Box>
                      </Box>
                      <Box className="personalinfoBox">
                        <CustomTypography
                          variant="body1"
                          color="initial"
                          sx={{
                            fontSize: { sm: "20px", xs: "15px" },
                            flex: 1,
                            color: "rgba(3, 66, 117, 0.6)",
                            marginLeft: "20px",
                            width: "30%",
                          }}
                        >
                          Country
                        </CustomTypography>
                        <Divider orientation="vertical" flexItem />
                        <Box
                          sx={{ display: "flex", padding: "5px", width: "70%" }}
                        >
                          {details.resume?.location?.country?.length === 0 ? (
                            <span
                              style={{
                                fontWeight: 600,
                                fontSize: "16px",
                                marginLeft: "20px",

                                color: "#fe7171",
                              }}
                            >
                              No Data Provided
                            </span>
                          ) : (
                            <CustomTypography
                              variant="body1"
                              color="#01313F"
                              sx={{
                                fontWeight: 500,
                                fontSize: { sm: "20px", xs: "15px" },
                                marginLeft: "20px",
                              }}
                            >
                              {details?.resume?.location?.country}
                            </CustomTypography>
                          )}
                        </Box>
                      </Box>
                    </Stack>
                  </CardContent>

                  {/* CV section */}
                  <StyledBoxed>
                    <CustomTypography
                      variant="h6"
                      sx={{
                        fontWeight: 400,
                        fontSize: "19px",
                      }}
                    >
                      CV
                    </CustomTypography>
                    <Button
                      variant="body1"
                      className="iconPointers"
                      color="initial"
                      sx={{ fontSize: "14px", float: "right", color: NEUTRAL }}
                      onClick={() => {
                        setCurrentScreen("upload");
                      }}
                    >
                      <CreateIcon />
                    </Button>
                  </StyledBoxed>
                  <CardContent>
                    <Stack
                      direction={"row"}
                      spacing={2}
                      width="100%"
                      sx={{ pl: "20px" }}
                    >
                      <Box sx={{ flex: 1, display: "flex" }}>
                        <PictureAsPdfIcon
                          sx={{
                            color: PRIMARY,
                            display: "flex",
                          }}
                        />
                        <CustomTypography
                          variant="body1"
                          sx={{
                            color: PRIMARY,
                          }}
                        >
                          {resumeSin && resumeSin.resumeName}
                        </CustomTypography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "right",
                          gap: "10px",
                          float: "right",
                        }}
                      >
                        <IconButton
                          onClick={async () => {
                            const res = await fetch(
                              ` http://localhost:3000/api/downloadResume?resume=${resumeSin.resume.replace(
                                /\\/g,
                                "/"
                              )}`
                            );
                            const blob = await res.blob();
                            download(blob, `${resumeSin.resumeName}`);
                          }}
                        >
                          <DownloadIcon
                            className="iconPointers"
                            sx={{ color: "#00339B" }}
                          />
                        </IconButton>
                      </Box>
                    </Stack>
                  </CardContent>

                  {/* CoverLetter */}
                  <StyledBoxed>
                    <CustomTypography
                      variant="h6"
                      sx={{
                        fontWeight: 400,
                        fontSize: "19px",
                      }}
                    >
                      Cover Letter
                    </CustomTypography>
                    <Button
                      variant="body1"
                      className="iconPointers"
                      color="initial"
                      sx={{ fontSize: "14px", float: "right", color: NEUTRAL }}
                      onClick={() => {
                        setCurrentScreen("upload");
                      }}
                    >
                      <CreateIcon />
                    </Button>
                  </StyledBoxed>
                  <CardContent>
                    {CoverSin.coverName === undefined ? (
                      <span
                        style={{
                          fontWeight: 600,
                          fontSize: "16px",
                          marginTop: "10px",
                          marginLeft: "20px",
                          color: "#fe7171",
                        }}
                      >
                        Cover Letter Is Not Attached
                      </span>
                    ) : (
                      <CustomTypography
                        variant="body1"
                        sx={{
                          color: PRIMARY,
                        }}
                      >
                        {CoverSin && CoverSin.coverName}
                      </CustomTypography>
                    )}
                  </CardContent>

                  {/* Experience */}
                  <StyledBoxed>
                    <CustomTypography
                      variant="h6"
                      sx={{
                        fontWeight: 400,
                        fontSize: "19px",
                      }}
                      NEUTRAL
                    >
                      Experience
                    </CustomTypography>

                    <Button
                      variant="body1"
                      className="iconPointers"
                      color="initial"
                      sx={{
                        fontSize: "14px",
                        float: "right",
                        color: NEUTRAL,
                      }}
                      onClick={() => {
                        goToProfile("experience_details_section");
                      }}
                    >
                      <CreateIcon />
                    </Button>
                  </StyledBoxed>
                  <CardContent>
                    {details.resume?.workExperience?.length === 0 ? (
                      <span
                        style={{
                          fontWeight: 600,
                          fontSize: "16px",
                          marginLeft: "20px",
                          color: "#fe7171",
                        }}
                      >
                        No Data Provided
                      </span>
                    ) : (
                      <ul
                        style={{
                          paddingInlineStart: "0px",
                        }}
                      >
                        {details?.resume?.workExperience &&
                          details?.resume?.workExperience.map(
                            (experience, index) => (
                              <li
                                style={{ margin: "10px", color: "#034275" }}
                                key={index}
                              >
                                {bull}&nbsp;
                                {`${experience?.role} at  ${experience?.companyName} for ${experience?.experience} years `}
                              </li>
                            )
                          )}
                      </ul>
                    )}
                  </CardContent>

                  {/* Skills */}
                  <StyledBoxed>
                    <CustomTypography
                      variant="h6"
                      sx={{
                        fontWeight: 400,
                        fontSize: "19px",
                      }}
                    >
                      Skills
                    </CustomTypography>

                    <Button
                      variant="body1"
                      className="iconPointers"
                      color="initial"
                      sx={{
                        fontSize: "14px",
                        float: "right",
                        color: NEUTRAL,
                      }}
                      onClick={() => {
                        goToProfile("skills_details_section");
                      }}
                    >
                      <CreateIcon />
                    </Button>
                  </StyledBoxed>
                  <CardContent>
                    {details.resume?.skills?.length === 0 ? (
                      <span
                        style={{
                          fontWeight: 600,
                          fontSize: "16px",
                          marginLeft: "20px",
                          color: "#fe7171",
                        }}
                      >
                        No Data Provided
                      </span>
                    ) : (
                      <Box
                        sx={{
                          display: "flex",
                          gap: "20px",
                          flexDirection: "row",
                          flexWrap: "wrap",
                        }}
                      >
                        {details?.resume?.skills &&
                          details?.resume?.skills.map((skills, index) => (
                            <Box
                              key={index}
                              sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "5px",
                              }}
                            >
                              <Chip
                                label={skills.skillName}
                                onDelete={() => {
                                  handleSkillDelete(skills._id);
                                }}
                                size="large"
                                sx={{
                                  backgroundColor: "#D4F0FC",
                                  height: "35px",
                                  fontSize: "14px",
                                  color: "#545454",
                                }}
                              />
                            </Box>
                          ))}
                      </Box>
                    )}
                  </CardContent>

                  {/* Education */}
                  <StyledBoxed>
                    <CustomTypography
                      variant="h6"
                      sx={{
                        fontWeight: 400,
                        fontSize: "19px",
                      }}
                    >
                      Education
                    </CustomTypography>

                    <Button
                      variant="body1"
                      className="iconPointers"
                      color="initial"
                      sx={{
                        fontSize: "14px",
                        float: "right",
                        color: NEUTRAL,
                      }}
                      onClick={() => {
                        goToProfile("education_details_section");
                      }}
                    >
                      <CreateIcon />
                    </Button>
                  </StyledBoxed>
                  <CardContent>
                    {details.resume?.education?.length === 0 ? (
                      <span
                        style={{
                          fontWeight: 600,
                          fontSize: "16px",
                          marginLeft: "20px",
                          color: "#fe7171",
                        }}
                      >
                        No Data Provided
                      </span>
                    ) : (
                      <ul style={{ paddingInlineStart: "0px" }}>
                        {details?.resume?.education &&
                          details?.resume?.education.map((education, index) => (
                            <li
                              style={{ margin: "10px", color: "#034275" }}
                              key={index}
                            >
                              {bull}&nbsp;
                              {`${education.graduate} in ${
                                education.degreeName
                              } ${moment(education.fromDate).format(
                                "l"
                              )} - ${moment(education.toDate).format("l")}  ${
                                education?.collegeName
                              }`}
                            </li>
                          ))}
                      </ul>
                    )}
                  </CardContent>

                  {/* Projects */}
                  <StyledBoxed>
                    <CustomTypography
                      variant="h6"
                      sx={{
                        fontWeight: 400,
                        fontSize: "19px",
                      }}
                    >
                      Projects
                    </CustomTypography>

                    <Button
                      variant="body1"
                      className="iconPointers"
                      color="initial"
                      sx={{
                        fontSize: "14px",
                        float: "right",
                        color: NEUTRAL,
                      }}
                      onClick={() => {
                        goToProfile("projects_details_section");
                      }}
                    >
                      <CreateIcon />
                    </Button>
                  </StyledBoxed>
                  <CardContent>
                    <Stack
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        flexDirection: { xs: "column", md: "row" },
                        gap: "20px",
                      }}
                    >
                      {details.resume?.projects?.length === 0 ? (
                        <span
                          style={{
                            fontWeight: 600,
                            fontSize: "16px",
                            marginLeft: "20px",
                            color: "#fe7171",
                          }}
                        >
                          No Data Provided
                        </span>
                      ) : (
                        details?.resume?.projects &&
                        details?.resume?.projects.map((projects, index) => (
                          <Card
                            key={index}
                            variant="outlined"
                            sx={{ minWidth: "260px", height: "150px" }}
                          >
                            <StyledProjectBoxed>
                              <CustomTypography
                                sx={{
                                  fontWeight: 400,
                                  fontSize: "19px",
                                }}
                              >
                                Project Name : {projects.ProjectName}
                              </CustomTypography>
                            </StyledProjectBoxed>
                            <CardContent>
                              <CustomTypography>
                                Organization : {projects.Organization}
                              </CustomTypography>
                              <CustomTypography sx={{ color: PRIMARY }}>
                                Project Link : {projects.portafolioLink}
                              </CustomTypography>
                            </CardContent>
                          </Card>
                        ))
                      )}
                    </Stack>
                  </CardContent>

                  {/* Training */}
                  <StyledBoxed>
                    <CustomTypography
                      variant="h6"
                      sx={{
                        fontWeight: 400,
                        fontSize: "19px",
                      }}
                    >
                      Training
                    </CustomTypography>

                    <Button
                      variant="body1"
                      className="iconPointers"
                      color="initial"
                      sx={{
                        fontSize: "14px",
                        float: "right",
                        color: NEUTRAL,
                      }}
                      onClick={() => {
                        goToProfile("traning_details_section");
                      }}
                    >
                      <CreateIcon />
                    </Button>
                  </StyledBoxed>
                  <CardContent>
                    {details?.resume?.traning?.length === 0 ? (
                      <span
                        style={{
                          fontWeight: 600,
                          fontSize: "16px",
                          marginLeft: "20px",
                          color: "#fe7171",
                        }}
                      >
                        No Data Provided
                      </span>
                    ) : (
                      <ul>
                        {details?.resume?.traning &&
                          details.resume.traning.map((traning, index) => (
                            <li
                              style={{ margin: "10px", color: "#034275" }}
                              key={index}
                            >
                              {bull}&nbsp;
                              {traning.title} for (
                              {moment(traning.fromDate).format("l")} -
                              {moment(traning.toDate).format("l")})&nbsp;
                              {traning.instituete}
                            </li>
                          ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              </ThemeProvider>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            m: "65px 0 45px 0",
            gap: "15px",
            width: "100%",
          }}
        >
          <Button
            variant="outlined"
            onClick={() => {
              if (hasQuestions) {
                setCurrentScreen("quiz");
              } else {
                setCurrentScreen("upload");
              }
            }}
            sx={{
              width: "100%",
              height: "50px",
              borderRadius: "8px",
              color: "#4F9AFF",
            }}
          >
            Back
          </Button>

          <button
            variant="outlined"
            onClick={() => {
              submit();
            }}
            className={styles.nextButton}
          >
            SUBMIT
          </button>
        </Box>

        <Dialog
          open={opena}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClosea}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>
            {"Are you sure you want to proceed with deleting your skill ?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                handleClosea();
                handleDelete(details.resume.skills._id);
              }}
            >
              Yes
            </Button>
            <Button onClick={handleClosea}>No</Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={openDel}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleCloseDel}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>
            {"Are you sure you want to proceed with deleting your CV ?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                handleCloseDel();
                handleResumeDelete(resumeSin._id);
              }}
            >
              Yes
            </Button>
            <Button onClick={handleCloseDel}>No</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </div>
  );
}

export default ReviewAppication;
