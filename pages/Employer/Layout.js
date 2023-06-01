"use client";
import EmployerNavbar from "@/components/EmployerNavbar/EmployerNavbar";
import {
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItemButton,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Layout = ({ children }) => {
  const links = [
    { img: "/home.png", path: "/Employer/Dashboard" },
    { img: "/profile.png", path: "/Employer/CompanyProfile" },
    { img: "/jobs.png", path: "/Employer" },
    { img: "/team.png", path: "/Employer" },
    { img: "/convo.png", path: "/Employer" },
    { img: "/subscription.png", path: "/Employer" },
    { img: "/myAccount.png", path: "/Employer" },
  ];

  const router = useRouter();

  const goBack = (e) => {
    router.push(e);
  };

  return (
    <div sx={{ minHeight: "100vh" }}>
      <EmployerNavbar />
      <Box
        sx={{
          backgroundImage: 'url("/EmployerDashboardBG.svg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "250px",
        }}
      ></Box>
      <div>
        <Container>
          <div style={{ position: "relative", top: "-150px" }}>
            <Grid container sx={{ pb: "50px" }}>
              <Grid item xs={2}>
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: 110,
                    bgcolor: "#034275",
                    borderRadius: "10px",
                    pb: "20px",
                  }}
                >
                  <List component="nav" aria-label="main mailbox folders">
                    <ListItemButton
                      sx={{ display: "flex", justifyContent: "center" }}
                      // selected={selectedIndex === 0}
                      //   onClick={(event) => handleListItemClick(event, 0)}
                    >
                      <Image src="/empImg.png" alt="" width="40" height="40" />
                    </ListItemButton>

                    <Divider variant="middle" color="gray" />
                    {links.map((link, index) => (
                      <ListItemButton
                        key={index}
                        sx={{ display: "flex", justifyContent: "center" }}
                        // selected={selectedIndex === 8}
                        onClick={() => {
                          goBack(link.path);
                        }}
                      >
                        <Image src={link.img} alt="" width="40" height="40" />
                      </ListItemButton>
                    ))}
                    <ListItemButton
                      sx={{ display: "flex", justifyContent: "center" }}
                      // selected={selectedIndex === 8}
                      onClick={(event) => handleListItemClick(event, 8)}
                    >
                      <Image
                        src="/power-icon.png"
                        alt=""
                        width="40"
                        height="40"
                      />
                    </ListItemButton>
                  </List>
                </Box>
              </Grid>
              <Grid item xs={10}>
                {children}
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Layout;
