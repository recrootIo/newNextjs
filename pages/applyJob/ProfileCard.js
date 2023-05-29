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
import { toast } from "react-toastify";
import { applyJobs, retrievePersonal } from "@/redux/slices/personal";
import { useRouter } from "next/router";

const ProfileCard = () => {
  let dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(retrievePersonal());
  }, [dispatch]);
  const show = useSelector((state) => state.personal.show);

  const [profiletab, setProfiletab] = useState({
    index: 0,
    page: <UploadResume />,
  });
  const [final, setFinal] = React.useState();

  const handleData = (fins) => {
    setFinal(fins);
  };

  const submit = (final) => {
    if (final?.resumeId === undefined) {
      notifye("Please Select Resume");
    } else {
      // setProfiletab({ index: 3, page: <Submitted /> });
      dispatch(applyJobs(final));
      notify("Your Application Was Submitted");
      setFinal();
      router.push("/applyConfirmation");
    }
  };
  const resumeSin = useSelector((state) => state.personal.resume);
  const coverSin = useSelector((state) => state.personal.cover);
  const quiz = useSelector((state) => state.personal.ids);
  const ids = useSelector((state) => state.personal);

  function Pages(index, cal) {
    if (cal === "add" && index <= 3) {
      if (index === 0) {
        if (resumeSin._id === undefined) {
          notifye("Please Select Resume");
        } else {
          if (show === true) {
            if (coverSin._id === undefined) {
              notifye("Please Select Cover");
            } else {
              quiz.show === "true"
                ? setProfiletab({ index: 1, page: <EmpQuiz /> })
                : setProfiletab({
                    index: 2,
                    page: (
                      <ReviewAppication change={handleData} Pages={PagesRev} />
                    ),
                  });
            }
          } else {
            quiz.show === "true"
              ? setProfiletab({ index: 1, page: <EmpQuiz /> })
              : setProfiletab({
                  index: 2,
                  page: (
                    <ReviewAppication change={handleData} Pages={PagesRev} />
                  ),
                });
          }
        }
      }
      if (index === 1) {
        if (quiz.show === "true" || quiz.show === undefined) {
          var arryMem = quiz?.question?.map((mem) => {
            if (mem.answer === "") {
              return false;
            }
            return null;
          });
          if (arryMem?.includes(false) === true) {
            notifye("Please Provide Answer");
          } else {
            setProfiletab({
              index: 2,
              page: <ReviewAppication change={handleData} Pages={PagesRev} />,
            });
          }
        } else {
          setProfiletab({
            index: 2,
            page: <ReviewAppication change={handleData} Pages={PagesRev} />,
          });
        }
      }
    }
  }
  const PagesRev = (index, cal) => {
    if (cal === "sub" && index > 0) {
      setProfiletab({ index: --index });
    }

    switch (index) {
      case 0:
        setProfiletab({ index: index, page: <UploadResume /> });
        break;
      case 1:
        setProfiletab(
          quiz.show === "true"
            ? { index: index, page: <EmpQuiz /> }
            : { index: 0, page: <UploadResume /> }
        );
        break;
      case 2:
        setProfiletab({
          index: index,
          page: <ReviewAppication change={handleData} Pages={PagesRev} />,
        });
        break;
      case 3:
        setProfiletab({ index: index, page: <Submitted /> });
        break;
      default:
        setProfiletab({ index: index, page: "" });
        break;
    }
  };

  const notify = (Add) =>
    toast.success(Add, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifye = (Add) =>
    toast.error(Add, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <>
      <Grid
        spacing={5}
        // direction="colum"
        justify="center"
        alignItems="center"
      >
        {profiletab.index === profiletab.index + 0 ? profiletab.page : ""}

        <Grid
          sx={{
            justifyContent: "center",
            display: "flex",
            marginBottom: 5,
          }}
        >
          <Container>
            {profiletab.index === 3 ? (
              ""
            ) : (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  m: "65px 0 45px 0",
                  gap: "15px",
                  width: { md: "100%", xs: "200px" },
                }}
              >
                {profiletab.index === 0 ? (
                  <Button
                    variant="outlined"
                    disabled
                    onClick={() => {
                      Pages(profiletab.index, "sub");
                    }}
                    sx={{
                      width: "50%",
                      height: "50px",
                      borderRadius: "8px",
                      color: "#4F9AFF",
                    }}
                  >
                    Previous
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    onClick={() => {
                      PagesRev(profiletab.index, "sub");
                    }}
                    sx={{
                      width: "50%",
                      height: "50px",
                      borderRadius: "8px",
                      color: "#4F9AFF",
                    }}
                  >
                    Previous
                  </Button>
                )}
                {profiletab.index === 2 ? (
                  <Button
                    variant="contained"
                    sx={{
                      width: "50%",
                      height: "50px",
                      borderRadius: "8px",
                      bgcolor: "#015FB1 !important",
                    }}
                    onClick={() => {
                      submit(final);
                    }}
                  >
                    Submit
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    onClick={() => {
                      Pages(profiletab.index, "add");
                    }}
                    sx={{
                      bgcolor: "#015FB1 !important",
                      width: "50%",
                      borderRadius: "8px",
                      height: "50px",
                    }}
                  >
                    Next
                  </Button>
                )}
              </Box>
            )}
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default ProfileCard;
