import AsyncSelect from "react-select/async";

const AttributeSelector = ({ category, handleChange, value, isMulti }) => {
  const loadOptions = () => {
    return fetch(`http://localhost:8000/attributes/${category}/`).then((res) =>
      res.json()
    );
  };

  return (
    <>
      <AsyncSelect
        closeMenuOnSelect={true}
        defaultOptions
        cacheOptions
        getOptionLabel={(e) => e["name"]}
        getOptionValue={(e) => e["id"]}
        isMulti={isMulti}
        loadOptions={loadOptions}
        placeholder={"Type a technology"}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

export default AttributeSelector;
