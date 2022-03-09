import React from "react";
import FoodItem from "./FoodItem";

export default function FoodContainer() {
  return (
    <div className="center">
      <section className="food-container">
        <div className="container-top">
            <h1>Online Menu</h1>
            <p>Your Favorite Food Is Right Below, Order Now!</p>
        </div>
        <div className="container-bottom">
            <FoodItem/>
        </div>
      </section>
    </div>
  );
}
