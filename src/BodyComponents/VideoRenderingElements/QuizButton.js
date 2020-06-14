import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function QuizButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="outline-primary" size="md" block onClick={handleShow}>
        Click to ask your Doubts
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Ask your Doubts in Forum</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you want to ask your question in Question forum ???
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-primary" onClick={handleClose}>
            Go to Question forum
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default QuizButton;
