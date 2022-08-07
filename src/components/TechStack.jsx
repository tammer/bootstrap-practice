import { useState } from "react";
import LevelSlider from "../components/LevelSlider";
import SkillSelector from "../components/SkillSelector";

const TechStack = ({ attributes, handleChange }) => {
  const [selectorValue, setSelectorVlaue] = useState(null);
  function handleLevelChange(skillName, newLevel) {
    let rv = [...attributes];
    rv.find((e) => e["name"] == skillName)["level"] = newLevel;
    handleChange(rv);
  }

  function newSkill(value) {
    if (attributes.find((e) => e["name"] == value["name"])) {
      return;
    }
    value["level"] = 50;
    setSelectorVlaue(null);
    handleChange([...attributes, value]);
  }

  //   function buttonRow() {
  //     return (
  //       <div className="level-slider-outer">
  //         <div style={{ gridColumn: "1 /3" }}>{/* <SkillSelector /> */}</div>

  //         {/* <div className="horse-holder">
  //           <div className="horse-new">+ New</div>
  //         </div> */}
  //       </div>
  //     );
  //   }

  function row(name, level) {
    return (
      <div key={`teckstack1-${name}`} className="level-slider-outer">
        <div className="horse-holder">
          <div className="horse">{name}</div>
        </div>
        <div>
          <div className="level-slider-body">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={`techstack${name}${i}`}
                className="level-slider-body-div"
              />
            ))}
            <div className="level-slider-item">
              <LevelSlider
                value={level}
                handleChange={(e) => handleLevelChange(name, e)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="level-slider-box">
        <div className="level-slider-outer-header">
          <div />
          <div className="level-slider-header">
            <div>novice</div>
            <div>capable</div>
            <div>proficient</div>
            <div>expert</div>
            <div>authority</div>
          </div>
        </div>
        {attributes.map((att) => row(att["name"], att["level"]))}
        {/* {buttonRow()} */}
      </div>
      <br />
      <div style={{ width: "300px" }}>
        <SkillSelector
          isMulti={false}
          handleChange={newSkill}
          value={selectorValue}
        />
      </div>
    </>
  );
};

export default TechStack;
