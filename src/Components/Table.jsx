import React from "react";
import { useState, useEffect } from "react";
import AddItem from "./AddItem";
import uniqid from "uniqid";

const Table = (props) => {
  const [userItems, setUserItems] = useState();
  const [itemYear, setItemYear] = useState();
  const [itemMonth, setItemMonth] = useState();
  const [currentYear, setCurrentYear] = useState(
    new Date().getFullYear().toString()
  );
  const [currentMonth, setCurrentMonth] = useState(
    new Date().toLocaleString("default", { month: "long" })
  );

  //GET ALL YEAR OF ITEMS
  const getYears = () => {
    let yearsArr = [];
    userItems.forEach((ele) => {
      if (yearsArr.indexOf(ele.year) === -1) {
        yearsArr.push(ele.year);
      }
    });
    setItemYear(yearsArr);
  };

  const getMonths = async () => {
    let monthArr = [];
    userItems.forEach((ele) => {
      if (ele.year === currentYear && monthArr.indexOf(ele.month) === -1) {
        monthArr.push(ele.month);
      }
    });

    console.log(monthArr);
  };

  //GET USER ITEMS ON LOAD/MOUNT
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "http://localhost:5000/user/items/" + props.userInfo._id,
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
                {year === currentYear ? (
                  <h1>{year} current</h1>
                ) : (
                  <h1>{year}</h1>
                )}
                {itemMonth
                  ? itemMonth.map((item) => {
                      return <div>{item.month}</div>;
                    })
                  : null}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Table;
