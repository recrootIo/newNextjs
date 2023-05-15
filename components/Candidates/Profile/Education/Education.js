import { BOLD } from "@/theme/fonts";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import {
  CardContent,
  Grid,
  Stack,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Button,
  Slide,
} from "@mui/material";
import React, { useState } from "react";
import { StyledCard } from "../../ProfileStyles";
import AddIcon from "@mui/icons-material/Add";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { DANGER } from "@/theme/colors";
import { LAZY } from "@/theme/spacings";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { updateCurrentScreen } from "@/redux/slices/candidate";
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
  const [delEdu, setDelEdu] = useState("");

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

  return (
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
          Education
        </CustomTypography>
        <AddIcon className="iconPointers" onClick={() => gotToAddEducation()} />
      </Stack>
      <CardContent sx={{ padding: "30px 30px" }}>
        <Stack sx={{ justifyContent: "space-between", gap: "20px" }}>
          {resume?.education?.map((edi, index) => (
            <div key={index}>
              <Stack
                sx={{
                  backgroundColor: "#F6FCFF",
                  borderRadius: "10px",
                  padding: "20px 30px",
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
                  <DeleteIcon
                    sx={{ color: DANGER }}
                    onClick={() => {
                      handleClickOpenDel(resume._id);
                    }}
                  />
                </Stack>
                <Grid container>
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
            </div>
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
