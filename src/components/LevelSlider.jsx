import Slider from "rc-slider";
import { useState } from "react";
import "rc-slider/assets/index.css";
import "./slider.css";

const marks = {
  20: "",
  40: "",
  60: "",
  80: "",
  100: "",
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
  value,
  handleChange,
  minLevel = 0,
  maxLevel = 100,
  frozen = false,
}) => {
  const uid = Math.random().toString();
  const [level, setLevel] = useState(value);
  return (
    <Slider
      railStyle={{
        backgroundColor: "gray",
        opacity: "20%",
        height: 2,
        marginTop: "0px",
      }}
      trackStyle={{
        backgroundColor: "gray",
        opacity: "10%",
        height: 2,
        marginTop: "0px",
      }}
      handleStyle={{
        borderColor: "#61FACC",
        height: 10,
        width: 10,
        marginTop: -4,
        backgroundColor: "#61FACC",
      }}
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
      value={frozen ? value : level}
    />
  );
};

export { LevelSlider as default, FrozenLevelSlider };
