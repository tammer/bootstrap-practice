import { Container, Row, Col, Button } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <h1>Welcome to Background Process</h1>
            <p>Compelling copy goes here.</p>
            <Button href="/spec">Try it</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
