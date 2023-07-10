import * as React from "react";
import FooterHome from "@/components/Home/FooterHome";
import Navbar from "@/components/Navbar/Navbar";
import { BOLD } from "@/theme/fonts";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { Box, Button, Chip, Container, InputBase, Stack, useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import styled from "styled-components";
import CandiDatabaseFilter from "@/components/Employers/CandiDatabaseFilter/CandiDatabaseFilter";
import CandidateDatabaseListPage from "@/components/Employers/CandidateDatabaseListPage/CandidateDatabaseListPage";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { candidatesForrequest, candidatesIdreq, getSearchCandidate, jobCandidatesRequest } from "@/redux/slices/companyslice";
import { getCandi } from "@/redux/slices/applyJobs";
import { singleJobs } from "@/redux/slices/job";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  marginLeft: 0,
  width: "100%",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    width: "90%",
  },
}));

const CandiDatabase = () => {
  const [showComponent1, setShowComponent1] = useState(true);

  const toggleComponent = () => {
    setShowComponent1(!showComponent1);
  };
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const data = useSelector((data) => data.company.search);
  const loading = useSelector((data) => data.company.loading);
  const reqLoad = useSelector((data) => data.company.reqLoad);
  const value = useSelector((data) => data.company.srdata);
  const logos = useSelector((state) => state.company.companylogo);
  const searchBar = useSelector((state) => state.company.searchBar);
  const advanceSearch = useSelector((state) => state.company.advanceSearch);
  const dispatch = useDispatch();

  const loadingData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // const handleDrawerOpen = () => {
  //   dispatch(updateSearch(!searchBar));
  //   dispatch(updateAdvanceSearch(false));
  // };
const {push} = useRouter()
  const handleProfile = (id) => {
    // dispatch(getCandi(id))
    //   .unwrap()
    //   .then((originalPromiseResult) => {
    //     dispatch(
    //       getSinResumeLaid(originalPromiseResult?.resume?.resumeFileLocation[0])
    //     );
    //   });
      push(`/Employer/CandiProfileFullView?canId=${id}`)
    // Navigate(`/employerhome/applicant/${id}?rc`);
  };

  const rows = data?.candidates?.map((ele, index) => ({
    id: ele?._id,
    _id: index + 1,
    jobTitle: ele?.jobTitle,
    profession: ele?.profession,
    name: ele.firstName + " " + ele.lastName,
    pastEmployment: ele?.resume?.workExperience[0]?.companyName,
    education: ele?.resume?.education,
    skills: ele?.resume?.skills,
    languages: ele?.resume?.languages[0],
    workPrefence: ele?.resume?.workPrefence,
    currentOffer: ele?.resume?.currentOffer,
    notice: ele?.resume?.notice,
    location: ele?.resume?.location,
    nationality: ele?.resume?.nationality,
    workingRights: ele?.resume?.countrieswithworkingRights,
    expectation: ele?.resume?.currentSalary
      ? ele?.resume?.currentSalary + `(${ele?.resume?.salaryCurrency})`
      : "NA",
    action: "Action",
    experience: ele?.resume?.workExperience,
    profileImage: ele?.profpicFileLocation?.photo,
    cv: ele?.resume?.resumeFileLocation[0],
    expectedSalery: ele?.resume?.expectedSalary,
    currentSalery: ele?.resume?.currentSalary,
    currency: ele?.resume?.salaryCurrency,
    communication: ele?.resume?.customSkills?.communication,
    immediate: ele?.immediate,
    lastLogin: ele?.lastLogin,
    type: null,
  }));

  const handleChange = (e, page) => {
    const value = {
      id: reqJob?.Candidates,
      page:page
    };
    dispatch(candidatesForrequest(value));
  };
  const reqJob = useSelector((data) => data.company.taskbyjob);
  const matches = useMediaQuery("(max-width:900px)");

  const hasMoreData = rows.length < 1;
  const router = useRouter()
  const {id} = router.query;

  useEffect(() => {
    if (id) {
      dispatch(jobCandidatesRequest(id));
      dispatch(singleJobs(id))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  useEffect(() => {
    if (reqJob?.stage === "completed") {
      const value = {
        id: reqJob?.Candidates,
        page:1
      };
      dispatch(candidatesIdreq(reqJob?.Candidates));
      dispatch(candidatesForrequest(value));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reqJob]);

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
            Candidate Database
          </CustomTypography>
        </Container>
      </Box>
      <Container>
        <Box
          sx={{
            bgcolor: "#F2F8FD",
            height: "auto",
            position: "relative",
            top: "-80px",
            p: "30px",
          }}
        >
          {/* <Stack direction="row" spacing={2}>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#02A9F7 !important",
                borderRadius: "8px",
                height: "54px",
                width: "20%",
              }}
              onClick={toggleComponent}
            >
              Filter
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#D4F0FC !important",
                color: "#01313F",
                fontWeight: 500,
                borderRadius: "8px",
                height: "54px",
                width: "20%",
              }}
            >
              Reset Filter
            </Button>
          </Stack> */}
          {/* <Stack direction="row" spacing={2} sx={{ mt: "20px" }}>
            <Chip
              label="Graphic Designer"
              onDelete={handleDelete}
              sx={{
                bgcolor: "#1097CD",
                color: "white",
                height: "38px",
                fontSize: "15px",
              }}
            />
            <Chip
              label="Graphic Designer"
              onDelete={handleDelete}
              sx={{
                bgcolor: "#D4F0FC",
                color: "#01313F",
                height: "38px",
                fontSize: "15px",
              }}
            />
          </Stack> */}
          {showComponent1 ? (
            <CandidateDatabaseListPage   {...data}
            handleProfile={handleProfile}
            key={data?.id} 
            handleChange={handleChange}
            />
          ) : (
            <CandiDatabaseFilter />
          )}
        </Box>
      </Container>
      <FooterHome />
    </div>
  );
};

export default CandiDatabase;
