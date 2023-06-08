import EmployerNavbar from '@/components/EmployerNavbar/EmployerNavbar'
import EmployerSidebar from '@/components/Employers/Sidebar'
import { BOLD } from '@/theme/fonts'
import { CustomTypography } from '@/ui-components/CustomTypography/CustomTypography'
import { Box, Button, Container, Grid } from '@mui/material'
import Cookies from 'js-cookie'
import Head from 'next/head'
import { useRouter } from 'next/navigation'
import React from 'react'

function Employer({children}) {
    const user = Cookies.get()
    const {push} = useRouter()
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
                  onClick={()=>{push('/Employer/PostNewJob')}}
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
