import JobTitleContainer from "@/components/UploadResume/jobTitle/JobTitleContainer";
import LocationDetailsContainer from "@/components/UploadResume/locationDetails/LocationDetailsContainer";
import NoticePeriodContainer from "@/components/UploadResume/noticePeriod/NoticePeriodContainer";
import ResumeUploadContainer from "@/components/UploadResume/resumeUpload/ResumeUploadContainer";
import SalaryDetailsContainer from "@/components/UploadResume/salaryDetails/SalaryDetailsContainer";
import { openAlert } from "@/redux/slices/alert";
import { updatePercent } from "@/redux/slices/personal";
import { updateFinalResumeForm } from "@/redux/slices/uploadingResume";
import { DANGER } from "@/theme/colors";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { Backdrop, Box, CircularProgress, Stack } from "@mui/material";
import { Parallax } from "@react-spring/parallax";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";

const Index = () => {
  const [createResume, setCreateResume] = useState({});
  const [totalExperience, setTotalExperience] = useState("");
  const [inputPersonalDetailsCountry, setinputPersonalDetailsCountry] =
    useState({});
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const parallax = useRef();
  const getTheScreenCount = 5;

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };

  const saveAllData = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("User"));
    loggedInUser.User.profilePercentage = 70;
    localStorage.setItem("User", JSON.stringify(loggedInUser));

    dispatch(updatePercent(70));
    setOpen(true);

    dispatch(
      updateFinalResumeForm({
        inputPersonalDetailsCountry,
        createResume,
        totalExperience,
      })
    )
      .unwrap()
      .then(() => {
        setOpen(false);
        dispatch(
          openAlert({
            type: SUCCESS,
            message: "Your Information saved successfully",
          })
        );
      })
      .catch(() => {
        setOpen(false);
        openAlert({
          type: DANGER,
          message: "Information could not be saved saved successfully",
        });
      });
  };

  const screens = [
    {
      content: (
        <ResumeUploadContainer
          scroll={scroll}
          setCreateResume={setCreateResume}
          position={0}
        />
      ),
    },
    {
      content: (
        <JobTitleContainer
          scroll={scroll}
          setCreateResume={setCreateResume}
          setTotalExperience={setTotalExperience}
          position={1}
        />
      ),
    },
    {
      content: (
        <LocationDetailsContainer
          scroll={scroll}
          setCreateResume={setCreateResume}
          setinputPersonalDetailsCountry={setinputPersonalDetailsCountry}
          position={2}
        />
      ),
    },
    {
      content: (
        <NoticePeriodContainer
          scroll={scroll}
          setCreateResume={setCreateResume}
          position={3}
        />
      ),
    },
    {
      content: (
        <SalaryDetailsContainer
          scroll={scroll}
          setCreateResume={setCreateResume}
          position={4}
          saveAllData={saveAllData}
        />
      ),
    },
  ];
  return (
    <Box>
      <div
        style={{
          backgroundImage: `url("/bg.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Box className="topbar"></Box>
        <Parallax
          ref={parallax}
          pages={getTheScreenCount}
          horizontal
          enabled={false}
        >
          {screens.map((screen, index) => (
            <div key={index}>{screen.content}</div>
          ))}
        </Parallax>
      </div>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={open}
      >
        <Stack direction={"column"} sx={{ gap: "30px", width: 50 }}>
          <CircularProgress color="inherit" />
          <Box
            sx={{
              top: 100,
              left: 10,
              bottom: 0,
              right: 10,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CustomTypography component="div" variant="h6" gutterBottom>
              Saving your Information please wait.
            </CustomTypography>
          </Box>
        </Stack>
      </Backdrop>
    </Box>
  );
};

export default Index;
