"use client";
import Box from "@mui/material/Box";
// import Navbar from "../components/Navbar/Navbar";
import "aos/dist/aos.css";
import Header from "@/components/Header";
import SubscribHome from "@/components/Home/SubscribHome";
import FooterHome from "@/components/Home/FooterHome";
import Navbar from "@/components/Navbar/Navbar";
import CompanyHeader from "@/components/CompanyProfileView/CompanyHeader";

export default function CompanyProfile() {
  return (
    <>
      <Header title={"Company Profile"} />
      <Box
        sx={{
          height: "100%",
          width: "100%",
        }}
      >
        <Navbar />
        <CompanyHeader />
        <SubscribHome />
        <FooterHome />
      </Box>
    </>
  );
}
