import { BOLD } from "@/theme/fonts";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Stack,
  styled,
} from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import UploadIcon from "@mui/icons-material/Upload";
import CreateIcon from "@mui/icons-material/Create";
import { DANGER, NEUTRAL } from "@/theme/colors";
import { LAZY, MID } from "@/theme/spacings";
import DeleteIcon from "@mui/icons-material/Delete";
import LinearProgress from "@mui/material/LinearProgress";
import CustomizedSteppers from "@/ui-components/CustomStpper/CustomStepper";

const StyledCard = styled(Card)({
  border: "1px solid #D3EAFF",
  borderRadius: "12px",
});

const index = () => {
  return (
    <div>
      <Container>
        <Grid container>
          <Grid item md={4}></Grid>
          <Grid item md={8}>
            <Stack sx={{ gap: "30px" }}>
              <Box
                sx={{
                  backgroundColor: "#2699FF",
                  borderRadius: "5px",
                }}
              >
                <Stack
                  direction={"row"}
                  sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 30px",
                  }}
                >
                  <CustomTypography
                    sx={{ fontFamily: BOLD, color: NEUTRAL, fontSize: "20px" }}
                  >
                    My Profile
                  </CustomTypography>
                  <KeyboardArrowDownIcon sx={{ color: NEUTRAL }} />
                </Stack>
              </Box>

              {/* Resume */}
              <StyledCard variant="outlined">
                <Stack
                  direction={"row"}
                  sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 30px",
                    backgroundColor: "#5CA9E814",
                  }}
                >
                  <CustomTypography
                    sx={{
                      fontFamily: BOLD,
                      color: "#00339B",
                      fontSize: "20px",
                    }}
                  >
                    Resume
                  </CustomTypography>
                  <AddIcon />
                </Stack>
                <CardContent>
                  <Stack
                    direction={"row"}
                    sx={{
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      padding: "10px 15px",
                    }}
                  >
                    <CustomTypography sx={{ color: "#00339B" }}>
                      asdf.pdf
                    </CustomTypography>

                    <Stack
                      direction={"row"}
                      sx={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <UploadIcon sx={{ color: "#00339B" }} />
                      <DeleteIcon sx={{ color: DANGER }} />
                    </Stack>
                  </Stack>
                  <Stack direction={"row"} sx={{ justifyContent: "flex-end" }}>
                    <button
                      style={{
                        minWidth: "195px",
                        minHeight: "52px",
                        borderRadius: "8px",
                        border: "1px solid gray",
                      }}
                    >
                      ADD COVER LETTER
                    </button>
                  </Stack>
                </CardContent>
              </StyledCard>

              {/* Personal Detail */}
              <StyledCard variant="outlined">
                <Stack
                  direction={"row"}
                  sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 30px",
                    backgroundColor: "#5CA9E814",
                  }}
                >
                  <Stack
                    direction={"row"}
                    sx={{
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: MID,
                    }}
                  >
                    <CustomTypography
                      sx={{
                        fontFamily: BOLD,
                        color: "#00339B",
                        fontSize: "20px",
                      }}
                    >
                      Personal Details
                    </CustomTypography>
                    <CreateIcon sx={{ color: "#00339B" }} fontSize="small" />
                  </Stack>

                  <AddIcon />
                </Stack>
                <CardContent>
                  <Grid container sx={{ padding: "10px 15px" }}>
                    <Grid item md={6} xs={12}>
                      <Stack sx={{ gap: LAZY }}>
                        <Stack direction={"row"} sx={{ gap: MID }}>
                          <CustomTypography sx={{ fontWeight: "900" }}>
                            Name:
                          </CustomTypography>
                          <CustomTypography>Name</CustomTypography>
                        </Stack>

                        <Stack direction={"row"} sx={{ gap: MID }}>
                          <CustomTypography sx={{ fontWeight: "900" }}>
                            Email:
                          </CustomTypography>
                          <CustomTypography>Name</CustomTypography>
                        </Stack>

                        <Stack direction={"row"} sx={{ gap: MID }}>
                          <CustomTypography sx={{ fontWeight: "900" }}>
                            Contact Details:
                          </CustomTypography>
                          <CustomTypography>Name</CustomTypography>
                        </Stack>

                        <Stack direction={"row"} sx={{ gap: MID }}>
                          <CustomTypography sx={{ fontWeight: "900" }}>
                            Experience:
                          </CustomTypography>
                          <CustomTypography>Name</CustomTypography>
                        </Stack>

                        <Stack direction={"row"} sx={{ gap: MID }}>
                          <CustomTypography sx={{ fontWeight: "900" }}>
                            Offer Letter:
                          </CustomTypography>
                          <CustomTypography>Name</CustomTypography>
                        </Stack>
                      </Stack>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Stack sx={{ gap: LAZY }}>
                        <Stack direction={"row"} sx={{ gap: MID }}>
                          <CustomTypography sx={{ fontWeight: "900" }}>
                            Name:
                          </CustomTypography>
                          <CustomTypography>Name</CustomTypography>
                        </Stack>

                        <Stack direction={"row"} sx={{ gap: MID }}>
                          <CustomTypography sx={{ fontWeight: "900" }}>
                            Email:
                          </CustomTypography>
                          <CustomTypography>Name</CustomTypography>
                        </Stack>

                        <Stack direction={"row"} sx={{ gap: MID }}>
                          <CustomTypography sx={{ fontWeight: "900" }}>
                            Contact Details:
                          </CustomTypography>
                          <CustomTypography>Name</CustomTypography>
                        </Stack>

                        <Stack direction={"row"} sx={{ gap: MID }}>
                          <CustomTypography sx={{ fontWeight: "900" }}>
                            Experience:
                          </CustomTypography>
                          <CustomTypography>Name</CustomTypography>
                        </Stack>

                        <Stack direction={"row"} sx={{ gap: MID }}>
                          <CustomTypography sx={{ fontWeight: "900" }}>
                            Offer Letter:
                          </CustomTypography>
                          <CustomTypography>Name</CustomTypography>
                        </Stack>
                      </Stack>
                    </Grid>
                  </Grid>
                </CardContent>
              </StyledCard>

              {/* Education */}
              <StyledCard variant="outlined">
                <Stack
                  direction={"row"}
                  sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 30px",
                    backgroundColor: "#5CA9E814",
                  }}
                >
                  <CustomTypography
                    sx={{
                      fontFamily: BOLD,
                      color: "#00339B",
                      fontSize: "20px",
                    }}
                  >
                    Resume
                  </CustomTypography>
                  <AddIcon />
                </Stack>
                <CardContent sx={{ padding: "30px 30px" }}>
                  <Stack
                    sx={{
                      backgroundColor: "#F6FCFF",
                      borderRadius: "10px",
                      padding: "20px 30px",
                      border: "1px solid #D3EAFF",
                    }}
                  >
                    <Stack
                      direction={"row"}
                      sx={{ justifyContent: "flex-end", alignItems: "center" }}
                    >
                      <CreateIcon sx={{ color: "#00339B" }} fontSize="small" />
                      <DeleteIcon sx={{ color: DANGER }} />
                    </Stack>
                    <Grid container>
                      <Grid item md={6}>
                        <Stack sx={{ gap: LAZY }}>
                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              Degree:
                            </CustomTypography>
                            <CustomTypography>Degree</CustomTypography>
                          </Stack>

                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              Degree:
                            </CustomTypography>
                            <CustomTypography>Degree</CustomTypography>
                          </Stack>

                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              Degree:
                            </CustomTypography>
                            <CustomTypography>Degree</CustomTypography>
                          </Stack>
                        </Stack>
                      </Grid>
                      <Grid item md={6}>
                        <Stack sx={{ gap: LAZY }}>
                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              Degree:
                            </CustomTypography>
                            <CustomTypography>Degree</CustomTypography>
                          </Stack>

                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              Degree:
                            </CustomTypography>
                            <CustomTypography>Degree</CustomTypography>
                          </Stack>

                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              Degree:
                            </CustomTypography>
                            <CustomTypography>Degree</CustomTypography>
                          </Stack>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Stack>
                </CardContent>
              </StyledCard>

              {/* Experience */}
              <StyledCard variant="outlined">
                <Stack
                  direction={"row"}
                  sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 30px",
                    backgroundColor: "#5CA9E814",
                  }}
                >
                  <CustomTypography
                    sx={{
                      fontFamily: BOLD,
                      color: "#00339B",
                      fontSize: "20px",
                    }}
                  >
                    Experience
                  </CustomTypography>
                  <AddIcon />
                </Stack>
                <CardContent sx={{ padding: "30px 30px" }}>
                  <Stack
                    sx={{
                      backgroundColor: "#F6FCFF",
                      borderRadius: "10px",
                      padding: "20px 30px",
                      border: "1px solid #D3EAFF",
                    }}
                  >
                    <Stack
                      direction={"row"}
                      sx={{ justifyContent: "flex-end", alignItems: "center" }}
                    >
                      <CreateIcon sx={{ color: "#00339B" }} fontSize="small" />
                      <DeleteIcon sx={{ color: DANGER }} />
                    </Stack>
                    <Grid container sx={{ rowGap: "10px" }}>
                      <Grid item md={6}>
                        <Stack sx={{ gap: LAZY }}>
                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              Degree:
                            </CustomTypography>
                            <CustomTypography>Degree</CustomTypography>
                          </Stack>

                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              Degree:
                            </CustomTypography>
                            <CustomTypography>Degree</CustomTypography>
                          </Stack>

                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              Degree:
                            </CustomTypography>
                            <CustomTypography>Degree</CustomTypography>
                          </Stack>
                        </Stack>
                      </Grid>
                      <Grid item md={6}>
                        <Stack sx={{ gap: LAZY }}>
                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              Degree:
                            </CustomTypography>
                            <CustomTypography>Degree</CustomTypography>
                          </Stack>

                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              Degree:
                            </CustomTypography>
                            <CustomTypography>Degree</CustomTypography>
                          </Stack>

                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              Degree:
                            </CustomTypography>
                            <CustomTypography>Degree</CustomTypography>
                          </Stack>
                        </Stack>
                      </Grid>
                      <Grid item md={12}>
                        <Stack sx={{ gap: LAZY }}>
                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              Job Profile:
                            </CustomTypography>
                            <CustomTypography>Degree</CustomTypography>
                          </Stack>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Stack>
                </CardContent>
              </StyledCard>

              {/* Skills */}
              <StyledCard variant="outlined">
                <Stack
                  direction={"row"}
                  sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 30px",
                    backgroundColor: "#5CA9E814",
                  }}
                >
                  <CustomTypography
                    sx={{
                      fontFamily: BOLD,
                      color: "#00339B",
                      fontSize: "20px",
                    }}
                  >
                    Skills
                  </CustomTypography>
                  <AddIcon />
                </Stack>
                <CardContent sx={{ padding: "30px 30px" }}>
                  <table>
                    <tbody>
                      <tr className="styledRows">
                        <td style={{ width: "300px" }} className="startingTd">
                          <CustomTypography>Grpahic Design</CustomTypography>
                        </td>
                        <td style={{ width: "100px" }}>
                          <CustomTypography>3 Years</CustomTypography>
                        </td>
                        <td style={{ width: "150px" }}>
                          <CustomTypography>Expert</CustomTypography>
                        </td>
                        <td style={{ width: "160px" }}>
                          <LinearProgress variant="determinate" value={100} />
                        </td>
                        <td
                          style={{
                            width: "150px",
                          }}
                          className="endTd"
                        >
                          <Stack
                            direction={"row"}
                            sx={{
                              justifyContent: "flex-end",
                              alignItems: "center",
                            }}
                          >
                            <CreateIcon
                              sx={{ color: "#00339B" }}
                              fontSize="small"
                            />
                            <DeleteIcon sx={{ color: DANGER }} />
                          </Stack>
                        </td>
                      </tr>
                      <tr className="styledRows">
                        <td style={{ width: "300px" }} className="startingTd">
                          <CustomTypography>Grpahic Design</CustomTypography>
                        </td>
                        <td style={{ width: "100px" }}>
                          <CustomTypography>3 Years</CustomTypography>
                        </td>
                        <td style={{ width: "150px" }}>
                          <CustomTypography>Expert</CustomTypography>
                        </td>
                        <td style={{ width: "160px" }}>
                          <LinearProgress variant="determinate" value={100} />
                        </td>
                        <td
                          style={{
                            width: "150px",
                          }}
                          className="endTd"
                        >
                          <Stack
                            direction={"row"}
                            sx={{
                              justifyContent: "flex-end",
                              alignItems: "center",
                            }}
                          >
                            <CreateIcon
                              sx={{ color: "#00339B" }}
                              fontSize="small"
                            />
                            <DeleteIcon sx={{ color: DANGER }} />
                          </Stack>
                        </td>
                      </tr>
                      <tr className="styledRows">
                        <td style={{ width: "300px" }} className="startingTd">
                          <CustomTypography>Grpahic Design</CustomTypography>
                        </td>
                        <td style={{ width: "100px" }}>
                          <CustomTypography>3 Years</CustomTypography>
                        </td>
                        <td style={{ width: "150px" }}>
                          <CustomTypography>Expert</CustomTypography>
                        </td>
                        <td style={{ width: "160px" }}>
                          <LinearProgress variant="determinate" value={100} />
                        </td>
                        <td
                          style={{
                            width: "150px",
                          }}
                          className="endTd"
                        >
                          <Stack
                            direction={"row"}
                            sx={{
                              justifyContent: "flex-end",
                              alignItems: "center",
                            }}
                          >
                            <CreateIcon
                              sx={{ color: "#00339B" }}
                              fontSize="small"
                            />
                            <DeleteIcon sx={{ color: DANGER }} />
                          </Stack>
                        </td>
                      </tr>
                      <tr className="styledRows">
                        <td style={{ width: "300px" }} className="startingTd">
                          <CustomTypography>Grpahic Design</CustomTypography>
                        </td>
                        <td style={{ width: "100px" }}>
                          <CustomTypography>3 Years</CustomTypography>
                        </td>
                        <td style={{ width: "150px" }}>
                          <CustomTypography>Expert</CustomTypography>
                        </td>
                        <td style={{ width: "160px" }}>
                          <LinearProgress variant="determinate" value={100} />
                        </td>
                        <td
                          style={{
                            width: "150px",
                          }}
                          className="endTd"
                        >
                          <Stack
                            direction={"row"}
                            sx={{
                              justifyContent: "flex-end",
                              alignItems: "center",
                            }}
                          >
                            <CreateIcon
                              sx={{ color: "#00339B" }}
                              fontSize="small"
                            />
                            <DeleteIcon sx={{ color: DANGER }} />
                          </Stack>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              </StyledCard>

              <Box
                sx={{
                  backgroundColor: "#2699FF",
                  borderRadius: "5px",
                }}
              >
                <Stack
                  direction={"row"}
                  sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 30px",
                  }}
                >
                  <CustomTypography
                    sx={{ fontFamily: BOLD, color: NEUTRAL, fontSize: "20px" }}
                  >
                    Other Certifications
                  </CustomTypography>
                  <KeyboardArrowDownIcon sx={{ color: NEUTRAL }} />
                </Stack>
              </Box>

              {/* Project */}
              <StyledCard variant="outlined">
                <Stack
                  direction={"row"}
                  sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 30px",
                    backgroundColor: "#5CA9E814",
                  }}
                >
                  <CustomTypography
                    sx={{
                      fontFamily: BOLD,
                      color: "#00339B",
                      fontSize: "20px",
                    }}
                  >
                    Project
                  </CustomTypography>
                  <AddIcon />
                </Stack>
                <CardContent sx={{ padding: "30px 30px" }}>
                  <Stack
                    sx={{
                      backgroundColor: "#F6FCFF",
                      borderRadius: "10px",
                      padding: "20px 30px",
                      border: "1px solid #D3EAFF",
                    }}
                  >
                    <Stack
                      direction={"row"}
                      sx={{ justifyContent: "flex-end", alignItems: "center" }}
                    >
                      <CreateIcon sx={{ color: "#00339B" }} fontSize="small" />
                      <DeleteIcon sx={{ color: DANGER }} />
                    </Stack>
                    <Grid container>
                      <Grid item md={6}>
                        <Stack sx={{ gap: LAZY }}>
                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              Portfolio Link:
                            </CustomTypography>
                            <CustomTypography>Degree</CustomTypography>
                          </Stack>
                        </Stack>
                      </Grid>
                      <Grid item md={6}>
                        <Stack sx={{ gap: LAZY }}>
                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              Project Name:
                            </CustomTypography>
                            <CustomTypography>Degree</CustomTypography>
                          </Stack>
                        </Stack>
                      </Grid>
                      <Grid item md={12}>
                        <Stack sx={{ gap: LAZY }}>
                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              Description:
                            </CustomTypography>
                            <CustomTypography>Degree</CustomTypography>
                          </Stack>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Stack>
                </CardContent>
              </StyledCard>

              {/* Training */}
              <StyledCard variant="outlined">
                <Stack
                  direction={"row"}
                  sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 30px",
                    backgroundColor: "#5CA9E814",
                  }}
                >
                  <CustomTypography
                    sx={{
                      fontFamily: BOLD,
                      color: "#00339B",
                      fontSize: "20px",
                    }}
                  >
                    Training
                  </CustomTypography>
                  <AddIcon />
                </Stack>
                <CardContent sx={{ padding: "30px 30px" }}>
                  <Stack
                    sx={{
                      backgroundColor: "#F6FCFF",
                      borderRadius: "10px",
                      padding: "20px 30px",
                      border: "1px solid #D3EAFF",
                    }}
                  >
                    <Stack
                      direction={"row"}
                      sx={{ justifyContent: "flex-end", alignItems: "center" }}
                    >
                      <CreateIcon sx={{ color: "#00339B" }} fontSize="small" />
                      <DeleteIcon sx={{ color: DANGER }} />
                    </Stack>
                    <Grid container spacing={2}>
                      <Grid item md={6}>
                        <Stack sx={{ gap: LAZY }}>
                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              Portfolio Link:
                            </CustomTypography>
                            <CustomTypography>Degree</CustomTypography>
                          </Stack>
                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              From
                            </CustomTypography>
                            <CustomTypography>Degree</CustomTypography>
                          </Stack>
                        </Stack>
                      </Grid>
                      <Grid item md={6}>
                        <Stack sx={{ gap: LAZY }}>
                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              Project Name:
                            </CustomTypography>
                            <CustomTypography>Degree</CustomTypography>
                          </Stack>

                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              From
                            </CustomTypography>
                            <CustomTypography>Degree</CustomTypography>
                          </Stack>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Stack>
                </CardContent>
              </StyledCard>

              {/* Certificate */}
              <StyledCard variant="outlined">
                <Stack
                  direction={"row"}
                  sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 30px",
                    backgroundColor: "#5CA9E814",
                  }}
                >
                  <CustomTypography
                    sx={{
                      fontFamily: BOLD,
                      color: "#00339B",
                      fontSize: "20px",
                    }}
                  >
                    Certificate
                  </CustomTypography>
                  <AddIcon />
                </Stack>
                <CardContent sx={{ padding: "30px 30px" }}>
                  <Stack
                    sx={{
                      backgroundColor: "#F6FCFF",
                      borderRadius: "10px",
                      padding: "20px 30px",
                      border: "1px solid #D3EAFF",
                    }}
                  >
                    <Stack
                      direction={"row"}
                      sx={{ justifyContent: "flex-end", alignItems: "center" }}
                    >
                      <CreateIcon sx={{ color: "#00339B" }} fontSize="small" />
                      <DeleteIcon sx={{ color: DANGER }} />
                    </Stack>
                    <Grid container spacing={2}>
                      <Grid item md={6}>
                        <Stack sx={{ gap: LAZY }}>
                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              Portfolio Link:
                            </CustomTypography>
                            <CustomTypography>Degree</CustomTypography>
                          </Stack>
                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              From
                            </CustomTypography>
                            <CustomTypography>Degree</CustomTypography>
                          </Stack>
                        </Stack>
                      </Grid>
                      <Grid item md={6}>
                        <Stack sx={{ gap: LAZY }}>
                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              Project Name:
                            </CustomTypography>
                            <CustomTypography>Degree</CustomTypography>
                          </Stack>

                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              From
                            </CustomTypography>
                            <CustomTypography>Degree</CustomTypography>
                          </Stack>
                        </Stack>
                      </Grid>
                      <Grid item md={12}>
                        <Stack
                          sx={{
                            border: "1px solid #DADADA",
                            justifyContent: "space-between",
                            alignContent: "center",
                            padding: "15px",
                          }}
                          direction="row"
                        >
                          <CustomTypography>Certificate.pdf</CustomTypography>
                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <UploadIcon sx={{ color: "#00339B" }} />
                            <DeleteIcon sx={{ color: DANGER }} />
                          </Stack>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Stack>
                </CardContent>
              </StyledCard>

              <Box
                sx={{
                  backgroundColor: "#2699FF",
                  borderRadius: "5px",
                }}
              >
                <Stack
                  direction={"row"}
                  sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 30px",
                  }}
                >
                  <CustomTypography
                    sx={{ fontFamily: BOLD, color: NEUTRAL, fontSize: "20px" }}
                  >
                    Jobs
                  </CustomTypography>
                  <KeyboardArrowDownIcon sx={{ color: NEUTRAL }} />
                </Stack>
              </Box>

              {/* Applied Job */}
              <StyledCard variant="outlined">
                <Stack
                  direction={"row"}
                  sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 30px",
                    backgroundColor: "#5CA9E814",
                  }}
                >
                  <CustomTypography
                    sx={{
                      fontFamily: BOLD,
                      color: "#00339B",
                      fontSize: "20px",
                    }}
                  >
                    Applied Job
                  </CustomTypography>
                  <AddIcon />
                </Stack>
                <CardContent sx={{ padding: "30px 30px" }}>
                  <Stack
                    sx={{
                      backgroundColor: "#F6FCFF",
                      borderRadius: "10px",
                      padding: "20px 30px",
                      border: "1px solid #D3EAFF",
                      gap: "5px",
                    }}
                  >
                    <Stack
                      direction={"row"}
                      sx={{ justifyContent: "flex-end", alignItems: "center" }}
                    >
                      <CustomTypography
                        sx={{
                          color: DANGER,
                          fontSize: "13px",
                          textDecoration: "underline",
                        }}
                      >
                        Withdraw
                      </CustomTypography>
                    </Stack>
                    <Stack
                      direction={"row"}
                      sx={{ alignItems: "center", gap: "10px" }}
                    >
                      <CustomTypography
                        sx={{ fontFamily: BOLD, fontSize: "25px" }}
                      >
                        Graphic Designer
                      </CustomTypography>
                      <Box
                        sx={{
                          backgroundColor: "#89D5FB",
                          padding: "1px 4px",
                          borderRadius: "7px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "29px",
                        }}
                      >
                        <CustomTypography
                          sx={{ color: "#02A9F7", fontSize: "12px" }}
                        >
                          Viewed
                        </CustomTypography>
                      </Box>
                    </Stack>
                    <Stack>
                      <CustomTypography>Recroot</CustomTypography>
                    </Stack>
                    <Stack direction={"row"} sx={{ gap: "20px" }}>
                      <CustomTypography
                        sx={{ color: "gray", fontSize: "13px" }}
                      >
                        Remote
                      </CustomTypography>
                      <CustomTypography
                        sx={{ color: "gray", fontSize: "13px" }}
                      >
                        Part Time
                      </CustomTypography>
                      <CustomTypography
                        sx={{ color: "gray", fontSize: "13px" }}
                      >
                        3-6 Years
                      </CustomTypography>
                      <CustomTypography
                        sx={{ color: "gray", fontSize: "13px" }}
                      >
                        3-6 LPA
                      </CustomTypography>
                    </Stack>
                    <Stack
                      direction={"row"}
                      sx={{ justifyContent: "space-between", mb: "20px" }}
                    >
                      <CustomTypography
                        sx={{
                          color: "#00339B",
                          textDecoration: "underline",
                          fontSize: "15px",
                        }}
                      >
                        See Full Description
                      </CustomTypography>
                      <CustomTypography
                        sx={{
                          color: "gray",
                          fontFamily: BOLD,
                          fontSize: "15px",
                        }}
                      >
                        430 Applications Received
                      </CustomTypography>
                    </Stack>
                    <Divider />

                    <Stack sx={{ gap: "50px", mt: "20px" }}>
                      <CustomTypography sx={{ fontFamily: BOLD }}>
                        Application Status
                      </CustomTypography>
                      <CustomizedSteppers />
                      <Stack
                        direction={"row"}
                        sx={{
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <button
                          style={{
                            backgroundColor: "#02A9F7",
                            color: NEUTRAL,
                            height: "50px",
                            borderRadius: "8px",
                            width: "250px",
                            fontWeight: "900",
                            fontSize: "18px",
                          }}
                        >
                          See Company Profile
                        </button>
                        <CustomTypography
                          sx={{
                            textDecoration: "underline",
                            color: "#00339B",
                            fontSize: "14px",
                          }}
                        >
                          View Similar Jobs
                        </CustomTypography>
                      </Stack>
                    </Stack>
                  </Stack>
                </CardContent>
              </StyledCard>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default index;
