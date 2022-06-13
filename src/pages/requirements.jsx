import { Link, useNavigate } from "react-router-dom";

import {
  Container,
  Row,
  Col,
  Button,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import Requirement from "../components/Requirement";
import SalarySelector from "../components/SalarySelector";
import React, { useState } from "react";
import Selector from "../components/Selector";

const Requirements = () => {
  const navigate = useNavigate();
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

  return (
    <Container fluid style={{ paddingTop: "20px" }}>
      <Row>
        <Col sm="8" style={{ paddingLeft: "15px" }}>
          <h5>Job Spec</h5>
          <ul>
            <li>
              Using the form below, spec the job opportunities you would want to
              see.
            </li>
            <li>
              You are creating a filter: opportunities that meet all your
              criteria will make it to your inbox.
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
              <Selector
                id="Role"
                handler={updateState}
                options={roles}
                placeholder="Enter the roles you would consider"
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
                  <Selector
                    id="Model"
                    handler={updateState}
                    options={models}
                    selectedOption={getAttributes("Model")}
                    placeholder="On-site? Hybrid?"
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
                  <Selector
                    id="Language"
                    options={languages}
                    selectedOption={getAttributes("Language")}
                    handler={updateState}
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
                  <Selector
                    id="Tenure"
                    handler={updateState}
                    options={tenures}
                    selectedOption={getAttributes("Tenure")}
                  />
                }
                helper="Enter the tenure structures you would consider"
              />
            </Col>
            <Col>
              <Requirement
                id="tbd"
                handleActive={updateActive}
                title="Min Salary"
                togglable={false}
                selector={<SalarySelector id="Salary" handler={updateState} />}
                helper="Enter the minimum salary you would consider. If you love your current job, put a high number in here!"
              />
            </Col>
          </Row>

          <Requirement
            id="TechStack"
            handleActive={updateActive}
            title="Technology Stack"
            togglable={false}
            selector={
              <Selector
                id="TechStack"
                handler={updateState}
                options={techStack}
                selectedOption={getAttributes("TechStack")}
                placeholder="List the technologies you want to work with"
              />
            }
            helper="Do not by bound by what is offered in the dropdown; a new attributes is automatically created if you type something unique."
          />
          <Requirement
            id="TechAntiStack"
            handleActive={updateActive}
            title="Technology Anti-Stack"
            disabled
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
          />
          <Row>
            <Col>
              <Requirement
                id="OrgSize"
                handleActive={updateActive}
                title="Org Size"
                selector={
                  <Selector
                    id="OrgSize"
                    handler={updateState}
                    options={sizes}
                    selectedOption={getAttributes("orgSize")}
                    simple={true}
                  />
                }
                helper="Enter the upperbound for the org's size"
              />
            </Col>
            <Col>
              <Requirement
                id="OrgChars"
                handleActive={updateActive}
                title="Org Characteristics"
                selector={
                  <Selector
                    id="OrgChars"
                    handler={updateState}
                    options={characteristics}
                    selectedOption={getAttributes("orgChars")}
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
              <Selector
                id="Industry"
                handler={updateState}
                options={industries}
                selectedOption={getAttributes("Industry")}
                placeholder="Industry sectors"
              />
            }
            helper="What industries would you consider"
          />

          <Requirement
            id="Experential"
            handleActive={updateActive}
            title="Experential"
            selector={
              <Selector
                id="Experential"
                handler={updateState}
                options={experiences}
                selectedOption={getAttributes("Experential")}
                placeholder="Must have experential factors go here."
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
        <Col sm="8">
          <div className="d-flex justify-content-center">
            <OverlayTrigger
              show={!formGood()}
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={
                <Tooltip>Role and Tech Stack fields must be set.</Tooltip>
              }
            >
              <span>
                <Button
                  disabled={formGood() ? false : true}
                  onClick={() => navigate("/signup", { state: formState })}
                >
                  Next
                </Button>
              </span>
            </OverlayTrigger>
          </div>
        </Col>
      </Row>
      <div style={{ marginBottom: "100px" }}></div>
    </Container>
  );
};

export default Requirements;

function quickMake(y) {
  return y.map((e) => ({ value: e, label: e }));
}

const models = quickMake(["On-site", "Hybrid", "Remote", "All-Remote"]);
const tenures = quickMake(["Permanent", "Contract"]);
const languages = quickMake(["English", "Deutsch", "Francis", "Dansk"]);
const experiences = quickMake([
  "female-led",
  "child-care",
  "on-site fitness facilities",
  "pet friendly",
  "unlimited vacation",
  "snacks",
  "healthy snacks",
  "meals",
  "free shuttles to/from office",
]);

const industries = quickMake([
  "Crytpto",
  "Blockchain",
  "DeFi",
  "NFT",
  "Fintech",
  "Edtech",
  "Proptech",
  "Insurtech",
  "Regtech",
  "Legaltech",
  "Femtech",
  "Foodtech",
  "Cleantech",
  "Biotech",
  "Healthtech",
  "Medtech",
  "Agritech",
  "eCommerce",
  "Telecom",
  "Computer hardware",
  "Internet gaming",
  "Pharma",
  "Cannabis",
  "Banking",
  "Investment banking",
  "Finance",
  "Financial data",
  "Asset Management",
  "Insurance",
  "Health care",
  "Real estate",
  "Oil and gas",
  "Auto",
  "Casinos and Gambling",
  "Aerospace",
  "Defense",
  "Marine transportation",
  "Aviation",
  "Mining",
  "Wearables",
]);

const sizes = quickMake([
  "< 10 employees",
  "< 100 employees",
  "< 500 employees",
  "< 1000 employees",
  "< 5000 employees",
  "< 10,000 employees",
]);

const characteristics = quickMake([
  "publicly traded",
  "government",
  "not for profit",
  "charity",
  "early stage startup",
  "growth stage startup startup",
  "late stage startup",
]);

const techStack = quickMake([
  ".NET",
  ".NET CLR",
  ".NET Compact Framework",
  ".NET Framework",
  ".NET Remoting",
  ".Net Core",
  "A/B Testing",
  "ADO.NET",
  "AJAX",
  "AJAX Frameworks",
  "AJAX Toolkit",
  "ANSI",
  "ANSI C",
  "ANSI SQL",
  "ANSI X12",
  "ANSI Y14.5",
  "ANSYS",
  "ANTLR",
  "ANTS Profiler",
  "ANVISA",
  "AOC",
  "AOD",
  "AODA",
  "AOG",
  "AOI",
  "AP Biology",
  "AP Calculus",
  "AP Stylebook",
  "AP writing",
  "APA",
  "APAC",
  "APACS",
  "APB",
  "APC",
  "APC UPS",
  "APDL",
  "API",
  "API (DEPRECATED)",
  "API 510",
  "API 570",
  "API 653",
  "API 6A",
  "API Development",
  "API Platform",
  "API Testing",
  "API manufacturing",
  "APICS",
  "APICS Member",
  "APL",
  "APLUS",
  "APO SNP",
  "APS",
  "APT",
  "APV",
  "APX",
  "APhA",
  "AQL",
  "AQTESOLV",
  "AQTF compliance",
  "AR System",
  "ARC",
  "ARCADY",
  "ARCHICAD",
  "ARCS",
  "ARES",
  "ARFF",
  "ARIA",
  "ARIMA",
  "ARINC 429",
  "ARINC 653",
  "ARIS",
  "ARISg",
  "ARM Architecture",
  "ARM Assembly",
  "ARM Cortex-M",
  "ARMA",
  "ARP",
  "ARPA",
  "ARRA",
  "ARTstor",
  "AS2805",
  "AS400 Administration",
  "AS9100",
  "AS9100 Lead Auditor",
  "AS9102",
  "AS9120",
  "ASAP",
  "ASCE",
  "ASCE 7",
  "ASCII",
  "ASCP",
  "ASDM",
]);

const roles_ = [
  "Full Stack Developer",
  "Back-End Developer",
  "Front-End Developer",
  "Android Developer",
  "Software Engineer",
  "iOS Developer",
  "Lead Developer",
  "Development Manager",
  "Director of Development",
  "VP Engineering",
  "CTO",
  "Technical Co-founder",
  "Mobile Developer",
  "Systems Developer",
  "Lead Software Architect",
  "API Developer",
  "Cloud Architect",
  "Embedded Systems Engineer",
  "Growth Engineer",
  "Software Architect",
  "Desktop App Developer",
  "Analytics Engineer",
  "Blockchain Developer",
  "Performance Engineer",
  "Data Scientist",
  "Machine Learning Engineer",
  "Big Data Engineer",
  "Data Engineer",
  "Lead Data Engineer",
  "Lead Data Scientist",
  "Director of Data Science",
  "VP of Data Science",
  "ETL Developer",
  "NLP Engineer",
  "Business Systems Analyst",
  "Data Analyst",
  "Decision Scientist",
  "Machine Learning Scientist",
  "DevOps Engineer",
  "Site Reliability Engineer",
  "Database Administrator",
  "DevOps Lead",
  "Security Engineer",
  "Database Engineer",
  "Build Automation Engineer",
  "Infrastructure Engineer",
  "Network Engineer",
  "Release Manager",
  "System Administrator",
  "Database Architect",
  "QA Engineer",
  "SDET",
  "Director of QA",
  "QA Manager",
  "Security Test Engineer",
  "Build Automation Engineer",
  "Mobile Test Engineer",
  "Performance Test Engineer",
  "Test Automation Engineer",
  "Game Tester",
  "Product Manager",
  "Program Manager",
  "Technical Product Manager",
  "Video Game Producer",
  "Product Management Lead",
  "Director of Product Management",
  "VP Product",
  "CPO",
  "Product Designer",
  "UX Designer",
  "UX Design Manager",
  "Director of UX",
  "Mobile UX Designer",
  "Web Designer",
  "Graphic Designer",
];

const senior_roles = [
  "Senior Full Stack Developer",
  "Senior Back-End Developer",
  "Senior Front-End Developer",
  "Senior Android Developer",
  "Senior Software Engineer",
  "Senior iOS Developer",
  "Senior Developer",
  "Senior Mobile Developer",
  "Senior Systems Developer",
  "Senior API Developer",
  "Senior Embedded Systems Engineer",
  "Senior Growth Engineer",
  "Senior Software Architect",
  "Senior Desktop App Developer",
  "Senior Analytics Engineer",
  "Senior Blockchain Developer",
  "Senior Performance Engineer",
  "Senior Data Scientist",
  "Senior Machine Learning Engineer",
  "Senior Big Data Engineer",
  "Senior Data Engineer",
  "Senior ETL Developer",
  "Senior NLP Engineer",
  "Senior Business Systems Analyst",
  "Senior Data Analyst",
  "Senior Decision Scientist",
  "Senior Machine Learning Scientist",
  "Senior DevOps Engineer",
  "Senior Site Reliability Engineer",
  "Senior Database Administrator",
  "Senior Security Engineer",
  "Senior Database Engineer",
  "Senior Build Automation Engineer",
  "Senior Infrastructure Engineer",
  "Senior Network Engineer",
  "Senior Database Architect",
  "Senior QA Engineer",
  "Senior SDET",
  "Senior QA Manager",
  "Senior Security Test Engineer",
  "Senior Mobile Test Engineer",
  "Senior Performance Test Engineer",
  "Senior Test Automation Engineer",
  "Senior Product Manager",
  "Senior Program Manager",
  "Senior Technical Product Manager",
  "Senior Video Game Producer",
  "Senior Product Designer",
  "Senior UX Designer",
  "Senior Mobile UX Designer",
  "Senior Web Designer",
  "Senior Graphic Designer",
];

const roles = quickMake([...roles_, ...senior_roles]);

// const defaultStates = { Language: [languages[0]], Tenure: [tenures[0]] };
const defaultStates = {
  Role: { active: true, attributes: [] },
  Model: { active: true, attributes: [] },
  Language: { active: true, attributes: [languages[0]] },
  Tenure: { active: true, attributes: [tenures[0]] },
  TechStack: { active: true, attributes: [] },
  TechAntiStack: { active: false, attributes: [] },
  OrgSize: { active: true, attributes: [] },
  OrgChars: { active: true, attributes: [] },
  Industry: { active: true, attributes: [] },
  Salary: { active: true, attributes: [] },
};
