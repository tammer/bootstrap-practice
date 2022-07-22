import { Col, Collapse, Container, Row } from "react-bootstrap";
import OuterContainer from "../components/OuterContainer";
import Slider from "rc-slider";

const Sandbox = () => {
  const marks = {
    1: "1",
    7: "10",
    12: "50",
    18: "100",
    25: "500",
    32: "1k",
    40: "10k",
    50: "100k",
    60: "1M",
    70: "10M",
  };

  return (
    <OuterContainer>
      <br />
      <br />
      <br />
      <Row>
        <Col sm="3"></Col>
        <Col sm="9">
          <Row className="requirements-section">
            <Col sm="4" className="requirements-section-left">
              <h1>Organization</h1>
              Spec the organizational features that are important to you
            </Col>
            <Col sm="8" className="requirements-section-right">
              <h1>Size</h1>
              <h2>Number of Employees (range)</h2>
              <Slider
                range
                step={null}
                min={1}
                max={70}
                marks={marks}
                trackStyle={{
                  backgroundColor: "gray",
                  height: 5,
                  marginTop: "0px",
                }}
                dotStyle={{ borderColor: "gray" }}
                activeDotStyle={{
                  height: 0,
                  width: 0,
                  border: "0px",
                }}
                handleStyle={{
                  borderColor: "gray",
                  height: 9,
                  width: 9,
                  // marginLeft: -14,
                  marginTop: -2,
                  backgroundColor: "gray",
                }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </OuterContainer>
  );
};

export default Sandbox;
