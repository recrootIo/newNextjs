import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import {
  CardContent,
  Grid,
  IconButton,
  Stack,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Button,
  Slide,
} from "@mui/material";
import React from "react";
import { StyledCard } from "../../ProfileStyles";
import AddIcon from "@mui/icons-material/Add";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { BOLD } from "@/theme/fonts";
import { DANGER } from "@/theme/colors";
import { LAZY } from "@/theme/spacings";
import { useDispatch } from "react-redux";
import { updateCurrentScreen } from "@/redux/slices/candidate";
import { deleteExperAndGet } from "@/redux/slices/personal";
import { retrieveGetSinExperience } from "@/redux/slices/personal";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const Experience = ({ ...experience }) => {
  const dispatch = useDispatch();
  const [openDeleteScreen, setOpenDeleteScreen] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState("");

  const gotToExperience = () => {
    dispatch(updateCurrentScreen("experience"));
  };

  const handleGetSingle = (id) => {
    dispatch(retrieveGetSinExperience(id));
    gotToExperience();
  };

  const handleDelete = () => {
    dispatch(deleteExperAndGet(selectedId));
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
            Experience
          </CustomTypography>
          <IconButton onClick={() => gotToExperience()}>
            <AddIcon sx={{ cursor: "pointer" }} />
          </IconButton>
        </Stack>
        <CardContent
          sx={{
            padding: { md: "30px 30px", xs: "16px 10px", sm: "16px 10px" },
          }}
        >
          <Stack sx={{ justifyContent: "space-between", gap: "20px" }}>
            {experience?.workExperience.map((ex, index) => (
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
                  <IconButton onClick={() => handleGetSingle(ex?._id)}>
                    <CreateIcon
                      sx={{ color: "#00339B", cursor: "pointer" }}
                      fontSize="small"
                    />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      setOpenDeleteScreen(() => true);
                      setSelectedId(ex?._id);
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
                          Role:
                        </CustomTypography>
                        <CustomTypography>{ex?.role}</CustomTypography>
                      </Stack>

                      <Stack direction={"row"} sx={{ gap: "10px" }}>
                        <CustomTypography sx={{ fontWeight: "700" }}>
                          Location:
                        </CustomTypography>
                        <CustomTypography>
                          {ex?.country} , {ex?.state} , {ex?.city}
                        </CustomTypography>
                      </Stack>

                      <Stack direction={"row"} sx={{ gap: "10px" }}>
                        <CustomTypography sx={{ fontWeight: "700" }}>
                          Total Experience:
                        </CustomTypography>
                        <CustomTypography>{ex?.experience}</CustomTypography>
                      </Stack>

                      <Stack direction={"row"} sx={{ gap: "10px" }}>
                        <CustomTypography sx={{ fontWeight: "700" }}>
                          From:
                        </CustomTypography>
                        <CustomTypography>{ex?.fromDate}</CustomTypography>
                      </Stack>
                    </Stack>
                  </Grid>
                  <Grid item md={6} xs={12} sm={12}>
                    <Stack sx={{ gap: LAZY }}>
                      <Stack direction={"row"} sx={{ gap: "10px" }}>
                        <CustomTypography sx={{ fontWeight: "700" }}>
                          Company:
                        </CustomTypography>
                        <CustomTypography>{ex?.companyName}</CustomTypography>
                      </Stack>

                      <Stack direction={"row"} sx={{ gap: "10px" }}>
                        <CustomTypography sx={{ fontWeight: "700" }}>
                          Employement:
                        </CustomTypography>
                        <CustomTypography></CustomTypography>
                      </Stack>

                      <Stack direction={"row"} sx={{ gap: "10px" }}>
                        <CustomTypography sx={{ fontWeight: "700" }}>
                          Salary:
                        </CustomTypography>
                        <CustomTypography></CustomTypography>
                      </Stack>

                      <Stack direction={"row"} sx={{ gap: "10px" }}>
                        <CustomTypography sx={{ fontWeight: "700" }}>
                          To:
                        </CustomTypography>
                        <CustomTypography>{ex?.toDate}</CustomTypography>
                      </Stack>
                    </Stack>
                  </Grid>
                  <Grid item md={12} xs={12} sm={12}>
                    <Stack sx={{ gap: LAZY }}>
                      <Stack direction={"row"} sx={{ gap: "10px" }}>
                        <CustomTypography sx={{ fontWeight: "700" }}>
                          Job Profile:
                        </CustomTypography>
                        <CustomTypography></CustomTypography>
                      </Stack>
                    </Stack>
                  </Grid>
                </Grid>
              </Stack>
            ))}
          </Stack>
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
          Are you sure you want to proceed with deleting your work experience ?
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

Experience.defaultProps = {
  workExperience: [],
};

export default Experience;
