import * as React from "react";
import {
  Box,
  Grid,
  Container,
  IconButton,
  Avatar,
  Button,
  Typography,
  Dialog,
  Skeleton,
  Stack,
  // Avatar
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import { EditRounded } from "@mui/icons-material";
import {
  addProfphoto,
  getPercentage,
  retrievePersonal,
  updatePercent,
} from "@/redux/slices/personal";
import { UploadPhoto } from "@/utils/UploadPhoto";
import { useDispatch, useSelector } from "react-redux";
import { NEUTRAL } from "@/theme/colors";
import { openAlert } from "@/redux/slices/alert";
import { SUCCESS } from "@/utils/constants";
import CalculatePercentage from "@/utils/CalculatePercentange";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const CandidateProfileHeader = (data) => {
  const photoss = useSelector(
    (state) => state.personal?.data?.profpicFileLocation
  );

  const personal = useSelector((state) => state.personal?.data);

  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");
  const [open, setOpen] = React.useState(false);
  const [photo, setPhoto] = React.useState("");
  const [fileNames, setFileNames] = React.useState("");
  const [srcsjjj, setSrcsjjj] = React.useState("");
  const [loadimg, setloadimg] = React.useState(false);

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setPhoto("");
    setFileNames("");
  };

  const handleChangePhoto = (file) => {
    setPhoto(file);
    setFileNames(file.name);
  };

  const Edit = () => {
    dispatch(addProfphoto(photo)).then((res) => {
      dispatch(
        openAlert({
          type: SUCCESS,
          message: "Success",
        })
      );
      dispatch(retrievePersonal());
      setloadimg(false);
    });
    setFullWidth(true);
    setMaxWidth("sm");
    setPhoto("");
    setFileNames("");
    handleClose();
  };

  React.useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("User"));
    loggedInUser.User.profpicFileLocation.photo = photoss && photoss.photo;
    localStorage.setItem("User", JSON.stringify(loggedInUser));
    if (photoss === undefined) {
    } else {
      setSrcsjjj(
        `https://api.arinnovate.io/api/openProfpic?photo=${photoss.photo}`
      );
    }

    dispatch(getPercentage());
  }, [photoss, dispatch]);

  const imageUrl = photoss?.photo ? srcsjjj : "";

  console.log(data?.profilePercentage, "data?.profilePercentage");

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundImage: 'url("/CandiHeaderImg.svg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        p: "40px",
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
            {data?.profilePercentage < 70 && (
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
                    left: "22px",
                    fontSize: "12px",
                  }}
                >
                  {data?.profilePercentage}%
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
            sm={3}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {loadimg === true ? (
              <Skeleton variant="circular" width={200} height={200} />
            ) : (
              <Avatar
                src={imageUrl}
                sx={{
                  width: { sm: "200px", xs: "150px" },
                  height: { sm: "200px", xs: "150px" },
                  border: "10px solid #4fa9ff",
                }}
              />
            )}
            <IconButton
              sx={{
                position: "relative",
                top: "70px",
                left: "-60px",
                backgroundColor: "#4fa9ff",
              }}
              onClick={() => {
                handleClickOpen();
              }}
            >
              <EditRounded sx={{ color: "#ffff" }} />
            </IconButton>
          </Grid>
          <Grid
            item
            sm={6}
            xs={12}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box sx={{ width: "100%" }}>
              {data?.firstName && (
                <CustomTypography
                  variant="h4"
                  color="white"
                  fontFamily="Inter-bold"
                  gutterBottom
                >
                  {data?.firstName}
                </CustomTypography>
              )}
              {(data?.jobTitle || data?.resume?.totalWorkExperience) && (
                <CustomTypography
                  variant="subtitle1"
                  color="white"
                  gutterBottom
                >
                  {data?.jobTitle}
                  {bull} {data?.resume?.totalWorkExperience} Years
                </CustomTypography>
              )}

              <Box
                sx={{
                  display: "flex",
                  gap: "20px",
                  mt: "25px",
                  flexWrap: "wrap",
                }}
              >
                <Box>
                  {(data?.resume?.location?.city ||
                    data?.resume?.location?.state ||
                    data?.resume?.location?.country) && (
                    <CustomTypography
                      variant="subtitle1"
                      color="white"
                      minWidth="30%"
                      gutterBottom
                    >
                      <PlaceOutlinedIcon /> {data?.resume?.location?.city},
                      {data?.resume?.location?.state},
                      {data?.resume?.location?.country}.
                    </CustomTypography>
                  )}

                  {data?.mobile && (
                    <CustomTypography
                      variant="subtitle1"
                      color="white"
                      gutterBottom
                    >
                      <PhoneOutlinedIcon />{" "}
                      {data?.mobile ? `+${data?.mobile}` : "No Provided"}
                    </CustomTypography>
                  )}
                </Box>

                <Box>
                  {data?.email && (
                    <CustomTypography
                      variant="subtitle1"
                      color="white"
                      minWidth="30%"
                      gutterBottom
                    >
                      <EmailOutlinedIcon /> {data?.email}
                    </CustomTypography>
                  )}

                  {(data?.resume?.currentSalary?.salary ||
                    data?.resume?.currentSalary?.salary ||
                    data?.resume?.currentSalary?.denomination) && (
                    <CustomTypography
                      variant="subtitle1"
                      color="white"
                      gutterBottom
                    >
                      <LocalAtmOutlinedIcon />
                      {data?.resume?.currentSalary?.salary !== null
                        ? `${data?.resume?.currentSalary?.salary} ${data?.resume?.currentSalary?.denomination}`
                        : "No Provided"}
                    </CustomTypography>
                  )}
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: { sm: "flex", xs: "none" },
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            {personal?.profilePercentage < 70 && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  position: "absolute",
                  top: "133px",
                  backgroundImage: 'url("/profileprecentageborder.png")',
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  height: "200px",
                  flexWrap: "wrap",
                }}
              >
                <CustomTypography
                  variant="h6"
                  sx={{
                    position: "absolute",
                    fontFamily: "Inter-bold",
                    zIndex: "1",
                    fontSize: "2rem",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {data?.profilePercentage}%
                </CustomTypography>

                <CustomTypography
                  variant="subtitle1"
                  sx={{
                    mt: "20px",
                    fontSize: "17px",
                    position: "relative",
                    top: "50px",
                    color: NEUTRAL,
                    flexWrap: "wrap",
                    width: "200px",
                  }}
                ></CustomTypography>
              </Box>
            )}
          </Grid>
          {personal?.profilePercentage < 70 && (
            <Grid md={12}>
              <Stack direction="row" sx={{ justifyContent: "flex-end" }}>
                <CustomTypography
                  variant="subtitle1"
                  sx={{
                    fontSize: "17px",
                    position: "relative",
                    color: NEUTRAL,
                    flexWrap: "wrap",
                    width: { md: "300px", xs: "100%", sm: "100%" },
                    textAlign: "right",
                    fontWeight: "900",
                  }}
                >
                  Enhance your profile by adding more information to aim for a
                  minimum of 70%.
                </CustomTypography>
              </Stack>
            </Grid>
          )}
        </Grid>

        <Dialog
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          open={open}
          onClose={handleClose}
        >
          <Box sx={{ p: "40px" }}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              Edit Profile Photo
            </Typography>
            <UploadPhoto handleChange={handleChangePhoto} />
            {photo !== undefined ? (
              <>
                {" "}
                <Typography variant="h6">File Name : </Typography>
                <Typography variant="h7">{fileNames}</Typography>
              </>
            ) : (
              ""
            )}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Button
                style={{
                  backgroundColor: "#4fa9ff",
                  color: NEUTRAL,
                  minWidth: "64px",
                  borderRadius: "4px",
                }}
                onClick={() => {
                  Edit();
                }}
              >
                save
              </Button>
              <Button
                variant="outlined"
                sx={{ color: "#4fa9ff" }}
                onClick={() => {
                  handleClose();
                }}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Dialog>
      </Container>
    </Box>
  );
};

export default React.memo(CandidateProfileHeader);
