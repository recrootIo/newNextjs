import FooterHome from "@/components/Home/FooterHome";
import Navbar from "@/components/Navbar/Navbar";
import { BOLD } from "@/theme/fonts";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputBase,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import React, { useCallback, useEffect, useState } from "react";
import BlogsCard from "@/components/BlogsCard/BlogsCard";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";

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

const Blogs = () => {
  const API_URL = " https://api.arinnovate.io/api";

  const [blogs, setBlogs] = useState([]);
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);
  const [recentPost, setRecent] = useState([]);
  const [current, setCurrent] = useState(1);
  const [selectedCate, setSelectedCate] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const [filteringBlogs, setFilteringBlogs] = useState([]);
  const [search, setSearch] = useState();
  const [countedPages, setCountedPages] = useState([]);
  /**
   * Gets blogs
   */
  const getBlogs = useCallback(
    (e) => {
      const pageNumber = e || current;
      axios
        .get(`${API_URL}/getAllBlogs?page=${pageNumber}&search=${search}`)
        .then((res) => {
          const { currentPage, posts, totalPages } = res.data;
          setCurrent(() => currentPage);
          countPages(totalPages);
          setBlogs(() => [...posts]);
          setFilteringBlogs(() => [...posts]);
        });
    },
    [current, search]
  );

  /**
   * Gets tags
   */
  const getTags = () => {
    axios.get(`${API_URL}/getBlogTags`).then((res) => setTags(res?.data));
  };

  /**
   * Gets Categories
   */
  const getCategories = () => {
    axios
      .get(`${API_URL}/getBlogCategories`)
      .then((res) => setCategories(res?.data));
  };

  /**
   * Gets Recent
   */
  const getRecent = () => {
    axios.get(`${API_URL}/getRecentBlog`).then((res) => setRecent(res?.data));
  };

  useEffect(() => {
    getBlogs();
    getTags();
    getCategories();
    getRecent();
    // eslint-disable-next-line
  }, []);

  /**
   * Change the pagination
   * @param {*} event
   * @param {*} value
   */
  const handleChange = (e, value) => {
    console.log(value, "vallll");
    setCurrent(() => value);
    if (selectedCate) {
      getBlogsCategories(selectedCate?._id, value);
    } else {
      getBlogs(value);
    }
  };

  /**
   *
   */
  const getBlogsCategories = (e, page) => {
    const pageNumber = page || current;
    axios
      .get(`${API_URL}/getCategory/${e}?page=${pageNumber}&search=${search}`)
      .then((res) => {
        const { currentPage, posts, totalPages } = res.data;
        setCurrent(() => currentPage);
        countPages(totalPages);
        setBlogs(() => [...posts]);
        setFilteringBlogs(() => [...posts]);
      });
  };

  /**
   * Handler action for select check boxes
   * @param {*} e
   */
  const categoryHandler = (e, checked) => {
    if (checked) {
      setSelectedCate(() => e);
      getBlogsCategories(e?._id);
    } else {
      setCurrent(() => 1);
      setSelectedCate(null);
      getBlogs();
    }
  };

  /**
   * Handler for chips and tags
   * @param {*} e
   */
  const onClickChips = (e) => {
    let newTags = [...selectedTags];
    if (selectedTags.includes(e)) {
      newTags = newTags.filter((t) => t !== e);
    } else {
      newTags.push(e);
    }
    const filteredBlogs = blogs.filter((blog) =>
      newTags.every((b) => blog?.tags.includes(b))
    );
    setSelectedTags(() => [...newTags]);
    setFilteringBlogs(() => [...filteredBlogs]);
  };

  /**
   * Handler for search fieled
   * @param {*} e
   */
  const searchHandler = (e) => {
    setSearch(() => e.target.value);
  };

  const countPages = (total) => {
    let newPages = [];
    for (let a = 1; a <= total; a++) {
      newPages.push(a);
    }

    setCountedPages(() => newPages);
  };

  const searchAction = () => {
    if (selectedCate) {
      getBlogsCategories(selectedCate);
    } else {
      getBlogs();
    }
  };

  /**
   * Handler to create url for single blog
   * @param {*} title
   * @returns completed url
   */
  const handleUrl = (title, id) => {
    var regexPattern = /\s+/g;
    var ans = title.replace(regexPattern, "%20");
    const current = window.location.href;
    return `${current}/${ans}/${id}`;
  };

  const emptyBlogs = filteringBlogs.length < 1;

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
            Blogs
          </CustomTypography>
        </Container>
      </Box>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={6} md={4} lg={9}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: "10px",
                mt: "40px",
              }}
            >
              <Search>
                <Box
                  sx={{
                    display: "flex",
                    bgcolor: "white",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "50px",
                    width: { xs: "100%", md: "100%" },
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    border: "1px solid rgba(118, 118, 118, 0.3)",
                    borderRadius: "5px",
                  }}
                >
                  <StyledInputBase
                    placeholder="Search Here"
                    inputProps={{ "aria-label": "search" }}
                    value={search}
                    onChange={searchHandler}
                  />
                  <IconButton onClick={() => searchAction()}>
                    <SearchIcon
                      sx={{ color: "#0183C9", height: "35px", width: "auto" }}
                    />
                  </IconButton>
                </Box>
              </Search>
            </Box>
            <Box
              sx={{
                mt: "40px",
                display: "flex",
                flexDirection: { xs: "column", sm: "row", md: "row" },
                gap: "20px",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
            >
              {filteringBlogs?.map((blog, ind) => (
                <BlogsCard key={ind} blog={blog} API_URL={API_URL} />
              ))}
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", mt: "40px" }}>
              <Pagination
                count={countedPages?.length}
                shape="rounded"
                hidePrevButton
                hideNextButton
                onChange={handleChange}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4.5} lg={3} sx={{ mt: 5 }}>
            <div
              className="blog-sidebar"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <aside className="widget widget-categories">
                <Typography fontWeight={600}>Categories</Typography>
                <Stack>
                  {categories.map((cate, ind) => (
                    <Stack key={ind} direction={"row"}>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={
                                cate?.category === selectedCate?.category
                              }
                              tabIndex={-1}
                              disableRipple
                              onClick={(e) =>
                                categoryHandler(cate, e.target.checked)
                              }
                              size="small"
                            />
                          }
                          label={cate?.category}
                          sx={{
                            fontSize: "10px",
                            lineHeight: "40px",
                            fontWeight: 500,
                            color: "#5d5a67",
                            ":hover": {
                              // color: PRIMARY,
                            },
                          }}
                        />
                      </FormGroup>
                    </Stack>
                  ))}
                </Stack>
              </aside>
              <aside className="widget widget-trend-post">
                <Typography fontWeight={600}>Recent Posts</Typography>
                {recentPost.map((rec, ind) => (
                  <Link key={ind} href={`/blogs/${rec?.title}/${rec?._id}`}>
                    <div className="popular-post">
                      <Image
                        src={`${API_URL}/getCompanyPhotos?compPhotos=${rec.blogImage}`}
                        alt=""
                        height={20}
                        width={0}
                      />

                      <h5>{rec.title}</h5>
                      <span>{moment(rec.updatedAt).format("DD-MM-YYYY")}</span>
                    </div>
                  </Link>
                ))}
              </aside>
              <aside className="widget">
                <Typography fontWeight={600}>Tags</Typography>
                <div className="tags">
                  {tags.map((tag, ind) => (
                    <Box
                      key={ind}
                      className={
                        selectedTags.includes(tag) ? "tags-active" : "tags-a"
                      }
                      onClick={() => onClickChips(tag)}
                    >
                      {`# ${tag}`}
                    </Box>
                  ))}
                </div>
              </aside>
            </div>
          </Grid>
        </Grid>
      </Container>
      <FooterHome />
    </div>
  );
};

export default Blogs;
