import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const FolderModal = (props) => {
  const toggle = () => {
    props.setFirstVisit(!props.fisrtVisit);
  };

  const acceptButton = () => {
    toggle();
  };

  return (
    <Modal isOpen={props.firstVisit}>
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
