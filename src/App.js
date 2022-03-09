import "./App.css";
import FoodContainer from "./components/FoodContainer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/cart">
            <Navbar />
            <Cart />
          </Route>
          <Route exact path="/">
            <Navbar />
            <Hero />
            <FoodContainer />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
