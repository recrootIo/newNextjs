import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import NoticePeriodInputs from "./NoticePeriodInputs";

const NoticePeriodContainer = ({ ...props }) => {
  const { position } = props;
  return (
    <ParallaxLayer offset={position} speed={0.9}>
      <NoticePeriodInputs {...props} />
    </ParallaxLayer>
  );
};

export default NoticePeriodContainer;
