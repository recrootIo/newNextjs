/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useCallback } from "react";
import Container from "@mui/material/Container";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Avatar } from "@mui/material";
import { logout } from "@/redux/slices/auth";
import { useDispatch } from "react-redux";
import Link from "next/link";
const Navbar = () => {
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
                <div className="flex space-x-4 gap-3">
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
                      <Link
                        href="#"
                        style={{
                          fontSize: "17px",
                          color: "black",
                          fontWeight: 600,
                        }}
                      >
                        Employer
                      </Link>
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
                    ""
                  ) : (
                    <>
                      <div>
                        <div className="dropdown inline-block relative">
                          <button className="">
                            <Avatar />
                          </button>
                          <ul
                            className="dropdown-menu absolute hidden text-gray-700 pt-1"
                            style={{}}
                          >
                            <li className="" style={{ minWidth: "200px" }}>
                              <a
                                className=" bg-white  py-2 px-4 block whitespace-no-wrap"
                                style={{
                                  // backgroundColor: "white",
                                  cursor: "pointer",
                                }}
                                onClick={logOut}
                              >
                                Logout
                              </a>
                            </li>
                            {/* <li className="">
                              <a
                                className="hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                href="#"
                                style={{ backgroundColor: "white" }}
                              >
                                Two
                              </a>
                            </li>
                            <li className="">
                              <a
                                className="rounded-b  hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                href="#"
                                style={{ backgroundColor: "white" }}
                              >
                                Three is the magic number
                              </a>
                            </li> */}
                          </ul>
                        </div>
                      </div>

                      {/* <button
                        style={{ fontSize: "17px", color: "black" }}
                        onClick={logOut}
                      >
                        Logout
                      </button> */}
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
