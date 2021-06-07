import React, { useState, useEffect } from "react";
import Header from "./Header";
import jwt from "jsonwebtoken";
import Main from "./Main";
import { Spinner } from "reactstrap";
import FirstVisit from "./FirstVisit";

const Home = (props) => {
  const [loading, setLoading] = useState(false);
  const [firstVisit, setFirstVisit] = useState();

  useEffect(() => {
    // check for local token
    (async () => {
      if (localStorage.getItem("token")) {
        const localToken = localStorage.getItem("token");
        const decodedToken = jwt.decode(localToken);
        if (decodedToken) {
          const expiresAt = new Date(decodedToken.exp * 1000);
          if (expiresAt < new Date(Date.now())) {
            localStorage.clear();
          } else {
            props.setToken(localToken);
            // FETCH THE USER DATA
            const response = await fetch(
              "https://infinite-woodland-48479.herokuapp.com/user/" +
                decodedToken._id,
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
      }
    })();
  }, []);

  //CHECK IF IT IS USER FIRST VISIT
  useEffect(() => {
    if (props.userInfo) {
      if (props.userInfo.firstVisit) {
        alert("Hi!");
        setFirstVisit(true);
      }
    }
  }, [props.userInfo]);

  return (
    <div>
      <Header userInfo={props.userInfo} />
      {props.userInfo ? (
        <div className="content">
          <div className="img"></div>
          <Main
            userInfo={props.userInfo}
            token={props.token}
            loading={loading}
            setLoading={setLoading}
          />
        </div>
      ) : (
        <div className=" d-flex justify-content-center content align-items-center">
          <div className="img"></div>
          {loading ? (
            <Spinner type="grow" color="dark" />
          ) : (
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
                <a
                  href="https://infinite-woodland-48479.herokuapp.com/google/login"
                  className="btn-text"
                  onClick={() => setLoading(true)}
                >
                  <b>Sign in with google</b>
                </a>
              </div>
            </div>
          )}
        </div>
      )}
      {firstVisit ? (
        <FirstVisit
          firstVisit={firstVisit}
          setFirstVisit={setFirstVisit}
          token={props.token}
        />
      ) : null}
    </div>
  );
};

export default Home;
