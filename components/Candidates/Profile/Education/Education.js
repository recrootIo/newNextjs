import { BOLD } from "@/theme/fonts";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import {
  Button,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Slide,
  Stack,
} from "@mui/material";
import React from "react";
import { StyledCard } from "../../ProfileStyles";
import AddIcon from "@mui/icons-material/Add";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { DANGER } from "@/theme/colors";
import { LAZY } from "@/theme/spacings";
import { updateCurrentScreen } from "@/redux/slices/candidate";
import { retrieveGetSinEduca } from "@/redux/slices/personal";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { deleteEducaAndGet } from "@/redux/slices/personal";
// import { logout } from "@/redux/slices/auth";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const Education = ({ ...resume }) => {
  const [openDel, setOpenDel] = React.useState(false);
  const dispatch = useDispatch();
  const gotToAddEducation = () => {
    dispatch(updateCurrentScreen("education"));
  };
  const [delEdu, setDelEdu] = React.useState("");

  const handleClickOpenDel = (id) => {
    setDelEdu(id);
    setOpenDel(true);
  };

  const handleCloseDel = () => {
    setOpenDel(false);
  };

  // const navigate = useNavigate();
  const handleDelete = () => {
    dispatch(deleteEducaAndGet(delEdu));
    // .then((res) => {
    //   if (res.error !== undefined) {
    //     res.error.message === "Request failed with status code 401" ||
    //     "Request failed with status code 403"
    //       ? dispatch(logout()).then(() => {
    //           navigate("/signin", { state: true });
    //         })
    //       : navigate(1);
    //   } else {
    //     notify3();
    //   }
    // })
    // .catch((error) => {
    //   if (
    //     error.message === "Request failed with status code 401" ||
    //     "Request failed with status code 403"
    //   ) {
    //     dispatch(logout()).then(() => {
    //       navigate("/signin", { state: true });
    //     });
    //   }
    // });
    // };
  };

  const gotToEducation = () => {
    dispatch(updateCurrentScreen("education"));
  };

  const handleGetSingle = (id) => {
    dispatch(retrieveGetSinEduca(id));
    gotToEducation();
  };

  return (
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
          Education
        </CustomTypography>
        <IconButton onClick={() => gotToEducation()}>
          <AddIcon sx={{ cursor: "pointer" }} />
        </IconButton>
      </Stack>
      <CardContent
        sx={{ padding: { md: "30px 30px", xs: "16px 10px", sm: "16px 10px" } }}
      >
        <Stack sx={{ justifyContent: "space-between", gap: "20px" }}>
          {resume?.education?.map((edi, index) => (
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
                <IconButton onClick={() => handleGetSingle(edi?._id)}>
                  <CreateIcon
                    sx={{ color: "#00339B", cursor: "pointer" }}
                    fontSize="small"
                  />
                </IconButton>
                <IconButton>
                  <DeleteIcon sx={{ color: DANGER }} />
                </IconButton>
              </Stack>
              <Grid container spacing={2}>
                <Grid item md={6}>
                  <Stack sx={{ gap: LAZY }}>
                    <Stack direction={"row"} sx={{ gap: "10px" }}>
                      <CustomTypography sx={{ fontWeight: "700" }}>
                        Degree:
                      </CustomTypography>
                      <CustomTypography>{edi?.degreeName}</CustomTypography>
                    </Stack>

                    <Stack direction={"row"} sx={{ gap: "10px" }}>
                      <CustomTypography sx={{ fontWeight: "700" }}>
                        Institute:
                      </CustomTypography>
                      <CustomTypography>{edi?.collegeName}</CustomTypography>
                    </Stack>

                    <Stack direction={"row"} sx={{ gap: "10px" }}>
                      <CustomTypography sx={{ fontWeight: "700" }}>
                        From:
                      </CustomTypography>
                      <CustomTypography>{edi?.fromDate}</CustomTypography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item md={6}>
                  <Stack sx={{ gap: LAZY }}>
                    <Stack direction={"row"} sx={{ gap: "10px" }}>
                      <CustomTypography sx={{ fontWeight: "700" }}>
                        Specialization:
                      </CustomTypography>
                      <CustomTypography>{edi?.graduate}</CustomTypography>
                    </Stack>

                    <Stack direction={"row"} sx={{ gap: "10px" }}>
                      <CustomTypography sx={{ fontWeight: "700" }}>
                        Location:
                      </CustomTypography>
                      <CustomTypography>
                        {edi?.country} , {edi?.state} , {edi?.city}
                      </CustomTypography>
                    </Stack>

                    <Stack direction={"row"} sx={{ gap: "10px" }}>
                      <CustomTypography sx={{ fontWeight: "700" }}>
                        To:
                      </CustomTypography>
                      <CustomTypography>{edi?.toDate}</CustomTypography>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
          ))}
        </Stack>
        <Dialog
          open={openDel}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleCloseDel}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>
            {
              "Are you sure you want to proceed with deleting your educational information ?"
            }
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                handleCloseDel();
                handleDelete(resume._id);
              }}
            >
              Yes
            </Button>
            <Button onClick={handleCloseDel}>No</Button>
          </DialogActions>
        </Dialog>
      </CardContent>
    </StyledCard>
  );
};

Education.defaultProps = {
  education: [],
};

export default React.memo(Education);
