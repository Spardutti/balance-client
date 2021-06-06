import React from "react";

const Header = (props) => {
  return (
    <div>
      {props.userInfo ? (
        <div>
          <div className="top-bar">
            <div className="user d-flex justify-content-between ">
              <h5 className="align-self-center">
                Welcome {props.userInfo.username.split(" ")[0]}
              </h5>
              <a
                href="https://infinite-woodland-48479.herokuapp.com/logout"
                className="btn btn-dark text-light btn-sm"
                onClick={() => {
                  localStorage.clear();
                }}
              >
                Log out
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="top-bar"></div>
      )}
      <div className="header">
        <div className=" d-flex flex-column justify-content-center h-75 align-items-center">
          <div>
            <h1 className="display-5">Balance</h1>
          </div>
          <div>
            <p className=" mt-1 text-dark">
              Balance your expenses, Balance your life
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
