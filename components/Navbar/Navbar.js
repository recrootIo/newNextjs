/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useCallback } from "react";
import Container from "@mui/material/Container";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Avatar, Button, Menu, MenuItem, Stack } from "@mui/material";
import { logout } from "@/redux/slices/auth";
import { useDispatch } from "react-redux";
import Link from "next/link";
import Fade from "@mui/material/Fade";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Navbar = () => {
  // const { data: session } = useSession()
  const { push } = useRouter();
  // const user = JSON.parse(localStorage.getItem("User")) || "";
  const user = Cookies.get("token");
  const userType = Cookies.get("userType");
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEmp, setAnchorEmp] = React.useState(null);
  const open = Boolean(anchorEl);
  const openEmp = Boolean(anchorEmp);

  const logOut = useCallback(() => {
    handleClose();
    dispatch(logout()).then(() => {
      push("/");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickEmp = (event) => {
    setAnchorEmp(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseEmp = () => {
    setAnchorEmp(null);
  };

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
            <div className="flex flex-1 items-center justify-center md:justify-between sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="block h-8 w-auto lg:hidden"
                  src="/logo.png"
                  alt="Your Company"
                />
                <img
                  className="hidden h-8 w-auto lg:block"
                  src="/logo.png"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4 gap-3 justify-between items-center">
                  <Link
                    href="/"
                    style={{
                      fontSize: "17px",
                      color: "black",
                      fontWeight: 600,
                    }}
                  >
                    Home
                  </Link>

                  <Link
                    href="/jobs"
                    style={{
                      fontSize: "17px",
                      color: "black",
                      fontWeight: 600,
                    }}
                  >
                    Jobs
                  </Link>

                  {userType === "Candidate" ? (
                    <Link
                      href={"/Candidate/Dashboard"}
                      style={{
                        fontSize: "17px",
                        color: "black",
                        fontWeight: 600,
                      }}
                    >
                      Candidate
                    </Link>
                  ) : (
                    <>
                      <Button
                        id="fade-button"
                        aria-controls={openEmp ? "fade-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={openEmp ? "true" : undefined}
                        onClick={handleClickEmp}
                        endIcon={<KeyboardArrowDownIcon />}
                        sx={{
                          fontSize: "17px",
                          color: "black",
                          fontWeight: 600,
                          textTransform: "capitalize",
                          fontFamily: "Inter",
                        }}
                      >
                        Employer
                      </Button>

                      <Menu
                        id="fade-menu"
                        MenuListProps={{
                          "aria-labelledby": "fade-button",
                        }}
                        anchorEl={anchorEmp}
                        open={openEmp}
                        onClose={handleCloseEmp}
                        TransitionComponent={Fade}
                      >
                        <MenuItem>Pricing</MenuItem>
                      </Menu>

                      <Link
                        href="#"
                        style={{
                          fontSize: "17px",
                          color: "black",
                          fontWeight: 600,
                        }}
                      >
                        Pricing
                      </Link>
                    </>
                  )}

                  {user === undefined ? (
                    <>
                      <Link
                        href="/signin"
                        style={{
                          fontSize: "17px",
                          color: "black",
                          fontWeight: 600,
                        }}
                      >
                        Login
                      </Link>
                      <Link
                        href="/signup"
                        style={{
                          fontSize: "17px",
                          color: "black",
                          fontWeight: 600,
                        }}
                      >
                        SignIn
                      </Link>
                    </>
                  ) : (
                    <>
                      <div>
                        <Button
                          id="fade-button"
                          aria-controls={open ? "fade-menu" : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                          onClick={handleClick}
                        >
                          <Avatar />
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
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
