import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  IconButton,
  Paper,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Tooltip,
} from "@mui/material";
import { ContentCopy, Download, UploadFile } from "@mui/icons-material";

const Formatter = () => {
  const [jsonInput, setJsonInput] = useState("");
  const [formattedJson, setFormattedJson] = useState("");
  const [error, setError] = useState("");
  const [indentation, setIndentation] = useState(2); // Default to 2 spaces

  const handleFormatJson = () => {
    try {
      const parsedJson = JSON.parse(jsonInput);
      setFormattedJson(JSON.stringify(parsedJson, null, indentation));
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

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target.result;
        const parsedJson = JSON.parse(content);
        setJsonInput(content);
        setFormattedJson(JSON.stringify(parsedJson, null, indentation));
        setError("");
      } catch (err) {
        setError("Invalid JSON file.");
        setJsonInput("");
        setFormattedJson("");
      }
    };
    reader.readAsText(file);
  };

  const handleLoadDummyData = () => {
    const sampleJson = {
      name: "John Doe",
      age: 30,
      email: "johndoe@example.com",
      address: {
        street: "123 Main St",
        city: "New York",
        zip: "10001",
      },
      skills: ["JavaScript", "React", "Node.js"],
    };

    setJsonInput(JSON.stringify(sampleJson, null, 2));
    // setFormattedJson(JSON.stringify(sampleJson, null, indentation));
    setError("");
  };

  return (
    <Box sx={{ p: 3, height: "calc(100vh - 64px)" }}>
      <Grid container spacing={2} alignItems="center" sx={{ height: "100%" }}>
        {/* Left Section - JSON Input & File Upload */}
        <Grid item xs={5} sx={{ height: "100%" }}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              minHeight: "90vh",
            }}
          >
            <Typography variant="h6">Input JSON</Typography>
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
                placeholder="Enter JSON here..."
                variant="outlined"
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                error={!!error}
                helperText={error}
                sx={{ border: "none", outline: "none", mb: 2 }}
              />
            </Box>
          </Paper>
        </Grid>

        {/* Middle Section - Format Button & Indentation Selector */}
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
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Button
              variant="contained"
              component="label"
              startIcon={<UploadFile />}
              sx={{ textTransform: "none" }}
            >
              Upload JSON
              <input
                type="file"
                accept=".json,.txt"
                hidden
                onChange={handleFileUpload}
              />
            </Button>
          </Box>

          <FormControl sx={{ width: "100%" }}>
            <InputLabel>Indentation</InputLabel>
            <Select
              value={indentation}
              onChange={(e) => setIndentation(e.target.value)}
              label="Indentation"
            >
              <MenuItem value={1}>1 Tab</MenuItem>
              <MenuItem value={2}>2 Tabs</MenuItem>
              <MenuItem value={3}>3 Tabs</MenuItem>
              <MenuItem value={4}>4 Tabs</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant="contained"
            color="primary"
            onClick={handleFormatJson}
            sx={{ textTransform: "none" }}
          >
            Format
          </Button>

          {/* Load Dummy Data Button with Tooltip */}
          <Tooltip title="Click to load sample JSON to begin with" arrow>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleLoadDummyData}
              sx={{ textTransform: "none" }}
            >
              Load Example
            </Button>
          </Tooltip>
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
              minHeight: "90vh",
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
                minRows={15}
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
