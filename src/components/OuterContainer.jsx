import { Container } from "react-bootstrap";

const OuterContainer = (props) => {
  return <Container className="outer-container">{props.children}</Container>;
};

export default OuterContainer;
