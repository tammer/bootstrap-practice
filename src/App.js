// import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Outlet, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

// !!! I wish I knew what activeKey did

function App() {
  return (
    <>
      <Nav
        className="navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
        activeKey="/home"
      >
        <Nav.Item>
          <Nav.Link href="/home">Landing Page</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/spec">Spec</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/requirements">Requirements</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/skills">Skills</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/cred">Calibration</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/loggedin-home">Loggedin Home</Nav.Link>
        </Nav.Item>
      </Nav>
      <Outlet />
    </>
  );
}

export default App;
