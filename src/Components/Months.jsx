import uniqid from "uniqid";
import { Nav, NavItem, NavLink } from "reactstrap";

const Months = (props) => {
  return (
    <div>
      <Nav tabs className="justify-content-center d-flex">
        {props.monthsToDisplay.map((month) => {
          return (
            <NavItem key={uniqid()}>
              <NavLink
                id={month}
                onClick={props.getActiveMonth}
                className="text-dark"
              >
                {month}
              </NavLink>
            </NavItem>
          );
        })}
      </Nav>
    </div>
  );
};
export default Months;
