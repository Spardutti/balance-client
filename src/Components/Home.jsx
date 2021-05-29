import React, { useState, useEffect } from "react";
import Header from "./Header";
import jwt from "jsonwebtoken";
import Table from "./Table";

const Home = (props) => {
  useEffect(() => {
    // check for local token
    (async () => {
      if (localStorage.getItem("token")) {
        const localToken = localStorage.getItem("token");
        console.log(localToken);
        const decodedToken = jwt.decode(localToken);
        if (decodedToken) {
          const expiresAt = new Date(decodedToken.exp * 1000);
          if (expiresAt < new Date(Date.now())) {
            localStorage.clear();
          } else {
            props.setToken(localToken);
            // FETCH THE USER DATA
            const response = await fetch(
              "http://localhost:5000/user/" + decodedToken._id,
              {
                headers: {
                  Authorization: "Bearer " + localToken,
                },
              }
            );
            const data = await response.json();
            props.setUserInfo(data);
          }
        }
        // CHECK IF IT IS VALID
      }
    })();
  }, []);

  return (
    <div>
      <Header userInfo={props.userInfo} />
      {props.userInfo ? (
        <div className="content">
          <div className="img"></div>
          <Table userInfo={props.userInfo} token={props.token} />
        </div>
      ) : (
        <div className=" d-flex justify-content-center content align-items-center">
          <div className="img"></div>
          <div className="google-container">
            <div>
              <p>Please log in to continue</p>
            </div>
            <div className="google-btn">
              <div className="google-icon-wrapper">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt=""
                  className="google-icon"
                />
              </div>
              <a href="http://localhost:5000/google/login" className="btn-text">
                <b>Sign in with google</b>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
