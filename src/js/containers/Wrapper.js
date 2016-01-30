import React, { Component, PropTypes } from 'react'
//import DevTools from './DevTools'
import {registerComponent} from 'aframe-core'
import {component} from 'aframe-text-component'
registerComponent('text', component)
import {Animation, Entity, Scene} from 'aframe-react'
import { connect } from 'react-redux'

import Camera from '../components/Camera'
import Cursor from '../components/Cursor'
import Video from '../components/Video'
import ProfileGrid from './ProfileGrid'

import { toggleVideoPlaying, pauseVideo } from '../redux/actions'
import { openUrl } from '../core'

const styles = require('../../scss/Wrapper.scss')

class Wrapper extends Component {
  render() {
    return (
      <div>
        <Scene>
          <Camera {...this.getCameraProps()}><Cursor maxDistance="10" color="#ff0000" /></Camera>
          <Entity position="0 0 -3" geometry="primitive: plane; width: 2; height: 1" material={{shader: 'flat', src: 'url(assets/gfx/VRLAB-logo.png)'}} />

          <ProfileGrid position="2.2 4.4 -2" rotation="25 -75 0"
            descPosition="-3 -2 0" descRotation="0 50 -20"
            image="assets/gfx/Directors.png" type="director" />

          <ProfileGrid position="3 -1 -2" rotation="-25 -75 0"
            descPosition="-3 -2 0" descRotation="0 60 20"
            image="assets/gfx/Producers.png" type="producer" />

          <Entity position="-2.2 4.4 1" rotation="25 75 0" onMouseEnter={this.activateCursor} onMouseLeave={this.deactivateCursor}>
            <Entity geometry="primitive: plane; width: 1.5; height: 0.5" position="0.7 0 0" material={{shader: 'flat', src: 'url(assets/gfx/About-The-Lab.png)'}} />
            <Entity onClick={this.props.onVideoClicked}>
              <Video src="assets/About-VR-LAB.mp4" image="assets/About-VR-LAB.jpg"
                position="2 -1.5 0" width="4" height="2.25" autoplay={false} loop={false}
                isPlaying={this.props.isVideoPlaying} />
            </Entity>
            <Entity geometry="primitive: plane; width: 2; height: 0.5" position="1.8 -3 0" onClick={openUrl.bind(this, 'http://cphdox.dk/en/more-than-films/vrlab/')} material={{shader: 'flat', src: 'url(assets/gfx/read_more.png)'}} />
          </Entity>

          <Entity position="-3 -1 -1" rotation="-25 75 0" geometry="primitive: plane; width: 4; height: 2.5" material={{shader: 'flat', src: 'url(assets/gfx/Exhibitions.png)'}} />

          <Entity position="0.15 -2 0" rotation="-90 0 0" onClick={openUrl.bind(this, 'https://itunes.apple.com/us/app/vrlab/id1045586626')} geometry="primitive: plane; width: 0.5; height: 0.25" material={{shader: 'flat', src: 'url(assets/gfx/app_store.png)'}} />
          <Entity position="-0.55 -2 0" rotation="-90 0 0" onClick={openUrl.bind(this, 'https://play.google.com/store/apps/details?id=com.makropol.vrlab')} geometry="primitive: plane; width: 0.5; height: 0.25" material={{shader: 'flat', src: 'url(assets/gfx/google_play.png)'}} />

          <Entity position="0 0 1" rotation="0 180 0" geometry="primitive: plane; width: 2; height: 2" material={{shader: 'flat', src: 'url(assets/gfx/logoer.png)'}} />
          <Entity position="0 5 0" rotation="90 0 0" geometry="primitive: plane; width: 2; height: 1" material={{shader: 'flat', src: 'url(assets/gfx/madeby.png)'}}  onClick={openUrl.bind(this, 'http://immersionftw.com/')} />
        </Scene>
      </div>
    )
  }

  getCameraProps () {
    if(this.props.isVideoPlaying && !/iPhone/.test(navigator.platform)) {
      if (/Android/.test(navigator.userAgent)) {
        return { 'position': '1 3 -1', 'look-controls': 'enabled: true' }
      } else {
        return { 'position': '-0.8 2.5 -1', 'rotation': '25 75 0', 'look-controls': 'enabled: false' }
      }
    } else {
      return { 'position': '0 0 0', 'look-controls': 'enabled: true' }
    }
  }
}

// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
  return {
    isVideoPlaying: state.get('isVideoPlaying')
  }
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
  return {
    onVideoClicked: () => dispatch(toggleVideoPlaying()),
    onVideoPause: () => dispatch(pauseVideo()),
    onLinkClicked: (url) => dispatch(openUrl(url))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wrapper)