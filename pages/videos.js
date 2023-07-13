import FooterHome from "@/components/Home/FooterHome";
import Navbar from "@/components/Navbar/Navbar";
import { BOLD } from "@/theme/fonts";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import {
  Box,
  Collapse,
  Container,
  Stack,
  styled,
  InputBase,
  IconButton,
  Grid,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./videos.module.css";
import axios from "axios";
import ReactPlayer from "react-player";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AssistantIcon from "@mui/icons-material/Assistant";
import Link from "next/link";
import Image from "next/image";

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

const Videos = () => {
  //   const API_URL = "https://api.arinnovate.io/api";
  //   // Gets the current url
  //   const blogUrl = window.location.href;
  //   const { job, id } = useParams();

  //   const [recentPost, setRecent] = useState([]);
  //   const [tags, setTags] = useState([]);
  //   const [blog, setBlog] = useState({
  //     tags: [],
  //   });

  //   /**
  //    * Get the Blog with id
  //    */
  //   const getBlog = useCallback(() => {
  //     axios.get(`${API_URL}/getBlog/${id}`).then((res) => setBlog(res.data[0]));
  //   }, [id]);

  //   /**
  //    *  Get tags
  //    */
  //   const getTags = () => {
  //     axios.get(`${API_URL}/getVideoTags`).then((res) => setTags(res?.data));
  //   };

  //   /**
  //    *  Get Recent
  //    */
  //   const getRecent = () => {
  //     axios
  //       .get(`${API_URL}/getRecentVideoBlogs`)
  //       .then((res) => setRecent(res?.data));
  //   };

  //   useEffect(() => {
  //     getTags();
  //     getRecent();
  //     getBlog();
  //   }, [id, getBlog]);

  //   const enableTags = !isEmpty(blog?.tags);

  //   const imageUrl = `${API_URL}/getCompanyPhotos?compPhotos=${blog?.blogImage}`;

  //   if (!blog) return null;

  return (
    <div>
      <Navbar />
      {/* <Helmet>
        <title>{job}</title>
        <meta name="title" content={job} />
        <meta name="description" content={job} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={blogUrl} />
        <meta property="og:title" content={job} />
        <meta property="og:description" content={job} />
        <meta property="og:image" content={imageUrl} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={blogUrl} />
        <meta property="twitter:title" content={job} />
        <meta property="twitter:description" content={job} />
        <meta property="twitter:image" content={imageUrl} />
      </Helmet> */}
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
        <Box sx={{ mt: "70px", mb: "100px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: "10px",
              mt: "40px",
              mb: "40px",
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
                  height: "60px",
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
                />
                <IconButton onClick={() => searchAction()}>
                  <SearchIcon
                    sx={{ color: "#0183C9", height: "35px", width: "auto" }}
                  />
                </IconButton>
              </Box>
            </Search>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <div className={styles.singlePostArea}>
                <div className={styles.postThumb}>
                  {/* {blog?.displayType === "video" ? ( */}
                  <ReactPlayer
                    url="https://youtu.be/iBonBC-ySgo"
                    width={"100%"}
                  />
                  {/* ) : (
                    <img src={imageUrl} alt="" />
                  )} */}
                  <div className={styles.bpMeta}>
                    <Stack
                      direction={"row"}
                      justifyContent={"space-between"}
                      gap={1}
                      alignItems={"center"}
                    >
                      <AccessTimeIcon
                        color="primary"
                        sx={{ fontSize: "22px" }}
                      />
                      <Box
                        sx={{
                          display: "inline-block",
                          fontSize: "14px",
                          lineHeight: "0.8",
                          color: "#505056",
                          fontWeight: 600,
                        }}
                      >
                        73/437/2012
                        {/* {moment(blog.updatedAt).format("DD-MM-YYYY")} */}
                      </Box>
                    </Stack>
                    <Stack
                      direction={"row"}
                      justifyContent={"space-between"}
                      gap={1}
                      alignItems={"center"}
                    >
                      <AssistantIcon
                        color="primary"
                        sx={{ fontSize: "22px" }}
                      />
                      <Box
                        sx={{
                          display: "inline-block",
                          fontSize: "14px",
                          lineHeight: "0.8",
                          color: "#505056",
                          fontWeight: 600,
                        }}
                      >
                        pillow case
                        {/* {blog?.category?.category} */}
                      </Box>
                    </Stack>
                  </div>
                  <Stack direction={"row"} justifyContent="space-between">
                    <h3 className={styles.articleTitle}>how to make pizza</h3>
                    {/* <ShareButton
                      url={blogUrl}
                      roundedButtons
                      title={blog?.title}
                      description={blog?.description}
                      tag={blog?.tags}
                    /> */}
                  </Stack>
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <Box
                sx={{
                  borderRadius: "20px",
                  border: "",
                  strokeWidth: "1px",
                  stroke: "rgba(227, 227, 227, 0.12)",
                  height: "200px",
                  bgcolor: "#EDFAFF",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#D4F0FC",
                    borderRadius: "10px 10px 0px 0px",
                    height: "60px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CustomTypography
                    sx={{
                      fontFamily: BOLD,
                      fontWeight: 600,
                      fontSize: "20px",
                      color: "#000",
                      textAlign: "center",
                    }}
                    gutterBottom
                  >
                    Recent Posts
                  </CustomTypography>
                </Box>
                <Box>
                  {/* {recentPost.map((rec) => ( */}
                  <Link
                    //   href={`/videos/${rec?.title}/${rec?._id}`}
                    href="https://youtu.be/iBonBC-ySgo"
                    passHref
                  >
                    <div className="popularPost">
                      <Image
                        // src={`${API_URL}/getCompanyPhotos?compPhotos=${rec.blogImage}`}
                        src="/bag.png"
                        width="120"
                        height="200"
                        style={{ width: "100%", height: "auto" }}
                        alt="recent post image"
                      />
                      <Stack
                        direction={"row"}
                        gap={1}
                        alignItems={"center"}
                        sx={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <AccessTimeIcon
                          color="primary"
                          sx={{ fontSize: "22px" }}
                        />
                        <span>
                          62662/223/232
                          {/* {moment(rec.updatedAt).format("DD-MM-YYYY")} */}
                        </span>
                      </Stack>
                      <CustomTypography
                        sx={{
                          fontWeight: 600,
                          fontSize: "16px",
                          color: "#000",
                        }}
                        gutterBottom
                      >
                        Common questions asked in a Developer interview
                      </CustomTypography>
                    </div>
                  </Link>
                  {/* ))} */}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <FooterHome />
    </div>
  );
};

export default Videos;
