import { Modal, Button } from "react-bootstrap";
import { acceptAnchor, declineAnchor } from "../helpers/helpers";

import { FrozenLevelSlider } from "./LevelSlider";

const ConfirmSkill = ({ spec, show = true, onHide, onAccept, onDecline }) => {
  const showMessage = () => (
    <>
      {spec["passer_display_name"] + " "}
      is inviting you to levelset on
      {" " + spec["skill"]}:
      <FrozenLevelSlider
        low={spec["confirm_range"]["lb"]}
        high={spec["confirm_range"]["ub"]}
      />
      <p>
        {!spec["my_level"] ? (
          <>
            {spec["passer_first_name"]}'s self-assessed skill level is in the
            range shown. {spec["passer_first_name"] + " "} is asserting that
            your skill level is also in this range.
          </>
        ) : (
          <>
            {spec["passer_first_name"]}'s self-assessed skill level is in the
            range shown. Yours is too.
          </>
        )}
      </p>
      <p>Accept this invitation if:</p>
      <ul>
        <li>
          You agree
          {" " + spec["passer_first_name"]}'s
          {" " + spec["skill"]} skill level is in the range shown.
        </li>
        {!spec["my_level"] ? (
          <li>Your {spec["skill"] + " "} skill level is in the range shown.</li>
        ) : (
          ""
        )}
      </ul>
      <p>If you accept:</p>
      <ul>
        <li>
          {spec["passer_first_name"]} gains a {spec["skill"]} endorsement from
          you.
        </li>
        <li>
          You gain a {spec["skill"]} endorsement from
          {" " + spec["passer_first_name"]}.
        </li>
        <li>You both gain increased credibility on the platform.</li>
      </ul>
      <p>
        Decline this invitation if you disagree with {spec["passer_first_name"]}
        's assessment of themselves or you or if don't know enough about{" "}
        {spec["passer_first_name"]}'s skill level at {spec["skill"]}.
        (Inaccurate endorsements degrade your credibility. Learn more>>)
      </p>
    </>
  );
  const newSkillMessage = <>new skill message</>;
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{spec["skill"]}</Modal.Title>
      </Modal.Header>
      {/* {spec["my_level"] ? existingSkillMessage : newSkillMessage} */}
      {showMessage()}
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

export default ConfirmSkill;
