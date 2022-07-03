import { useState, useEffect } from "react";
import Select from "react-select";

const AttributeSelector = ({
  category,
  handleChange,
  value,
  isMulti,
  placeholder,
}) => {
  const [state, setState] = useState();

  useEffect(() => {
    loadOptions().then((e) => setState(e));
  }, []);

  const loadOptions = () => {
    return fetch(`http://localhost:8000/attributes/${category}/`).then((res) =>
      res.json()
    );
  };

  return (
    <>
      <Select
        closeMenuOnSelect={true}
        defaultOptions
        cacheOptions
        getOptionLabel={(e) => e["name"]}
        getOptionValue={(e) => e["id"]}
        isMulti={isMulti}
        options={state}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

export default AttributeSelector;
