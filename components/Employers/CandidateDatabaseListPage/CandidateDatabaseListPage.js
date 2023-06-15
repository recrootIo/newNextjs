import * as React from "react";
import { Box, Pagination, Stack } from "@mui/material";
import CandiDatabaseCard from "@/components/Employers/CandiDatabaseCard/CandiDatabaseCard";
import styles from "./CandidateDatabaseList.module.css";

const CandidateDatabaseListPage = ({...props}) => {
  return (
    <>
      <Box
        className={styles.scrollbar}
        id="style-5"
        sx={{ width: "100%", pr: "10px", mb: "40px" }}
      >
        <Stack spacing={3} sx={{ mt: "30px" }}>
          {props?.candidates?.map((can,index)=>(
            <CandiDatabaseCard key={index} can={can} handle={props?.handleProfile}/>
          ))
          }
        </Stack>
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
