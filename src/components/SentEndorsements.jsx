import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import SentEndorsementSummary from "./SentEndorsementSummary";

const SentEndorsements = ({ onChange }) => {
  const [list, setList] = useState();

  function fetchList() {
    return fetch(`${process.env.REACT_APP_API}/anchors/sent`, {
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
              <SentEndorsementSummary
                key={"sentendorsement" + e["id"]}
                spec={e}
                onChange={(e) => fetchList().then((res) => onChange())}
              />
            ))}
      </Container>
    </>
  );
};

export default SentEndorsements;
