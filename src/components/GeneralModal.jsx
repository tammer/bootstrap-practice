import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const GeneralModal = ({
  title,
  message,
  cancel = "Cancel",
  accept = "OK",
  show = true,
  handleAccept,
}) => {
  const [show_, setShow_] = useState(show);
  return (
    <Modal show={show_} onHide={(e) => setShow_(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={(e) => setShow_(false)}>
          {cancel}
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            setShow_(false);
            handleAccept();
          }}
        >
          {accept}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GeneralModal;
