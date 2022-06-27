import AsyncSelect from "react-select/async";

const loadLevelOptions = (inputValue) => {
  return fetch(`http://localhost:8000/levels/`).then((res) => res.json());
};

const LevelSelector = ({ value, handleChange }) => {
  return (
    <>
      <AsyncSelect
        closeMenuOnSelect
        isSearchable={false}
        cacheOptions
        defaultOptions
        getOptionLabel={(e) => e["name"]}
        getOptionValue={(e) => e["id"]}
        loadOptions={loadLevelOptions}
        value={value ? { name: value } : null}
        placeholder="Set Level"
        onChange={(e) => handleChange(e)}
      />
    </>
  );
};

export default LevelSelector;
