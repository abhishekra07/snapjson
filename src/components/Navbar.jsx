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

const Navbar = () => {
  const { themeMode, toggleTheme } = useContext(ThemeContext);

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Left Side - Logo */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            SnapJSON
          </Link>
        </Typography>

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
          <IconButton color="inherit" onClick={toggleTheme}>
            {themeMode === "light" ? <Brightness4 /> : <Brightness7 />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
