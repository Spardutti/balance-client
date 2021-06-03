import { Table } from "reactstrap";
import { useState, useEffect } from "react";
import uniqid from "uniqid";

const ItemTable = (props) => {
  useEffect(() => {
    props.items.map((item) => {
      props.setPriceTotal((prev) => prev + item.price);
    });
  }, [props.items]);

  return (
    <Table striped responsive size="sm" bordered hover className="text-center">
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
              <td>{item.name}</td>
              <td>{item.price}</td>
              <th>{item.folder.name}</th>
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
