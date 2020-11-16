import React from 'react';
import ParallaxMousemove from '../lib';
import {withGetScreen} from 'react-getscreen'

class App extends React.Component {
  render() {

    var style = {
      inner: {
        position: 'absolute',
        margin:'auto',
        top:0,
        left:0,
        right:0,
        bottom:0,
        width:"100%",
        textAlign:'center',
        overflow: 'hidden',
      },
      infoLayerStyle: {
        margin:'auto',
        position: 'absolute',
      },
    }

    return (
      <div>
        <ParallaxMousemove containerStyle={style.outter} fullHeight={true}>
          <div style={style.inner}>
          <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                xFactor: 0.1,
                yFactor: -0.3,
                springSettings: {
                  stiffness: 50,
                  damping: 30
                }
              }}>
              < img className="bliat" style={{height:"100vh",width:"190vh"}} src={require('../images/nike.png')} alt="Parallax Layer"></ img >
            </ParallaxMousemove.Layer>
          <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                xFactor: -0.3,
                yFactor: -0.2,
                springSettings: {
                  stiffness: 50,
                  damping: 30
                }
              }}>
              < img className="bliat" style={{height:"100vh",width:"190vh"}} src={require('../images/shorts.png')} alt="Parallax Layer"></ img >
            </ParallaxMousemove.Layer>
            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                xFactor: 0.2,
                yFactor: 0.3,
                springSettings: {
                  stiffness: 50,
                  damping: 30
                }
              }}>
              < img className="bliat" style={{height:"100vh",width:"190vh"}} src={require('../images/backpack.png')} alt="Parallax Layer"></ img >
            </ParallaxMousemove.Layer>
            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                xFactor: -0.2,
                yFactor: 0.3,
                springSettings: {
                  stiffness: 50,
                  damping: 30
                }
              }}>
              < img className="bliat" style={{height:"100vh",width:"190vh"}} src={require('../images/jacket.png')} alt="Parallax Layer"></ img >
            </ParallaxMousemove.Layer>
            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                xFactor: 0.1,
                yFactor: -0.1,
                springSettings: {
                  stiffness: 50,
                  damping: 30
                }
              }}>
              < img className="bliat" style={{height:"100vh",width:"190vh"}} src={require('../images/head.png')} alt="Parallax Layer"></ img >
            </ParallaxMousemove.Layer>
          </div>
        </ParallaxMousemove>
      </div>
    )
  }
}


export default withGetScreen(App);
