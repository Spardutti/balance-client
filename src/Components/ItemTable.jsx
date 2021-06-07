import { Table } from "reactstrap";
import { useEffect, useState } from "react";
import uniqid from "uniqid";
import EditItemModal from "./EditItemModal";

const ItemTable = (props) => {
  const [modal, setModal] = useState(false);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemId, setItemId] = useState("");

  const toggle = () => {
    setModal(!modal);
  };

  const itemInfo = (item) => {
    setItemPrice(item.price);
    setItemName(item.name);
    setItemId(item._id);
  };

  // GET ITEMS
  useEffect(() => {
    props.items.map((item) => {
      props.setPriceTotal((prev) => prev + item.price);
    });
  }, [props.items]);

  // DELETE ITEM
  const deleteItem = async (id) => {
    await fetch(
      "https://infinite-woodland-48479.herokuapp.com/item/delete/" + id,
      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + props.token,
          "Content-Type": "application/json",
        },
      }
    );
    props.getCurrentDateItems();
  };

  //EDIT ITEM
  const editItem = async () => {
    await fetch(
      "https://infinite-woodland-48479.herokuapp.com/item/edit/" + itemId,
      {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + props.token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: itemName,
          price: itemPrice,
        }),
      }
    );

    props.getCurrentDateItems();
    setItemName("");
    setItemPrice("");
    setItemId("");
  };

  return (
    <div>
      <Table striped responsive bordered className="text-center">
        <thead>
          <tr>
            <th>Day</th>
            <th>Description</th>
            <th>Spent</th>
            <th>Folder</th>
          </tr>
        </thead>
        <tbody>
          {props.items ? (
            props.items.map((item) => {
              return (
                <tr key={uniqid()}>
                  <td>{item.day}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.folder.name}</td>
                  <td style={{ width: "10px" }}>
                    <i
                      className="far fa-edit"
                      onClick={() => {
                        toggle();
                        itemInfo(item);
                      }}
                    ></i>
                  </td>
                  <td style={{ width: "10px" }}>
                    <i
                      className="far fa-trash-alt"
                      onClick={() => {
                        deleteItem(item._id);
                      }}
                    ></i>
                  </td>
                </tr>
              );
            })
          ) : (
            <p>no items</p>
          )}
        </tbody>
        <thead>
          <tr>
            <th></th>
            <th>Total</th>
            <th>{props.priceTotal} </th>
          </tr>
        </thead>
      </Table>
      {modal ? (
        <EditItemModal
          toggle={toggle}
          modal={modal}
          itemName={itemName}
          itemPrice={itemPrice}
          setItemName={setItemName}
          setItemPrice={setItemPrice}
          editItem={editItem}
        />
      ) : null}
    </div>
  );
};

export default ItemTable;
