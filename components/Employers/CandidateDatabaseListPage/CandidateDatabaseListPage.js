import * as React from "react";
import { Box, Pagination, Stack, Typography } from "@mui/material";
import CandiDatabaseCard from "@/components/Employers/CandiDatabaseCard/CandiDatabaseCard";
import styles from "./CandidateDatabaseList.module.css";
import { useSelector } from "react-redux";
import LoadingSearchCards from "@/components/JobListings/LoadingSearchCards";

const CandidateDatabaseListPage = ({...props}) => {
  const job = useSelector(data => data.jobs)
  const load = useSelector(data => data.company.loading)
  const len = [1,2,3,4,5,6,7,8,9,7];
  return (
    <>
      <Box
        className={styles.scrollbar}
        id="style-5"
        sx={{ width: "100%", pr: "10px", mb: "40px" }}
      >
        <Typography variant="h5" textAlign={'center'} fontWeight={600}>{job?.jobRole}</Typography>
       {load ? (
                    len.map((a, index) => (
                      <Stack key={index} flexDirection={'column'} gap={'20px'}>
                        <LoadingSearchCards key={index} />
                      </Stack>
                    ))
                  ) :
       props?.candidates.length === 0 ?  <>
              We are successfully extracting candidates based on your job
              description and guarantee to populate matching candidates within
              12 hours.
            </> :
       <Stack spacing={3} sx={{ mt: "30px" }}>
          {props?.candidates?.map((can,index)=>(
            <CandiDatabaseCard key={index} can={can} handle={props?.handleProfile}/>
          ))
          }
        </Stack>}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Pagination     count={Number(props?.totalPages) || 1}
        page={Number(props?.currentPage) || 1}
        color="primary"
        onChange={props?.handleChange}/>
      </Box>
    </>
  );
};

export default CandidateDatabaseListPage;
