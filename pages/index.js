"use client";
import SignUpHome from "../components/Home/SignUpHome";
import Box from "@mui/material/Box";
import SearchHome from "../components/Home/SearchHome";
import AboutHome from "../components/Home/AboutHome";
import ExploreServices from "../components/Home/ExploreServices";
import CategoryHome from "../components/Home/CategoryHome";
import GetHiredHome from "../components/GetHired/GetHiredHome";
import BrandsHome from "../components/Home/BrandsHome";
import FooterHome from "../components/Home/FooterHome";
import SubscribHome from "../components/Home/SubscribHome";
import OurNumHome from "../components/Home/OurNumHome";
import NicheTechHome from "../components/Home/NicheTechHome";
import TestimonialHome from "../components/Home/TestimonialHome";
import Navbar from "../components/Navbar/Navbar";
import UsersDetailsHome from "../components/Home/UsersDetailsHome";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  // const user = JSON.parse(localStorage.getItem("User")) || "";

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <Navbar />
      <SignUpHome />
      <SearchHome />
      <AboutHome />
      <UsersDetailsHome />
      <ExploreServices />
      <CategoryHome />
      <GetHiredHome />
      <NicheTechHome />
      <OurNumHome />
      <BrandsHome />
      <TestimonialHome />
      <SubscribHome />
      <FooterHome />
    </Box>
  );
}
