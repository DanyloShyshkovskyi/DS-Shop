import React from "react";
import { connect } from "react-redux";
import Item from "./Item";
import Collapse from "./Collapse";


function Cart({ basketProps }, props) {
  console.log(props);

  let productsInCart = [];

  const [modalShow, setModalShow] = React.useState(false);

  Object.keys(basketProps.products).forEach(function (item) {
    if (basketProps.products[item].count >= 0) {
      productsInCart.push(basketProps.products[item]);
    }
  });

  let button;

  if (basketProps.basketNumbers!=0) {
    button =  <button  onClick={() => setModalShow(true)}  className="continueBlack">
    Checkout
  </button>;
  } else {
    button =  <button disabled  className="continueGrey">
    Checkout
  </button>;
  }

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
      </div>
    </div>
  );
}

const mapStoreToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStoreToProps)(Cart);
