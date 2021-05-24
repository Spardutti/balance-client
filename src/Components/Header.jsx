import React from "react";

const Header = (props) => {
  return props.userInfo ? (
    <div className="header">
      <div className="user d-flex justify-content-between ">
        <h5 className="align-self-center">
          Welcome {props.userInfo.username.split(" ")[0]}
        </h5>
        <a
          href="http://localhost:5000/logout"
          className="btn btn-dark text-light "
          onClick={() => {
            localStorage.clear();
          }}
        >
          Log out
        </a>
      </div>
      <div className=" d-flex flex-column justify-content-center h-75 align-items-center">
        <h1 className="display-5">Balance</h1>
        <p className="blockquote-footer mt-1 text-dark">
          Balance your income, Balance your life
        </p>
      </div>
    </div>
  ) : (
    <div className="header">
      <div className="user"></div>
      <div className=" d-flex flex-column justify-content-center h-75 align-items-center">
        <h1 className="display-5">Balance</h1>
        <p className="blockquote-footer mt-1 text-dark">
          Balance your income, Balance your life
        </p>
      </div>
    </div>
  );
};

export default Header;
