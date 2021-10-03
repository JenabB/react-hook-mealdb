import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Favourite from "./pages/Favourite";
import MealDetail from "./components/MealDetail";
import ByCategory from "./components/discover/ByCategory";
import ByArea from "./components/discover/ByArea";

const Navbar = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/discover" component={Discover} />
        <Route path="/favourite" component={Favourite} />

        <Route path="/recipe/:id" component={MealDetail} />
        <Route path="/category/:strCategory" component={ByCategory} />
        <Route path="/area/:strArea" component={ByArea} />
      </Switch>

      <div
        style={{ width: "100%" }}
        className="fixed bottom-0 py-2 flex justify-center bg-yellow-400"
      >
        <Link to="/">
          <div className="text-center mx-4">
            <h1 className="material-icons">home</h1>
            <h1>Home</h1>
          </div>
        </Link>
        <Link to="/discover">
          <div className="text-center mx-4">
            <h1 className="material-icons">travel_explore</h1>
            <h1>Discover</h1>
          </div>
        </Link>
        <Link to="/favourite">
          <div className="text-center mx-4">
            <h1 className="material-icons">favorite</h1>
            <h1>Favorites</h1>
          </div>
        </Link>
      </div>
    </Router>
  );
};

export default Navbar;
