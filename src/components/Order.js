import React from "react";

export default function Order({ cartEmpty }) {
  if (cartEmpty === true) {
    return <section style={{'textDecoration':'italic'}} className="order">Cart Is Empty!</section>;
  } else {
    return (
        <section className="order">hello</section>
    )
  }
}
