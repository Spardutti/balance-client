import { HashRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Home from "./Components/Home";
import Token from "./Components/Token";
import React from "react";

function App() {
  const [token, setToken] = useState();
  const [userInfo, setUserInfo] = useState();
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Home
            token={token}
            setToken={setToken}
            setUserInfo={setUserInfo}
            userInfo={userInfo}
          />
        </Route>
        <Route path="/logged">
          <Token token={token} setToken={setToken} />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
