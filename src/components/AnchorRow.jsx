import React, { useState, useEffect } from "react";
import { Row, Col, Badge, OverlayTrigger, Tooltip } from "react-bootstrap";

const AnchorRow = ({ skill, isHeadingRow = false }) => {
  const [anchorList, setAnchorList] = useState(null);

  function qualify(x) {
    if (x >= 90) return "authority";
    else if (x >= 80) return "expert";
    else if (x >= 70) return "highly proficient";
    else if (x >= 60) return "proficient";
    else if (x >= 50) return "highly capable";
    else if (x >= 40) return "capable";
    else if (x >= 20) return "novice";
    else return "no experience";
  }

  function getAnchors() {
    const skill_ = isHeadingRow ? "Fortran" : skill;
    const z = fetch(
      `${process.env.REACT_APP_API}/endorsements/?skill=${encodeURIComponent(
        skill_
      )}`,
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

  const renderTooltip = (message) => <Tooltip>{message}</Tooltip>;

  return (
    <>
      {anchorList ? (
        <Row style={{ marginLeft: "50px" }}>
          {anchorList.map((e) => (
            <Col key={skill + e["initials"] + Math.random()}>
              {isHeadingRow ? (
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip(e["full_name"])}
                >
                  <Badge pill bg="success">
                    {e["initials"]}
                  </Badge>
                </OverlayTrigger>
              ) : e["level"] ? (
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip(
                    "Calibrated with " +
                      e["initials"] +
                      " @ " +
                      qualify(e["level"]) +
                      " on " +
                      e["created_at"]
                  )}
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/72/OOjs_UI_icon_link-ltr.svg" />
                </OverlayTrigger>
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
