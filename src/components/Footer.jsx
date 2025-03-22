import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: "center",
        py: 2,
        mt: 4,
        bgcolor: "background.paper",
        color: "text.primary",
      }}
    >
      <Typography variant="body2">
        © 2025 SnapJSON |{" "}
        <a
          href="/privacy-policy"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Privacy Policy
        </a>
      </Typography>
    </Box>
  );
};

export default Footer;
