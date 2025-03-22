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
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          ":root":
            mode === "light"
              ? {
                  "--scrollbar-track": "#e0e0e0",
                  "--scrollbar-thumb": "#b0b0b0",
                  "--scrollbar-hover": "#909090",
                }
              : {
                  "--scrollbar-track": "#2e2e2e",
                  "--scrollbar-thumb": "#555",
                  "--scrollbar-hover": "#777",
                },
        },
      },
    },
  });
