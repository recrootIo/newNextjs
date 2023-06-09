import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import UploadResume from "./UploadResume";
import EmpQuiz from "./EmpQuiz";
import ReviewAppication from "./ReviewAppication";
import { Box } from "@mui/system";
import Submitted from "./Submitted";
import Container from "@mui/material/Container";
import { useSelector, useDispatch } from "react-redux";
import { applyJobs, retrievePersonal } from "@/redux/slices/personal";
import { useRouter } from "next/router";
import { openAlert } from "@/redux/slices/alert";
import { ERROR, SUCCESS } from "@/utils/constants";
import { Stack } from "@mui/material";

const ProfileCard = ({ ...props }) => {
  const {
    _id = "",
    question = [],
    companyId = "",
    jobTitle = "",
    show = "",
  } = props?.companyDetails;
  const details = useSelector((state) => state?.personal?.data);
  const CoverSin = useSelector((state) => state?.personal?.cover);
  const resumeSin = useSelector((state) => state?.personal?.resume);

  const dispatch = useDispatch();
  const router = useRouter();

  const [currentScreen, setCurrentScreen] = useState("upload");

  const [final, setFinal] = React.useState({
    resumeId: resumeSin?._id,
    coverId: CoverSin && CoverSin?._id,
    candidateId: details && details?._id,
    jobId: _id,
    question: question,
    companyId: companyId,
    //  salary: salary && salary,
  });

  useEffect(() => {
    dispatch(retrievePersonal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    setFinal({
      resumeId: resumeSin?._id,
      coverId: CoverSin && CoverSin?._id,
      candidateId: details && details?._id,
      jobId: _id,
      question: question,
      companyId: companyId,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submit = () => {
    dispatch(applyJobs(final))
      .unwrap()
      .then(() => {
        dispatch(
          openAlert({
            type: SUCCESS,
            message: "Application has been sent",
          })
        );

        router.push("/applyConfirmation");
      })
      .catch((error) => {
        openAlert({
          type: ERROR,
          message: error?.response?.data?.message || "Something went wrong",
        });
      });
  };

  const hasQuestions = show === "true";

  const getScreens = () => {
    if (currentScreen === "upload") {
      return (
        <UploadResume
          setApplication={setFinal}
          setCurrentScreen={setCurrentScreen}
          jobTitle={jobTitle}
          hasQuestions={hasQuestions}
          currentScreen={currentScreen}
        />
      );
    }

    if (currentScreen === "review") {
      return (
        <ReviewAppication
          setApplication={setFinal}
          setCurrentScreen={setCurrentScreen}
          submit={submit}
          jobTitle={jobTitle}
          hasQuestions={hasQuestions}
          currentScreen={currentScreen}
        />
      );
    }

    return (
      <EmpQuiz
        setCurrentScreen={setCurrentScreen}
        submit={submit}
        questions={final.question}
        jobTitle={jobTitle}
        setFinal={setFinal}
        currentScreen={currentScreen}
      />
    );
  };

  return (
    <Stack
      spacing={5}
      justify="center"
      alignItems="center"
      sx={{ width: "100%" }}
    >
      {getScreens()}
    </Stack>
  );
};

export default ProfileCard;
