import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  IconButton,
  Paper,
} from "@mui/material";
import { ContentCopy, Download } from "@mui/icons-material";

const Formatter = () => {
  const [jsonInput, setJsonInput] = useState("");
  const [formattedJson, setFormattedJson] = useState("");
  const [error, setError] = useState("");

  const handleFormatJson = () => {
    try {
      const parsedJson = JSON.parse(jsonInput);
      setFormattedJson(JSON.stringify(parsedJson, null, 2));
      setError("");
    } catch (err) {
      setError("Invalid JSON. Please check your input.");
      setFormattedJson("");
    }
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(formattedJson);
  };

  const handleDownloadJson = () => {
    const blob = new Blob([formattedJson], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "formatted.json";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Box sx={{ p: 3, height: "calc(100vh - 64px)" }}>
      <Grid container spacing={2} alignItems="center" sx={{ height: "100%" }}>
        {/* Left Section - JSON Input */}
        <Grid item xs={5} sx={{ height: "100%" }}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h6">Input JSON</Typography>
            <Box
              sx={{
                flex: 1,
                overflowY: "auto",
                maxHeight: "calc(100vh - 150px)",
              }}
            >
              <TextField
                fullWidth
                multiline
                minRows={8}
                placeholder="Enter JSON here..."
                variant="outlined"
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                error={!!error}
                helperText={error}
                sx={{ border: "none", outline: "none" }}
              />
            </Box>
          </Paper>
        </Grid>

        {/* Middle Section - Format Button */}
        <Grid
          item
          xs={2}
          sx={{
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleFormatJson}
            sx={{ height: "50px", width: "100%" }}
          >
            Format JSON
          </Button>
        </Grid>

        {/* Right Section - Formatted JSON Output */}
        <Grid item xs={5} sx={{ height: "100%" }}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h6">Formatted JSON</Typography>
              <Box>
                <IconButton onClick={handleCopyToClipboard}>
                  <ContentCopy />
                </IconButton>
                <IconButton onClick={handleDownloadJson}>
                  <Download />
                </IconButton>
              </Box>
            </Box>
            <Box
              sx={{
                flex: 1,
                overflowY: "auto",
                maxHeight: "calc(100vh - 150px)",
              }}
            >
              <TextField
                fullWidth
                multiline
                minRows={12}
                placeholder="Formatted JSON will appear here..."
                variant="outlined"
                value={formattedJson}
                InputProps={{ readOnly: true }}
                sx={{ border: "none", outline: "none" }}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Formatter;
