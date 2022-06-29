import React, { useState } from "react";
import SkillSelector from "./SkillSelector";
import LevelSelector from "./LevelSelector";

const NewAnchor = ({ onSuccess }) => {
  const token = localStorage.getItem("token");
  const [receiverEmail, setReceiverEmail] = useState();
  const [skills, setSkills] = useState();
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
    skills.map((skill) =>
      postAnchor({
        receiver_email: receiverEmail,
        skill: skill,
        level: level,
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
          isMulti={true}
          handleChange={(e) => setSkills(e.map((item) => item["name"]))}
        />
        <LevelSelector handleChange={(e) => setLevel(e["name"])} />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {message}
    </>
  );
};

export default NewAnchor;
