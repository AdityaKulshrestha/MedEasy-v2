import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "../src/app/HomePage.tsx";
import SignIn from "./app/(auth)/SignIn.tsx";
import SignUp from "./app/(auth)/SignUp.tsx";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./providers/authProvider.js";
import { BrowserRouter, Routes, Route } from "react-router";
import axios from "axios";

const root = ReactDOM.createRoot(document.getElementById("root"));
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
