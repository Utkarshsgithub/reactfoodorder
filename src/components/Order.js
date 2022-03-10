import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Order({ amount }) {
  const product = useSelector((state) => state.product);
  return (
    <>
    <section className="order">
      {amount === 0 ? (
          <h1>Cart Is Empty!<Link style={{'marginLeft':'10px'}} to="/">Go To Shop</Link></h1>
      ) : (
        Object.keys(product).map(key => <><div className="ordered-item"><h2>{key}</h2><h2>${product[key]}</h2></div><hr /></>)
      )}
    </section>
    </>
  );
}
