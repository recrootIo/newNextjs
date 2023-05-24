import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Container,
  IconButton,
  Avatar,
  Dialog,
  Button,
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import { NEUTRAL } from "@/theme/colors";
import { UploadPhoto } from "@/components/UploadPhoto/UploadPhoto";
import { useDispatch, useSelector } from "react-redux";
import { cmpLogo, updateFinalPhoto } from "@/redux/slices/company";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const CandidateProfileHeader = ({ ...data }) => {
  const {
    firstName,
    jobTitle,
    email,
    lastName,
    mobileNumber,
    resume,
    profilePercentage,
  } = data;

  const fullName = `${firstName} ${lastName}`;
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");
  const [open, setOpen] = React.useState(false);
  const [first, setFirst] = useState("");
  const [fileNames, setFileNames] = useState("");
  const [srcsjjj, setSrcsjjj] = useState("");

  const users = useSelector((state) => state.personal.data);
  const photoss = useSelector(
    (state) => state.personal.data.profpicFileLocation
  );

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("User"));
    loggedInUser.User.profpicFileLocation.photo = photoss && photoss.photo;
    localStorage.setItem("User", JSON.stringify(loggedInUser));
    if (photoss === undefined) {
    } else {
      setSrcsjjj(
        `http://localhost:3000/api/openProfpic?photo=${photoss.photo}`
      );
    }
  }, [photoss]);

  function handleImageChange(file) {
    setFirst(file);
    setFileNames(file.name);
  }

  const handleClickOpen = () => {
    setOpen(true);
    setFirst("");
    setFileNames("");
  };

  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(cmpLogo(first));
    // dispatch(updateFinalPhoto(first)).then(
    //   notify("Your Company Logo Was Updated")
    // );
    dispatch(updateFinalPhoto(first));
    setOpen(false);
  };

  const handleCloseP = () => {
    setOpen(false);
    setFullWidth(true);
    setMaxWidth("sm");
  };

  const imageUrl = photoss?.photo
    ? srcsjjj
    : `data:image/jpeg;base64,${users?.headShot}`;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundImage: 'url("/CandiHeaderImg.svg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: { md: "330px", xs: "100%", sm: "100%" },
        pb: "40px",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "space-between", md: "flex-end" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "flex-start", md: "flex-end" },
            }}
          >
            <IconButton
              aria-label="notifications"
              size="large"
              sx={{
                color: "white",
                width: "20px",
                p: 0,
                mt: { xs: "12px", md: 0 },
              }}
            >
              <NotificationsOutlinedIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            {profilePercentage < 70 && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  position: "absolute",
                  backgroundImage: 'url("/profileprecentageborder.png")',
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  width: "70px",
                  mt: "5px",
                }}
              >
                <CustomTypography
                  variant="h6"
                  sx={{
                    position: "relative",
                    fontFamily: "Inter-bold",
                    zIndex: "1",
                    top: "25px",
                    left: "25px",
                    fontSize: "12px",
                  }}
                >
                  {profilePercentage}%
                </CustomTypography>
                <CustomTypography
                  variant="subtitle1"
                  sx={{
                    mt: "25px",
                    fontSize: { xs: "10px", md: "14px" },
                    position: "relative",
                    top: "25px",
                    color: NEUTRAL,
                    textAlign: "center",
                  }}
                >
                  Profile completed (Excellent)
                </CustomTypography>
              </Box>
            )}
          </Box>
        </Box>
        <Grid container spacing={2}>
          <Grid
            item
            md={3}
            xs={12}
            sm={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Avatar
                alt="Remy Sharp"
                src={imageUrl}
                sx={{
                  width: "200px",
                  height: "200px",
                  border: "12px solid rgb(240, 240, 240, 0.3)",
                }}
              />
              <IconButton
                onClick={handleClickOpen}
                sx={{
                  position: "relative",
                  top: "-54px",
                  left: "164px",
                  background: "white",
                  border: "3px solid rgba(3, 66, 117, 0.6)",
                  height: "30px",
                  width: "30px",
                }}
              >
                <EditSharpIcon
                  sx={{ color: "rgba(3, 66, 117, 0.6)", fontSize: "0.8em" }}
                />
              </IconButton>
              <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open}
                onClose={handleClose}
              >
                <Box sx={{ p: "40px" }}>
                  <CustomTypography variant="h5" sx={{ textAlign: "center" }}>
                    Edit Profile Photo
                  </CustomTypography>
                  <UploadPhoto handleChange={handleImageChange} />
                  {first !== "" ? (
                    <>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        <img
                          alt=""
                          src={first !== "" ? URL.createObjectURL(first) : ""}
                          width="123px"
                          height="118px"
                          style={{ borderRadius: "10px", objectFit: "contain" }}
                        />
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <CustomTypography variant="h6">
                            File Name :{" "}
                          </CustomTypography>{" "}
                          <CustomTypography variant="h7">
                            {fileNames}
                          </CustomTypography>
                        </Box>
                      </Box>
                    </>
                  ) : (
                    ""
                  )}
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      variant="contained"
                      sx={{ mt: "10px", backgroundColor: "#4fa9ff" }}
                      onClick={() => {
                        handleClose();
                      }}
                    >
                      save
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{ mt: "10px", ml: "5px", color: "#4fa9ff" }}
                      onClick={() => {
                        handleCloseP();
                      }}
                    >
                      Cancel
                    </Button>
                  </Box>
                </Box>
              </Dialog>
            </Box>
          </Grid>

          {/* <EditRounded sx={{ color: "#ffff", top: "-36px", left: "34px" }} /> */}

          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box sx={{ width: "100%" }}>
              <CustomTypography
                variant="h4"
                color="white"
                fontFamily="Inter-bold"
                gutterBottom
              >
                {fullName}
              </CustomTypography>
              <CustomTypography variant="subtitle1" color="white" gutterBottom>
                {jobTitle} {bull} {resume?.totalWorkExperience} years
              </CustomTypography>

              <Box
                sx={{
                  display: "flex",
                  gap: { md: "20px", xs: "10px", sm: "10px" },
                  mt: "25px",
                  flexDirection: { md: "row", xs: "column", sm: "column" },
                }}
              >
                <CustomTypography
                  variant="subtitle1"
                  color="white"
                  minWidth="40%"
                  gutterBottom
                >
                  <PlaceOutlinedIcon /> Bhopal, India
                </CustomTypography>
                <CustomTypography
                  variant="subtitle1"
                  color="white"
                  gutterBottom
                >
                  <PhoneOutlinedIcon /> {mobileNumber}
                </CustomTypography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  gap: { md: "20px", xs: "10px", sm: "10px" },
                  flexDirection: { md: "row", xs: "column", sm: "column" },
                }}
              >
                <CustomTypography
                  variant="subtitle1"
                  color="white"
                  minWidth="40%"
                  gutterBottom
                >
                  <EmailOutlinedIcon /> {email}
                </CustomTypography>
                <CustomTypography
                  variant="subtitle1"
                  color="white"
                  gutterBottom
                >
                  <LocalAtmOutlinedIcon /> {resume?.currentSalary?.salary}
                </CustomTypography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            md={3}
            xs={12}
            sm={12}
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            {profilePercentage < 70 && (
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  flexDirection: "column",
                  justifyContent: "center",
                  position: "absolute",
                  backgroundImage: 'url("/profileprecentageborder.png")',
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  height: { xs: "100px", md: "200px" },
                }}
              >
                <CustomTypography
                  variant="h6"
                  sx={{
                    position: "absolute",
                    fontFamily: "Inter-bold",
                    zIndex: "1",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {profilePercentage}%
                </CustomTypography>
                <CustomTypography
                  variant="subtitle1"
                  sx={{
                    mt: "25px",
                    fontSize: "14px",
                    position: "relative",
                    top: "100px",
                    color: NEUTRAL,
                  }}
                >
                  Profile completed (Excellent)
                </CustomTypography>
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CandidateProfileHeader;
