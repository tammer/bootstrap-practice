import Creatable, { useCreatable } from "react-select/creatable";

const styles = {
  control: (base) => ({
    ...base,
    fontFamily: "Helvetica",
    fontSize: 12,
  }),
  menu: (base) => ({
    ...base,
    fontFamily: "Helvetica",
    fontSize: 12,
  }),
};

//
// Here is the function
//
const Selector = ({ options, selectedOption, placeholder, simple }) => {
  const makeID = (string) => {
    return "secid-".concat(string.replace(/[^a-zA-Z]/g, ""));
  };

  return (
    <Creatable
      styles={styles}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          text: "blue",
          neutral20: "white", // the border color when no hovering
          neutral30: "white", // the border color on hover
          // neutral40: "yellow", // ??
          // neutral60: "yellow", // icons on click in
          // neutral80: "hotpink", // font color of the attribute
          // neutral150: "hotpink", // ?
          dangerLight: "hsl(0, 0%, 80%)", // color of the attribute X
          // primary25: "hotpink", // hover color on drop down
          // primary: "light gray",
          // primary: "black",
        },
      })}
      closeMenuOnSelect={simple ? true : false}
      isMulti={simple ? false : true}
      defaultValue={selectedOption}
      //   onChange={setSelectedOption}
      options={options}
      hideSelectedOptions={true}
      placeholder={placeholder}
    />
  );
};

export default Selector;
