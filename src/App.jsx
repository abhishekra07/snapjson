import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./router";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  Container,
} from "@mui/material";
import { ThemeProviderWrapper } from "./context/ThemeContext";
import MobileWarning from "./components/MobileWarning";
import Footer from "./components/Footer";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

const App = () => {
  return (
    <ThemeProviderWrapper>
      <Router>
        <MobileWarning />
        <Navbar />
        <Container>
          <AppRouter />
        </Container>
        <Footer />
      </Router>
    </ThemeProviderWrapper>
  );
};

export default App;
