import React, { Component, PropTypes } from 'react'
//import DevTools from './DevTools'
import {registerComponent} from 'aframe-core'
import {component} from 'aframe-text-component'
registerComponent('text', component)
import {Animation, Entity, Scene} from 'aframe-react'
import { connect } from 'react-redux'

import Camera from '../components/Camera'
import Cursor from '../components/Cursor'

class Wrapper extends Component {
  render() {
    return (
      <div>
        <Scene>
          <Camera position="0 0 0"><Cursor/></Camera>

          <Entity text="text: DIRECTORS; size: 0.4" material="color: black" position="2.2 4.4 -5" rotation="0 -45 0" />
          <a-entity geometry="primitive: plane; width: 5; height: 5;" position="4.75 3 -5" rotation="0 -45 0" material="color: black"></a-entity>

          <Entity text="text: PRODUCERS; size: 0.4" material="color: black" position="2.2 -0.8 -5" rotation="0 -45 0" />
          <a-entity geometry="primitive: plane; width: 5; height: 5;" position="4.75 -4 -5" rotation="0 -45 0" material="color: black"></a-entity>

          <Entity text="text: ABOUT THE LAB; size: 0.4" material="color: black" position="-4.8 4.4 -2.2" rotation="0 45 0" />
          <a-entity geometry="primitive: plane; width: 5; height: 5;" position="-4.75 3 -5" rotation="0 45 0" material="color: black"></a-entity>

          <Entity text="text: EXHIBITIONS; size: 0.4" material="color: black" position="-4.8 -0.8 -2.5" rotation="0 45 0" />
          <a-entity geometry="primitive: plane; width: 5; height: 5;" position="-4.75 -4 -5" rotation="0 45 0" material="color: black"></a-entity>
        </Scene>
      </div>
    )
  }

  //<Entity geometry={{primitive: 'sphere', radius: 9.5}}
  //  material={{repeat: "50 25", shader: 'flat', src: 'url(assets/grid2.png)'}}
  //  scale="1 1 -1"/>
}

// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
  return {}
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wrapper)