import { useState, useEffect } from "react";
import { standardGet } from "../helpers/helpers";

const Credibility = () => {
  const [data, setData] = useState();

  useEffect(() => {
    standardGet("credibility/", setData);
  }, []);

  return (
    <div>
      {data ? JSON.stringify(data) : ""} full cred (100%) at 3 endorsers and 9
      endorsements
    </div>
  );
};

export default Credibility;
