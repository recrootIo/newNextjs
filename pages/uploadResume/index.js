import JobTitleContainer from "@/components/UploadResume/jobTitle/JobTitleContainer";
import LocationDetailsContainer from "@/components/UploadResume/locationDetails/LocationDetailsContainer";
import NoticePeriodContainer from "@/components/UploadResume/noticePeriod/NoticePeriodContainer";
import ResumeUploadContainer from "@/components/UploadResume/resumeUpload/ResumeUploadContainer";
import SalaryDetailsContainer from "@/components/UploadResume/salaryDetails/SalaryDetailsContainer";
import { Box } from "@mui/material";
import { Parallax } from "@react-spring/parallax";
import React, { useRef, useState } from "react";

const Index = () => {
  const [createResume, setCreateResume] = useState({});
  const [currentStage, setCurrentStage] = useState(0);

  const parallax = useRef();
  const activeStep = parallax?.current?.offset || 0;
  const getTheScreenCount = 5;

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
      setCurrentStage(to);
    }
  };

  const screens = [
    {
      content: (
        <ResumeUploadContainer
          scroll={scroll}
          setCreateResume={setCreateResume}
          setCurrentStage={setCurrentStage}
          position={0}
        />
      ),
    },
    {
      content: (
        <JobTitleContainer
          scroll={scroll}
          setCreateResume={setCreateResume}
          setCurrentStage={setCurrentStage}
          position={1}
        />
      ),
    },
    {
      content: (
        <LocationDetailsContainer
          scroll={scroll}
          setCreateResume={setCreateResume}
          setCurrentStage={setCurrentStage}
          position={2}
        />
      ),
    },
    {
      content: (
        <NoticePeriodContainer
          scroll={scroll}
          setCreateResume={setCreateResume}
          setCurrentStage={setCurrentStage}
          position={3}
        />
      ),
    },
    {
      content: (
        <SalaryDetailsContainer
          scroll={scroll}
          setCreateResume={setCreateResume}
          setCurrentStage={setCurrentStage}
          position={4}
        />
      ),
    },
  ];
  return (
    <Box>
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
    </Box>
  );
};

export default Index;
