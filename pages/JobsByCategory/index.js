"use client";
import Navbar from "@/components/Navbar/Navbar";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Pagination,
} from "@mui/material";
import Image from "next/image";
import SubscribHome from "@/components/Home/SubscribHome";
import FooterHome from "@/components/Home/FooterHome";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

const JobsByCategory = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          backgroundImage: 'url("/JobListingPageBG.svg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "400px",
          pt: "30px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
              <CustomTypography
                sx={{
                  fontSize: "45px",
                  fontWeight: 700,
                  color: "white",
                }}
              >
                Jobs By Category
              </CustomTypography>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ marginTop: "auto" }}>
                <Image
                  src={"/jobs-by-category-img.png"}
                  alt=""
                  height={260}
                  width={370}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box>
        <Container>
          <CustomTypography
            sx={{
              color: "#1565C0",
              fontSize: "35px",
              fontWeight: 600,
              textAlign: "center",
              mt: "80px",
            }}
          >
            Jobs
          </CustomTypography>
          <CustomTypography
            sx={{
              color: "#000000",
              fontSize: "22px",
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            Apply for full-time & part-time in-office, work-from-home & hybrid
            jobs!
          </CustomTypography>
          <Grid container spacing={2} sx={{ mt: "50px" }}>
            <Grid item xs={3}>
              <Card
                sx={{
                  height: "180px",
                  backgroundImage: `url("/jobs-by-category-card-bg.png")`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "20px",
                  p: "5px",
                }}
              >
                <CardContent>
                  <CustomTypography
                    sx={{
                      color: "#FFFFFF",
                      fontSize: "22px",
                      fontWeight: 600,
                    }}
                  >
                    Full Time
                  </CustomTypography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      position: "absolute",
                      top: "755px",
                      left: "577px",
                    }}
                  >
                    <Image
                      src={"/jobs-fulltime-img.png"}
                      alt=""
                      height={140}
                      width={100}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                sx={{
                  height: "180px",
                  backgroundImage: `url("/jobs-by-category-card-bg.png")`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "20px",
                  p: "5px",
                }}
              >
                <CardContent>
                  <CustomTypography
                    sx={{
                      color: "#FFFFFF",
                      fontSize: "22px",
                      fontWeight: 600,
                    }}
                  >
                    Part Time
                  </CustomTypography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      position: "absolute",
                      top: "735px",
                      left: "828px",
                    }}
                  >
                    <Image
                      src={"/jobs-category-parttime-compass-img.png"}
                      alt=""
                      height={200}
                      width={200}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                sx={{
                  height: "180px",
                  backgroundImage: `url("/jobs-by-category-card-bg.png")`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "20px",
                  p: "5px",
                }}
              >
                <CardContent>
                  <CustomTypography
                    sx={{
                      color: "#FFFFFF",
                      fontSize: "22px",
                      fontWeight: 600,
                    }}
                  >
                    From Office
                  </CustomTypography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      position: "absolute",
                      top: "785px",
                      left: "1148px",
                    }}
                  >
                    <Image
                      src={"/jobs-category-office-img.png"}
                      alt=""
                      height={130}
                      width={130}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                sx={{
                  height: "180px",
                  backgroundImage: `url("/jobs-by-category-card-bg.png")`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "20px",
                  p: "5px",
                }}
              >
                <CardContent>
                  <CustomTypography
                    sx={{
                      color: "#FFFFFF",
                      fontSize: "22px",
                      fontWeight: 600,
                    }}
                  >
                    From Home
                  </CustomTypography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      position: "absolute",
                      top: "775px",
                      left: "1428px",
                    }}
                  >
                    <Image
                      src={"/jobs-category-from-office-img.png"}
                      alt=""
                      height={150}
                      width={150}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          mt: "100px",
          pb: "80px",
          height: "auto",
          backgroundImage: 'url("/explore-jobs-by-cat-wave-bg.svg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <CustomTypography
            sx={{
              color: "#01313F",
              fontSize: "35px",
              fontWeight: 600,
              textAlign: "center",
              mt: "60px",
            }}
          >
            Explore Jobs by <span style={{ color: "#2699FF" }}> Category</span>
          </CustomTypography>
          <Box
            sx={{
              mt: "250px",
              p: "70px",
              height: "auto",
              bgcolor:
                "linear-gradient(129.78deg, #40B7F0 -0.01%, #2290ED 105.74%)",
              backgroundImage: 'url("/explore-jobs-by-cat-card-bg.png")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "20px",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Card sx={{ borderRadius: "20px", p: "10px" }}>
                  <CardContent>
                    <CustomTypography
                      sx={{
                        color: "#01313F",
                        fontSize: "20px",
                        fontWeight: 600,
                      }}
                    >
                      Software Engineer
                    </CustomTypography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: "20px",
                      }}
                    >
                      <Chip
                        label="851+ Jobs"
                        sx={{
                          bgcolor: "rgba(188, 234, 253, 0.4)",
                          color: "#1565C0",
                          fontWeight: 600,
                          fontSize: "20px",
                          height: "40px",
                          p: "10px",
                        }}
                      />
                      <ArrowCircleRightOutlinedIcon
                        sx={{
                          color: "#1565C0",
                          fontSize: "40px",
                          fontWeight: 400,
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card sx={{ borderRadius: "20px", p: "10px" }}>
                  <CardContent>
                    <CustomTypography
                      sx={{
                        color: "#01313F",
                        fontSize: "20px",
                        fontWeight: 600,
                      }}
                    >
                      Software Engineer
                    </CustomTypography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: "20px",
                      }}
                    >
                      <Chip
                        label="851+ Jobs"
                        sx={{
                          bgcolor: "rgba(188, 234, 253, 0.4)",
                          color: "#1565C0",
                          fontWeight: 600,
                          fontSize: "20px",
                          height: "40px",
                          p: "10px",
                        }}
                      />
                      <ArrowCircleRightOutlinedIcon
                        sx={{
                          color: "#1565C0",
                          fontSize: "40px",
                          fontWeight: 400,
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card sx={{ borderRadius: "20px", p: "10px" }}>
                  <CardContent>
                    <CustomTypography
                      sx={{
                        color: "#01313F",
                        fontSize: "20px",
                        fontWeight: 600,
                      }}
                    >
                      Software Engineer
                    </CustomTypography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: "20px",
                      }}
                    >
                      <Chip
                        label="851+ Jobs"
                        sx={{
                          bgcolor: "rgba(188, 234, 253, 0.4)",
                          color: "#1565C0",
                          fontWeight: 600,
                          fontSize: "20px",
                          height: "40px",
                          p: "10px",
                        }}
                      />
                      <ArrowCircleRightOutlinedIcon
                        sx={{
                          color: "#1565C0",
                          fontSize: "40px",
                          fontWeight: 400,
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card sx={{ borderRadius: "20px", p: "10px" }}>
                  <CardContent>
                    <CustomTypography
                      sx={{
                        color: "#01313F",
                        fontSize: "20px",
                        fontWeight: 600,
                      }}
                    >
                      Software Engineer
                    </CustomTypography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: "20px",
                      }}
                    >
                      <Chip
                        label="851+ Jobs"
                        sx={{
                          bgcolor: "rgba(188, 234, 253, 0.4)",
                          color: "#1565C0",
                          fontWeight: 600,
                          fontSize: "20px",
                          height: "40px",
                          p: "10px",
                        }}
                      />
                      <ArrowCircleRightOutlinedIcon
                        sx={{
                          color: "#1565C0",
                          fontSize: "40px",
                          fontWeight: 400,
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card sx={{ borderRadius: "20px", p: "10px" }}>
                  <CardContent>
                    <CustomTypography
                      sx={{
                        color: "#01313F",
                        fontSize: "20px",
                        fontWeight: 600,
                      }}
                    >
                      Software Engineer
                    </CustomTypography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: "20px",
                      }}
                    >
                      <Chip
                        label="851+ Jobs"
                        sx={{
                          bgcolor: "rgba(188, 234, 253, 0.4)",
                          color: "#1565C0",
                          fontWeight: 600,
                          fontSize: "20px",
                          height: "40px",
                          p: "10px",
                        }}
                      />
                      <ArrowCircleRightOutlinedIcon
                        sx={{
                          color: "#1565C0",
                          fontSize: "40px",
                          fontWeight: 400,
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card sx={{ borderRadius: "20px", p: "10px" }}>
                  <CardContent>
                    <CustomTypography
                      sx={{
                        color: "#01313F",
                        fontSize: "20px",
                        fontWeight: 600,
                      }}
                    >
                      Software Engineer
                    </CustomTypography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: "20px",
                      }}
                    >
                      <Chip
                        label="851+ Jobs"
                        sx={{
                          bgcolor: "rgba(188, 234, 253, 0.4)",
                          color: "#1565C0",
                          fontWeight: 600,
                          fontSize: "20px",
                          height: "40px",
                          p: "10px",
                        }}
                      />
                      <ArrowCircleRightOutlinedIcon
                        sx={{
                          color: "#1565C0",
                          fontSize: "40px",
                          fontWeight: 400,
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card sx={{ borderRadius: "20px", p: "10px" }}>
                  <CardContent>
                    <CustomTypography
                      sx={{
                        color: "#01313F",
                        fontSize: "20px",
                        fontWeight: 600,
                      }}
                    >
                      Software Engineer
                    </CustomTypography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: "20px",
                      }}
                    >
                      <Chip
                        label="851+ Jobs"
                        sx={{
                          bgcolor: "rgba(188, 234, 253, 0.4)",
                          color: "#1565C0",
                          fontWeight: 600,
                          fontSize: "20px",
                          height: "40px",
                          p: "10px",
                        }}
                      />
                      <ArrowCircleRightOutlinedIcon
                        sx={{
                          color: "#1565C0",
                          fontSize: "40px",
                          fontWeight: 400,
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card sx={{ borderRadius: "20px", p: "10px" }}>
                  <CardContent>
                    <CustomTypography
                      sx={{
                        color: "#01313F",
                        fontSize: "20px",
                        fontWeight: 600,
                      }}
                    >
                      Software Engineer
                    </CustomTypography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: "20px",
                      }}
                    >
                      <Chip
                        label="851+ Jobs"
                        sx={{
                          bgcolor: "rgba(188, 234, 253, 0.4)",
                          color: "#1565C0",
                          fontWeight: 600,
                          fontSize: "20px",
                          height: "40px",
                          p: "10px",
                        }}
                      />
                      <ArrowCircleRightOutlinedIcon
                        sx={{
                          color: "#1565C0",
                          fontSize: "40px",
                          fontWeight: 400,
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "center", mt: "50px" }}>
              <Pagination
                count={8}
                hidePrevButton
                hideNextButton
                sx={{
                  "& .MuiPaginationItem-root": {
                    color: "white",
                  },
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
      <SubscribHome />
      <FooterHome />
    </>
  );
};

export default JobsByCategory;
