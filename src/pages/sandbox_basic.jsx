import LevelSlider from "../components/LevelSlider";
import SkillSelector from "../components/SkillSelector";
import { Form } from "react-bootstrap";
import BPSwitch from "../components/bpswitch";
import SalarySelector from "../components/SalarySelector";

const LevelSliderContainer = () => {
  return (
    <div className="level-slider-outer">
      <div className="horse">Javascript</div>
      <div>
        <LevelSlider />
      </div>
    </div>
  );
};

// attributes is attributes field from TechStack
const TechStack = ({ attributes }) => {
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
              <LevelSlider value={level} />
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

const Sandbox = () => {
  return (
    <>
      <div className="main-container">
        <div className="left-panel">
          <div>Hello&nbsp;</div>
        </div>
        <div className="right-panel">
          <div className="left-subpanel">
            <h1>left-subpanel &gt; h1</h1>
            content in left-subpanel Have a nice day today.
          </div>
          <div className="right-subpanel">
            <TechStack attributes={[{ name: "Tammer", level: 22 }]} />

            <div className="attribute-section">
              <h1>right-subpanel &gt; h1</h1>
              <h2>right-subpanel &gt; h2</h2>
              <div
                style={{
                  display: "grid",
                  gridAutoColumns: "1fr 1fr",
                }}
              ></div>

              {/* <SkillSelector isMulti /> */}
              <br />
              <br />
              {/* <LevelSliderContainer /> */}
              <br />
              <br />
              {/* <div className="level-slider-box">
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
                <div className="level-slider-outer">
                  <div className="horse-holder">
                    <div className="horse">4th Dimension</div>
                  </div>
                  <div>
                    <div className="level-slider-body">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div className="level-slider-body-div" />
                      ))}
                      <div className="level-slider-item">
                        <LevelSlider />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="level-slider-outer">
                  <div className="horse-holder">
                    <div className="horse">
                      Amazon Web Services with Access Databsae
                    </div>
                  </div>
                  <div>
                    <div className="level-slider-body">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div className="level-slider-body-div" />
                      ))}
                      <div className="level-slider-item">
                        <LevelSlider />
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              <div style={{ width: "250px" }}></div>
              <br />
              <br />
              <br />
              <br />
            </div>

            <div className="attribute-section">
              <h1>right-subpanel &gt; h1</h1>
              <h2>right-subpanel &gt; h2</h2>
              <SkillSelector isMulti />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sandbox;
