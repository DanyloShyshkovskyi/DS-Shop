import React from 'react';
import { Motion, spring } from 'react-motion';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isReady: false };
  }

  componentDidMount() {
    this.setState({ isReady: true });
    window.addEventListener('resize', this.adjustContainer, false);
  }

  adjustContainer = e => {
    this.setState({ height: spring(e.currentTarget.innerHeight) });
  };

  render() {
    const { children } = this.props;
      return (
        <div ref="container">
          {' '}
          {children}{' '}
        </div>
      ); 
  }

  static Layer = class extends React.Component {
    constructor(props) {
      super(props);
      this.resizeTimeout = false;
      this.config = this.props.config;
      this.state = {
        toStyle: {
          y: 0,
          x: 0
        }
      };
    }

    componentDidMount() {
      window.addEventListener('mousemove', this.updatePosition, false);
    }

    updatePosition = e => {
      if (!this.resizeTimeout) {
        this.resizeTimeout = setTimeout(() => {
          this.resizeTimeout = null;
          const xFactor = this.config.xFactor;
          const yFactor = this.config.yFactor;
          var getYFromCenter = yFactor * (e.view.innerHeight / 16 - e.clientY/8);
          var getXFromCenter = xFactor * (e.view.innerWidth / 16 - e.clientX/8);
          this.setState({
            toStyle: {
              x: spring(getXFromCenter, this.config.springSettings),
              y: spring(getYFromCenter, this.config.springSettings)
            }
          });
        }, 75);
      }
    };

    render() {
      const { children } = this.props;

      return (
        <Motion style={this.state.toStyle}>
          {motionStyle => (
            <div
              ref="layer"
              style={{
                transform: `translate(${motionStyle.x}px, ${motionStyle.y}px)`,
                ...this.props.layerStyle
              }}
            >
              {children}
            </div>
          )}
        </Motion>
      );
    }
  };
}
