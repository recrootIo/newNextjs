import AllApplicants from "@/components/Employers/AllApplicants";
import React from "react";

const index = ({ ...props }) => {
  return (
    <>
      <AllApplicants {...props} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { jid, page = 1, title } = context.query;

  return {
    props: {
      jid,
      page,
      title,
    },
  };
};

export default index;
