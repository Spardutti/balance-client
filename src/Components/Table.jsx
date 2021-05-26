import React from "react";
import { useState, useEffect } from "react";
import AddItem from "./AddItem";
import uniqid from "uniqid";

const Table = (props) => {
  const [userItems, setUserItems] = useState();
  const [itemYear, setItemYear] = useState([]);
  const [itemMonth, setItemMonth] = useState([]);

  //GET ALL YEAR OF ITEMS
  const getYears = () => {
    userItems.map((item) => {
      if (itemYear.indexOf(item.year) === -1) {
        setItemYear([...itemYear, item.year]);
      }
    });
  };

  const getMonths = () => {
    let itemArr = [];
    userItems.map((item) => {
      // check if the month year exist in the array
      let monthYear = { year: item.year, month: item.month };
      if (itemArr.length === 0) {
        itemArr.push(monthYear);
      }
      console.log(itemArr.indexOf(monthYear));
    });
    console.log(itemArr);
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
      getMonths();
    }
  }, [userItems]);

  return (
    <div>
      <AddItem userInfo={props.userInfo} token={props.token} />
      {/* SEARCH FOR THE YEAR ITEMS TO DISPLAY IT ONLY ONCE */}
      {itemYear.map((year) => {
        return (
          <div key={uniqid()}>
            <h1>{year}</h1>
            {/* FIND THE ITEMS MATCHING THE CURRENT YEAR AND MONTH*/}
            {itemMonth.map((month) => {
              if (month.year === year) {
                return (
                  <div key={uniqid()}>
                    <h5>{month.month}</h5>
                    {/* DISPLAY THE ITEMS THAT MATCH THE YEAR AND MONTH*/}
                    {userItems.map((item) => {
                      if (item.year === year && item.month === month.month) {
                        return (
                          <div key={uniqid()}>
                            <p>
                              {item.name} & {item.price}
                            </p>
                          </div>
                        );
                      }
                    })}
                  </div>
                );
              }
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Table;
