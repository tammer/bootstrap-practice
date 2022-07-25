// reference: https://codepen.io/joealva1957/pen/vPrKEP

import ReactMarkdown from "react-markdown";
import { ChevronDoubleDown } from "react-bootstrap-icons";
import { Row, Col, Container } from "react-bootstrap";

const name = "Sam Power";

const page1 = `# Welcome to Background Process
## You are here on invitation from ${name}`;

const page2 = `### Background Process monitors the job market for opportunities which match criteria you specify.
##### <visual>`;

const page3 = `### Any time there is a match, you are notified.
##### <visual>
`;

const page4 = `### If you are interested in an opportunity we surface, we connect you with the hiring organization (and drop out of the process).
##### <visual>
`;

const page6 = `## To join Background Process, you need an Endorsement from someone alrady on the platform
##### <visual>
### Endorsements on BP are two way; that means you can only endorse someone who is willing to endorse you too. We call this level-setting.
`;

const page7 = `
### Levelsetting does two things:

1) It ensures only credible professionals are on this platform

visual: individual credibilty -> platfrom credibility -> more and better orgs submitting jobs -> more and/or better ops for you

2) It creates platform wide consistency of self assessments

<visual of nodes linked up at the "expert level"

`;

const page8 = `
## Sam Power has invited you to join the platform and level-set on Python, Django and 3 other skills. 
### CTA:  Levelset with Sam and join BP >>

`;

const Block = ({ title, text }) => {
  return (
    <div className="c1">
      <Row>
        <div className="r1">{title}</div>
      </Row>
      <Row className="r2">
        <div>
          <img
            width="80px"
            src="https://static.vecteezy.com/system/resources/previews/005/073/013/non_2x/milk-glass-pictogram-line-art-icon-cool-thing-symbol-vector.jpg"
          />
        </div>
      </Row>
      <Row className="r3">{text}</Row>
    </div>
  );
};

const featurePage = (
  <>
    <ReactMarkdown># Key Aspects of BP</ReactMarkdown>
    <Row>
      <Col>
        <Block
          title="Precision"
          text="You spec the job(s) you would consider using 10 attributes: role, tech stack, salary, work model, location, industry, org type, org size and experential factors."
        />
      </Col>

      <Col>
        <Block
          title="Accuracy"
          text="You will be notified of every opportunity that matches your spec. No more. No less"
        />
      </Col>

      <Col>
        <Block
          title="Anonymity"
          text="No organizations can see your profile or your critiera or anything about you. You remain anonymous until you choose to meet a particular organization."
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <Block
          title="24/7/365"
          text="Organizations continually submit requirements for roles they need to fill. Every one is checked against your spec."
        />
      </Col>

      <Col>
        <Block
          title="Not a Jobs Board"
          text="There are no job postings on this platform. Organizations submit objective, paramaterized job descriptions which are matched against your specs. "
        />
      </Col>

      <Col>
        <Block
          title="Not a Recruiter"
          text="No headhunters work here. BP is matching engine that ensures you see all the opportunities that interst you and none that don't. That's all we do."
        />
      </Col>
    </Row>
  </>
);

const pages = [
  [page1, true],
  [page2, true],
  [page3, true],
  [page4, true],
  [featurePage, false],
  [page6, true],
  [page7, true],
  [page8, true],
];

const Sandbox = () => {
  return (
    <div className="scontainer">
      {pages.map((item, index) => {
        return (
          <div key={"welcome" + index} className="ssection">
            <a name={index}></a>
            {item[1] ? <ReactMarkdown children={item[0]} /> : item[0]}
            <div
              style={{
                // background: "yellow",
                width: "100%",
                position: "absolute",
                bottom: "20px",
                textAlign: "center",
              }}
            >
              <a href={"#" + (index + 1).toString()}>
                <ChevronDoubleDown size="50" />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Sandbox;
