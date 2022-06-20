import React, { useState } from "react";

const Login = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [sessionid, setSessionid] = useState(localStorage.getItem("sessionid"));

  async function loginUser(creds) {
    return fetch("http://localhost:8000/login/", {
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
        localStorage.setItem("sessionid", j["sessionid"]);
        setSessionid(j["sessionid"]);
      });
    } else {
      res.json().then((j) => {
        setSessionid(j["non_field_errors"][0]);
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
      {sessionid}
    </>
  );
};

export default Login;
