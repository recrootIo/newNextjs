"use client";
import * as React from "react";
import {
  Box,
  Stack,
  Button,
  TextField,
  Container,
  // Autocomplete,
  FormControl,
  Card,
  CardContent,
  CircularProgress,
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentScreen } from "@/redux/slices/candidate";
import { ERROR, LEVELS, SUCCESS } from "@/utils/constants";
import candidateServices from "@/redux/services/candidate.services";
import { openAlert } from "@/redux/slices/alert";
import {
  clearSkill,
  // GetCandsPrefInfo,
  retrievePersonal,
} from "@/redux/slices/personal";
import { Form, Formik } from "formik";
import CustomTextField from "@/components/Forms/CustomTextField";
import * as Yup from "yup";
import CalculatePercentage from "@/utils/CalculatePercentange";
import { ADD, UPDATE } from "@/utils/buttnTexts";

const FORM_VALIDATION = Yup.object().shape({
  skillName: Yup.string().required("Skill Name field is required"),
  Experience: Yup.number().required("Experience field is required"),
  Compitance: Yup.string().required("Compitance field is required"),
});

const AddSkill = () => {
  const dispatch = useDispatch();
  const { skill } = useSelector((state) => state?.personal);
  const [load, setload] = React.useState(false);

  const [INITIAL_VALUES, setInitialValues] = React.useState({
    skillName: skill?.skillName,
    Experience: skill?.Experience,
    Compitance: skill?.Compitance,
    _id: skill?._id,
  });
  const [title, setTitle] = React.useState("Add Skill");

  const gotoHome = () => {
    dispatch(updateCurrentScreen(""));
    dispatch(clearSkill());
  };

  const submitSkill = (values) => {
    if (values?._id) {
      editNewSkill(values);
    } else {
      addNewSkill(values);
    }
  };

  React.useEffect(() => {
    setInitialValues(() => skill);
  }, [skill]);

  const addNewSkill = (values) => {
    setload(true)
    candidateServices
      .addSkill(values)
      .then((res) => {
        if (res.status === 201) {
          dispatch(
            openAlert({
              type: SUCCESS,
              message: "New Skill added",
            })
          );
          gotoHome();
          setload(false)
          dispatch(retrievePersonal()).then((res)=>{
            if(res?.meta?.requestStatus === "fulfilled"){
              CalculatePercentage()
            }
          })
        }
      })
      .catch(() => {
        dispatch(
          openAlert({
            type: ERROR,
            message: error?.response?.data?.message || "Something went wrong",
          })
        );
      });
  };

  const editNewSkill = (values) => {
    setload(true)
    candidateServices
      .editSkills(values, values?.id)
      .then((res) => {
        if (res?.status === 201) {
          dispatch(
            openAlert({
              type: SUCCESS,
              message: "Skill is updated",
            })
          );
          gotoHome();
          setload(false)
          dispatch(retrievePersonal()).then((res)=>{
            if(res?.meta?.requestStatus === "fulfilled"){
              CalculatePercentage()
            }
          })
        }
      })
      .catch((error) => {
        dispatch(
          openAlert({
            type: ERROR,
            message: error?.response?.data.message || "Something went wrong",
          })
        );
      });
  };

  React.useEffect(() => {
    if (skill?._id) {
      setTitle("Edit Skill");
    } else {
      setTitle("Add Skill");
    }
  }, [skill]);

  const buttonText = skill?._id ? UPDATE : ADD;

  return (
    <div>
      <Container>
        <Card variant="outlined"> 00
          <Box sx={{ bgcolor: "#2699FF" }}>
            <Button
              variant="text"
              startIcon={<ArrowBackIcon />}
              sx={{
                color: "white",
                textTransform: "capitalize",
                fontSize: "18px",
              }}
              onClick={() => gotoHome()}
            >
              Back
            </Button>
          </Box> 0
          <CardContent
            sx={{
              p: { md: "50px", xs: "22px", sm: "22px" },
              paddingBottom: "100px !important",
            }}
          >
            <CustomTypography
              className="personalDetailTitle"
              sx={{
                display: "flex",
                justifyContent: "center",
                fontFamily: "Inter-bold",
                fontSize: "33px",
              }}
            >
              {title}
            </CustomTypography>

            <Formik
              initialValues={{ ...INITIAL_VALUES }}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values) => {
                submitSkill(values);
              }}
            >
              {({ errors, values, setFieldValue, submitForm }) => {
                return (
                  <Form>
                    <Stack spacing={2} sx={{ mt: "50px" }}>
                      <CustomTextField
                        id="outlined-basic"
                        label="Skill"
                        name="skillName"
                      />

                      <CustomTextField
                        label="Experience(Years)"
                        name="Experience"
                      />

                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Level
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={values.Compitance}
                          label="Level"
                          onChange={(e, a) => {
                            console.log(e.target.value, "e");
                            setFieldValue("Compitance", e.target.value);
                          }}
                          error={errors.Compitance}
                        >
                          {LEVELS.map((l, index) => (
                            <MenuItem key={index} value={l}>
                              {l}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      <Stack direction="row" spacing={2}>
                        <Button
                          variant="contained"
                          sx={{
                            bgcolor: "#015FB1 !important",
                            width: "50%",
                            borderRadius: "8px",
                          }}
                          onClick={() => gotoHome()}
                        >
                          Cancel
                        </Button>
                     {!load ?   <Button
                          variant="contained"
                          sx={{ bgcolor: "#015FB1 !important", width: "50%" }}
                          onClick={() => submitForm()}
                        >
                          {buttonText}
                        </Button>
                        :
                        <Button
                          variant="contained"
                          sx={{ bgcolor: "#015FB1 !important", width: "50%" }}
                        >
                          <CircularProgress color='inherit' />
                        </Button>
                        }
                      </Stack>
                    </Stack>
                  </Form>
                );
              }}
            </Formik>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default AddSkill;
