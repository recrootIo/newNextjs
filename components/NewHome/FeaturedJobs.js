import React, { useEffect } from "react";
import {
  Box,
  Grid,
  Container,
  Button,
  CardContent,
  Card,
  Stack,
} from "@mui/material";
import Image from "next/image";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import SimilarJobCard from "../JobDetails/similarCard";
import FeaturedJobCard from "./FeaturedJobCard";
import { useDispatch, useSelector } from "react-redux";
import { searchJobs } from "@/redux/slices/search";
import { useRouter } from "next/router";
import { isEmpty } from "lodash";

const FeaturedJobs = ({ locale }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const latestJobs = useSelector((state) => state.searchJobs.searchDetails);

  const getJobs = () => {
    dispatch(
      searchJobs({
        value: 1,
        names: [],
        exper: [],
        title: "",
        address: locale === "lk" ? "Sri Lanka" : "",
        jobVariant: "featured",
        // selectedCompanies,
        selectedSector: [],
        selectedCategory: [],
        limit: 8,
      })
    )
      .then((res) => {})
      .catch((error) => {
        console.warn(error);
      });
  };

  const handleNavigate = () => {
    router.push(
      `/jobs?variant=featured&address=${locale === "lk" ? "Sri Lanka" : ""}`
    );
  };

  useEffect(() => {
    getJobs();
  }, []);

  if (isEmpty(latestJobs)) return;

  return (
    <Box sx={{ bgcolor: "#EAEBF4" }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
        <path
          fill="#FFEEEF"
          fill-opacity="1"
          d="M0,96L80,117.3C160,139,320,181,480,170.7C640,160,800,96,960,74.7C1120,53,1280,75,1360,85.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
      <Container>
        <CustomTypography
          sx={{
            fontSize: "33px",
            fontWeight: 700,
            color: "#01313F",
            textAlign: "center",
            mb: "80px",
            textTransform: "uppercase",
          }}
        >
          Featured Jobs
        </CustomTypography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Stack sx={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <Button variant="outlined" onClick={() => handleNavigate()}>
                View More
              </Button>
            </Stack>
          </Grid>
          {latestJobs.slice(0, 8).map((fe, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <FeaturedJobCard {...fe} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
        <path
          fill="#edfcff"
          fill-opacity="1"
          d="M0,96L80,117.3C160,139,320,181,480,170.7C640,160,800,96,960,74.7C1120,53,1280,75,1360,85.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </Box>
  );
};

export default FeaturedJobs;
