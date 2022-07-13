import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PendingEndorsementSummary from "./PendingEndorsementSummary";

const PendingEndorsements = () => {
  const [list, setList] = useState();

  function fetchList() {
    fetch(`${process.env.REACT_APP_API}/anchors/received`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((j) => setList(j));
  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <Container>
        {!list
          ? "loading"
          : list.map((e) => (
              <PendingEndorsementSummary
                key={"pendingendorsement" + e["id"]}
                spec={e}
              />
            ))}
      </Container>
    </>
  );
};

export default PendingEndorsements;
