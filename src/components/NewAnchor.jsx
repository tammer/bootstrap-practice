import React, { useState } from "react";

import GeneralCreatable from "../components/GeneralCreatable";
import GeneralSelector from "./GeneralSelector";

const NewAnchor = ({ onSuccess }) => {
  const token = localStorage.getItem("token");
  const [receiverEmail, setReceiverEmail] = useState();
  const [skills, setSkills] = useState();
  const [message, setMessage] = useState();

  async function postAnchor(anchor) {
    return fetch(process.env.REACT_APP_API + "/anchors/", {
      method: "POST",
      headers: {
        Authorization: `Token ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(anchor),
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    skills.map((skill) =>
      postAnchor({
        receiver_email: receiverEmail["id"],
        skill: skill["skill"][["name"]],
      }).then(
        (res) => {
          setMessage(res.status === 201 ? "Success" : "Error");
          onSuccess();
        },
        (res) => {
          setMessage(res);
        }
      )
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <GeneralCreatable
          isClearable
          api="/friends/"
          handleChange={setReceiverEmail}
          isMulti={false}
          value={receiverEmail}
          placeholder="email"
          getOptionLabel={(e) => e["display_name"]}
          getOptionValue={(e) => e["id"]}
          getNewOptionData={(a, b) => {
            return { id: a, display_name: b };
          }}
        />

        <GeneralSelector
          api="/assessments/"
          handleChange={setSkills}
          isMulti
          value={skills}
          placeholder="select skills to calibrate on"
          getOptionLabel={(e) => e["skill"]["name"]}
          getOptionValue={(e) => e["skill"]["id"]}
        />

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {message}
    </>
  );
};

export default NewAnchor;
