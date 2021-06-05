import React from "react";
import { Popover, PopoverBody } from "reactstrap";

const ErrorPopUp = (props) => {
  return (
    <div>
      <Popover
        trigger="focus"
        placement="bottom"
        isOpen={props.popoverOpen}
        target="Popover1"
        toggle={props.popUpToggle}
      >
        <PopoverBody>{props.msg}</PopoverBody>
      </Popover>
    </div>
  );
};

export default ErrorPopUp;
