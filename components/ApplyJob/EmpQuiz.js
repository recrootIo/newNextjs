import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import {
  Button,
  Container,
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import Box from "@mui/material/Box";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import ApplyJobStepper from "../ApplyJobStepper/ApplyJobStepper";
import { BOLD } from "@/theme/fonts";
import styles from "./applyJobs.module.css";

const EmpQuiz = ({ questions, jobTitle, setFinal, setCurrentScreen }) => {
  const handleRadio = (e, id) => {
    const newMemChange = questions.map((i) => {
      if (id === i.id) {
        i = { ...i, [e.target.name]: e.target.value };
        i.id = id;
      }
      return i;
    });
    setFinal((state) => ({ ...state, question: newMemChange }));
  };

  const checkAnswers = () => {
    for (let answerObj of questions) {
      let answer = answerObj?.answer?.toLowerCase(); // Convert the answer to lowercase for case-insensitive comparison
      if (answer !== "yes" && answer !== "no") {
        return false; // Return false if the answer is neither "yes" nor "no"
      }
    }
    return true; // Return true if all answers are either "yes" or "no"
  };

  console.log(checkAnswers(), "checkAnswers");
  return (
    <div
      style={{
        backgroundImage: `url("/selectResumeBg.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        minHeight: "1000px",
        overflow: "auto",
      }}
    >
      <Box
        sx={{
          height: "100px",
          backgroundImage: 'url("/Group 86.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
        }}
      ></Box>

      <Container sx={{ width: { md: "50%", sm: "100%", xs: "100%" } }}>
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
            mt: "20px",
          }}
        >
          <CustomTypography sx={{ fontFamily: BOLD }} variant="h4">
            {jobTitle}
          </CustomTypography>
          <ApplyJobStepper activeStep={1} />
        </Stack>

        <Grid container sx={{ gap: "10px" }}>
          <Grid item xs={12} md={12} sx={{ margin: 2 }}>
            <Stack direction={"row"} sx={{ justifyContent: "center" }}>
              <CustomTypography
                color="initial"
                sx={{
                  fontWeight: 700,
                  fontSize: "18px",
                }}
              >
                Questions from the Employer
              </CustomTypography>
            </Stack>
          </Grid>

          <Grid item xs={12} md={12} sx={{ mt: "30px", padding: "20px" }}>
            {questions.map((q) => (
              <Stack
                key={q.id}
                sx={{
                  mt: "30px",
                  gap: "20px",
                }}
              >
                <CustomTypography
                  sx={{
                    fontSize: "17px",
                    lineHeight: "18px",
                    textTransform: "capitalize",
                    fontWeight: "500",
                  }}
                >
                  {q.questions}
                </CustomTypography>

                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue={q.answer}
                  name="answer"
                  onChange={(e) => {
                    handleRadio(e, q.id);
                  }}
                  row
                >
                  <FormControlLabel
                    value="yes"
                    sx={{ fontSize: "10px" }}
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="no"
                    sx={{ fontSize: "10px" }}
                    control={<Radio />}
                    label="No"
                  />
                </RadioGroup>
                <Divider />
              </Stack>
            ))}
          </Grid>

          <Grid item xs={12} md={12} sx={{ margin: 2 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                m: "65px 0 45px 0",
                gap: "15px",
                width: { md: "100%" },
              }}
            >
              <Button
                variant="outlined"
                onClick={() => {
                  setCurrentScreen("upload");
                }}
                sx={{
                  width: "100%",
                  height: "50px",
                  borderRadius: "8px",
                  color: "#4F9AFF",
                }}
              >
                Back
              </Button>

              <button
                variant="outlined"
                onClick={() => {
                  setCurrentScreen("review");
                }}
                disabled={!checkAnswers()}
                className={
                  !checkAnswers()
                    ? styles.nextButtonDisabled
                    : styles.nextButton
                }
              >
                NEXT
              </button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default EmpQuiz;
