import React, { useState, useEffect } from "react";
import Header from "./Header";
import jwt from "jsonwebtoken";

const Home = (props) => {
  useEffect(() => {
    // check for local token
    (async () => {
      if (localStorage.getItem("token")) {
        const localToken = localStorage.getItem("token");
        const decodedToken = jwt.decode(localToken);
        const expiresAt = new Date(decodedToken.exp * 1000);
        // CHECK IF IT IS VALID
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
    })();
  }, []);

  return (
    <div>
      <Header userInfo={props.userInfo} />
      {props.userInfo ? (
        <h1>user</h1>
      ) : (
        <div className=" d-flex justify-content-center mt-5">
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
      )}
    </div>
  );
};

export default Home;
