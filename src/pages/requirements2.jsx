import Privilaged from "../components/Privilaged";

import SalarySelector from "../components/SalarySelector";
import React, { useState, useEffect } from "react";
import Spec from "../components/Spec";
import SkillSelector from "../components/SkillSelector";
import GeneralSelector from "../components/GeneralSelector";
import LocationSelector from "../components/LocationSelector";
import BPSwitch from "../components/bpswitch";

const Requirements = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formState, setFormState] = useState(defaultStates);

  function updateState(id, values_) {
    let values = Array.isArray(values_) ? values_ : [values_];
    let temp = { ...formState };
    temp[id]
      ? (temp[id]["attributes"] = values)
      : (temp[id] = { attributes: values });
    setFormState(temp);
  }
  function updateActive(id, status) {
    let temp = { ...formState };
    temp[id] ? (temp[id]["active"] = status) : (temp[id] = { active: status });
    setFormState(temp);
  }
  function getAttributes(field) {
    return !formState[field] ? [] : formState[field]["attributes"];
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
    formState["Model"]["attributes"].forEach((e) => {
      if ((e["name"] == "on-site") | (e["name"] == "hybrid")) rv = true;
    });
    return rv;
  }

  function update() {
    const y = JSON.stringify(formState);
    fetch(process.env.REACT_APP_API + "/profile/", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
      body: y,
    });
  }

  function formFromServer() {
    fetch(process.env.REACT_APP_API + "/profile/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => (res.status == 200 ? res.json() : null))
      .then((data) => {
        if (data) setFormState(data);
      });
  }

  useEffect(() => {
    formFromServer();
  }, []);

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

  function SectionLeft({ title, text }) {
    return (
      <div className="left-subpanel">
        <h1>{title}</h1>
        {text}
      </div>
    );
  }

  function SectionRight({ id, canBeDisabled, selector, subtitle = "" }) {
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
                  checked={formState[id]["active"]}
                  handleChange={(e) => updateActive(id, e)}
                />
              </div>
            ) : (
              ""
            )}
          </div>
          <div>{formState[id]["active"] ? selector : noMatter()}</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Privilaged>
        <div className="main-container">
          <div className="left-panel">
            <div>Hello&nbsp;</div>
          </div>
          <div>
            <div className="right-panel">
              <SectionLeft
                title="Role"
                text="Enter the job roles you are willing to consider."
              />
              <SectionRight
                id="Role"
                canBeDisabled={false}
                placeholder="Input one or more roles"
                selector={
                  <GeneralSelector
                    api={"/attributes/Role"}
                    handleChange={(e) => updateState("Role", e)}
                    isMulti={true}
                    value={formState["Role"]["attributes"]}
                    placeholder={"Enter the roles you would consider."}
                  />
                }
              />
            </div>

            <div className="right-panel">
              <SectionLeft
                title="Salary"
                text="Enter your minimum acceptable salary. You will not be shown any opportunity that pays less than the value you input here."
              />
              <div>
                <SectionRight
                  id="Salary"
                  canBeDisabled={false}
                  selector={
                    <SalarySelector
                      value={formState["Salary"]["attributes"][0]}
                      handleChange={(e) => updateState("Salary", e)}
                    />
                  }
                />

                <SectionRight
                  id="Tenure"
                  subtitle="Tenure"
                  canBeDisabled={false}
                  selector={
                    <GeneralSelector
                      api={"/attributes/Tenure"}
                      handleChange={(e) => updateState("Tenure", e)}
                      isMulti={true}
                      value={formState["Tenure"]["attributes"]}
                      placeholder={"Input tenures"}
                    />
                  }
                />
              </div>
            </div>

            <div className="right-panel">
              <SectionLeft
                title="Work Model"
                text="Enter all the work models you would consider. Remote = you are remote; All-Remote = every employee is remote"
              />
              <div>
                <SectionRight
                  id="Model"
                  canBeDisabled={false}
                  selector={
                    <GeneralSelector
                      api="attributes/WorkModel"
                      handleChange={(e) => updateState("Model", e)}
                      isMulti={true}
                      value={formState["Model"]["attributes"]}
                      placeholder={"Enter the work models you would consider."}
                    />
                  }
                />
                {showLocation() ? (
                  <SectionRight
                    id="Location"
                    subtitle="Location"
                    canBeDisabled={false}
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
                title="Organization"
                text="Enter organizational characteristics and features that are important to you. Note: Experential criteria are treated as must-haves. Potential matches decrease with the number of experential requirements you put in place."
              />
              <div>
                <SectionRight
                  subtitle="Size"
                  id="OrgSize"
                  canBeDisabled={true}
                  selector={
                    <GeneralSelector
                      api="attributes/OrgSize"
                      handleChange={(e) => updateState("OrgSize", e)}
                      isMulti={false}
                      value={formState["OrgSize"]["attributes"]}
                    />
                  }
                />
                <SectionRight
                  subtitle="Type"
                  id="OrgType"
                  canBeDisabled={true}
                  selector={
                    <GeneralSelector
                      api="attributes/OrgType"
                      handleChange={(e) => updateState("OrgType", e)}
                      isMulti={true}
                      value={formState["OrgType"]["attributes"]}
                      //   placeholder={"Enter the work models you would consider."}
                    />
                  }
                />
                <SectionRight
                  subtitle="Workplace Language"
                  api="attributes/Language"
                  id="Language"
                  canBeDisabled={false}
                  selector={
                    <GeneralSelector
                      api="attributes/Language"
                      handleChange={(e) => updateState("Language", e)}
                      isMulti={true}
                      value={formState["Language"]["attributes"]}
                      placeholder="Ender workplace languages."
                    />
                  }
                />
                <SectionRight
                  subtitle="Experential"
                  // api="attributes/Language"
                  id="Experential"
                  canBeDisabled={true}
                  selector={
                    <GeneralSelector
                      api="attributes/Experential"
                      handleChange={(e) => updateState("Experential", e)}
                      isMulti={true}
                      value={formState["Experential"]["attributes"]}
                      placeholder="Ender experential factors."
                    />
                  }
                />
              </div>
            </div>

            <div className="right-panel">
              <SectionLeft
                title="Tech Stack"
                text="Enter the technologies you want to work with. Do not exhaustively list everything you know. Rather list the technologies you want to use day to day. Hiring orgs spec the main technologies (maximum 5) they are working with. A match occurs when their list is a subset of yours. The longer your list, the more matches you will get."
              />
              <SectionRight
                id="TechStack"
                canBeDisabled={false}
                placeholder="Input your tech stack"
                selector={
                  <SkillSelector
                    isMulti={true}
                    value={formState["TechStack"]["attributes"]}
                    handleChange={(e) => updateState("TechStack", e)}
                  />
                }
              />
            </div>
          </div>
        </div>
      </Privilaged>
    </>
  );
};

export default Requirements;

const defaultStates = {
  Role: { active: true, attributes: [] },
  Model: { active: true, attributes: [] },
  Language: { active: true, attributes: [] },
  Tenure: { active: true, attributes: [] },
  Location: { active: true, attributes: [] },
  TechStack: { active: true, attributes: [] },
  TechAntiStack: { active: false, attributes: [] },
  OrgSize: { active: true, attributes: [] },
  OrgType: { active: true, attributes: [] },
  Industry: { active: true, attributes: [] },
  Experential: { active: true, attributes: [] },
  Salary: { active: true, attributes: [{ amount: "100,000", ccy: "USD" }] },
};
