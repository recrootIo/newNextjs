import React from "react";
import AddResume from "./resumeUpload";

export const metadata = {
  title: "Resume Upload",
};

const Layout = ({ children }) => {
  return (
    <section>
      <AddResume />
    </section>
  );
};

export default Layout;
