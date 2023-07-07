/* eslint-disable @next/next/no-img-element */
import FooterHome from "@/components/Home/FooterHome";
import Navbar from "@/components/Navbar/Navbar";
import { BOLD } from "@/theme/fonts";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import {
  Box,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AssistantIcon from "@mui/icons-material/Assistant";
import ShareIcon from "@mui/icons-material/Share";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import ShareForm from "../ShareForm/ShareForm";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import moment from "moment";
import Link from "next/link";

const StyledMainTypo = styled(CustomTypography)({
  marginTop: "20px",
  fontWeight: 600,
  fontSize: "22px",
  color: "#00339B",
});

const StyledSecondTypo = styled(CustomTypography)({
  marginTop: "20px",
  fontWeight: 400,
  fontSize: "18px",
  color: "#034275",
});

const StyledQuestionTypo = styled(CustomTypography)({
  marginTop: "20px",
  fontWeight: 500,
  fontSize: "22px",
  color: "#01313F",
});

const BlogDetails = ({ blog, tags, recent }) => {
  const API_URL = " https://api.arinnovate.io/api";
  const imageUrl = `${API_URL}/getCompanyPhotos?compPhotos=${blog?.blogImage}`;
  const router = useRouter();
  const handleUrl = (title, id) => {
    var regexPattern = /\s+/g;
    var ans = title.replace(regexPattern, "%20");
    const current = router.pathname;
    return `${current}/${ans}/${id}`;
  };
  return (
    <div style={{ backgroundColor: "#F1F6F8" }}>
      <Navbar />
      <Box>
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
        <Grid container spacing={2}>
          <Grid item xs={12} md={7} lg={8.5}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Container>
                <Box sx={{ mt: "30px" }}>
                  <Image
                    src={imageUrl}
                    alt=""
                    width={2000}
                    height={2000}
                    style={{ width: "auto", height: "auto", margin: "auto" }}
                  />
                </Box>
              </Container>
              <Container>
                <Box
                  sx={{
                    height: "auto",
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                    pb: "30px",
                    pt: "20px",
                    pl: { xs: "10px", md: 0 },
                    pr: { xs: "10px", md: 0 },
                  }}
                >
                  <Box
                    sx={{
                      ml: { xs: 0, md: "130px" },
                      mr: { xs: 0, md: "130px" },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box sx={{ display: "flex", gap: "5px" }}>
                        <AccessTimeIcon sx={{ color: "#02A9F7" }} />
                        <CustomTypography
                          gutterBottom
                          sx={{ fontSize: "16px", color: "#01313F" }}
                        >
                          {moment(blog.updatedAt).format("DD-MM-YYYY")}
                        </CustomTypography>
                      </Box>
                      <Box sx={{ display: "flex", gap: "5px" }}>
                        <AssistantIcon sx={{ color: "#02A9F7" }} />
                        <CustomTypography
                          gutterBottom
                          sx={{ fontSize: "16px", color: "#01313F" }}
                        >
                          {blog?.category?.category}
                        </CustomTypography>
                      </Box>
                    </Box>
                    <CustomTypography
                      gutterBottom
                      sx={{
                        mt: "30px",
                        fontWeight: 700,
                        fontSize: "30px",
                        color: "#034275",
                      }}
                    >
                      {blog?.title}
                    </CustomTypography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: { xs: "5px", sm: "20px" },
                      }}
                    >
                      <CustomTypography
                        sx={{
                          fontWeight: 500,
                          fontSize: "16px",
                          color: "#01313F",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Tags :
                      </CustomTypography>
                      {blog?.tags.map((tag, ind) => (
                        <Chip
                          key={ind}
                          label={`#${tag}`}
                          sx={{ bgcolor: "#D4F0FC" }}
                        />
                      ))}
                      <ShareForm
                        url={handleUrl(blog?.title, blog?._id)}
                        roundedButtons={true}
                        title={blog?.title}
                        description={blog?.description}
                      />
                      {/* <IconButton aria-label="share">
                    <ShareIcon sx={{ color: "#0183C9", fontSize: "30px" }} />
                  </IconButton> */}
                    </Box>
                    <Divider
                      sx={{ mt: "20px", bgcolor: "rgba(175, 209, 237, 0.69)" }}
                    />
                  </Box>
                  <Box>
                    <Box
                      sx={{
                        ml: { xs: 0, md: "130px" },
                        mr: { xs: 0, md: "130px" },
                        mt: 2,
                      }}
                    >
                      <ReactQuill
                        value={blog?.description}
                        readOnly={true}
                        theme={"bubble"}
                      />
                    </Box>
                  </Box>
                </Box>
              </Container>
              {/* <Container>
            <Box
              sx={{
                bgcolor: "#EBF9FF",
                height: "auto",
                pb: "100px",
                pt: "30px",
              }}
            >
              <Box
                sx={{ ml: { xs: 0, md: "130px" }, mr: { xs: 0, md: "130px" } }}
              >
                <StyledMainTypo
                  sx={{ textDecoration: "underline" }}
                  gutterBottom
                >
                  FAQs
                </StyledMainTypo>
                <Box>
                  <StyledQuestionTypo gutterBottom>
                    Q: How can recruitment software streamline the hiring
                    process?
                  </StyledQuestionTypo>
                  <StyledSecondTypo gutterBottom>
                    A: Recruitment software automates administrative tasks,
                    centralizes candidate data, and improves collaboration,
                    resulting in a streamlined hiring process. It saves time,
                    enhances efficiency, and helps recruiters focus on strategic
                    activities.
                  </StyledSecondTypo>
                  <StyledQuestionTypo gutterBottom>
                    Q: Can recruitment software improve the candidate
                    experience?
                  </StyledQuestionTypo>
                  <StyledSecondTypo gutterBottom>
                    A: Absolutely. Recruitment software, such as Recroot.io,
                    offers user-friendly interfaces, personalized communication,
                    and streamlined application processes. Candidates receive
                    timely updates and feel engaged throughout their journey,
                    resulting in an improved candidate experience.
                  </StyledSecondTypo>
                  <StyledQuestionTypo gutterBottom>
                    Q: What are the benefits of using data and analytics in
                    recruitment software?
                  </StyledQuestionTypo>
                  <StyledSecondTypo gutterBottom>
                    A: Data and analytics in recruitment software provide
                    valuable insights into key metrics such as time-to-hire,
                    cost-per-hire, and source of hire. Recruiters can make
                    data-driven decisions, identify areas for improvement, and
                    optimize their recruitment strategies for better outcomes.
                  </StyledSecondTypo>
                  <StyledQuestionTypo gutterBottom>
                    Q: How does Recroot.io stand out among other recruitment
                    software providers?
                  </StyledQuestionTypo>
                  <StyledSecondTypo gutterBottom>
                    A: Recroot.io is a leading recruitment software that offers
                    a comprehensive range of features tailored for recruiters.
                    Its intuitive interface, +25000 candidate database, and fast
                    hiring process capabilities make it stand out from the
                    competition, enhancing the efficiency and effectiveness of
                    the hiring process.
                  </StyledSecondTypo>
                  <StyledQuestionTypo gutterBottom>
                    Q: How can Recroot.io benefit recruiters in their hiring
                    process?
                  </StyledQuestionTypo>
                  <StyledSecondTypo gutterBottom>
                    A: Recroot.io offers numerous advantages, including
                    automating administrative tasks, centralizing candidate
                    data, improving collaboration, and enhancing the candidate
                    experience. Recruiters can streamline their workflows, save
                    time and effort, and attract top talent by leveraging the
                    features and capabilities of Recroot.io.
                  </StyledSecondTypo>
                </Box>
              </Box>
            </Box>
          </Container> */}
            </Box>
          </Grid>
          <Grid item xs={12} md={5} lg={3.5}>
            <div className="blog-sidebar">
              <aside className="widget widget-trend-post">
                <Typography className="widget-title">Recent Posts</Typography>
                {recent.map((rec, ind) => (
                  <div key={ind} className="popular-post">
                    <Link href={`/blogs/${rec?.title}/${rec?._id}`}>
                      <img
                        src={`${API_URL}/getCompanyPhotos?compPhotos=${rec.blogImage}`}
                        alt=""
                        height={"20px"}
                      />
                      <h5>{rec.title}</h5>
                      <span>{moment(rec.updatedAt).format("DD-MM-YYYY")}</span>
                    </Link>
                  </div>
                ))}
              </aside>
              <aside className="widget">
                <Typography className="widget-title">Tags</Typography>
                <div className="tags">
                  {tags.map((tag) => (
                    <Box key={tag} className={"tags-a"}>{`# ${tag}`}</Box>
                  ))}
                </div>
              </aside>
            </div>
          </Grid>
        </Grid>
      </Box>
      <FooterHome />
    </div>
  );
};

export default BlogDetails;
