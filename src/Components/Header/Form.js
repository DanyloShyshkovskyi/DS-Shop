import React, {useState,forwardRef, useImperativeHandle} from "react";
import './style.css'
import firebase from '../Box/Boxes/firebase'
import { connect } from "react-redux";

 const Form = forwardRef((props, ref) => {
    
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






          const db = firebase.firestore();

          useImperativeHandle(ref, () => ({

            handleSubmit(){
                setLoader(true);
            
                db.collection("contacts")
                  .add({
                    FirstName: firstName,
                    LastName:lastName,
                    Email: email,
                    PhoneNumber: phone,
                    Adress:(adress+house+"/"+flat),
                    PostalCode:postalCode,
                  })
                  .then(() => {
                    setLoader(false);
                    alert("Your message has been submitted👍");
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
              }
        
          }));
     

    return(
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
        </form>
    </div>
    );
});

const mapStoreToProps = (state) => ({
  basketProps: state.basketState,
});

export default Form;