import * as constants from './player.constants'
import Model from './player.model'

export default function player (state = Model, { type, payload }) {
  switch (type) {
    case constants.ADD_AVAILABLE_BLOCKS:
      return state.merge({ blocks: state.blocks + payload })
    case constants.ADD_AVAILABLE_MONEY:
      return state.merge({ money: state.money + payload })
    default:
      return state
  }
}
