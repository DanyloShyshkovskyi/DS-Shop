import zIndex from "@material-ui/core/styles/zIndex";
import React, { Component, Suspense } from "react";
import { Form, Navbar, Nav, FormControl, Button, Image } from "react-bootstrap";
import logo from "../img/logo3.png";
import cart from "../img/cart.png";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./style.css"
import ReactModal from 'react-modal';
import Cart from "./Cart/index"

export default class Menu extends Component {
  

  opencart = () =>{
    console.log("hi")
    console.log('huj')
  }
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  

  render() {
    return (
      <div className="caart" >
        <div>
        <ReactModal 
        overlayClassName="Overlay"
          className="modalWindow"
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
        >
          huj
        </ReactModal>
      </div>
              <ShoppingCartIcon  onClick={this.handleOpenModal} style={{ position: "relative", fontSize: 40, color: "white", margin:"auto" }} />
      </div>
    );
  }
}
