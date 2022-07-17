import { Modal, Button } from "react-bootstrap";
const GeneralConfirm = ({
  title = "Confirm",
  message,
  show,
  declineText = "Cancel",
  acceptText = "OK",
  onDecline,
  onAccept,
}) => {
  return (
    <>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        {message}
        <Button onClick={onDecline} variant="secondary">
          {declineText}
        </Button>
        <Button onClick={onAccept} variant="primary">
          {acceptText}
        </Button>
      </Modal>
    </>
  );
};

export default GeneralConfirm;
