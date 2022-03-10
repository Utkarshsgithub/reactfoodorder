import React, { useState } from "react";
import { useSelector } from "react-redux";
import Order from "./Order";

export default function Cart() {
  const amount = useSelector((state) => state.amount);

  return (
    <>
      <div className="cart">
        <h1>Your Cart</h1>
        <div className="orders">
          <Order amount={amount} />
          <hr />
          <h1>${amount}</h1>
        </div>
      </div>
    </>
  );
}
