import FooterHome from "@/components/Home/FooterHome";
import Navbar from "@/components/Navbar/Navbar";
import { BOLD } from "@/theme/fonts";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { Box, Chip, Container, Divider, IconButton } from "@mui/material";
import Image from "next/image";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AssistantIcon from "@mui/icons-material/Assistant";
import ShareIcon from "@mui/icons-material/Share";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

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

const BlogDetails = () => {
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
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Container>
          <Box sx={{ mt: "30px" }}>
            <Image
              src="/blog-detail-img.png"
              alt=""
              width={1000}
              height={600}
              style={{ width: "100%" }}
            />
          </Box>
        </Container>
        <Container>
          <Box
            sx={{
              bgcolor: "#F1F6F8",
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
              sx={{ ml: { xs: 0, md: "130px" }, mr: { xs: 0, md: "130px" } }}
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
                    14-05 -2023
                  </CustomTypography>
                </Box>
                <Box sx={{ display: "flex", gap: "5px" }}>
                  <AssistantIcon sx={{ color: "#02A9F7" }} />
                  <CustomTypography
                    gutterBottom
                    sx={{ fontSize: "16px", color: "#01313F" }}
                  >
                    Recruitment
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
                The Benefits of Using Recruitment software
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
                <Chip
                  label="#Recruitmentsoftware"
                  sx={{ bgcolor: "#D4F0FC" }}
                />
                <IconButton aria-label="share">
                  <ShareIcon sx={{ color: "#0183C9", fontSize: "30px" }} />
                </IconButton>
              </Box>
              <Divider
                sx={{ mt: "20px", bgcolor: "rgba(175, 209, 237, 0.69)" }}
              />
            </Box>
            <Box
              sx={{ ml: { xs: 0, md: "130px" }, mr: { xs: 0, md: "130px" } }}
            >
              <StyledSecondTypo gutterBottom>
                Recruitment is a complex and time-consuming process that
                involves multiple stages, from sourcing and screening candidates
                to interviewing and onboarding. In today&apos;s digital age,
                recruitment software has emerged as a powerful tool that can
                greatly streamline and enhance the hiring process. Let&apos;s explore
                the numerous benefits of using recruitment software, ranging
                from automating administrative tasks to improving the overall
                candidate experience.
              </StyledSecondTypo>
              <StyledMainTypo gutterBottom>
                Streamlining Administrative Tasks
              </StyledMainTypo>
              <StyledSecondTypo gutterBottom>
                One of the primary advantages of recruitment software is its
                ability to automate administrative tasks, saving valuable time
                and effort for recruiters. Tasks such as job posting, resume
                parsing, and candidate tracking can be efficiently managed
                through software, eliminating the need for manual data entry and
                reducing the risk of errors. This automation allows recruiters
                to focus more on strategic activities like candidate engagement
                and talent acquisition.
              </StyledSecondTypo>
              <StyledMainTypo gutterBottom>
                Centralizing Candidate Data
              </StyledMainTypo>
              <StyledSecondTypo gutterBottom>
                Recruitment software serves as a centralized repository for all
                candidate data, making it easily accessible and searchable. This
                enables recruiters to efficiently manage and organize applicant
                information, resumes, and interview notes in a systematic
                manner. With a few clicks, recruiters can retrieve specific
                candidate details, track progress, and collaborate seamlessly
                with hiring managers and team members.
              </StyledSecondTypo>
              <StyledMainTypo gutterBottom>
                Enhancing Collaboration and Communication
              </StyledMainTypo>
              <StyledSecondTypo gutterBottom>
                Recruitment software promotes effective collaboration and
                communication among various stakeholders involved in the hiring
                process. It allows recruiters and hiring managers to share
                feedback, exchange notes, and evaluate candidates
                collaboratively within the platform. Real-time updates and
                notifications ensure that all team members are on the same page,
                resulting in faster decision-making and a more streamlined
                hiring process.
              </StyledSecondTypo>
              <StyledMainTypo gutterBottom>
                Improving Candidate Sourcing and Screening
              </StyledMainTypo>
              <StyledSecondTypo gutterBottom>
                Recruitment software provides robust features for candidate
                sourcing and screening, enabling recruiters to identify the most
                suitable candidates efficiently. Advanced search capabilities,
                filtering options, and keyword matching algorithms help
                recruiters quickly identify qualified candidates from a vast
                pool of applicants. This saves time and effort, ensuring that
                recruiters focus on candidates who best match the job
                requirements.
              </StyledSecondTypo>
              <StyledMainTypo gutterBottom>
                Enhancing Candidate Experience
              </StyledMainTypo>
              <StyledSecondTypo gutterBottom>
                A positive candidate experience is crucial for attracting top
                talent and building a strong employer brand. Recruitment
                software facilitates a seamless and user-friendly application
                process for candidates. Features like mobile-friendly
                applications, automated responses, and personalized
                communication help create a positive impression and improve
                overall candidate satisfaction. Additionally, software can
                provide status updates to candidates, keeping them engaged and
                informed throughout the hiring process.
              </StyledSecondTypo>
              <StyledMainTypo gutterBottom>
                Leveraging Data and Analytics
              </StyledMainTypo>
              <StyledSecondTypo gutterBottom>
                Recruitment software provides valuable insights through data and
                analytics, empowering recruiters to make data-driven decisions.
                Key recruitment metrics, such as time-to-hire, cost-per-hire,
                and source of hire, can be easily tracked and analyzed. These
                insights enable recruiters to identify bottlenecks, optimize
                their hiring strategies, and continuously improve the
                recruitment process.
              </StyledSecondTypo>
              <StyledMainTypo gutterBottom>
                Ensuring Compliance and Security
              </StyledMainTypo>
              <StyledSecondTypo gutterBottom>
                Recruitment involves handling sensitive candidate data and
                ensuring compliance with data protection regulations.
                Recruitment software offers robust security measures, including
                data encryption, access controls, and regular backups, to
                safeguard candidate information. Additionally, it helps
                recruiters maintain compliance with privacy regulations, such as
                GDPR or CCPA, by providing tools and features designed to adhere
                to these requirements.
              </StyledSecondTypo>
              <StyledMainTypo gutterBottom>
                Recroot.io: A Cut Above the Rest
              </StyledMainTypo>
              <StyledSecondTypo gutterBottom>
                As a leading recruitment software, Recroot.io offers unique
                advantages that set it apart from the competition. With its
                intuitive interface, user-friendly design, and comprehensive
                feature set, Recroot.io simplifies the hiring process and
                maximizes efficiency. Its customizable workflows, tailored
                reporting, and seamless integrations ensure that recruiters can
                adapt the platform to their specific needs. Recroot.io&apos;s
                commitment to providing fast hiring within 24 hours, data
                security, compliance, and dedicated customer support further
                reinforces its position as a trusted recruitment software
                provider.
              </StyledSecondTypo>
            </Box>
          </Box>
        </Container>
        <Box
          sx={{ bgcolor: "#EBF9FF", height: "auto", pb: "100px", pt: "30px" }}
        >
          <Container>
            <Box
              sx={{ ml: { xs: 0, md: "130px" }, mr: { xs: 0, md: "130px" } }}
            >
              <StyledMainTypo sx={{ textDecoration: "underline" }} gutterBottom>
                FAQs
              </StyledMainTypo>
              <Box>
                <StyledQuestionTypo gutterBottom>
                  Q: How can recruitment software streamline the hiring process?
                </StyledQuestionTypo>
                <StyledSecondTypo gutterBottom>
                  A: Recruitment software automates administrative tasks,
                  centralizes candidate data, and improves collaboration,
                  resulting in a streamlined hiring process. It saves time,
                  enhances efficiency, and helps recruiters focus on strategic
                  activities.
                </StyledSecondTypo>
                <StyledQuestionTypo gutterBottom>
                  Q: Can recruitment software improve the candidate experience?
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
                  A: Data and analytics in recruitment software provide valuable
                  insights into key metrics such as time-to-hire, cost-per-hire,
                  and source of hire. Recruiters can make data-driven decisions,
                  identify areas for improvement, and optimize their recruitment
                  strategies for better outcomes.
                </StyledSecondTypo>
                <StyledQuestionTypo gutterBottom>
                  Q: How does Recroot.io stand out among other recruitment
                  software providers?
                </StyledQuestionTypo>
                <StyledSecondTypo gutterBottom>
                  A: Recroot.io is a leading recruitment software that offers a
                  comprehensive range of features tailored for recruiters. Its
                  intuitive interface, +25000 candidate database, and fast
                  hiring process capabilities make it stand out from the
                  competition, enhancing the efficiency and effectiveness of the
                  hiring process.
                </StyledSecondTypo>
                <StyledQuestionTypo gutterBottom>
                  Q: How can Recroot.io benefit recruiters in their hiring
                  process?
                </StyledQuestionTypo>
                <StyledSecondTypo gutterBottom>
                  A: Recroot.io offers numerous advantages, including automating
                  administrative tasks, centralizing candidate data, improving
                  collaboration, and enhancing the candidate experience.
                  Recruiters can streamline their workflows, save time and
                  effort, and attract top talent by leveraging the features and
                  capabilities of Recroot.io.
                </StyledSecondTypo>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
      <FooterHome />
    </div>
  );
};

export default BlogDetails;
