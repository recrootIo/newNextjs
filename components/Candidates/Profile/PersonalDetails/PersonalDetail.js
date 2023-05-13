import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { CardContent, Grid, Stack } from "@mui/material";
import React from "react";
import { StyledCard } from "../../ProfileStyles";
import UploadIcon from "@mui/icons-material/Upload";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import AddIcon from "@mui/icons-material/Add";
import { LAZY, MID } from "@/theme/spacings";
import { BOLD } from "@/theme/fonts";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentScreen } from "@/redux/slices/candidate";

const PersonalDetail = ({ ...data }) => {
  const { email, firstName, jobTitle, lastName, mobile, resume } = data;
  const location = resume?.location;
  const locationDetails = `${location?.country} , ${location?.state}  , ${location?.city}`;
  const fullName = `${firstName} ${lastName}`;

  const dispatch = useDispatch();
  const gotToEditPersonalDetails = () => {
    dispatch(updateCurrentScreen("resume"));
  };

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
          <CreateIcon
            sx={{ color: "#00339B" }}
            className="iconPointers"
            fontSize="small"
            onClick={() => gotToEditPersonalDetails()}
          />
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
            </Stack>
          </Grid>
          <Grid item md={6} xs={12}>
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
                  {resume?.currentSalary?.salary}
                </CustomTypography>
              </Stack>

              <Stack direction={"row"} sx={{ gap: MID }}>
                <CustomTypography sx={{ fontWeight: "900" }}>
                  Region:
                </CustomTypography>
                <CustomTypography>Name</CustomTypography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </StyledCard>
  );
};

export default React.memo(PersonalDetail);
