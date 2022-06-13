import { useLocation } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const SignUp = () => {
  const location = useLocation();
  const formState = location.state;
  console.log("formState", formState);

  const JD = <span className="code-color-2">jd</span>;

  function makeCondition(id, isLast = false) {
    const cond = {
      Role: { suffix: "role", comparison: "∈" },
      Model: { suffix: "work_model", comparison: "∈" },
      Tenure: { suffix: "tenure", comparison: "∈" },
      TechStack: { suffix: "tech_stack", comparison: "⊇" },
      Industry: { suffix: "industry", comparison: "∈" },
      Salary: { suffix: "salary", comparison: ">=" },
    };

    if (
      !formState[id] ||
      !formState[id]["active"] ||
      formState[id]["attributes"].length === 0
    ) {
      return <div></div>;
    }
    const listItems = formState[id]["attributes"].slice(0, 2).map((e) => (
      <span>
        <span className="attribute">{e["label"]}</span>,&nbsp;
      </span>
    ));
    if (id === "Salary") {
      return (
        <div>
          {JD}.salary >= ${formState[id]["attributes"][0]["label"]}
          &nbsp;&amp;&amp;
        </div>
      );
    }

    return (
      <>
        <div>
          {JD}.{cond[id]["suffix"] + " " + cond[id]["comparison"] + " {"}
          {listItems}
          {formState[id]["attributes"].length > 3 ? "..." : ""}
          {"}"}
          {!isLast ? <>&nbsp;&amp;&amp;</> : ""}
        </div>
      </>
    );
  }

  return (
    <>
      <Container>
        <Row>
          <Col sm="5">Explain everyghing</Col>
          <Col sm="7">
            <h4>Here's what runs each day</h4>
            <code>
              <div className="filter-code">
                <div className="code-indent"></div>
                <span className="code-color-1">Each day:</span>
                <div className="code-indent">
                  <span className="code-color-2">jd_list</span> ={" "}
                  <span className="code-color-3">
                    fetchNewJobDescriptions()
                  </span>
                  <br />
                  for each {JD} in <span className="code-color-2">jd_list</span>
                  :
                  <div className="code-indent">
                    <span className="code-color-1">IF:</span>
                    <div className="code-indent">{makeCondition("Role")}</div>
                    <div className="code-indent">{makeCondition("Salary")}</div>
                    <div className="code-indent">{makeCondition("Model")}</div>
                    <div className="code-indent">{makeCondition("Tenure")}</div>
                    <div className="code-indent">
                      {makeCondition("TechStack")}
                    </div>
                    <div className="code-indent">
                      {makeCondition("Industry", true)}
                    </div>
                    <span className="code-color-1">THEN:</span>
                    <div className="code-indent">
                      <span className="code-color-3">send_email(</span>to: you,
                      content: {JD}.full_description
                      <span className="code-color-3">)</span>{" "}
                    </div>
                    <div className="code-indent">
                      <span className="code-color-1">IF:</span> you.interested()
                      === true:
                      <div className="code-indent">
                        <span className="code-color-3">introduce</span>(you,
                        {JD}.contact_person
                        <span className="code-color-3">)</span>
                      </div>
                      <span className="code-color-1">ELSE:</span>
                      <div className="code-indent">nil</div>
                    </div>
                  </div>
                </div>
              </div>
            </code>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignUp;
