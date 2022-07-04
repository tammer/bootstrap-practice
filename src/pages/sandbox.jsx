import { useState } from "react";

import LocationSelector from "../components/LocationSelector";

const Sandbox = () => {
  const [state, setState] = useState();
  return (
    <>
      <LocationSelector isMulti={true} value={state} handleChange={setState} />
    </>
  );
};

export default Sandbox;
