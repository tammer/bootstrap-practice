import { useState, useEffect } from "react";
import Select from "react-select";

const GeneralSelector = ({
  api,
  handleChange,
  value,
  isMulti,
  placeholder,
  getOptionLabel = (e) => e["name"],
  getOptionValue = (e) => e["id"],
}) => {
  const [state, setState] = useState();

  useEffect(() => {
    loadOptions().then((e) => setState(e));
  }, []);

  const loadOptions = () => {
    if (api[0] != "/") {
      api = "/" + api;
    }
    if (api[api.length - 1] != "/") {
      api = api + "/";
    }
    return fetch(`${process.env.REACT_APP_API}${api}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }).then((res) => res.json());
  };

  return (
    <>
      <Select
        closeMenuOnSelect={true}
        defaultOptions
        getOptionLabel={getOptionLabel}
        getOptionValue={getOptionValue}
        isMulti={isMulti}
        options={state}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        isClearable={false}
      />
    </>
  );
};

export default GeneralSelector;
