import React, { Component } from "react";
import "./style.css"; 

export default class Cards2 extends Component {


  constructor (props) {
    super(props);
    this.state = {
       name:null,
       brand:"",
       img:"",
       prise:''
    };
    
  }
  

  toggle = () => {
    this.setState({
      name:"huj",
      brand:this.props.brand,
      img:this.props.img,
      prise:this.props.price
    });
    console.log(this.state.name)
  }
  render() {
    return (
        <div className="container page-wrapper">
        <div className="page-inner">
          <div className="row">
            <div className="el-wrapper">
              <div className="box-up">
                <img className="img" src={this.props.img} alt="" />
                <div className="img-info">
                  <div className="info-inner">
                    <span className="p-name">{this.props.name}</span>
                    <span className="p-company">{this.props.brand}</span>
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
                <a onClick={this.toggle} className="cart" href="#">
                  <span className="price">{this.props.price}$</span>
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
}
