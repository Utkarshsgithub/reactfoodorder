import "./App.css";
import FoodContainer from "./components/FoodContainer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import LoadingBar from 'react-top-loading-bar'
import { useState } from "react";

function App() {

  const [progress, setProgress] = useState(0)

  return (
    <>
      <Router>
      <LoadingBar
        color='#8ed444'
        progress={progress}
      />
        <Navbar />
        <Switch>
          <Route exact path="/cart">
            <Cart setProgress={setProgress} />
          </Route>
          <Route exact path="/">
            <Hero />
            <FoodContainer setProgress={setProgress} />
          </Route>
          <Route exact path="/checkout">
            <Checkout setProgress={setProgress} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
