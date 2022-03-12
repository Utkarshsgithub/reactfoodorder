import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddedProduct from "./AddedProduct";

export default function Order({ amount }) {

  const product = useSelector((state) => state.product);

  return (
    <>
    <section className="order">

      {
      
      amount === 0 ? (

          <h1>Cart Is Empty!<Link style={{'marginLeft':'10px'}} to="/">Go To Shop</Link></h1>

      ) : (

        Object.keys(product).map(key =>
          <AddedProduct name={key} price={product[key]}/>
        // <div key={product[key]}>
        //   <div className="ordered-item">
        //     <h2>{key}</h2>
        //     <div style={{'display':'flex'}}>
        //       <button className="btn" onClick={()=>increaseQuantity(product[key])} >+</button>
        //       <input onChange={(e)=>{quantity.current.value = 2}} className="quantity" type="number" ref={quantity} value={qty} />
        //       <button onClick={()=>decreaseQuantity(product[key])} className="btn">-</button>
        //     </div>
        //     <h2 style={{'color':'var(--tirtary-color)'}}>${product[key]}</h2>
        //   </div>
        //   <hr />
        // </div>
        )
      )

      }

    </section>
    </>
  );
}
