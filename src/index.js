import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Spec from "./pages/spec";
import Home from "./pages/home";
import Skills from "./pages/skills";
import Cred from "./pages/cred";
import Signup from "./pages/signup";
import LoggedinHome from "./pages/loggedinHome";
import Requirements from "./pages/requirements";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="spec" element={<Spec />} />
          <Route path="requirements" element={<Requirements />} />
          <Route path="signup" element={<Signup />} />
          <Route path="skills" element={<Skills />} />
          <Route path="home" element={<Home />} />
          <Route path="loggedin-home" element={<LoggedinHome />} />
          <Route path="cred" element={<Cred />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
