import React from "react";
import { useState, useEffect } from "react";
import AddItem from "./AddItem";
import Years from "./Years";
import Months from "./Months";
import ItemTable from "./ItemTable";
import FoldersTab from "./FoldersTab";
import { Spinner } from "reactstrap";

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
    new Date().toLocaleDateString("en-US", { month: "long" })
  );
  const [priceTotal, setPriceTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [folderAdded, setFolderAdded] = useState(false);

  //GET ALL YEARS THAT HAVE DATA FROM THE CURRENT USER
  const getAllYears = async () => {
    const response = await fetch(
      "https://infinite-woodland-48479.herokuapp.com/items/year",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + props.token,
        },
      }
    );
    const data = await response.json();
    setYearsToDisplay(data);
  };

  // GET THE CURRENT MONTHS OF THE CURRENT YEAR
  const getCurrentYearMonths = async (year) => {
    if (!year) year = new Date().getFullYear();
    const response = await fetch(
      "https://infinite-woodland-48479.herokuapp.com/items/year/" + year,
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
    setLoading(true);
    const response = await fetch(
      "https://infinite-woodland-48479.herokuapp.com/items/current/" +
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
    setPriceTotal(0);
    if (response) setLoading(false);
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
    props.setLoading(false);
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
        setLoading={props.setLoading}
        loading={props.loading}
        setFolderAdded={setFolderAdded}
      />
      {/* DISPLAY ALL THE YEARS WITH DATA */}
      <div>
        <Years
          yearsToDisplay={yearsToDisplay}
          getCurrentYearMonths={getCurrentYearMonths}
          getActiveYear={getActiveYear}
          activeYear={activeYear}
        />
      </div>
      <div>
        <Months
          monthsToDisplay={monthsToDisplay}
          getActiveMonth={getActiveMonth}
          activeMonth={activeMonth}
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
        setLoading={setLoading}
        loading={loading}
        setFolderAdded={setFolderAdded}
        folderAdded={folderAdded}
      />
      {loading ? (
        <div className="d-flex justify-content-center mt-3">
          <Spinner />
        </div>
      ) : (
        <ItemTable
          items={items}
          token={props.token}
          priceTotal={priceTotal}
          setPriceTotal={setPriceTotal}
          getCurrentDateItems={getCurrentDateItems}
        />
      )}
    </div>
  );
};

export default Table;
