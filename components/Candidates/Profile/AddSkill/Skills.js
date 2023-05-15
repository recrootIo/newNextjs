import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { CardContent, LinearProgress, Stack } from "@mui/material";
import React from "react";
import { StyledCard } from "../../ProfileStyles";
import AddIcon from "@mui/icons-material/Add";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { BOLD } from "@/theme/fonts";
import { DANGER } from "@/theme/colors";

const Skills = ({ skills }) => {
  const competencyLevels = (level) => {
    if (level === "expert") return 100;
    if (level === "expert") return 75;
    else return 25;
  };

  return (
    <StyledCard variant="outlined">
      <Stack
        direction={"row"}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 30px",
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
        <AddIcon />
      </Stack>
      <CardContent sx={{ padding: "30px 30px" }}>
        <table>
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
                  >
                    <CreateIcon
                      sx={{ color: "#00339B" }}
                      fontSize="small"
                      className="iconPointers"
                    />
                    <DeleteIcon
                      sx={{ color: DANGER }}
                      className="iconPointers"
                    />
                  </Stack>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </StyledCard>
  );
};

Skills.defaultProps = {
  skills: [],
};

export default Skills;
