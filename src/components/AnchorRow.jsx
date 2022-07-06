import React, { useState, useEffect } from "react";
import { Row, Col, Badge } from "react-bootstrap";

const AnchorRow = ({ skill, isHeadingRow = false }) => {
  const [anchorList, setAnchorList] = useState(null);

  function getAnchors() {
    const skill_ = isHeadingRow ? "Fortran" : skill;
    const z = fetch(
      `http://localhost:8000/anchors/?skill=${encodeURIComponent(skill_)}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((j) => setAnchorList(j));
  }

  useEffect(() => {
    getAnchors();
  }, []);

  return (
    <>
      {anchorList ? (
        <Row style={{ marginLeft: "50px" }}>
          {anchorList.map((e) => (
            <Col key={skill + e["initials"] + Math.random()}>
              {isHeadingRow ? (
                <Badge pill bg="success">
                  {e["initials"]}
                </Badge>
              ) : e["level"] ? (
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/72/OOjs_UI_icon_link-ltr.svg" />
              ) : (
                ""
              )}
            </Col>
          ))}
        </Row>
      ) : (
        ""
      )}
    </>
  );
};

export default AnchorRow;
