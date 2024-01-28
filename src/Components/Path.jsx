import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

const Path = () => {
  return (
    <>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default Path;
