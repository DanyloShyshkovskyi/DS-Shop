import React from "react";
import './style.css'

export default function Form() {
    return(
        <div class="container3">
        <form class="registration-form3">
            <label class="col-one-half3  border_bottom">
                <span class="label-text3 ">First Name</span>
                <input type="text" name="firstName"/>
            </label>
            <label class="col-one-half3 left border_bottom">
                <span class="label-text3 ">Last Name</span>
                <input type="text" name="lastName"/>
            </label>
            <label class="border_bottom">
                <span class="label-text3 ">Email</span>
                <input type="email" name="email"/>
            </label >
            <label class="border_bottom">
                <span class="label-text3 ">Phone Nunber</span>
                <input type="tel" name="tel"/>
            </label >
            <label class="password3 border_bottom">
                <span class="label-text3 ">Adress</span>
                <input type="text" name="text"/>
            </label>
            <label class="col-one-half3 border_bottom">
                <span class="label-text3 ">House Number</span>
                <input type="text" name="num"/>
            </label>
            <label class="col-one-half3 left border_bottom">
                <span class="label-text3 ">Flat Number</span>
                <input type="text" name="num"/>
            </label>
            <label class="border_bottom">
                <span class="label-text3 ">Postal Code</span>
                <input type="text" name="num"/>
            </label>
        </form>
    </div>
    );
}