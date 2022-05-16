import React from "react";
import Landing from "./Landing";
import AllCandies from "./AllCandies";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Root = () => {
  return (
    <Router>
      <div>
        <nav>
          <p>Goodie Bag</p>
          <Link to="/">Home</Link>
          <Link to="/candies">All Candies</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/candies" component={AllCandies} />
        </Switch>
      </div>
    </Router>
  );
};

export default Root;
