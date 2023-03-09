import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import { useContext } from "react";
import ThemeContext from "../contexts/theme";
import { THEMES } from "../constants/themes";
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
  // Contexts
  const themeContext = useContext(ThemeContext);

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
        <Modal.Header
          closeButton
          className={
            themeContext.current === THEMES.dark
              ? "bg-dark bg-opacity-75 text-white"
              : null
          }
        >
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body
          className={
            themeContext.current === THEMES.dark
              ? "bg-dark bg-opacity-75 text-white"
              : null
          }
        >
          {question}
        </Modal.Body>
        <Modal.Footer
          className={
            themeContext.current === THEMES.dark
              ? "bg-dark bg-opacity-75 text-white"
              : null
          }
        >
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
