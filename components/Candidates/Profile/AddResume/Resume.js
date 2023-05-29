import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import {
  CardContent,
  // Grid,
  Stack,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Button,
  IconButton,
  Slide,
} from "@mui/material";
import React from "react";
import { StyledCard } from "../../ProfileStyles";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { BOLD } from "@/theme/fonts";
import { DANGER } from "@/theme/colors";
import { useDispatch } from "react-redux";
import download from "downloadjs";
import { updateCurrentScreen } from "@/redux/slices/candidate";
import { updateAndThenGet } from "@/redux/slices/personal";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const Resume = ({ ...resume }) => {
  const dispatch = useDispatch();

  const [openDeleteScreen, setOpenDeleteScreen] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState("");

  const gotToResume = () => {
    dispatch(updateCurrentScreen("resume"));
  };

  const handleDelete = () => {
    dispatch(updateAndThenGet(selectedId));
  };

  const closeMessage = () => {
    setOpenDeleteScreen(false);
  };

  return (
    <>
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
            Resume
          </CustomTypography>
          <IconButton onClick={() => gotToResume()}>
            <AddIcon className="iconPointers" />
          </IconButton>
        </Stack>
        <CardContent sx={{ p: { md: "16px", xs: "16px 0", sm: "16px 0" } }}>
          {resume.resumeFileLocation.map((cv, index) => (
            <Stack
              key={index}
              direction={"row"}
              sx={{
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                padding: { md: "10px 15px", xs: "10px", sm: "10px" },
              }}
            >
              <CustomTypography
                sx={{ color: "#00339B", cursor: "pointer" }}
                onClick={async () => {
                  const res = await fetch(
                    ` https://preprod.recroot.au/api/downloadResume?resume=${cv?.resume?.replace(
                      /\\/g,
                      "/"
                    )}`
                  );
                  const blob = await res.blob();
                  download(blob, `${cv?.resumeName}`);
                }}
              >
                {cv?.resumeName}
              </CustomTypography>
              <Stack
                direction={"row"}
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <IconButton
                  onClick={async () => {
                    const res = await fetch(
                      ` https://preprod.recroot.au/api/downloadResume?resume=${cv.resume.replace(
                        /\\/g,
                        "/"
                      )}`
                    );
                    const blob = await res.blob();
                    download(blob, `${cv.resumeName}`);
                  }}
                >
                  <CloudDownloadIcon
                    className="iconPointers"
                    sx={{ color: "#00339B" }}
                  />
                </IconButton>
                <IconButton
                  onClick={() => {
                    setOpenDeleteScreen(() => true);
                    setSelectedId(cv?._id);
                  }}
                >
                  <DeleteIcon sx={{ color: DANGER }} className="iconPointers" />
                </IconButton>
              </Stack>
            </Stack>
          ))}
        </CardContent>
      </StyledCard>

      <Dialog
        open={openDeleteScreen}
        TransitionComponent={Transition}
        keepMounted
        onClose={closeMessage}
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
              closeMessage();
              handleDelete();
            }}
          >
            Yes
          </Button>
          <Button onClick={() => closeMessage()}>No</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

Resume.defaultProps = {
  resumeFileLocation: [],
};

export default React.memo(Resume);
