"use client";
import { CustomTypography } from "../../ui-components/CustomTypography/CustomTypography";
import {
  Grid,
  Box,
  Stack,
  Container,
  styled,
  Avatar,
  Rating,
  Tabs,
  Tab,
} from "@mui/material";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import React from "react";
import CompanyOverview from "./CompanyOverview";
import WhyJoinUs from "./WhyJoinUs";
import CompanyJobs from "./CompanyJobs";

const StyledTabLabel = withStyles((theme) => ({
  root: {
    fontSize: "15px",
    textTransform: "capitalize",
    color: "#01313F",
    fontWeight: 600,
    backgroundColor: "inherit",
    boderRadius: "10px",
    "&.Mui-selected": {
      backgroundColor: "#2699FF !important",
      boderRadius: "10px 10px 0px 0px",
      color: "#fff !important",
    },
  },
}))(Tab);

export const StyledAvatar = styled(Avatar)(({}) => ({
  "& .MuiAvatar-img": {
    width: "105px",
    height: "130px",
  },
  height: "240px",
  width: "240px",
}));

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <CustomTypography>{children}</CustomTypography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const CompanyHeader = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          height: "185px",
          backgroundImage:
            'url("/companyprofile_images/companyProfile-bg.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></Box>
      <div style={{ position: "relative", top: "-120px" }}>
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <StyledAvatar
              alt=""
              src="/companyprofile_images/apple-logo.png"
              sx={{
                objectFit: "contain",
                height: "240x",
                width: "240px",
                border: "6px solid #E4F7FF",
                bgcolor: "#fff",
                border: "5px solid rgba(38, 153, 255, 0.40)",
              }}
            />
            <CustomTypography
              sx={{
                fontWeight: 700,
                fontSize: "40px",
                color: "#01313F",
                mt: "20px",
              }}
            >
              Apple
            </CustomTypography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              sx={{
                gap: { xs: "10px", sm: "20px" },
                display: "flex",
                alignItems: "center",
              }}
            >
              <CustomTypography
                sx={{ fontWeight: 400, fontSize: "25px", color: "#01313F" }}
              >
                5.0
              </CustomTypography>
              <Rating name="read-only" value={5} readOnly />
              <CustomTypography
                sx={{ fontWeight: 400, fontSize: "25px", color: "#01313F" }}
              >
                (3.9 Reviews)
              </CustomTypography>
            </Stack>
            <CustomTypography
              sx={{
                fontWeight: 400,
                fontSize: "18px",
                color: "#00339B",
                textDecoration: "underline",
              }}
            >
              Write a Review
            </CustomTypography>
          </Box>
        </Container>
        <Box sx={{ width: "100%", mt: "40px" }}>
          <Container>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <StyledTabLabel label="Company Overview" {...a11yProps(0)} />
                <StyledTabLabel label="Why Join Us" {...a11yProps(1)} />
                <StyledTabLabel label="Jobs" {...a11yProps(2)} />
              </Tabs>
            </Box>
          </Container>
          <CustomTabPanel value={value} index={0}>
            <CompanyOverview />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <WhyJoinUs />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <CompanyJobs />
          </CustomTabPanel>
        </Box>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(CompanyHeader), { ssr: false });
