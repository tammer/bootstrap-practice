import Privilaged from "../components/Privilaged";
import Spec from "../components/Spec";
import BPSwitch from "../components/bpswitch";
import { useNavigate } from "react-router-dom";
import { formFromServer, formToServer } from "../helpers/helpers";
import { useState, useEffect } from "react";
import { Modal } from "../components/Modal";

const Home = () => {
  const [formState, setFormState] = useState(null);
  const [showWelcomeModal, setShowWelcomeModal] = useState(
    localStorage.getItem("newbie")
  );
  useEffect(() => {
    formFromServer(setFormState);
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <Privilaged>
        <div className="main-container">
          <div className="right-panel">
            <div className="left-subpanel">
              <h1>Spec</h1>
              {formState && !formState["active"] ? (
                <p style={{ color: "red" }}>Inactive</p>
              ) : (
                ""
              )}
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
                      checked={formState ? formState["active"] : false}
                      handleChange={(e) => {
                        let temp = { ...formState };
                        temp["active"] = e;
                        setFormState(temp);
                        formToServer(temp);
                      }}
                    />
                  </div>
                </div>
                <Spec formState={formState} />
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
                This list is updated each time a job posting matches your spec.
              </p>
              <p>
                An alert is sent to {localStorage.getItem("userName")} when that
                happens.
              </p>
            </div>
            <div className="right-subpanel">
              <div className="attribute-section">
                <div className="align-center">
                  <br />
                  <br />
                  No current matches.
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal
          title="Your background process is running"
          body={
            <>
              <p>What happens now:</p>
              <ul>
                <li>
                  You don't need to do anything more. Every job requirement
                  submitted to this platform will be matched against your spec.
                </li>
                <li>
                  When there is match, you will be alerted and shown the full
                  job description.
                </li>
                <li>
                  If you like it, we will connect you the hiring organization
                  (and then drop out of the process).
                </li>
                <li>
                  The frequency of alerts will depend on how particular your
                  spec is. You can modify it any time.
                </li>
                <li>
                  You are anonymous and your data is private. Not a single byte
                  of the spec you just created will be shared with anyone.
                </li>
              </ul>
              <div className="align-center">
                <button
                  onClick={() => {
                    setShowWelcomeModal(false);
                    localStorage.removeItem("newbie");
                  }}
                  className="bp-button"
                >
                  Got it
                </button>
              </div>
            </>
          }
          visible={showWelcomeModal}
        />
      </Privilaged>
    </>
  );
};

export default Home;
