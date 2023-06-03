"use client";
import { Box, Grid, Stack, Button, Container, Chip } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Image from "next/image";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { BOLD } from "@/theme/fonts";
import { useEffect, useState } from "react";
import searchService from "@/redux/services/search.service";
import { useSelector } from "react-redux";
import { getImageLogo, getSalary } from "./SearchSection";
import moment from "moment";
import { useRouter } from "next/router";

const RecentSearch = () => {
  const { data } = useSelector((state) => state?.personal);
  const router = useRouter();

  const [similar, setSimilar] = useState([]);

  const similarJobs = () => {
    searchService
      .getLatestJObs(1, [], [], data.jobTitle, "", "", "", "", "", 10)
      .then((res) => {
        setSimilar(res.data.posts.slice(0, 4));
      })
      .catch(() => {});
  };

  const handleNavigate = (jobTitle, jobRole, _id) => {
    router.push(`/jobs/${jobTitle}/${jobRole}/${_id}`);
  };

  useEffect(() => {
    if (data.jobTitle) {
      similarJobs();
    }
  }, []);

  if (similar.length < 1) return;

  return (
    <div>
      <Box
        sx={{
          marginBottom: "30px",
          paddingTop: "0px !important",
        }}
      >
        <Container>
          <Box>
            <CustomTypography
              variant="h4"
              fontFamily={BOLD}
              pt="50px"
              textAlign="center"
              gutterBottom
            >
              Similar&nbsp;<span style={{ color: "#02A9F7" }}>Jobs</span>
            </CustomTypography>
          </Box>
          <Grid
            container
            spacing={2}
            sx={{ mt: "20px", display: "flex", justifyContent: "center" }}
          >
            <Grid item xs={12} md={8}>
              <Box className="smallRecent">
                <Image
                  className="mobileRecentImg"
                  src="/imageRecentSearch.png"
                  alt=""
                  width="0"
                  height="0"
                  sizes="100vw"
                />
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flexWrap: "wrap",
                  rowGap: "20px",
                }}
                spacing={2}
              >
                {similar.map((simi, index) => (
                  <Card className="recentCard" key={index}>
                    <CardContent
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        p: "6px 16px",
                      }}
                    >
                      <Stack
                        direction={"row"}
                        sx={{ justifyContent: "flex-end", gap: "10px" }}
                      >
                        {simi?.immediate && (
                          <Chip
                            label="Immediate"
                            sx={{
                              borderRadius: "8px",
                              backgroundColor: "#3771C8",
                              color: "white",
                              fontWeight: 600,
                              height: "25px",
                            }}
                          />
                        )}
                        {simi?.featureType && (
                          <Chip
                            label="featured"
                            sx={{
                              borderRadius: "8px",
                              backgroundColor: "#3771C8",
                              color: "white",
                              fontWeight: 600,
                              height: "25px",
                            }}
                          />
                        )}
                      </Stack>
                    </CardContent>
                    <CardHeader
                      avatar={
                        <Avatar
                          className="recentAvatar"
                          alt="logo"
                          src={getImageLogo(simi?.company?.companyLogo?.logo)}
                          sx={{
                            "& .MuiAvatar-img": {
                              height: "25px",
                              width: "25px",
                            },
                            height: "50px",
                            width: "50px",
                          }}
                        />
                      }
                      titleTypographyProps={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "#034275",
                      }}
                      subheaderTypographyProps={{
                        fontSize: 16,
                        color: "#034275",
                      }}
                      title={simi?.jobRole}
                      subheader={simi?.company.company_name}
                      sx={{
                        borderBottom: "1px solid rgba(3, 66, 117, 0.15)",
                        paddingTop: "0px",
                      }}
                    />
                    <CardContent style={{ pb: 0 }}>
                      <Box>
                        <Stack spacing={0.5}>
                          <Box sx={{ display: "flex", mt: "17px" }}>
                            <Image
                              className="similariconImg"
                              src="/location.png"
                              alt=""
                              width="0"
                              height="0"
                              sizes="100vw"
                            />
                            <CustomTypography
                              variant="body2"
                              className="similarText"
                              gutterBottom
                            >
                              Location
                            </CustomTypography>
                            <CustomTypography
                              variant="body2"
                              className="similarInputText"
                              gutterBottom
                            >
                              {simi?.address[0]}
                            </CustomTypography>
                          </Box>
                          <Box sx={{ display: "flex" }}>
                            <Image
                              className="similariconImg"
                              src="/currency.png"
                              alt=""
                              width="0"
                              height="0"
                              sizes="100vw"
                            />
                            <CustomTypography
                              variant="body2"
                              className="similarText"
                              gutterBottom
                            >
                              Salary
                            </CustomTypography>
                            <CustomTypography
                              variant="body2"
                              className="similarInputText"
                              gutterBottom
                            >
                              {getSalary(simi?.salary)}
                            </CustomTypography>
                          </Box>
                          <Box sx={{ display: "flex" }}>
                            <Image
                              className="similariconImg"
                              src="/bag.png"
                              alt=""
                              width="0"
                              height="0"
                              sizes="100vw"
                            />
                            <CustomTypography
                              variant="body2"
                              className="similarText"
                              gutterBottom
                            >
                              Job Type
                            </CustomTypography>
                            <CustomTypography
                              variant="body2"
                              className="similarInputText"
                              gutterBottom
                            >
                              {simi?.jobType}
                            </CustomTypography>
                          </Box>
                          <Box sx={{ display: "flex" }}>
                            <Image
                              className="similariconImg"
                              src="/hourglass.png"
                              alt=""
                              width="0"
                              height="0"
                              sizes="100vw"
                            />
                            <CustomTypography
                              variant="body2"
                              className="similarText"
                              gutterBottom
                            >
                              Exp
                            </CustomTypography>
                            <CustomTypography
                              variant="body2"
                              className="similarInputText"
                              gutterBottom
                            >
                              {simi?.essentialInformation?.experience}
                            </CustomTypography>
                          </Box>
                        </Stack>
                        <Box className="btnBox">
                          <Button
                            className="bookmarkBtn"
                            size="medium"
                            variant="outlined"
                            bgcolor="#02A9F7 !important"
                          >
                            <BookmarkBorderIcon sx={{ fontSize: "21px" }} />
                          </Button>
                          <Button
                            className="viewDetailBtn"
                            variant="contained"
                            size="medium"
                            onClick={() =>
                              handleNavigate(
                                simi?.jobTitle,
                                simi?.jobRole,
                                simi?._id
                              )
                            }
                          >
                            View Details
                          </Button>
                        </Box>
                        <Box className="recentTypoBox">
                          <CustomTypography
                            className="recentTypo"
                            variant="body2"
                            color="text.secondary"
                          >
                            {moment(simi.createdAt).fromNow()}
                          </CustomTypography>
                          <CustomTypography
                            className="recentTypo"
                            variant="body2"
                            color="text.secondary"
                          >
                            Expires
                            {moment(simi.applicationDeadline)
                              .endOf("day")
                              .fromNow()}
                          </CustomTypography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="largeRecent">
                <Image
                  src="/imageRecentSearchSection.png"
                  alt=""
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="recentSearchImage"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default RecentSearch;
