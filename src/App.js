import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
// import AuthProvider from "./hooks/AuthProvider"

function App() {
  return (
    // <>
    // <div className="App">
    //   <AuthProvider>{}</AuthProvider>
    // </div>

    <Routes>
      <Route>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
    // </>
  );
}

export default App;
