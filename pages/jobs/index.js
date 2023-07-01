import withAuth from "@/components/Auths/VerifyEmail";
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
import searchService from "@/redux/services/search.service";
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
        page={props.page}
        {...props}
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
  const {
    title = null,
    address = null,
    category = [],
    page = 1,
    jobType = [],
    experience = [],
    variant = "",
    company = "",
    sector = [],
    limit = 10,
  } = context.query;

  const locale = context?.locale;
  const country = address ? address : locale === "lk" ? "Sri Lanka" : null;
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
      let newCate = res.data.jobCount.map((cat) => cat._id);
      categories = newCate;
    })
    .catch((res) => console.log(res));

  return {
    props: {
      sectors,
      companies,
      address: country,
      title,
      categories,
      category: Array.isArray(category) ? category : [category],
      page,
      variant,
      sector: Array.isArray(sector) ? sector : [sector],
      company,
      experience: Array.isArray(experience) ? experience : [experience],
      jobType: Array.isArray(jobType) ? jobType : [jobType],
    },
  };
};

export default withAuth(index);
