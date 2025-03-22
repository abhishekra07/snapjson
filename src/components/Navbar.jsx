import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Switch,
  Button,
  Box,
} from "@mui/material";
import { ThemeContext } from "../context/ThemeContext";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { Link } from "react-router-dom";
// import logo from "../assets/logo.png"; // Import logo
// import logo from "../assets/logo-2.png"; // Import logo
import logo from "../assets/logo-3.png"; // Import logo

const Navbar = () => {
  const { themeMode, toggleTheme } = useContext(ThemeContext);

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Left Side - Logo */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
            cursor: "pointer",
          }}
          component={Link}
          to="/"
        >
          <img
            src={logo}
            alt="SnapJSON Logo"
            style={{ height: "70px", marginRight: 10 }}
          />
          {/* <Typography variant="h6" component="div">
            SnapJSON
          </Typography> */}
        </Box>

        {/* Right Side - Navigation Links */}
        <Box>
          <Button color="inherit" component={Link} to="/">
            Formatter
          </Button>
          <Button color="inherit" component={Link} to="/minify-json">
            Minify JSON
          </Button>
          <Button color="inherit" component={Link} to="/json-to-yaml">
            JSON to YAML
          </Button>
          <Button color="inherit" component={Link} to="/escape-unescape">
            Escape/Unescape
          </Button>
          <IconButton color="inherit" onClick={toggleTheme}>
            {themeMode === "light" ? <Brightness4 /> : <Brightness7 />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
