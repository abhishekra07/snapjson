import React from "react";
import { Routes, Route } from "react-router-dom";
import Formatter from "./pages/Formatter";
import MinifyJson from "./pages/MinifyJson";
import JsonToYaml from "./pages/JsonToYaml";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import EscapeUnescapeJson from "./pages/EscapeUnescapeJson";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Formatter />} />
      <Route path="/minify-json" element={<MinifyJson />} />
      <Route path="/json-to-yaml" element={<JsonToYaml />} />
      <Route path="/escape-unescape" element={<EscapeUnescapeJson />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
};

export default AppRouter;
