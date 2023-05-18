import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import Salary from "./salarydetails";

export const metadata = {
  title: "Salary Details",
};

const SalaryDetailsContainer = ({ ...props }) => {
  const { position } = props;
  return (
    <ParallaxLayer offset={position} speed={0.9}>
      <section>
        <Salary {...props} />
      </section>
    </ParallaxLayer>
  );
};

export default SalaryDetailsContainer;
