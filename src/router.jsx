import React from "react";
import { Routes, Route } from "react-router-dom";
import Formatter from "./pages/Formatter";
import MinifyJson from "./pages/MinifyJson";
import JsonToYaml from "./pages/JsonToYaml";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Formatter />} />
      <Route path="/minify-json" element={<MinifyJson />} />
      <Route path="/json-to-yaml" element={<JsonToYaml />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
};

export default AppRouter;
