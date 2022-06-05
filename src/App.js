// import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Outlet, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

// !!! I wish I knew what activeKey did

function App() {
  return (
    <>
      <Nav className="navbar-dark bg-dark" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/spec">Spec</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/skills">Skills</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Outlet />
    </>
  );
}

export default App;
