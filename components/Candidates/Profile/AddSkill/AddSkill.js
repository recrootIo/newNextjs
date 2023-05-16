"use client";
import * as React from "react";
import {
  Box,
  Stack,
  Button,
  TextField,
  Container,
  Autocomplete,
  FormControl,
  Card,
  CardContent,
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentScreen } from "@/redux/slices/candidate";
import { AddSkillAndThenGet, EditSkillAndGet } from "@/redux/slices/personal";

const AddSkill = () => {
  const { data = {} } = useSelector((state) => state?.personal);
  const skills = data.resume && data.resume.skills ? data.resume.skills : [];
  const dispatch = useDispatch();

  const [newSkill, setNewSkill] = React.useState({
    skillName: "",
    Experience: "",
    Compitance: "",
  });

  const buttonText = skills?._id ? "Update" : "Add";
  const handleAdd = () => {
    if (skills?._id) {
      dispatch(EditSkillAndGet(newSkill, skills?._id));
    } else {
      dispatch(AddSkillAndThenGet(newSkill));
    }
  };

  const gotToSkills = () => {
    dispatch(updateCurrentScreen(""));
  };

  React.useEffect(() => {
    setNewSkill({
      Compitance: skills?.Compitance,
      Experience: skills?.Experience,
      skillName: skills?.skillName,
      _id: skills?._id,
    });
  }, [skills]);

  const handleChangesChild = (e) => {
    let { name, value } = e.target;
    setNewSkill({
      ...newSkill,
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
              onClick={() => gotToSkills()}
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
              Add Skill
            </CustomTypography>
            <Stack spacing={2} sx={{ mt: "100px" }}>
              <TextField
                autoComplete="given-name"
                required
                id="outlined-basic"
                label="Skill"
                variant="outlined"
                name="skillName"
                value={newSkill.skillName}
                onChange={handleChangesChild}
              />
              <TextField
                autoComplete="given-name"
                name="Experience"
                required
                id="experience"
                label="Experience(Years)"
                type="number"
                variant="outlined"
                value={newSkill.Experience}
                onChange={handleChangesChild}
                autoFocus
              />
              <FormControl>
                <InputLabel id="demo-simple-select-label">
                  Competency
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={newSkill.Compitance}
                  label="Competency"
                  name="Compitance"
                  required
                  onChange={handleChangesChild}
                >
                  <MenuItem value={"intermediate"}>Intermediate</MenuItem>
                  <MenuItem value={"expert"}>Expert</MenuItem>
                  <MenuItem value={"beginner"}>Beginner</MenuItem>
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

export default AddSkill;
