import React, { useState, useContext } from "react";
import "./style.css";
import { connect } from "react-redux";
import { addBasket } from "../../../actions/addAction";

function Cards2(props) {
  const [cart, setCart] = React.useState("button");

  return (
    <div className="container page-wrapper">
      <div className="page-inner">
        <div className="row">
          <div className="el-wrapper">
            <div className="box-up">
              <img className="img" src={props.img} alt="" />
              <div className="img-info">
                <div className="info-inner">
                  <span className="p-name">{props.name}</span>
                  <span className="p-company">{props.brand}</span>
                </div>
                <div className="a-size">
                  Available sizes :<span className="size">S , M , L , XL</span>
                </div>
              </div>
            </div>
            <div className="box-down">
              <div className="h-bg">
                <div className="h-bg-inner" />
              </div>
              <a
                onClick={() => {
                   setCart("button loading");
                  if(cart=="button"){
                    setTimeout(() => {
                      setCart("button")
                      props.addBasket(props)
                    }, 3500);
                  }
                }}
                className="cart"
              >
                {/*<div className="a-bg">
                  <div className="a-bg-inner" />
                </div>*/}
                <div class={cart}>
                <span className="price">{props.price}$</span>
                <span className="add-to-cart">
                  
                    <span style={{width:120}}>Add to cart</span>
                    <div class="cart">
                      <svg viewBox="0 0 36 26">
                        <polyline points="1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5"></polyline>
                        <polyline points="15 13.5 17 15.5 22 10.5"></polyline>
                      </svg>
                    </div>
                    </span>
                  </div>
                
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(null, { addBasket })(Cards2);
