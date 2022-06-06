import { Container, Row, Col, Table } from "react-bootstrap";
import Select from "react-select";
import { Clipboard, Send } from "react-bootstrap-icons";

const Credibility = ({ count }) => {
  return (
    <div>
      <h4>Calibration Link {count}</h4>

      <div class="card">
        <div class="card-body">
          <p class="card-text">
            <div className="d-inline-block">
              This is the calibration link for peer(s) who are{" "}
            </div>
            <div className="d-inline-block">
              <Select
                defaultValue={quickMake(["at my level"])}
                options={quickMake([
                  "at my level",
                  "at or above my level",
                  "above my level",
                ])}
              />
            </div>
            <div className="d-inline-block">at</div>
            <div className="d-inline-block">
              <Select
                isMulti={true}
                options={quickMake(["Python", "C++", "Ruby", "Postgres"])}
              />
            </div>
          </p>
          <h3 class="card-title text-center">
            <span class="badge bg-success">http://bp.com/{genLink()}</span>
            <a href="#">
              <Clipboard />
              <Send />
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};

function quickMake(y) {
  return y.map((e) => ({ value: e, label: e }));
}

function genLink() {
  //   return "F5K2";
  return Math.random().toString(36).slice(2, 6);
}

export default Credibility;
