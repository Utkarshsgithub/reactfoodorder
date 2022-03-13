import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

export default function AddedProduct({ name, price }) {
  const [qty, setQty] = useState(1);

  const quantity = useRef(1);

  const dispatch = useDispatch();

  const { increaseTotalAmount, decreaseTotalAmount, removeProduct } = bindActionCreators(
    actionCreators,
    dispatch
  );

  function increaseQuantity(price) {
    console.log(quantity.current.value)
    setQty(parseInt(quantity.current.value) + 1);
    quantity.current.value = qty;
    console.log(quantity.current.value)
    increaseTotalAmount(price);
  }

  function decreaseQuantity(price, name) {
    setQty(parseInt(quantity.current.value) - 1);
    console.log(qty)
    if (qty===0) {
        removeProduct(name)
    } else {
        quantity.current.value = qty;
        console.log(quantity.current.value);
        decreaseTotalAmount(price);
    }
  }

  return (
    <div key={price}>
      <div className="ordered-item">
        <h2>{name}</h2>
        <div style={{ display: "flex", 'margin': '10px' }}>
          <button className="btn" onClick={() => increaseQuantity(price)}>
            +
          </button>
          <input
            className="quantity"
            type="number"
            ref={quantity}
            value={qty}
            onChange={undefined}
          />
          <button onClick={() => decreaseQuantity(price, name)} className="btn">
            -
          </button>
        </div>
        <h2 style={{ color: "var(--tirtary-color)" }}>${price}</h2>
      </div>
      <hr />
    </div>
  );
}
