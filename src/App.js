import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Loginform from "./pages/Loginform/Loginform";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Loginform />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
