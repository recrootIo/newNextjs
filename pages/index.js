"use client";
import SignUpHome from "../components/Home/SignUpHome";
import Box from "@mui/material/Box";
import FooterHome from "../components/Home/FooterHome";
import SubscribHome from "../components/Home/SubscribHome";
import Navbar from "../components/Navbar/Navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Cookies from "js-cookie";
import Header from "@/components/Header";
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

export default function Home({ locale }) {
  useEffect(() => {
    AOS.init();
  }, []);
  const user = Cookies.get("token");
  useEffect(() => {
    const redirect = localStorage.getItem("redirect");
    if (redirect !== null) {
      localStorage.removeItem("redirect");
    }
  }, []);

  return (
    <>
      <Header title={"HOME"} />
      <Box sx={{ height: "100%", width: "100%" }}>
        <Navbar />
        <HireTalents />
        <IdentifyingBestCandidates />
        <SuccessPrecentage />
        <LevelUp />
        <FeaturedJobs locale={locale} />
        <WeAreProud />
        <BrandsWeWork />
        <SuccessStories />
        <WatchDemo />
        <SubscribHome />
        <FooterHome />
      </Box>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const locale = context.locale;

  return {
    props: {
      locale,
    },
  };
};
