import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./App.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cred from "./pages/cred";
import LoggedinHome from "./pages/loggedinHome";
import Requirements from "./pages/requirements2";
import Login from "./pages/login";
import Assessment from "./pages/assessment";
import Anchors from "./pages/anchors";
// import Sandbox from "./pages/sandbox";
// import Sandbox from "./pages/sandbox_range_slider";
// import Sandbox from "./pages/sandbox_basic";
import Sandbox from "./pages/sandbox_basic2";
import Landing from "./pages/landing";
import Home from "./pages/home";
import Opps from "./pages/opps";
import About from "./pages/about";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="sandbox" element={<Sandbox />} />
        <Route path="/" element={<App />}>
          <Route path="about" element={<About />} />
          <Route path="" element={<Landing />} />
          <Route path="home" element={<Home />} />
          <Route path="requirements" element={<Requirements />} />
          <Route path="opps" element={<Opps />} />
          <Route path="skills" element={<Assessment />} />
          <Route path="anchors" element={<Anchors />} />
          <Route path="landing" element={<Landing />} />
          <Route path="loggedin-home" element={<LoggedinHome />} />
          <Route path="cred" element={<Cred />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
