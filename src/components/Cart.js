import React, { useState } from "react";
import Order from "./Order";

export default function Cart() {
  const [cartEmpty, setcartEmpty] = useState(true);
  
  return (
    <>
      <div className="cart">
        <h1>Your Cart</h1>
        <div className="orders">
          <Order cartEmpty={cartEmpty} />
        </div>
      </div>
    </>
  );
}
