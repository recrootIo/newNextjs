import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { Stack } from "@mui/system";
import React from "react";
import { StyledCard } from "../../ProfileStyles";
import AddIcon from "@mui/icons-material/Add";
import { CardContent } from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import DeleteIcon from "@mui/icons-material/Delete";
import { BOLD } from "@/theme/fonts";
import { DANGER } from "@/theme/colors";
import { useDispatch } from "react-redux";
import { updateCurrentScreen } from "@/redux/slices/candidate";

const Resume = ({ ...resume }) => {
  const dispatch = useDispatch();

  const gotToResume = () => {
    dispatch(updateCurrentScreen("resume"));
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
          Resume
        </CustomTypography>
        <AddIcon className="iconPointers" onClick={() => gotToResume()} />
      </Stack>
      <CardContent>
        {resume.resumeFileLocation.map((cv, index) => (
          <Stack
            key={index}
            direction={"row"}
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              padding: "10px 15px",
            }}
          >
            <CustomTypography
              sx={{ color: "#00339B", cursor: "pointer" }}
              onClick={async () => {
                const res = await fetch(
                  ` http://localhost:3000/api/downloadResume?resume=${cv?.resume?.replace(
                    /\\/g,
                    "/"
                  )}`
                );
                const blob = await res.blob();
                download(blob, `${cv?.resumeName}`);
              }}
            >
              {cv?.resumeName}
            </CustomTypography>
            <Stack
              direction={"row"}
              sx={{
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <UploadIcon sx={{ color: "#00339B" }} className="iconPointers" />
              <DeleteIcon sx={{ color: DANGER }} className="iconPointers" />
            </Stack>
          </Stack>
        ))}

        <Stack
          direction={"row"}
          sx={{ justifyContent: "flex-end", padding: "10px 15px" }}
        >
          <button
            style={{
              minWidth: "195px",
              minHeight: "40px",
              borderRadius: "8px",
              border: "1px solid gray",
            }}
          >
            ADD COVER LETTER
          </button>
        </Stack>
      </CardContent>
    </StyledCard>
  );
};

Resume.defaultProps = {
  resumeFileLocation: [],
};

export default React.memo(Resume);
