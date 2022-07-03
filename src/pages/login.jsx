import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();

  async function loginUser(creds) {
    return fetch("http://localhost:8000/api-token-auth/", {
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
        }
      });
    } else {
      res.json().then((j) => {
        setToken(j["non_field_errors"][0]);
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <br />
      {token}
    </>
  );
};

export default Login;
