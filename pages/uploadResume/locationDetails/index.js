import React from "react";
import Location from "./locationDetails";

export const metadata = {
  title: "Location Details",
};

const index = ({ children }) => {
  return (
    <section>
      <Location />
    </section>
  );
};

export default index;
