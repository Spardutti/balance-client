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
  Container,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Spinner,
} from "reactstrap";
import uniqid from "uniqid";
import FolderModal from "./FolderModal";
import ErrorPopUp from "./ErrorPopUp";
import moment from "moment";

const AddItem = (props) => {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemFolder, setItemFolder] = useState("");
  const [folders, setFolders] = useState([]);
  const [modal, setModal] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [day, setDay] = useState(new Date().getDate());
  const [month, setMonth] = useState(
    new Date().toLocaleDateString("en-US", { month: "long" })
  );
  const [year, setYear] = useState(new Date().getFullYear());

  const popUpToggle = () => setPopoverOpen(!popoverOpen);

  const toggle = () => {
    setModal(!modal);
  };

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

  const dateHandler = (e) => {
    let today = moment(e.target.value);
    setDay(moment(today).date());
    setMonth(new Date(today).toLocaleDateString("en-US", { month: "long" }));
    setYear(new Date(today).getFullYear());
  };

  // CREATE A NEW ITEM
  const createItem = async (e) => {
    e.preventDefault();
    if (!itemFolder || !itemName || !itemPrice) popUpToggle();
    if (itemName && itemPrice && itemFolder) {
      props.setLoading(true);
      const response = await fetch(
        props.serverUrl + "/add/" + props.userInfo._id,
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + props.token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: itemName,
            price: itemPrice,
            folder: itemFolder,
            day,
            month,
            year,
          }),
        }
      );
      // SET THE DATE TO CURRENT DATE, JUST IN CASE USER IS IN ANOTHER
      //YEAR / MONTH THAT IS NOT THE CURRENT ONE
      // AND RE RENDERS
      props.setActiveYear(new Date().getFullYear());
      props.setActiveMonth(
        new Date().toLocaleDateString("default", { month: "long" })
      );
      setItemPrice("");
      setItemName("");
      setItemFolder("");

      props.getCurrentDateItems();
      if (response) {
        props.setLoading(false);
        props.getCurrentYearMonths();
      }
    }
  };

  // GET CURRENT USER FOLDER
  const getFolders = async () => {
    const response = await fetch(props.serverUrl + "/folders", {
      headers: {
        Authorization: "Bearer " + props.token,
      },
    });
    const data = await response.json();
    setFolders(data);
  };

  useEffect(() => {
    getFolders();
  }, []);

  return (
    <Container className=" pt-2">
      <Form autoComplete="off">
        <Row>
          <Col sm={3}>
            <FormGroup>
              <Label>Description</Label>
              <Input
                autoComplete="off"
                onChange={nameHandler}
                type="text"
                name="name"
                placeholder="what you bought/paid"
                value={itemName}
              />
            </FormGroup>
          </Col>
          <Col sm={3}>
            <FormGroup>
              <Label>Amount Spent</Label>
              <Input
                autoComplete="off"
                onChange={priceHandler}
                type="number"
                name="price"
                placeholder="How much did you pay for"
                value={itemPrice}
              />
            </FormGroup>
          </Col>
          <Col sm={3}>
            <FormGroup>
              <Label>Date</Label>
              <Input type="date" onChange={dateHandler}></Input>
            </FormGroup>
          </Col>
          <Col sm={3}>
            <FormGroup>
              <Label>Folder</Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText onClick={toggle} className="">
                    <div>
                      <i className="fas fa-folder-plus"></i>
                    </div>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="select"
                  name="folder"
                  value={itemFolder}
                  onChange={folderHandler}
                >
                  <option disabled value="">
                    {folders.length > 0 ? "Select a folder" : "Create folder"}
                  </option>
                  {folders.map((fodler) => {
                    return (
                      <option key={uniqid()} value={fodler._id}>
                        {fodler.name}
                      </option>
                    );
                  })}
                </Input>
              </InputGroup>
            </FormGroup>
          </Col>
        </Row>
        <Col sm={12} className="justify-content-center d-flex mt-2">
          {props.loading ? (
            <Spinner />
          ) : (
            <Button id="Popover1" onClick={createItem} className="bg-primary">
              Add Item
            </Button>
          )}
        </Col>
      </Form>
      {modal ? (
        <FolderModal
          toggle={toggle}
          modal={modal}
          token={props.token}
          getFolders={getFolders}
          setFolderAdded={props.setFolderAdded}
          serverUrl={props.serverUrl}
        />
      ) : null}
      {popoverOpen ? (
        <ErrorPopUp
          popoverOpen={popoverOpen}
          popUpToggle={popUpToggle}
          msg={"Please fill all the field"}
        />
      ) : null}
    </Container>
  );
};

export default AddItem;
