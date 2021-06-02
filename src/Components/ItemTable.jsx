import { Table } from "reactstrap";
import { useState, useEffect } from "react";
import uniqid from "uniqid";

const ItemTable = (props) => {
  const [folders, setFolders] = useState([]);
  // GET CURRENT USER FOLDER
  const getFolders = async () => {
    const response = await fetch("http://localhost:5000/folders", {
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
    <Table striped responsive size="sm">
      <thead>
        <tr>
          <th>Item</th>
          {folders.map((folder) => {
            return <th key={uniqid()}>{folder.name}</th>;
          })}
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map((item) => {
          return (
            <tr>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ItemTable;
