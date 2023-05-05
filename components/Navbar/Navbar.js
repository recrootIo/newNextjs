/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useCallback } from "react";
import Container from "@mui/material/Container";
import { useSession, signIn, signOut } from "next-auth/react"
// import { logout } from "@/app/slices/auth";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
const Navbar = () => {
  // const { data: session } = useSession()
  const { push } = useRouter();
  // const user = JSON.parse(localStorage.getItem("User")) || "";
  const cookie = Cookies.get('user')
  const user = Cookies.get('user') !== undefined ? JSON.parse(cookie) : cookie
  // const dispatch = useDispatch()
  const logOut = useCallback(() => {
    dispatch(logout()).then(() => {
      push("/");
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
        <Container maxWidth="lg">
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
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="  rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                    style={{ fontSize: "20px", color: "black" }}
                  >
                    About Us
                  </a>

                  <a
                    href="#"
                    className="   rounded-md px-3 py-2 text-sm font-medium"
                    style={{ fontSize: "20px", color: "black" }}
                  >
                    Employer
                  </a>

                  <a
                    href="#"
                    className="   rounded-md px-3 py-2 text-sm font-medium"
                    style={{ fontSize: "20px", color: "black" }}
                  >
                    Pricing
                  </a>
                
                  {
                    user === undefined ? '':
                  <button
                    className="   rounded-md px-3 py-2 text-sm font-medium"
                    style={{ fontSize: "20px", color: "black" }}
                    onClick={logOut}
                  >
                    Logout
                  </button>
                  }
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
