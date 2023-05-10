import FooterHome from "@/components/Home/FooterHome";
import SubscribHome from "@/components/Home/SubscribHome";
import DreamJob from "@/components/JobListings/DreamJob";
import RecentSearch from "@/components/JobListings/RecentSearch";
import SearchByCategory from "@/components/JobListings/SearchByCategory";
import SearchByCompany from "@/components/JobListings/SearchByCompany";
import SearchSection from "@/components/JobListings/SearchSection";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const index = () => {
  return (
    <>
      <Navbar />
      <DreamJob />
      <SearchSection />
      <SearchByCategory />
      <RecentSearch />
      <SearchByCompany />
      <SubscribHome />
      <FooterHome />
    </>
  );
};

export default index;
