import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#52B788",
      },
      secondary: {
        main: mode === "light" ? "#FF9800" : "#FFC107",
      },
      background: {
        default: mode === "light" ? "#F0F4EF" : "#1B1F1D",
        paper: mode === "light" ? "#FFFFFF" : "#252A27",
      },
      text: {
        primary: mode === "light" ? "#2E2E2E" : "#E3E3E3",
      },
    },
  });
