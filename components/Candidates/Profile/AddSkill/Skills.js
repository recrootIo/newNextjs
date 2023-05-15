import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import {
  CardContent,
  LinearProgress,
  Stack,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Button,
  Slide,
} from "@mui/material";
import React, { useState } from "react";
import { StyledCard } from "../../ProfileStyles";
import AddIcon from "@mui/icons-material/Add";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { BOLD } from "@/theme/fonts";
import { DANGER } from "@/theme/colors";
import { useDispatch } from "react-redux";
import { updateCurrentScreen } from "@/redux/slices/candidate";
import { deleteSkillAndGet } from "@/redux/slices/personal";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const Skills = ({ skills }) => {
  const competencyLevels = (level) => {
    if (level === "expert") return 100;
    if (level === "expert") return 75;
    else return 25;
  };

  const dispatch = useDispatch();

  const gotToAddSkills = () => {
    dispatch(updateCurrentScreen("skill"));
  };

  const [openDel, setOpenDel] = React.useState(false);
  const [delSkill, setDelSkill] = useState("");

  const handleClickOpenDeleteSkill = (id) => {
    setDelSkill(id);
    setOpenDel(true);
  };

  const handleDeleteSkill = () => {
    dispatch(deleteSkillAndGet(delSkill));
  };

  const handleCloseDeleteSkill = () => {
    setOpenDel(false);
  };

  return (
    <>
      <StyledCard variant="outlined">
        <Stack
          direction={"row"}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            padding: { md: "10px 30px", xs: "10px", sm: "10px" },
            backgroundColor: "#5CA9E814",
          }}
        >
          <CustomTypography
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 30px",
              backgroundColor: "#5CA9E814",
            }}
          >
            Skills
          </CustomTypography>
          <AddIcon className="iconPointers" onClick={() => gotToAddSkills()} />
        </Stack>
        <CardContent
          sx={{
            padding: { md: "30px 30px", xs: "16px 10px", sm: "16px 10px" },
          }}
        >
          <table
            style={{
              // minWidth: "600px",
              overflowX: "auto",
            }}
          >
            <tbody>
              {skills.map((skill, index) => (
                <tr className="styledRows" key={index}>
                  <td style={{ width: "300px" }} className="startingTd">
                    <CustomTypography>{skill?.skillName}</CustomTypography>
                  </td>
                  <td style={{ width: "100px" }}>
                    <CustomTypography>{skill?.Experience}</CustomTypography>
                  </td>
                  <td style={{ width: "150px" }}>
                    <CustomTypography>{skill?.Compitance}</CustomTypography>
                  </td>
                  <td style={{ width: "160px" }}>
                    <LinearProgress
                      variant="determinate"
                      value={competencyLevels(skill?.Compitance)}
                    />
                  </td>
                  <td
                    style={{
                      width: "150px",
                    }}
                    className="endTd"
                  >
                    <Stack
                      direction={"row"}
                      sx={{
                        justifyContent: "flex-end",
                        alignItems: "center",
                        gap: "10px",
                      }}
                      className="endTd"
                    >
                      <Stack
                        direction={"row"}
                        sx={{
                          justifyContent: "flex-end",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <CreateIcon
                          sx={{ color: "#00339B" }}
                          fontSize="small"
                          className="iconPointers"
                        />
                        <DeleteIcon
                          sx={{ color: DANGER }}
                          className="iconPointers"
                          onClick={() => {
                            handleClickOpenDeleteSkill(skills._id);
                          }}
                        />
                      </Stack>
                    </Stack>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </StyledCard>
      <Dialog
        open={openDel}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDeleteSkill}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          {"Are you sure you want to proceed with deleting your skill ?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleCloseDeleteSkill();
              handleDeleteSkill(skills._id);
            }}
          >
            Yes
          </Button>
          <Button onClick={handleCloseDeleteSkill}>No</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

Skills.defaultProps = {
  skills: [],
};

export default Skills;
