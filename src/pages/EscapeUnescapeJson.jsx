import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  IconButton,
  Paper,
  Tooltip,
} from "@mui/material";
import { ContentCopy, Download } from "@mui/icons-material";

const EscapeUnescapeJson = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleEscapeJson = () => {
    try {
      const escaped = JSON.stringify(inputText);
      setOutputText(escaped);
    } catch (err) {
      setOutputText("Error: Invalid JSON string.");
    }
  };

  const handleUnescapeJson = () => {
    try {
      const unescaped = JSON.parse(inputText);
      setOutputText(unescaped);
    } catch (err) {
      setOutputText("Error: Invalid escaped JSON string.");
    }
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(outputText);
  };

  const handleDownloadJson = () => {
    const blob = new Blob([outputText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "escaped_unescaped.json";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Box sx={{ p: 3, height: "calc(100vh - 64px)" }}>
      <Grid container spacing={2} alignItems="center" sx={{ height: "100%" }}>
        {/* Left Section - Input Box */}
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
            <Typography variant="h6">Input</Typography>
            <Box
              sx={{
                flex: 1,
                overflowY: "auto",
                maxHeight: "calc(100vh - 180px)",
              }}
            >
              <TextField
                fullWidth
                multiline
                minRows={15}
                placeholder="Enter JSON string here..."
                variant="outlined"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                sx={{ mb: 2 }}
              />
            </Box>
          </Paper>
        </Grid>

        {/* Middle Section - Escape & Unescape Buttons */}
        <Grid
          item
          xs={2}
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Tooltip title="Convert to escaped JSON format" arrow>
            <Button
              variant="contained"
              color="primary"
              onClick={handleEscapeJson}
              sx={{ width: "100%" }}
            >
              Escape JSON
            </Button>
          </Tooltip>

          <Tooltip title="Convert escaped JSON back to normal" arrow>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleUnescapeJson}
              sx={{ width: "100%" }}
            >
              Unescape JSON
            </Button>
          </Tooltip>
        </Grid>

        {/* Right Section - Output Box */}
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
              <Typography variant="h6">Output</Typography>
              <Box>
                <Tooltip title="Copy to clipboard">
                  <IconButton onClick={handleCopyToClipboard}>
                    <ContentCopy />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Download as JSON">
                  <IconButton onClick={handleDownloadJson}>
                    <Download />
                  </IconButton>
                </Tooltip>
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
                minRows={15}
                placeholder="Output will appear here..."
                variant="outlined"
                value={outputText}
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

export default EscapeUnescapeJson;
