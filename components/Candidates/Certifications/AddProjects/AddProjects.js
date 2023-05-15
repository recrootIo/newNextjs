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
import { AddProAndThenGet, EditProjectAndGet } from "@/redux/slices/personal";

const AddProjects = () => {
  const project = useSelector((state) => state.personal.project);
  const [newProject, setNewProject] = React.useState({
    Description: "",
    Organization: "",
    ProjectName: "",
    portafolioLink: "",
  });

  const dispatch = useDispatch();

  const gotToProjects = () => {
    dispatch(updateCurrentScreen(""));
  };

  const buttonText = project?._id ? "Update" : "Add";
  const handleAdd = () => {
    if (project?._id) {
      dispatch(EditProjectAndGet(newProject, project?._id));
    } else {
      dispatch(AddProAndThenGet(newProject));
    }
  };

  React.useEffect(() => {
    setNewProject({
      Description: project?.Description,
      Organization: project?.Organization,
      ProjectName: project?.ProjectName,
      portafolioLink: project?.portafolioLink,
      _id: project?._id,
    });
  }, [project]);

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

          <CardContent sx={{ p: "70px", paddingBottom: "100px !important" }}>
            <CustomTypography
              className="personalDetailTitle"
              variant="h4"
              sx={{
                display: "flex",
                justifyContent: "center",
                fontWeight: 600,
                fontFamily: "Inter-bold",
                mt: "60px",
              }}
              gutterBottom
            >
              Add Projects
            </CustomTypography>
            <Stack spacing={2} sx={{ mt: "100px" }}>
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
