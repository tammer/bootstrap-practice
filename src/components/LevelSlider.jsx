import Slider from "rc-slider";
import { useState } from "react";
import "rc-slider/assets/index.css";
import "./slider.css";

const marks = {
  20: "novice",
  40: "capable",
  60: "proficient",
  80: "expert",
  100: "authority",
};

const min = 0;
const max = 100;

const FrozenLevelSlider = ({ low, high }) => {
  return (
    <div
      style={{
        margin: "20px",
        marginBottom: "40px",
        marginLeft: "30px",
        marginRight: "50px",
      }}
    >
      <Slider
        range
        min={min}
        max={max}
        marks={marks}
        trackStyle={{ backgroundColor: "#fbf719", height: 10 }}
        handleStyle={{
          borderColor: "white",
          height: 0,
          width: 0,
          marginLeft: -14,
          marginTop: -9,
          backgroundColor: "black",
        }}
        value={[low, high]}
      />
    </div>
  );
};

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
      min={min}
      max={max}
      marks={marks}
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

export { LevelSlider as default, FrozenLevelSlider };
