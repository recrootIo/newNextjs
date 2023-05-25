import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import LocationInputDetails from "./LocationInputDetails";

const LocationDetailsContainer = ({ ...props }) => {
  const { position } = props;
  return (
    <ParallaxLayer offset={position} speed={0.9}>
      <LocationInputDetails {...props} />
    </ParallaxLayer>
  );
};

export default LocationDetailsContainer;
