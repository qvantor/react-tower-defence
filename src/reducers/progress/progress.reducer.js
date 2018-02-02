import * as constants from './progress.constants'
import Model from './progress.model'

export default function progress (state = Model, { type, payload }) {
  switch (type) {
    case constants.LEVEL_SETTED:
      return state.merge({ level: payload })
    default:
      return state
  }
}
