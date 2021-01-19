
import React, { Component, Suspense,useState,useEffect } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./style.css"
import {connect} from 'react-redux'
import{getNumbers} from '../../actions/getAction';
import MyVerticallyCenteredModal from "./Modal"
import { useSpring, animated } from 'react-spring'

function Menu(props){

  const [modalShow, setModalShow] = React.useState(false);


  const { x } = useSpring({ from: { x: 0 }, x: props.basketProps.animation ? 1 : 0, config: { duration: 1000 } })

  useEffect(() => {
    getNumbers();
  }, []);

    return (
      <div className="caart">
      <div  >
              <ShoppingCartIcon  onClick={() => setModalShow(true)} style={{ borderRadius:"50%", padding:"10px",background:"black",position: "relative", fontSize: 50, color: "white", margin:"auto" }} />
              <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      {(props.basketProps.basketNumbers !=0) &&  <animated.div
        style={{
          transform: x
            .interpolate({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
            })
            .interpolate(x => `scale(${x})`)
        }}>
        <div onClick={() => setModalShow(true)} className='basketNumber'>{props.basketProps.basketNumbers}</div>
      </animated.div> }
     
    </div>
      
      </div>
    );
  }

const mapStateToProps = state =>({
  basketProps: state.basketState
})

export default connect(mapStateToProps, {getNumbers}) (Menu);