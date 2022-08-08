import React, { useState, useEffect } from "react";
import { formFromServer } from "../helpers/helpers";

const Spec = () => {
  const LIMIT = 5;
  const [formState, setFormState] = useState(null);
  useEffect(() => {
    formFromServer(setFormState);
  }, []);
  const JD = <span className="code-color-2">jd</span>;
  function makeCondition(id, isLast = false) {
    const cond = {
      Role: { suffix: "role", comparison: "∈" },
      WorkModel: { suffix: "work_model", comparison: "∈" },
      Location: { suffix: "loc", comparison: "∈" },
      Tenure: { suffix: "tenure", comparison: "∈" },
      TechStack: { suffix: "tech_stack", comparison: "⊇" },
      TechAntiStack: { suffix: "tech_stack", comparison: "∉" },
      Industry: { suffix: "industry", comparison: "∈" },
      Salary: { suffix: "salary", comparison: ">=" },
      OrgType: { suffix: "org_type", comparison: "∈" },
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
    const listItems = formState[id]["attributes"]
      .slice(0, LIMIT)
      .map((e, idx) => (
        <span key={idx}>
          <span className="attribute">{e["name"]}</span>
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
          {!isLast ? <>&nbsp;&amp;&amp;</> : ""}
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
              <div className="code-indent">{makeCondition("WorkModel")}</div>
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
                <span className="code-color-3">
                  <span className="code-color-2">opportunities</span>.append(
                  {JD})
                </span>
              </div>
              {/* <div className="code-indent">
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
                </div> */}
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
