import * as constants from './game.constants'

export const buildBlock = () => dispatch =>
  dispatch({ type: constants.BUILD_BLOCK_SETTED, payload: true })

