import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Select from "react-select";

const SalarySelector = ({ id, handler }) => {
  function handleInput(e) {
    let temp = e.target.value.replace(/\D/g, "");
    if (temp.length > 6) {
      temp = temp.slice(0, -1);
    }
    temp = temp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    e.target.value = temp;
    handler(id, [{ label: temp, value: temp }]);
  }

  return (
    <Row>
      <Col sm="auto" style={{ paddingRight: "0px" }}>
        <input
          style={{ height: "37px" }}
          maxLength="7"
          size="7"
          type="text"
          onChange={(e) => handleInput(e)}
        />
      </Col>
      <Col style={{ paddingLeft: "2px" }}>
        <Select
          defaultValue={quickMake(["USD"])}
          options={quickMake(["USD", "CAD", "EUR", "GBP", "Yen"])}
        />
      </Col>
    </Row>
  );
};

export default SalarySelector;

function quickMake(y) {
  return y.map((e) => ({ value: e, label: e }));
}
