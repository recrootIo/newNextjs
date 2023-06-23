"use client";
import Cookies from "js-cookie";
import { CustomTypography } from "../../ui-components/CustomTypography/CustomTypography";
import { Grid, Box, Stack, Container, styled } from "@mui/material";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getCompanyDetails } from "@/redux/slices/companyslice";
import { companyJobs } from "@/redux/slices/job";

const StyledTypo = styled(CustomTypography)({
  cursor: "pointer",
  color: "white",
});

const FooterHome = () => {
  const user = Cookies.get();
  const { push } = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCompanyDetails());
    dispatch(companyJobs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const company = useSelector((state) => state.company?.companyDetl);
  const cjobs = useSelector((state) => state.jobs.companyJobs) || [];
  const freePack = company.package?.subscription_package === "Free";
  const freeCount = freePack === true ? 2 - cjobs.length : 0;
  // const proCOunt = company?.jobCounts?.proCount;
  const preCOunt = company?.jobCounts?.premiumCount;

  const handlePostNewJobClick = () => {
    if (
      user?.country === "LK" ||
      (company.jobSlot === true &&
        company.package?.paymentStatus === "Completed")
    ) {
      if (
        company.jobSlot === true &&
        company.package?.paymentStatus === "Completed"
      ) {
        dispatch(
          setEditJob({
            salary: {},
            question: [
              {
                id: new Date().getTime(),
                questions: "",
                answer: "",
                preferedAns: "",
              },
            ],
            requiredSkill: [],
            address: [],
            featureType: false,
            queshow: "",
          })
        ).then(
          setTimeout(() => {
            push("/Employer/PostNewJob");
          }, 500)
        );
        return;
      }
      // eslint-disable-next-line no-mixed-operators
      if (
        (freeCount === 0 && preCOunt === 0) ||
        (freeCount === 0 && preCOunt === undefined)
      ) {
        if (company.package?.subscription_package === undefined) {
          dispatch(
            openAlert({
              type: ERROR,
              message: "Subscribe A Plan To Post A job",
            })
          );
        } else {
          dispatch(
            openAlert({
              type: ERROR,
              message: "Your Job Limit Was Reached!",
            })
          );
        }
        push("/Pricing");
        return;
      }

      dispatch(
        setEditJob({
          salary: {},
          question: [
            {
              id: new Date().getTime(),
              questions: "",
              answer: "",
              preferedAns: "",
            },
          ],
          requiredSkill: [],
          address: [],
          featureType: false,
          queshow: "true",
          packageType: "",
        })
      ).then(
        setTimeout(() => {
          push("/Employer/PostNewJob");
        }, 500)
      );
    } else {
      dispatch(
        setEditJob({
          salary: {},
          question: [
            {
              id: new Date().getTime(),
              questions: "",
              answer: "",
              preferedAns: "",
            },
          ],
          requiredSkill: [],
          address: [],
          featureType: false,
          queshow: "",
        })
      ).then(
        setTimeout(() => {
          push("/Employer/PostNewJob");
        }, 500)
      );
    }
  };

  return (
    <div className="footer">
      <Box
        sx={{
          pt: { xs: "20px", md: "80px" },
          pb: "20px",
          maxHeight: { md: "370px" },
          textAlign: { xs: "center", md: "left" },
          mt: "30px",
          backgroundImage: "url(/FooterBG.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          color: "white",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Container>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: { lg: "space-between" },
              mt: "30px",
            }}
          >
            <Grid
              item
              xs={12}
              sm={6}
              md={5}
              lg={4}
              sx={{
                flexDirection: "column",
                gap: "10px",
                alignItems: { md: "flex-start", sm: "center", xs: "center" },
                display: "flex",
                marginTop: { sm: "20px", xs: "20px", md: "0" },
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: { md: "flex-start", sm: "center", xs: "center" },
                  justifyContent: {
                    md: "flex-start",
                    sm: "center",
                    xs: "center",
                  },
                }}
              >
                <Image
                  src="/whiteLogo.png"
                  alt=""
                  className="whiteLogo"
                  height={159}
                  style={{ marginRight: "10px" }}
                  width={45}
                />
              </div>
              <div className="para">
                <StyledTypo sx={{ fontSize: "18px" }}>
                  Recroot is a Next Gen Jobs Platform Connecting Organisations
                  with Remote Tech Professionals through Permanent, Contract and
                  Freelancing Recruitment Solutions.
                </StyledTypo>
              </div>
            </Grid>

            <Grid item xs={12} sm={6} md={2} lg={2}>
              <Box>
                <div className="jobs">
                  <StyledTypo
                    variant="h6"
                    sx={{
                      mb: "10px",
                      marginTop: "20px",
                      fontSize: "22px",
                      fontFamily: "Inter-Bold",
                    }}
                  >
                    Jobs
                  </StyledTypo>
                </div>
                <div className="abt">
                  <Link href={"/jobs"}>
                    <StyledTypo>Job Listing</StyledTypo>
                  </Link>
                  <StyledTypo
                    onClick={() => {
                      handlePostNewJobClick();
                    }}
                  >
                    Post New Job
                  </StyledTypo>
                  {/* <StyledTypo>Job Packages</StyledTypo> */}
                </div>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={2} lg={2}>
              <Box>
                <div className="jobs">
                  <StyledTypo
                    variant="h6"
                    sx={{
                      mb: "10px",
                      fontSize: "22px",
                      fontFamily: "Inter-Bold",
                      marginTop: "20px",
                    }}
                  >
                    Legal
                  </StyledTypo>
                </div>
                <div className="abt">
                  <Link href={"/corporateinfo"}>
                    <StyledTypo>Corporate Info</StyledTypo>
                  </Link>
                  <Link href={"/privacyinfo"}>
                    <StyledTypo>Privacy Info</StyledTypo>
                  </Link>
                  <Link href={"/infoSecurityPolicy"}>
                    <StyledTypo>Information Security Policy</StyledTypo>
                  </Link>
                  <Link href={"/termsOfUse"}>
                    <StyledTypo>Website Term of Use</StyledTypo>
                  </Link>
                </div>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={2} lg={2}>
              <Box>
                <div className="jobs">
                  <StyledTypo
                    sx={{
                      mb: "10px",
                      fontSize: "22px",
                      fontFamily: "Inter-Bold",
                      marginTop: "20px",
                    }}
                  >
                    Useful Links
                  </StyledTypo>
                </div>
                <div className="abt">
                  <Link href={"/blogs"}>
                    <StyledTypo>Blogs</StyledTypo>
                  </Link>
                  <StyledTypo>Videos</StyledTypo>
                  <Link href={"/FAQ"}>
                    <StyledTypo>FAQ</StyledTypo>
                  </Link>
                </div>
              </Box>

              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                sx={{
                  backgroundColor: "#D4F0FC",
                  display: { md: "none", xs: "flex", sm: "none" },
                  height: "50px",
                  borderRadius: "5px",
                  padding: "10px",
                  marginTop: "20px",
                }}
              >
                <Link href={"https://www.instagram.com/recroot.io/?hl=en"}>
                  <Image
                    src="/instagram.png"
                    alt=""
                    width={45}
                    style={{ mr: "20px" }}
                    height={45}
                    sizes="100vw"
                  />
                </Link>
                <Link href={"https://au.linkedin.com/company/recroot-io"}>
                  <Image src="/linkedin.png" alt="" height={45} width={45} />
                </Link>
                <Link href={"https://www.facebook.com/Recrootit"}>
                  <Image src="/facebook.png" alt="" height={45} width={45} />
                </Link>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ backgroundColor: "#004d99" }}>
        <Container>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Grid
              item
              xs={-1}
              md={6}
              sm={-1}
              sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
            >
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
              >
                <Image
                  src="/instagram.png"
                  alt=""
                  style={{ mr: "20px" }}
                  height={30}
                  width={30}
                />
                <Image
                  src="/linkedin.png"
                  alt=""
                  height={30}
                  sizes="100vw"
                  width={30}
                />
                <Image
                  src="/facebook.png"
                  alt=""
                  height={30}
                  sizes="100vw"
                  width={30}
                />
              </Stack>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: { md: "flex-end", sm: "center", xs: "center" },
                alignItems: "center",
                minHeight: "40px",
              }}
            >
              <StyledTypo style={{ color: "white", fontSize: "12px" }}>
                Recroot © 2023, All Right Reserved by Recroot.io
              </StyledTypo>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default dynamic(() => Promise.resolve(FooterHome), { ssr: false });
