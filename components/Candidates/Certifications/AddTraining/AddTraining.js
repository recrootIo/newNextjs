"use client";
import * as React from "react";
import {
  Box,
  Stack,
  Button,
  TextField,
  Container,
  Card,
  CardContent,
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentScreen } from "@/redux/slices/candidate";
import { MobileDatePicker } from "@mui/x-date-pickers";
import { convertDate } from "@/utils/HelperFunctions";
import {
  AddTrainAndThenGet,
  EditTrainAndGet,
  retrievePersonal,
} from "@/redux/slices/personal";
import dayjs from "dayjs";
import candidateServices from "@/redux/services/candidate.services";
import { ERROR, SUCCESS } from "@/utils/constants";
import { openAlert } from "@/redux/slices/alert";

const AddTraining = () => {
  const dispatch = useDispatch();
  const training = useSelector((state) => state?.personal?.training);
  const [value, setValue] = React.useState("");
  const [value2, setValue2] = React.useState("");
  const [newTrainings, setNewTrainings] = React.useState({
    title: "",
    instituete: "",
    fromDate: "",
    toDate: "",
  });

  React.useEffect(() => {
    setNewTrainings(() => ({
      title: training?.title,
      instituete: training?.instituete,
      fromDate: training?.fromDate,
      toDate: training?.toDate,
    }));
    setValue(() => dayjs(training?.fromDate));
    setValue2(() => dayjs(training?.toDate));
  }, [training]);

  const gotToTraining = () => {
    dispatch(updateCurrentScreen(""));
  };

  const handleChange = (newValue) => {
    let val = convertDate(newValue);
    setValue(() => newValue);
    setNewTrainings((state) => ({
      ...state,
      fromDate: val,
    }));
  };

  const handleChangeto = (newValue2) => {
    let val = convertDate(newValue2);
    setValue2(() => newValue2);
    setNewTrainings((state) => ({
      ...state,
      toDate: val,
    }));
  };

  const saveTrainings = () => {
    if (training?._id) {
      editTrainings();
    } else {
      addNewTraining();
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setNewTrainings({
      ...newTrainings,
      [name]: value,
    });
  };

  const addNewTraining = () => {
    candidateServices
      .addTrainings(newTrainings)
      .then(() => {
        dispatch(
          openAlert({
            type: SUCCESS,
            message: "New Training is added",
          })
        );
        dispatch(updateCurrentScreen(""));
        dispatch(retrievePersonal());
      })
      .catch((error) => {
        dispatch(
          openAlert({
            type: ERROR,
            message: error.response.data.message || "Something went wrong",
          })
        );
      });
  };

  const editTrainings = () => {
    candidateServices
      .editTrainings(newTrainings, training?._id)
      .then(() => {
        dispatch(
          openAlert({
            type: SUCCESS,
            message: "Edited Successfully",
          })
        );
        dispatch(updateCurrentScreen(""));
        dispatch(retrievePersonal());
      })
      .catch((error) => {
        dispatch(
          openAlert({
            type: ERROR,
            message: error.response.data.message || "Something went wrong",
          })
        );
      });
  };

  return (
    <div>
      <Container>
        <Card>
          <Box sx={{ bgcolor: "#2699FF" }}>
            <Button
              variant="text"
              startIcon={<ArrowBackIcon />}
              sx={{
                color: "white",
                textTransform: "capitalize",
                fontSize: "18px",
              }}
              onClick={() => gotToTraining()}
            >
              Back
            </Button>
          </Box>

          <CardContent sx={{ p: "50px", paddingBottom: "100px !important" }}>
            <CustomTypography
              className="personalDetailTitle"
              sx={{
                display: "flex",
                justifyContent: "center",
                fontFamily: "Inter-bold",
                fontSize: "33px",
              }}
            >
              Add Training
            </CustomTypography>
            <Stack spacing={2} sx={{ mt: "50px" }}>
              <TextField
                required
                id="outlined-basic"
                label="Title"
                variant="outlined"
                name="title"
                value={newTrainings.title}
                onChange={onChange}
              />

              <TextField
                required
                id="outlined-basic"
                label="Institute"
                variant="outlined"
                name="instituete"
                value={newTrainings.instituete}
                onChange={onChange}
              />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "20px",
                  width: "100%",
                }}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <MobileDatePicker
                    label="From"
                    // inputFormat="MM/dd/YYYY"
                    name="fromDate"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => (
                      <TextField {...params} sx={{ width: "100%" }} />
                    )}
                  />

                  <MobileDatePicker
                    label="To"
                    // inputFormat="MM/dd/YYYY"
                    name="toDate"
                    value={value2}
                    onChange={handleChangeto}
                    renderInput={(params) => (
                      <TextField {...params} sx={{ width: "100%" }} />
                    )}
                  />
                </LocalizationProvider>
              </Box>

              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#015FB1 !important",
                    width: "50%",
                    borderRadius: "8px",
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  sx={{ bgcolor: "#015FB1 !important", width: "50%" }}
                  onClick={() => saveTrainings()}
                >
                  Add
                </Button>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default React.memo(AddTraining);
