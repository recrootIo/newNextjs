import { DANGER, NEUTRAL } from "@/theme/colors";
import { BOLD } from "@/theme/fonts";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import {
  Box,
  CardContent,
  Collapse,
  Grid,
  LinearProgress,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import { StyledCard } from "../ProfileStyles";
import {
  ExpandLess,
  ExpandMore,
  KeyboardArrowDownIcon,
} from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import UploadIcon from "@mui/icons-material/Upload";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import { LAZY, MID } from "@/theme/spacings";
import { useSelector } from "react-redux";
import PersonalDetail from "./PersonalDetails/PersonalDetail";

const Profile = () => {
  const [open, setOpen] = useState(true);
  const { data = {} } = useSelector((state) => state.personal);

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
            My Profile
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
              <AddIcon className="iconPointers" />
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
                  sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  <UploadIcon
                    sx={{ color: "#00339B" }}
                    className="iconPointers"
                  />
                  <DeleteIcon sx={{ color: DANGER }} className="iconPointers" />
                </Stack>
              </Stack>
              <Stack
                direction={"row"}
                sx={{ justifyContent: "flex-end", padding: "10px 15px" }}
              >
                <button
                  style={{
                    minWidth: "195px",
                    minHeight: "40px",
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
          <PersonalDetail {...data} />

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
                Education
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
                  sx={{
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: "10px",
                  }}
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
                  sx={{
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: "10px",
                  }}
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
                          gap: "10px",
                        }}
                      >
                        <CreateIcon
                          sx={{ color: "#00339B" }}
                          fontSize="small"
                          className="iconPointers"
                        />
                        <DeleteIcon
                          sx={{ color: DANGER }}
                          className="iconPointers"
                        />
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
                          gap: "10px",
                        }}
                      >
                        <CreateIcon
                          sx={{ color: "#00339B" }}
                          fontSize="small"
                          className="iconPointers"
                        />
                        <DeleteIcon
                          sx={{ color: DANGER }}
                          className="iconPointers"
                        />
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
                          gap: "10px",
                        }}
                      >
                        <CreateIcon
                          sx={{ color: "#00339B" }}
                          fontSize="small"
                          className="iconPointers"
                        />
                        <DeleteIcon
                          sx={{ color: DANGER }}
                          className="iconPointers"
                        />
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
                          gap: "10px",
                        }}
                      >
                        <CreateIcon
                          sx={{ color: "#00339B" }}
                          fontSize="small"
                          className="iconPointers"
                        />
                        <DeleteIcon
                          sx={{ color: DANGER }}
                          className="iconPointers"
                        />
                      </Stack>
                    </td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </StyledCard>
        </Stack>
      </Collapse>
    </>
  );
};

export default Profile;
