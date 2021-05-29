import React from "react";
import { useState, useEffect } from "react";
import AddItem from "./AddItem";
import uniqid from "uniqid";

const Table = (props) => {
  const [userItems, setUserItems] = useState();
  const [itemYear, setItemYear] = useState([]);
  const [itemMonth, setItemMonth] = useState();
  const [currentYear, setCurrentYear] = useState(
    new Date().getFullYear().toString()
  );
  const [currentMonth, setCurrentMonth] = useState(
    new Date().toLocaleString("default", { month: "long" })
  );

  const getAllYears = async () => {
    const response = await fetch("http://localhost:5000/user/items/year", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + props.token,
      },
    });
    const data = await response.json();
    setItemYear(data);
  };

  useEffect(() => {
    getAllYears();
  }, []);

  return (
    <div>
      <AddItem userInfo={props.userInfo} token={props.token} />
      {/* DISPLAY ALL THE YEARS WITH DATA */}
      <div>
        {itemYear.map((year) => {
          return (
            <div key={uniqid()} id={year}>
              <p>{year}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Table;
