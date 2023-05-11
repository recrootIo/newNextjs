import { BOLD } from "@/theme/fonts";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { CardContent, Grid, Stack } from "@mui/material";
import React from "react";
import { StyledCard } from "../../ProfileStyles";
import AddIcon from "@mui/icons-material/Add";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { DANGER } from "@/theme/colors";
import { LAZY } from "@/theme/spacings";

const Education = ({ ...resume }) => {
  return (
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
        <Stack sx={{ justifyContent: "space-between", gap: "20px" }}>
          {resume?.education?.map((edi, index) => (
            <div key={index}>
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
            </div>
          ))}
        </Stack>
      </CardContent>
    </StyledCard>
  );
};

Education.defaultProps = {
  education: [],
};

export default Education;
