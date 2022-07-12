import Slider from "rc-slider";
import { useState } from "react";
import "rc-slider/assets/index.css";
import "./slider.css";

const LevelSlider = ({
  value = { id: 0 },
  handleChange,
  minLevel = 0,
  maxLevel = 100,
}) => {
  const uid = Math.random().toString();
  const [level, setLevel] = useState(value);
  return (
    <Slider
      min={0}
      max={100}
      marks={{
        20: "novice",
        40: "capable",
        60: "proficient",
        80: "expert",
        100: "authority",
      }}
      step={1}
      onChange={(e) => {
        if (e < minLevel) {
          setLevel(minLevel);
        } else if (e > maxLevel) {
          setLevel(maxLevel);
        } else {
          setLevel(e);
          localStorage.setItem(uid, e);
          setTimeout(() => {
            if (localStorage.getItem(uid) == e) {
              handleChange(e);
            }
          }, 1000);
        }
      }}
      value={level}
    />
  );
};

export default LevelSlider;
