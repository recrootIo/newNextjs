import JobTitleContainer from "@/components/UploadResume/jobTitle/JobTitleContainer";
import ResumeUploadContainer from "@/components/UploadResume/resumeUpload/ResumeUploadContainer";
import { Box } from "@mui/material";
import { Parallax } from "@react-spring/parallax";
import React, { useRef, useState } from "react";

const Index = () => {
  const [createResume, setCreateResume] = useState({});
  const [currentStage, setCurrentStage] = useState(0);

  const parallax = useRef();
  const activeStep = parallax?.current?.offset || 0;
  const getTheScreenCount = 1;

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
  ];

  return (
    <Box>
      <Parallax
        ref={parallax}
        pages={getTheScreenCount}
        horizontal
        enabled={false}
      >
        {screens.map((screen) => screen.content)}
      </Parallax>
    </Box>
  );
};

export default Index;
