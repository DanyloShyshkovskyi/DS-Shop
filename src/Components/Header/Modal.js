import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Cart from "./Cart/Cart";
import "./style.css";
import { connect } from "react-redux";
import { getNumbers } from "../../actions/getAction";
import Delay from "./Delay";
import Form from "./Form";

function MyVerticallyCenteredModal(props) {
  const [FormDisplay, setFormDisplay] = React.useState(
    "box-container2 right-closed2"
  );
  const [FormDisplayTrue, setFormDisplayTrue] = React.useState(true);

  useEffect(() => {
    getNumbers();
  }, []);
  let button;

  if (props.basketProps.basketNumbers != 0) {
    button = (
      <button
        onClick={() => {
            setFormDisplay("box-container2 right-open2");
           setFormDisplayTrue(false);
        }}
        className="continueBlack"
      >
        Checkout
      </button>
    );
  } else {
    button = (
      <button disabled className="continueGrey">
        Checkout
      </button>
    );
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      pointer-events="none"
    >
      <Modal.Body>
        <div className="heading cf">
          <div class={FormDisplay}>
            <div class="box1-content2 content2" style={{height:"50px",padding:0}}>
            <h1 className="myCart">My Cart</h1>
            <a onClick={props.onHide} className="continueShopping">
            Continue Shopping
          </a>
            </div>

            <div class="box2-content2 content2" style={{height:"50px",padding:0}}>
            <h1 className="myCart">Shipping Details</h1>
            <a className="totalRow"> <button
        onClick={() => {
            setFormDisplay("box-container2 right-closed2");
          setFormDisplayTrue(true);
        }}
        className="continueBack"
      >
       Back
      </button></a>
            </div>
          </div>
          
        </div>
        <div class={FormDisplay}>
          <div class="box1-content2 content2">
            {props.basketProps.basketNumbers == 0 && (
              <Delay wait={500}>
                <div className="empty">Your cart is empty</div>
              </Delay>
            )}
            <Cart onHide={props.onHide} />
          </div>

          <div class="box2-content2 content2">
            <Form />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="wrap cf column">
          <div className= "Finlal">
              <div className=" final">
                <p className="label">Total: $ {props.basketProps.total.toFixed(2)}</p>
              </div>
              <a className="totalRow">{button}</a>
        </div>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { getNumbers })(
  MyVerticallyCenteredModal
);
