import { useState, useEffect } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import uniqid from "uniqid";

const FoldersTab = (props) => {
  const [folders, setFolders] = useState([]);
  const [activeFolder, setActiveFolder] = useState("All");

  const toggle = (tab) => {
    if (activeFolder !== tab) {
      setActiveFolder(tab);
    }
    props.setPriceTotal(0);
  };
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

  // GET ITEMS FROM SPECIFIC FOLDER
  const getFolderItems = async (id) => {
    const response = await fetch(
      "http://localhost:5000/folder/" +
        id +
        "/" +
        props.activeYear +
        "/" +
        props.activeMonth,
      {
        headers: {
          Authorization: "Bearer " + props.token,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    props.setItems(data);
  };

  useEffect(() => {
    getFolders();
  }, []);

  return (
    <div className="d-flex justify-content-center">
      <Nav tabs>
        <NavItem>
          <NavLink
            onClick={() => {
              toggle("All");
              props.getCurrentDateItems();
            }}
            className={
              "text-dark " + (activeFolder === "All" ? "active" : null)
            }
          >
            All
          </NavLink>
        </NavItem>
        {folders.map((folder) => {
          return (
            <NavItem key={uniqid()}>
              <NavLink
                onClick={() => {
                  toggle(folder.name);
                  getFolderItems(folder._id);
                }}
                className={
                  "text-dark " + (activeFolder === folder.name ? "pizza" : null)
                }
              >
                {folder.name}
              </NavLink>
            </NavItem>
          );
        })}
      </Nav>
    </div>
  );
};

export default FoldersTab;
