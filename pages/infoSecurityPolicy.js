import FooterHome from "@/components/Home/FooterHome";
import Navbar from "@/components/Navbar/Navbar";
import { BOLD } from "@/theme/fonts";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { Box, Button, Container, Grid, Stack } from "@mui/material";
import Image from "next/image";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const InformationSecurityPolicy = () => {
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
            Information security policy
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
            Policy summary
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
            Recroot takes information security seriously. We at Recroot
            understand that our professionals working for various clients might
            be provided access to sensitive information. Some of this
            information may also be regulated under different jurisdictions.
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
            Applicability
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
            This policy applies to all employees and contractors of Recroot.
            This policy also applies to third party employees working for the
            organization whether they are explicitly bound (e.g. by contractual
            terms and conditions) or implicitly bound (e.g. by generally held
            standards of ethics and acceptable behavior) to comply with our
            information security policies.
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
            Responsibilities
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
              mt: "20px",
              mb: "20px",
            }}
            gutterBottom
          >
            Recroot Responsibilities
          </CustomTypography>
          <CustomTypography
            variant="h6"
            sx={{
              fontWeight: 400,
              fontSize: "16px",
              color: "rgba(1, 49, 63, 0.8)",
              ml: "90px",
              lineHeight: "40px",
            }}
            gutterBottom
          >
            <ul>
              <li>
                Information Security is the shared responsibility of Recroot,
                clients and candidates. Recroot is responsible for
              </li>
              <li>
                1) Establishing and implementing reasonable measures to protect
                client and candidate information stored within Recroot network
              </li>
              <li>
                2) Provide periodic information security awareness training for
                our staff
              </li>
              <li>3) Conduct appropriate background checks for our staff</li>
              <li>
                4) Ensure the staff devices are patched and secured using
                appropriate anti-virus software
              </li>
              <li>
                5) Ensure that third parties employed by Recroot comply with
                Recroot’s information security policy
              </li>
            </ul>
          </CustomTypography>
          <CustomTypography
            variant="h6"
            sx={{
              fontWeight: 700,
              fontSize: "18px",
              color: "#034275",
              mt: "20px",
              mb: "20px",
              ml: "90px",
            }}
            gutterBottom
          >
            Client Responsibilities
          </CustomTypography>
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
            Scope of Recroot’s information security measures is limited to
            Recroot staff having access to client information, securing the
            infrastructure that hold client information and taking reasonable
            measures to comply with client’s information security policies.
            Recroot is not responsible for client’s information security
            capabilities including the security of the software implemented by
            the client on staff devices issued by Recroot. Client
            responsibilities include
          </CustomTypography>
          <CustomTypography
            variant="h6"
            sx={{
              fontWeight: 400,
              fontSize: "16px",
              color: "rgba(1, 49, 63, 0.8)",
              ml: "90px",
              lineHeight: "40px",
            }}
            gutterBottom
          >
            <ul>
              <li>
                1) Implementing appropriate and reasonable measures to protect
                their information and personal information belonging to Recroot
              </li>
              <li>
                2) Securing the software installed on Recroot staff devices
              </li>
              <li>
                3) Clearly articulating their information security policies to
                Recroot our staff
              </li>
              <li>4) Complying with appropriate cyber regulations</li>
            </ul>
          </CustomTypography>
          <CustomTypography
            variant="h6"
            sx={{
              fontWeight: 700,
              fontSize: "18px",
              color: "#034275",
              mt: "20px",
              mb: "20px",
              ml: "90px",
            }}
            gutterBottom
          >
            Detailed policy requirements
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
              <li>
                1. Cybersecurity is largely a matter of mitigating cyber-risks
                through conventional information security controls, especially
                ICT security controls intended to prevent or mitigate (reduce)
                cyber-incidents.
              </li>
              <li>
                2. While conventional information security controls to prevent
                or mitigate cyber-incidents take priority, we must not neglect
                detective and corrective controls since cyber-incidents cannot
                be entirely negated. We are unlikely to identify and fully
                comprehend, mitigate or avoid all our cyber-risks in this
                dynamic area, hence cyber-incidents are almost inevitable.
              </li>
              <li>
                3. Detective cybersecurity controls include:
                <ul sx={{ ml: "10px" }}>
                  <li>
                    • Maintaining a widespread awareness of cybersecurity,
                    coupled with policies and procedures for spotting, reporting
                    and responding effectively and efficiently to possible or
                    confirmed cyber-incidents
                  </li>
                  <li>
                    • Effective IT system and network security monitoring, and
                    responding to indications of possible or actual
                    cyber-incidents as effectively and efficiently as possible;
                  </li>
                  <li>
                    • Management assessing and responding to reports of
                    cyber-risks, cybersecurity events, incidents, suspicions
                    etc. including relevant metrics.
                  </li>
                </ul>
              </li>
              <li>
                4. Corrective cybersecurity controls include:
                <ul sx={{ ml: "10px" }}>
                  <li>
                    • Business continuity management involving the adoption of
                    appropriate resilience, recovery and contingency measures to
                    protect critical business activities, including the
                    associated ICT, against excessive interruptions;
                  </li>
                </ul>
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
            Further information
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
            For any queries on our information security policy or know more,
            please reach out to us through
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

export default InformationSecurityPolicy;
