import { useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Spec from "../components/Spec";

const RequirementsReview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formState = location.state;

  return (
    <>
      <Container>
        <Row>
          <Col sm="10">
            <h3>Your Filter is Configured</h3>
            <p>Here's what happens on activation:</p>

            <Spec formState={formState} />

            <div>
              <Form>
                <Button
                  variant="secondary"
                  onClick={() =>
                    navigate("/requirements", { state: formState })
                  }
                >
                  Revise Spec
                </Button>
                <Button
                  variant="primary"
                  onClick={() => navigate("/skills", { state: formState })}
                >
                  Next
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RequirementsReview;
