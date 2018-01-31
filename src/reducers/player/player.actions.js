import * as constants from './player.constants'

export const toBuild = building => (dispatch, getState) => {
  const { player: { money } } = getState()
  if (money > building.price) dispatch({ type: constants.TO_BUILD_SETTED, payload: building.id })
}

export const toConstruct = val => dispatch => {
  dispatch({ type: constants.TO_CONSTRUCT_SETTED, payload: val })
}