import React, { useState } from "react";

const Signup = ({ onSuccess }) => {
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [code, setCode] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();

  function postSignup(formData) {
    return fetch(process.env.REACT_APP_API + "/signup/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(formData),
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    postSignup({
      email: email,
      password: password,
      first_name: firstName,
      last_name: lastName,
      code: code,
    }).then(
      (res) => {
        if (res.status === 201) {
          res.json().then((j) => {
            localStorage.setItem("token", j["token"]);
            localStorage.setItem("userName", firstName);
            setMessage(localStorage.getItem("token"));
          });
        } else {
          res.json().then((j) => setMessage(j));
        }
      },
      (res) => {
        setMessage("Error Handled:");
      }
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <p>email address</p>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label>
          <p>Password</p>
          <input type="text" onChange={(e) => setPassword(e.target.value)} />
        </label>

        <label>
          <p>First Name</p>
          <input type="text" onChange={(e) => setFirstName(e.target.value)} />
        </label>

        <label>
          <p>Last Name</p>
          <input type="text" onChange={(e) => setLastName(e.target.value)} />
        </label>

        <label>
          <p>Invite Code</p>
          <input type="text" onChange={(e) => setCode(e.target.value)} />
        </label>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {message}
    </>
  );
};

export default Signup;
