import React from "react";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import { Home, Post, SignIn } from "./routers";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <header className="flex justify-between h-15 bg-gray-700 text-white">
          <ul className="ml-10 inline-flex">
            <li className="flex px-2 py-2 m-2">
              <Link to="home">홈으로</Link>
            </li>
            <li className="flex px-2 py-2 m-2">
              <Link to="post">포스트</Link>
            </li>
            <li className="flex justify-end px-2 py-2 m-2">
              <Link to="/signin">로그인</Link>
            </li>
          </ul>
        </header>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/post" component={Post} />
          <Route path="/signin" component={SignIn} />
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
