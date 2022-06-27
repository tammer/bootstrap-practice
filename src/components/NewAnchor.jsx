import React, { useState } from "react";
import SkillSelector from "./SkillSelector";
import LevelSelector from "./LevelSelector";

const NewAnchor = ({ onSuccess }) => {
  const token = localStorage.getItem("token");
  const [receiverEmail, setReceiverEmail] = useState();
  const [skill, setSkill] = useState();
  const [level, setLevel] = useState();
  const [message, setMessage] = useState();

  async function postAnchor(anchor) {
    return fetch("http://localhost:8000/anchors/", {
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
    const res = await postAnchor({
      receiver_email: receiverEmail,
      skill: skill,
      level: level,
    });
    if (res.ok) {
      res.json().then((j) => {
        setMessage("Success");
        onSuccess();
      });
    } else {
      res.json().then((j) => {
        setMessage(j);
      });
    }
  };

  return (
    <>
      <h1>New Anchor Invite</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Recepient email address</p>
          <input
            type="text"
            onChange={(e) => setReceiverEmail(e.target.value)}
          />
        </label>
        <SkillSelector
          value={skill}
          handleChange={(e) => setSkill(e["name"])}
        />
        <LevelSelector
          value={level}
          handleChange={(e) => setLevel(e["name"])}
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
