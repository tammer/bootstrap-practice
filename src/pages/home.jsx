import { Container, Row, Col, Button } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col sm="2"></Col>
          <Col sm="8">
            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <h1 className="display-6">Welcome to</h1>
              <h8>(the protype of)</h8>
              <h1 className="display-1">Background Process</h1>
              <p class="lead">
                The Job Opportunity Management System for Developers{" "}
              </p>
              <h5>
                Background Process is a filtering system for the job market
              </h5>
            </div>
            <div className="d-flex justify-content-center">
              <ol>
                <li>
                  You spec a series of parameters (role, tech stack, salary,
                  ...).
                </li>
                <li>
                  Recruiters and hiring orgs submit job requisites to the
                  platform.
                </li>
                <li>
                  When (and only when) a job opportunity meets your criteria, we
                  show it to you.
                </li>
                <li>
                  If (and only if) you like what you see, we connect you to the
                  submitter.
                </li>
              </ol>
            </div>
            <h1 style={{ textAlign: "center" }}>Benefits</h1>
            <dl className="row">
              <dt className="col-sm-3">Effecient</dt>
              <dd className="col-sm-9">
                You only see opportunities that are exactly what you would
                actually consider.
              </dd>
              <dt className="col-sm-3">Annonymous</dt>
              <dd className="col-sm-9">
                Nobody sees your criteria or that you are using the platform. In
                fact, nobody sees anything ever. Only when you explitily request
                it, the platform facilitates intros.
              </dd>
              <dt className="col-sm-3">Customizable</dt>
              <dd className="col-sm-9">
                Love your current job? Then spec your dream job at a salary high
                enough to actually entice you. Ready for a change? Expand the
                range of a few parameters to start seeing more opps.
              </dd>
              <dt className="col-sm-3">Unobtrusive</dt>
              <dd className="col-sm-9">
                The platform is, literally, in the background. Occationally it
                alerts you to opportunities that are exactly what you told it to
                flag.
              </dd>
            </dl>
            <div style={{ textAlign: "center" }}>
              <h1 className="display-6">Just a Matching Engine</h1>
              <p>Background Process IS NOT a jobs board.</p>
              <p>Background Process IS NOT a recruitment agency.</p>
              <p>
                It's a computer program that runs once a day applying a fitler
                to the job market.
              </p>
              <br />
              <Button href="/requirements">Try it</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
