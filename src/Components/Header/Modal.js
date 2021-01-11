import React,{useEffect} from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Cart from "./Cart/Cart"
import "./style.css"
import {connect} from 'react-redux'
import{getNumbers} from '../../actions/getAction';
import Delay from "./Delay";

 
function MyVerticallyCenteredModal(props) {
   useEffect(() => {
    getNumbers();
  }, []);
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
            {(props.basketProps.basketNumbers ==0) && <Delay wait={500}><div className="empty">
              Your cart is empty</div></Delay>}
        <Cart onHide={props.onHide}/>
      </Modal.Body>
    </Modal>
  );
}

const mapStateToProps = state =>({
  basketProps: state.basketState
})

export default connect(mapStateToProps, {getNumbers}) (MyVerticallyCenteredModal);