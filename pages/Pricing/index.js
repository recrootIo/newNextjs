import {
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  TextField,
  Typography,
  Button,
  Container,
} from "@mui/material";
import { Box, Stack, styled } from "@mui/system";
import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CheckCircleOutlineTwoToneIcon from "@mui/icons-material/CheckCircleOutlineTwoTone";
import {
  CONTACT,
  CONTACT_PACKAGE,
  FREE,
  FREE_PACKAGE,
  GOLD,
  GOLD_PACKAGE,
  GROWTH,
  GROWTH_PACKAGE,
  PREMIUM,
  PREMIUM_PACKAGE,
  PRO,
  PRO_PLAN,
  SUCCESS,
} from "@/utils/constants";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addfreePlan, getCompanyDetails } from "@/redux/slices/companyslice";
import { setPath, userCountry } from "@/redux/slices/personal";
import Cookies from "js-cookie";
import { openAlert } from "@/redux/slices/alert";
import { useRouter } from "next/navigation";
import { changeSubscription } from "@/redux/slices/Subscription";
import dynamic from "next/dynamic";
const Tour = dynamic(() => import("reactour"), { ssr: false });
import styles from "../../components/Employers/styles.module.css";
import companyservice from "@/redux/services/company.service";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { RECRUITER } from "@/utils/UserConstants";
import { isEmpty } from "lodash";
import FooterHome from "@/components/Home/FooterHome";
import Navbar from "@/components/Navbar/Navbar";

const normal = {
  fontFamily: "'Inter'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: { sm: "26px", xs: "18px" },
  lineHeight: "40px",
  p: { sm: "5px 100px 5px 100px", xs: "3px 40px 3px 40px" },
};
const active = {
  fontFamily: "'Inter'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: { sm: "26px", xs: "18px" },
  lineHeight: "40px",
  p: { sm: "5px 100px 5px 100px", xs: "3px 40px 3px 40px" },
  color: "#ffff",
  background: "#02A9F7",
  borderRadius: "46px",
  boxShadow: 3,
};
const StyledButton = styled(Button)({
  color: "#ffff",
  padding: "10px",
  borderRadius: "30px",
  border: "2px solid #e7eaef",
  background: "#00339B !important",
  textTransform: "capitalize",
  width: "100%",
  marginBottom: "10px",
  "&:hover": {
    background: "#fff",
    borderColor: "#ff3e66",
    color: "#ffff",
  },
});
const BasicButton = styled(Button)({
  color: "#ffff",
  padding: "10px",
  borderRadius: "30px",
  border: "2px solid #e7eaef",
  background: "#00339B !important",
  textTransform: "capitalize",
  "&:hover": {
    background: "#fff",
    borderColor: "#ff3e66",
    color: "#ffff",
  },
});
const planHead = {
  fontFamily: "'Inter'",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "25px",
  lineHeight: "40px",
  color: "#fff",
  m: "auto",
};
const planHeadSlot = {
  fontFamily: "'Inter'",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "25px",
  lineHeight: "40px",
  color: "#fff",
  m: "auto 0 0 0",
};

