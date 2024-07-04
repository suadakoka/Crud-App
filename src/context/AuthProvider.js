import React, { createContext, useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");

  async function loginAction(data) {
    const response = await fetch("https://localhost:7092/api/Auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    if (res.data) {
      setUser(null);
      setToken("");
    }
  }
  return (
    <AuthContext.Provider value={{ user, token, loginAction }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
