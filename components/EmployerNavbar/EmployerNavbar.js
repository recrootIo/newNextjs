/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Container from "@mui/material/Container";
import Cookies from "js-cookie";
import { Avatar, Box, Stack } from "@mui/material";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Image from "next/image";

const EmployerNavbar = () => {
  return (
    <nav>
      <div
        style={{
          backgroundColor: "#F3FCFF",
          width: "100%",
          height: "100px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Container>
          <Stack direction="row" spacing={3}>
            <Image src="/logo.png" alt="Your Company" width="143" height="31" />
            <Box sx={{ flex: 1 }}>
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <CommentOutlinedIcon className="hidden h-8 w-auto lg:block" />
                <NotificationsNoneOutlinedIcon className="hidden h-8 w-auto lg:block" />
                <Avatar sx={{ color: "#034275" }} />
              </Stack>
            </Box>
          </Stack>
        </Container>
      </div>
    </nav>
  );
};

export default EmployerNavbar;
