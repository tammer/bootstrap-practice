import { Modal, Button } from "react-bootstrap";
import { acceptAnchor, declineAnchor } from "../helpers/helpers";

import LevelSlider, { FrozenLevelSlider } from "./LevelSlider";

const ConfirmSkill = ({ spec, show = true, onHide, onAccept, onDecline }) => {
  const showMessage2 = () => (
    <>
      {spec["passer_display_name"] + " "}
      is inviting you to levelset on
      {" " + spec["skill"]}. However, your skill levels are quite different:
      <br />
      <br />
      <p>{spec["passer_first_name"]}'s Level:</p>
      <LevelSlider frozen value={spec["level"]} />
      <br />
      <p>Your Level:</p>
      <LevelSlider frozen value={spec["my_level"]} />
      <br />
      <br />
      <p>If this difference is because:</p>
      <ul>
        <li>
          you have
          {spec["level"] < spec["my_level"] ? " overstated " : " understated "}
          your {spec["skill"] + " "} skill level, then close this dialog, adjust
          your {spec["skill"] + " "} skill level then return.
        </li>
        <li>
          {spec["passer_first_name"] + " "} has
          {spec["level"] > spec["my_level"] ? " overstated " : " understated "}
          their {spec["skill"] + " "} skill level, then you should decline this
          invite. ({spec["passer_first_name"] + " "} can adjust their self
          assessment to something more accurate. Then{" "}
          {spec["passer_first_name"] + " "} or you can re-issue an invite.)
        </li>
        <li>
          you are in fact at different skill levels, then simply decline the
          invite. (Inaccurate endorsements degrade your credibility. Learn
          more>>)
        </li>
      </ul>
    </>
  );

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
      {spec["confirmable"] ? showMessage() : showMessage2()}
      <Button
        onClick={() => declineAnchor(spec["id"]).then((res) => onDecline(res))}
        variant="secondary"
      >
        Decline
      </Button>
      <Button
        disabled={!spec["confirmable"]}
        onClick={() => acceptAnchor(spec["id"]).then((res) => onAccept(res))}
        variant="primary"
      >
        Accept
      </Button>
    </Modal>
  );
};

export default ConfirmSkill;
