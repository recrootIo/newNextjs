import React from "react";
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
import HireTalents from "@/components/NewHome/HireTalents";
import IdentifyingBestCandidates from "@/components/NewHome/IdentifyingBestCandidates";
import WhtMakesRecrootDiff from "@/components/NewHome/WhtMakesRecrootDiff";
import SuccessPrecentage from "@/components/NewHome/SuccessPrecentage";
import LevelUp from "@/components/NewHome/LevelUp";
import FeaturedJobs from "@/components/NewHome/FeaturedJobs";
import WeAreProud from "@/components/NewHome/WeAreProud";
import BrandsWeWork from "@/components/NewHome/BrandsWeWork";
import SuccessStories from "@/components/NewHome/SuccessStories";
import WatchDemo from "@/components/NewHome/WatchDemo";

const index = () => {
  return (
    <>
      <Header title={"Home"} />
      <Navbar />
      <HireTalents />
      <IdentifyingBestCandidates />
      {/* <WhtMakesRecrootDiff /> */}
      <SuccessPrecentage />
      <LevelUp />
      <FeaturedJobs />
      <WeAreProud />
      <BrandsWeWork />
      <SuccessStories />
      <WatchDemo />
      <SubscribHome />
      <FooterHome />
    </>
  );
};

export default index;
