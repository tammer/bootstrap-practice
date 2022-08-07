import { useState, useRef, useEffect } from "react";
import LevelSlider from "../components/LevelSlider";
import SkillSelector from "../components/SkillSelector";

const TechStack = ({ attributes, handleChange }) => {
  const bottomRef = useRef(null);
  const [selectorValue, setSelectorVlaue] = useState(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [attributes]);

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

  function handleDelete(name) {
    handleChange(attributes.filter((e) => e["name"] != name));
  }

  function row(name, level) {
    return (
      <div key={`teckstack1-${name}`} className="level-slider-outer">
        <div className="horse-holder">
          <div className="horse">{name}</div>
          <div className="horse-button" onClick={(e) => handleDelete(name)}>
            x
          </div>
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
      {attributes.length > 0 ? (
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
            <div className="level-slider-inner-box">
              {attributes.map((att) => row(att["name"], att["level"]))}
              <div ref={bottomRef} />
            </div>
          </div>
          <br />
        </>
      ) : (
        ""
      )}

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
