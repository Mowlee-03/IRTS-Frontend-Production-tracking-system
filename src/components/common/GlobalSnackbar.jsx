import { useEffect } from "react";
import { useSnackbar } from "notistack";
import { useSelector, useDispatch } from "react-redux";
import { clearSnackbar } from "../../Redux/Slice/SnackbarSlice";

const GlobalSnackbar = () => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const snackbar = useSelector((state) => state.snackbar);

  useEffect(() => {
    if (snackbar.open) {
      enqueueSnackbar(snackbar.message, {
        variant: snackbar.variant,
        autoHideDuration: snackbar.duration || 2000, // Default to 3 seconds
      });
      dispatch(clearSnackbar());
    }
  }, [snackbar, enqueueSnackbar, dispatch]);

  return null;
};

export default GlobalSnackbar;
