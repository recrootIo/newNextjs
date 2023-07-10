import { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Stack,
  Container,
  Card,
  CardHeader,
  CardActions,
  Tooltip,
  CardContent,
  Button,
  Pagination,
} from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";
import ShareForm from "../ShareForm/ShareForm";
import JobsCard from "./jobscard";

const CompanyJobs = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [showJobCards, setShowJobCards] = useState(true);
  const [loginCallBackURL, setLoginCallBackURL] = useState("");

  useEffect(() => {
    setLoginCallBackURL(`${window.location}`);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 600);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize to set initial view on component mount
    handleResize();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleJobCardClick = () => {
    setShowJobCards(false);
  };

  const handleBackButtonClick = () => {
    setShowJobCards(true);
  };

  return (
    <>
      <Container>
        {/* Job Cards */}
        {showJobCards && isMobileView && (
          <>
            <h1>Jobs at Apple</h1>
            <p>50 job openings are available at Apple for you</p>
            <Grid container spacing={2} sx={{ mt: "20px" }}>
              <Grid item xs={12} md={3}>
                <Stack spacing={2}>
                  <JobsCard onClick={handleJobCardClick} />
                  <JobsCard onClick={handleJobCardClick} />
                  <JobsCard onClick={handleJobCardClick} />
                </Stack>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: "20px",
                  }}
                >
                  <Pagination
                    count={3}
                    color="primary"
                    hidePrevButton
                    hideNextButton
                  />
                </Box>
              </Grid>
            </Grid>
          </>
        )}

        {/* Job Description */}
        {!showJobCards && isMobileView && (
          <>
            <Button onClick={handleBackButtonClick}>Back</Button>
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
                <p>
                  The UX designer creates satisfying and compelling experiences
                  for users of a product, often drawing on results from user
                  research and workflow analysis. Generally, UX designers need
                  to possess strong creative, technical and problem-solving
                  skills. Areas of focus may include content, controls, visual
                  design and development, information architecture, user
                  research, branding, and customer/technical support.
                </p>
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
                    Bookmark
                  </Button>
                </Tooltip>
              </CardActions>
            </Card>
          </>
        )}

        {/* Desktop view */}
        {!isMobileView && (
          <Grid container spacing={2} sx={{ mt: "20px" }}>
            <Grid item xs={12} md={3}>
              <Stack spacing={2}>
                <JobsCard />
                <JobsCard />
                <JobsCard />
              </Stack>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: "20px",
                }}
              >
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
                  <p>
                    The UX designer creates satisfying and compelling
                    experiences for users of a product, often drawing on results
                    from user research and workflow analysis. Generally, UX
                    designers need to possess strong creative, technical and
                    problem-solving skills. Areas of focus may include content,
                    controls, visual design and development, information
                    architecture, user research, branding, and
                    customer/technical support.
                  </p>
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
                      Bookmark
                    </Button>
                  </Tooltip>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        )}
      </Container>
    </>
  );
};

export default dynamic(() => Promise.resolve(CompanyJobs), { ssr: false });
