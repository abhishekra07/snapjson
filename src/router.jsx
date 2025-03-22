import React from "react";
import { Routes, Route } from "react-router-dom";
import Formatter from "./components/Formatter";
import MinifyJson from "./components/MinifyJson";
import JsonToYaml from "./components/JsonToYaml";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Formatter />} />
      <Route path="/minify-json" element={<MinifyJson />} />
      <Route path="/json-to-yaml" element={<JsonToYaml />} />
    </Routes>
  );
};

export default AppRouter;
