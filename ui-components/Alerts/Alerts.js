import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { clearAlert } from "@/redux/slices/alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Alerts = () => {
  const { message, open, type } = useSelector((state) => state?.alertMessage);

  const dispatch = useDispatch();

  const clearAlertMessages = () => {
    dispatch(clearAlert());
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={clearAlertMessages}
      >
        <Alert
          onClose={clearAlertMessages}
          sx={{ width: "100%" }}
          severity={type}
        >
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default Alerts;
