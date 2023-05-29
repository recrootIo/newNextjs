/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Container from "@mui/material/Container";
import Cookies from "js-cookie";
import { Avatar, Box, Stack } from "@mui/material";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

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
            <img
              className="hidden h-8 w-auto lg:block"
              src="/logo.png"
              alt="Your Company"
            />
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
