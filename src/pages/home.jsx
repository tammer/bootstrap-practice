import Privilaged from "../components/Privilaged";
import Spec from "../components/Spec";
import BPSwitch from "../components/bpswitch";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Privilaged>
        <div className="main-container">
          <div className="right-panel">
            <div className="left-subpanel">
              <h1>Spec</h1>
              <p>
                The pseudocode shows the filtering that is applied to every job
                posting submitted to this platform. It follows directly from
                your spec.
              </p>
              <p>Click "Edit Spec" to modify.</p>
            </div>
            <div className="right-subpanel">
              <div className="attribute-section">
                <div className="two-columns">
                  <div>
                    <h1>Matching Logic</h1>
                  </div>
                  <div style={{ paddingBottom: "3px", textAlign: "right" }}>
                    <BPSwitch
                      label="ACTIVE?"
                      checked={true}
                      handleChange={(e) => {
                        return true;
                      }}
                    />
                  </div>
                </div>
                <Spec />
                <div>
                  <button
                    className="bp-button"
                    style={{ float: "right" }}
                    onClick={() => {
                      navigate("/requirements");
                    }}
                  >
                    Edit Spec
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="right-panel">
            <div className="left-subpanel">
              <h1>Opportunities</h1>
              <p>
                This list updates in real time as hiring organizations submit
                jobs.
              </p>
              <p>
                An alert is sent to {localStorage.getItem("userName")} when
                items are added to this list.
              </p>
            </div>
            <div className="right-subpanel">
              <div className="attribute-section"></div>
            </div>
          </div>
        </div>
      </Privilaged>
    </>
  );
};

export default Home;
