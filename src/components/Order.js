import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'

export default function Order({ amount }) {

  const product = useSelector((state) => state.product);

  const quantity = useRef(1)

  const dispatch = useDispatch();

  const {increaseTotalAmount, decreaseTotalAmount} = bindActionCreators(actionCreators, dispatch)

  function increaseQuantity(price) {
    quantity.current.value += 1
    increaseTotalAmount(price)
  }

  function decreaseQuantity(price) {
    quantity -= 1
    decreaseTotalAmount(price)
  }

  return (
    <>
    <section className="order">

      {
      
      amount === 0 ? (

          <h1>Cart Is Empty!<Link style={{'marginLeft':'10px'}} to="/">Go To Shop</Link></h1>

      ) : (

        Object.keys(product).map(key =>
        
        <>
          <div className="ordered-item">
            <h2>{key}</h2>
            <div style={{'display':'flex'}}>
              <button className="btn" onClick={()=>increaseQuantity(product[key])} >+</button>
              <input id="quantitiy" type="tel" ref={quantity} value={1} />
              <Link className="remove-link-style" to='/checkout'><button onClick={()=>decreaseQuantity(product[key])} className="btn">-</button></Link>
            </div>
            <h2 style={{'color':'var(--tirtary-color)'}}>${product[key]}</h2>
          </div>
          <hr />
        </>
        )
      )

      }

    </section>
    </>
  );
}
