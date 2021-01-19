import React,{useEffect} from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import "./style.css"

 
function MyVerticallyCenteredModal(props) {
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
              <h1 className="myCart">My Cart</h1>
              <a  onClick={props.onHide} className="continueShopping">Continue Shopping</a>
            </div>
      </Modal.Body>
    </Modal>
  );
}


export default MyVerticallyCenteredModal;