import { Table } from "reactstrap";
import { useEffect, useState } from "react";
import uniqid from "uniqid";

const ItemTable = (props) => {
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

  return (
    <Table striped responsive bordered className="text-center">
      <thead>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Folder</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map((item) => {
          return (
            <tr key={uniqid()}>
              <td>
                {item.name}{" "}
                <i
                  className="far fa-trash-alt"
                  onClick={() => {
                    deleteItem(item._id);
                  }}
                ></i>
              </td>
              <td>{item.price}</td>
              <td>{item.folder.name}</td>
            </tr>
          );
        })}
      </tbody>
      <thead>
        <tr>
          <th>Total</th>
          <th>{props.priceTotal} </th>
        </tr>
      </thead>
    </Table>
  );
};

export default ItemTable;
