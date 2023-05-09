import React from "react";
import JobTitle from "./jobTitle";

export const metadata = {
  title: "Job Title",
};

const index = () => {
  return (
    <section
      style={{
        backgroundImage: "url(/Frame 300.svg)",
      }}
    >
      <JobTitle />
    </section>
  );
};

export default index;
