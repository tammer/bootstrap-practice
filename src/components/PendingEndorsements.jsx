import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import PendingEndorsementSummary from "./PendingEndorsementSummary";

const PendingEndorsements = ({ onChange }) => {
  const [list, setList] = useState();

  function fetchList() {
    return fetch(`${process.env.REACT_APP_API}/anchors/received`, {
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
                onChange={(e) => fetchList().then((res) => onChange())}
              />
            ))}
      </Container>
    </>
  );
};

export default PendingEndorsements;
