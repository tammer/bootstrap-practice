import Slider from "rc-slider";
import { useState } from "react";
import "rc-slider/assets/index.css";
import "./slider.css";

const LevelSlider = ({ value, handleChange, minLevel = 1 }) => {
  const [level, setLevel] = useState(value["id"]);
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
      onChange={(e) => {
        if (e < minLevel) {
          setLevel(minLevel);
        } else {
          setLevel(e);
          handleChange(e);
        }
      }}
      // defaultValue={value["id"]}
      value={level}
    />
  );
};

export default LevelSlider;
