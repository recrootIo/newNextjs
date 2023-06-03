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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { updateCurrentScreen } from "@/redux/slices/candidate";
import { useDispatch, useSelector } from "react-redux";
import {
  // AddProAndThenGet,
  // EditProjectAndGet,
  retrievePersonal,
} from "@/redux/slices/personal";
import candidateServices from "@/redux/services/candidate.services";
import { ERROR, SUCCESS } from "@/utils/constants";
import { openAlert } from "@/redux/slices/alert";
import { Form, Formik } from "formik";
import CustomTextField from "@/components/Forms/CustomTextField";
import * as Yup from "yup";

const FORM_VALIDATION = Yup.object().shape({
  Description: Yup.string().required("Description field is required"),
  Organization: Yup.string().required("Organization field is required"),
  ProjectName: Yup.string().required("ProjectName field is required"),
  portafolioLink: Yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Enter correct url!"
    )
    .required("Please enter  Url"),
});

const AddProjects = () => {
  const dispatch = useDispatch();
  const project = useSelector((state) => state.personal.project);

  const [INITIAL_VALUES, setInitialValues] = React.useState({
    Description: project?.Description,
    Organization: project?.Organization,
    ProjectName: project?.ProjectName,
    portafolioLink: project?.portafolioLink,
    _id: project?._id,
  });

  React.useEffect(() => {
    setInitialValues(project);
  }, [project]);

  const gotToProjects = () => {
    dispatch(updateCurrentScreen(""));
  };

  const addNewProject = (value) => {
    candidateServices
      .addProjects(value)
      .then((res) => {
        if (res.status === 201) {
          dispatch(
            openAlert({
              type: SUCCESS,
              message: "New Project is added",
            })
          );
          dispatch(updateCurrentScreen(""));
          dispatch(retrievePersonal());
        }
      })
      .catch((error) => {
        dispatch(
          openAlert({
            type: ERROR,
            message: error?.response?.data?.message || "Something went wrong",
          })
        );
      });
  };

  const editNewProject = (value) => {
    candidateServices
      .editProjects(value, value?._id)
      .then((res) => {
        if (res.status === 201) {
          dispatch(
            openAlert({
              type: SUCCESS,
              message: "Project is Updated",
            })
          );
          dispatch(updateCurrentScreen(""));
          dispatch(retrievePersonal());
        }
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

  const buttonText = project?._id ? "Update" : "Add";

  const handleAdd = (value) => {
    if (value?._id) {
      editNewProject(value);
    } else {
      addNewProject(value);
    }
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
              onClick={() => gotToProjects()}
            >
              Back
            </Button>
          </Box>

          <CardContent
            sx={{
              p: { md: "50px", sm: "22px", xs: "22px" },
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
              Add Projects
            </CustomTypography>
            <Formik
              initialValues={{ ...INITIAL_VALUES }}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values) => {
                handleAdd(values);
                console.log(values, "values");
              }}
            >
              {({ errors, values, setFieldValue, submitForm }) => {
                return (
                  <Form>
                    <Stack spacing={2} sx={{ mt: "50px" }}>
                      <CustomTextField
                        label="Enter Portfolio Link"
                        name="portafolioLink"
                      />
                      <CustomTextField
                        label="Enter Project Name"
                        name="ProjectName"
                      />
                      <CustomTextField
                        label="Organization"
                        name="Organization"
                      />
                      <CustomTextField
                        label="Description"
                        name="Description"
                        multiline
                        rows={4}
                      />

                      <Stack direction="row" spacing={2}>
                        <Button
                          variant="contained"
                          sx={{
                            bgcolor: "#015FB1 !important",
                            width: "50%",
                            borderRadius: "8px",
                          }}
                          onClick={() => gotToProjects()}
                        >
                          Cancel
                        </Button>
                        <Button
                          onClick={() => submitForm()}
                          variant="contained"
                          sx={{ bgcolor: "#015FB1 !important", width: "50%" }}
                        >
                          {buttonText}
                        </Button>
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

export default React.memo(AddProjects);
