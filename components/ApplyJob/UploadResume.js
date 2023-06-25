import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import {
  Backdrop,
  Checkbox,
  CircularProgress,
  Dialog,
  FormGroup,
  Stack,
  Switch,
  Container,
  Radio,
  RadioGroup,
  styled,
} from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useDispatch, useSelector } from "react-redux";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import download from "downloadjs";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import {
  addCover,
  AddCoverAndThenGet,
  addResume,
  AddResumeAndThenGet,
  clearCover,
  clearCoversin,
  deleteCoverAndGet,
  removeCover,
  removeResume,
  retrieveGetSinCover,
  retrieveGetSinResume,
  retrievePersonal,
  updateAndThenGet,
} from "@/redux/slices/personal";
import { Uploader } from "@/components/Uploader/Uploader";
import { DANGER, NEUTRAL, PRIMARY } from "@/theme/colors";
import ApplyJobStepper from "@/components/ApplyJobStepper/ApplyJobStepper";
import { openAlert } from "@/redux/slices/alert";
import { ERROR, SUCCESS } from "@/utils/constants";
import { BOLD } from "@/theme/fonts";
import styles from "./applyJobs.module.css";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { useRouter } from "next/router";
import DeleteIcon from "@mui/icons-material/Delete";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 23,
  height: 23,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#137cbd",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 23,
    height: 23,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
});

// Inspired by blueprintjs
const BpRadio = (props) => {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
};

