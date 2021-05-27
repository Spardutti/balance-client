import React from "react";
import { useState, useEffect } from "react";
import AddItem from "./AddItem";
import uniqid from "uniqid";

const Table = (props) => {
  const [userItems, setUserItems] = useState();
  const [itemYear, setItemYear] = useState();
  const [itemMonth, setItemMonth] = useState();

  //GET ALL YEAR OF ITEMS
  const getYears = () => {
    let yearsArr = [];
    userItems.forEach((item) => {
      if (yearsArr.indexOf(item.year) === -1) {
        yearsArr.push(item.year);
      }
    });
    setItemYear(yearsArr);
  };

  const getMonths = () => {
    let monthArr = [];
    userItems.forEach((item) => {
      if (monthArr.indexOf(item.month) === -1) {
        monthArr.push(item.month);
      }
    });
    setItemMonth(monthArr);
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
      {itemYear
        ? itemYear.map((year) => {
            return (
              <div key={uniqid()}>
                <h1>{year}</h1>
                {itemMonth.map((month) => {
                  return userItems.map((item) => {
                    if (item.year === year && item.month === month) {
                      return (
                        <div>
                          {month} {item.name}
                        </div>
                      );
                    }
                  });
                })}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Table;
