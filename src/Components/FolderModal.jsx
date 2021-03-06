import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const FolderModal = (props) => {
  const [folderName, setFolderName] = useState("");

  const nameHandler = (e) => {
    setFolderName(e.target.value);
  };

  const createFolder = async () => {
    await fetch(props.serverUrl + "/folder/add", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + props.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: folderName,
      }),
    });
    props.toggle();
    props.getFolders();
    props.setFolderAdded(true);
  };

  return (
    <Modal isOpen={props.modal}>
      <ModalHeader toggle={props.toggle}>Create Folder</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label>Folder name</Label>
            <Input
              onChange={nameHandler}
              placeholder="folder name"
              value={folderName}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button onClick={createFolder} className="bg-primary">
          Add
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default FolderModal;
