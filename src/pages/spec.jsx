import "bootstrap/dist/css/bootstrap.min.css";
import "./..//index.css";
import "./..//App.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import AttributeSection from "./..//components/AttributeSection";
import SalarySection from "./..//components/SalarySection";
import { Collapse } from "bootstrap";

function Spec() {
  const show = (x) => {
    let myCollapse = document.getElementById("collapseTarget");
    let bsCollapse = new Collapse(myCollapse, { toggle: false }); // toggle to false means no toggle on construct
    x ? bsCollapse.show() : bsCollapse.hide();
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col></Col>
        </Row>
        <Row>
          <Col sm={4}>
            <div className="left-pane">
              <pre>
                <code>
                  match is true if:
                  <br />
                  spec.roles contains jd.roles
                  <br />
                  AND
                  <br />
                  spec.work_model contains jd.work_model
                </code>
              </pre>
            </div>
          </Col>
          <Col sm={8}>
            <Row>
              <h3>Spec</h3>
            </Row>
            <Row>
              <Col md={12}>
                <AttributeSection
                  title="Role(s)"
                  options={roles}
                  placeholder="Enter job titles"
                  instructions={
                    <>
                      <div className="instructions">
                        <ul>
                          <li>
                            Enter a role or multiple roles that you would
                            potentially accept
                          </li>
                        </ul>
                      </div>
                    </>
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <AttributeSection
                  title="Work Model"
                  instructions="Leave this field empty if you are indifferent to the organization's work model. All-remote means everyone in the entire compnay is remote."
                  options={quickMake([
                    "On-site",
                    "Hybrid",
                    "Remote",
                    "All-Remote",
                    "Any",
                  ])}
                  placeholder={"Enter work model (On-site, remote, etc)"}
                />
              </Col>
              <Col>
                <AttributeSection
                  title="Workplace Language"
                  options={quickMake(["English", "German", "Francis", "Dansk"])}
                  placeholder={"Enter work model (On-site, remote, etc)"}
                />
              </Col>
            </Row>
            <Row>
              <Col md={5}>
                <AttributeSection
                  title="Tenure"
                  options={quickMake(["Permanent", "Contract"])}
                  placeholder={"Enter contractual requirements"}
                />
              </Col>
              <Col md={4}>
                <SalarySection />
              </Col>
            </Row>
            <Row>
              <Col>
                <AttributeSection
                  title="Technology Stack"
                  options={quickMake(y)}
                  placeholder="Enter the technologies you want to work with"
                  instructions={
                    <>
                      <div className="instructions">
                        <ul>
                          <li>
                            Enter the technologies that you want to work with
                          </li>
                          <li>
                            Match occurs if a a job's tech stack equals or is a
                            subset of this list. (The more items on this list,
                            the more matches.)
                          </li>
                        </ul>
                      </div>
                    </>
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col sm={3}>
                <AttributeSection
                  simple={true}
                  title="Org Size"
                  options={quickMake([
                    "< 10 employees",
                    "< 100 employees",
                    "< 1000 employees",
                    "< 10,000 employees",
                    "Doesn't matter",
                  ])}
                />
              </Col>
              <Col sm={9}>
                <AttributeSection
                  title="Org Characteristics"
                  instructions="Leave this field empty if you are indifferent to characteristics of the org"
                  placeholder="Can be empty"
                  options={quickMake([
                    "publicly traded",
                    "government",
                    "not for profit",
                    "charity",
                    "early stage startup",
                    "growth stage startup startup",
                    "late stage startup",
                  ])}
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <AttributeSection
                  title="Must have Experential Factors"
                  options={quickMake([
                    "Female-led",
                    "Pet-friendly",
                    "Childcare",
                    "unlinited vacation",
                  ])}
                  placeholder="Enter the technologies you want to work with"
                />
              </Col>
            </Row>
          </Col>
          {/* <Col sm={4}>
            <div>Hello there is much to discuss today. many, many things.</div>
          </Col> */}
        </Row>
      </Container>
    </>
  );
}

export default Spec;

function quickMake(y) {
  return y.map((e) => ({ value: e, label: e }));
}

const y = [
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
];

const roles = [
  { value: "chocolate1", label: "Frontend Developer" },
  { value: "chocolate2", label: "Senior Frontend Developer" },
  { value: "strawberry3", label: "Backend Developer" },
  { value: "strawberry4", label: "Senior Backend Developer" },
  { value: "strawberry5", label: "Q/A Engineer" },
  { value: "strawberry661", label: "VP Engineering" },
];
