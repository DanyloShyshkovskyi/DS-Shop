import React from "react";
import { Transition, animated } from "react-spring/renderprops";
// import css from './collapse.scss'

const baseStyles = {
  overflow: "hidden",
  height: 0,
  opacity: 0
};
const openStyles = {
    
  height: 530,
  opacity: 1
};
const collapsedStyles = {
  height: 0,
  opacity: 0
};
const animationConfig = {
  duration: 500
};
const Collapse = ({ collapsed, children, ...props }) => {
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
