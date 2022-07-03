import { useState } from "react";
import { Navigate } from "react-router-dom";

const Privilaged = (props) => {
  const [authorized, setAuthorized] = useState(
    localStorage.getItem("token") ? true : false
  );
  return <>{authorized ? props.children : <Navigate to="/login" />}</>;
};

export default Privilaged;
