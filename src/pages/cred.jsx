import { Container, Row, Col, Table } from "react-bootstrap";
import Select from "react-select";
import "./../App.css";

const Cred = () => {
  return (
    <Container>
      <Row>
        <Col sm={12}>
          <h1>Credability</h1>
          <div className="d-inline-block">
            The person I will level set with is{" "}
          </div>
          <div className="d-inline-block">
            <Select
              defaultValue={quickMake(["at my level"])}
              options={quickMake([
                "at my level",
                "at or above my level",
                "above my level",
              ])}
            />
          </div>
          <div className="d-inline-block">at</div>
          <div className="d-inline-block">
            <Select
              isMulti={true}
              options={quickMake(["Python", "C++", "Ruby", "Postgres"])}
            />
          </div>
          <div>
            Level Set Link:
            <a href="#">https://backgrounprocess.com/{genLink()}</a>
          </div>
          <div>
            Send this link to up to 3 people for whom the comparision is
            accurate. OR have us send this email. When they confirm your
            comparision, both your and thier credability is increased.
            (Credabiilty algo)
          </div>
        </Col>
      </Row>
    </Container>
  );
};

function quickMake(y) {
  return y.map((e) => ({ value: e, label: e }));
}

function genLink() {
  return "F5K2";
  //   Math.random().toString(36).slice(2, 7);
}

export default Cred;
