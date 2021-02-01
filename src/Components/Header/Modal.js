import React, { useEffect,useRef,useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Cart from "./Cart/Cart";
import "./style.css";
import { connect } from "react-redux";
import { getNumbers } from "../../actions/getAction";
import Delay from "./Delay";
import Form,{handleSubmit} from "./Form";
import firebase from '../Box/Boxes/firebase'
import {
  dellAll,
} from "../../actions/addAction";
import Alert from 'react-bootstrap/Alert';

function MyVerticallyCenteredModal(props) {
  const [FormDisplay, setFormDisplay] = React.useState(
    "box-container2 right-closed2"
  );
  const [FormDisplayTrue, setFormDisplayTrue] = React.useState(true);

  useEffect(() => {
    getNumbers();
  }, []);
  let button;

  const childRef = useRef();
  

  const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [adress, setAdress] = useState("");
    const [house, setHouse] = useState("");
    const [flat, setFlat] = useState("");
    const [postalCode, setPostalCode] = useState("");
  
    const [loader, setLoader] = useState(false);

    let productsInCart = [];

    Object.keys(props.basketProps.products).forEach(function (item) {
      if (props.basketProps.products[item].count >= 0) {
        productsInCart.push(props.basketProps.products[item]);
      }
    });

    const myAlert = () =>{
      return(
        <Alert variant="success">
  <Alert.Heading>Hey, nice to see you</Alert.Heading>
  <p>
    Aww yeah, you successfully read this important alert message. This example
    text is going to run a bit longer so that you can see how spacing within an
    alert works with this kind of content.
  </p>
  <hr />
  <p className="mb-0">
    Whenever you need to, be sure to use margin utilities to keep things nice
    and tidy.
  </p>
</Alert>
      )
    }




    const db = firebase.firestore();

    const handleSubmit = () =>{
      setLoader(true);
  
      db.collection("contacts")
        .add({
          FirstName: firstName,
          LastName:lastName,
          Email: email,
          PhoneNumber: phone,
          Adress:(adress+house+"/"+flat),
          PostalCode:postalCode,
          Item:productsInCart,
        })
        .then(() => {
          setLoader(true);
          
        })
        .catch((error) => {
          alert(error.message);
          setLoader(false);
        });
  
        setFirstName("");
      setEmail("");
      setLastName("");
      setPhone("");
      setAdress("");
      setHouse("");
      setFlat("");
      setPostalCode("");       
      props.dellAll(props)
    };

    



  if (props.basketProps.basketNumbers != 0) {
    button = (
      <button
        onClick={() => {
            setFormDisplay("box-container2 right-open2");
            if (!FormDisplayTrue){handleSubmit()};
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
          <div class="container3">
        <form class="registration-form3">
            <label class="col-one-half3  border_bottom">
                <span class="label-text3 ">First Name</span>
                <input type="text" name="firstName" value={firstName}
        onChange={(e) => setFirstName(e.target.value)}/>
            </label>
            <label class="col-one-half3 left border_bottom">
                <span class="label-text3 ">Last Name</span>
                <input type="text" name="lastName" value={lastName}
        onChange={(e) => setLastName(e.target.value)}/>
            </label>
            <label class="border_bottom">
                <span class="label-text3 ">Email</span>
                <input type="email" name="email" value={email}
        onChange={(e) => setEmail(e.target.value)}/>
            </label >
            <label class="border_bottom">
                <span class="label-text3 ">Phone Nunber</span>
                <input type="tel" name="tel" value={phone}
        onChange={(e) => setPhone(e.target.value)}/>
            </label >
            <label class="password3 border_bottom">
                <span class="label-text3 ">Adress</span>
                <input type="text" name="text" value={adress}
        onChange={(e) => setAdress(e.target.value)}/>
            </label>
            <label class="col-one-half3 border_bottom">
                <span class="label-text3 ">House Number</span>
                <input type="text" name="num" value={house}
        onChange={(e) => setHouse(e.target.value)}/>
            </label>
            <label class="col-one-half3 left border_bottom">
                <span class="label-text3 ">Flat Number</span>
                <input type="text" name="num" value={flat}
        onChange={(e) => setFlat(e.target.value)}/>
            </label>
            <label class="border_bottom">
                <span class="label-text3 ">Postal Code</span>
                <input type="text" name="num" value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}/>
            </label>
            <Alert show={loader} variant="success">
            <Alert.Heading>Your Purchase Was Successful</Alert.Heading>
            <div className="d-flex justify-content-end">
              <Button onClick={() => setLoader(false)} variant="outline-success">
                Well
              </Button>
            </div>
          </Alert>
        </form>
    </div>
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

export default connect(mapStateToProps, { getNumbers,dellAll })(
  MyVerticallyCenteredModal
);
