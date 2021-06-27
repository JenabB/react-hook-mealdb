import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Favourite from "./pages/Favourite";
import MealDetail from "./components/MealDetail";
import ByCategory from "./components/discover/ByCategory";
import Header from './components/Header';

const Navbar = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/discover" component={Discover} />
        <Route path="/favourite" component={Favourite} />

        <Route path="/recipe/:id" component={MealDetail} />
        <Route path="/category/:strCategory" component={ByCategory} />
      </Switch>

      <nav className="fixed bottom-0 bg-green-400 shadow-md text-white font-bold">
        <div className="flex justify-center">
          <div className="m-4">
            <Link to="/">Home</Link>
          </div>
          <div className="m-4">
            <Link to="/discover">Discover</Link>
          </div>
          <div className="m-4">
            <Link to="/favourite">Favourite</Link>
          </div>
        </div>
      </nav>
    </Router>
  );
};

export default Navbar;
