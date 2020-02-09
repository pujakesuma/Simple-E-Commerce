import React, { Component } from "react";
import Title from "../Title.jsx";
import CartColumns from "./CartColumns.jsx";
import EmptyCart from "./EmptyCart.jsx";
import CartList from "./CartList.jsx";
import { ProductConsumer } from "../../context";
import CartTotals from "./CartTotals.jsx";

export class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}

export default Cart;
