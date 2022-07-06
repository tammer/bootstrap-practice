import AsyncSelect from "react-select/async";

const loadLevelOptions = (inputValue) => {
  return fetch(`${process.env.REACT_APP_API}/levels/`).then((res) =>
    res.json()
  );
};

const LevelSelector = ({ handleChange, value }) => {
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
        value={value}
        placeholder="Set Level"
        onChange={(e) => handleChange(e)}
      />
    </>
  );
};

export default LevelSelector;