const UploadResume = ({ ...props }) => {
  const { setApplication, setCurrentScreen, jobTitle, hasQuestions } = props;
  const dispatch = useDispatch();
  const router = useRouter();
console.log(hasQuestions,'questtt')
  const resumeSin = useSelector((state) => state.personal.resume);
  const CoverSin = useSelector((state) => state.personal.cover);
  const show = useSelector((state) => state.personal.show);
  const resLoad = useSelector((state) => state.personal.resLoad);
  const resumes = useSelector((state) => state.personal.data.resume);

  const [checked, setChecked] = React.useState(false);
  const [checkedcov, setCheckedcov] = React.useState(false);
  const [opena, setOpena] = React.useState(false);
  const [openc, setOpenc] = React.useState(false);
  const [opencov, setOpencov] = React.useState(false);
  const [cover, setCover] = useState(false);
  const [pdf, setPdf] = useState(null);
  const [pdfC, setPdfC] = useState();

  const [selectedResume, setSelectedResume] = React.useState({
    resume: resumeSin && resumeSin?.resumeName,
    id: resumeSin && resumeSin?._id,
  });

  const [covers, setCovers] = React.useState({
    cover: CoverSin && CoverSin.coverName,
    id: CoverSin && CoverSin._id,
  });

  const resumeLoc = (resumes && resumes.resumeFileLocation) || [];
  const coverLoc = resumes && resumes.coverLetterFileLocation;

  React.useEffect(() => {
    dispatch(retrievePersonal());
  }, [dispatch]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setSelectedResume({ id: e.target.value });
    dispatch(retrieveGetSinResume(e.target.value));
    setApplication((state) => ({
      ...state,
      resumeId: e.target.value,
    }));
  };

  const handleChangeC = (e) => {
    setCovers({ id: e.target.value });
    dispatch(retrieveGetSinCover(e.target.value));
  };

  const handleClosea = () => {
    setOpena(false);
  };

  const handleClickOpenc = () => {
    setOpenc(true);
  };

  const handleClosec = () => {
    setOpenc(false);
  };

  const handleChangeR = (file) => {
    setPdf(file);
  };

  const handleChangeCov = (file) => {
    setPdfC(file);
  };

  const send = (pdf) => {
    dispatch(addResume(pdf))
      .unwrap()
      .then((res) => {
        dispatch(
          openAlert({
            type: SUCCESS,
            message: "Resume has been saved successfully",
          })
        );

        console.log(res, "res");

        dispatch(retrievePersonal());
        dispatch(removeResume({}));
        setPdf(null);
        setChecked(false);

        setSelectedResume({
          resume: undefined,
          id: undefined,
        });
      })
      .catch((error) => {
        dispatch(
          openAlert({
            type: ERROR,
            message: error?.response?.data?.message || "Something went wrong",
          })
        );
      });
  };

  const sendC = async (pdfC) => {
    await dispatch(addCover(pdfC))
      .unwrap()
      .then(() => {
        dispatch(
          openAlert({
            type: SUCCESS,
            message: "Cover letter has been saved successfully",
          })
        );
        dispatch(retrievePersonal());
        dispatch(removeCover({}));
        setCheckedcov(false);
        setPdfC("");
        setCovers({
          cover: undefined,
          id: undefined,
        });
      })
      .catch((error) => {
        dispatch(
          openAlert({
            type: ERROR,
            message: error?.response?.data?.message || "Something went wrong",
          })
        );
      });
  };

  const handleDelete = (id) => {
    dispatch(updateAndThenGet(id));
    dispatch(removeResume({}));
    dispatch(retrievePersonal());
    setSelectedResume({
      resume: undefined,
      id: undefined,
    });
  };

  const handleDeleteC = (id) => {
    dispatch(deleteCoverAndGet(id));
    dispatch(removeCover({}));

    setCovers({
      cover: undefined,
      id: undefined,
    });
  };

  const handleCover = () => {
    setCover(!cover);
    dispatch(clearCover(!show));
    dispatch(clearCoversin({}));
    setCovers({
      cover: "",
      id: "",
    });
  };

  const handleGoBack = () => {
    router.back();
  };

  const coverDisabled = !show || covers?.id;
  const buttonDisable = selectedResume?.id && coverDisabled;

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

      <Box>
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
            <ApplyJobStepper  activeStep={0} />
          </Stack>

          <Stack
            sx={{ marginTop: "60px" }}
            className="selectResumeContainer"
            spacing={2}
          >
            <Grid item xs={12} md={12} sx={{ marginTop: 2, marginBottom: 2 }}>
              <InputLabel id="demo-simple-select-label">
                Select Resume
              </InputLabel>
              <FormControl fullWidth>
                <Stack sx={{ gap: "10px" }}>
                  {resumeLoc.map((resume, index) => (
                    <Grid
                      key={index}
                      container
                      sx={{
                        border: "1px solid black",
                        borderRadius: "10px",
                        minHeight: "60px",
                      }}
                    >
                      <Grid
                        item
                        md={2}
                        lg={2}
                        sm={3}
                        xs={3}
                        sx={{
                          backgroundColor: resume.resumeName.includes("pdf")
                            ? "#cc1016"
                            : PRIMARY,
                          color: NEUTRAL,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "10px",
                          borderTopLeftRadius: "10px",
                          borderBottomLeftRadius: "10px",
                          fontWeight: 600,
                        }}
                      >
                        {resume.resumeName.includes("pdf") ? "PDF" : "DOC"}
                      </Grid>
                      <Grid
                        item
                        md={6}
                        lg={6}
                        sm={4}
                        xs={4}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          padding: "10px",
                          borderTopLeftRadius: "10px",
                          borderBottomLeftRadius: "10px",
                          fontWeight: 600,
                        }}
                      >
                        {resume.resumeName}
                      </Grid>
                      <Grid
                        item
                        md={2}
                        lg={2}
                        sm={4}
                        xs={4}
                        sx={{
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                          gap: "5px",
                          flexDirection: {
                            md: "row",
                            // sm: "column",
                            // xs: "column",
                          },
                        }}
                      >
                        <IconButton
                          onClick={async () => {
                            const res = await fetch(
                              ` https://preprod.recroot.au/api/downloadResume?resume=${resume.resume.replace(
                                /\\/g,
                                "/"
                              )}`
                            );
                            const blob = await res.blob();
                            download(blob, `${resume.resumeName}`);
                          }}
                        >
                          <SaveAltIcon />
                        </IconButton>
                      </Grid>
                      <Grid
                        item
                        md={2}
                        lg={2}
                        sm={1}
                        xs={1}
                        sx={{
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                        }}
                      >
                        <BpRadio
                          checked={resume?._id === selectedResume?.id}
                          onChange={handleChange}
                          value={resume?._id}
                        />
                      </Grid>
                    </Grid>
                  ))}
                </Stack>
              </FormControl>

              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={() => {
                      setChecked(!checked);
                    }}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                label="Add New Resume"
              />
            </Grid>

            {checked && (
              <Grid item xs={12} md={12} sx={{ marginTop: 2, marginBottom: 2 }}>
                <Box>
                  <Box>
                    <Uploader pdf={pdf} handleChange={handleChangeR} />
                  </Box>
                  <Box sx={{ textAlign: "right" }}>
                    {pdf ? (
                      <>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#4fa9ff !important",
                            ml: "20px",
                          }}
                          onClick={() => {
                            send(pdf);
                          }}
                        >
                          Save
                        </Button>
                      </>
                    ) : (
                      ""
                    )}
                  </Box>
                </Box>
              </Grid>
            )}

            {selectedResume.id !== undefined ? (
              <Grid
                item
                xs={12}
                md={12}
                sx={{ marginTop: 2, marginBottom: 2 }}
                display={"flex"}
                fullWidth
                spacing={2}
              >
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                  sx={{ paddingTop: 0, paddingLeft: 0, color: "green" }}
                >
                  <CheckCircleOutlineIcon />
                </IconButton>
                <CustomTypography
                  variant="body1"
                  color="initial"
                  sx={{ color: "green" }}
                >
                  Resume Attached
                </CustomTypography>
              </Grid>
            ) : (
              ""
            )}
            <Grid
              item
              xs={12}
              md={12}
              sx={{ marginTop: 2, marginBottom: 2 }}
              display={"flex"}
              fullWidth
              spacing={2}
            >
              <FormGroup>
                <FormControlLabel
                  control={<Switch checked={!show} />}
                  onClick={() => {
                    handleCover();
                  }}
                  label="Continue Without Cover Letter"
                />
              </FormGroup>
            </Grid>

            {show ? (
              <div>
                <Grid
                  item
                  xs={12}
                  md={12}
                  sx={{
                    marginTop: 2,
                    marginBottom: 2,
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                  fullWidth
                  spacing={2}
                >
                  <Stack direction="row" spacing={2}>
                    {covers.id && (
                      <Button
                        variant="body1"
                        color="initial"
                        sx={{
                          fontSize: "14px",
                          marginRight: "5px",
                          color: DANGER,
                        }}
                        onClick={() => {
                          handleClickOpenc();
                        }}
                      >
                        Delete
                      </Button>
                    )}

                    <Dialog
                      open={openc}
                      TransitionComponent={Transition}
                      keepMounted
                      onClose={handleClosec}
                      aria-describedby="alert-dialog-slide-description"
                    >
                      <DialogTitle>
                        {
                          "Are you sure you want to proceed with deleting your cover letter ?"
                        }
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button
                          onClick={() => {
                            handleClosec();
                            handleDeleteC(CoverSin._id);
                            dispatch(
                              openAlert({
                                type: ERROR,
                                message:
                                  "Your cover letter has been deleted from your profile",
                              })
                            );
                          }}
                        >
                          Yes
                        </Button>
                        <Button onClick={handleClosec}>No</Button>
                      </DialogActions>
                    </Dialog>
                    {covers.id && (
                      <Button
                        variant="body1"
                        color="initial"
                        sx={{
                          fontSize: "14px",
                          float: "right",
                          color: PRIMARY,
                        }}
                        onClick={async () => {
                          const res = await fetch(
                            ` https://preprod.recroot.au/api/downloadCover?cover=${CoverSin.cover.replace(
                              /\\/g,
                              "/"
                            )}`
                          );
                          const blob = await res.blob();
                          download(blob, `${CoverSin.coverName}`);
                        }}
                      >
                        Download
                      </Button>
                    )}
                  </Stack>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={12}
                  sx={{ marginTop: 2, marginBottom: 2 }}
                >
                  <Box>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Select Cover Letter
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="covers"
                        value={covers.id}
                        label="Select Cover Letter"
                        onChange={(e) => {
                          handleChangeC(e);
                        }}
                      >
                        {coverLoc &&
                          coverLoc.map((cover) => (
                            <MenuItem key={cover.coverName} value={cover._id}>
                              {cover.coverName}
                            </MenuItem>
                          ))}
                      </Select>
                    </FormControl>
                  </Box>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkedcov}
                        onChange={() => {
                          setCheckedcov(!checkedcov);
                        }}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    }
                    label="Add New Cover Letter"
                  />
                </Grid>

                {covers._id !== undefined ? (
                  <Grid
                    item
                    xs={12}
                    md={12}
                    sx={{ marginTop: 2, marginBottom: 2 }}
                    display={"flex"}
                    fullWidth
                    spacing={2}
                  >
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                      sx={{ paddingTop: 0, paddingLeft: 0, color: "green" }}
                    >
                      <CheckCircleOutlineIcon />
                    </IconButton>
                    <CustomTypography
                      variant="body1"
                      color="initial"
                      sx={{ color: "green" }}
                    >
                      Cover Letter Attached
                    </CustomTypography>
                  </Grid>
                ) : (
                  ""
                )}
                {checkedcov === false ? (
                  ""
                ) : (
                  <Grid
                    item
                    xs={12}
                    md={12}
                    sx={{ marginTop: 2, marginBottom: 2 }}
                  >
                    <Box>
                      <Uploader handleChange={handleChangeCov} pdfC={pdfC} />
                    </Box>
                    <Box sx={{ textAlign: "right" }}>
                      {pdfC ? (
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#4fa9ff !important",
                            ml: "30px",
                          }}
                          onClick={() => {
                            sendC(pdfC);
                          }}
                        >
                          Save
                        </Button>
                      ) : (
                        ""
                      )}
                    </Box>
                  </Grid>
                )}
              </div>
            ) : (
              ""
            )}
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={resLoad}
            >
              <Box sx={{ display: "inline-flex", width: 50 }}>
                <CircularProgress color="inherit" />
              </Box>
            </Backdrop>
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={opencov}
            >
              <Box sx={{ display: "inline-flex", width: 50 }}>
                <CircularProgress color="inherit" />
              </Box>
            </Backdrop>
          </Stack>
        </Container>

        <Container sx={{ width: { md: "50%", sm: "100%", xs: "100%" } }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              m: "65px 0 45px 0",
              gap: "15px",
              width: { md: "100%" },
            }}
          >
            <Button
              variant="outlined"
              onClick={() => handleGoBack()}
              sx={{
                width: "100%",
                height: "50px",
                borderRadius: "8px",
                color: "#4F9AFF",
              }}
            >
              Cancel
            </Button>

            <button
              variant="outlined"
              onClick={() => {
                if (hasQuestions) {
                  setCurrentScreen("quize");
                } else {
                  setCurrentScreen("Review");
                }
              }}
              className={
                !buttonDisable ? styles.nextButtonDisabled : styles.nextButton
              }
              disabled={!buttonDisable}
            >
              NEXT
            </button>
          </Box>
        </Container>

        <Dialog
          open={opena}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClosea}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>
            {"Are you sure you want to proceed with deleting your CV?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                handleClosea();
                handleDelete(resumeSin._id);
                dispatch(
                  openAlert({
                    type: ERROR,
                    message: "Your resume has been deleted from your profile",
                  })
                );
              }}
            >
              Yes
            </Button>
            <Button onClick={handleClosea}>No</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </div>
  );
};

export default UploadResume;
