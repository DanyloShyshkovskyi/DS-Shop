import React from "react";
import "./style.css";
import { connect } from "react-redux";
import {
  addBasket,
  dellBasket,
  dellAllBasket,
} from "../../../actions/addAction";

function Item(props) {
  return (
    <div className="carts">
      <ul className="cartWrap">
        <li className="items odd">
          <div className="infoWrap">
            <div className="cartSection">
              <img src={props.img} alt="" className="itemImg" />
              <p className="itemNumber">{props.brand}</p>
              <h3>{props.name}</h3>

              <p className="qty">
                <button
                  className="myfkbuttons minus"
                  onClick={() => props.dellBasket(props)}
                >
                  -
                </button>
                <a className="count-text"> {props.count} </a>
                  
                <button
                  className="myfkbuttons plus"
                  onClick={() => props.addBasket(props)}
                >
                  +
                </button>
                  <a> x $ {props.price}</a>
              </p>

              <p className="stockStatus"> In Stock</p>
            </div>

            <div className="prodTotal cartSection">
              <p>${props.totalPrice.toFixed(2)}</p>
            </div>
            <div className="cartSection removeWrap">
              <a onClick={() => props.dellAllBasket(props)} className="remove">
                x
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

const mapStoreToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStoreToProps, {
  addBasket,
  dellBasket,
  dellAllBasket,
})(Item);
