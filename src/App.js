import "./App.css";
import FoodContainer from "./components/FoodContainer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/cart">
            <Navbar />
            <Cart />
            <Footer />
          </Route>
          <Route exact path="/">
            <Navbar />
            <Hero />
            <FoodContainer />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
