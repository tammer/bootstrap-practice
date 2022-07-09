import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <h1>Home Page</h1>
          <Col>You are: {localStorage.getItem("userName")}</Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
