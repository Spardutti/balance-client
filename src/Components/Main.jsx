import React from "react";
import { useState, useEffect } from "react";
import AddItem from "./AddItem";
import uniqid from "uniqid";
import Years from "./Years";
import Months from "./Months";
import ItemTable from "./ItemTable";
import FoldersTab from "./FoldersTab";

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
  const [priceTotal, setPriceTotal] = useState(0);

  //GET ALL YEARS THAT HAVE DATA FROM THE CURRENT USER
  const getAllYears = async () => {
    const response = await fetch("http://localhost:5000/items/year", {
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
    const response = await fetch("http://localhost:5000/items/year/" + year, {
      headers: {
        Authorization: "Bearer " + props.token,
      },
    });
    const data = await response.json();
    setMonthsToDisplay(data);
  };

  // GET THE CURRENT MONTH AND YEAR DATA
  const getCurrentDateItems = async () => {
    const response = await fetch(
      "http://localhost:5000/items/current/" + activeYear + "/" + activeMonth,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + props.token,
        },
      }
    );
    const data = await response.json();
    setItems(data);
    setPriceTotal(0);
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
        <Years
          yearsToDisplay={yearsToDisplay}
          getCurrentYearMonths={getCurrentYearMonths}
          getActiveYear={getActiveYear}
        />
      </div>
      <div>
        <Months
          monthsToDisplay={monthsToDisplay}
          getActiveMonth={getActiveMonth}
        />
      </div>
      <h1 className="text-center">{activeMonth} </h1>
      <FoldersTab
        token={props.token}
        setItems={setItems}
        activeYear={activeYear}
        activeMonth={activeMonth}
        getCurrentDateItems={getCurrentDateItems}
        setPriceTotal={setPriceTotal}
      />
      {items ? (
        <ItemTable
          items={items}
          token={props.token}
          priceTotal={priceTotal}
          setPriceTotal={setPriceTotal}
        />
      ) : (
        <h1>no items</h1>
      )}
    </div>
  );
};

export default Table;
