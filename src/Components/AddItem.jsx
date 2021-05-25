import React from "react";
import { useState } from "react";

const AddItem = (props) => {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(0);
  const [itemFolder, setItemFolder] = useState("");

  const nameHandler = (e) => {
    setItemName(e.target.value);
  };

  const priceHandler = (e) => {
    setItemPrice(e.target.value);
  };

  const folderHandler = (e) => {
    setItemFolder(e.target.value);
  };

  const createItem = async () => {
    const response = await fetch(
      "http://localhost:5000/add/" + props.userInfo._id,
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
        }),
      }
    );
    const data = await response.json();
    console.log(data);
  };
  return (
    <div className="form-inline">
      <div className="col-3">
        <label htmlFor="">Item</label>
        <input
          type="text"
          name="name"
          onChange={nameHandler}
          value={itemName}
        />
      </div>
      <div className="col-3">
        <label htmlFor="">Price</label>
        <input
          type="number"
          name="price"
          onChange={priceHandler}
          value={itemPrice}
        />
      </div>{" "}
      <div className="col-3">
        <label htmlFor="">folder</label>
        <input
          type="text"
          name="folder"
          onChange={folderHandler}
          value={itemFolder}
        />
      </div>{" "}
      <div className="col-3">
        <button className="btn btn-primary" onClick={createItem}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddItem;
