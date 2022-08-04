import "./Navbar.scss";
import { Outlet } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function App() {
  const userName = localStorage.getItem("userName");
  const navigate = useNavigate();

  function logout() {
    const token = localStorage.getItem("token");
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    fetch(process.env.REACT_APP_API + "/logout/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Token ${token}`,
      },
    });
    return;
  }

  return (
    <>
      <Navbar fixed="top" expand="md">
        <Container>
          <Navbar.Brand href="/home">BP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/requirements">My Requirements</Nav.Link>
              <Nav.Link href="/skills">My Skillset</Nav.Link>
              <Nav.Link href="/opps">My Opportunities</Nav.Link>
            </Nav>
            {localStorage.getItem("token") ? (
              <NavDropdown title={userName} id="basic-nav-dropdown">
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item
                  href="#"
                  onClick={(e) => {
                    logout();
                    navigate("/login");
                  }}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
}

export default App;
