import {Entity} from 'aframe-react'
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { toggleProfileDescription } from '../redux/actions'

const photoWidth = 1
const photoHeight = 1
const photoSpacing = 0.5

class ProfileGrid extends Component {
  render () {
    const { position, rotation, text, profiles } = this.props;
    const profilesPerRow = Math.ceil(Math.sqrt(profiles.length))

    return (
      <Entity position={position} rotation={rotation}>
        <Entity text={{text: text, size: 0.4}} material="color: black" position="0 0 0" />
        {profiles.map(this.renderProfile.bind(this, profilesPerRow))}
      </Entity>
    )
  }

  renderProfile (profilesPerRow, profile, index) {
    const position = this.positionFromIndex(index, profilesPerRow)

    return (
      <Entity key={index}
        geometry="primitive: plane; width: 1; height: 1;"
        position={position} material={{src: `url(assets/photos/${profile.get('photo')})`}}
        onClick={this.props.onProfileClicked.bind(this, profile.get('id'))}
      />
    )
  }

  positionFromIndex (index, profilesPerRow) {
    const x = (photoWidth + photoSpacing)*(index % profilesPerRow)
    const y = ((photoHeight + photoSpacing)*Math.floor(index/profilesPerRow) + 1)*-1
    return `${x} ${y} 0`
  }
}

// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state, ownProps) {
  return {
    profiles: state.get('profiles').filter(profile => profile.get('type') === ownProps.type)
  }
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
  return {
    onProfileClicked: (profileId) => dispatch(toggleProfileDescription(profileId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileGrid)