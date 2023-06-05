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

const TermsOfUse = () => {
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
            WEBSITE TERMS OF USE
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
            INTRODUCTION
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
              ml: "90px",
            }}
            gutterBottom
          >
            These Website Standard Terms And Conditions (these “Terms” or these
            “Website Standard Terms And Conditions”) contained herein on this
            webpage, shall govern your use of this website, including all pages
            within this website (collectively referred to herein below as this
            “Website”). These Terms apply in full force and effect to your use
            of this Website and by using this Website, you expressly accept all
            terms and conditions contained herein in full. You must not use this
            Website, if you have any objection to any of these Website Standard
            Terms And Conditions.This Website is not for use by any minors
            (defined as those who are not at least 18 years of age), and you
            must not use this Website if you a minor.
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
            RESTRICTIONS
          </CustomTypography>
        </Container>
      </Box>
      <Box sx={{ mt: "20px", mb: "20px" }}>
        <Container>
          <CustomTypography
            variant="h6"
            sx={{
              fontWeight: 700,
              fontSize: "18px",
              color: "#034275",
              mt: "30px",
              mb: "30px",
            }}
            gutterBottom
          >
            You are expressly and emphatically restricted from all of the
            following:
          </CustomTypography>
          <CustomTypography
            variant="h6"
            sx={{
              fontWeight: 400,
              fontSize: "16px",
              color: "rgba(1, 49, 63, 0.8)",
              ml: "90px",
              lineHeight: "30px",
            }}
            gutterBottom
          >
            <ul>
              <li>1. publishing any Website material in any media;</li>
              <li>
                2. selling, sublicensing and/or otherwise commercializing any
                Website material;
              </li>
              <li>
                3. publicly performing and/or showing any Website material;
              </li>
              <li>
                4. using this Website in any way that is, or may be, damaging to
                this Website;
              </li>
              <li>
                5. using this Website in any way that impacts user access to
                this Website;
              </li>
              <li>
                6. using this Website contrary to applicable laws and
                regulations, or in a way that causes, or may cause, harm to the
                Website, or to any person or business entity;
              </li>
              <li>
                7. engaging in any data mining, data harvesting, data extracting
                or any other similar activity in relation to this Website, or
                while using this Website;
              </li>
              <li>
                8. using this Website to engage in any advertising or marketing;
              </li>
              <li>
                Certain areas of this Website are restricted from access by you
                and Recroot may further restrict access by you to any areas of
                this Website, at any time, in its sole and absolute discretion.
                Any user ID and password you may have for this Website are
                confidential and you must maintain confidentiality of such
                information.
              </li>
            </ul>
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
            NO WARRANTIES
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
              ml: "90px",
            }}
            gutterBottom
          >
            This Website is provided “as is,” with all faults, and Recroot makes
            no express or implied representations or warranties, of any kind
            related to this Website or the materials contained on this Website.
            Additionally, nothing contained on this Website shall be construed
            as providing consult or advice to you.
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
            LIMITATION OF LIABILITY
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
              ml: "90px",
            }}
            gutterBottom
          >
            In no event shall Recroot, nor any of its officers, directors and
            employees, be liable to you for anything arising out of or in any
            way connected with your use of this Website, whether such liability
            is under contract, tort or otherwise, and Recroot, including its
            officers, directors and employees shall not be liable for any
            indirect, consequential or special liability arising out of or in
            any way related to your use of this Website.
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
            INDEMNIFICATION
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
              ml: "90px",
            }}
            gutterBottom
          >
            You hereby indemnify to the fullest extent Recroot from and against
            any and all liabilities, costs, demands, causes of action, damages
            and expenses (including reasonable attorney’s fees) arising out of
            or in any way related to your breach of any of the provisions of
            these Terms.
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
            SEVERABILITY
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
              ml: "90px",
            }}
            gutterBottom
          >
            If any provision of these Terms is found to be unenforceable or
            invalid under any applicable law, such unenforceability or
            invalidity shall not render these Terms unenforceable or invalid as
            a whole, and such provisions shall be deleted without affecting the
            remaining provisions herein.
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
            VARIATION OF TERMS
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
              ml: "90px",
            }}
            gutterBottom
          >
            Recroot is permitted to revise these Terms at any time as it sees
            fit, and by using this Website you are expected to review such Terms
            on a regular basis to ensure you understand all terms and conditions
            governing use of this Website.
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
            ASSIGNMENT
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
              ml: "90px",
            }}
            gutterBottom
          >
            Recroot shall be permitted to assign, transfer, and subcontract its
            rights and/or obligations under these Terms without any notification
            or consent required. However, you shall not be permitted to assign,
            transfer, or subcontract any of your rights and/or obligations under
            these Terms.
          </CustomTypography>
        </Container>
      </Box>
      <Box
        sx={{
          mt: "100px",
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

export default TermsOfUse;
