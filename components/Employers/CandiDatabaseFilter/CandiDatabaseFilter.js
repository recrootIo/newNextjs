import * as React from "react";
import FooterHome from "@/components/Home/FooterHome";
import Navbar from "@/components/Navbar/Navbar";
import { BOLD } from "@/theme/fonts";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import {
  Box,
  Button,
  Chip,
  Collapse,
  Container,
  InputBase,
  Pagination,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";
import { alpha } from "@material-ui/core";
import CandiDatabaseCard from "@/components/Employers/CandiDatabaseCard/CandiDatabaseCard";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  //borderRadius: theme.shape.borderRadius,
  //backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    //backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  // marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  //   [theme.breakpoints.up("sm")]: {
  //     // marginLeft: theme.spacing(3),
  //     width: "auto",
  //   },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  //padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    //padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    //paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    //transition: theme.transitions.create("width"),
    width: "100%",
    // [theme.breakpoints.up("md")]: {
    //   width: "20ch",
    // },
  },
}));

const CandiDatabaseFilter = () => {
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <div>
      <Container>
        <Box
          sx={{
            bgcolor: "#F2F8FD",
            height: "2350px",
            position: "relative",
            top: "-80px",
            p: "30px",
          }}
        >
          <Stack direction="row" spacing={2}>
            <Search sx={{ display: "flex", bgcolor: "white" }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#02A9F7 !important",
                borderRadius: "8px",
                height: "54px",
                width: "20%",
              }}
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
        </Box>
      </Container>
    </div>
  );
};

export default CandiDatabaseFilter;
