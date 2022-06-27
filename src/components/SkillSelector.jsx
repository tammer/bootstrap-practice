import AsyncSelect from "react-select/async";

const loadTechOptions = (inputValue) => {
  return fetch(`http://localhost:8000/skills/${inputValue}`).then((res) =>
    res.json()
  );
};

const SkillSelector = ({ value, handleChange }) => {
  return (
    <>
      <AsyncSelect
        closeMenuOnSelect={true}
        cacheOptions
        isClearable
        getOptionLabel={(e) => e["name"]}
        getOptionValue={(e) => e["id"]}
        loadOptions={loadTechOptions}
        placeholder={"Type a technology"}
        defaultOptions
        value={value ? { name: value } : null}
        onChange={(e) => handleChange(e)}
      />
    </>
  );
};

export default SkillSelector;
