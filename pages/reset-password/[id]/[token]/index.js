import Header from "@/components/Header";
import BackBar from "@/components/JobDetails/BackBar";
import ResetPassword from "@/components/ResetPassword/ResetPassword";
import http from "@/redux/http-common";
import axios from "axios";
import React from "react";

const index = ({ ...props }) => {
  return (
    <>
      <Header title={"Reset Password"} />
      <BackBar enableBack={false} />
      <ResetPassword {...props} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { id = "", token = "" } = context.query;

  try {
    const response = await axios.get(
      `http://localhost:3000/reset-password/${id}/${token}`
    );

    console.log(response, "response");

    if (response.data === "NotVerified") {
      context.res.writeHead(302, { Location: "/forgotPassword" });
      context.res.end();
    }
  } catch (error) {
    context.res.writeHead(302, { Location: "/" });
    context.res.end();
  }

  return {
    props: {
      id,
      token,
    },
  };
};

export default index;
