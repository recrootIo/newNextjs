import Header from "@/components/Header";
import FooterHome from "@/components/Home/FooterHome";
import SubscribHome from "@/components/Home/SubscribHome";
import DreamJob from "@/components/JobListings/DreamJob";
import RecentSearch from "@/components/JobListings/RecentSearch";
// import SearchByCategory from "@/components/JobListings/SearchByCategory";
// import SearchByCompany from "@/components/JobListings/SearchByCompany";
import SearchSection from "@/components/JobListings/SearchSection";
import Navbar from "@/components/Navbar/Navbar";
import CompanyData from "@/redux/services/company.service";
import jobsService from "@/redux/services/job.service";
// import Head from "next/head";
import React from "react";

const index = ({ ...props }) => {
  return (
    <>
      <Header title={"Job Lists"} />
      <Navbar />
      <DreamJob />
      <SearchSection
        sectors={props.sectors}
        companies={props.companies}
        title={props.title}
        address={props.address}
        categories={props.categories}
        category={props.category}
      />
      {/* <SearchByCategory /> */}
      <RecentSearch />
      {/* <SearchByCompany /> */}
      <SubscribHome />
      <FooterHome />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { title = null, address = null, category = null } = context.query;

  const newService = new CompanyData();
  const jobsServices = new jobsService();
  let sectors = [];
  let companies = [];
  let categories = [];

  await newService
    .getAllInfoSectors()
    .then((res) => {
      sectors = res.data;
    })
    .catch(() => {
      console.log("something went wrong");
    });

  await newService
    .getCompanies()
    .then((res) => {
      companies = res.data;
    })
    .catch(() => {
      console.log("something went wrong");
    });

  await jobsServices
    .getJobsCatCount()
    .then((res) => {
      console.log(res.data);
      let newCate = res.data.jobCount.map((cat) => cat._id);
      categories = newCate;
      console.log(categories);
    })
    .catch((res) => console.log(res));

  return {
    props: {
      sectors,
      companies,
      address,
      title,
      categories,
      category,
    },
  };
};

export default index;
