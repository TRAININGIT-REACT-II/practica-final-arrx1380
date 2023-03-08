import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CustomModal = ({
  title,
  question,
  noButton,
  yesButton,
  show,
  modalClose,
  modalConfirm,
}) => {
  // References
  const modalRef = useRef(null);
  const modalGroupRef = useRef(document.getElementById("modals"));

  useEffect(() => {
    const modalEl = document.createElement("div");
    modalGroupRef.current.appendChild(modalEl);
    modalRef.current = modalEl;
    return () => modalGroupRef.current.removeChild(modalRef.current);
  }, []);

  if (show && modalRef.current != null) {
    return createPortal(
      <Modal show={show} onHide={() => modalClose()}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{question}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => modalClose()}>
            {noButton}
          </Button>
          <Button variant="danger" onClick={() => modalConfirm()}>
            {yesButton}
          </Button>
        </Modal.Footer>
      </Modal>,
      modalRef.current
    );
  } else {
    return null;
  }
};

export default CustomModal;
