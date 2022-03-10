import React from "react";
import FoodItem from "./FoodItem";
import img1 from '../images/item1.jpg'
import img2 from '../images/item2.jpg'
import img3 from '../images/item3.jpg'
import img4 from '../images/item4.jpg'
import img5 from '../images/item5.jpg'

export default function FoodContainer() {
  return (
    <div className="center">
      <section className="food-container">
        <div className="container-top">
            <h1>Online Menu</h1>
            <p>Your Favorite Food Is Right Below, Order Now!</p>
        </div>
        <div className="container-bottom">
            <FoodItem quantity={0} price={16} itemDesc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque debitis eligendi omnis quasi vitae, repellendus nihil eius sunt in qui tenetur optio dolore?' itemName='Peanut Butter' imgSource={img1}/>
            <FoodItem quantity={0} price={22} itemDesc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque debitis eligendi omnis quasi vitae, repellendus nihil eius sunt in qui tenetur optio dolore?' itemName='Fruit Salad' imgSource={img2}/>
            <FoodItem quantity={0} price={52} itemDesc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque debitis eligendi omnis quasi vitae, repellendus nihil eius sunt in qui tenetur optio dolore?' itemName='Straberry Milkshake' imgSource={img3}/>
            <FoodItem quantity={0} price={19} itemDesc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque debitis eligendi omnis quasi vitae, repellendus nihil eius sunt in qui tenetur optio dolore?' itemName='Omelette' imgSource={img4}/>
            <FoodItem quantity={0} price={10} itemDesc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque debitis eligendi omnis quasi vitae, repellendus nihil eius sunt in qui tenetur optio dolore?' itemName='Green Salad' imgSource={img5}/>
        </div>
      </section>
    </div>
  );
}
