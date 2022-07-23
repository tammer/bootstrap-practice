// reference: https://codepen.io/joealva1957/pen/vPrKEP

import ReactMarkdown from "react-markdown";
import { ChevronDoubleDown } from "react-bootstrap-icons";

const name = "Sam Power";
const page1 = `
# Welcome to Background Process
## You are here on invitation from ${name}
`;

const pages = [page1];

const Sandbox = () => {
  return (
    <div className="scontainer">
      <div className="ssection">
        <ReactMarkdown children={page1} />
        <div
          style={{
            // background: "yellow",
            width: "100%",
            position: "absolute",
            bottom: "20px",
            textAlign: "center",
          }}
        >
          <a href="#p2">
            <ChevronDoubleDown size="50" />
          </a>
        </div>
      </div>

      <div className="ssection">
        <a name="p2"></a>b
      </div>
      <div className="ssection">c</div>
      <div className="ssection">d</div>
      <div className="ssection">e</div>
    </div>
  );
};

export default Sandbox;
