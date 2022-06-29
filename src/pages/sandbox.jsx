import { useState } from "react";

import SkillSelector from "../components/SkillSelector";
import LevelSelector from "../components/LevelSelector";

const Sandbox = () => {
  const [state, setState] = useState();
  const [state2, setState2] = useState();
  const [state3, setState3] = useState();

  function foo(e) {
    console.log("e", e);
    setState(e);
  }
  return (
    <>
      <SkillSelector isMulti={true} handleChange={foo} value={state} />
      <SkillSelector isMulti={false} handleChange={setState2} value={state2} />
      <LevelSelector handleChange={setState3} value={state3} />
    </>
  );
};

export default Sandbox;
