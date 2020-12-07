import React from "react";
import { connect } from "react-redux";
import Item from "./Item";
import Collapse from "./Collapse";

function Cart({ basketProps }, props) {
  console.log(props);

  let productsInCart = [];

  Object.keys(basketProps.products).forEach(function (item) {
    if (basketProps.products[item].count >= 0) {
      productsInCart.push(basketProps.products[item]);
    }
  });

  productsInCart = productsInCart.map((products, index) => {
    return (
      <Collapse collapsed={products.inCart} height={220}>
        <div key={index}>
          <Item
            name={products.name}
            brand={products.brand}
            img={products.img}
            price={products.price}
            count={products.count}
            totalPrice={products.totalPrice}
          />
        </div>
      </Collapse>
    );
  });

  return (
    <div>
      <div className="wrap cf">
        {productsInCart}

        <div className="subtotal cf">
          <div className="Finlal">
            <div className=" final">
              <p className="label">Total:</p>
              <p className="value">$ {basketProps.total.toFixed(2)}</p>
            </div>
            <a className="totalRow">
              <a href="#" className="btn continue">
                Checkout
              </a>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStoreToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStoreToProps)(Cart);
