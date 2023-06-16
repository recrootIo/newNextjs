import ForgotPassword from "@/components/ForgotPassword/ForgotPassword";
import Header from "@/components/Header";
import BackBar from "@/components/JobDetails/BackBar";
import React from "react";

const index = () => {
  return (
    <div>
      <Header title={"forgotPassword"} />
      <BackBar enableBack={false} />
      <ForgotPassword />
    </div>
  );
};

export default index;
