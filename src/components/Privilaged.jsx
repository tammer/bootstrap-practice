import { Navigate } from "react-router-dom";

const Privilaged = (props) => {
  const authorized = localStorage.getItem("token") ? true : false;

  function redirect() {
    localStorage.setItem("next", window.location.pathname);
    return <Navigate to="/login" />;
  }

  return <>{authorized ? props.children : redirect()}</>;
};

export default Privilaged;
