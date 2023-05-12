import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { Box, CardContent, Collapse, Grid, Stack } from "@mui/material";
import React, { useState, useEffect } from "react";
import { StyledCard } from "../ProfileStyles";
import AddIcon from "@mui/icons-material/Add";
import moment from "moment";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import UploadIcon from "@mui/icons-material/Upload";
import { DANGER, NEUTRAL } from "@/theme/colors";
import { LAZY } from "@/theme/spacings";
import { BOLD } from "@/theme/fonts";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useSelector } from "react-redux";

const Certifications = () => {
  const [open, setOpen] = useState(true);

  const { data = {} } = useSelector((state) => state?.personal);
  console.log(data, "test");

  const projects =
    data.resume && data.resume.projects ? data.resume.projects : [];

  const training =
    data.resume && data.resume.traning ? data.resume.traning : [];

  const certification =
    data.resume && data.resume.certificateFileLocation
      ? data.resume.certificateFileLocation
      : [];

  const openProfile = () => {
    setOpen(!open);
  };

  return (
    <>
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
          <Box onClick={() => openProfile()} sx={{ cursor: "pointer" }}>
            {open ? (
              <ExpandLess sx={{ color: NEUTRAL }} />
            ) : (
              <ExpandMore sx={{ color: NEUTRAL }} />
            )}
          </Box>
        </Stack>
      </Box>

      <Collapse in={open} timeout="auto">
        <Stack sx={{ gap: "30px" }}>
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
                {projects?.map((prj, index) => (
                  <div key={index}>
                    <Stack
                      direction={"row"}
                      sx={{
                        justifyContent: "flex-end",
                        alignItems: "center",
                        gap: "10px",
                      }}
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
                            <CustomTypography>
                              {prj?.portafolioLink}
                            </CustomTypography>
                          </Stack>
                        </Stack>
                      </Grid>
                      <Grid item md={6}>
                        <Stack sx={{ gap: LAZY }}>
                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              Project Name:
                            </CustomTypography>
                            <CustomTypography>
                              {prj?.ProjectName}
                            </CustomTypography>
                          </Stack>
                        </Stack>
                      </Grid>
                      <Grid item md={12}>
                        <Stack sx={{ gap: LAZY }}>
                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              Description:
                            </CustomTypography>
                            <CustomTypography>
                              {prj?.Description}
                            </CustomTypography>
                          </Stack>
                        </Stack>
                      </Grid>
                    </Grid>
                  </div>
                ))}
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
                {training?.map((tra, index) => (
                  <div key={index}>
                    <Stack
                      direction={"row"}
                      sx={{
                        justifyContent: "flex-end",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <CreateIcon sx={{ color: "#00339B" }} fontSize="small" />
                      <DeleteIcon sx={{ color: DANGER }} />
                    </Stack>
                    <Grid container spacing={2}>
                      <Grid item md={6}>
                        <Stack sx={{ gap: LAZY }}>
                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              Title:
                            </CustomTypography>
                            <CustomTypography>{tra?.title}</CustomTypography>
                          </Stack>
                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              From:
                            </CustomTypography>
                            <CustomTypography>{tra?.fromDate}</CustomTypography>
                          </Stack>
                        </Stack>
                      </Grid>
                      <Grid item md={6}>
                        <Stack sx={{ gap: LAZY }}>
                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              Institute:
                            </CustomTypography>
                            <CustomTypography>
                              {tra?.instituete}
                            </CustomTypography>
                          </Stack>

                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              To:
                            </CustomTypography>
                            <CustomTypography>{tra?.toDate}</CustomTypography>
                          </Stack>
                        </Stack>
                      </Grid>
                    </Grid>
                  </div>
                ))}
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
                {certification?.map((cet, index) => (
                  <div key={index}>
                    <Stack
                      direction={"row"}
                      sx={{
                        justifyContent: "flex-end",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <CreateIcon sx={{ color: "#00339B" }} fontSize="small" />
                      <DeleteIcon sx={{ color: DANGER }} />
                    </Stack>
                    <Grid container spacing={2}>
                      <Grid item md={6}>
                        <Stack sx={{ gap: LAZY }}>
                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              Title:
                            </CustomTypography>
                            <CustomTypography>{cet?.title}</CustomTypography>
                          </Stack>
                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              From:
                            </CustomTypography>
                            <CustomTypography>
                              {moment(cet?.issueDate).format("MM/DD/YYYY")}
                              {/* {cet?.issueDate} */}
                            </CustomTypography>
                          </Stack>
                        </Stack>
                      </Grid>
                      <Grid item md={6}>
                        <Stack sx={{ gap: LAZY }}>
                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              Organization:
                            </CustomTypography>
                            <CustomTypography>
                              {cet?.organization}
                            </CustomTypography>
                          </Stack>

                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <CustomTypography sx={{ fontWeight: "700" }}>
                              To:
                            </CustomTypography>
                            <CustomTypography>
                              {moment(cet?.expireDate).format("MM/DD/YYYY")}
                            </CustomTypography>
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
                          <CustomTypography>
                            {cet?.certificateName}
                          </CustomTypography>
                          <Stack direction={"row"} sx={{ gap: "10px" }}>
                            <UploadIcon sx={{ color: "#00339B" }} />
                            <DeleteIcon sx={{ color: DANGER }} />
                          </Stack>
                        </Stack>
                      </Grid>
                    </Grid>
                  </div>
                ))}
              </Stack>
            </CardContent>
          </StyledCard>
        </Stack>
      </Collapse>
    </>
  );
};

Certifications.defaultProps = {
  projects: [],
};

export default Certifications;
