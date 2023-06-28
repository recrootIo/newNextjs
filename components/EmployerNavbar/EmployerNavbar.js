/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Container from "@mui/material/Container";
import Cookies from "js-cookie";
import {
  Avatar,
  Box,
  Button,
  Fade,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/slices/auth";
import { useCallback } from "react";

const EmployerNavbar = () => {
  const { push } = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logOut = useCallback(() => {
    handleClose();
    dispatch(logout()).then(() => {
      push("/");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
            <Image
              src="/logo.png"
              alt="Your Company"
              width="140"
              height="35"
              onClick={() => {
                push("/");
              }}
              style={{ cursor: "pointer", height: "35px", width: "auto" }}
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
                {/* <CommentOutlinedIcon className="hidden h-8 w-auto lg:block" />
                <NotificationsNoneOutlinedIcon className="hidden h-8 w-auto lg:block" /> */}
                <Button
                  id="fade-button"
                  aria-controls={open ? "fade-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <Avatar sx={{ color: "#034275" }} />
                </Button>
                <Menu
                  id="fade-menu"
                  MenuListProps={{
                    "aria-labelledby": "fade-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={logOut}>Logout</MenuItem>
                </Menu>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </div>
    </nav>
  );
};

export default EmployerNavbar;
