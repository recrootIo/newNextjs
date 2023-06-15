import {
  getPercentage,
  retrievePersonal,
  setSection,
} from "@/redux/slices/personal";
import { NEUTRAL } from "@/theme/colors";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { Box, Button, Container, Grid, Stack, styled } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const StyledButton = styled("button")({
  minHeight: "43px",
  borderRadius: "10px",
  backgroundColor: "#1976d2",
  color: "white",
  width: "135px",
  marginTop: "30px",
});

const ProfileCompletion = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const percent = useSelector((data) => data.personal.percentage);
  const users = useSelector((state) => state.personal?.data?.resume);
  const personal = useSelector((state) => state.personal?.data);
  const display = useSelector((state) => state.personal?.display);

  const skill =
    percent?.skills?.length <= users?.skills?.length
      ? percent?.skills?.percent
      : percent?.skills?.length / 2 === users?.skills?.length
      ? percent?.skills?.percent / 2
      : 0;

  const Experience =
    percent?.workExperince?.length <= users?.workExperience?.length
      ? percent?.workExperince?.percent
      : 0;

  const Education =
    percent?.education?.length <= users?.education?.length
      ? percent?.education?.percent
      : percent?.education?.length / 2 === users?.education?.length
      ? percent?.education?.percent / 2
      : 0;

  console.log(percent?.education?.length, "Education");

  const Certificate =
    percent?.certificate?.length <= users?.certificateFileLocation?.length
      ? percent?.certificate?.percent
      : percent?.certificate?.length / 2 ===
        users?.certificateFileLocation?.length
      ? percent?.certificate?.percent / 2
      : 0;

  const persan =
    (personal?.about !== null ? 1 : 0) +
    (users?.languages?.length > 0 ? 1 : 0) +
    (users?.currentOffer !== undefined ? 1 : 0) +
    (personal?.jobTitle !== undefined ? 1 : 0) +
    (personal?.mobile !== undefined && personal?.mobile !== null ? 1 : 0);

  const persanRank =
    persan === percent?.personalInfo?.personal?.length
      ? percent?.personalInfo?.personal?.percent
      : 0;
  const countrs =
    (users?.location?.country !== undefined ? 1 : 0) +
    (users?.location?.state !== undefined ? 1 : 0) +
    (users?.location?.city !== undefined ? 1 : 0) +
    (users?.totalWorkExperience !== undefined ? 1 : 0);
  const countries =
    countrs === percent?.personalInfo?.countries?.length
      ? percent?.personalInfo?.countries?.percent
      : 0;
  const essen =
    (users?.notice !== undefined ? 1 : 0) +
    (users?.expectedSalary !== undefined ? 1 : 0) +
    (users?.currentSalary !== undefined ? 1 : 0) +
    (users?.salaryCurrency !== undefined ? 1 : 0) +
    (users?.workPrefence !== undefined ? 1 : 0);
  const essential =
    essen === percent?.personalInfo?.essent?.length
      ? percent?.personalInfo?.essent?.percent
      : 0;
  const finalPercent =
    skill +
    Experience +
    Education +
    Certificate +
    // Social +
    persanRank +
    countries +
    essential;

  const getDetailCards = () => {
    let newDetailCard = [];
    if (personal?.resume?.resumeFileLocation?.length < 1) {
      newDetailCard.push({
        title: "Add Resume",
        buttonText: "Add Resume",
        id: "resume_section",
        description: "Add Resume to complete your profile",
      });
    } else {
      if (Experience < 10) {
        newDetailCard.push({
          title: "Add Experiences",
          buttonText: "Add Experiences",
          id: "experience_details_section",
          description: "Your profile must include at least one work experience",
        });
      }
      if (persanRank < 5) {
        newDetailCard.push({
          title: "Add Personal Details",
          buttonText: "Add Details More",
          id: "personal_details_section",
          description: "Add more Personal Details to complete your profile",
        });
      }

      if (Education < 16) {
        newDetailCard.push({
          title: "Add Education",
          buttonText: "Add Education More",
          id: "education_details_section",
          description: "Your profile must include at least one education",
        });
      }

      if (Certificate < 10) {
        newDetailCard.push({
          title: "Add Certificates",
          buttonText: "Add Certificates",
          id: "certificate_details_section",
          description: " Add Certificates to complete your profile",
        });
      }

      if (essential + countries < 10) {
        newDetailCard.push({
          title: "Add Essential Details",
          buttonText: "Add Essential Details",
          id: 1,
          description: "Add more Essential Details to complete your profile",
        });
      }

      if (skill < 10) {
        newDetailCard.push({
          title: "Add Skills ",
          buttonText: "Add Skills",
          id: "skills_details_section",
          description: "Your profile must have a minimum of two skills",
        });
      }
    }

    return newDetailCard;
  };

  const setNewSection = (section) => {
    dispatch(setSection(section));
    router.push("Candidate/Dashboard");
  };

  useEffect(() => {
    dispatch(getPercentage());
    dispatch(retrievePersonal());
  }, [dispatch]);

  if (personal?.profilePercentage < 70)
    return (
      <Container
        sx={{
          backgroundColor: "#E9F2FD",
          borderRadius: "10px",
          boxShadow: "-10px 12px 32px 0px rgba(0,0,0,0.31)",
          mt: "10px",
          pt: "20px",
        }}
      >
        <Stack sx={{ gap: "20px", pb: "20px" }}>
          <CustomTypography sx={{ fontWeight: "900", fontSize: "33px" }}>
            Profile Completion
          </CustomTypography>
          <CustomTypography>
            {" "}
            Enhance your profile by adding more information to aim for a minimum
            of 70%
          </CustomTypography>

          <Stack
            sx={{
              gap: "20px",
              mt: "10px",
              p: "20px",
              flexDirection: { md: "row", sm: "column", xs: "column" },
              justifyContent: { md: "flex-start", sm: "center", xs: "center" },
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundImage: 'url("/profileprecentageborder.png")',
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                height: "200px",
                width: "220px",
              }}
            >
              <CustomTypography
                variant="h6"
                sx={{
                  fontFamily: "Inter-bold",
                  fontSize: "2rem",
                }}
              >
                {personal?.profilePercentage}%
              </CustomTypography>
            </Box>

            {getDetailCards()
              .slice(0, 2)
              .map((d, index) => (
                <Box
                  key={index}
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "10px",
                    p: "10px",
                    width: { md: "50%", xs: "100%", sm: "100%" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Stack
                    sx={{
                      gap: "10px",
                      p: "10px",
                      justifyContent: "space-between",
                    }}
                  >
                    <CustomTypography
                      sx={{ fontWeight: "700", fontSize: "20px" }}
                    >
                      {d.title}
                    </CustomTypography>
                    <CustomTypography>{d.description}</CustomTypography>
                    <StyledButton onClick={() => setNewSection(d.id)}>
                      NEXT
                    </StyledButton>
                  </Stack>
                </Box>
              ))}
          </Stack>
        </Stack>
      </Container>
    );
};

export default ProfileCompletion;
