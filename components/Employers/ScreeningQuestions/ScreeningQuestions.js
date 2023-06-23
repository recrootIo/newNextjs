import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { Add, Close } from "@mui/icons-material";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { queShow, quesSet } from "@/redux/slices/job";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";

uuidv4();

function ScreeningQuestions() {
  const dispatch = useDispatch();
  const quiz = useSelector((state) => state.jobs && state.jobs.question);
  const showq = useSelector((state) => state.jobs && state.jobs.queshow);
  const [question, setQuestion] = useState(quiz);
  const handleQueshow = (e) => {
    dispatch(queShow(e.target.value));
  };

  useEffect(() => {
    setQuestion(quiz);
  }, [quiz]);

  const handleQuestion = (id, event) => {
    const newinputPersonalDetailsCountry = question.map((i) => {
      if (id === i.id) {
        i = { ...i, [event.target.name]: event.target.value, answer: "" };
        i.id = id;
      }
      return i;
    });
    setQuestion(newinputPersonalDetailsCountry);
    dispatch(
      quesSet(
        question.map((i) => {
          if (id === i.id) {
            i = { ...i, [event.target.name]: event.target.value, answer: "" };
            i.id = id;
          }
          return i;
        })
      )
    );
  };

  const handleAdd = () => {
    setQuestion([
      ...question,
      { id: uuidv4(), questions: "", answer: "", preferedAns: "" },
    ]);
    dispatch(
      quesSet([
        ...question,
        { id: uuidv4(), questions: "", answer: "", preferedAns: "" },
      ])
    );
  };

  function deleteQuestion(id) {
    let updatedQuestions = [...quiz].filter((ques) => ques.id !== id);
    setQuestion(updatedQuestions);
    dispatch(quesSet([...quiz].filter((ques) => ques.id !== id)));
  }

  return (
    <Box>
      <Typography
        variant="p"
        sx={{
          fontWeight: "700",
          fontSize: "16px",
          lineHeight: "30px",
          mb: "8px",
          mt: "20px",
          color: "#4a4a4a",
        }}
      >
        Screening Questions
      </Typography>
      <Box>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          value={showq}
          name="preferedAns"
          onChange={(e) => {
            handleQueshow(e);
          }}
          sx={{ gap: { xs: "20px", md: "50px" } }}
        >
          <FormControlLabel
            value="true"
            control={<Radio />}
            label="Post Job With Screening Questions"
          />
          <FormControlLabel
            value="false"
            control={<Radio />}
            label="Post Job Without Screening Questions"
          />
        </RadioGroup>
      </Box>
      {showq === undefined || showq === "true"
        ? question &&
          question.map((quest, ind) => (
            <Box key={quest.id} sx={{ margin: "20px 0 " }}>
              <Box>
                <CustomTypography sx={{ fontSize: "18px", color: "#034275" }}>
                  Question
                  {ind + 1}
                </CustomTypography>
              </Box>

              <Box
                sx={{
                  mt: "10px",
                  display: "flex",
                  // justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TextareaAutosize
                  minRows={4}
                  placeholder="Enter Question"
                  onChange={(e) => {
                    handleQuestion(quest.id, e);
                  }}
                  value={quest.questions}
                  name="questions"
                  className="textareaQuestion"
                  style={{ width: "80%", flexGrow: 1 }}
                />

                {question.length > 1 ? (
                  <IconButton
                    edge="end"
                    sx={{ mr: "1px", color: "#3771C8", width: "10%" }}
                    onClick={() => {
                      deleteQuestion(quest.id);
                    }}
                  >
                    <Close />
                  </IconButton>
                ) : (
                  ""
                )}

                <IconButton
                  edge="end"
                  sx={{ color: "#3771C8", width: "10%" }}
                  onClick={handleAdd}
                >
                  <Add sx={{ color: "#3771C8" }} />
                </IconButton>
              </Box>

              <Box sx={{ mt: "5px" }}>
                <CustomTypography
                  variant="p"
                  sx={{ fontSize: "18px", color: "#034275" }}
                >
                  Preferred Answer
                </CustomTypography>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue={quest.preferedAns}
                  name="preferedAns"
                  onChange={(e) => {
                    handleQuestion(quest.id, e);
                  }}
                  sx={{ flexDirection: "row", gap: "50px" }}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </Box>
            </Box>
          ))
        : ""}
    </Box>
  );
}

ScreeningQuestions.defaultProps = {
  queshow: [],
};

export default ScreeningQuestions;
