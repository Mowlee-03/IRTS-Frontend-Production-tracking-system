import React from "react";
import { Snackbar, Alert, AlertTitle } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { hideSnackbar } from "../../Redux/Slice/SnackbarSlice";

const severityTitles = {
  success: "Success",
  error: "Error",
  warning: "Warning",
  info: "Info",
};

const severityStyles = {
  success: {
    backgroundColor: "#4caf50", // Green
    color: "#fff",
  },
  error: {
    backgroundColor: "#f44336", // Red
    color: "#fff",
  },
  warning: {
    backgroundColor: "#ff9800", // Orange
    color: "#fff",
  },
  info: {
    backgroundColor: "#2196f3", // Blue
    color: "#fff",
  },
};

const GlobalSnackbar = () => {
  const dispatch = useDispatch();
  const { open, severity, message } = useSelector((state) => state.snackbar);

  const handleClose = (_, reason) => {
    if (reason === "clickaway") return;
    dispatch(hideSnackbar());
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        onClose={handleClose}
        severity={severity}
        variant="filled"
        sx={{
          width: "100%",
          ...severityStyles[severity],
        }}
      >
        <AlertTitle>{severityTitles[severity]}</AlertTitle>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default GlobalSnackbar;
