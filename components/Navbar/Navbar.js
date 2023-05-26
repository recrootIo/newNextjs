/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useCallback } from "react";
import Container from "@mui/material/Container";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Avatar, Box, Drawer, IconButton, List } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { logout } from "@/redux/slices/auth";
import { useDispatch } from "react-redux";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  const [state, setState] = React.useState(false);

  // const { data: session } = useSession()
  const { push } = useRouter();
  // const user = JSON.parse(localStorage.getItem("User")) || "";
  const user = Cookies.get("token");
  const userType = Cookies.get("userType");
  const dispatch = useDispatch();
  const logOut = useCallback(() => {
    dispatch(logout()).then(() => {
      push("/");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const drawerFunction = () => {
    setState(!state);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={drawerFunction}
      onKeyDown={drawerFunction}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <Link
              href={"/"}
              className="rounded-md px-3 py-2 text-sm font-medium"
              aria-current="page"
              style={{ fontSize: "20px", color: "black" }}
            >
              Home
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            {userType === "Candidate" ? (
              <Link
                href="#"
                className="   rounded-md px-3 py-2 text-sm font-medium"
                style={{ fontSize: "20px", color: "black" }}
              >
                Candidate
              </Link>
            ) : (
              <Link
                href="#"
                className="   rounded-md px-3 py-2 text-sm font-medium"
                style={{ fontSize: "20px", color: "black" }}
              >
                Employer
              </Link>
            )}
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <Link
              href="/jobListings"
              className="   rounded-md px-3 py-2 text-sm font-medium"
              style={{ fontSize: "20px", color: "black" }}
            >
              Jobs
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <Link
              href="#"
              className="   rounded-md px-3 py-2 text-sm font-medium"
              style={{ fontSize: "20px", color: "black" }}
            >
              Pricing
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            {user === undefined ? (
              ""
            ) : (
              <button
                className="   rounded-md px-3 py-2 text-sm font-medium"
                style={{ fontSize: "20px", color: "black" }}
                onClick={logOut}
              >
                Logout
              </button>
            )}
          </ListItemButton>
        </ListItem>
      </List>
      {/* <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <nav>
      <div
        className="px-2 sm:px-6 lg:px-8"
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
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center  md:justify-between sm:items-stretch sm:justify-between">
              <div
                className="flex flex-1 items-end"
                style={{ justifyContent: "space-between" }}
              >
                <img
                  className="block h-8 w-auto lg:hidden sm:justify-between"
                  src="/logo.png"
                  alt="Your Company"
                />
                <img
                  className="hidden h-8 w-auto lg:block"
                  src="/logo.png"
                  alt="Your Company"
                />
                <IconButton
                  onClick={() => drawerFunction()}
                  sx={{
                    display: {
                      md: "none",
                      lg: "none",
                      sm: "block",
                      xs: "block",
                    },
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link
                    href={"/"}
                    className="rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                    style={{ fontSize: "20px", color: "black" }}
                  >
                    Home
                  </Link>
                  {userType === "Candidate" ? (
                    <Link
                      href="#"
                      className="   rounded-md px-3 py-2 text-sm font-medium"
                      style={{ fontSize: "20px", color: "black" }}
                    >
                      Candidate
                    </Link>
                  ) : (
                    <Link
                      href="#"
                      className="   rounded-md px-3 py-2 text-sm font-medium"
                      style={{ fontSize: "20px", color: "black" }}
                    >
                      Employer
                    </Link>
                  )}
                  <Link
                    href="/jobListings"
                    className="   rounded-md px-3 py-2 text-sm font-medium"
                    style={{ fontSize: "20px", color: "black" }}
                  >
                    Jobs
                  </Link>
                  <Link
                    href="#"
                    className="   rounded-md px-3 py-2 text-sm font-medium"
                    style={{ fontSize: "20px", color: "black" }}
                  >
                    Pricing
                  </Link>

                  {user === undefined ? (
                    ""
                  ) : (
                    <button
                      className="   rounded-md px-3 py-2 text-sm font-medium"
                      style={{ fontSize: "20px", color: "black" }}
                      onClick={logOut}
                    >
                      Logout
                    </button>
                  )}
                  <Avatar />
                </div>
              </div>
            </div>
          </div>
          <Drawer anchor={"right"} open={state} onClose={drawerFunction}>
            {list("right")}
          </Drawer>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
