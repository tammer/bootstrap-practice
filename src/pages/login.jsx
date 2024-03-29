import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();

  async function loginUser(creds) {
    return fetch(process.env.REACT_APP_API + "/api-token-auth/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(creds),
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg(null);
    const res = await loginUser({ username: username, password: password });
    if (res.ok) {
      res.json().then((j) => {
        localStorage.setItem("token", j["token"]);
        localStorage.setItem("userName", username);
        setToken(j["token"]);
        if (localStorage.getItem("next")) {
          const n = localStorage.getItem("next");
          localStorage.removeItem("next");
          navigate(n);
        } else {
          navigate("/home");
        }
      });
    } else {
      res.json().then((j) => {
        setErrorMsg("Unable to login with the credentials provided");
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div style={{ textAlign: "center", marginTop: "100px" }}>
          <div>
            <input
              placeholder="email address"
              type="text"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <br />
          <div>
            <input
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <div>
            <button className="bp-button" type="submit">
              Log in
            </button>
            <br />
            <br />
            <div style={{ color: "red" }}>{errorMsg}</div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
