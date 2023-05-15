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
import React, { useState, useEffect } from "react";
import { StyledCard } from "../ProfileStyles";
import AddIcon from "@mui/icons-material/Add";
import moment from "moment";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
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
} from "@/redux/slices/personal";

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
  console.log(data, "test");

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
    dispatch(deleteProjectAndGet(delProject));
  };

  const handleDelTraining = () => {
    dispatch(deleteTrainAndGet(delTraining));
  };

  const handleDelCert = () => {
    dispatch(deleteCertifiAndGet(delCert));
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

  const notify3 = (del) =>
    toast.error(del, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notify3T = () =>
    toast.error(
      "Your training information has been deleted from your profile ",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );

  return (
    <>
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

      <Collapse in={open} timeout="auto">
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
              <AddIcon
                className="iconPointers"
                onClick={() => gotToAddProject()}
              />
            </Stack>
            <CardContent
              sx={{
                padding: { md: "30px 30px", xs: "16px 10px", sm: "16px 10px" },
              }}
            >
              <Stack sx={{ justifyContent: "space-between", gap: "20px" }}>
                {projects?.map((prj, index) => (
                  <Stack
                    key={index}
                    sx={{
                      backgroundColor: "#F6FCFF",
                      borderRadius: "10px",
                      padding: { md: "20px 30px", sm: "10px", xs: "10px" },
                      border: "1px solid #D3EAFF",
                    }}
                  >
                    <Stack
                      direction={"row"}
                      sx={{
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                    >
                      <IconButton
                      // onClick={() => {
                      //   handleClickOpen();
                      //   handleGetSingle(data._id);
                      // }}
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
                      >
                        <DeleteIcon sx={{ color: DANGER }} />
                      </IconButton>
                    </Stack>
                    <Grid container spacing={2}>
                      <Grid item md={6}>
                        <Stack sx={{ gap: LAZY }}>
                          <Stack direction={"row"} sx={{ gap: "10px" }}>
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
                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              Project Name:
                            </CustomTypography>
                            <CustomTypography>
                              {prj?.ProjectName}
                            </CustomTypography>
                          </Stack>
                        </Stack>
                      </Grid>
                      <Grid item md={12}>
                        <Stack sx={{ gap: LAZY }}>
                          <Stack direction={"row"} sx={{ gap: "10px" }}>
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
                Training
              </CustomTypography>
              <AddIcon
                className="iconPointers"
                onClick={() => gotToAddTraining()}
              />
            </Stack>
            <CardContent
              sx={{
                padding: { md: "30px 30px", xs: "16px 10px", sm: "16px 10px" },
              }}
            >
              <Stack sx={{ justifyContent: "space-between", gap: "20px" }}>
                {training?.map((tra, index) => (
                  <Stack
                    key={index}
                    sx={{
                      backgroundColor: "#F6FCFF",
                      borderRadius: "10px",
                      padding: { md: "20px 30px", sm: "10px", xs: "10px" },
                      border: "1px solid #D3EAFF",
                    }}
                  >
                    <Stack
                      direction={"row"}
                      sx={{
                        justifyContent: "flex-end",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <IconButton
                      // onClick={() => {
                      //   handleClickOpen2();
                      //   handleGetSingleT(data._id);
                      // }}
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
                      >
                        <DeleteIcon sx={{ color: DANGER }} />
                      </IconButton>
                    </Stack>
                    <Grid container spacing={2}>
                      <Grid item md={6}>
                        <Stack sx={{ gap: LAZY }}>
                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              Title:
                            </CustomTypography>
                            <CustomTypography>{tra?.title}</CustomTypography>
                          </Stack>
                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              From:
                            </CustomTypography>
                            <CustomTypography>{tra?.fromDate}</CustomTypography>
                          </Stack>
                        </Stack>
                      </Grid>
                      <Grid item md={6}>
                        <Stack sx={{ gap: LAZY }}>
                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              Institute:
                            </CustomTypography>
                            <CustomTypography>
                              {tra?.instituete}
                            </CustomTypography>
                          </Stack>

                          <Stack direction={"row"} sx={{ gap: "10px" }}>
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
          <StyledCard variant="outlined">
            <Stack
              direction={"row"}
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 30px",
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
              <AddIcon
                className="iconPointers"
                onClick={() => gotToAddCertifications()}
              />
            </Stack>
            <CardContent
              sx={{
                padding: { md: "30px 30px", xs: "16px 10px", sm: "16px 10px" },
              }}
            >
              <Stack sx={{ justifyContent: "space-between", gap: "20px" }}>
                {certification?.map((cet, index) => (
                  <Stack
                    key={index}
                    sx={{
                      backgroundColor: "#F6FCFF",
                      borderRadius: "10px",
                      padding: { md: "20px 30px", sm: "10px", xs: "10px" },
                      border: "1px solid #D3EAFF",
                    }}
                  >
                    <Stack
                      direction={"row"}
                      sx={{
                        justifyContent: "flex-end",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <CreateIcon sx={{ color: "#00339B" }} fontSize="small" />
                      <IconButton
                        onClick={() => {
                          handleClickOpenDelCert(cet._id);
                        }}
                      >
                        <DeleteIcon sx={{ color: DANGER }} />
                      </IconButton>
                    </Stack>
                    <Grid container spacing={2}>
                      <Grid item md={6} xs={12} sm={12}>
                        <Stack sx={{ gap: LAZY }}>
                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              Title:
                            </CustomTypography>
                            <CustomTypography>{cet?.title}</CustomTypography>
                          </Stack>
                          <Stack direction={"row"} sx={{ gap: "10px" }}>
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
                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              Organization:
                            </CustomTypography>
                            <CustomTypography>
                              {cet?.organization}
                            </CustomTypography>
                          </Stack>

                          <Stack direction={"row"} sx={{ gap: "10px" }}>
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
                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <IconButton
                              onClick={async () => {
                                const res = await fetch(
                                  `  http://localhost:3000/api/downloadCertificate?certificate=${cet.certificatepath.replace(
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
                    {/* </div> */}
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
              notify3(
                "Your project information has been deleted from your profile"
              );
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
              notify3T();
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
              notify3(
                "Your certificate information has been deleted from your profile"
              );
            }}
          >
            Yes
          </Button>
          <Button onClick={handleCloseDelCert}>No</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

Certifications.defaultProps = {
  projects: [],
};

export default React.memo(Certifications);
