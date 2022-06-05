import Section from "./Section";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Select from "react-select";

function handleInput(e) {
  let temp = e.target.value.replace(/\D/g, "");
  if (temp.length > 6) {
    temp = temp.slice(0, -1);
  }
  temp = temp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  e.target.value = temp;
}

const SalarySection = () => {
  return (
    <Section title="Salary">
      <Row>
        <Col>
          <input
            maxlength="7"
            size="7"
            type="text"
            onChange={(e) => handleInput(e)}
          />
        </Col>
        <Col>
          <Select
            defaultValue={quickMake(["USD"])}
            options={quickMake(["USD", "CAD", "EUR", "GBP", "Yen"])}
          />
        </Col>
      </Row>
    </Section>
  );
};

export default SalarySection;

function quickMake(y) {
  return y.map((e) => ({ value: e, label: e }));
}
