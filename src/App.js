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
        <Navbar />
        <Switch>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/">
            <Hero />
            <FoodContainer />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
