const Spec = ({ formState }) => {
  const LIMIT = 5;
  const JD = <span className="code-color-2">jd</span>;
  function makeCondition(id, isLast = false) {
    const cond = {
      Role: { suffix: "role", comparison: "∈" },
      WorkModel: { suffix: "work_model", comparison: "∈" },
      Location: { suffix: "location", comparison: "∈" },
      Tenure: { suffix: "tenure", comparison: "∈" },
      TechStack: { suffix: "tech_stack", comparison: "⊇" },
      TechAntiStack: { suffix: "tech_stack", comparison: "∉" },
      Industry: { suffix: "industry", comparison: "∈" },
      Salary: { suffix: "salary", comparison: ">=" },
      OrgType: { suffix: "org_type", comparison: "∈" },
      OrgSize: { suffix: "org_size", comparison: "" },
      Experiential: { suffix: "Experiential", comparison: "⊇" },
    };
    const NAME = id === "Location" ? "place_name" : "name";
    const AND = <span className="code-color-1">AND</span>;

    if (
      !formState[id] ||
      !formState[id]["active"] ||
      formState[id]["attributes"].length === 0
    ) {
      return <div></div>;
    }
    const listItems = formState[id]["attributes"]
      .slice(0, LIMIT)
      .map((e, idx) => (
        <span key={idx}>
          <span className="attribute">{e[NAME]}</span>
          ,&nbsp;
        </span>
      ));
    if (id === "Salary") {
      return (
        <div>
          {JD}.salary &gt;={" "}
          <span className="attribute">
            {formState[id]["attributes"][0]["ccy"]}
            {formState[id]["attributes"][0]["amount"]}
          </span>
          &nbsp;{AND}
        </div>
      );
    }

    if (id === "OrgSize") {
      return <div>blah</div>;
      return (
        <div>
          {JD}.org_size &lt;&nbsp;
          <span className="attribute">
            {formState[id]["attributes"][0]["name"].substring(2)}
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
          {formState[id]["attributes"].length > LIMIT ? "..." : ""}
          {"}"}
          {!isLast ? <>&nbsp;{AND}</> : ""}
        </div>
      </>
    );
  }

  return (
    <>
      {formState ? (
        <code>
          <div className="filter-code">
            <div className="code-indent"></div>
            <span className="code-color-2">opportunities</span> = []
            <br />
            <span className="code-color-2">jd_list</span> ={" "}
            <span className="code-color-3">fetchNewJobDescriptions()</span>
            <br />
            for {JD} in <span className="code-color-2">jd_list</span>:
            <div className="code-indent">
              <span className="code-color-1">IF:</span>
              <div className="code-indent">{makeCondition("Role")}</div>
              <div className="code-indent">{makeCondition("Salary")}</div>
              <div className="code-indent">{makeCondition("Tenure")}</div>
              <div className="code-indent">{makeCondition("WorkModel")}</div>
              <div className="code-indent">{makeCondition("Location")}</div>
              <div className="code-indent">{makeCondition("TechStack")}</div>
              <div className="code-indent">{makeCondition("OrgSize")}</div>
              <div className="code-indent">{makeCondition("OrgType")}</div>
              <div className="code-indent">{makeCondition("Experiential")}</div>
              <div className="code-indent">
                {makeCondition("TechAntiStack")}
              </div>
              <div className="code-indent">
                {makeCondition("Industry", true)}
              </div>
              <span className="code-color-1">THEN:</span>
              <div className="code-indent">
                {formState["active"] ? (
                  <span className="code-color-3">
                    <span className="code-color-2">opportunities</span>.append(
                    {JD})
                  </span>
                ) : (
                  <span className="code-color-3">
                    <span className="code-color-3">
                      # !!! Do nothing; spec is inactive
                    </span>
                  </span>
                )}
              </div>
            </div>
          </div>
        </code>
      ) : (
        ""
      )}
    </>
  );
};

export default Spec;
