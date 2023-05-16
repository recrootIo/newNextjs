import { BOLD } from "@/theme/fonts";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { CardContent, Grid, IconButton, Stack } from "@mui/material";
import React from "react";
import { StyledCard } from "../../ProfileStyles";
import AddIcon from "@mui/icons-material/Add";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { DANGER } from "@/theme/colors";
import { LAZY } from "@/theme/spacings";
import { useDispatch } from "react-redux";
import { updateCurrentScreen } from "@/redux/slices/candidate";
import { retrieveGetSinEduca } from "@/redux/slices/personal";

const Education = ({ ...resume }) => {
  const dispatch = useDispatch();

  const gotToEducation = () => {
    dispatch(updateCurrentScreen("education"));
  };

  const handleGetSingle = (id) => {
    dispatch(retrieveGetSinEduca(id));
    gotToEducation();
  };

  return (
    <StyledCard variant="outlined">
      <Stack
        direction={"row"}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          padding: { md: "10px 30px", xs: "10px", sm: "10px" },
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
        <IconButton onClick={() => gotToEducation()}>
          <AddIcon sx={{ cursor: "pointer" }} />
        </IconButton>
      </Stack>
      <CardContent
        sx={{ padding: { md: "30px 30px", xs: "16px 10px", sm: "16px 10px" } }}
      >
        <Stack sx={{ justifyContent: "space-between", gap: "20px" }}>
          {resume?.education?.map((edi, index) => (
            <Stack
              key={index}
              sx={{
                backgroundColor: "#F6FCFF",
                borderRadius: "10px",
                padding: { md: "20px 30px", sm: "10px", xs: "10px" },
                border: "1px solid #D3EAFF",
              }}
            >
              <Stack
                direction={"row"}
                sx={{
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <IconButton onClick={() => handleGetSingle(edi?._id)}>
                  <CreateIcon
                    sx={{ color: "#00339B", cursor: "pointer" }}
                    fontSize="small"
                  />
                </IconButton>
                <IconButton>
                  <DeleteIcon sx={{ color: DANGER }} />
                </IconButton>
              </Stack>
              <Grid container spacing={2}>
                <Grid item md={6}>
                  <Stack sx={{ gap: LAZY }}>
                    <Stack direction={"row"} sx={{ gap: "10px" }}>
                      <CustomTypography sx={{ fontWeight: "700" }}>
                        Degree:
                      </CustomTypography>
                      <CustomTypography>{edi?.degreeName}</CustomTypography>
                    </Stack>

                    <Stack direction={"row"} sx={{ gap: "10px" }}>
                      <CustomTypography sx={{ fontWeight: "700" }}>
                        Institute:
                      </CustomTypography>
                      <CustomTypography>{edi?.collegeName}</CustomTypography>
                    </Stack>

                    <Stack direction={"row"} sx={{ gap: "10px" }}>
                      <CustomTypography sx={{ fontWeight: "700" }}>
                        From:
                      </CustomTypography>
                      <CustomTypography>{edi?.fromDate}</CustomTypography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item md={6}>
                  <Stack sx={{ gap: LAZY }}>
                    <Stack direction={"row"} sx={{ gap: "10px" }}>
                      <CustomTypography sx={{ fontWeight: "700" }}>
                        Specialization:
                      </CustomTypography>
                      <CustomTypography>{edi?.graduate}</CustomTypography>
                    </Stack>

                    <Stack direction={"row"} sx={{ gap: "10px" }}>
                      <CustomTypography sx={{ fontWeight: "700" }}>
                        Location:
                      </CustomTypography>
                      <CustomTypography>
                        {edi?.country} , {edi?.state} , {edi?.city}
                      </CustomTypography>
                    </Stack>

                    <Stack direction={"row"} sx={{ gap: "10px" }}>
                      <CustomTypography sx={{ fontWeight: "700" }}>
                        To:
                      </CustomTypography>
                      <CustomTypography>{edi?.toDate}</CustomTypography>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
          ))}
        </Stack>
      </CardContent>
    </StyledCard>
  );
};

Education.defaultProps = {
  education: [],
};

export default React.memo(Education);
