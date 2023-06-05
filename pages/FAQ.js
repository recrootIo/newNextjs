import FooterHome from "@/components/Home/FooterHome";
import Navbar from "@/components/Navbar/Navbar";
import { BOLD } from "@/theme/fonts";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { Box, Collapse, Container, Stack } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";

const faqData = [
  {
    question: "What is Recroot?",
    answer:
      "Recroot is an online platform that connects job seekers with potential employers. This platform allows employers to post job openings, manage applications, and screen candidates while providing candidates with a centralized location to search for job opportunities, submit resumes, and apply for jobs.",
  },
  {
    question: "How do I register to Recroot?",
    answer:
      "You can register easily by clicking the 'Sign Up' button on the home page and selecting the account type (candidate or employer). You can register with Recroot by Google, Linkedin, or by filling out the registration form.",
  },
  {
    question: "Can I edit my account information on Recroot?",
    answer:
      "Yes. You can edit your account information anytime by logging into your Recroot account. Once you have logged in, you can open the “My Account” section to update the profile information.",
  },
  {
    question:
      "Is there a hidden cost for candidates on Recroot for the service it provides? ",
    answer:
      "Of Course Not! They can sign up with the Recroot platform and apply for jobs free of charge.",
  },
  {
    question:
      "As a candidate, is it essential for me to upload my resume and complete my profile to apply for jobs? ",
    answer:
      "Yes. After you create an account on Recroot, it is essential for you to upload your resume to the system and give other essential information like notice period, salary expectations, etc. to reach a minimum of 70% profile completion rate. Then and only you can apply for jobs on the portal. ",
  },
  {
    question: "As a candidate, how do I apply for a position?",
    answer:
      "Visit our Recroot page and view our current open positions after completing your Recroot profile with a minimum of 70%. After reviewing the requirements, if your skills meet the specific requirements for one or more positions, click on apply button and complete all fields of the application and submit.",
  },
  {
    question:
      "Can candidates apply for more than one vacancy on the Recroot platform?",
    answer:
      "Yes, they can apply for any number of vacancies posted on the Recroot platform free of charge.",
  },
  {
    question:
      "As a candidate, how can I track the status of my job applications?",
    answer:
      "After applying for a job, log in to your Recroot account and navigate to the 'Applied Jobs' section. Here, you will find a list of the jobs you have applied to along with their current status.",
  },
  {
    question: "Can I save jobs on Recroot for future reference?",
    answer:
      "Yes. When you come across a job listing that interests you, you will typically find a 'Save' or 'Bookmark' button associated with the job posting. By clicking on this button, you can save the job to your personal list of saved jobs.",
  },
  {
    question:
      "As a candidate, how can I schedule a meeting with a candidate manager for any inquiry?",
    answer:
      "You can use the link 'https://Recroot.io/cm' to connect with one of our candidate managers by scheduling a meeting at your convenience.",
  },
  {
    question: "Can employers register with the Recroot platform free of cost?",
    answer:
      "Yes. Employers can register with the Recroot site without any cost. ",
  },
  {
    question: "How does Recroot's AI help employers source candidates?",
    answer:
      "Utilizing advanced AI algorithms, our platform automatically identifies candidates and matches job descriptions with the most qualified candidates. Our intelligent system takes into account factors such as skills, experience, education, and other relevant criteria to ensure optimal candidate matches.",
  },
  {
    question: "As an employer, how do I post a job on Recroot?",
    answer:
      "To post a job on Recroot, log into your employer account and click on the “Post New Job” button. Fill out the job details including job title, job description, required skills, location, experience level, etc. You can also set the application deadline. Then you can submit the completed application to make the job post live on Recroot.",
  },
  {
    question: "As an employer, how do I deactivate my job post?",
    answer:
      "To deactivate a job post on Recroot, log into your employer account and navigate to your dashboard. There, you can see all the jobs you posted on Recroot. You can click on the 'Action' button related to the job post you want to deactivate and change the status to 'Deactivate'.",
  },
  {
    question: "Can I edit job ads after posting on Recroot?",
    answer:
      "Yes. You can easily access and edit your job ads from your Recroot account dashboard. Just make sure to review your changes before saving to ensure accuracy and consistency in your job postings.",
  },
  {
    question: "How does an employer subscribe to a pricing plan on Recroot?",
    answer:
      "As soon as a person registers with Recroot as an employer, the system will land the “Pricing” page. There, he/she can choose whatever plan wants based on his/her hiring needs and does the payment. If the employer chooses the free plan, the system will allow him/her to post job listings and access some basic features without any cost. ",
  },
  {
    question:
      "Before posting a job on Recroot, is it mandatory to subscribe to a pricing plan?",
    answer:
      "Yes. It’s required to have an active subscription to a pricing plan on Recroot before posting a job.",
  },
  {
    question:
      "As an employer, can I track candidates’ applications on Recroot?",
    answer:
      "Yes. Recroot allows employers to view and manage all the applications they receive for the jobs posted on Recroot in one place and easily sort, filter and search for specific candidate profiles based on their qualifications, experience, and other criteria. ",
  },
  {
    question:
      "Can employers get matching profiles from your candidate database for the jobs they posted on Recroot?",
    answer:
      "Once employers subscribed to one of our pricing plans and posted their job on the Recroot portal, they can easily request candidates by simply clicking a button. Within 12 hours, we'll provide them with a list of potential candidates who match their job description.",
  },
  {
    question:
      "As an employer, can I see matching profiles for my job ads posted on Recroot?",
    answer:
      "Yes. Once you post a job on Recroot, the system allows you to filter candidate profiles in the candidate database and also applicants based on three matching criteria called “Strong Match”, “Good Match”, and “Minimum Match” according to your job description.",
  },
  {
    question:
      "As an employer, how can I schedule a demo with Recroot for more information?",
    answer:
      "You can simply book a demo with Recroot by clicking on the link “Schedule a Demo” after successfully registering with the Recroot platform. ",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };
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
            Frequently Asked Questions
          </CustomTypography>
        </Container>
      </Box>

      <Container>
        <Stack spacing={3} sx={{ mt: "70px", mb: "100px" }}>
          {faqData.map((item, index) => (
            <Box key={index}>
              <Box
                sx={{
                  backgroundColor: "#00339B",
                  borderRadius: "10px",
                  height: "80px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px 30px",
                }}
                onClick={() => handleToggle(index)}
              >
                <CustomTypography
                  sx={{
                    fontWeight: 500,
                    color: "white",
                    fontSize: "20px",
                    display: "flex",
                    flex: 1,
                  }}
                >
                  {`${index + 1}. ${item.question}`}
                </CustomTypography>
                <Box sx={{ cursor: "pointer" }}>
                  {openIndex === index ? (
                    <ExpandLess sx={{ color: "white" }} />
                  ) : (
                    <ExpandMore sx={{ color: "white" }} />
                  )}
                </Box>
              </Box>
              <Collapse in={openIndex === index} timeout="auto">
                <Box
                  sx={{
                    height: "auto",
                    border: "1px solid rgba(3, 66, 117, 0.4)",
                    borderRadius: "10px",
                    padding: "40px 30px",
                  }}
                >
                  <CustomTypography
                    sx={{
                      fontWeight: 500,
                      color: "rgba(1, 49, 63, 0.8)",
                      fontSize: "18px",
                    }}
                  >
                    {item.answer}
                  </CustomTypography>
                </Box>
              </Collapse>
            </Box>
          ))}
        </Stack>
      </Container>
      <FooterHome />
    </div>
  );
};

export default FAQ;
