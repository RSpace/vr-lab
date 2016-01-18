import {Entity} from 'aframe-react'
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { toggleProfileDescription } from '../redux/actions'
import ProfileDescription from '../components/ProfileDescription'

const photoWidth = 1
const photoHeight = 1
const photoSpacing = 0.5

class ProfileGrid extends Component {
  render () {
    const { position, rotation, image, profiles } = this.props
    const profilesPerRow = Math.ceil(Math.sqrt(profiles.size))

    return (
      <Entity position={position} rotation={rotation}>
        <Entity geometry="primitive: plane; width: 1.5; height: 0.5" material={{shader: 'flat', src: `url(${image})`}} position="1.5 0 0" />
        {profiles.map(this.renderProfile.bind(this, profilesPerRow))}
        <ProfileDescription position="-3 -2 0" {...this.activeProfileProps()} />
      </Entity>
    )
  }

  renderProfile (profilesPerRow, profile, index) {
    const position = this.positionFromIndex(index, profilesPerRow)

    return (
      <Entity key={index}
        geometry="primitive: plane; width: 1; height: 1;"
        position={position} material={{src: `url(assets/photos/${profile.get('photo')})`}}
        onClick={() => {this.props.onProfileClicked(profile.get('id')) }}
      />
    )
  }

  positionFromIndex (index, profilesPerRow) {
    const x = (photoWidth + photoSpacing)*(index % profilesPerRow)
    const y = ((photoHeight + photoSpacing)*Math.floor(index/profilesPerRow) + 1)*-1
    return `${x} ${y} 0`
  }

  activeProfileProps () {
    const { profiles, activeProfileId } = this.props
    const profile = profiles.find(profile => { return profile.get('id') === activeProfileId })
    const descriptionImage = profile ? profile.get('descriptionImage') : null
    if (profile && descriptionImage) {
      return {
        visible: true,
        name: profile.get('name'),
        description: profile.get('description'),
        descriptionUrl: `assets/descriptions/${descriptionImage}`
      }
    } else {
      return {
        visible: false
      }
    }
  }
}

// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state, ownProps) {
  return {
    profiles: state.get('profiles').filter(profile => profile.get('type') === ownProps.type),
    activeProfileId: state.get('activeProfileIds').get(ownProps.type)
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