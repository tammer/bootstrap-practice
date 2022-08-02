const Spec = ({ formState }) => {
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
      OrgType: { suffix: "org_chars", comparison: "∈" },
      OrgSize: { suffix: "org_size", comparison: "" },
      Experiential: { suffix: "Experiential", comparison: "⊇" },
    };

    if (
      !formState[id] ||
      !formState[id]["active"] ||
      formState[id]["attributes"].length === 0
    ) {
      return <div></div>;
    }
    const listItems = formState[id]["attributes"].slice(0, 3).map((e) => (
      <span>
        <span className="attribute">{e["label"]}</span>,&nbsp;
      </span>
    ));
    if (id === "Salary") {
      return (
        <div>
          {JD}.salary &gt;={" "}
          <span className="attribute">
            ${formState[id]["attributes"][0]["label"]}
          </span>
          &nbsp;&amp;&amp;
        </div>
      );
    }

    if (id === "OrgSize") {
      return <div>blah</div>;
      return (
        <div>
          {JD}.org_size &lt;&nbsp;
          <span className="attribute">
            {formState[id]["attributes"][0]["label"].substring(2)}
          </span>
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
      <code>
        <div className="filter-code">
          <div className="code-indent"></div>
          <span className="code-color-1">While(true):</span>
          <div className="code-indent">
            <span className="code-color-2">jd_list</span> ={" "}
            <span className="code-color-3">fetchNewJobDescriptions()</span>
            <br />
            for each {JD} in <span className="code-color-2">jd_list</span>:
            <div className="code-indent">
              <span className="code-color-1">IF:</span>
              <div className="code-indent">{makeCondition("Role")}</div>
              <div className="code-indent">{makeCondition("Salary")}</div>
              <div className="code-indent">{makeCondition("Model")}</div>
              <div className="code-indent">{makeCondition("Tenure")}</div>
              <div className="code-indent">{makeCondition("TechStack")}</div>
              <div className="code-indent">
                {makeCondition("TechAntiStack")}
              </div>
              <div className="code-indent">
                {makeCondition("Industry", true)}
              </div>
              <div className="code-indent">{makeCondition("OrgSize")}</div>
              <div className="code-indent">{makeCondition("OrgType")}</div>
              <div className="code-indent">{makeCondition("Experiential")}</div>
              <span className="code-color-1">THEN:</span>
              <div className="code-indent">
                <span className="code-color-3">send_email(</span>to: you,
                content: {JD}.full_description
                <span className="code-color-3">)</span>{" "}
              </div>
              <div className="code-indent">
                <span className="code-color-1">IF:</span> you.interested() ===
                true:
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
            <span className="code-color-3">
              sleep(
              <span className="code-color-0">24 hours</span>)
            </span>
          </div>
        </div>
      </code>
    </>
  );
};

export default Spec;
