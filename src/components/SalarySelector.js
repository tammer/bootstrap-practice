import { useState, useEffect } from "react";
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
    <div className="salary-selector">
      <div>
        <input
          className="salary-selector-input"
          maxLength="7"
          size="7"
          type="text"
          value={state["amount"]}
          onChange={(e) => handleInput(e)}
        />
      </div>
      <div>
        <Select
          options={quickMake(["USD", "CAD", "EUR", "GBP"])}
          closeMenuOnSelect={true}
          getOptionLabel={(e) => e["name"]}
          getOptionValue={(e) => e["id"]}
          placeholder={"Select currency"}
          value={{ id: state["ccy"], name: state["ccy"] }}
          onChange={handleCcyChange}
        />
      </div>
    </div>
  );
};

export default SalarySelector;

function quickMake(y) {
  return y.map((e) => ({ id: e, name: e }));
}
