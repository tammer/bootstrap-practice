import AsyncSelect from "react-select/async";

const SkillSelector = ({ handleChange, value, isMulti }) => {
  const loadTechOptions = (inputValue) => {
    return fetch(`http://localhost:8000/skills/${inputValue}`).then((res) =>
      res.json()
    );
  };

  return (
    <>
      <AsyncSelect
        closeMenuOnSelect={true}
        defaultOptions
        cacheOptions
        isClearable
        getOptionLabel={(e) => e["name"]}
        getOptionValue={(e) => e["id"]}
        isMulti={isMulti}
        loadOptions={loadTechOptions}
        placeholder={"Type a technology"}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

export default SkillSelector;
