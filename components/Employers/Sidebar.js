
import React from 'react'
import Image from 'next/image'
import { Box, Divider, List, ListItemButton } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { selectRoute } from '@/redux/slices/companyslice'
import Link from 'next/link'
import { useRouter } from 'next/router'


export default function EmployerSidebar() {
const background = 'linear-gradient(90deg, rgba(38, 153, 255, 0.3) 0%, #03E7F4 111.15%);'  
const dispatch = useDispatch()  
// const select = useSelector(data => data.company.selectedRoute)
const router = useRouter();
const { pathname } = router;
const pathSegments = pathname.split('/');
const select = pathSegments[2];
const handleListItemClick = (val) =>{
    dispatch(selectRoute(val))
    if (val === '/Employer/PostNewJob') {
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
              router.push('/Employer/PostNewJob');
            }, 500)
          );   
    }
}
    return <Box
        sx={{
            width: "100%",
            maxWidth: 110,
            bgcolor: "#034275",
            borderRadius: "10px",
            pb: "20px",
        }}
    >
        <List component="nav" aria-label="main mailbox folders">
            <ListItemButton
                sx={{ display: "flex", justifyContent: "center" }}
                onClick={() => handleListItemClick()}
            >
                <Image src="/empImg.png" alt="" width="40" height="40" />
            </ListItemButton>
            <Divider variant="middle" color="gray" />
            <Link href={'/Employer/Dashboard'}>
            <ListItemButton
                sx={{ display: "flex", justifyContent: "center" ,background:select === 'Dashboard' ? background : "" }}
                onClick={() => handleListItemClick('Dashboard')}
            >
                <Image src="/home.png" alt="" width="40" height="40" />
            </ListItemButton>
            </Link>
            <Link href={'/Employer/CompanyProfile'}>
            <ListItemButton
                sx={{ display: "flex", justifyContent: "center" , background:select === 'CompanyProfile' || select === 'Members' || select === 'CompanyPreview'? background : "" }}
                onClick={() => handleListItemClick('CompanyProfile')}
            >
                <Image src="/profile.png" alt="" width="40" height="40" />
            </ListItemButton>
            </Link>
            {/* <Link href={'/Employer/PostNewJob'}> */}
            <ListItemButton
                sx={{ display: "flex", justifyContent: "center" , background:select === 'PostNewJob' ? background : "" }}
                onClick={() => handleListItemClick('PostNewJob')}
            >
                <Image src="/jobs.png" alt="" width="40" height="40" />
            </ListItemButton>
            {/* </Link> */}
            <Link href={'/Employer/AllApplicants'}>
            <ListItemButton
                sx={{ display: "flex", justifyContent: "center" , background:select === 'AllApplicants' ? background : ""}}
                onClick={() => handleListItemClick('AllApplicants')}
            >
                <Image src="/team.png" alt="" width="40" height="40" />
            </ListItemButton>
            </Link>
            <Link href={'/Employer/ScheduledInterviews'}>
            <ListItemButton
                sx={{ display: "flex", justifyContent: "center" , background:select === 'ScheduledInterviews' ? background : "" }}
                onClick={() => handleListItemClick('ScheduledInterviews')}
            >
                <Image src="/convo.png" alt="" width="40" height="40" />
            </ListItemButton>
            </Link>
            <ListItemButton
                sx={{ display: "flex", justifyContent: "center" }}
                onClick={() => handleListItemClick()}
            >
                <Image
                    src="/subscription.png"
                    alt=""
                    width="40"
                    height="40" />
            </ListItemButton>
            <ListItemButton
                sx={{ display: "flex", justifyContent: "center" }}
                onClick={() => handleListItemClick()}
            >
                <Image src="/myAccount.png" alt="" width="40" height="40" />
            </ListItemButton>
            <ListItemButton
                sx={{ display: "flex", justifyContent: "center" }}
                onClick={() => handleListItemClick()}
            >
                <Image
                    src="/power-icon.png"
                    alt=""
                    width="40"
                    height="40" />
            </ListItemButton>
        </List>
    </Box>
}