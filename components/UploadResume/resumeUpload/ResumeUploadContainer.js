import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import AddResume from "./resumeUpload";

const ResumeUploadContainer = ({ ...props }) => {
  const { position } = props;
  return (
    <ParallaxLayer offset={position} speed={0.9}>
      <AddResume {...props} />
    </ParallaxLayer>
  );
};

export default ResumeUploadContainer;
