import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import NoticePeriod from "./NoticePeriod";

const NoticePeriodContainer = ({ ...props }) => {
  const { position } = props;
  return (
    <ParallaxLayer offset={position} speed={0.9}>
      <section>
        <NoticePeriod {...props} />
      </section>
    </ParallaxLayer>
  );
};

export default NoticePeriodContainer;
