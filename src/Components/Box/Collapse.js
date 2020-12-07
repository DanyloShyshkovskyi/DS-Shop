import React from "react";
import { Transition, animated } from "react-spring/renderprops";
import {withGetScreen} from 'react-getscreen'
// import css from './collapse.scss'


const Collapse = ({ collapsed, children, ...props }) => {



  let baseStyles = {
    overflow: "hidden",
    height: 0,
    opacity: 0
  };
  let openStyles = {
      
    height: props.height,
    opacity: 1
  };
  let collapsedStyles = {
    height: 0,
    opacity: 0
  };
  let animationConfig = {
    duration: 500
  };

  if (props.isMobile()){ baseStyles = {
    overflow: "hidden",
    height: 0,
    opacity: 0
  };
   openStyles = {
      
    height:500,
    opacity: 1
  };
   collapsedStyles = {
    height: 0,
    opacity: 0
  };
   animationConfig = {
    duration: 500
  };
}

if (props.isTablet()){ baseStyles = {
  overflow: "hidden",
  height: 0,
  opacity: 0
};
 openStyles = {
    
  height:500,
  opacity: 1
};
 collapsedStyles = {
  height: 0,
  opacity: 0
};
 animationConfig = {
  duration: 500
};
}


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

export default withGetScreen(Collapse);
