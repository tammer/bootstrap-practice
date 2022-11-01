import "./Navbar.scss";
import { Outlet } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import HttpsRedirect from "react-https-redirect";

function App() {
  const [message, setMessage] = useState(["", null]);
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
    <HttpsRedirect>
      <Navbar expand="md">
        <Navbar.Brand href={localStorage.getItem("token") ? "/home" : "/"}>
          &nbsp;&nbsp;BP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto main-area">
            {localStorage.getItem("token") ? (
              <>
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/requirements">Spec</Nav.Link>
              </>
            ) : (
              ""
            )}

            {/* <Nav.Link href="/skills">My Skillset</Nav.Link> */}
            {/* <Nav.Link href="/opps">My Opportunities</Nav.Link> */}
          </Nav>
          <Nav.Link href="/about">About</Nav.Link>
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
      </Navbar>
      {message[0] ? (
        <div id="message-area" className={message[1]}>
          {message[0]}
        </div>
      ) : (
        ""
      )}

      <Outlet context={[message, setMessage]} />
    </HttpsRedirect>
  );
}

export default App;
