import { Container, Row, Col } from "react-bootstrap";
import Requirement from "../components/Requirement";
import SalarySelector from "../components/SalarySelector";
// import Select from "react-select";
import Selector from "../components/Selector";

const Requirements = () => {
  return (
    <Container fluid style={{ paddingTop: "20px" }}>
      <Row>
        <Col sm="9">
          <Requirement
            title="Role"
            togglable={false}
            selector={<Selector options={roles} />}
            helper="Enter all the roles your would consider"
          />

          <Row>
            <Col>
              <Requirement
                title="Work Model"
                selector={<Selector options={models} />}
                helper="Enter all the work models you would consider. Remote = you are remote; All-Remote = every employee is remote"
              />
            </Col>
            <Col>
              <Requirement
                title="Workplace Language"
                togglable={false}
                selector={
                  <Selector options={languages} selectedOption={languages[0]} />
                }
                helper="Enter the (human) languages you can work in"
              />
            </Col>
          </Row>

          <Row>
            <Col>
              {" "}
              <Requirement
                title="Tenure"
                selector={
                  <Selector options={tenures} selectedOption={tenures[0]} />
                }
                helper="Enter the tenure structures you would consider"
              />
            </Col>
            <Col>
              <Requirement
                title="Min Salary"
                togglable={false}
                selector={<SalarySelector />}
                helper="Enter the minimum salary you would consider. If you love your current job, put a high number in here!"
              />
            </Col>
          </Row>

          <Requirement
            title="Technology Stack"
            togglable={false}
            selector={
              <Selector
                options={techStack}
                placeholder="List all the technologies you want to work with"
              />
            }
            helper="Any job spec whose tech stack is the same as or a subset of what is listed here constritutes a match on this field. Do not by bound by what is offered in the dropdown; a new attributes is automatically created if you type something unique."
          />
          <Requirement
            title="Technology Anti-Stack"
            selector={
              <Selector
                options={techStack}
                placeholder="List any technologies that would disqualify a role if they were a major part of the job spec."
              />
            }
            helper="Any job spec that matches any one technology listed here is disqualified"
          />
          <Row>
            <Col>
              <Requirement
                title="Org Size"
                selector={<Selector options={sizes} simple={true} />}
                helper="Enter the upperbound for the org's size"
              />
            </Col>
            <Col>
              <Requirement
                title="Org Characteristics"
                selector={<Selector options={characteristics} />}
                helper="Enter the types of organizations you would consider"
              />
            </Col>
          </Row>
        </Col>
      </Row>
      TODO: Location, Industry, Experiential question mark should open large
      explaining box, espeically for the tech section anti tech stack should
      start turned off
      <div style={{ marginBottom: "300px" }}></div>
    </Container>
  );
};

export default Requirements;

function quickMake(y) {
  return y.map((e) => ({ value: e, label: e }));
}

const roles = [
  { value: "chocolate1", label: "Frontend Developer" },
  { value: "chocolate2", label: "Senior Frontend Developer" },
  { value: "strawberry3", label: "Backend Developer" },
  { value: "strawberry4", label: "Senior Backend Developer" },
  { value: "strawberry5", label: "Q/A Engineer" },
  { value: "strawberry661", label: "VP Engineering" },
];

const models = quickMake(["On-site", "Hybrid", "Remote", "All-Remote"]);
const tenures = quickMake(["Permanent", "Contract"]);
const languages = quickMake(["English", "Deutsch", "Francis", "Dansk"]);

const sizes = quickMake([
  "< 10 employees",
  "< 100 employees",
  "< 1000 employees",
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
