import INITIAL_STATE from './initial_state'
import {toggleProfileDescription} from '../core'

export default function labHandler(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'TOGGLE_PROFILE_DESCRIPTION':
      let profile = state.get('profiles').find(profile => { return profile.get('id') === action.profileId })
      let profileType = profile.get('type')

      return state.updateIn(['activeDescriptions', profileType], currentState => toggleProfileDescription(currentState, action.profileId))
  }
  return state
}