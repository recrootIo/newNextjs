import EmployerNavbar from "@/components/EmployerNavbar/EmployerNavbar";
import EmployerSidebar from "@/components/Employers/Sidebar";
import { openAlert } from "@/redux/slices/alert";
import { getCompanyDetails } from "@/redux/slices/companyslice";
import { setEditJob, companyJobs } from "@/redux/slices/job";
import { BOLD } from "@/theme/fonts";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { ERROR } from "@/utils/constants";
import { Box, Button, Container, Grid, IconButton } from "@mui/material";
import Cookies from "js-cookie";
import Head from "next/head";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import FooterHome from "@/components/Home/FooterHome";
import EmployerMobileSidebar from "@/components/Employers/EmployerMobileSidebar/EmployerMobileSidebar";

function Employer({ children }) {
  const [getUser, setUser] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

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
  const handleEdit = () => {
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

  useEffect(() => {
    dispatch(getCompanyDetails());
    dispatch(companyJobs());
    setUser(() => user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Head>
        <title>User Dashboard</title>
        <meta name="description" content="User dashboard layout" />
        {/* Add your custom meta tags, stylesheets, or scripts here */}
      </Head>
      <header>
        <EmployerNavbar />
      </header>
      <Box
        sx={{
          backgroundImage: 'url("/EmployerDashboardBG.svg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "250px",
        }}
      >
        <Container>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setIsDrawerOpen(true)}
              >
                <MenuIcon sx={{ color: "white", fontSize: "35px" }} />
              </IconButton>
              <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                PaperProps={{
                  sx: {
                    height: "auto",
                    borderRadius: "10px",
                  },
                }}
              >
                <EmployerMobileSidebar setIsDrawerOpen={setIsDrawerOpen} />
              </Drawer>
            </Box>
            <Box>
              {getUser && (
                <CustomTypography
                  variant="h6"
                  sx={{
                    fontFamily: BOLD,
                    fontSize: "28px",
                    flex: 1,
                    color: "white",
                    display: { xs: "flex", md: "none" },
                  }}
                  gutterBottom
                  // sx={{ display: { xs: "flex", md: "none" } }}
                  // className="tourConfig"
                >
                  Hello {getUser?.firstName}
                </CustomTypography>
              )}
            </Box>
          </Box>
        </Container>
      </Box>
      <Container>
        <div style={{ position: "relative", top: "-150px" }}>
          <Grid container spacing={2}>
            <Grid item xs={2} sx={{ display: { xs: "none", md: "block" } }}>
              <EmployerSidebar />
            </Grid>
            <Grid item xs={12} md={10}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  mb: "30px",
                }}
              >
                {getUser && (
                  <CustomTypography
                    variant="h6"
                    sx={{
                      fontFamily: BOLD,
                      fontSize: "28px",
                      flex: 1,
                      color: "white",
                      display: { xs: "none", md: "block" },
                    }}
                    gutterBottom
                    className="tourConfig"
                  >
                    Hello {getUser?.firstName}
                  </CustomTypography>
                )}
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#03d3fc !important",
                    color: "#FFFFF",
                    height: "42px",
                  }}
                  onClick={() => {
                    handleEdit();
                  }}
                >
                  Post New Job
                </Button>
              </Box>
              <main>{children}</main>
            </Grid>
          </Grid>
        </div>
      </Container>
      <FooterHome />
    </div>
  );
}

export default Employer;
