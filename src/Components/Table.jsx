import React from "react";
import { useState, useEffect } from "react";

const Table = (props) => {
  const [userItems, setUserItems] = useState();
  const [years, setYears] = useState([]);
  const [months, setMonths] = useState([]);
  const [days, setDays] = useState([]);

  //GET ALL YEAR OF ITEMS
  const getYears = () => {
    userItems.map((item) => {
      let date = new Date(item.date).getFullYear();
      if (years.indexOf(date) === -1) {
        setYears([...years, date]);
      }
    });
  };

  const getMonths = () => {
    userItems.map((item) => {
      let date = new Date(item.date).toLocaleString("default", {
        month: "long",
      });
      if (months.indexOf(date) === -1) {
        setMonths([...months, date]);
      }
    });
  };

  const getDays = () => {
    userItems.map((item) => {
      let date = new Date(item.date).getDay();
      setDays([...days, date]);
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
      getMonths();
      getDays();
    }
  }, [userItems]);

  return (
    <div>
      Table
      {years.map((year) => {
        return (
          <div key={year}>
            <h3>{year}</h3>
            {months.map((month) => {
              return (
                <div key={month}>
                  <h4>{month}</h4>
                  {days.map((day) => {
                    return (
                      <div key={day}>
                        <p>{day}</p>
                        {console.log()}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Table;
