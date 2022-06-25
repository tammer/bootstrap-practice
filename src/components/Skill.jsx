import Select from "react-select";
import AsyncSelect from "react-select/async";

const Skill = ({ id, selectedSkill, selectedLevel, update, destroy }) => {
  const loadTechOptions = (inputValue) => {
    return fetch(`http://localhost:8000/skills/${inputValue}`).then((res) =>
      res.json()
    );
  };

  const loadLevelOptions = (inputValue) => {
    return fetch(`http://localhost:8000/levels/`).then((res) => res.json());
  };

  return (
    <>
      <AsyncSelect
        closeMenuOnSelect={true}
        cacheOptions
        isClearable
        getOptionLabel={(e) => e["name"]}
        getOptionValue={(e) => e["id"]}
        loadOptions={loadTechOptions}
        placeholder="type something"
        defaultValue={{ name: selectedSkill }}
        onChange={(e) => update(id, "skill", e)}
      />
      <AsyncSelect
        closeMenuOnSelect
        isSearchable={false}
        cacheOptions
        defaultOptions
        getOptionLabel={(e) => e["name"]}
        getOptionValue={(e) => e["id"]}
        loadOptions={loadLevelOptions}
        defaultValue={{ name: selectedLevel }}
        placeholder="Set Level"
        onChange={(e) => update(id, "level", e)}
      />
    </>
  );
};

export default Skill;

// update(id, skill, level)
//     if id is null then POST else put (DRF POST would need to return id)
//     return id
