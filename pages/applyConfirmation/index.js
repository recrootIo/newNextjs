import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import {
  Backdrop,
  Checkbox,
  CircularProgress,
  Dialog,
  FormGroup,
  Stack,
  Switch,
  Container,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useDispatch, useSelector } from "react-redux";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import download from "downloadjs";
import AddIcon from "@mui/icons-material/Add";
import Navbar from "@/components/Navbar/Navbar";
import { CustomTypography } from "@/ui-components/CustomTypography/CustomTypography";
import { BOLD } from "@/theme/fonts";
import ApplyJobStepper from "@/components/ApplyJobStepper/ApplyJobStepper";
import { useRouter } from "next/router";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50vh",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    backgroundImage: `url("/successImgBg.svg")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
};

const ApplyConfirmation = () => {
  const router = useRouter();

  const goBack = () => {
    router.push(`/jobs}`);
  };

  return (
    <div
      style={{
        backgroundImage: `url("/Successful applied for jo bg.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <Box
        sx={{
          height: "100px",
          backgroundImage: 'url("/Group 86.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
        }}
      ></Box>
      <Box sx={{ mb: "60px" }}>
        <ApplyJobStepper activeStep={2} />
      </Box>
      <div style={styles.container}>
        <img
          src="/applyConfirmation Img.png"
          alt="Centered Image"
          style={styles.image}
        />
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img
          src="/tickImg.png"
          alt="Centered Image"
          style={{ maxHeight: "80px", maxWidth: "80px" }}
        />
        <CustomTypography variant="body1" gutterBottom>
          Your Application is Submitted
        </CustomTypography>
        <CustomTypography
          variant="h4"
          gutterBottom
          sx={{ color: "#2699FF", fontFamily: BOLD }}
        >
          Thank You For Applying
        </CustomTypography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#015FB1 !important",
            width: "40%",
            height: "50px",
            textTransform: "capitalize",
            mt: "50px",
            mb: "100px",
            fontSize: "16px",
          }}
          onClick={() => goBack()}
        >
          Search For More Jobs
        </Button>
      </Box>
    </div>
  );
};

export default ApplyConfirmation;
