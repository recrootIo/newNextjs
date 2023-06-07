import * as React from "react";
import FooterHome from "@/components/Home/FooterHome";
import Navbar from "@/components/Navbar/Navbar";
import { BOLD } from "@/theme/fonts";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { Box, Button, Chip, Container, InputBase, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import styled from "styled-components";
import CandiDatabaseFilter from "@/components/Employers/CandiDatabaseFilter/CandiDatabaseFilter";
import CandidateDatabaseListPage from "@/components/Employers/CandidateDatabaseListPage/CandidateDatabaseListPage";

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
          <Stack direction="row" spacing={2}>
            <Search>
              <Box
                sx={{
                  display: "flex",
                  bgcolor: "white",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "100%",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
                <SearchIcon />
              </Box>
            </Search>
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
          </Stack>
          <Stack direction="row" spacing={2} sx={{ mt: "20px" }}>
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
          </Stack>
          {showComponent1 ? (
            <CandidateDatabaseListPage />
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
