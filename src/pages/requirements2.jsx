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

  function SectionRight({
    id,
    canBeDisabled,
    placeholder,
    isMulti = true,
    api = null,
    subtitle = "",
  }) {
    api = !api ? "attributes/" + id : api;
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
          <div>
            {formState[id]["active"] ? (
              <GeneralSelector
                api={api}
                handleChange={(e) => updateState(id, e)}
                isMulti={isMulti}
                value={formState[id]["attributes"]}
                placeholder={placeholder}
              />
            ) : (
              noMatter()
            )}
          </div>
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
                text="Enter the jobs roles you would be interested in."
              />
              <SectionRight
                id="Role"
                canBeDisabled={false}
                placeholder="Input one or more roles"
              />
            </div>

            <div className="right-panel">
              <SectionLeft
                title="Salary"
                text="Enter your minimum acceptable salary. You will not be shown any opportunity that pays less than the value you input here."
              />

              <SectionRight
                id="Tenure"
                subtitle="Tenure"
                canBeDisabled={false}
                placeholder="Input tenures"
              />
            </div>

            <div className="right-panel">
              <SectionLeft
                title="Work Model"
                text="Enter all the work models you would consider. Remote = you are remote; All-Remote = every employee is remote"
              />
              <SectionRight
                api="attributes/WorkModel"
                id="Model"
                canBeDisabled={true}
                placeholder="Enter work models."
              />
            </div>
            <div className="right-panel">
              <SectionLeft
                title="Organization"
                text="Enter organizational characteristics and features that are important to you."
              />
              <div>
                <SectionRight
                  subtitle="Size"
                  id="OrgSize"
                  canBeDisabled={true}
                  //   placeholder="Ender workplace languages."
                />
                <SectionRight
                  subtitle="Type"
                  id="OrgType"
                  canBeDisabled={true}
                  //   placeholder="Ender workplace languages."
                />
                <SectionRight
                  subtitle="Language"
                  api="attributes/Language"
                  id="Language"
                  canBeDisabled={false}
                  placeholder="Ender workplace languages."
                />
                <SectionRight
                  subtitle="Experential"
                  // api="attributes/Language"
                  id="Experential"
                  canBeDisabled={true}
                  placeholder="Ender experential factors."
                />
              </div>
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
