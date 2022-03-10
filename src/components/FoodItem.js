import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'

export default function FoodItem({ imgSource, itemName, itemDesc, price, quantity }) {

  const dispatch = useDispatch();

  const {increaseTotalAmount, decreaseTotalAmount, addProduct} = bindActionCreators(actionCreators, dispatch)

  const product = useSelector((state) => state.product);

  function addedToCart () {
    increaseTotalAmount(price)
    addProduct(itemName, price)
    quantity += 1
    console.log(product)
  }

  return (
    <div className='food-item transition'>
        <img src={imgSource} alt="Food item on bhojan" height='250px' />
        <div className="text">
            <h1>{itemName}</h1>
            <p>{itemDesc}</p>
            <div className="atc-area">
              <p>${price}</p>
              <button onClick={()=>(addedToCart())} className="btn-atc">Add To Cart</button>
            </div>
        </div>
    </div>
  )
}
