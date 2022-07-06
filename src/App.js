import "./index.css";
import { Outlet, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// !!! I wish I knew what activeKey did

function App() {
  const userName = localStorage.getItem("userName");
  const navigate = useNavigate();

  function logout() {
    const token = localStorage.getItem("token");
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    fetch("http://localhost:8000/logout/", {
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
      <Nav
        className="navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
        activeKey="/home"
      >
        <Nav.Item>
          <Nav.Link href="/home">backgroundprocess.com</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/requirements">Requirements</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/skills">Skills</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/anchors">Anchors</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          {localStorage.getItem("token") ? (
            <>
              <Button
                className="btn btn-sm btn-secondary"
                onClick={(e) => {
                  logout();
                  navigate("/login");
                }}
              >
                Logout ({userName})
              </Button>
              {/* <span>{localStorage.getItem("token")}</span> */}
            </>
          ) : (
            <Nav.Link href="/login">Login</Nav.Link>
          )}
        </Nav.Item>
      </Nav>
      <Outlet />
    </>
  );
}

export default App;
