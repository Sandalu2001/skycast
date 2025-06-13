"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { DeleteContentModalProps } from "@/app/lib/definitions";
import { Stack, Typography } from "@mui/material";

const DeleteContentModal = ({
  videoid,
  open,
  handleClose,
}: DeleteContentModalProps) => {
  const dialogBoxHandler = () => {
    handleClose();
    console.log("video has been deleted ", videoid);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          ".MuiDialog-paper": {
            borderRadius: 4,
            p: 1,
          },
        }}
      >
        <DialogTitle
          variant="h5"
          sx={{
            fontSize: 18,
            borderColor: "divider",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Stack flexDirection={"row"} sx={{ gap: 2, alignItems: "center" }}>
            <WarningAmberIcon fontSize="large" color="error" />
            <Typography variant="h4" sx={{ fontWeight: 500 }}>
              Are you sure ?
            </Typography>
          </Stack>
        </DialogTitle>
        <DialogContent sx={{ height: "100%" }}>
          <DialogContentText>
            {`If you delete this video, you won't be able to recover it. Do you
            want to delete it?`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus variant="outlined">
            Cancel
          </Button>
          <Button onClick={dialogBoxHandler} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteContentModal;
