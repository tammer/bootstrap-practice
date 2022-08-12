import Privilaged from "../components/Privilaged";
import { formFromServer, formToServer, showMessage } from "../helpers/helpers";
import TechStack from "../components/TechStack";
import SalarySelector from "../components/SalarySelector";
import React, { useState, useEffect } from "react";
import GeneralSelector from "../components/GeneralSelector";
import LocationSelector from "../components/LocationSelector";
import BPSwitch from "../components/bpswitch";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { Modal } from "../components/Modal";
import Spec from "../components/Spec";
import Signup from "../components/Signup";
import LearningCurve from "../components/LearningCurve";

const SectionRight = ({
  isActive = true,
  updateActive,
  canBeDisabled = false,
  selector,
  subtitle = "",
}) => {
  function noMatter() {
    return (
      <>
        <div
          style={{
            marginBottom: "38px",
            marginLeft: "0px",
            paddingTop: "10px",
            marginLeft: "27px",
            color: "gray",
          }}
        >
          Doesn't matter.
        </div>
      </>
    );
  }

  return (
    <div className="right-subpanel">
      <div className="attribute-section">
        <div className="two-columns">
          <div style={{ float: "left" }}>
            <h1>{subtitle}</h1>
          </div>
          {canBeDisabled ? (
            <div style={{ paddingBottom: "3px", textAlign: "right" }}>
              <BPSwitch
                checked={isActive}
                handleChange={(e) => {
                  updateActive(e);
                }}
              />
            </div>
          ) : (
            ""
          )}
        </div>
        <div>{isActive ? selector : noMatter()}</div>
      </div>
    </div>
  );
};

