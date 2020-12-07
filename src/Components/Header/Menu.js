
import React, { Component, Suspense,useState,useEffect } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./style.css"
import {connect} from 'react-redux'
import{getNumbers} from '../../actions/getAction';
import MyVerticallyCenteredModal from "./Modal"

function Menu(props){


  const [modalShow, setModalShow] = React.useState(false);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getNumbers();
  }, []);
  

    return (
      <div className="caart" >
              <ShoppingCartIcon  onClick={() => setModalShow(true)} style={{ position: "relative", fontSize: 40, color: "white", margin:"auto" }} />
              <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </div>
    );
  }

const mapStateToProps = state =>({
  basketProps: state.basketState
})

export default connect(mapStateToProps, {getNumbers}) (Menu);