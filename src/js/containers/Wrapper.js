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

class Wrapper extends Component {
  render() {
    return (
      <div>
        <Scene>
          <Camera position={this.getCameraPosition()}><Cursor maxDistance="10" color="#ff0000" /></Camera>
          <Entity position="0 0 -3" geometry="primitive: plane; width: 2; height: 1" material={{shader: 'flat', src: 'url(assets/gfx/VRLAB-logo.png)'}} onClick={openUrl.bind(this, 'http://cphdox.dk/mere-end-film/vrlab/')} />

          <ProfileGrid position="2.2 4.4 -5" rotation="0 -30 0" image="assets/gfx/Directors.png" type="director" />
          <ProfileGrid position="2.2 -1.5 -5" rotation="0 -30 0" image="assets/gfx/Producers.png" type="producer" />

          <Entity position="-4.8 4.4 -2.2" rotation="0 30 0" onClick={this.props.onVideoClicked}>
            <Entity geometry="primitive: plane; width: 1.5; height: 0.5" position="0.7 0 0" material={{shader: 'flat', src: 'url(assets/gfx/About-The-Lab.png)'}} />
            <Video src="assets/About-VR-LAB.mp4" image="assets/About-VR-LAB.jpg"
              position="2 -1.5 0" width="4" height="2.25" autoplay={false} loop={false}
              isPlaying={this.props.isVideoPlaying} />
          </Entity>

          <Entity position="-1.8 -2.4 -2.2" rotation="0 30 0" geometry="primitive: plane; width: 4; height: 2.5" material={{shader: 'flat', src: 'url(assets/gfx/Exhibitions.png)'}} />
        </Scene>
      </div>
    )
  }

  getCameraPosition () {
    if(this.props.isVideoPlaying && !/iPhone/.test(navigator.platform)) {
      return '-2.3 2.9 -2.3'
    } else {
      return '0 0 0'
    }
  }

  //<Entity geometry={{primitive: 'sphere', radius: 9.5}}
  //  material={{repeat: "50 25", shader: 'flat', src: 'url(assets/grid2.png)'}}
  //  scale="1 1 -1"/>

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