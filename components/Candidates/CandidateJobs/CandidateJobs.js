import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import {
  Box,
  //  CardContent,
  Collapse,
  //  Divider,
  Stack,
} from "@mui/material";
import React, { useEffect, useState } from "react";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
// import { StyledCard } from "../ProfileStyles";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import AddIcon from "@mui/icons-material/Add";
// import CustomizedSteppers from "@/ui-components/CustomStpper/CustomStepper";
import { BOLD } from "@/theme/fonts";
import {
  // DANGER,
  NEUTRAL,
} from "@/theme/colors";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import AppliedJobs from "./AppliedJobs";
import SavedJobs from "./SavedJobs";
import { useDispatch, useSelector } from "react-redux";
import { fetchAppliedJobs } from "@/redux/slices/personal";

const CandidateJobs = () => {
  const { appliedJobs } = useSelector((state) => state?.personal);

  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();

  const openProfile = () => {
    setOpen(!open);
  };

  useEffect(() => {
    dispatch(fetchAppliedJobs());
  }, [dispatch]);

  return (
    <Stack sx={{ gap: "10px", mt: "10px" }}>
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
            Jobs
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
          {/* Applied Job */}
          <AppliedJobs appliedJobs={appliedJobs} />
          {/* Saved Jobs */}
          <SavedJobs />
        </Stack>
      </Collapse>
    </Stack>
  );
};

export default React.memo(CandidateJobs);
