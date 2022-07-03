import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Select from "react-select";

const SalarySelector = ({ handleChange, value }) => {
  const [state, setState] = useState(value);
  useEffect(() => {
    setState(value);
  });

  function handleAmountChange(amount) {
    const newState = { amount: amount, ccy: state["ccy"] };
    setState(newState);
    return handleChange(newState);
  }

  function handleCcyChange(ccy) {
    const newState = { amount: state["amount"], ccy: ccy["id"] };
    setState(newState);
    return handleChange(newState);
  }

  function handleInput(e) {
    let temp = e.target.value.replace(/\D/g, "");
    if (temp.length > 6) {
      temp = temp.slice(0, -1);
    }
    temp = temp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    e.target.value = temp;
    return handleAmountChange(temp);
  }

  return (
    <Row>
      <Col sm="auto" style={{ paddingRight: "0px" }}>
        <input
          style={{ height: "37px" }}
          maxLength="7"
          size="7"
          type="text"
          // value={selectedOption[0] ? selectedOption[0]["label"] : ""}
          value={state["amount"]}
          onChange={(e) => handleInput(e)}
        />
      </Col>
      <Col style={{ paddingLeft: "2px" }}>
        <Select
          // defaultValue={quickMake(["USD"])}
          // dont forget to make it a simple dropdown
          options={quickMake(["USD", "CAD", "EUR", "GBP", "JPY"])}
          closeMenuOnSelect={true}
          getOptionLabel={(e) => e["name"]}
          getOptionValue={(e) => e["id"]}
          placeholder={"Select currency"}
          value={{ id: state["ccy"], name: state["ccy"] }}
          onChange={handleCcyChange}
        />
      </Col>
    </Row>
  );
};

export default SalarySelector;

function quickMake(y) {
  return y.map((e) => ({ id: e, name: e }));
}
