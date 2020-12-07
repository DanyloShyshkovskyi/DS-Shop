import React from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Cart from "./Cart/Cart"
import "./style.css"

 
 export default function MyVerticallyCenteredModal(props) {
   console.log(props.onHide)
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      pointer-events="none"
    >
      <Modal.Body>
      <div  className="heading cf">
              <h1>My Cart</h1>
              <a href="#" onClick={props.onHide} className="continue">Continue Shopping</a>
            </div>
        <Cart onHide={props.onHide}/>
      </Modal.Body>
    </Modal>
  );
}