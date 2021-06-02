import uniqid from "uniqid";

const Years = (props) => {
  return (
    <div>
      {props.yearsToDisplay.map((year) => {
        return (
          <div key={uniqid()}>
            <p
              id={year}
              onClick={(e) => {
                props.getCurrentYearMonths(year);
                props.getActiveYear(e);
              }}
            >
              {year}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Years;
