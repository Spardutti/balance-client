import React from "react";
import { useState, useEffect } from "react";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

const AddItem = (props) => {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(0);
  const [itemFolder, setItemFolder] = useState("");

  //INPUT HANDLERS
  const nameHandler = (e) => {
    setItemName(e.target.value);
  };

  const priceHandler = (e) => {
    setItemPrice(e.target.value);
  };

  const folderHandler = (e) => {
    setItemFolder(e.target.value);
  };

  // CREATE A NEW ITEM
  const createItem = async () => {
    await fetch("http://localhost:5000/add/" + props.userInfo._id, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + props.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: itemName,
        price: itemPrice,
        folder: itemFolder,
      }),
    });
    // SET THE DATE TO CURRENT DATE, JUST IN CASE USER IS IN ANOTHER
    //YEAR / MONTH THAT IS NOT THE CURRENT ONE
    // AND RE RENDERS
    props.setActiveYear(new Date().getFullYear());
    props.setActiveMonth(
      new Date().toLocaleDateString("default", { month: "long" })
    );
    setItemPrice(0);
    setItemName("");
    setItemFolder("");
  };

  //ADD A NEW FOLDER
  const addFolder = async () => {
    console.log("fodler added");
  };

  // GET CURRENT USER FOLDER
  const getFolders = async () => {
    const response = await fetch("http://localhost:5000/user/folders", {
      headers: {
        Authorization: "Bearer " + props.token,
      },
    });
    console.log(response);
  };

  useEffect(() => {
    getFolders();
  }, []);

  return (
    <Container>
      <Form>
        <Row>
          <Col sm={4}>
            <FormGroup>
              <Label>Price</Label>
              <Input type="text" name="price" placeholder="Item price" />
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <Label>Name</Label>
              <Input type="text" name="name" placeholder="Item name" />
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <Label>Folder</Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText
                    onClick={() => {
                      console.log("clicked");
                    }}
                  >
                    +
                  </InputGroupText>
                </InputGroupAddon>
                <Input type="select" name="folder">
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </InputGroup>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default AddItem;
