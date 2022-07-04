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
import RequirementsReview from "./pages/requirementsReview";
import LoggedinHome from "./pages/loggedinHome";
import Requirements from "./pages/requirements";
import Join from "./pages/join";
import Login from "./pages/login";
import Assessment from "./pages/assessment";
import Anchors from "./pages/anchors";
import Sandbox from "./pages/sandbox";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="spec" element={<Spec />} />
          <Route path="requirements" element={<Requirements />} />
          <Route path="requirementsreview" element={<RequirementsReview />} />
          <Route path="skills" element={<Assessment />} />
          <Route path="anchors" element={<Anchors />} />
          <Route path="join" element={<Join />} />
          <Route path="home" element={<Home />} />
          <Route path="loggedin-home" element={<LoggedinHome />} />
          <Route path="cred" element={<Cred />} />
          <Route path="login" element={<Login />} />
          <Route path="sandbox" element={<Sandbox />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
