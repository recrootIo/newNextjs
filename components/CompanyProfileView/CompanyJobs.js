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
  Divider,
  Button,
  Card,
  CardHeader,
  CardActions,
  Tooltip,
  CardContent,
  Pagination,
} from "@mui/material";
import { withStyles } from "@material-ui/styles";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./companyprofileview.module.css";
import FeaturedJobCard from "../NewHome/FeaturedJobCard";
import ShareForm from "../ShareForm/ShareForm";
import JobsCard from "./jobscard";

const CompanyJobs = () => {
  const [loginCallBackURL, setLoginCallBackURL] = useState("");

  useEffect(() => {
    setLoginCallBackURL(`${window.location}`);
  }, []);

  return (
    <>
      <Container>
        <CustomTypography
          sx={{
            fontWeight: 600,
            fontSize: "17px",
            color: "#01313F",
            mb: "24px",
            mt: "16px",
          }}
        >
          Jobs at Apple
        </CustomTypography>
        <CustomTypography>
          50 job openings are available at Apple for you
        </CustomTypography>
        <Grid container spacing={2} sx={{ mt: "20px" }}>
          <Grid item xs={12} md={3}>
            <Stack spacing={2}>
              <JobsCard />
              <JobsCard />
              <JobsCard />
            </Stack>
            <Box sx={{ display: "flex", justifyContent: "center", mt: "20px" }}>
              <Pagination
                count={3}
                color="primary"
                hidePrevButton
                hideNextButton
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={9}>
            <Card
              variant="outlined"
              sx={{
                height: "100%",
                width: "100%",
                borderRadius: "7px",
                borderColor: "#d3eaff",
              }}
            >
              <CardHeader
                title="Job Description"
                titleTypographyProps={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#01313F",
                }}
                sx={{
                  bgcolor: "#EDF8FD",
                  padding: "8px 16px",
                  paddingLeft: "24px",
                }}
              />
              <CardContent sx={{ paddingLeft: "24px" }}>
                {/* <ReactQuill
                  value={jobDescription}
                  readOnly={true}
                  theme={"bubble"}
                /> */}
                <CustomTypography>
                  The UX designer creates satisfying and compelling experiences
                  for users of a product, often drawing on results from user
                  research and workflow analysis. Generally, UX designers need
                  to possess strong creative, technical and problem-solving
                  skills. Areas of focus may include content, controls, visual
                  design and development, information architecture, user
                  research, branding, and customer/technical support.
                </CustomTypography>
              </CardContent>
              <CardActions sx={{ mb: "20px", paddingLeft: "24px" }}>
                <Button
                  variant="contained"
                  size="medium"
                  sx={{ bgcolor: "#02A9F7 !important" }}
                >
                  Apply now
                </Button>
                <ShareForm url={loginCallBackURL} />
                <Tooltip title="Add to Saved Jobs" placement="right">
                  <Button
                    className="bookmarkBtn"
                    size="small"
                    variant="outlined"
                    bgcolor="#02A9F7 !important"
                  >
                    <BookmarkBorderIcon sx={{ fontSize: "21px" }} />
                  </Button>
                </Tooltip>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default dynamic(() => Promise.resolve(CompanyJobs), { ssr: false });
