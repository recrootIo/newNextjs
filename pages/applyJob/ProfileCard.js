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
  } = props?.companyDetails;
  const details = useSelector((state) => state.personal.data);
  const CoverSin = useSelector((state) => state.personal.cover);
  const resumeSin = useSelector((state) => state.personal.resume);

  const dispatch = useDispatch();
  const router = useRouter();

  const [currentScreen, setCurrentScreen] = useState("upload");

  const [final, setFinal] = React.useState({
    resumeId: resumeSin._id,
    coverId: CoverSin && CoverSin._id,
    candidateId: details && details._id,
    jobId: _id,
    question: question,
    companyId: companyId,
    //  salary: salary && salary,
  });

  useEffect(() => {
    dispatch(retrievePersonal());
  }, [dispatch]);

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
          message: error.response.data.message || "Something went wrong",
        });
      });
  };

  return (
    <Stack
      spacing={5}
      justify="center"
      alignItems="center"
      sx={{ width: "100%" }}
    >
      {currentScreen === "upload" ? (
        <UploadResume
          setApplication={setFinal}
          setCurrentScreen={setCurrentScreen}
          jobTitle={jobTitle}
        />
      ) : (
        <ReviewAppication
          setApplication={setFinal}
          setCurrentScreen={setCurrentScreen}
          submit={submit}
          jobTitle={jobTitle}
        />
      )}
    </Stack>
  );
};

export default ProfileCard;
