export function toggleProfileDescription(state, profileId) {
  if (state === profileId) {
    return null
  } else {
    return profileId
  }
}

export function toggleVideoPlaying(isVideoPlaying) {
  return !isVideoPlaying
}