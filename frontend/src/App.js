import React from "react";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import { Home, Post } from "./routers";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <header>
          <ul>
            <li>
              <Link to="home">홈으로</Link>
            </li>
            <li>
              <Link to="post">포스트</Link>
            </li>
          </ul>
        </header>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/post" component={Post} />
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
