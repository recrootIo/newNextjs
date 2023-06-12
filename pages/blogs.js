import FooterHome from "@/components/Home/FooterHome";
import Navbar from "@/components/Navbar/Navbar";
import { BOLD } from "@/theme/fonts";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import {
  Box,
  Container,
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
} from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import BlogsCard from "@/components/BlogsCard/BlogsCard";

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

const Blogs = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
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
            Blogs
          </CustomTypography>
        </Container>
      </Box>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: "10px",
            mt: "40px",
          }}
        >
          <Search>
            <Box
              sx={{
                display: "flex",
                bgcolor: "white",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                height: "70px",
                width: { xs: "100%", md: "100%" },
                paddingLeft: "10px",
                paddingRight: "10px",
                border: "1px solid rgba(118, 118, 118, 0.3)",
                borderRadius: "5px",
              }}
            >
              <StyledInputBase
                placeholder="Search Here"
                inputProps={{ "aria-label": "search" }}
              />
              <SearchIcon
                sx={{ color: "#0183C9", height: "35px", width: "auto" }}
              />
            </Box>
          </Search>
          <FormControl
            fullWidth
            sx={{ height: "70px", width: { xs: "100%", md: "30%" } }}
          >
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
              sx={{ height: "70px" }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            mt: "40px",
            display: "flex",
            flexDirection: { xs: "column", sm: "row", md: "row" },
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <BlogsCard />
          <BlogsCard />
          <BlogsCard />
          <BlogsCard />
          <BlogsCard />
          <BlogsCard />
          <BlogsCard />
          <BlogsCard />
          <BlogsCard />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: "40px" }}>
          <Pagination
            count={10}
            shape="rounded"
            hidePrevButton
            hideNextButton
          />
        </Box>
      </Container>
      <FooterHome />
    </div>
  );
};

export default Blogs;
