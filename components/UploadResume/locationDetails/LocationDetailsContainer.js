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
      <section>
        <LocationDetails {...props} />
      </section>
    </ParallaxLayer>
  );
};

export default LocationDetailsContainer;
