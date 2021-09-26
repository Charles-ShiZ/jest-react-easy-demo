import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Link data-testid="link" to="home">home</Link>
      <Switch>
        <Route path='/home'>
          <div style={{
            fontSize:"30px"
          }}>home</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}