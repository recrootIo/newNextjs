import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import {
  Box,
  CardContent,
  Collapse,
  Grid,
  Stack,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Slide,
} from "@mui/material";
import React, {
  useState,
  //  useEffect
} from "react";
import { StyledCard } from "../ProfileStyles";
import AddIcon from "@mui/icons-material/Add";
import moment from "moment";
// /import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CreateIcon from "@mui/icons-material/Create";
import download from "downloadjs";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { DANGER, NEUTRAL } from "@/theme/colors";
import { LAZY } from "@/theme/spacings";
import { BOLD } from "@/theme/fonts";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { updateCurrentScreen } from "@/redux/slices/candidate";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCertifiAndGet,
  deleteProjectAndGet,
  deleteTrainAndGet,
  retrieveGetSinCertificate,
  retrieveGetSinProject,
  retrieveGetSinTrain,
} from "@/redux/slices/personal";
import { ERROR, SUCCESS } from "@/utils/constants";
import { openAlert } from "@/redux/slices/alert";
import CalculatePercentage from "@/utils/CalculatePercentange";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const Certifications = () => {
  const dispatch = useDispatch();

  const gotToAddProject = () => {
    dispatch(updateCurrentScreen("projects"));
  };

  const gotToAddTraining = () => {
    dispatch(updateCurrentScreen("training"));
  };

  const gotToAddCertifications = () => {
    dispatch(updateCurrentScreen("certificates"));
  };

  const [open, setOpen] = useState(true);
  const [openDeleteProject, setOpenDeleteProject] = React.useState(false);
  const [delProject, setDelProject] = useState("");
  const [openDelTraining, setOpenDelTraining] = React.useState(false);
  const [delTraining, setDelTraining] = useState("");
  const [openDelCert, setOpenDelCert] = React.useState(false);
  const [delCert, setDelCert] = useState("");

  const { data = {} } = useSelector((state) => state?.personal);

  const projects =
    data.resume && data.resume.projects ? data.resume.projects : [];

  const training =
    data.resume && data.resume.traning ? data.resume.traning : [];

  const certification =
    data.resume && data.resume.certificateFileLocation
      ? data.resume.certificateFileLocation
      : [];

  const openProfile = () => {
    setOpen(!open);
  };

  const handleClickOpenDeleteProject = (id) => {
    setDelProject(id);
    setOpenDeleteProject(true);
  };

  const handleClickOpenDelTraining = (id) => {
    setDelTraining(id);
    setOpenDelTraining(true);
  };

  const handleClickOpenDelCert = (id) => {
    setDelCert(id);
    setOpenDelCert(true);
  };

  const handleDeleteProject = () => {
    dispatch(deleteProjectAndGet(delProject)).then(() => {
      dispatch(
        openAlert({
          type: SUCCESS,
          message: "Project is deleted",
        })
      );
      CalculatePercentage();
    });
  };

  const handleDelTraining = () => {
    dispatch(deleteTrainAndGet(delTraining))
      .then(() => {
        dispatch(
          openAlert({
            type: SUCCESS,
            message: "Training is deleted",
          })
        );
        CalculatePercentage();
      })
      .catch(() => {});
  };

  const handleDelCert = () => {
    dispatch(deleteCertifiAndGet(delCert)).then(() => {
      dispatch(
        openAlert({
          type: SUCCESS,
          message: "Certificate is deleted",
        })
      );
      CalculatePercentage();
    });
  };

  const handleCloseDeleteProject = () => {
    setOpenDeleteProject(false);
  };

  const handleCloseDelTraining = () => {
    setOpenDelTraining(false);
  };

  const handleCloseDelCert = () => {
    setOpenDelCert(false);
  };

  const handleGetSingleCer = (id) => {
    dispatch(retrieveGetSinCertificate(id)).then(() => {
      gotToAddCertifications();
    });
  };

  const handleGetSingle = (id) => {
    dispatch(retrieveGetSinProject(id)).then(() => gotToAddProject());
  };

  const openEditTraining = (id) => {
    dispatch(retrieveGetSinTrain(id)).then(() => {
      gotToAddTraining();
    });
  };

  return (
    <Stack sx={{ gap: "10px", mt: "10px" }}>
      <Box
        sx={{
          backgroundColor: "#2699FF",
          borderRadius: "5px",
        }}
      >
        <Stack
          direction={"row"}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 30px",
          }}
        >
          <CustomTypography
            sx={{ fontFamily: BOLD, color: NEUTRAL, fontSize: "20px" }}
          >
            Other Certifications
          </CustomTypography>
          <Box onClick={() => openProfile()} sx={{ cursor: "pointer" }}>
            {open ? (
              <ExpandLess sx={{ color: NEUTRAL }} />
            ) : (
              <ExpandMore sx={{ color: NEUTRAL }} />
            )}
          </Box>
        </Stack>
      </Box>

      <Collapse in={open} timeout="auto" id="projects_details_section">
        <Stack sx={{ gap: "30px" }}>
          {/* Project */}
          <StyledCard variant="outlined">
            <Stack
              direction={"row"}
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
                padding: { md: "10px 30px", xs: "10px", sm: "10px" },
                backgroundColor: "#5CA9E814",
              }}
            >
              <CustomTypography
                sx={{
                  fontFamily: BOLD,
                  color: "#00339B",
                  fontSize: "20px",
                }}
              >
                Project
              </CustomTypography>
              <IconButton onClick={() => gotToAddProject()}>
                <AddIcon className="iconPointers" />
              </IconButton>
            </Stack>
            <CardContent
              sx={{
                padding: { md: "30px 30px", xs: "16px 10px", sm: "16px 10px" },
              }}
            >
              <Stack sx={{ gap: "20px" }}>
                {projects?.map((prj, index) => (
                  <Stack
                    sx={{
                      backgroundColor: "#F6FCFF",
                      borderRadius: "10px",
                      padding: { md: "18px 20px", sm: "15px", xs: "10px" },
                      border: "1px solid #D3EAFF",
                    }}
                    key={index}
                  >
                    <Stack
                      direction={"row"}
                      sx={{
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                    >
                      <IconButton
                        onClick={() => {
                          handleGetSingle(prj._id);
                        }}
                        sx={{ pt: 0 }}
                      >
                        <CreateIcon
                          sx={{ color: "#00339B" }}
                          fontSize="small"
                        />
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          handleClickOpenDeleteProject(prj._id);
                        }}
                        sx={{ pr: 0, pt: 0 }}
                      >
                        <DeleteIcon sx={{ color: DANGER }} />
                      </IconButton>
                    </Stack>
                    <Grid container spacing={2}>
                      <Grid item md={6}>
                        <Stack sx={{ gap: LAZY }}>
                          <Stack direction={"row"} sx={{ gap: "3px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              Portfolio Link:
                            </CustomTypography>
                            <CustomTypography>
                              {prj?.portafolioLink}
                            </CustomTypography>
                          </Stack>
                        </Stack>
                      </Grid>
                      <Grid item md={6}>
                        <Stack sx={{ gap: LAZY }}>
                          <Stack direction={"row"} sx={{ gap: "3px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              Project Name:
                            </CustomTypography>
                            <CustomTypography>
                              {prj?.ProjectName}
                            </CustomTypography>
                          </Stack>
                        </Stack>
                      </Grid>
                      <Grid item md={6}>
                        <Stack sx={{ gap: LAZY }}>
                          <Stack direction={"row"} sx={{ gap: "3px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              Organization:
                            </CustomTypography>
                            <CustomTypography>
                              {prj?.Organization}
                            </CustomTypography>
                          </Stack>
                        </Stack>
                      </Grid>
                      <Grid item md={12}>
                        <Stack sx={{ gap: LAZY }}>
                          <Stack direction={"row"} sx={{ gap: "3px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              Description:
                            </CustomTypography>
                            <CustomTypography>
                              {prj?.Description}
                            </CustomTypography>
                          </Stack>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Stack>
                ))}
              </Stack>
            </CardContent>
          </StyledCard>

          {/* Training */}
          <StyledCard variant="outlined" id="traning_details_section">
            <Stack
              direction={"row"}
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
                padding: { md: "10px 30px", xs: "10px", sm: "10px" },
                backgroundColor: "#5CA9E814",
              }}
            >
              <CustomTypography
                sx={{
                  fontFamily: BOLD,
                  color: "#00339B",
                  fontSize: "20px",
                }}
              >
                Training
              </CustomTypography>
              <IconButton onClick={() => gotToAddTraining()}>
                <AddIcon className="iconPointers" />
              </IconButton>
            </Stack>
            <CardContent
              sx={{
                padding: { md: "30px 30px", xs: "16px 10px", sm: "16px 10px" },
              }}
            >
              <Stack sx={{ gap: "20px" }}>
                {training?.map((tra, index) => (
                  <Stack
                    sx={{
                      backgroundColor: "#F6FCFF",
                      borderRadius: "10px",
                      padding: { md: "18px 20px", sm: "15px", xs: "10px" },
                      border: "1px solid #D3EAFF",
                    }}
                    key={index}
                  >
                    <Stack
                      direction={"row"}
                      sx={{
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                    >
                      <IconButton
                        onClick={() => {
                          openEditTraining(tra?._id);
                        }}
                        sx={{ pt: 0 }}
                      >
                        <CreateIcon
                          sx={{ color: "#00339B" }}
                          fontSize="small"
                        />
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          handleClickOpenDelTraining(tra._id);
                        }}
                        sx={{ pr: 0, pt: 0 }}
                      >
                        <DeleteIcon sx={{ color: DANGER }} />
                      </IconButton>
                    </Stack>
                    <Grid container spacing={2}>
                      <Grid item md={6}>
                        <Stack sx={{ gap: LAZY }}>
                          <Stack direction={"row"} sx={{ gap: "3px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              Title:
                            </CustomTypography>
                            <CustomTypography>{tra?.title}</CustomTypography>
                          </Stack>
                          <Stack direction={"row"} sx={{ gap: "3px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              From:
                            </CustomTypography>
                            <CustomTypography>{tra?.fromDate}</CustomTypography>
                          </Stack>
                        </Stack>
                      </Grid>
                      <Grid item md={6}>
                        <Stack sx={{ gap: LAZY }}>
                          <Stack direction={"row"} sx={{ gap: "3px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              Institute:
                            </CustomTypography>
                            <CustomTypography>
                              {tra?.instituete}
                            </CustomTypography>
                          </Stack>

                          <Stack direction={"row"} sx={{ gap: "3px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              To:
                            </CustomTypography>
                            <CustomTypography>{tra?.toDate}</CustomTypography>
                          </Stack>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Stack>
                ))}
              </Stack>
            </CardContent>
          </StyledCard>

          {/* Certificate */}
          <StyledCard variant="outlined" id="certificate_details_section">
            <Stack
              direction={"row"}
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
                padding: { md: "10px 30px", xs: "10px", sm: "10px" },
                backgroundColor: "#5CA9E814",
              }}
            >
              <CustomTypography
                sx={{
                  fontFamily: BOLD,
                  color: "#00339B",
                  fontSize: "20px",
                }}
              >
                Certificate
              </CustomTypography>
              <IconButton onClick={() => gotToAddCertifications()}>
                <AddIcon className="iconPointers" />
              </IconButton>
            </Stack>
            <CardContent
              sx={{
                padding: { md: "30px 30px", xs: "16px 10px", sm: "16px 10px" },
              }}
            >
              <Stack sx={{ gap: "20px" }}>
                {certification?.map((cet, index) => (
                  <Stack
                    sx={{
                      backgroundColor: "#F6FCFF",
                      borderRadius: "10px",
                      padding: { md: "18px 20px", sm: "15px", xs: "10px" },
                      border: "1px solid #D3EAFF",
                    }}
                    key={index}
                  >
                    <Stack
                      direction={"row"}
                      sx={{
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                    >
                      <IconButton
                        onClick={() => handleGetSingleCer(cet._id)}
                        sx={{ pt: 0 }}
                      >
                        <CreateIcon
                          sx={{ color: "#00339B" }}
                          fontSize="small"
                        />
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          handleClickOpenDelCert(cet._id);
                        }}
                        sx={{ pr: 0, pt: 0 }}
                      >
                        <DeleteIcon sx={{ color: DANGER }} />
                      </IconButton>
                    </Stack>
                    <Grid container spacing={2}>
                      <Grid item md={6} xs={12} sm={12}>
                        <Stack sx={{ gap: LAZY }}>
                          <Stack direction={"row"} sx={{ gap: "3px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              Title:
                            </CustomTypography>
                            <CustomTypography>{cet?.title}</CustomTypography>
                          </Stack>
                          <Stack direction={"row"} sx={{ gap: "3px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              From:
                            </CustomTypography>
                            <CustomTypography>
                              {moment(cet?.issueDate).format("MM/DD/YYYY")}
                            </CustomTypography>
                          </Stack>
                        </Stack>
                      </Grid>
                      <Grid item md={6} xs={12} sm={12}>
                        <Stack sx={{ gap: LAZY }}>
                          <Stack direction={"row"} sx={{ gap: "3px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              Organization:
                            </CustomTypography>
                            <CustomTypography>
                              {cet?.organization}
                            </CustomTypography>
                          </Stack>

                          <Stack direction={"row"} sx={{ gap: "3px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              To:
                            </CustomTypography>
                            <CustomTypography>
                              {moment(cet?.expireDate).format("MM/DD/YYYY")}
                            </CustomTypography>
                          </Stack>
                        </Stack>
                      </Grid>
                      <Grid item md={12} xs={12} sm={12}>
                        <Stack
                          sx={{
                            border: "1px solid #DADADA",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "3px 15px",
                            width: "100%",
                          }}
                          direction="row"
                        >
                          <CustomTypography>
                            {cet?.certificateName}
                          </CustomTypography>
                          <Stack direction={"row"} sx={{ gap: "3px" }}>
                            <IconButton
                              onClick={async () => {
                                const res = await fetch(
                                  `https://preprod.recroot.au/api/downloadCertificate?certificate=${cet.certificatepath.replace(
                                    /\\/g,
                                    "/"
                                  )}`
                                );
                                const blob = await res.blob();
                                download(blob, `${cet.certificateName}`);
                              }}
                            >
                              <CloudDownloadIcon sx={{ color: "#00339B" }} />
                            </IconButton>
                          </Stack>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Stack>
                ))}
              </Stack>
            </CardContent>
          </StyledCard>
        </Stack>
      </Collapse>

      <Dialog
        open={openDeleteProject}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDeleteProject}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          {
            "Are you sure you want to proceed with deleting your project information ?"
          }
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleCloseDeleteProject();
              handleDeleteProject();
            }}
          >
            Yes
          </Button>
          <Button onClick={handleCloseDeleteProject}>No</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openDelTraining}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDelTraining}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          {
            "Are you sure you want to proceed with deleting your training information ?"
          }
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleCloseDelTraining();
              handleDelTraining();
              dispatch(
                openAlert({
                  type: ERROR,
                  message:
                    "Your project training has been deleted from your profile",
                })
              );
            }}
          >
            Yes
          </Button>
          <Button onClick={handleCloseDelTraining}>No</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openDelCert}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDelCert}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          {
            "Are you sure you want to proceed with deleting your certificate information ?"
          }
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleCloseDelCert();
              handleDelCert();
              dispatch(
                openAlert({
                  type: ERROR,
                  message:
                    "Your certificate information has been deleted from your profile",
                })
              );
            }}
          >
            Yes
          </Button>
          <Button onClick={handleCloseDelCert}>No</Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};

Certifications.defaultProps = {
  projects: [],
};

export default React.memo(Certifications);
