import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import LocationDetails from "./locationDetails";

export const metadata = {
  title: "Location Details",
};

const LocationDetailsContainer = ({ ...props }) => {
  const { position } = props;
  return (
    <ParallaxLayer offset={position} speed={0.9}>
      <LocationDetails {...props} />
    </ParallaxLayer>
  );
};

export default LocationDetailsContainer;
