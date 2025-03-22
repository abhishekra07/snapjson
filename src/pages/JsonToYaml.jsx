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
import { ContentCopy, Download, UploadFile } from "@mui/icons-material";
import yaml from "js-yaml";

const JsonToYaml = () => {
  const [jsonInput, setJsonInput] = useState("");
  const [yamlOutput, setYamlOutput] = useState("");
  const [error, setError] = useState("");

  const handleConvertToYaml = () => {
    try {
      const parsedJson = JSON.parse(jsonInput);
      const convertedYaml = yaml.dump(parsedJson);
      setYamlOutput(convertedYaml);
      setError("");
    } catch (err) {
      setError("Invalid JSON. Please check your input.");
      setYamlOutput("");
    }
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(yamlOutput);
  };

  const handleDownloadYaml = () => {
    const blob = new Blob([yamlOutput], { type: "text/yaml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "converted.yaml";
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
        const convertedYaml = yaml.dump(parsedJson);
        setYamlOutput(convertedYaml);
        setError("");
      } catch (err) {
        setError("Invalid JSON file.");
        setJsonInput("");
        setFormattedJson("");
      }
    };
    reader.readAsText(file);
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
                minRows={15}
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

        {/* Middle Section - Convert Button */}
        <Grid
          item
          xs={2}
          sx={{
            textAlign: "center",
            flexDirection: "column",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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
          <Button
            variant="contained"
            color="primary"
            onClick={handleConvertToYaml}
            sx={{ height: "50px", width: "100%" }}
          >
            Convert to YAML
          </Button>
        </Grid>

        {/* Right Section - YAML Output */}
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
              <Typography variant="h6">YAML Output</Typography>
              <Box>
                <IconButton onClick={handleCopyToClipboard}>
                  <ContentCopy />
                </IconButton>
                <IconButton onClick={handleDownloadYaml}>
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
                placeholder="Converted YAML will appear here..."
                variant="outlined"
                value={yamlOutput}
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

export default JsonToYaml;
