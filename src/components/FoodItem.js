import React from 'react'

export default function FoodItem({ imgSource, itemName, itemDesc }) {
  return (
    <div className='food-item transition'>
        <img src={imgSource} alt="Food item on bhojan" height='250px' />
        <div className="text">
            <h1>{itemName}</h1>
            <p>{itemDesc}</p>
            <button className="btn-atc">Add To Cart</button>
        </div>
    </div>
  )
}
