"use client";
import JobTitleContainer from "@/components/UploadResume/jobTitle/JobTitleContainer";
import LocationDetailsContainer from "@/components/UploadResume/locationDetails/LocationDetailsContainer";
import NoticePeriodContainer from "@/components/UploadResume/noticePeriod/NoticePeriodContainer";
import ResumeUploadContainer from "@/components/UploadResume/resumeUpload/ResumeUploadContainer";
import SalaryDetailsContainer from "@/components/UploadResume/salaryDetails/SalaryDetailsContainer";
import { openAlert } from "@/redux/slices/alert";
import {
  applyJobs,
  retrievePersonal,
  updatePercent,
} from "@/redux/slices/personal";
import { updateFinalResumeForm } from "@/redux/slices/uploadingResume";
import { DANGER } from "@/theme/colors";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { Backdrop, Box, CircularProgress, Stack } from "@mui/material";
import { Parallax } from "@react-spring/parallax";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { SUCCESS } from "@/utils/constants";
import jobsService from "@/redux/services/job.service";
import { removeApplyPath } from "@/redux/slices/applyJobs";

const UploadResume = () => {
  // access cv details

  const dispatch = useDispatch();
  const router = useRouter();
  const parallax = useRef();
  const getTheScreenCount = 5;

  const salary = useSelector((state) => state.apply?.salary);
  const coverSin = useSelector((state) => state.personal?.cover?._id);
  const resume = useSelector((data) => data?.resume);
  const details = useSelector((state) => state?.personal?.data);
  const { question } = useSelector((state) => state?.personal?.ids);
  const resumes_id =
    useSelector((state) => state?.personal?.data?.resume)?.resumeFileLocation[0]
      ?._id || false;
  removeApplyPath;
  const selector = useSelector((state) => state?.apply?.applyPath);

  const [createResume, setCreateResume] = useState({});
  const [totalExperience, setTotalExperience] = useState("");
  const [inputPersonalDetailsCountry, setinputPersonalDetailsCountry] =
    useState({});
  const [open, setOpen] = useState(false);

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };
  useEffect(() => {
    const disableBackNavigation = () => {
      window.history.pushState(null, null, window.location.href);
      window.onpopstate = () => {
        window.history.go(1);
      };
    };

    disableBackNavigation();

    return () => {
      window.onpopstate = null;
    };
  }, []);

  useEffect(() => {
    dispatch(retrievePersonal()).then((res) => {
      if (res?.payload?.resume?.resumeFileLocation?.length > 0) {
        parallax.current.scrollTo(1);
      }
    });
  }, [dispatch]);

  const saveAllData = (
    expectedSalary = null,
    currentSalary = null,
    currency = null,
    apply = false
  ) => {
    const loggedInUser = JSON.parse(localStorage.getItem("User"));
    loggedInUser.User.profilePercentage = 70;
    localStorage.setItem("User", JSON.stringify(loggedInUser));
    let newCreateResume = createResume;

    if (expectedSalary && currentSalary && currency) {
      setCreateResume((state) => ({
        ...state,
        salaryCurrency: currency,
        expectedSalary,
        currentSalary,
      }));
      newCreateResume.salaryCurrency = currency;
      newCreateResume.expectedSalary = expectedSalary;
      newCreateResume.currentSalary = currentSalary;
    }

    dispatch(updatePercent(70));
    setOpen(true);
    dispatch(
      updateFinalResumeForm({
        inputPersonalDetailsCountry,
        createResume: newCreateResume,
        totalExperience,
      })
    )
      .unwrap()
      .then(() => {
        dispatch(
          openAlert({
            type: SUCCESS,
            message: "Your Information saved successfully",
          })
        );

        if (selector && apply) {
          dispatch(retrievePersonal()).then(() => {
            applyFirstJob();
          });
          dispatch(removeApplyPath());
        } else {
          setOpen(false);
        }
        router.push("/jobs");
      })
      .catch(() => {
        setOpen(false);
        openAlert({
          type: DANGER,
          message: "Information could not be saved saved successfully",
        });
        return;
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
          url={selector}
        />
      ),
    },
  ];

  console.log(selector, "selector");

  const applyFirstJob = async () => {
    const regex = /[\?&]jobid=([^&#]*)/i;
    let match = regex.exec(selector);
    match = match ? match[1] : null;
    let job;

    const newService = new jobsService();
    await newService
      .getSingleJob(match)
      .then((res) => {
        job = res?.data?.data;
      })
      .catch((error) => console.log(error));

    const final = {
      candidateId: details?._id,
      companyId: job?.company?._id,
      coverId: coverSin,
      jobId: match,
      question: question,
      resumeId: resumes_id,
      salary: salary,
    };

    dispatch(applyJobs(final))
      .then(() => {
        setOpen(false);
        dispatch(removeApplyPath());
        router.push("/");
      })
      .catch(() => {
        setOpen(false);
        openAlert({
          type: DANGER,
          message: "Information could not be saved saved successfully",
        });
      });
  };

  return (
    <Box>
      <Box
        style={{
          backgroundImage: `url("/bg.webp")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "950px",
          width: "100vw",
        }}
      >
        <Box className="topbar"></Box>
        <Parallax
          style={{ position: "inherit" }}
          ref={parallax}
          pages={getTheScreenCount}
          horizontal
          enabled={false}
        >
          {screens.map((screen, index) => (
            <div key={index}>{screen.content}</div>
          ))}
        </Parallax>
      </Box>
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

export default UploadResume;
