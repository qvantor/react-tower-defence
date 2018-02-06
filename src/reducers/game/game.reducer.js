import * as constants from './game.constants'
import Model from './game.model'

export default function game (state = Model, { type, payload }) {
  switch (type) {
    case constants.BUILD_BLOCK_SETTED:
      return state.merge({ blockBuild: !state.blockBuild })
    default:
      return state
  }
}
