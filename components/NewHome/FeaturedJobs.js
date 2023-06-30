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

  return (
    <Box>
      <Container>
        <CustomTypography
          sx={{
            fontSize: "30px",
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
    </Box>
  );
};

export default FeaturedJobs;