function PricingNew() {
  const [jobSwitch, setjobSwitch] = useState("jPost");
  const [countryData, setcountryData] = useState("");
  const [isTourOpen, setTourOpen] = React.useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        setcountryData(response.data);
        if (data?.country === "IN") {
          setcounCheck(true);
        }
        dispatch(
          userCountry({
            countryName: data.country_name,
            countryCurrecy: data.currency,
          })
        );
      })
      .catch((error) => {
        console.warn(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  const basicin = useSelector((state) => state.company.basicinformation);
  const country = useSelector((state) => state.personal.userCountry);
  const [toggleSwitch, setSwitchValue] = useState(true);

  const user = Cookies.get();
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const path = useSelector((state) => state.personal.pricing);
  const { push } = useRouter();
  useEffect(() => {
    if (
      user?.userType === "Employer" ||
      user?.userType === "Member" ||
      user?.userType === RECRUITER
    ) {
      dispatch(getCompanyDetails());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.userType]);
  useEffect(() => {
    if (path === true) {
      dispatch(setPath(false));
    }
  }, [dispatch, path]);

  const [contactus, setContactus] = useState({
    CompanyName: basicin.cmpname,
    email: "",
    subject: "",
    description: "",
    userId: "",
    companyId: "",
  });

  useEffect(() => {
    setContactus({
      CompanyName: basicin.cmpname,
      email: "",
      subject: "",
      description: "",
      userId: user?.userID,
      companyId: user?.companyId,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const handleSubmitContact = (e) => {
    e.preventDefault();
    axios
      .post("https://preprod.recroot.au/api/addContactus", contactus)
      .then(function (response) {
        dispatch(
          openAlert({
            type: SUCCESS,
            message: "Your Query Was Submitted",
          })
        );
        // notify();
        setOpen(false);
      })
      .catch(function (error) {
        console.warn(error);
      });
  };

  const handleChangeContact = (e) => {
    let { name, value } = e.target;
    setContactus({
      ...contactus,
      [name]: value,
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleFree = () => {
    dispatch(addfreePlan()).then(push("/Employer/Dashboard"), handleClose2());
  };
  const company = useSelector((state) => state?.company?.companyDetl);
  // const payment = company?.payments?.slice(-1)[0];
  // const payconfrm =
  //   payment?.status === "Completed" &&
  //   company.package.subscription_package === "Growth" &&
  //   company.package.package_end_date > moment(new Date()).format();

  /**
   *
   * @param {*} packageDetails
   */
  const [counCheck, setcounCheck] = useState(false);
  const handleSubmit = (packageDetails) => {
    console.log(packageDetails, "ddd");
    if (!user) {
      dispatch(setPath(true));
      push("/signin", { replace: true });
      return;
    }

    const packages = toggleSwitch ? "mo" : "";
    // const title = packageDetails.name;
    // const price = toggleSwitch
    //   ? packageDetails?.monthPrice
    //   : packageDetails?.yearPrice;

    const price =
      packages === ""
        ? packageDetails.pricing.us
        : packageDetails?.name === "Growth" || packageDetails?.name === "Gold"
        ? packageDetails.pricing.us
        : counCheck
        ? packageDetails.pricing.rs
        : countryData.country === "LK"
        ? packageDetails.pricing.lk
        : packageDetails.pricing.us;
    const newPackage = {
      title: packageDetails.name,
      package: packages,
      price,
      country:
        packageDetails.name === "Growth" || packageDetails.name === "Gold"
          ? "USD"
          : country?.countryCurrecy,
    };
    dispatch(changeSubscription(newPackage));
    push("/Subscription", { replace: false });
  };
  const handleSwitch = (e) => {
    e.preventDefault();
    setSwitchValue(!toggleSwitch);
  };
  const freePres = company?.payments?.some(
    (item) => item.paidPackage === "Free"
  );

  const updateValue = async () => {
    const companyService = new companyservice();
    await companyService.updateTourValue({ pricing: false });
  };

  const closeTour = () => {
    setTourOpen(false);
    updateValue();
  };

  const accentColor = "#5cb7b7";

  const tourConfig = [
    {
      selector: ".jobSlots",
      style: {
        color: "black",
      },
      content: ({ goTo }) => (
        <Stack
          sx={{
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomTypography>
            Select the pricing plan that match with your hiring needs
          </CustomTypography>
          <Button onClick={() => closeTour()}>Done</Button>
        </Stack>
      ),
    },
  ];

  const comp = useSelector((state) => state?.company?.companyDetl);

  useEffect(() => {
    setTourOpen(() => comp?.tours?.pricing);
  }, [comp?.tours?.pricing]);

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
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: "2rem",
            fontWeight: 600,
            m: "45px auto 0 auto",
          }}
        >
          Job Package
        </Typography>
      </Box>
      <Container>
        <Card
          sx={{
            background: "#F2F8FD",
            borderRadius: "15px",
            // margin: { xs: "0px", sm: "0 100px 0 100px" },
            padding: "65px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: { xs: "18px", sm: "12px" },
            position: "relative",
            top: "-110px",
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "30px",
              lineHeight: "36px",
              color: "#034275",
            }}
          >
            Choose a plan based on your hiring needs
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "36px",
              textAlign: "center",
            }}
          >
            Thanks for trying Recroot! Select a pricing plan that offers the
            most beneficial recruitment features for your organization.
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "16px",
              lineHeight: "20px",
            }}
          >
            {`Let's get started today and take your recruitment journey to the next level!`}
          </Typography>
        </Card>
      </Container>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
          <Box
            sx={{
              border: "1px solid #034275",
              borderRadius: "40px",
              display: "flex",
              cursor: "pointer",
            }}
            className="jobSlots"
          >
            <Box>
              <Typography
                sx={jobSwitch === "jPost" ? active : normal}
                onClick={() => {
                  setjobSwitch("jPost");
                }}
              >
                Job Post
              </Typography>{" "}
            </Box>{" "}
            <Box>
              {" "}
              <Typography
                sx={jobSwitch === "jSlot" ? active : normal}
                onClick={() => {
                  setjobSwitch("jSlot");
                }}
              >
                Job Slot
              </Typography>
            </Box>
          </Box> 
      </Box>
      <Box>
        {jobSwitch === "jPost" ? (
          <Grid
            container
            spacing={2}
            sx={{
              gap: "13px",
              padding: "12px",
              justifyContent: "center",
              m: "35px 0 50px 0",
            }}
          >
              { countryData?.country !== "LK" ? 
              <Grid item lg={2.9} md={3.7} sm={6} xs={12}>
              <Card
                  sx={{
                    p: "20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "15px",
                    boxShadow: "rgba(17, 12, 46, 0.15) 0px 10px 10px 0px",
                    borderRadius: "15px",
                    width: { xs: "100%", md: "100%" },
                    p: "0px !important",
                    height: "100%",
                  }}
                >
                  <Grid
                    container
                    spacing={2}
                    sx={{
                      bgcolor: "#FFEEEF",
                      width: "100%",
                      p: "16px, 16px 0px 16px",
                      ml: "0px !important",
                    }}
                  >
                    <Grid
                      item
                      xs={7}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Box>
                        <CustomTypography
                          sx={{
                            fontWeight: 600,
                            textAlign: "center",
                            fontSize: "25px",
                          }}
                        >
                          Free
                        </CustomTypography>
                      </Box>
                    </Grid>
                    <Grid
                      item
                      xs={5}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        src="/premium-package-img.png"
                        alt="Picture of Free package card"
                        priority={true}
                        width="126"
                        height="126"
                      />
                    </Grid>
                  </Grid>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: "15px",
                      minHeight: "220px",
                      width: "100%",
                      p: "0px 16px 0px 16px",
                    }}
                  >
                
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "5px",
                        width: "100%",
                      }}
                    >
                      <CheckCircleOutlineTwoToneIcon
                        fontSize="small"
                        color="primary"
                      />
                      <CustomTypography sx={{ textAlign: "left" }}>
                        {" "}
                        3 job posts per day
                      </CustomTypography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "5px",
                        width: "100%",
                      }}
                    >
                      <CheckCircleOutlineTwoToneIcon
                        fontSize="small"
                        color="primary"
                      />
                      <CustomTypography sx={{ textAlign: "left" }}>
                        {" "}
                        Job expires in 48 hours
                      </CustomTypography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "5px",
                        width: "100%",
                      }}
                    >
                      <CheckCircleOutlineTwoToneIcon
                        fontSize="small"
                        color="primary"
                      />
                      <CustomTypography sx={{ textAlign: "left" }}>
                        {" "}
                        10 job applicants per job
                      </CustomTypography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      p: "0px 16px 0px 16px",
                      bgcolor: "#EBF3FF",
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      minHeight: "72px",
                    }}
                  >
                    <Grid container spacing={2} sx={{ height: "100%" }}>
                      <Grid
                        item
                        xs={6}
                        sx={{
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                        }}
                      >
                        {countryData?.country === "IN" ? (
                          <CustomTypography
                            sx={{
                              textAlign: "center",
                              fontWeight: 600,
                              fontSize: "18px",
                            }}
                          >
                            {" "}
                            0 &#8377;
                          </CustomTypography>
                        ) : (
                          <CustomTypography
                            sx={{
                              textAlign: "center",
                              fontWeight: 600,
                              fontSize: "18px",
                            }}
                          >
                            {" "}
                            0 $
                          </CustomTypography>
                        )}
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {isEmpty(user)  ? (
                          <BasicButton
                            variant="outlined"
                            sx={{ width: "191px" }}
                            onClick={()=>{push('/signin')}}
                          >
                            Sign In
                          </BasicButton>
                        ) : (
                          <BasicButton
                            variant="outlined"
                            sx={{ width: "191px" }}
                            onClick={()=>{push('/Employer/postNewJob')}}
                          >
                            Continue
                          </BasicButton>
                        )}
                      </Grid>
                    </Grid>
                  </Box>
                </Card>
              </Grid>
                :""}
          {countryData?.country !== "LK" ?  <Grid item lg={2.9} md={3.7} sm={6} xs={12}>
              <Card
                sx={{
                  p: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "15px",
                  boxShadow: "rgba(17, 12, 46, 0.15) 0px 10px 10px 0px",
                  borderRadius: "15px",
                  width: { xs: "100%", md: "100%" },
                  p: "0px !important",
                  height: "100%",
                }}
              >
                <Grid
                  container
                  spacing={2}
                  sx={{
                    bgcolor: "#EAEBF4",
                    p: "16px, 16px 0px 16px",
                    width: "100%",
                    ml: "0px !important",
                    minHeight: "130px",
                  }}
                >
                  <Grid
                    item
                    xs={6}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <CustomTypography
                        sx={{
                          fontWeight: 600,
                          textAlign: "center",
                          fontSize: "25px",
                        }}
                      >
                        Premium
                      </CustomTypography>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      src="/free-package-img.png"
                      alt="Picture of Free package card"
                      priority={true}
                      width="496"
                      height="326"
                    />
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                    flexGrow: 1,
                    minHeight: "200px",
                    p: "0px 16px 0px 16px",
                  }}
                >
                  {/* <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: "60%",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "5px",
                        bgcolor: "#DBFFF2",
                        borderRadius: "5px",
                      }}
                    >
                      <CustomTypography
                        sx={{
                          textAlign: "center",
                          fontWeight: 600,
                        }}
                      >
                        {" "}
                        Success Rate: 90%
                      </CustomTypography>
                    </Box>
                  </Box>
                  <Divider variant="middle" light /> */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: "5px",
                      width: "100%",
                    }}
                  >
                    <CheckCircleOutlineTwoToneIcon
                      fontSize="small"
                      color="primary"
                    />
                    <CustomTypography sx={{ textAlign: "left" }}>
                      Make job a featured job
                    </CustomTypography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: "5px",
                      width: "100%",
                    }}
                  >
                    <CheckCircleOutlineTwoToneIcon
                      fontSize="small"
                      color="primary"
                    />
                    <CustomTypography sx={{ textAlign: "left" }}>
                      Unlimited job applicants
                    </CustomTypography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      gap: "5px",
                      width: "100%",
                    }}
                  >
                    <CheckCircleOutlineTwoToneIcon
                      fontSize="small"
                      color="primary"
                    />
                    <CustomTypography
                      sx={{
                        textAlign: "left",
                        overflowWrap: "break-word",
                        // width: "200px",
                      }}
                    >
                      20 relevent profiles from candidate database
                    </CustomTypography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "5px",
                      width: "100%",
                    }}
                  >
                    <CheckCircleOutlineTwoToneIcon
                      fontSize="small"
                      color="primary"
                    />
                    <CustomTypography sx={{ textAlign: "left" }}>
                      Job expires in 1 month
                    </CustomTypography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    p: "0px 16px 0px 16px",
                    bgcolor: "#EBF3FF",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "72px",
                  }}
                >
                  <Grid container spacing={2} sx={{ height: "100%" }}>
                    <Grid
                      item
                      xs={6}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      {countryData?.country === "IN" ? (
                        <CustomTypography
                          sx={{
                            textAlign: "center",
                            fontWeight: 600,
                            fontSize: "18px",
                          }}
                        >
                          {" "}
                          1600 &#8377;
                        </CustomTypography>
                      ) : (
                        <CustomTypography
                          sx={{
                            textAlign: "center",
                            fontWeight: 600,
                            fontSize: "18px",
                          }}
                        >
                          {" "}
                          35 $
                        </CustomTypography>
                      )}
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {isEmpty(user) ? (
                        <BasicButton variant="outlined"
                        onClick={()=>{push('/signin')}} sx={{ width: "191px" }}>
                          Sign In
                        </BasicButton>
                      ) : (
                            <BasicButton variant="outlined" 
                            onClick={()=>{push('/Employer/postNewJob')}} sx={{ width: "191px" }}>
                          Continue
                        </BasicButton>
                      )}
                    </Grid>
                  </Grid>
                </Box>
              </Card>
            </Grid> : 
            <>
               <Grid item lg={2.9} md={3.7} sm={6} xs={12}>
               <Box
                 sx={{
                   background: "#F4FBFE",
                   borderRadius: "20px",
                   minHeight: "520px",
                   position: "relative",
                   transition: "all .3s ease-out 0s",
                   display: "flex",
                   flexDirection: "column",
                 }}
               >
                 <Box
                   sx={{
                     height: "80px",
                     background: "#02A9F7",
                     borderRadius: "20px 20px 0px 0px",
                     display: "flex",
                     borderBottom: "1px solid #e1e4ea",
                   }}
                 >
                   <Typography sx={planHead}>{PRO}</Typography>
                 </Box>
                 <Box
                   sx={{
                     p: "30px",
                     display: "flex",
                     borderBottom: "1px dashed #A9A9AA",
                   }}
                 >
                   {countryData?.country === "IN" ? (
                     <>
                       <sup style={{ fontSize: "30px" }}></sup>
                       <Typography
                         sx={{
                           fontFamily: "'Inter'",
                           fontStyle: "normal",
                           fontWeight: 600,
                           fontSize: "35px",
                           lineHeight: "40px",
                           color: "#034275",
                           m: "auto",
                         }}
                       >
                         &#8377; <span>{PRO_PLAN.pricing.rs}</span>
                       </Typography>
                     </>
                   ) : countryData.country === "LK" ? (
                     <>
                       <Typography
                         sx={{
                           fontFamily: "'Inter'",
                           fontStyle: "normal",
                           fontWeight: 600,
                           fontSize: "35px",
                           lineHeight: "40px",
                           color: "#034275",
                           m: "auto",
                         }}
                       >
                         &#8360; <span>{PRO_PLAN.pricing.lk}</span>
                       </Typography>
                     </>
                   ) : (
                     <>
                       <Typography
                         sx={{
                           fontFamily: "'Inter'",
                           fontStyle: "normal",
                           fontWeight: 600,
                           fontSize: "35px",
                           lineHeight: "40px",
                           color: "#034275",
                           m: "auto",
                         }}
                       >
                         $ <span>{PRO_PLAN.pricing.us}</span>
                       </Typography>
                     </>
                   )}
                   <Divider />
                 </Box>
                 <Box sx={{ mt: "10px", pt: "5px" }}>
                   <ul style={{ marginBottom: "20px" }}>
                     {PRO_PLAN.packageList.map((de, id) => (
                       <li key={id}>
                         <Stack
                           direction={"row"}
                           sx={{ alignItems: "flex-start" }}
                           gap={2}
                         >
                           <CheckCircleRoundedIcon
                             fontSize="small"
                             sx={{ color: "#31B9F8" }}
                           />
                           {de}
                         </Stack>
                       </li>
                     ))}
                   </ul>
                 </Box>
                 <Box sx={{ m: "auto 0 5px 0" }}>
                  {isEmpty(user) ?
                   <StyledButton onClick={() =>push('/signin')}>
                     Sign In
                   </StyledButton>:
                   <StyledButton onClick={() => handleSubmit(PRO_PLAN)}>
                     Choose plan
                   </StyledButton>}
                 </Box>
               </Box>
             </Grid>
             <Grid item lg={2.9} md={3.7} sm={6} xs={12}>
               <Box
                 sx={{
                   background: "#F4FBFE",
                   borderRadius: "20px",
                   minHeight: "520px",
                   position: "relative",
                   transition: "all .3s ease-out 0s",
                   display: "flex",
                   flexDirection: "column",
                 }}
               >
                 <Box
                   sx={{
                     height: "80px",
                     background: "#02A9F7",
                     borderRadius: "20px 20px 0px 0px",
                     display: "flex",
                     borderBottom: "1px solid #e1e4ea",
                   }}
                 >
                   <Typography sx={planHead}>{PREMIUM}</Typography>
                 </Box>
                 <Box
                   sx={{
                     p: "30px",
                     display: "flex",
                     borderBottom: "1px dashed #A9A9AA",
                   }}
                 >
                   {countryData.country === "IN" ? (
                     <>
                       <Typography
                         sx={{
                           fontFamily: "'Inter'",
                           fontStyle: "normal",
                           fontWeight: 600,
                           fontSize: "35px",
                           lineHeight: "40px",
                           color: "#034275",
                           m: "auto",
                         }}
                       >
                         &#8377; <span>{PREMIUM_PACKAGE.pricing.rs}</span>
                       </Typography>
                     </>
                   ) : countryData.country === "LK" ? (
                     <>
                       <Typography
                         sx={{
                           fontFamily: "'Inter'",
                           fontStyle: "normal",
                           fontWeight: 600,
                           fontSize: "35px",
                           lineHeight: "40px",
                           color: "#034275",
                           m: "auto",
                         }}
                       >
                         &#8360; <span>{PREMIUM_PACKAGE.pricing.lk}</span>
                       </Typography>
                     </>
                   ) : (
                     <>
                       <Typography
                         sx={{
                           fontFamily: "'Inter'",
                           fontStyle: "normal",
                           fontWeight: 600,
                           fontSize: "35px",
                           lineHeight: "40px",
                           color: "#034275",
                           m: "auto",
                         }}
                       >
                         $ <span>{PREMIUM_PACKAGE.pricing.us}</span>
                       </Typography>
                     </>
                   )}
                   <Divider />
                 </Box>
                 <Box sx={{ mt: "10px", pt: "5px" }}>
                   <ul style={{ marginBottom: "20px" }}>
                     {PREMIUM_PACKAGE.packageList.map((de, id) => (
                       <li key={id}>
                         <Stack
                           direction={"row"}
                           sx={{ alignItems: "flex-start" }}
                           gap={2}
                         >
                           <CheckCircleRoundedIcon
                             fontSize="small"
                             sx={{ color: "#31B9F8" }}
                           />
                           {de}
                         </Stack>
                       </li>
                     ))}
                   </ul>
                 </Box>
                 <Box sx={{ m: "auto 0 5px 0" }}>
                {isEmpty(user) ?  
                 <StyledButton onClick={() =>push('/signin')}>
                     Sign In
                   </StyledButton> :
                   <StyledButton onClick={() => handleSubmit(PREMIUM_PACKAGE)}>
                     Choose plan
                   </StyledButton> }
                 </Box>
               </Box>
             </Grid>
             <Grid item lg={2.9} md={3.7} sm={6} xs={12}>
               <Box
                 sx={{
                   background: "#F4FBFE",
                   borderRadius: "20px",
                   minHeight: "520px",
                   position: "relative",
                   transition: "all .3s ease-out 0s",
                   display: "flex",
                   flexDirection: "column",
                 }}
               >
                 <Box
                   sx={{
                     height: "80px",
                     background: "#02A9F7",
                     borderRadius: "20px 20px 0px 0px",
                     display: "flex",
                     borderBottom: "1px solid #e1e4ea",
                   }}
                 >
                   <Typography sx={planHead}>{CONTACT}</Typography>
                 </Box>
                 <Box
                   sx={{
                     display: "flex",
                     borderBottom: "1px dashed #A9A9AA",
                   }}
                 >
                   <Divider />
                 </Box>
                 <Box sx={{ mt: "10px", pt: "5px" }}>
                   <ul style={{ marginBottom: "20px" }}>
                     {CONTACT_PACKAGE.packageList.map((de, id) => (
                       <li key={id}>
                         <Stack
                           direction={"row"}
                           sx={{
                             alignItems: "flex-start",
                           }}
                           gap={2}
                         >
                           <CheckCircleRoundedIcon
                             fontSize="small"
                             sx={{ color: "#31B9F8" }}
                           />
                           {de}
                         </Stack>
                       </li>
                     ))}
                   </ul>
                 </Box>
                 <Box sx={{ m: "auto 0 5px 0" }}>
                   <StyledButton onClick={() => handleClickOpen()}>
                     Contact Us
                   </StyledButton>
                 </Box>
               </Box>
             </Grid>
            </>
             }
          </Grid>
        ) : (
          <Grid
            container
            sx={{
              gap: "13px",
              padding: "12px",
              m: "35px 0 50px 0",
              justifyContent: "center",
            }}
          >
            <Grid item lg={2.9} md={3.7} sm={6} xs={12}>
              <Box
                sx={{
                  background: "#F4FBFE",
                  borderRadius: "20px",
                  minHeight: "520px",
                  position: "relative",
                  transition: "all .3s ease-out 0s",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    height: "80px",
                    background: "#02A9F7",
                    borderRadius: "20px 20px 0px 0px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderBottom: "1px solid #e1e4ea",
                  }}
                >
                  <Typography sx={planHeadSlot}>{GROWTH}</Typography>
                  <Typography sx={{ color: "white" }}>
                    (Annual commitment)
                  </Typography>
                </Box>
                <Box
                  sx={{
                    p: "30px",
                    display: "flex",
                    borderBottom: "1px dashed #A9A9AA",
                  }}
                >
                  <>
                    <Typography
                      sx={{
                        fontFamily: "'Inter'",
                        fontStyle: "normal",
                        fontWeight: 600,
                        fontSize: "35px",
                        lineHeight: "40px",
                        color: "#034275",
                        m: "auto",
                      }}
                    >
                      $ <span>{GROWTH_PACKAGE.pricing.us}</span>
                    </Typography>
                  </>

                  <Divider />
                </Box>
                <Box sx={{ mt: "10px", pt: "5px" }}>
                  <ul style={{ marginBottom: "20px" }}>
                    {GROWTH_PACKAGE.packageList.map((de, id) => (
                      <li key={id}>
                        <Stack
                          direction={"row"}
                          sx={{ alignItems: "center" }}
                          gap={2}
                        >
                          <CheckCircleRoundedIcon
                            fontSize="small"
                            sx={{ color: "#31B9F8" }}
                          />
                          {de}
                        </Stack>
                      </li>
                    ))}
                  </ul>
                </Box>
                <Box sx={{ m: "auto 0 5px 0" }}>
                {isEmpty(user) ?  <StyledButton onClick={() =>push('signin')}>
                    Sign in
                  </StyledButton> :
                  <StyledButton onClick={() => handleSubmit(GROWTH_PACKAGE)}>
                    Choose plan
                  </StyledButton> }
                </Box>
              </Box>
            </Grid>
            <Grid item lg={2.9} md={3.7} sm={6} xs={12}>
              <Box
                sx={{
                  background: "#F4FBFE",
                  borderRadius: "20px",
                  minHeight: "520px",
                  position: "relative",
                  transition: "all .3s ease-out 0s",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    height: "80px",
                    background: "#02A9F7",
                    borderRadius: "20px 20px 0px 0px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderBottom: "1px solid #e1e4ea",
                  }}
                >
                  <Typography sx={planHeadSlot}>{GOLD}</Typography>
                  <Typography sx={{ color: "white" }}>
                    (Annual commitment)
                  </Typography>
                </Box>
                <Box
                  sx={{
                    p: "30px",
                    display: "flex",
                    borderBottom: "1px dashed #A9A9AA",
                  }}
                >
                  <>
                    <Typography
                      sx={{
                        fontFamily: "'Inter'",
                        fontStyle: "normal",
                        fontWeight: 600,
                        fontSize: "35px",
                        lineHeight: "40px",
                        color: "#034275",
                        m: "auto",
                      }}
                    >
                      $ <span>{GOLD_PACKAGE.pricing.us}</span>
                    </Typography>
                  </>

                  <Divider />
                </Box>
                <Box sx={{ mt: "10px", pt: "5px" }}>
                  <ul style={{ marginBottom: "20px" }}>
                    {GOLD_PACKAGE.packageList.map((de, id) => (
                      <li key={id}>
                        <Stack
                          direction={"row"}
                          sx={{ alignItems: "center" }}
                          gap={2}
                        >
                          <CheckCircleRoundedIcon
                            fontSize="small"
                            sx={{ color: "#31B9F8" }}
                          />
                          {de}
                        </Stack>
                      </li>
                    ))}
                  </ul>
                </Box>
                <Box sx={{ m: "auto 0 5px 0" }}>
               {isEmpty(user) ?   <StyledButton onClick={() => push('/signin')}>
                    Sign In
                  </StyledButton> :
                  <StyledButton onClick={() => handleSubmit(GOLD_PACKAGE)}>
                    Choose plan
                  </StyledButton>}
                </Box>
              </Box>
            </Grid>
            <Grid item lg={2.9} md={3.7} sm={6} xs={12}>
              <Box
                sx={{
                  background: "#F4FBFE",
                  borderRadius: "20px",
                  minHeight: "520px",
                  position: "relative",
                  transition: "all .3s ease-out 0s",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    height: "80px",
                    background: "#02A9F7",
                    borderRadius: "20px 20px 0px 0px",
                    display: "flex",
                    borderBottom: "1px solid #e1e4ea",
                  }}
                >
                  <Typography sx={planHead}>{CONTACT}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    borderBottom: "1px dashed #A9A9AA",
                  }}
                >
                  <Divider />
                </Box>
                <Box sx={{ mt: "10px", pt: "5px" }}>
                  <ul style={{ marginBottom: "20px" }}>
                    {CONTACT_PACKAGE.packageList.map((de, id) => (
                      <li key={id}>
                        <Stack
                          direction={"row"}
                          sx={{ alignItems: "center" }}
                          gap={2}
                        >
                          <CheckCircleRoundedIcon
                            fontSize="small"
                            sx={{ color: "#31B9F8" }}
                          />
                          {de}
                        </Stack>
                      </li>
                    ))}
                  </ul>
                </Box>
                <Box sx={{ m: "auto 0 5px 0" }}>
                  <StyledButton onClick={() => handleClickOpen()}>
                    Contact Us
                  </StyledButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        )}
      </Box>

      <Dialog fullWidth open={open} onClose={handleClose}>
        <Box sx={{ p: "40px" }}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Contact Us
          </Typography>
          <form
            onSubmit={(e) => {
              handleSubmitContact(e);
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                mt: "15px",
              }}
            >
              <TextField
                required
                id="duaration"
                label="Company Name"
                name="CompanyName"
                value={contactus.CompanyName}
                autoComplete="user-name"
                onChange={(e) => {
                  handleChangeContact(e);
                }}
              />
              <TextField
                required
                id="duaration"
                label="Email"
                name="email"
                value={contactus.email}
                autoComplete="user-name"
                onChange={(e) => {
                  handleChangeContact(e);
                }}
              />
              <TextField
                required
                id="duaration"
                label="Subject"
                name="subject"
                value={contactus.subject}
                autoComplete="user-name"
                onChange={(e) => {
                  handleChangeContact(e);
                }}
              />

              <TextField
                autoComplete="given-name"
                name="description"
                required
                fullWidth
                id="about"
                label="Description"
                autoFocus
                multiline
                rows={4}
                value={contactus.description}
                onChange={(e) => {
                  handleChangeContact(e);
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: "10px",
                gap: "5px",
              }}
            >
              <BasicButton
                variant="contained"
                sx={{ backgroundColor: "#4fa9ff !important" }}
                type="submit"
              >
                Save
              </BasicButton>
              <BasicButton
                variant="outlined"
                onClick={() => {
                  handleClose();
                }}
              >
                Cancel
              </BasicButton>
            </Box>
          </form>
        </Box>
      </Dialog>
      <Dialog
        open={open2}
        onClose={handleClose2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you like to continue with the free job post plan?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Using the free job post plan option allows you to post five jobs on
            Recroot without any cost with unlimited applications. In addition to
            the applicants, you will receive three more candidates from the
            Recroot candidate database and you can keep job posts in active
            status for 30 days. Are you sure you want to proceed with this plan?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <BasicButton
            sx={{ backgroundColor: "#4fa9ff !important" }}
            onClick={handleClose2}
          >
            No
          </BasicButton>
          <BasicButton
            sx={{ backgroundColor: "#4fa9ff !important" }}
            onClick={handleFree}
            autoFocus
          >
            Yes
          </BasicButton>
        </DialogActions>
      </Dialog>
      <FooterHome />
      <Tour
        onRequestClose={closeTour}
        disableInteraction={true}
        steps={tourConfig}
        isOpen={isTourOpen}
        maskClassName={styles.mask}
        className={styles.helper}
        rounded={8}
        accentColor={accentColor}
      />
    </div>
  );
}

export default PricingNew;
