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
        <PopoverBody>Please fill all the fields</PopoverBody>
      </Popover>
    </div>
  );
};

export default ErrorPopUp;
