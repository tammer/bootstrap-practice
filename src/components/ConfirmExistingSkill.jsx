import { Modal, Button } from "react-bootstrap";

const ConfirmExistingSkill = ({
  spec,
  show = true,
  onHide,
  onAccept,
  onDecline,
}) => {
  function accept(id) {
    return fetch(`${process.env.REACT_APP_API}/anchor/${id}/accept`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    });
  }

  function decline(id) {
    return fetch(`${process.env.REACT_APP_API}/anchor/${id}/decline`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    });
  }

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Title</Modal.Title>
      </Modal.Header>
      {spec["passer_display_name"]}
      asserts that their
      {spec["skill"]} skill level is similar to yours. If you agree, you should
      accept this level-set. Decline this level-set if{" "}
      {spec["passer_display_name"]}'s skill level is actually outside the bounds
      shown. By accepting this Levelset:
      <ul>
        <li>
          You affirm Ross and you are at similar levels, with a margin of error
          as shown resulting in each your endorsing the other's ability.
        </li>
        <li>
          Your credibility on this platform is increased UNLESS your assessment
          of {spec["passer_display_name"]} is overstated relative to what the
          larger network implies.
        </li>
        <li>
          This platform wieghs accuracy higher than skill level. learn more>>
        </li>
      </ul>
      <Button
        onClick={() => decline(spec["id"]).then((res) => onDecline(res))}
        variant="secondary"
      >
        Decline
      </Button>
      <Button
        onClick={() => accept(spec["id"]).then((res) => onAccept(res))}
        variant="primary"
      >
        Accept
      </Button>
    </Modal>
  );
};

export default ConfirmExistingSkill;
