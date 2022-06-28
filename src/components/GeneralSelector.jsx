import AsyncSelect from "react-select/async";

const GeneralSkillSelector = ({
  loadOptions,
  handleChange,
  value,
  isMulti,
  placeholder,
}) => {
  return (
    <>
      <AsyncSelect
        isMulti={isMulti}
        closeMenuOnSelect={true}
        // cacheOptions
        isClearable
        getOptionLabel={(e) => e["name"]}
        getOptionValue={(e) => e["id"]}
        loadOptions={loadOptions}
        placeholder={placeholder}
        // defaultOptions
        value={
          value &&
          (!isMulti
            ? { name: value }
            : value.map((v) => {
                return { name: v };
              }))
        }
        onChange={(e) =>
          handleChange(
            e ? (!isMulti ? e["name"] : e.map((i) => i["name"])) : null
          )
        }
      />
    </>
  );
};

export default GeneralSkillSelector;
