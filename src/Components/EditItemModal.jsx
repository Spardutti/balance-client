import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
} from "reactstrap";

const ModalExample = (props) => {
  const nameHandler = (e) => {
    props.setItemName(e.target.value);
  };

  const priceHandler = (e) => {
    props.setItemPrice(e.target.value);
  };
  return (
    <div>
      <Modal isOpen={props.modal} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Input value={props.itemName} onChange={nameHandler} />
            </FormGroup>
            <FormGroup>
              <Input value={props.itemPrice} onChange={priceHandler} />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              props.toggle();
              props.editItem();
            }}
          >
            Edit
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
