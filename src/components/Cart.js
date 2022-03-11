import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Order from "./Order";

export default function Cart() {
  const amount = useSelector((state) => state.amount);

  return (
    <>
      <div className="cart">
        <h1 style={{'marginBottom':'25px'}}>Your Cart</h1>
        <div className="orders">
          <Order amount={amount} />
          <div className="checkout">
            <h1 style={{'color':'var(--tirtary-color)'}}>${amount}</h1>
            <Link className='remove-link-style' to='/checkout'><button className="btn-co">Checkout</button></Link>
          </div>
        </div>
      </div>
    </>
  );
}
