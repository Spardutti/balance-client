import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const FolderModal = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const acceptButton = () => {
    toggle();
  };

  return (
    <Modal isOpen={modal}>
      <ModalHeader toggle={toggle}>Create Folder</ModalHeader>
      <ModalBody>
        <p>Hello and Welcome</p>
      </ModalBody>
      <ModalFooter>
        <Button onClick={acceptButton} className="bg-primary">
          Okay!
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default FolderModal;
