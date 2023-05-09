/* eslint-disable @next/next/no-img-element */
import { NEUTRAL, PRIMARY } from "../../theme/colors";
import { MAX, MID } from "../../theme/spacings";
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  styled,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { CustomTypography } from "../../ui-components/CustomTypography/CustomTypography";
import Carousel from "react-elastic-carousel";
import Image from "next/image";

const StyledCarousel = styled(Carousel)({
  "& .rec .rec-carousel": {
    height: "705px",
  },
});

const CategoryHome = () => {
  const tablet = useMediaQuery("(max-width:974px)");
  const mobile = useMediaQuery("(max-width:900px)");

  const breakPoints = [
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 974, itemsToShow: 4 },
  ];

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
          <Grid container>
            <Grid item md={8} sm={12} xs={12}>
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

              <StyledCarousel breakPoints={breakPoints} showArrows={false}>
                <Stack
                  sx={{
                    width: "100%",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    minHeight: "700px",
                  }}
                >
                  <Box
                    className="categoryBox"
                    sx={{
                      backgroundColor: "#034275CC",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Grid container>
                      <Grid
                        item
                        md={3}
                        sx={{ display: "flex", justifyContent: "center" }}
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
                        }}
                      ></Grid>

                      <Grid item md={8}>
                        <Stack>
                          <CustomTypography
                            sx={{
                              fontSize: "22px",
                              fontWeight: 900,
                              color: NEUTRAL,
                            }}
                          >
                            Software Engineer
                          </CustomTypography>
                          <CustomTypography
                            sx={{
                              fontSize: "18px",
                              fontWeight: 500,
                              color: NEUTRAL,
                            }}
                          >
                            155 Jobs Available
                          </CustomTypography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Box>

                  <Box
                    className="categoryBox"
                    sx={{
                      backgroundColor: "#034275CC",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Grid container>
                      <Grid
                        item
                        md={3}
                        sx={{ display: "flex", justifyContent: "center" }}
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
                        }}
                      ></Grid>
                      <Grid item md={8}>
                        <Stack>
                          <CustomTypography
                            sx={{
                              fontSize: "22px",
                              fontWeight: 900,
                              color: NEUTRAL,
                            }}
                          >
                            Software Engineer
                          </CustomTypography>
                          <CustomTypography
                            sx={{
                              fontSize: "18px",
                              fontWeight: 500,
                              color: NEUTRAL,
                            }}
                          >
                            155 Jobs Available
                          </CustomTypography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Box>

                  <Box
                    className="categoryBox"
                    sx={{
                      backgroundColor: "#034275CC",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Grid container>
                      <Grid
                        item
                        md={3}
                        sx={{ display: "flex", justifyContent: "center" }}
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
                        }}
                      ></Grid>
                      <Grid item md={8}>
                        <Stack>
                          <CustomTypography
                            sx={{
                              fontSize: "22px",
                              fontWeight: 900,
                              color: NEUTRAL,
                            }}
                          >
                            Software Engineer
                          </CustomTypography>
                          <CustomTypography
                            sx={{
                              fontSize: "18px",
                              fontWeight: 500,
                              color: NEUTRAL,
                            }}
                          >
                            155 Jobs Available
                          </CustomTypography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Box>

                  <Box
                    className="categoryBox"
                    sx={{
                      backgroundColor: "#034275CC",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Grid container>
                      <Grid
                        item
                        md={3}
                        sx={{ display: "flex", justifyContent: "center" }}
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
                        }}
                      ></Grid>
                      <Grid item md={8}>
                        <Stack>
                          <CustomTypography
                            sx={{
                              fontSize: "22px",
                              fontWeight: 900,
                              color: NEUTRAL,
                            }}
                          >
                            Software Engineer
                          </CustomTypography>
                          <CustomTypography
                            sx={{
                              fontSize: "18px",
                              fontWeight: 500,
                              color: NEUTRAL,
                            }}
                          >
                            155 Jobs Available
                          </CustomTypography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Box>
                </Stack>

                <Stack
                  sx={{
                    width: "100%",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    minHeight: "700px",
                  }}
                >
                  <Box
                    className="categoryBox"
                    sx={{
                      backgroundColor: "#034275CC",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Grid container>
                      <Grid
                        item
                        md={3}
                        sx={{ display: "flex", justifyContent: "center" }}
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
                        }}
                      ></Grid>
                      <Grid item md={8}>
                        <Stack>
                          <CustomTypography
                            sx={{
                              fontSize: "22px",
                              fontWeight: 900,
                              color: NEUTRAL,
                            }}
                          >
                            Software Engineer
                          </CustomTypography>
                          <CustomTypography
                            sx={{
                              fontSize: "18px",
                              fontWeight: 500,
                              color: NEUTRAL,
                            }}
                          >
                            155 Jobs Available
                          </CustomTypography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Box>

                  <Box
                    className="categoryBox"
                    sx={{
                      backgroundColor: "#034275CC",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Grid container>
                      <Grid
                        item
                        md={3}
                        sx={{ display: "flex", justifyContent: "center" }}
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
                        }}
                      ></Grid>
                      <Grid item md={8}>
                        <Stack>
                          <CustomTypography
                            sx={{
                              fontSize: "22px",
                              fontWeight: 900,
                              color: NEUTRAL,
                            }}
                          >
                            Software Engineer
                          </CustomTypography>
                          <CustomTypography
                            sx={{
                              fontSize: "18px",
                              fontWeight: 500,
                              color: NEUTRAL,
                            }}
                          >
                            155 Jobs Available
                          </CustomTypography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Box>

                  <Box
                    className="categoryBox"
                    sx={{
                      backgroundColor: "#034275CC",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Grid container>
                      <Grid
                        item
                        md={3}
                        sx={{ display: "flex", justifyContent: "center" }}
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
                        }}
                      ></Grid>
                      <Grid item md={8}>
                        <Stack>
                          <CustomTypography
                            sx={{
                              fontSize: "22px",
                              fontWeight: 900,
                              color: NEUTRAL,
                            }}
                          >
                            Software Engineer
                          </CustomTypography>
                          <CustomTypography
                            sx={{
                              fontSize: "18px",
                              fontWeight: 500,
                              color: NEUTRAL,
                            }}
                          >
                            155 Jobs Available
                          </CustomTypography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Box>

                  <Box
                    className="categoryBox"
                    sx={{
                      backgroundColor: "#034275CC",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Grid container>
                      <Grid
                        item
                        md={3}
                        sx={{ display: "flex", justifyContent: "center" }}
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
                        }}
                      ></Grid>
                      <Grid item md={8}>
                        <Stack>
                          <CustomTypography
                            sx={{
                              fontSize: "22px",
                              fontWeight: 900,
                              color: NEUTRAL,
                            }}
                          >
                            Software Engineer
                          </CustomTypography>
                          <CustomTypography
                            sx={{
                              fontSize: "18px",
                              fontWeight: 500,
                              color: NEUTRAL,
                            }}
                          >
                            155 Jobs Available
                          </CustomTypography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Box>
                </Stack>

                <Stack
                  sx={{
                    width: "100%",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    minHeight: "700px",
                  }}
                >
                  <Box
                    className="categoryBox"
                    sx={{
                      backgroundColor: "#034275CC",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Grid container>
                      <Grid
                        item
                        md={3}
                        sx={{ display: "flex", justifyContent: "center" }}
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
                        }}
                      ></Grid>
                      <Grid item md={8}>
                        <Stack>
                          <CustomTypography
                            sx={{
                              fontSize: "22px",
                              fontWeight: 900,
                              color: NEUTRAL,
                            }}
                          >
                            Software Engineer
                          </CustomTypography>
                          <CustomTypography
                            sx={{
                              fontSize: "18px",
                              fontWeight: 500,
                              color: NEUTRAL,
                            }}
                          >
                            155 Jobs Available
                          </CustomTypography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Box>

                  <Box
                    className="categoryBox"
                    sx={{
                      backgroundColor: "#034275CC",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Grid container>
                      <Grid
                        item
                        md={3}
                        sx={{ display: "flex", justifyContent: "center" }}
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
                        }}
                      ></Grid>
                      <Grid item md={8}>
                        <Stack>
                          <CustomTypography
                            sx={{
                              fontSize: "22px",
                              fontWeight: 900,
                              color: NEUTRAL,
                            }}
                          >
                            Software Engineer
                          </CustomTypography>
                          <CustomTypography
                            sx={{
                              fontSize: "18px",
                              fontWeight: 500,
                              color: NEUTRAL,
                            }}
                          >
                            155 Jobs Available
                          </CustomTypography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Box>

                  <Box
                    className="categoryBox"
                    sx={{
                      backgroundColor: "#034275CC",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Grid container>
                      <Grid
                        item
                        md={3}
                        sx={{ display: "flex", justifyContent: "center" }}
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
                        }}
                      ></Grid>
                      <Grid item md={8}>
                        <Stack>
                          <CustomTypography
                            sx={{
                              fontSize: "22px",
                              fontWeight: 900,
                              color: NEUTRAL,
                            }}
                          >
                            Software Engineer
                          </CustomTypography>
                          <CustomTypography
                            sx={{
                              fontSize: "18px",
                              fontWeight: 500,
                              color: NEUTRAL,
                            }}
                          >
                            155 Jobs Available
                          </CustomTypography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Box>

                  <Box
                    className="categoryBox"
                    sx={{
                      backgroundColor: "#034275CC",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Grid container>
                      <Grid
                        item
                        md={3}
                        sx={{ display: "flex", justifyContent: "center" }}
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
                        }}
                      ></Grid>
                      <Grid item md={8}>
                        <Stack>
                          <CustomTypography
                            sx={{
                              fontSize: "22px",
                              fontWeight: 900,
                              color: NEUTRAL,
                            }}
                          >
                            Software Engineer
                          </CustomTypography>
                          <CustomTypography
                            sx={{
                              fontSize: "18px",
                              fontWeight: 500,
                              color: NEUTRAL,
                            }}
                          >
                            155 Jobs Available
                          </CustomTypography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Box>
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
              <img
                src="/browseImage.png"
                alt=""
                className="categoryImageMiddled"
              />
            </Grid>
          </Grid>
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
                    <Box
                      sx={{
                        backgroundColor: "#034275CC",
                        display: "flex",
                        alignItems: "center",
                        padding: MID,
                        borderRadius: "20px",
                        width: "350px",
                        height: "120px",
                      }}
                    >
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
                              Software Engineer
                            </CustomTypography>
                            <CustomTypography
                              sx={{
                                fontSize: "18px",
                                fontWeight: 500,
                                color: NEUTRAL,
                              }}
                            >
                              155 Jobs Available
                            </CustomTypography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Box>

                    <Box
                      sx={{
                        backgroundColor: PRIMARY,
                        display: "flex",
                        alignItems: "center",
                        padding: MID,
                        borderRadius: "20px",
                        width: "350px",
                        height: "120px",
                      }}
                    >
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
                              Software Engineer
                            </CustomTypography>
                            <CustomTypography
                              sx={{
                                fontSize: "18px",
                                fontWeight: 500,
                                color: NEUTRAL,
                              }}
                            >
                              155 Jobs Available
                            </CustomTypography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Box>

                    <Box
                      sx={{
                        backgroundColor: "#034275CC",
                        display: "flex",
                        alignItems: "center",
                        padding: MID,
                        borderRadius: "20px",
                        width: "350px",
                        height: "120px",
                      }}
                    >
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
                              Software Engineer
                            </CustomTypography>
                            <CustomTypography
                              sx={{
                                fontSize: "18px",
                                fontWeight: 500,
                                color: NEUTRAL,
                              }}
                            >
                              155 Jobs Available
                            </CustomTypography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Box>

                    <Box
                      sx={{
                        backgroundColor: PRIMARY,
                        display: "flex",
                        alignItems: "center",
                        padding: MID,
                        borderRadius: "20px",
                        width: "350px",
                        height: "120px",
                      }}
                    >
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
                              Software Engineer
                            </CustomTypography>
                            <CustomTypography
                              sx={{
                                fontSize: "18px",
                                fontWeight: 500,
                                color: NEUTRAL,
                              }}
                            >
                              155 Jobs Available
                            </CustomTypography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Box>
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
                    <img
                      src="/browseImage.png"
                      alt=""
                      className="categoryImage"
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
                    <Box
                      sx={{
                        backgroundColor: "#034275CC",
                        display: "flex",
                        alignItems: "center",
                        padding: MID,
                        borderRadius: "20px",
                        width: "350px",
                        height: "120px",
                      }}
                    >
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
                              Software Engineer
                            </CustomTypography>
                            <CustomTypography
                              sx={{
                                fontSize: "18px",
                                fontWeight: 500,
                                color: NEUTRAL,
                              }}
                            >
                              155 Jobs Available
                            </CustomTypography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Box>

                    <Box
                      sx={{
                        backgroundColor: PRIMARY,
                        display: "flex",
                        alignItems: "center",
                        padding: MID,
                        borderRadius: "20px",
                        width: "350px",
                        height: "120px",
                      }}
                    >
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
                              Software Engineer
                            </CustomTypography>
                            <CustomTypography
                              sx={{
                                fontSize: "18px",
                                fontWeight: 500,
                                color: NEUTRAL,
                              }}
                            >
                              155 Jobs Available
                            </CustomTypography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Box>

                    <Box
                      sx={{
                        backgroundColor: "#034275CC",
                        display: "flex",
                        alignItems: "center",
                        padding: MID,
                        borderRadius: "20px",
                        width: "350px",
                        height: "120px",
                      }}
                    >
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
                              Software Engineer
                            </CustomTypography>
                            <CustomTypography
                              sx={{
                                fontSize: "18px",
                                fontWeight: 500,
                                color: NEUTRAL,
                              }}
                            >
                              155 Jobs Available
                            </CustomTypography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Box>

                    <Box
                      sx={{
                        backgroundColor: PRIMARY,
                        display: "flex",
                        alignItems: "center",
                        padding: MID,
                        borderRadius: "20px",
                        width: "350px",
                        height: "120px",
                      }}
                    >
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
                              Software Engineer
                            </CustomTypography>
                            <CustomTypography
                              sx={{
                                fontSize: "18px",
                                fontWeight: 500,
                                color: NEUTRAL,
                              }}
                            >
                              155 Jobs Available
                            </CustomTypography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Box>
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
