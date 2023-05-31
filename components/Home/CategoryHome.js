import { NEUTRAL, PRIMARY } from "../../theme/colors";
import { MAX, MID } from "../../theme/spacings";
import {
  Box,
  Container,
  Grid,
  Stack,
  styled,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { CustomTypography } from "../../ui-components/CustomTypography/CustomTypography";
import Carousel from "react-elastic-carousel";
import Image from "next/image";
import jobsService from "@/redux/services/job.service";
import styles from "./category.module.css";

const StyledCarousel = styled(Carousel)({
  "& .rec .rec-carousel": {
    height: "705px",
  },
});

const CategoryHome = () => {
  const breakPoints = [
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 974, itemsToShow: 4 },
  ];
  const [categorySetOne, setCategorySetOne] = useState([]);
  const [categorySetTwo, setCategorySetTwo] = useState([]);
  const jobs = new jobsService();

  const getCategories = () => {
    jobs
      .getJobsCatCount()
      .then((res) => {
        const firstColumn = res.data.jobCount.slice(0, 4);
        const secondColumn = res.data.jobCount.slice(4, 8);
        setCategorySetOne(firstColumn);
        setCategorySetTwo(secondColumn);
      })
      .catch((res) => {
        console.log(res.data);
      });
  };

  const tablet = useMediaQuery("(max-width:974px)");
  const mobile = useMediaQuery("(max-width:900px)");

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div
      style={{
        padding: "50px 0 48px 0",
        minHeight: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: tablet ? "space-evenly" : "center",
        backgroundColor: "#D4F0FC",
      }}
    >
      <Container>
        {tablet ? (
          <>
            <Stack
              direction={"row"}
              sx={{ gap: "10px", justifyContent: "center", flexWrap: "wrap" }}
            >
              <CustomTypography
                sx={{
                  fontSize: MAX,
                  fontWeight: "700",
                  fontFamily: "Inter-Bold",
                }}
              >
                Browse
              </CustomTypography>
              <CustomTypography
                sx={{
                  fontSize: MAX,
                  fontWeight: "700",
                  color: PRIMARY,
                  fontFamily: "Inter-Bold",
                }}
              >
                Category
              </CustomTypography>
            </Stack>
            <Grid container>
              <Grid item md={8} sm={12} xs={12}>
                <StyledCarousel breakPoints={breakPoints} showArrows={true}>
                  <Stack
                    sx={{
                      width: "100%",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      minHeight: "700px",
                    }}
                  >
                    {categorySetOne.map((cat, index) => (
                      <Box
                        key={index}
                        className="categoryBox"
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Grid
                          container
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                          }}
                        >
                          <Grid
                            item
                            md={3}
                            sx={{
                              display: { sm: "none", xs: "none", md: "flex" },
                              justifyContent: "center",
                            }}
                          >
                            <Image
                              src="/pointer.svg"
                              alt=""
                              width="0"
                              height="0"
                              sizes="100vw"
                              className="pointers"
                            />
                          </Grid>

                          <Grid
                            item
                            md={0.5}
                            sx={{
                              padding: "0 5px",
                              borderLeft: "1px solid",
                              borderLeftStyle: "outset",
                              display: { sm: "none", xs: "none" },
                            }}
                          ></Grid>
                          <Grid item md={8.5}>
                            <Stack
                              sx={{
                                justifyContent: "center",
                              }}
                            >
                              <CustomTypography
                                sx={{
                                  fontSize: "22px",
                                  fontWeight: 900,
                                  color: NEUTRAL,
                                }}
                              >
                                {cat?._id}
                              </CustomTypography>
                              <CustomTypography
                                sx={{
                                  fontSize: "18px",
                                  fontWeight: 500,
                                  color: NEUTRAL,
                                }}
                              >
                                {cat.count}
                                155 Jobs Available
                              </CustomTypography>
                            </Stack>
                          </Grid>
                        </Grid>
                      </Box>
                    ))}
                  </Stack>

                  <Stack
                    sx={{
                      width: "100%",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      minHeight: "700px",
                    }}
                  >
                    {categorySetTwo.map((cat, index) => (
                      <Box
                        key={index}
                        className="categoryBox"
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Grid
                          container
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                          }}
                        >
                          <Grid
                            item
                            md={3}
                            sx={{
                              display: { sm: "none", xs: "none", md: "flex" },
                              justifyContent: "center",
                            }}
                          >
                            <Image
                              src="/pointer.svg"
                              alt=""
                              width="0"
                              height="0"
                              sizes="100vw"
                              className="pointers"
                            />
                          </Grid>

                          <Grid
                            item
                            md={0.5}
                            sx={{
                              padding: "0 5px",
                              borderLeft: "1px solid",
                              borderLeftStyle: "outset",
                              display: { sm: "none", xs: "none" },
                            }}
                          ></Grid>
                          <Grid item md={8.5}>
                            <Stack
                              sx={{
                                justifyContent: "center",
                              }}
                            >
                              <CustomTypography
                                sx={{
                                  fontSize: "22px",
                                  fontWeight: 900,
                                  color: NEUTRAL,
                                }}
                              >
                                {cat?._id}
                              </CustomTypography>
                              <CustomTypography
                                sx={{
                                  fontSize: "18px",
                                  fontWeight: 500,
                                  color: NEUTRAL,
                                }}
                              >
                                {cat.count}
                                155 Jobs Available
                              </CustomTypography>
                            </Stack>
                          </Grid>
                        </Grid>
                      </Box>
                    ))}
                  </Stack>
                </StyledCarousel>
              </Grid>
              <Grid
                item
                md={4}
                sm={0}
                xs={0}
                sx={{ padding: "10px", display: mobile ? "none" : "flex" }}
              >
                <Image
                  src="/browseImage.png"
                  alt=""
                  className="categoryImageMiddled"
                  width="0"
                  height="0"
                  sizes="100vw"
                />
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            <Stack
              sx={{
                // rowGap: "50px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Stack direction={"row"} sx={{ gap: "10px" }}>
                <CustomTypography
                  sx={{
                    fontSize: MAX,
                    fontWeight: "700",
                    fontFamily: "Inter-Bold",
                  }}
                >
                  Browse
                </CustomTypography>
                <CustomTypography
                  sx={{
                    fontSize: MAX,
                    fontWeight: "700",
                    color: PRIMARY,
                    fontFamily: "Inter-Bold",
                  }}
                >
                  Category
                </CustomTypography>
              </Stack>

              <Grid container sx={{ minHeight: "600px" }}>
                <Grid item md={4}>
                  <Stack
                    sx={{
                      width: "100%",
                      justifyContent: "space-evenly",
                      alignItems: "flex-start",
                      height: "100%",
                    }}
                  >
                    {categorySetOne.map((cat, index) => (
                      <Box key={index} className={styles.categoryCards}>
                        <Grid container>
                          <Grid item md={3}>
                            <Image
                              src="/pointer.svg"
                              alt=""
                              width="0"
                              height="0"
                              sizes="100vw"
                              className="pointers"
                            />
                          </Grid>
                          <Grid
                            item
                            md={0.5}
                            sx={{
                              padding: "0 5px",
                              borderLeft: "1px solid",
                              borderLeftStyle: "outset",
                            }}
                          >
                            {/* <Divider orientation="vertical" variant="fullWidth" /> */}
                          </Grid>
                          <Grid item md={8}>
                            <Stack>
                              <CustomTypography
                                sx={{
                                  fontSize: "22px",
                                  fontWeight: 900,
                                  color: NEUTRAL,
                                }}
                              >
                                {cat?._id}
                              </CustomTypography>
                              <CustomTypography
                                sx={{
                                  fontSize: "18px",
                                  fontWeight: 500,
                                  color: NEUTRAL,
                                }}
                              >
                                {cat?.count} Jobs Available
                              </CustomTypography>
                            </Stack>
                          </Grid>
                        </Grid>
                      </Box>
                    ))}
                  </Stack>
                </Grid>

                <Grid item md={4}>
                  <Stack
                    sx={{
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      src="/browseImage1.png"
                      alt=""
                      className="categoryImage"
                      width="0"
                      height="0"
                      sizes="100vw"
                    />
                  </Stack>
                </Grid>

                <Grid item md={4}>
                  <Stack
                    sx={{
                      width: "100%",
                      justifyContent: "space-evenly",
                      alignItems: "flex-end",
                      height: "100%",
                    }}
                  >
                    {categorySetTwo.map((cate, index) => (
                      <Box key={index} className={styles.categoryCards}>
                        <Grid container>
                          <Grid item md={3}>
                            <Image
                              src="/pointer.svg"
                              alt=""
                              width="0"
                              height="0"
                              sizes="100vw"
                              className="pointers"
                            />
                          </Grid>
                          <Grid
                            item
                            md={0.5}
                            sx={{
                              padding: "0 5px",
                              borderLeft: "1px solid",
                              borderLeftStyle: "outset",
                            }}
                          >
                            {/* <Divider orientation="vertical" variant="fullWidth" /> */}
                          </Grid>
                          <Grid item md={8}>
                            <Stack>
                              <CustomTypography
                                sx={{
                                  fontSize: "22px",
                                  fontWeight: 900,
                                  color: NEUTRAL,
                                }}
                              >
                                {cate?._id}
                              </CustomTypography>
                              <CustomTypography
                                sx={{
                                  fontSize: "18px",
                                  fontWeight: 500,
                                  color: NEUTRAL,
                                }}
                              >
                                {cate?.count} Jobs Available
                              </CustomTypography>
                            </Stack>
                          </Grid>
                        </Grid>
                      </Box>
                    ))}
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
          </>
        )}
      </Container>
    </div>
  );
};

export default CategoryHome;
