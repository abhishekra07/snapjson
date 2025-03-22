import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Backdrop,
} from "@mui/material";

const MobileWarning = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 768; // Detect small screen sizes
    if (isMobile) {
      setOpen(true);
    }
  }, []);

  return (
    <Dialog open={open} fullWidth maxWidth="sm" disableEscapeKeyDown>
      <Backdrop open={open} />
      <DialogTitle>⚠️ Unsupported Device</DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          SnapJSON is designed for desktop use. Please switch to a desktop or
          laptop for the best experience.
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default MobileWarning;
