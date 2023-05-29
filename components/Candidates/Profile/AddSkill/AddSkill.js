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
} from "@mui/material";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentScreen } from "@/redux/slices/candidate";
import { LEVELS, SUCCESS } from "@/utils/constants";
import candidateServices from "@/redux/services/candidate.services";
import { openAlert } from "@/redux/slices/alert";
import {
  // GetCandsPrefInfo,
  retrievePersonal,
} from "@/redux/slices/personal";

const AddSkill = () => {
  const dispatch = useDispatch();
  const { skill } = useSelector((state) => state?.personal);

  const [skillSet, setSkillSet] = React.useState({
    skillName: skill?.skillName,
    Experience: skill?.Experience,
    Compitance: skill?.Compitance,
  });

  const gotoHome = () => {
    dispatch(updateCurrentScreen(""));
    setSkillSet({
      skillName: '',
      Experience: '',
      Compitance: '',
    })
  };

  const handleLevelChange = (e) => {
    const { value } = e.target;
    setSkillSet((state) => ({
      ...state,
      Compitance: value,
    }));
  };

  const submitSkill = () => {
    if (skillSet?.id) {
      editNewSkill();
    } else {
      addNewSkill();
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setSkillSet((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const addNewSkill = () => {
    candidateServices
      .addSkill(skillSet)
      .then((res) => {
        if (res.status === 201) {
          dispatch(
            openAlert({
              type: SUCCESS,
              message: "User Preferences Updated",
            })
          );
          dispatch(updateCurrentScreen(""));
          dispatch(retrievePersonal());
        }
      })
      .catch(() => {
        dispatch(
          openAlert({
            type: ERROR,
            message: error.response.data.message || "Something went wrong",
          })
        );
      });
  };

  const editNewSkill = () => {
    candidateServices
      .editSkills(skillSet, skillSet?.id)
      .then((res) => {
        if (res?.status === 201) {         
          dispatch(
            openAlert({
              type: SUCCESS,
              message: "User Preferences Updated",
            })
          );
          dispatch(updateCurrentScreen(""));
          dispatch(retrievePersonal());
        }
      })
      .catch(() => {
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
        <Card variant="outlined">
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
              Add Skill
            </CustomTypography>

            <Stack spacing={2} sx={{ mt: "50px" }}>
              <TextField
                id="outlined-basic"
                label="skill"
                variant="outlined"
                value={skillSet.skillName}
                name="skillName"
                onChange={onChange}
              />

              <TextField
                id="outlined-basic"
                label="Experience(Years)"
                type="number"
                variant="outlined"
                value={skillSet.Experience}
                name="Experience"
                onChange={onChange}
              />

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Level</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={skillSet.Compitance}
                  label="Level"
                  onChange={handleLevelChange}
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
                <Button
                  variant="contained"
                  sx={{ bgcolor: "#015FB1 !important", width: "50%" }}
                  onClick={() => submitSkill()}
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

export default AddSkill;
