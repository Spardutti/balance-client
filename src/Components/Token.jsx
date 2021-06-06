import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

const Token = (props) => {
  useEffect(() => {
    const url = window.location.href;
    const urlToken = url.split("?")[1];
    //split token=
    const token = urlToken.split("=")[1];
    props.setToken(token);
    window.history.pushState({}, "", url.split("?")[0]);
    localStorage.setItem("token", token);
  }, []);
  return <div>{props.token ? <Redirect to="/" /> : null}</div>;
};

export default Token;
