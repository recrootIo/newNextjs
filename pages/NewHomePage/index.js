import React from "react";
import Header from "@/components/Header";
import FooterHome from "@/components/Home/FooterHome";
import SubscribHome from "@/components/Home/SubscribHome";
import Navbar from "@/components/Navbar/Navbar";
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
    <div
      style={{
        backgroundImage: `url("/newhome_images/Bubble-BG.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
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
    </div>
  );
};

export default index;
