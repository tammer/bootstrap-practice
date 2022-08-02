import LevelSlider from "../components/LevelSlider";
import SkillSelector from "../components/SkillSelector";
import { Form } from "react-bootstrap";
import BPSwitch from "../components/bpswitch";
import SalarySelector from "../components/SalarySelector";

const Sandbox = () => {
  return (
    <>
      <div className="main-container">
        <div className="two-columns">
          <SalarySelector value={22} />
          <div>2</div>
        </div>
        <div className="left-panel">
          <div>Hello&nbsp;</div>
        </div>
        <div className="right-panel">
          <div className="left-subpanel">
            <h1>left-subpanel &gt; h1</h1>
            content in left-subpanel Have a nice day today.
          </div>
          <div className="right-subpanel">
            <div className="attribute-section">
              <h1>right-subpanel &gt; h1</h1>
              <h2>right-subpanel &gt; h2</h2>
              <div
                style={{
                  display: "grid",
                  gridAutoColumns: "1fr 1fr",
                }}
              >
                <BPSwitch />
              </div>

              <SkillSelector isMulti />
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
