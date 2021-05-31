import React from "react";
import { useState, useEffect } from "react";
import AddItem from "./AddItem";
import uniqid from "uniqid";

const Table = (props) => {
  //STORES ALL THE YEARS THE USER HAVE DATA IN
  const [yearsToDisplay, setYearsToDisplay] = useState([]);
  // STORES ALL THE MONTHS TO DISPLAY ACCORDING TO THE YEAR
  const [monthsToDisplay, setMonthsToDisplay] = useState([]);
  // STORES THE ITEMS TO DISPLAY
  const [items, setItems] = useState([]);
  // STORE THE YEAR AND MONTHS FOR FUTURE SEARCHES
  const [activeYear, setActiveYear] = useState(new Date().getFullYear());
  const [activeMonth, setActiveMonth] = useState(
    new Date().toLocaleDateString("default", { month: "long" })
  );

  //GET ALL YEARS THAT HAVE DATA FROM THE CURRENT USER
  const getAllYears = async () => {
    const response = await fetch("http://localhost:5000/user/items/year", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + props.token,
      },
    });
    const data = await response.json();
    setYearsToDisplay(data);
  };

  // GET THE CURRENT MONTHS OF THE CURRENT YEAR
  const getCurrentYearMonths = async (year) => {
    if (!year) year = new Date().getFullYear();
    const response = await fetch(
      "http://localhost:5000/user/items/year/" + year,
      {
        headers: {
          Authorization: "Bearer " + props.token,
        },
      }
    );
    const data = await response.json();
    setMonthsToDisplay(data);
  };

  // GET THE CURRENT MONTH AND YEAR DATA
  const getCurrentDateItems = async () => {
    const response = await fetch(
      "http://localhost:5000/user/items/current/" +
        activeYear +
        "/" +
        activeMonth,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + props.token,
        },
      }
    );
    const data = await response.json();
    setItems(data);
    console.log("Got items");
  };

  // GET ACTIVE YEAR && RESET ACTIVE MONTH
  const getActiveYear = (e) => {
    setActiveYear(e.target.id);
    setActiveMonth();
  };

  //GET ACTIVE MONTH
  const getActiveMonth = (e) => {
    setActiveMonth(e.target.id);
  };

  useEffect(() => {
    getAllYears();
    getCurrentYearMonths();
  }, []);

  useEffect(() => {
    getCurrentDateItems();
  }, [activeMonth]);

  return (
    <div>
      <AddItem
        userInfo={props.userInfo}
        token={props.token}
        getCurrentDateItems={getCurrentDateItems}
        setActiveYear={setActiveYear}
        setActiveMonth={setActiveMonth}
      />
      {/* DISPLAY ALL THE YEARS WITH DATA */}
      <div>
        {yearsToDisplay.map((year) => {
          return (
            <div key={uniqid()}>
              <p
                id={year}
                onClick={(e) => {
                  getCurrentYearMonths(year);
                  getActiveYear(e);
                }}
              >
                {year}
              </p>
            </div>
          );
        })}
      </div>
      <div>
        {monthsToDisplay.map((month) => {
          return (
            <div key={uniqid()}>
              <p id={month} onClick={getActiveMonth}>
                {month}
              </p>
            </div>
          );
        })}
      </div>
      <h1>month </h1>
      {items.map((item) => {
        return (
          <div key={uniqid()}>
            {item.name} {item.month} {item.year}
          </div>
        );
      })}
    </div>
  );
};

export default Table;
