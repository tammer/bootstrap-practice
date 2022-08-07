import LevelSlider from "../components/LevelSlider";

const TechStack = ({ attributes, handleChange }) => {
  function handleLevelChange(skillName, newLevel) {
    let rv = [...attributes];
    rv.find((e) => e["name"] == skillName)["level"] = newLevel;
    handleChange(rv);
  }

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
    </div>
  );
};

export default TechStack;
