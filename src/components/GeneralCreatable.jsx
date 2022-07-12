import { useState, useEffect } from "react";
import CreatableSelect from "react-select/creatable";

const GeneralCreatable = ({
  api,
  handleChange,
  value,
  isMulti,
  placeholder,
  isClearable = true,
  getOptionLabel = (e) => e["name"],
  getOptionValue = (e) => e["id"],
  getNewOptionData = (a, b) => {
    return { id: a, name: b };
  },
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
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    }).then((res) => res.json());
  };

  return (
    <>
      <CreatableSelect
        isClearable={isClearable}
        closeMenuOnSelect={true}
        getOptionLabel={getOptionLabel}
        getOptionValue={getOptionValue}
        isMulti={isMulti}
        options={state}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onCreateOption={(e) => {
          handleChange({ id: e, display_name: e });
        }}
        formatCreateLabel={(e) => {
          return e;
        }}
        getNewOptionData={getNewOptionData}
      />
    </>
  );
};

export default GeneralCreatable;
