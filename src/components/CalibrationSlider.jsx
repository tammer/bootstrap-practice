import Slider from "rc-slider";
import { useState } from "react";
import "rc-slider/assets/index.css";
import "./slider.css";

// benchmark must by in int 1,2,3,4,5
const CalibrationSlider = ({
  benchmark = 3,
  value = { id: 3 },
  handleChange,
}) => {
  const [level, setLevel] = useState(value["id"]);

  let marks = {
    1: "novice",
    2: "capable",
    3: "proficient",
    4: "expert",
    5: "authority",
  };
  marks[benchmark] = <strong>{marks[benchmark]}</strong>;

  return (
    <Slider
      min={1}
      max={5}
      marks={marks}
      step={0.01}
      onChange={(e) => {
        setLevel(e);
        handleChange(Math.abs(e - benchmark) < 0.8 ? true : false);
      }}
      // defaultValue={value["id"]}
      value={level}
    />
  );
};

export default CalibrationSlider;
