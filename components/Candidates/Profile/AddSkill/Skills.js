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
  IconButton,
} from "@mui/material";
import React from "react"; //  useState
import { StyledCard } from "../../ProfileStyles";
import AddIcon from "@mui/icons-material/Add";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { BOLD } from "@/theme/fonts";
import { DANGER } from "@/theme/colors";
import { useDispatch } from "react-redux";
import { updateCurrentScreen } from "@/redux/slices/candidate";
import {
  deleteSkillAndGet,
  retrieveGetSinSkill,
} from "@/redux/slices/personal";
import { openAlert } from "@/redux/slices/alert";
import { SUCCESS } from "@/utils/constants";
import CalculatePercentage from "@/utils/CalculatePercentange";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const Skills = ({ skills }) => {
  const dispatch = useDispatch();
  const [openDeleteScreen, setOpenDeleteScreen] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState("");

  const competencyLevels = (level) => {
    if (level === "expert") return 100;
    if (level === "expert") return 75;
    else return 25;
  };

  const gotToAddSkills = () => {
    dispatch(updateCurrentScreen("skill"));
  };

  const handleGetSingle = (id) => {
    dispatch(retrieveGetSinSkill(id)).then(() => {
      gotToAddSkills();
    });
  };

  const handleDelete = () => {
    dispatch(deleteSkillAndGet(selectedId)).then(() => {
      dispatch(
        openAlert({
          type: SUCCESS,
          message: "Skill is deleted",
        })
      );
      CalculatePercentage();
    });
  };

  const closeMessage = () => {
    setOpenDeleteScreen(false);
  };

  return (
    <>
      <StyledCard variant="outlined" id="skills_details_section">
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
              fontFamily: BOLD,
              color: "#00339B",
              fontSize: "20px",
            }}
          >
            Skills
          </CustomTypography>
          <AddIcon className="iconPointers" onClick={() => gotToAddSkills()} />
        </Stack>
        <CardContent
          sx={{
            padding: { md: "30px 50px", xs: "16px 10px", sm: "16px 10px" },
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
                    <CustomTypography sx={{ textTransform: "capitalize" }}>
                      {skill?.Compitance}
                    </CustomTypography>
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
                        <IconButton onClick={() => handleGetSingle(skill?._id)}>
                          <CreateIcon
                            sx={{ color: "#00339B" }}
                            fontSize="small"
                            className="iconPointers"
                          />
                        </IconButton>

                        <IconButton
                          onClick={() => {
                            setOpenDeleteScreen(() => true);
                            setSelectedId(skill?._id);
                          }}
                        >
                          <DeleteIcon sx={{ color: DANGER }} />
                        </IconButton>
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
        open={openDeleteScreen}
        TransitionComponent={Transition}
        keepMounted
        onClose={closeMessage}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          Are you sure you want to proceed with deleting your skill ?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              closeMessage();
              handleDelete();
            }}
          >
            Yes
          </Button>
          <Button onClick={() => closeMessage()}>No</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

Skills.defaultProps = {
  skills: [],
};

export default Skills;
