import React from "react";
import { useState, useEffect } from "react";
import AddItem from "./AddItem";

const Table = (props) => {
  const [userItems, setUserItems] = useState();

  //GET ALL YEAR OF ITEMS
  const getYears = () => {
    userItems.map((item) => {
      console.log(item);
    });
  };

  //GET USER ITEMS ON LOAD/MOUNT
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "http://localhost:5000/items/" + props.userInfo._id,
        {
          headers: {
            Authorization: "Bearer " + props.token,
          },
        }
      );
      const data = await response.json();
      setUserItems(data);
    })();
  }, []);

  useEffect(() => {
    if (userItems) {
      getYears();
    }
  }, [userItems]);

  return (
    <div>
      <AddItem userInfo={props.userInfo} token={props.token} />
    </div>
  );
};

export default Table;
