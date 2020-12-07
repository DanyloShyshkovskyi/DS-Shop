import React, { useState, useContext } from "react";
import "./style.css"; 
import {connect} from 'react-redux';
import{addBasket} from '../../../actions/addAction';
 



function Cards2(props){


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
                    Available sizes :
                    <span className="size">S , M , L , XL</span>
                  </div>
                </div>
              </div>
              <div className="box-down">
                <div className="h-bg">
                  <div className="h-bg-inner" />
                </div>
                <a onClick={() => props.addBasket(props)} className="cart">
                  <span className="price">{props.price}$</span>
                  <span  className="add-to-cart">
                    <span  className="txt">Add in cart</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


  export default connect(null, {addBasket}) (Cards2);