import { useState, useEffect } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import uniqid from "uniqid";

const FoldersTab = (props) => {
  const [folders, setFolders] = useState([]);
  const [activeFolder, setActiveFolder] = useState("All");
  const [folderId, setFolderId] = useState();

  const toggle = (tab) => {
    if (activeFolder !== tab) {
      setActiveFolder(tab);
    }
    props.setPriceTotal(0);
  };
  // GET CURRENT USER FOLDER
  const getFolders = async () => {
    const response = await fetch(
      "https://infinite-woodland-48479.herokuapp.com/folders",
      {
        headers: {
          Authorization: "Bearer " + props.token,
        },
      }
    );
    const data = await response.json();
    setFolders(data);
    props.setFolderAdded(false);
  };

  // GET ITEMS FROM SPECIFIC FOLDER
  const getFolderItems = async (id) => {
    props.setLoading(true);
    const response = await fetch(
      "https://infinite-woodland-48479.herokuapp.com/folder/" +
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
    if (response) props.setLoading(false);
  };

  //CHECK IF FOLDER IS EMPTY
  const checkIfFolderEmpty = async (id) => {
    const response = await fetch(
      "https://infinite-woodland-48479.herokuapp.com/item/folder/" + folderId,
      {
        headers: {
          Authorization: "Bearer " + props.token,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (data.length === 0) {
      deleteFolder();
    } else alert("Please delete all items before deleting the folder");
  };

  // DELETE FOLDER
  const deleteFolder = async () => {
    await fetch(
      "https://infinite-woodland-48479.herokuapp.com/folder/delete/" + folderId,
      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + props.token,
        },
      }
    );
    getFolders();
  };

  useEffect(() => {
    getFolders();
  }, [props.folderAdded]);

  return (
    <div className="d-flex justify-content-center">
      <Nav tabs>
        <NavItem>
          <NavLink
            onClick={() => {
              toggle("All");
              props.getCurrentDateItems();
            }}
            className={activeFolder === "All" ? " active" : "text-dark tabs"}
          >
            All
          </NavLink>
        </NavItem>
        {folders.map((folder) => {
          return (
            <NavItem key={uniqid()}>
              <NavLink
                id={folder._id}
                onClick={() => {
                  toggle(folder.name);
                  getFolderItems(folder._id);
                  setFolderId(folder._id);
                }}
                className={
                  activeFolder === folder.name ? " active" : "text-dark tabs"
                }
              >
                {folder.name}{" "}
                {activeFolder === folder.name ? (
                  <i
                    className="far fa-trash-alt"
                    onClick={checkIfFolderEmpty}
                  ></i>
                ) : null}
              </NavLink>
            </NavItem>
          );
        })}
      </Nav>
    </div>
  );
};

export default FoldersTab;
