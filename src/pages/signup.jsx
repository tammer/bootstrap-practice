import { useLocation } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const SignUp = () => {
  const location = useLocation();
  const formState = location.state;

  const JD = <span className="code-color-2">jd</span>;

  function makeCondition(id, isLast = false) {
    const cond = {
      Role: { suffix: "role", comparison: "∈" },
      Model: { suffix: "work_model", comparison: "∈" },
      Tenure: { suffix: "tenure", comparison: "∈" },
      TechStack: { suffix: "tech_stack", comparison: "⊇" },
      TechAntiStack: { suffix: "tech_stack", comparison: "∉" },
      Industry: { suffix: "industry", comparison: "∈" },
      Salary: { suffix: "salary", comparison: ">=" },
      OrgChars: { suffix: "org_chars", comparison: "∈" },
      OrgSize: { suffix: "org_size", comparison: "" },
      Experential: { suffix: "experentials", comparison: "⊇" },
    };

    if (
      !formState[id] ||
      !formState[id]["active"] ||
      formState[id]["attributes"].length === 0
    ) {
      return <div></div>;
    }
    console.log("id", id);
    const listItems = formState[id]["attributes"].slice(0, 3).map((e) => (
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

    if (id === "OrgSize") {
      return (
        <div>
          {JD}.org_size {formState[id]["attributes"][0]["label"]}
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
          <Col sm="10">
            <h3>Now Activate Background Process</h3>
            <p>Your filter is configured! Here's what happens on activation:</p>

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
                      {makeCondition("TechAntiStack")}
                    </div>
                    <div className="code-indent">
                      {makeCondition("Industry", true)}
                    </div>
                    <div className="code-indent">
                      {makeCondition("OrgSize")}
                    </div>
                    <div className="code-indent">
                      {makeCondition("OrgChars")}
                    </div>
                    <div className="code-indent">
                      {makeCondition("Experentials")}
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
                        <span className="code-color-3">introduce</span>(you
                        &gt;&lt;&nbsp;
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
            <div>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Activate Background Process:</Form.Label>
                  <Form.Control type="email" placeholder="email" />
                  <Form.Text className="text-muted">
                    You will need to click a confirmation link to complete
                    activation
                  </Form.Text>
                </Form.Group>

                <Button variant="secondary">Revise Spec</Button>
                <Button variant="primary" type="submit">
                  Activate
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignUp;
