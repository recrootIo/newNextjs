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

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const CandidateProfileHeader = (data) => {
  console.log(data, "data");
  const photoss = useSelector(
    (state) => state.personal?.data?.profpicFileLocation
  );

  const percent = useSelector((data) => data.personal.percentage);
  const users = useSelector((state) => state.personal?.data?.resume);
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

  const Edit = (photo) => {
    setloadimg(true);
    dispatch(addProfphoto(photo)).then((res) => {
      if (res?.payload === "photo save succesfully") {
        setTimeout(() => {
          dispatch(retrievePersonal()).then(setloadimg(false));
        }, 1500);
      }
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

  const skill =
    percent?.skills?.length <= users?.skills?.length
      ? percent?.skills?.percent
      : percent?.skills?.length / 2 === users?.skills?.length
      ? percent?.skills?.percent / 2
      : 0;

  const Experience =
    percent?.workExperince?.length <= users?.workExperience?.length
      ? percent?.workExperince?.percent
      : 0;

  const Education =
    percent?.education?.length <= users?.education?.length
      ? percent?.education?.percent
      : percent?.education?.length / 2 === users?.education?.length
      ? percent?.education?.percent / 2
      : 0;

  const Certificate =
    percent?.certificate?.length <= users?.certificateFileLocation?.length
      ? percent?.certificate?.percent
      : percent?.certificate?.length / 2 ===
        users?.certificateFileLocation?.length
      ? percent?.certificate?.percent / 2
      : 0;

  const persan =
    (personal?.about !== null ? 1 : 0) +
    (users?.languages?.length > 0 ? 1 : 0) +
    (users?.currentOffer !== undefined ? 1 : 0) +
    (personal?.jobTitle !== undefined ? 1 : 0) +
    (personal?.mobile !== undefined && personal?.mobile !== null ? 1 : 0);

  const persanRank =
    persan === percent?.personalInfo?.personal?.length
      ? percent?.personalInfo?.personal?.percent
      : 0;

  const countrs =
    (users?.location?.country !== undefined ? 1 : 0) +
    (users?.location?.state !== undefined ? 1 : 0) +
    (users?.location?.city !== undefined ? 1 : 0) +
    (users?.totalWorkExperience !== undefined ? 1 : 0);

  const countries =
    countrs === percent?.personalInfo?.countries?.length
      ? percent?.personalInfo?.countries?.percent
      : 0;

  const essen =
    (users?.notice !== undefined ? 1 : 0) +
    (users?.expectedSalary !== undefined ? 1 : 0) +
    (users?.currentSalary !== undefined ? 1 : 0) +
    (users?.salaryCurrency !== undefined ? 1 : 0) +
    (users?.workPrefence !== undefined ? 1 : 0);

  const essential =
    essen === percent?.personalInfo?.essent?.length
      ? percent?.personalInfo?.essent?.percent
      : 0;

  const finalPercent =
    skill +
    Experience +
    Education +
    Certificate +
    // Social +
    persanRank +
    countries +
    essential;

  console.log(finalPercent, "finalPercent");

  const imageUrl = photoss?.photo ? srcsjjj : "";

  const addPercent = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("User"));
    loggedInUser.User.profilePercentage = finalPercent;
    localStorage.setItem("User", JSON.stringify(loggedInUser));
    dispatch(updatePercent(finalPercent)).then(() => {
      dispatch(retrievePersonal());
    });
  };

  React.useEffect(() => {
    addPercent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finalPercent]);

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
            {/* {data?.profilePercentage < 70 && ( */}
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
              >
                {/* Enhance your profile by adding more information to aim for a
                  minimum of 70%. */}
              </CustomTypography>
            </Box>
            {/* )} */}
          </Grid>
          {/* {data?.profilePercentage < 70 && ( */}
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
          {/* )} */}
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
              <button
                style={{
                  backgroundColor: "#4fa9ff",
                  color: NEUTRAL,
                  minWidth: "64px",

                  borderRadius: "4px",
                }}
                onClick={() => {
                  Edit(photo);
                }}
              >
                save
              </button>
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
