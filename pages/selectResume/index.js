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
  Typography,
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
import AddIcon from "@mui/icons-material/Add";
// import { notifySuccess } from "../../helpers/Toast";
import {
  AddCoverAndThenGet,
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
import Navbar from "@/components/Navbar/Navbar";
import { DANGER, NEUTRAL, PRIMARY } from "@/theme/colors";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const SelectResume = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(retrievePersonal());
  }, [dispatch]);
  const resumeSin = useSelector((state) => state.personal.resume);
  const CoverSin = useSelector((state) => state.personal.cover);
  const show = useSelector((state) => state.personal.show);
  const resLoad = useSelector((state) => state.personal.resLoad);
  const [checked, setChecked] = React.useState(false);
  const [checkedcov, setCheckedcov] = React.useState(false);
  //   const [resumeUploaderShown, setResumeUploaderShown] = useState(false);
  //   const [coverUploaderShown, setCoverUploaderShown] = useState(false);
  const [resume, setResume] = React.useState({
    resume: resumeSin && resumeSin.resumeName,
    id: resumeSin && resumeSin._id,
  });
  const [covers, setCovers] = React.useState({
    cover: CoverSin && CoverSin.coverName,
    id: CoverSin && CoverSin._id,
  });
  const handleChange = (e) => {
    setResume({ id: e.target.value });
    dispatch(retrieveGetSinResume(e.target.value));
  };
  const handleChangeC = (e) => {
    setCovers({ id: e.target.value });
    dispatch(retrieveGetSinCover(e.target.value));
  };
  const [opena, setOpena] = React.useState(false);
  const [openc, setOpenc] = React.useState(false);
  const [opencov, setOpencov] = React.useState(false);

  const handleClickOpena = () => {
    setOpena(true);
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

  const [pdf, setPdf] = useState();
  const [pdfC, setPdfC] = useState();

  const handleChangeR = (file) => {
    setPdf(file);
  };
  const handleChangeCov = (file) => {
    setPdfC(file);
  };

  const send = (pdf) => {
    dispatch(AddResumeAndThenGet(pdf)).then(setPdf());
  };

  const sendC = (pdfC) => {
    setOpencov(true);
    dispatch(AddCoverAndThenGet(pdfC)).then((originalPromiseResult) => {
      if (originalPromiseResult?.meta?.requestStatus === "fulfilled") {
        setTimeout(() => {
          dispatch(retrievePersonal());
        }, 500);
        setOpencov(false);
        // notifySuccess("Your Cover Letter Was Uploaded");
      }
    });
    setPdfC();
  };
  const handleDelete = (id) => {
    dispatch(updateAndThenGet(id));
    dispatch(removeResume({}));
    setResume({
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
  const [cover, setCover] = useState(true);

  const handleCover = () => {
    setCover(!cover);
    dispatch(clearCover(!show));
    dispatch(clearCoversin({}));
    setCovers({
      cover: "",
      id: "",
    });
  };

  const resumes = useSelector((state) => state.personal.data.resume);
  console.log(resumes, "resumes");
  const resumeLoc = resumes && resumes.resumeFileLocation;
  const coverLoc = resumes && resumes.coverLetterFileLocation;

  const notifyD = (del) =>
    toast.error(del, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  //   const handleCVUploaderClick = (event) => {
  //     setResumeUploaderShown(true);
  //   };
  //   const handleCoverUploaderClick = (event) => {
  //     setCoverUploaderShown(true);
  //   };

  return (
    <div
      style={{
        backgroundImage: `url("/selectResumeBg.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <Box
        sx={{
          height: "100px",
          backgroundImage: 'url("/Group 86.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
        }}
      ></Box>
      <Box>
        <Container>
          <Box sx={{ display: "flex", justifyContent: "center", mt: "60px" }}>
            <img src="/selectResumeStepper.png" alt="" />
          </Box>
          <Stack
            sx={{ marginTop: "60px" }}
            className="selectResumeContainer"
            spacing={2}
          >
            <Grid
              item
              xs={12}
              md={12}
              sx={{
                marginTop: 2,
                mt: 0,
                display: "flex",
                justifyContent: "flex-end",
              }}
              fullWidth
            >
              <Stack direction="row" spacing={2}>
                {resume?.id && (
                  <Button
                    variant="body1"
                    color="initial"
                    sx={{ fontSize: "14px", marginRight: "5px", color: DANGER }}
                    onClick={() => {
                      handleClickOpena();
                    }}
                  >
                    Delete
                  </Button>
                )}
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
                        notifyD(
                          "Your resume has been deleted from your profile"
                        );
                      }}
                    >
                      Yes
                    </Button>
                    <Button onClick={handleClosea}>No</Button>
                  </DialogActions>
                </Dialog>
                {resume?.id && (
                  <Button
                    variant="body1"
                    color="initial"
                    sx={{ fontSize: "14px", float: "right", color: PRIMARY }}
                    onClick={async () => {
                      const res = await fetch(
                        ` https://preprod.recroot.au/api/downloadResume?resume=${resumeSin.resume.replace(
                          /\\/g,
                          "/"
                        )}`
                      );
                      const blob = await res.blob();
                      download(blob, `${resumeSin.resumeName}`);
                    }}
                  >
                    Download
                  </Button>
                )}
              </Stack>
            </Grid>
            <Grid item xs={12} md={12} sx={{ marginTop: 2, marginBottom: 2 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select Resume
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="resume"
                  value={resume.id}
                  label="Select Resume"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                >
                  {resumeLoc &&
                    resumeLoc.map((resume) => (
                      <MenuItem key={resume.resumeName} value={resume._id}>
                        {resume.resumeName}{" "}
                      </MenuItem>
                    ))}
                </Select>
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
              {/* <AddIcon
                className="iconPointers"
                // onClick={() => {
                //   handleClickOpenDeleteSkill(skill?.id);
                // }}
              /> */}
            </Grid>
            {checked === false ? (
              ""
            ) : (
              <>
                <Grid
                  item
                  xs={12}
                  md={12}
                  sx={{ marginTop: 2, marginBottom: 2 }}
                >
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
                          </Button>{" "}
                        </>
                      ) : (
                        ""
                      )}
                    </Box>
                  </Box>
                </Grid>
              </>
            )}
            {resume.id !== undefined ? (
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
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ color: "green" }}
                >
                  Resume Attached
                </Typography>
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
                            notifyD(
                              "Your cover letter has been deleted from your profile"
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
                    <Typography
                      variant="body1"
                      color="initial"
                      sx={{ color: "green" }}
                    >
                      Cover Letter Attached
                    </Typography>
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
          <Stack
            direction="row"
            spacing={2}
            sx={{
              marginLeft: 2,
              marginRight: 2,
              marginTop: "50px",
              marginBottom: "150px",
            }}
          >
            <Button
              variant="outlined"
              sx={{ width: "50%", height: "50px", borderRadius: "8px" }}
            >
              Previous
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#015FB1 !important",
                width: "50%",
                borderRadius: "8px",
              }}
            >
              Next
            </Button>
          </Stack>
        </Container>
      </Box>
    </div>
  );
};

export default SelectResume;
