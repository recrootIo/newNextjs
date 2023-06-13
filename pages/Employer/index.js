import EmployerNavbar from '@/components/EmployerNavbar/EmployerNavbar'
import EmployerSidebar from '@/components/Employers/Sidebar'
import { openAlert } from '@/redux/slices/alert'
import { getCompanyDetails } from '@/redux/slices/companyslice'
import { setEditJob ,companyJobs } from '@/redux/slices/job'
import { BOLD } from '@/theme/fonts'
import { CustomTypography } from '@/ui-components/CustomTypography/CustomTypography'
import { ERROR } from '@/utils/constants'
import { Box, Button, Container, Grid } from '@mui/material'
import Cookies from 'js-cookie'
import Head from 'next/head'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Employer({children}) {
    const user = Cookies.get()
    const {push} = useRouter()
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getCompanyDetails())
      dispatch(companyJobs()) 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const company = useSelector((state) => state.company?.companyDetl);
    const cjobs = useSelector((state) => state.jobs.companyJobs) || [];
    const freePack = company.package?.subscription_package === "Free"
    const freeCount = freePack === true ? (2-cjobs.length  ) : 0  
    const proCOunt = company?.jobCounts?.proCount 
    const preCOunt = company?.jobCounts?.premiumCount 
    const handleEdit = () =>{
      if (company.package?.subType === 'jSlot' && company.package?.paymentStatus === 'Completed') {
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
        // eslint-disable-next-line no-mixed-operators
        if (freeCount === 0 && preCOunt === 0 && proCOunt === 0 || freeCount === 0 && preCOunt === undefined && proCOunt === undefined) {
          dispatch(openAlert({
            type:ERROR,
            message:"Your Job Limit Was Reached!"
          }))
          push('/Pricing')
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
          packageType:''
        })
      ).then(
        setTimeout(() => {
          push("/Employer/PostNewJob");
        }, 500)
      );
    }
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
      ></Box>
      <Container>
      <div style={{ position: "relative", top: "-150px" }}>
         <Grid container spacing={2} sx={{ pb: "50px" }}>
         <Grid item xs={2}>
    <EmployerSidebar />
         </Grid>
         <Grid item xs={10}>
         <Box sx={{ display: "flex", width: "100%", mb: "30px" }}>
                <CustomTypography
                  variant="h6"
                  sx={{
                    fontFamily: BOLD,
                    fontSize: "28px",
                    flex: 1,
                    color: "white",
                  }}
                  gutterBottom
                >
                  Hello {user?.firstName}
                </CustomTypography>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "white !important",
                    color: "#01313F",
                    height: "42px",
                  }}
                  onClick={()=>{handleEdit()}}
                >
                  Post New Job
                </Button>
              </Box> 
      <main>
        {children}
      </main>
         </Grid>
         </Grid>
      </div>
      </Container>
    </div>
  )

}

export default Employer
