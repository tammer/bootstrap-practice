import { Modal, Button } from "react-bootstrap";
import { acceptAnchor, declineAnchor } from "../helpers/helpers";

const ConfirmExistingSkill = ({
  spec,
  show = true,
  onHide,
  onAccept,
  onDecline,
}) => {
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
        onClick={() => declineAnchor(spec["id"]).then((res) => onDecline(res))}
        variant="secondary"
      >
        Decline
      </Button>
      <Button
        onClick={() => acceptAnchor(spec["id"]).then((res) => onAccept(res))}
        variant="primary"
      >
        Accept
      </Button>
    </Modal>
  );
};

export default ConfirmExistingSkill;
