import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import NewAnchor from "../components/NewAnchor";

const Anchors = () => {
  const token = localStorage.getItem("token");
  const [anchorList, setAnchorList] = useState();

  useEffect(() => {
    fetchAnchors();
  }, []);

  async function fetchAnchors() {
    const z = await fetch(`${process.env.REACT_APP_API}/anchors/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Token ${token}`,
      },
    });
    const y = await z.json();
    setAnchorList(y);
  }

  function destroy(id) {
    fetch(`${process.env.REACT_APP_API}/anchor/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    }).then((e) => fetchAnchors());
  }

  function accept(id) {
    fetch(`${process.env.REACT_APP_API}/anchor/${id}/accept`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    }).then((e) => fetchAnchors());
  }

  function decline(id) {
    fetch(`${process.env.REACT_APP_API}/anchor/${id}/decline`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    }).then((e) => fetchAnchors());
  }

  function renderDestoryButton(id) {
    return (
      <>
        <Button className="btn btn-sm btn-danger" onClick={(e) => destroy(id)}>
          X
        </Button>
      </>
    );
  }

  function renderDeclineButton(id) {
    return (
      <>
        <Button className="btn btn-sm btn-danger" onClick={(e) => decline(id)}>
          Decline
        </Button>
      </>
    );
  }

  function renderAcceptButton(id) {
    return (
      <>
        <Button className="btn btn-sm" onClick={(e) => accept(id)}>
          Accept
        </Button>
      </>
    );
  }

  function renderSkill({ name, id, decline, destroy, accept }) {
    return (
      <>
        {name}
        {accept && renderAcceptButton(id)}
        {destroy && renderDestoryButton(id)}
        {decline && renderDeclineButton(id)},
      </>
    );
  }

  function renderLevel({ level, skills, destroy, accept, decline }) {
    return (
      <div className="simple-indent">
        {level}:
        {skills.map((skill) => (
          <span key={skill["id"]}>
            {renderSkill({
              name: skill["skill"],
              id: skill["id"],
              destroy: destroy,
              accept: accept,
              decline: decline,
            })}
          </span>
        ))}
      </div>
    );
  }

  function renderPartner({ partner, levels, destroy, accept, decline }) {
    return (
      <div className="simple-indent">
        {partner}:
        {Object.keys(levels).map((level) => (
          <div key={level}>
            {renderLevel({
              level: level,
              skills: levels[level],
              destroy: destroy,
              accept: accept,
              decline: decline,
            })}
          </div>
        ))}
      </div>
    );
  }

  function renderCategory(category, { accept, destroy, decline }) {
    return Object.keys(category).map((partner) => (
      <div key={partner}>
        {renderPartner({
          partner: partner,
          levels: category[partner],
          accept: accept,
          decline: decline,
          destroy: destroy,
        })}
      </div>
    ));
  }

  function renderSections() {
    return (
      <>
        <h1>My Anchors</h1>
        <h2>Accepted</h2>
        {renderCategory(anchorList["accepted"], {})}
        <h2>Received (Pending Acceptance)</h2>
        {renderCategory(anchorList["received"]["pending"], {
          accept: true,
          decline: true,
        })}
        <h2>Received (Declined)</h2>
        {renderCategory(anchorList["received"]["declined"], {})}
        <h2>Sent (pending acceptance)</h2>
        {renderCategory(anchorList["sent"]["pending"], { destroy: true })}
        <h2>Sent (declined)</h2>
        {renderCategory(anchorList["sent"]["declined"], {})}
        <NewAnchor onSuccess={fetchAnchors} />
      </>
    );
  }

  return <>{anchorList ? renderSections() : ""}</>;
};

export default Anchors;
