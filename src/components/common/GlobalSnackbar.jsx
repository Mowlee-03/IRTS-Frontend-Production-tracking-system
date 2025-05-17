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
    backgroundColor: "rgba(220, 252, 231, 1)",
    color: "#64748B",
    borderLeft: "6px solid #388e3c", // Darker green
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  error: {
    backgroundColor: "rgba(254, 226, 226, 1)",
    color: "#64748B",
    borderLeft: "6px solid #d32f2f", // Darker red
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  warning: {
    backgroundColor: "rgba(254, 243, 199, 1)",
    color: "#64748B",
    borderLeft: "8px solid #f57c00", // Darker orange
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    
  },
  info: {
    backgroundColor: "rgba(205, 233, 255, 1)",
    color: "#64748B",
    borderLeft: "6px solid #0288d1", // Blue
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
};

const severityTitleStyles = {
  success: {
    color: "rgba(34, 197, 94, 1)", // lighter green
    fontWeight: "bold",
  },
  error: {
    color: "rgba(239, 68, 68, 1)", // lighter red
    fontWeight: "bold",
  },
  warning: {
    color: "rgba(245, 158, 11, 1)", // lighter orange
    fontWeight: "bold",
  },
  info: {
    color: "rgba(33, 150, 243, 1)", // lighter blue
    fontWeight: "bold",
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
             minWidth: 320,
          ...severityStyles[severity],
          "& .MuiAlert-icon": {
            color: "#000", 
          },
        }}
      >
        <AlertTitle
        sx={severityTitleStyles[severity]}
        >{severityTitles[severity]}</AlertTitle>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default GlobalSnackbar;
