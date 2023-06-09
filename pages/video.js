import FooterHome from "@/components/Home/FooterHome";
import Navbar from "@/components/Navbar/Navbar";
import { BOLD } from "@/theme/fonts";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import {
  Box,
  Container,
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
} from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { Button, Grid, Stack } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import styles from "./video.module.css";
import moment from "moment";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AssistantIcon from "@mui/icons-material/Assistant";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { NEUTRAL } from "@/theme/colors";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  marginLeft: 0,
  width: "100%",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    width: "90%",
  },
}));

const Video = () => {
  return (
    <div>
      <Navbar />
      <Box
        sx={{
          backgroundImage: 'url("/EmployerDashboardBG.svg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "250px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Container>
          <CustomTypography
            variant="h6"
            sx={{
              fontFamily: BOLD,
              fontSize: "45px",
              color: "white",
              textAlign: "center",
            }}
            gutterBottom
          >
            Video
          </CustomTypography>
        </Container>
      </Box>
      <Container>
        <Box sx={{ mt: "40px" }}>
          <Search>
            <Box
              sx={{
                display: "flex",
                bgcolor: "white",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                height: "70px",
                width: "100%",
                paddingLeft: "10px",
                paddingRight: "10px",
                border: "1px solid rgba(118, 118, 118, 0.3)",
                borderRadius: "5px",
              }}
            >
              <StyledInputBase
                placeholder="Search Here"
                inputProps={{ "aria-label": "search" }}
              />
              <SearchIcon
                sx={{ color: "#0183C9", height: "35px", width: "auto" }}
              />
            </Box>
          </Search>
        </Box>

        <Stack sx={{ backgroundColor: NEUTRAL, width: "100%" }}>
          <Box className="blogpage-section">
            <Container disableGutters>
              <Grid
                container
                sx={{ mt: "40px" }}
                className="test-test"
                spacing={4}
              >
                <Grid item xs={12} md={7.5} lg={8.75}>
                  <Grid container spacing={2}>
                    {/* {emptyBlogs && (
                      <>
                        <Typography>No Blogs Found</Typography>
                      </>
                    )} */}
                    {/* {filteringBlogs.map((blog) => ( */}
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      lg={4}
                      sx={{ cursor: "pointer" }}
                      // onClick={() =>
                      //   navigation(`/videos/${blog?.title}/${blog?._id}`)
                      // }
                    >
                      <div
                        className="post-item-1"
                        data-aos="fade-up"
                        data-aos-delay="1000"
                      >
                        {/* <img
                            src={`${API_URL}/getCompanyPhotos?compPhotos=${blog.blogImage}`}
                            alt=""
                          /> */}
                        <Image src="/bag.png" alt="" width={100} height={80} />

                        <div className="b-post-details">
                          <h3>
                            {/* <Link
                              className="read-more"
                              to={`/videos/${blog?.title}/${blog?._id}`}
                            > */}
                            <Box
                              sx={{
                                fontSize: "20px",
                                lineHeight: "30px",
                                marginBottom: "16px",
                                fontWeight: 700,
                              }}
                            >
                              {/* {blog.title} */}
                              <CustomTypography sx={{ color: "blue" }}>
                                Common questions asked in a Developer interview
                              </CustomTypography>
                            </Box>
                            {/* </Link> */}
                          </h3>
                          <div className="bp-meta">
                            <Stack
                              direction={"row"}
                              justifyContent={"space-between"}
                              gap={1}
                              alignItems={"center"}
                            >
                              <AccessTimeIcon fontSize="5px" color="primary" />
                              <Box
                                sx={{
                                  display: "inline-block",
                                  fontSize: "14px",
                                  lineHeight: "0.8",
                                  color: "#505056",
                                  fontWeight: 600,
                                }}
                              >
                                {/* {moment(blog.updatedAt).format("DD-MM-YYYY")} */}
                                25-01-2023
                              </Box>
                            </Stack>
                            <Stack
                              direction={"row"}
                              justifyContent={"space-between"}
                              gap={1}
                              alignItems={"center"}
                            >
                              <AssistantIcon fontSize="5px" color="primary" />
                              <Box
                                sx={{
                                  display: "inline-block",
                                  fontSize: "14px",
                                  lineHeight: "0.8",
                                  color: "#505056",
                                  fontWeight: 600,
                                }}
                              >
                                {/* {blog.category.category} */} Blog Category
                              </Box>
                            </Stack>
                          </div>
                          <div className="post-tags"></div>
                          <br />
                        </div>
                      </div>
                    </Grid>
                    {/* ))} */}
                  </Grid>
                  <div className="bisylms-pagination">
                    {/* {countedPages.map((p) => (
                      <div
                        onClick={() => handleChange(p)}
                        className={Number(current) === p ? "current" : ""}
                        style={{ cursor: "pointer" }}
                      >
                        {p}
                      </div>
                    ))} */}
                  </div>
                </Grid>
                <Grid item xs={12} md={4.5} lg={3.25}>
                  <div
                    className="blog-sidebar"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <aside className="widget widget-search">
                      <Box className="search-form">
                        <input
                          type="search"
                          name="s"
                          placeholder="Search..."
                          //   onChange={searchHandler}
                        />
                        <Button
                          type="submit"
                          sx={{
                            fontSize: "16px",
                            lineHeight: "52px",
                            color: "#2c234d",
                            background: "transparent",
                            border: "none",
                            outline: "none",
                            margin: 0,
                            padding: 0,
                            position: "absolute",
                            top: "15px",
                            right: "-12px",
                            zIndex: "2",
                            transition: "all 0.4s ease",
                          }}
                          //   onClick={() => searchAction()}
                        >
                          <SearchIcon fontSize="small" />
                        </Button>
                      </Box>
                    </aside>

                    <aside className="widget widget-trend-post">
                      <h3 className="widget-title">Recent Posts</h3>
                      {/* {recentPost.map((rec) => ( */}
                      {/* <Link to={`/videos/${rec?.title}/${rec?._id}`}> */}
                      <div className="popular-post">
                        {/* <img
                          src={`${API_URL}/getCompanyPhotos?compPhotos=${rec.blogImage}`}
                          alt=""
                          height={"20px"}
                        /> */}
                        <Image src="/bag.png" alt="" width={100} height={80} />

                        <h5>
                          {/* {rec.title} */}
                          Common questions asked in a Developer interview
                        </h5>
                        <span>
                          {/* {moment(rec.updatedAt).format("DD-MM-YYYY")} */}
                          25-01-2023
                        </span>
                      </div>
                      {/* </Link> */}
                      {/* ))} */}
                    </aside>
                    <aside className="widget">
                      <h3 className="widget-title">Tags</h3>
                      <div className="tags">
                        {/* {tags.map((tag) => (
                          <Box
                            className={
                              selectedTags.includes(tag)
                                ? "tags-active"
                                : "tags-a"
                            }
                            onClick={() => onClickChips(tag)}
                          >{`# ${tag}`}</Box>
                        ))} */}
                      </div>
                    </aside>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Stack>
      </Container>
      <FooterHome />
    </div>
  );
};

export default Video;
