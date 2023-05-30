import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import {
  Container,
  // Card,
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
  // Stack,
} from "@mui/material";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { setJobID } from "@/redux/slices/personal";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";

const EmpQuiz = () => {
  let dispatch = useDispatch();

  const quiz = useSelector((state) => state.personal.ids);

  const [answer, setAnswer] = useState(quiz.question);

  const handleRadio = (e, id) => {
    const newMemChange = answer.map((i) => {
      if (id === i.id) {
        i = { ...i, [e.target.name]: e.target.value };
        i.id = id;
      }
      return i;
    });

    setAnswer(newMemChange);
    dispatch(
      setJobID({
        companyId: quiz.companyId,
        jobId: quiz.jobId,
        name: quiz.name,
        question: newMemChange,
        show: quiz.show,
      })
    );
  };

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={12} sx={{ margin: 2 }}>
          <CustomTypography
            color="initial"
            sx={{
              fontWeight: 700,
              fontSize: "24px",
            }}
          >
            Questions from the Employer
          </CustomTypography>
        </Grid>
        <Grid item xs={12} md={12} sx={{ mt: "30px", padding: "20px" }}>
          {quiz.show === "true" || quiz.show === undefined ? (
            quiz?.question?.map((qu, ind) => (
              <Box
                key={qu.id}
                sx={{
                  mt: "30px",
                }}
              >
                {/* <CustomTypography variant='h5' sx={{fontWeight: "800", fontSize: "20px",mb:'10px',mr:'20px', lineHeight: "18px"}}>Question{ind + 1}</CustomTypography> */}
                <CustomTypography
                  sx={{
                    fontWeight: "700",
                    fontSize: "18px",
                    lineHeight: "18px",
                    textTransform: "capitalize",
                  }}
                >
                  {qu.questions}
                </CustomTypography>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue={qu.answer}
                  name="answer"
                  onChange={(e) => {
                    handleRadio(e, qu.id);
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
              </Box>
            ))
          ) : (
            <Box sx={{ ml: { sm: "150px", xs: "30px" }, mt: "10px" }}>
              <CustomTypography
                variant="h5"
                sx={{
                  fontWeight: "700",
                  fontSize: "18px",
                  lineHeight: "18px",
                  textTransform: "capitalize",
                }}
              >
                * Employer Was Not Provided Any Question Go To Next Page ...
              </CustomTypography>
            </Box>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default EmpQuiz;
