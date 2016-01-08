import React, { Component, PropTypes } from 'react'
//import DevTools from './DevTools'
import 'aframe-core'
import {Animation, Entity, Scene} from 'aframe-react'
import { connect } from 'react-redux'

import Camera from '../components/Camera'
import Cursor from '../components/Cursor'

class Wrapper extends Component {
  render() {
    return (
      <div>
        <Scene>
          <Camera><Cursor/></Camera>
        </Scene>
      </div>
    )
  }
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