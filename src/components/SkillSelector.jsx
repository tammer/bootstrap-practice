import AsyncCreatableSelect from "react-select/async-creatable";

const SkillSelector = ({ handleChange, value, isMulti }) => {
  const loadTechOptions = (inputValue) => {
    return fetch(`${process.env.REACT_APP_API}/skills/${inputValue}`).then(
      (res) => res.json()
    );
  };

  function handleCreate(x) {
    return fetch(process.env.REACT_APP_API + "/skills/", {
      method: "POST",
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ name: x }),
    })
      .then((res) => res.json())
      .then((j) =>
        handleChange(
          isMulti
            ? [...value, { id: j["id"], name: x }]
            : { id: j["id"], name: x }
        )
      );
  }

  return (
    <>
      <AsyncCreatableSelect
        closeMenuOnSelect={true}
        defaultOptions
        cacheOptions
        // isClearable
        getOptionLabel={(e) => e["name"]}
        getOptionValue={(e) => e["id"]}
        isMulti={isMulti}
        loadOptions={loadTechOptions}
        placeholder={"Type a technology"}
        value={value}
        onChange={handleChange}
        onCreateOption={handleCreate}
        formatCreateLabel={(e) => e}
        getNewOptionData={(a, b) => {
          return { id: a, name: b };
        }}
      />
    </>
  );
};

export default SkillSelector;
