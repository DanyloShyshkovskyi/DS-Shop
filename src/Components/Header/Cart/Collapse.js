import React from "react";
import { Transition, animated } from "react-spring/renderprops";
// import css from './collapse.scss'


const Collapse = ({ collapsed, children, ...props }) => {
  const baseStyles = {
    overflow: "hidden",
    height: 0,
    opacity: 0,
    marginLeft: "1%",
    height: props.height,
  };
  const openStyles = {
    overflow: "hidden",
    height: props.height,
    opacity: 1
  };
  const collapsedStyles = {
    overflow: "hidden",
    opacity: 0,
    marginLeft: "-20%",
    height:0,
    
  };
  const animationConfig = {
    duration: 500
  };
  return (
    <Transition
      items={collapsed}
      native
      config={animationConfig}
      from={baseStyles}
      enter={openStyles}
      leave={collapsedStyles}
      // onFrame={console.log}
      {...props}
    >
      {collapsed =>
        !collapsed
          ? null
          : style => <animated.div style={style} children={children} />
      }
    </Transition>
  );
};

export default Collapse;
