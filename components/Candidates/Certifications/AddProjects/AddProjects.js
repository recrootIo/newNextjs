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

const AddProjects = () => {
  const dispatch = useDispatch();
  const project = useSelector((state) => state.personal.project);
  const [newProject, setNewProject] = React.useState({
    Description: "",
    Organization: "",
    ProjectName: "",
    portafolioLink: "",
  });

  React.useEffect(() => {
    setNewProject({
      Description: project?.Description,
      Organization: project?.Organization,
      ProjectName: project?.ProjectName,
      portafolioLink: project?.portafolioLink,
      _id: project?._id,
    });
  }, [project]);

  const gotToProjects = () => {
    dispatch(updateCurrentScreen(""));
    setNewProject({
      Description: "",
      Organization: "",
      ProjectName: "",
      portafolioLink: "",
    })
  };

  const addNewProject = () => {
    candidateServices
      .addProjects(newProject)
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

  const editNewProject = () => {
    candidateServices
      .editProjects(newProject, project?._id)
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
            message: error.response.data.message || "Something went wrong",
          })
        );
      });
  };

  const buttonText = project?._id ? "Update" : "Add";

  const handleAdd = () => {
    if (project?._id) {
      editNewProject();
    } else {
      addNewProject();
    }
  };

  const handleChangesChild = (e) => {
    let { name, value } = e.target;
    setNewProject({
      ...newProject,
      [name]: value,
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
              onClick={() => gotToProjects()}
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
              Add Projects
            </CustomTypography>
            <Stack spacing={2} sx={{ mt: "50px" }}>
              <TextField
                id="outlined-basic"
                label="Enter Portfolio Link"
                variant="outlined"
                name="portafolioLink"
                value={newProject.portafolioLink}
                onChange={handleChangesChild}
              />
              <TextField
                id="outlined-basic"
                label="Enter Project Name"
                variant="outlined"
                name="ProjectName"
                value={newProject.ProjectName}
                onChange={handleChangesChild}
              />
              <TextField
                id="outlined-basic"
                label="Organization"
                variant="outlined"
                name="Organization"
                value={newProject.Organization}
                onChange={handleChangesChild}
              />
              <TextField
                id="outlined-multiline-static"
                label="Description"
                name="Description"
                multiline
                rows={4}
                value={newProject.Description}
                onChange={handleChangesChild}
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
                  onClick={() => handleAdd()}
                  variant="contained"
                  sx={{ bgcolor: "#015FB1 !important", width: "50%" }}
                >
                  {buttonText}
                </Button>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default React.memo(AddProjects);
