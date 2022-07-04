import Slider from "rc-slider";

const LevelSlider = ({ value, handleChange }) => {
  return (
    <Slider
      min={1}
      max={5}
      marks={{
        1: "novice",
        2: "capable",
        3: "proficient",
        4: "expert",
        5: "authority",
      }}
      step={null}
      onChange={handleChange}
      defaultValue={value["id"]}
    />
  );
};

export default LevelSlider;
