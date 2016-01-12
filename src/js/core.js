export function toggleProfileDescription(state, profileId) {
  if (state === profileId) {
    return null
  } else {
    return profileId
  }
}