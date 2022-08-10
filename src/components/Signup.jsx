import React, { useState, useOutletContext } from "react";
import { useNavigate } from "react-router-dom";
import { showMessage } from "../helpers/helpers";

const Signup = ({
  minimal = true,
  requireInvite = false,
  formState,
  setMessage,
}) => {
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [code, setCode] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  function postSignup(formData) {
    const payload = {
      email: formData["email"],
      password: formData["password"],
      profile: formState,
    };
    console.log("post", payload);
    return fetch(process.env.REACT_APP_API + "/signup/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(payload),
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
            localStorage.setItem("userName", email);
            setMessage(["Yes", null]);
            showMessage(
              setMessage,
              "Welcome to the Platform.  You are signed up."
            );
            navigate("/home");
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
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <input
            placeholder="password"
            type="text"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {minimal ? (
          ""
        ) : (
          <>
            <div>
              <p>First Name</p>
              <input
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div>
              <p>Last Name</p>
              <input
                type="text"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </>
        )}

        {requireInvite ? (
          <div>
            <p>Invite Code</p>
            <input type="text" onChange={(e) => setCode(e.target.value)} />
          </div>
        ) : (
          ""
        )}

        <div>
          <button className="bp-button" type="submit">
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
