import INITIAL_STATE from './initial_state'
import {toggleProfileDescription, toggleVideoPlaying} from '../core'

export default function labHandler(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'TOGGLE_PROFILE_DESCRIPTION':
      const profile = state.get('profiles').find(profile => { return profile.get('id') === action.profileId })
      const profileType = profile.get('type')

      return state.updateIn(['activeProfileIds', profileType], currentState => toggleProfileDescription(currentState, action.profileId))
    case 'TOGGLE_VIDEO_PLAYING':
      return state.update('isVideoPlaying', isVideoPlaying => toggleVideoPlaying(isVideoPlaying))
  }
  return state
}