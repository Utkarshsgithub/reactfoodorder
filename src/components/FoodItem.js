import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'

export default function FoodItem({ imgSource, itemName, itemDesc, price }) {
  const dispatch = useDispatch();
  const {increaseTotalAmount, decreaseTotalAmount} = bindActionCreators(actionCreators, dispatch)
  return (
    <div className='food-item transition'>
        <img src={imgSource} alt="Food item on bhojan" height='250px' />
        <div className="text">
            <h1>{itemName}</h1>
            <p>{itemDesc}</p>
            <div className="atc-area">
              <p>${price}</p>
              <button onClick={()=>(increaseTotalAmount(price))} className="btn-atc">Add To Cart</button>
            </div>
        </div>
    </div>
  )
}
