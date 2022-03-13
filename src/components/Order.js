import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddedProduct from "./AddedProduct";

export default function Order({ amount, setProgress }) {

  const product = useSelector((state) => state.product);

  setProgress(20)

  return (
    <>
    <section className="order">

      {
      
      amount === 0 ? (

          <h1>Cart Is Empty!<Link style={{'marginLeft':'10px'}} to="/">Go To Shop</Link></h1>

      ) : (

        Object.keys(product).map(key =>
          <AddedProduct name={key} price={product[key]}/>
        )
      )
      }

      {setProgress(100)}
      
    </section>
    </>
  );
}
