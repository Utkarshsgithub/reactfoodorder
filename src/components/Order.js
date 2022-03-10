import React from "react";

export default function Order({ amount }) {
  if (amount === 0) {
    return <section style={{'textDecoration':'italic'}} className="order">Cart Is Empty!</section>;
  } else {
    return <section className="order">hello</section>;
  }
}
