import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import Salary from "./salarydetails";

const SalaryDetailsContainer = ({ ...props }) => {
  const { position } = props;
  return (
    <ParallaxLayer offset={position} speed={0.9}>
      <Salary {...props} />
    </ParallaxLayer>
  );
};

export default SalaryDetailsContainer;
