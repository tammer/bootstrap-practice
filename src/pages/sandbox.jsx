import { useState } from "react";

import LocationSelector from "../components/LocationSelector";
import GeneralModal from "../components/GeneralModal";

const Sandbox = () => {
  const [state, setState] = useState();
  return (
    <>
      <LocationSelector isMulti={true} value={state} handleChange={setState} />
      <GeneralModal title="Title" message="here is the message" />
    </>
  );
};

export default Sandbox;