const Requirements = () => {
  const newbie = localStorage.getItem("token") ? false : true;
  const [message, setMessage] = useOutletContext();
  const [formState, setFormState] = useState(defaultStates);
  const [formChanged, setFormChanged] = useState(false);
  const [showIntroModal, setShowIntroModal] = useState(newbie ? true : false);
  const [showActivateModal, setShowActivateModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const navigate = useNavigate();

  function updateState(id, values_) {
    let values = Array.isArray(values_) ? values_ : [values_];
    let temp = { ...formState };
    temp[id]
      ? (temp[id]["attributes"] = values)
      : (temp[id] = { attributes: values });
    setFormState(temp);
    setFormChanged(true);
  }
  function updateActive(id, status) {
    let temp = { ...formState };
    temp[id] ? (temp[id]["active"] = status) : (temp[id] = { active: status });
    setFormState(temp);
    setFormChanged(true);
  }

  function formGood() {
    if (
      formState["Role"]["attributes"].length === 0 ||
      formState["TechStack"]["attributes"].length === 0
    ) {
      return false;
    }
    return true;
  }

  function showLocation() {
    let rv = false;
    formState["WorkModel"]["attributes"].forEach((e) => {
      if ((e["name"] == "on-site") | (e["name"] == "hybrid")) rv = true;
    });
    return rv;
  }

  useEffect(() => {
    formFromServer(setFormState);
  }, []);

  function SectionLeft({ title, text }) {
    return (
      <div className="left-subpanel">
        <h1>{title}</h1>
        {text}
      </div>
    );
  }

  function workModelBlurb() {
    return (
      <>
        <div>
          Enter all the work models you would consider.
          <br />
          Remote = you are remote
          <br />
          All-Remote = every employee is remote
        </div>
        {showLocation() ? (
          <div>
            <br />
            <br />
            Enter the region(s) you are willing to work at. (Regions can be
            anything from a single city or town to an entire country.)
          </div>
        ) : (
          ""
        )}
      </>
    );
  }

  function MakeSelector(attribute, placeholder) {
    return (
      <GeneralSelector
        api={"attributes/" + attribute}
        handleChange={(e) => updateState(attribute, e)}
        isMulti={attribute == "OrgSize" ? false : true}
        value={formState[attribute]["attributes"]}
        placeholder={placeholder}
      />
    );
  }

  function renderButtons() {
    return (
      <>
        <div className="right-panel no-borders">
          <SectionLeft
            title=""
            text={
              formGood() ? (
                ""
              ) : (
                <span style={{ color: "red" }}>
                  Incomplete form: Role and TechStack are manditory fields
                </span>
              )
            }
          />
          <div>
            <div style={{ float: "right" }}>
              {formChanged ? (
                <>
                  {newbie ? (
                    ""
                  ) : (
                    <button
                      className="bp-button-secondary"
                      onClick={() => {
                        navigate("/home");
                        showMessage(
                          setMessage,
                          "No changes were saved.",
                          "message-secondary"
                        );
                      }}
                    >
                      Cancel
                    </button>
                  )}

                  <button
                    className="bp-button"
                    disabled={formGood() && formChanged ? false : true}
                    onClick={
                      newbie
                        ? () => setShowActivateModal(true)
                        : () => {
                            formToServer(formState);
                            showMessage(setMessage, "Spec updated");
                            navigate("/home");
                          }
                    }
                    // onClick={() => {
                    //   formToServer(formState);
                    //   showMessage(setMessage, "Spec updated");
                    //   navigate("/home");
                    // }}
                  >
                    {newbie ? "Next" : "Save"}
                  </button>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <Modal
          title="Activation"
          body={
            <>
              <p>
                Here is the match logic that follows from what you have just
                input:
              </p>
              <Spec formState={formState} />
              <p>
                When you activate, this logic will be applied to every job
                requisite processed by Background Process. You will be notified
                when matches occur.
              </p>
              <div className="align-center">
                <button
                  className="bp-button-secondary"
                  onClick={() => {
                    setShowActivateModal(false);
                  }}
                >
                  Continue editing
                </button>
                <button
                  onClick={() => {
                    setShowActivateModal(false);
                    setShowSignupModal(true);
                  }}
                  className="bp-button"
                >
                  Activate
                </button>
              </div>
            </>
          }
          visible={showActivateModal}
        />
        <Modal
          visible={showSignupModal}
          title={`Signup`}
          body={<Signup formState={formState} setMessage={setMessage} />}
          // body={<Signup />}
        />
      </>
    );
  }

  return (
    <>
      {/* <Privilaged> */}
      <div className="main-container">
        <div>
          <div className="right-panel no-borders">
            <div className="double-subpanel">
              <h1 style={{ fontSize: "2.0em" }}>Set Your Criteria</h1>
              <ul>
                <li>
                  Use the form below to precisely spec jobs you are willing to
                  consider.
                </li>
                <li>
                  You will be alerted to jobs that match the criteria you set
                  here.
                </li>
                {/* <li>
                  Think of this form as a filter on the universe of jobs: you
                  will be alerted to any opportunity that meets the criteria you
                  spec here. All others will be filtered out.
                </li> */}
              </ul>
            </div>
          </div>
          <div className="right-panel">
            <SectionLeft
              title="Role"
              text="Enter the job roles you are willing to consider."
            />
            <SectionRight
              selector={MakeSelector("Role", "Input one or more roles")}
            />
          </div>
          <div className="right-panel">
            <SectionLeft
              title="Salary"
              text="Enter your minimum acceptable salary. You will not be shown any opportunity that pays less than the value you input here."
            />
            <div>
              <SectionRight
                selector={
                  <SalarySelector
                    value={formState["Salary"]["attributes"][0]}
                    handleChange={(e) => updateState("Salary", e)}
                  />
                }
              />

              <SectionRight
                subtitle="Tenure"
                selector={MakeSelector("Tenure", "Tenure(s)")}
              />
            </div>
          </div>
          <div className="right-panel">
            <SectionLeft title="Work Model" text={workModelBlurb()} />
            <div>
              <SectionRight
                selector={MakeSelector(
                  "WorkModel",
                  "Enter the work models you would consider."
                )}
              />
              {showLocation() ? (
                <SectionRight
                  subtitle="Location"
                  selector={
                    <LocationSelector
                      isMulti={true}
                      value={formState["Location"]["attributes"]}
                      handleChange={(e) => updateState("Location", e)}
                    />
                  }
                />
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="right-panel">
            <SectionLeft
              title="Tech Stack"
              // text="Enter the technologies you want to work with. Do not exhaustively list everything you know. Rather, list the technologies you want to use day to day. Hiring orgs spec the main technologies they are working with, (max 5). A match occurs when their list is a subset of yours. The longer your list, the more matches you will get."
              text={
                <div>
                  <p>
                    Enter the technologies you want to work with. Do not
                    exhaustively list everything you know. Rather, list the
                    technologies you want to use day to day. Hiring orgs spec
                    the main technologies they are working with, (max 5). A
                    match occurs when their list is a subset of yours. The
                    longer your list, the more matches you will get.
                  </p>
                  <p>Level Definitions (hover for details)</p>
                  <LearningCurve />
                  <p>
                    Novice: You have trialed the technology in sandbox
                    environments or have been exposed to it in an educational
                    setting. You have not used the technology in a professional
                    setting.
                  </p>
                  <p>
                    Capable: You have used this technology in a production
                    environment though their are aspects of it you have not
                    learned. You often make use of documentation and internet
                    knowledge resources as you work. You probably don't use it
                    every day or if you do you are continually improving.
                  </p>
                  <p>
                    Proficient: You are highly productive with this technology.
                    You can achieve anything the tech is capable of with no help
                    from others. You consult knowledge bases only for special
                    situations.
                  </p>
                  <p>
                    Expert: You have mastered the technology. You are able to
                    leverage the technology for any feasible purpose
                    effeciently. You are probably the most knowledge person on
                    this technology in your organization.
                  </p>
                  <p>
                    Authority: You are not only an expert; you are part of the
                    group of people who create, develop, maintain and evolve
                    this technology.
                  </p>
                </div>
              }
            />
            <SectionRight
              placeholder="Input your tech stack"
              selector={
                <TechStack
                  attributes={formState["TechStack"]["attributes"]}
                  handleChange={(e) => updateState("TechStack", e)}
                />
              }
            />
          </div>

          <div className="right-panel">
            <SectionLeft
              title="Organization"
              text="Enter organizational characteristics and features that are important to you. Note: Experiential criteria are treated as must-haves. Matches decrease with the number of experential requirements you put in place."
            />
            <div>
              <SectionRight
                subtitle="Size"
                canBeDisabled={true}
                isActive={formState["OrgSize"]["active"]}
                updateActive={(e) => updateActive("OrgSize", e)}
                selector={MakeSelector("OrgSize", "Set size")}
              />
              <SectionRight
                subtitle="Type"
                canBeDisabled={true}
                isActive={formState["OrgType"]["active"]}
                updateActive={(e) => updateActive("OrgType", e)}
                selector={MakeSelector("OrgType", "Org types")}
              />
              <SectionRight
                subtitle="Workplace Language"
                selector={MakeSelector("Language", "Workplace languages")}
              />
              <SectionRight
                subtitle="Experiential"
                canBeDisabled={true}
                isActive={formState["Experiential"]["active"]}
                updateActive={(e) => updateActive("Experiential", e)}
                selector={MakeSelector(
                  "Experiential",
                  "Experiential Requirements"
                )}
              />
              <SectionRight
                subtitle="Industry"
                canBeDisabled={true}
                isActive={formState["Industry"]["active"]}
                updateActive={(e) => updateActive("Industry", e)}
                selector={MakeSelector("Industry", "Industry Requirements")}
              />
            </div>
          </div>

          {renderButtons()}
        </div>
      </div>

      <Modal
        title="Describe the Job you Want"
        body={
          <div>
            <ul>
              <li>
                Use the this form to describe characteristics of job(s) you
                would consider.
              </li>
              <li>
                For each attribute (role, org size, industry, etc) you can be
                highly specific or completely indifferent
              </li>
              <li>
                Once activated, Background Process will alert you if and when
                there are opportunities that meet the criteria you input.
              </li>
            </ul>
            <p>
              Tip: If you like your current job, spec something similar at a
              higher salary
            </p>
            <div className="align-center">
              <button
                onClick={() => {
                  setShowIntroModal(false);
                }}
                className="bp-button"
              >
                Got it
              </button>
            </div>
          </div>
        }
        visible={showIntroModal}
      />
      {/* </Privilaged> */}
    </>
  );
};

export default Requirements;

const defaultStates = {
  active: true,
  Role: { active: true, attributes: [] },
  WorkModel: { active: true, attributes: [] },
  Language: { active: true, attributes: [] },
  Tenure: { active: true, attributes: [] },
  Location: { active: true, attributes: [] },
  TechStack: { active: true, attributes: [] },
  TechAntiStack: { active: false, attributes: [] },
  OrgSize: { active: true, attributes: [] },
  OrgType: { active: true, attributes: [] },
  Industry: { active: true, attributes: [] },
  Experiential: { active: true, attributes: [] },
  Salary: { active: true, attributes: [{ amount: "100,000", ccy: "USD" }] },
};
