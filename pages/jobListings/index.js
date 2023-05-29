import Header from "@/components/Header";
import FooterHome from "@/components/Home/FooterHome";
import SubscribHome from "@/components/Home/SubscribHome";
import DreamJob from "@/components/JobListings/DreamJob";
import RecentSearch from "@/components/JobListings/RecentSearch";
import SearchByCategory from "@/components/JobListings/SearchByCategory";
import SearchByCompany from "@/components/JobListings/SearchByCompany";
import SearchSection from "@/components/JobListings/SearchSection";
import Navbar from "@/components/Navbar/Navbar";
import CompanyData from "@/redux/services/company.service";
import Head from "next/head";
import React from "react";

const index = ({ ...props }) => {
  return (
    <>
      <Header title={"Job Lists"} />
      <Navbar />
      <DreamJob />
      <SearchSection sectors={props.sectors} />
      <SearchByCategory />
      <RecentSearch />
      <SearchByCompany />
      <SubscribHome />
      <FooterHome />
    </>
  );
};

export const getServerSideProps = async () => {
  const newService = new CompanyData();
  let sectors = null;
  await newService.getAllInfoSectors().then((res) => {
    sectors = res.data;
  });

  // const job = jobsService.

  return {
    props: {
      sectors,
    },
  };
};

export default index;
