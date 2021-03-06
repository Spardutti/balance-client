import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const FolderModal = (props) => {
  const toggle = () => {
    props.setFirstVisit(!props.firstVisit);
  };

  const acceptButton = async () => {
    toggle();

    await fetch(props.serverUrl + "/user/" + props.userInfo._id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + props.token,
      },
    });
  };

  return (
    <Modal isOpen={props.firstVisit}>
      <ModalHeader toggle={toggle}>Welcome!</ModalHeader>
      <ModalBody>
        <p className="welcome-text">
          Items you add will be saved in the current month and year, you can
          specify a folder to keep things organized, when a new month starts,
          the program will automatically save new items in the new month. <br />
          Same goes for the year. <br />
          you cand edit and delete items description and price, but not the
          date, be careful with that. <br />
          In order to delete a folder you must first delete all the items
          belonging to that specific folder. <br />
          Hope you find this app usefull and thanks for the visit!
        </p>
      </ModalBody>
      <ModalFooter>
        <Button onClick={acceptButton} className="bg-primary">
          Got it!
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default FolderModal;
