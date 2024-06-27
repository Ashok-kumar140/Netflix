import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/slices/movieSlice";
import BackgroundVideo from "./BackgroundVideo";

export default function MovieDialog() {
  //   const [open, setOpen] = React.useState(false);
  const { open } = useSelector((state) => state.movie);
  const { id } = useSelector((state) => state.movie);
  const { trailerMovie } = useSelector((state) => state.movie);
  console.log("tr", trailerMovie);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setOpen(false));
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiDialog-paper": {
            height: "80vh",
            width: "80%",
            maxWidth: "none",
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">
          {""}
        </DialogTitle>
        <DialogContent>
          <BackgroundVideo movieId={id} bool={true} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
