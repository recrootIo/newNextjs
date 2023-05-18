import { DANGER, NEUTRAL } from "@/theme/colors";
import { BOLD } from "@/theme/fonts";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import {
  Box,
  CardContent,
  Collapse,
  Grid,
  LinearProgress,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import { StyledCard } from "../ProfileStyles";
import {
  ExpandLess,
  ExpandMore,
  KeyboardArrowDownIcon,
} from "@mui/icons-material";
import { LAZY, MID } from "@/theme/spacings";
import { useSelector } from "react-redux";
import PersonalDetail from "./PersonalDetails/PersonalDetail";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Skills from "./AddSkill/Skills";
import Resume from "./AddResume/Resume";

const Profile = ({ ...data }) => {
  const [open, setOpen] = useState(true);

  const resume = data?.resume;

  const openProfile = () => {
    setOpen(!open);
  };

  return (
    <Stack sx={{ gap: "10px" }}>
      <Box
        sx={{
          backgroundColor: "#2699FF",
          borderRadius: "5px",
        }}
      >
        <Stack
          direction={"row"}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 30px",
          }}
        >
          <CustomTypography
            sx={{ fontFamily: BOLD, color: NEUTRAL, fontSize: "20px" }}
          >
            My Profile
          </CustomTypography>
          <Box onClick={() => openProfile()} sx={{ cursor: "pointer" }}>
            {open ? (
              <ExpandLess sx={{ color: NEUTRAL }} />
            ) : (
              <ExpandMore sx={{ color: NEUTRAL }} />
            )}
          </Box>
        </Stack>
      </Box>

      <Collapse in={open} timeout="auto">
        <Stack sx={{ gap: "30px" }}>
          {/* Resume */}
          <Resume {...resume} />

          {/* Personal Detail */}
          <PersonalDetail {...data} />

          {/* Education */}
          <Education {...resume} />

          {/* Experience */}
          <Experience {...resume} />
          {/* <Experience /> */}

          {/* Skills */}
          <Skills {...resume} />
        </Stack>
      </Collapse>
    </Stack>
  );
};

export default React.memo(Profile);
