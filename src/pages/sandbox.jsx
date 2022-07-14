import Slider from "rc-slider";
import { useState, useEffect } from "react";

import { Col, Container, Row } from "react-bootstrap";
import { FrozenLevelSlider } from "../components/LevelSlider";

const Sandbox = () => {
  const [state, setState] = useState();

  function fetchList() {
    return fetch(`${process.env.REACT_APP_API}/anchors/received`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        console.log(response.status);
        if (response.status == 200) {
          return response.json();
        } else {
          return { one: 1 };
        }
        // return response.json().then((parsedJson) => ({ json: parsedJson }));
      })
      .then((x) => {
        // console.log("here", x);
        setState(x);
      });
  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <Container>
        <br />
        <Row>
          <Col sm="5">{state ? JSON.stringify(state) : "loading"}</Col>
        </Row>
      </Container>
    </>
  );
};

export default Sandbox;
