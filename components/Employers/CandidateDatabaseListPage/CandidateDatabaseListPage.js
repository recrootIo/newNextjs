import * as React from "react";
import { Box, Pagination, Stack } from "@mui/material";
import CandiDatabaseCard from "@/components/Employers/CandiDatabaseCard/CandiDatabaseCard";
import styles from "./CandidateDatabaseList.module.css";

const CandidateDatabaseListPage = () => {
  return (
    <>
      <Box
        className={styles.scrollbar}
        id="style-5"
        sx={{ width: "100%", pr: "10px", mb: "40px" }}
      >
        <Stack spacing={3} sx={{ mt: "30px" }}>
          <CandiDatabaseCard />
          <CandiDatabaseCard />
          <CandiDatabaseCard />
          <CandiDatabaseCard />
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
        <Pagination count={1200} hidePrevButton hideNextButton />
      </Box>
    </>
  );
};

export default CandidateDatabaseListPage;
