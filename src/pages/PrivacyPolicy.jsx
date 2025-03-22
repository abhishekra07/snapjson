import React from "react";
import { Container, Typography, Box } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Container sx={{ my: 6, maxWidth: "800px", textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", textAlign: "center", mb: 3 }}
      >
        Privacy Policy
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{ textAlign: "center", mb: 4, fontStyle: "italic" }}
      >
        Last updated: March 22, 2025
      </Typography>

      <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold", mt: 3 }}>
          Logs
        </Typography>
        <Typography>
          Like most websites, SnapJSON collects non-personal information about
          users when they access the platform. This may include browser type,
          operating system, and internet service provider details to improve the
          user experience.
        </Typography>

        <Typography variant="h6" sx={{ fontWeight: "bold", mt: 3 }}>
          Cookies
        </Typography>
        <Typography>
          SnapJSON uses cookies to track user preferences and optimize
          performance. Users can configure their browsers to refuse cookies or
          notify them when a cookie is sent.
        </Typography>

        <Typography variant="h6" sx={{ fontWeight: "bold", mt: 3 }}>
          Data Collection
        </Typography>
        <Typography>
          SnapJSON does not store or retain any JSON data submitted by users.
          Any data processed within the tool remains on the client-side and is
          not stored on our servers.
        </Typography>

        <Typography variant="h6" sx={{ fontWeight: "bold", mt: 3 }}>
          Third-Party Services
        </Typography>
        <Typography>
          We may use third-party services such as Google Analytics for traffic
          analysis and performance monitoring. These services may collect
          non-personal data to improve SnapJSON’s functionality.
        </Typography>

        <Typography variant="h6" sx={{ fontWeight: "bold", mt: 3 }}>
          Security
        </Typography>
        <Typography>
          We implement industry-standard security measures to protect user data.
          However, since SnapJSON does not store JSON data, privacy is
          inherently ensured.
        </Typography>

        <Typography variant="h6" sx={{ fontWeight: "bold", mt: 3 }}>
          Advertising
        </Typography>
        <Typography>
          SnapJSON may display advertisements via third-party ad networks. These
          ads may use cookies to provide relevant content but do not track or
          store personal information.
        </Typography>

        <Typography variant="h6" sx={{ fontWeight: "bold", mt: 3 }}>
          Policy Changes
        </Typography>
        <Typography>
          This privacy policy may be updated from time to time. Users are
          encouraged to review this page periodically for any changes.
        </Typography>

        <Typography variant="h6" sx={{ fontWeight: "bold", mt: 3 }}>
          Contact
        </Typography>
        <Typography>
          If you have any questions regarding this privacy policy, please
          contact us at support@snapjson.com.
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
