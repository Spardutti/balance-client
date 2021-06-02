import uniqid from "uniqid";

const Months = (props) => {
  return (
    <div>
      {props.monthsToDisplay.map((month) => {
        return (
          <div key={uniqid()}>
            <p id={month} onClick={props.getActiveMonth}>
              {month}
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default Months;
