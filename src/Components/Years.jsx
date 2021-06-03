import uniqid from "uniqid";
import { Nav, NavItem, NavLink } from "reactstrap";

const Years = (props) => {
  return (
    <div>
      <Nav tabs className="justify-content-center d-flex">
        {props.yearsToDisplay.map((year) => {
          return (
            <NavItem key={uniqid()}>
              <NavLink
                id={year}
                onClick={(e) => {
                  props.getCurrentYearMonths(year);
                  props.getActiveYear(e);
                }}
                className="text-dark  "
              >
                {year}
              </NavLink>
            </NavItem>
          );
        })}
      </Nav>
    </div>
  );
};

export default Years;
