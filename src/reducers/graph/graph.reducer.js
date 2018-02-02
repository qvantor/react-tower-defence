import * as constants from './graph.constants'
import Model from './graph.model'

export default function graph (state = Model, { type, payload }) {
  switch (type) {
    case constants.PATH_CALCULATED:
      return state.merge({ path: payload })
    case constants.BLOCK_ADDED:
      return state.merge({ blocks: [...state.blocks, payload] })
    case constants.BLOCK_CLEARED:
      return state.merge({ blocks: [] })
    case constants.POINT_HOVERED:
      return state.merge({ hover: payload })
    default:
      return state
  }
}
