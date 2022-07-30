import LevelSlider from "../components/LevelSlider";
import SkillSelector from "../components/SkillSelector";

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
            <div className="attribute-section">
              <h1>right-subpanel &gt; h1</h1>
              <h2>right-subpanel &gt; h2</h2>
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
