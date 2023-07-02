import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { CardContent, Grid, IconButton, Stack } from "@mui/material";
import React from "react";
import { StyledCard } from "../../ProfileStyles";
import CreateIcon from "@mui/icons-material/Create";
import { LAZY, MID } from "@/theme/spacings";
import { BOLD } from "@/theme/fonts";
import { useDispatch } from "react-redux";
import { updateCurrentScreen } from "@/redux/slices/candidate";
import { isEmpty } from "lodash";

const PersonalDetail = ({ ...data }) => {
  const { email, firstName, jobTitle, lastName, mobile, resume } = data;
  const location = resume?.location;
  const locationDetails = `${location?.country} , ${location?.state}  , ${location?.city}`;
  const fullName = `${firstName} ${lastName}`;

  const dispatch = useDispatch();
  const gotToEditPersonalDetails = () => {
    dispatch(updateCurrentScreen("personalDetails"));
  };

  console.log(resume?.workPrefence, "resume?.workPrefence");

  return (
    <StyledCard variant="outlined" id="personal_details_section">
      <Stack
        direction={"row"}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          padding: { md: "10px 30px", xs: "10px", sm: "10px" },
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
        </Stack>
        <IconButton onClick={() => gotToEditPersonalDetails()}>
          <CreateIcon
            sx={{ color: "#00339B" }}
            className="iconPointers"
            fontSize="small"
          />
        </IconButton>
      </Stack>
      <CardContent>
        <Grid
          container
          sx={{ padding: { md: "10px 15px", sm: "10px" } }}
          spacing={2}
        >
          <Grid item md={6} xs={12} sx={{ pt: "10px !important" }}>
            <Stack className="persFlex" sx={{ gap: LAZY }}>
              <Stack direction={"row"} sx={{ gap: MID }}>
                <CustomTypography sx={{ fontWeight: "900" }}>
                  Name:
                </CustomTypography>
                <CustomTypography>{fullName}</CustomTypography>
              </Stack>

              <Stack direction={"row"} sx={{ gap: MID }}>
                <CustomTypography sx={{ fontWeight: "900" }}>
                  Email:
                </CustomTypography>
                <CustomTypography>{email}</CustomTypography>
              </Stack>

              <Stack direction={"row"} sx={{ gap: MID }}>
                <CustomTypography sx={{ fontWeight: "900" }}>
                  Contact Details:
                </CustomTypography>
                <CustomTypography>{mobile}</CustomTypography>
              </Stack>

              <Stack direction={"row"} sx={{ gap: MID }}>
                <CustomTypography sx={{ fontWeight: "900" }}>
                  Experience:
                </CustomTypography>
                <CustomTypography>
                  {resume?.totalWorkExperience}
                </CustomTypography>
              </Stack>

              <Stack direction={"row"} sx={{ gap: MID }}>
                <CustomTypography sx={{ fontWeight: "900" }}>
                  Offer Letter:
                </CustomTypography>
                <CustomTypography>{resume?.currentOffer}</CustomTypography>
              </Stack>

              <Stack direction={"row"} sx={{ gap: MID }}>
                <CustomTypography sx={{ fontWeight: "900" }}>
                  Notice Period:
                </CustomTypography>
                <CustomTypography>{resume?.notice}</CustomTypography>
              </Stack>

              <Stack direction={"row"} sx={{ gap: MID, flexWrap: "wrap" }}>
                <CustomTypography sx={{ fontWeight: "900" }}>
                  Youtube :
                </CustomTypography>
                <Stack direction={"row"} sx={{ gap: "5px", flexWrap: "wrap" }}>
                  {resume?.socialMediaLink?.utube}
                </Stack>
              </Stack>

              <Stack direction={"row"} sx={{ gap: MID, flexWrap: "wrap" }}>
                <CustomTypography sx={{ fontWeight: "900" }}>
                  Twitter :
                </CustomTypography>
                <Stack direction={"row"} sx={{ gap: "5px", flexWrap: "wrap" }}>
                  {resume?.socialMediaLink?.twitter}
                </Stack>
              </Stack>
            </Stack>
          </Grid>

          <Grid item md={6} xs={12} sx={{ pt: "10px !important" }}>
            <Stack sx={{ gap: LAZY }}>
              <Stack direction={"row"} sx={{ gap: MID }}>
                <CustomTypography sx={{ fontWeight: "900" }}>
                  Job Title:
                </CustomTypography>
                <CustomTypography>{jobTitle}</CustomTypography>
              </Stack>

              <Stack direction={"row"} sx={{ gap: MID }}>
                <CustomTypography sx={{ fontWeight: "900" }}>
                  Location:
                </CustomTypography>
                <CustomTypography>{locationDetails}</CustomTypography>
              </Stack>

              <Stack direction={"row"} sx={{ gap: MID }}>
                <CustomTypography sx={{ fontWeight: "900" }}>
                  Language:
                </CustomTypography>
                <CustomTypography>
                  {resume?.languages.join(", ")}
                </CustomTypography>
              </Stack>

              <Stack direction={"row"} sx={{ gap: MID }}>
                <CustomTypography sx={{ fontWeight: "900" }}>
                  Current Salary:
                </CustomTypography>
                <CustomTypography>
                  {resume?.currentSalary?.salary}{" "}
                  {resume?.currentSalary?.denomination}
                </CustomTypography>
              </Stack>
              <Stack direction={"row"} sx={{ gap: MID }}>
                <CustomTypography sx={{ fontWeight: "900" }}>
                  Expected Salary:
                </CustomTypography>
                <CustomTypography>
                  {resume?.expectedSalary?.salary}{" "}
                  {resume?.expectedSalary?.denomination}
                </CustomTypography>
              </Stack>

              {Array.isArray(resume?.workPrefence) ? (
                <Stack direction={"row"} sx={{ gap: MID }}>
                  <CustomTypography sx={{ fontWeight: "900" }}>
                    Work Preference:
                  </CustomTypography>
                  <Stack
                    direction={"row"}
                    sx={{ gap: "5px", flexWrap: "wrap" }}
                  >
                    {resume?.workPrefence.map((pre, index) => (
                      <CustomTypography key={index}>{pre}</CustomTypography>
                    ))}
                  </Stack>
                </Stack>
              ) : (
                <Stack direction={"row"} sx={{ gap: MID }}>
                  <CustomTypography sx={{ fontWeight: "900" }}>
                    Work Preference:
                  </CustomTypography>
                  <Stack
                    direction={"row"}
                    sx={{ gap: "5px", flexWrap: "wrap" }}
                  >
                    <CustomTypography>{resume?.workPrefence}</CustomTypography>
                  </Stack>
                </Stack>
              )}

              <Stack direction={"row"} sx={{ gap: MID, flexWrap: "wrap" }}>
                <CustomTypography sx={{ fontWeight: "900" }}>
                  Facebook :
                </CustomTypography>
                <Stack direction={"row"} sx={{ gap: "5px", flexWrap: "wrap" }}>
                  {resume?.socialMediaLink?.fb}
                </Stack>
              </Stack>

              <Stack direction={"row"} sx={{ gap: MID, flexWrap: "wrap" }}>
                <CustomTypography sx={{ fontWeight: "900" }}>
                  LinkedIn :
                </CustomTypography>
                <Stack direction={"row"} sx={{ gap: "5px", flexWrap: "wrap" }}>
                  {resume?.socialMediaLink?.linkin}
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </StyledCard>
  );
};

export default React.memo(PersonalDetail);
