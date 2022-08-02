import { useLocation, useNavigate } from "react-router-dom";
import Privilaged from "../components/Privilaged";

import {
  Container,
  Modal,
  Row,
  Col,
  Button,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import Requirement from "../components/Requirement";
import SalarySelector from "../components/SalarySelector";
import React, { useState, useEffect } from "react";
import Spec from "../components/Spec";
import SkillSelector from "../components/SkillSelector";
import GeneralSelector from "../components/GeneralSelector";
import LocationSelector from "../components/LocationSelector";

const Requirements = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const location = useLocation();
  const navigate = useNavigate();
  const [formState, setFormState] = useState(
    location.state ? location.state : defaultStates
  );

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

  return (
    <>
      <Privilaged>
        <Container fluid style={{ paddingTop: "20px" }}>
          <Row>
            <Col sm="8" style={{ paddingLeft: "15px" }}>
              <h5>Job Spec</h5>
              <ul>
                <li>
                  Using the form below, spec the job opportunities you would
                  want to see.
                </li>
                <li>
                  You are creating a filter: opportunities that meet all your
                  criteria will make it to your inbox.
                </li>
                <li>
                  If you leave any field blank (or disable it) it will not be
                  used as part of your filter. (For example, if you are
                  indifferent to the size of an organization, just leave the
                  "Org Size" field blank.)
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col sm="9">
              <Requirement
                id="Role"
                handleActive={updateActive}
                title="Role (aka Job Title)"
                togglable={false}
                selector={
                  <GeneralSelector
                    api="attributes/Role"
                    handleChange={(e) => updateState("Role", e)}
                    isMulti={true}
                    value={formState["Role"]["attributes"]}
                    placeholder="Input one or more roles"
                  />
                }
                helper="Enter all the roles your would consider"
              />

              <Row>
                <Col>
                  <Requirement
                    id="Model"
                    handleActive={updateActive}
                    title="Work Model"
                    selector={
                      <GeneralSelector
                        api="/attributes/WorkModel/"
                        handleChange={(e) => updateState("Model", e)}
                        isMulti={true}
                        value={formState["Model"]["attributes"]}
                        placeholder="Input work models"
                      />
                    }
                    helper="Enter all the work models you would consider. Remote = you are remote; All-Remote = every employee is remote"
                  />
                </Col>
                <Col>
                  <Requirement
                    id="Language"
                    handleActive={updateActive}
                    title="Workplace Language"
                    togglable={false}
                    selector={
                      <GeneralSelector
                        api="attributes/Language"
                        handleChange={(e) => updateState("Language", e)}
                        isMulti={true}
                        value={formState["Language"]["attributes"]}
                        placeholder="Input workplace languages"
                      />
                    }
                    helper="Enter the (human) languages you can work in"
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  {" "}
                  <Requirement
                    id="Tenure"
                    handleActive={updateActive}
                    title="Tenure"
                    selector={
                      <GeneralSelector
                        api="attributes/Tenure"
                        handleChange={(e) => updateState("Tenure", e)}
                        isMulti={true}
                        value={formState["Tenure"]["attributes"]}
                        placeholder="Input tenures"
                      />
                    }
                    helper="Enter the tenure structures you would consider"
                  />
                </Col>
                <Col>
                  <Requirement
                    id="Salary"
                    handleActive={updateActive}
                    title="Min Salary"
                    togglable={false}
                    selector={
                      <SalarySelector
                        value={formState["Salary"]["attributes"][0]}
                        handleChange={(e) => updateState("Salary", e)}
                      />
                    }
                    helper="Enter the minimum salary you would consider. If you love your current job, put a high number in here!"
                  />
                </Col>
              </Row>

              {showLocation() ? (
                <Requirement
                  id="Location"
                  handleActive={updateActive}
                  title="Location(s) (on-site and/or hybrid)"
                  togglable={false}
                  selector={
                    <LocationSelector
                      isMulti={true}
                      value={formState["Location"]["attributes"]}
                      handleChange={(e) => updateState("Location", e)}
                    />
                  }
                  helper="Do not by bound by what is offered in the dropdown; a new attributes is automatically created if you type something unique."
                />
              ) : (
                ""
              )}

              <Requirement
                id="TechStack"
                handleActive={updateActive}
                title="Technology Stack"
                togglable={false}
                selector={
                  <SkillSelector
                    isMulti={true}
                    value={formState["TechStack"]["attributes"]}
                    handleChange={(e) => updateState("TechStack", e)}
                  />
                }
                helper="Do not by bound by what is offered in the dropdown; a new attributes is automatically created if you type something unique."
              />
              {/* <Requirement
            id="TechAntiStack"
            handleActive={updateActive}
            title="Technology Anti-Stack"
            disabled={formState["TechAntiStack"]["active"] ? false : true}
            selector={
              <Selector
                id="TechAntiStack"
                handler={updateState}
                options={techStack}
                selectedOption={getAttributes("TechAntiStack")}
                placeholder="List any technologies that would disqualify a role if they were a major part of the job spec."
              />
            }
            helper="Any job spec that matches any one technology listed here is disqualified"
          /> */}
              <Row>
                <Col>
                  <Requirement
                    id="OrgSize"
                    handleActive={updateActive}
                    title="Org Size"
                    selector={
                      <GeneralSelector
                        api="attributes/OrgSize"
                        handleChange={(e) => updateState("OrgSize", e)}
                        isMulti={false}
                        value={formState["OrgSize"]["attributes"]}
                        placeholder="Input org size limit"
                      />
                    }
                    helper="Enter the upperbound for the org's size"
                  />
                </Col>
                <Col>
                  <Requirement
                    id="OrgType"
                    handleActive={updateActive}
                    title="Org Characteristics"
                    selector={
                      <GeneralSelector
                        api="attributes/OrgType"
                        handleChange={(e) => updateState("OrgType", e)}
                        isMulti={true}
                        value={formState["OrgType"]["attributes"]}
                        placeholder="Input desired org types"
                      />
                    }
                    helper="Enter the types of organizations you would consider"
                  />
                </Col>
              </Row>
              <Requirement
                id="Industry"
                handleActive={updateActive}
                title="Industry"
                selector={
                  <GeneralSelector
                    api="attributes/Industry"
                    handleChange={(e) => updateState("Industry", e)}
                    isMulti={true}
                    value={formState["Industry"]["attributes"]}
                    placeholder="Input desired industries"
                  />
                }
                helper="What industries would you consider"
              />

              <Requirement
                id="Experiential"
                handleActive={updateActive}
                title="Experiential"
                selector={
                  <GeneralSelector
                    api="attributes/Experiential"
                    handleChange={(e) => updateState("Experiential", e)}
                    isMulti={true}
                    value={formState["Experiential"]["attributes"]}
                    placeholder="Input desired experiential factors"
                  />
                }
                helper="What are the experiences that the job MUST offer?"
              />
            </Col>
          </Row>
          <Row>
            <Col></Col>
          </Row>
          <Row>
            <Col sm="9">
              <div style={{ textAlign: "center" }}>
                <Button
                  disabled={formGood() ? false : true}
                  // onClick={handleShow}
                  onClick={() => {
                    update();
                    navigate("/skills");
                  }}
                >
                  Next
                </Button>
                {formGood() ? (
                  ""
                ) : (
                  <div className="alert alert-warning">
                    Role, Tech Stack and Salary fields must have values
                  </div>
                )}
              </div>
            </Col>
          </Row>

          <Modal
            // animation={false}
            show={show}
            onHide={handleClose}
            dialogClassName="modal-90w"
          >
            <Modal.Header closeButton>
              <Modal.Title>This is your Background Process</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Spec formState={formState} />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Continue Editing
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  window.scrollTo(0, 0);
                  handleClose();
                  update();
                }}
              >
                Next
              </Button>
            </Modal.Footer>
          </Modal>

          <div style={{ marginBottom: "100px" }}></div>
        </Container>
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
  Experiential: { active: true, attributes: [] },
  Salary: { active: true, attributes: [{ amount: "100,000", ccy: "USD" }] },
};
