import Header from "@/components/Header";
import JobsByCategory from "@/components/JobsByCategory/JobsByCategory";
import jobsService from "@/redux/services/job.service";
import React from "react";

const index = ({ ...props }) => {
  return (
    <>
      <Header title={"categories"} />
      <JobsByCategory {...props} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const newService = new jobsService();

  let categories = [];

  await newService
    .getJobsCatCount()
    .then((res) => {
      console.log(res.data.jobCount);
      categories = res.data.jobCount;
    })
    .catch((error) => {
      console.log("Something went wrong");
    });

  return {
    props: {
      categories,
    },
  };
};

export default index;
