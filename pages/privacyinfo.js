import FooterHome from "@/components/Home/FooterHome";
import Navbar from "@/components/Navbar/Navbar";
import { BOLD } from "@/theme/fonts";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { Box, Button, Container, Grid, Stack } from "@mui/material";
import Image from "next/image";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const StyledMainTypo = styled(CustomTypography)({
  fontSize: "22px",
  color: "#034275",
  fontWeight: 600,
  whiteSpace: "nowrap",
});

const StyledSecondTypo = styled(CustomTypography)({
  fontSize: "20px",
  color: "#034275",
  fontWeight: 400,
});

const PrivacyInfo = () => {
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
            Privacy Info
          </CustomTypography>
        </Container>
      </Box>

      <Box sx={{ mt: "20px", bgcolor: "#EFF7FF" }}>
        <Container>
          <CustomTypography
            variant="h6"
            sx={{
              fontWeight: 600,
              fontSize: "22px",
              color: "#01313F",
            }}
            gutterBottom
          >
            Privacy Statement
          </CustomTypography>
        </Container>
      </Box>
      <Box sx={{ mt: "20px", mb: "20px" }}>
        <Container>
          <CustomTypography
            variant="h6"
            sx={{
              fontWeight: 400,
              fontSize: "16px",
              color: "rgba(1, 49, 63, 0.8)",
              ml: { xs: "10px", sm: "90px" },
            }}
            gutterBottom
          >
            Welcome to Recroot. This privacy policy (&ldquo;Policy&ldquo;)
            describes how AR Innovations Pty Ltd (ACN 652 722 337)
            (&ldquo;We&ldquo;, &ldquo;we&ldquo;, or &ldquo;Recroot&ldquo;) may
            collect, use, store and disclose Personal Information that we may
            collect about our candidates and clients. In this Policy,
            &ldquo;Personal Information&ldquo; refers to information or an
            opinion about an identified individual or an individual who is
            reasonably identifiable, whether the information is true or not or
            is recorded in a material form or not.
          </CustomTypography>
        </Container>
      </Box>
      <Box sx={{ mt: "20px", bgcolor: "#EFF7FF" }}>
        <Container>
          <CustomTypography
            variant="h6"
            sx={{
              fontWeight: 600,
              fontSize: "22px",
              color: "#01313F",
            }}
            gutterBottom
          >
            Collections and Uses of Personal Information
          </CustomTypography>
        </Container>
      </Box>
      <Box sx={{ mt: "20px", mb: "20px" }}>
        <Container>
          <CustomTypography
            variant="h6"
            sx={{
              fontWeight: 400,
              fontSize: "16px",
              color: "rgba(1, 49, 63, 0.8)",
              ml: { xs: "10px", sm: "90px" },
            }}
            gutterBottom
          >
            When you opt for service offered by Recroot, we may ask for certain
            Personal Information that will assist us to provide you with a
            service that meets your needs and circumstances. We may also collect
            Personal Information from candidates through interviews, tests, CVs,
            resumes, and references, or when they submit their CV to us. The
            categories of Personal Information we may collect include name and
            contact information (email, address and phone number), date of
            birth. We may also collect information about our candidate’s
            employment experience, educational history, expectations, skills,
            personality, salary, references information, background information,
            other information contained in their resume, and any other relevant
            information. <br></br>
            <br></br>
            Without such information, Recroot may not be able to provide certain
            services offered by us.
            <br></br>
            <br></br>
            The Recroot.io site also utilises cookies to track your online
            activities, including, but not limited to, registration,
            submissions, and information requests. Cookies are pieces of
            information that a website transfers to your computer&apos;s hard
            disk for record keeping purposes. Most web browsers are set to
            accept cookies. Cookies in and of themselves do not personally
            identify users, although they do identify a user&apos;s browser. If
            you do not wish to receive any cookies you may set your browser to
            refuse cookies. This may mean you will not be able to take full
            advantage of the services on the Site.
            <br></br>
            <br></br>
            If at any time you wish to delete your Personal Information that we
            have collected, please contact us by sending a message to
            privacy@recroot.io. We will take reasonable steps to delete
            information in response to such a request. We will also delete (or
            de-identify) Personal Information once the purpose for which that
            data was collected has been achieved or complete.
            <br></br>
            <br></br>
            We use Personal Information and other data in order to meet the
            needs of our business, including: to provide candidates with
            information regarding employment opportunities and career-related
            information; to process any employment application; for purposes
            relating to employment opportunities; human resource management;
            complying with regulations; for purposes relating to or in
            connection with recruitment or employment; to send candidates and
            clients direct marketing related to our products and services; for
            any other purpose authorised by you or permitted by applicable law.
            <br></br>
            <br></br>
            We may also from time to time use your Personal Information to send
            you automated email messages or marketing materials regarding our
            services, including employment information. You may opt out of
            receiving such marketing email messages by unsubscribing from our
            database.
            <br></br>
            <br></br>
            We may transfer your personal details to related bodies corporate of
            the Company, clients of the Company or third parties who provide
            services to the Company. These entities are located in Australia,
            India and Sri Lanka.
          </CustomTypography>
          <CustomTypography
            variant="h6"
            sx={{
              fontWeight: 600,
              fontSize: "18px",
              color: "rgba(1, 49, 63, 0.8)",
              mt: "30px",
              mb: "30px",
              ml: { xs: "10px", sm: "90px" },
            }}
            gutterBottom
          >
            Recroot will not use or disclose any information about you without
            your consent, unless the use or disclosure is:
          </CustomTypography>
          <CustomTypography
            variant="h6"
            sx={{
              fontWeight: 400,
              fontSize: "16px",
              color: "rgba(1, 49, 63, 0.8)",
              ml: { xs: "10px", sm: "90px" },
              lineHeight: "30px",
            }}
            gutterBottom
          >
            <ol style={{ listStyleType: "decimal" }}>
              <li>
                For the purpose of disclosing information to our clients where
                necessary and appropriate in connection with the provision of a
                service;
              </li>
              <li>
                For the purpose of disclosing information to companies and
                individuals we employ to perform business functions and services
                on our behalf, on the basis that such companies and individuals
                must protect your Personal Information and may not disclose or
                use it for unrelated purposes. Such functions may include, for
                example, hosting our Web servers, analysing data, providing
                legal, accounting and marketing services;
              </li>
              <li>
                Necessary to provide clients with a product or service which
                they have requested;
              </li>
              <li>
                To the extent necessary or appropriate to government agencies,
                advisors, and other third parties in order to comply with
                applicable laws, the service of legal process, or if we
                reasonably believe that such action is necessary to (a) comply
                with the law requiring such disclosure; (b) protect the rights
                or property of Recroot or its affiliated companies; (c) prevent
                a crime or protect national security (d) protect the personal
                safety of the users or the public;(e) to assist the
                investigation of an offence by a law enforcement authority; or
                prevent a serious or imminent threat to an individual&apos;s
                life, health or safety or public health or safety.
              </li>
            </ol>
            <br></br>
            Recroot will endeavour to take reasonable steps to protect Personal
            Information from misuse, interference, loss, unauthorised access,
            modification or disclosure.
            <br></br>
            <br></br>
            You are entitled to request access to any Personal Information that
            we hold about you, and you can do this by emailing us at
            privacy@recroot,io. You may request that we correct Personal
            Information that is inaccurate or out of date.
            <br></br>
            <br></br>
            If there are concerns or complaints about how we handle personal
            information, or if there are any questions about this policy, please
            contact us.
            <br></br>
            <br></br>
            This Policy is effective as of 1st October 2022. If you have any
            questions about our privacy policy, please contact us at:
          </CustomTypography>
        </Container>
      </Box>
      <Box
        sx={{
          mt: "40px",
          height: "80px",
          bgcolor: "#1097CD",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container>
          <CustomTypography
            variant="h6"
            sx={{
              fontWeight: 600,
              fontSize: "22px",
              color: "#FFFFFF",
              textAlign: "center",
            }}
            gutterBottom
          >
            <EmailOutlinedIcon sx={{ fontSize: "35px" }} /> Email:
            privacy@arinnovate.io
          </CustomTypography>
        </Container>
      </Box>
      <FooterHome />
    </div>
  );
};

export default PrivacyInfo;
