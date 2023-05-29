import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import JobTitle from "./jobTitle";

const JobTitleContainer = ({ ...props }) => {
  const { position } = props;

  return (
    <ParallaxLayer offset={position} speed={0.9}>
      <JobTitle {...props} />
    </ParallaxLayer>
  );
};

export default JobTitleContainer;
