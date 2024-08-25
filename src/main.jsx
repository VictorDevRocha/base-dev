import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { Login } from "./login";
import { Register } from "./register";
import { Dashboard } from "./dashboard";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <Routes>
          <Route element={<App />}>
            <Route index path="/" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
