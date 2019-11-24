
import React, { Component } from "react";
import glViewer from './glViewer';

class Draw3D extends Component {
  componentDidMount() {
    console.log('componentDidMount Draw3D');

    let gl = new glViewer(this.mount)
    gl.createScene();
    gl.animate();
  }

  render() {
    console.log('rendering')
    return (
      <div ref={ref => (this.mount = ref)} />
    )
  }
}

export { Draw3D };

