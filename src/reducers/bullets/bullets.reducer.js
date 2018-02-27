import Immutable from 'seamless-immutable'
import * as constants from './bullets.constants'
import Model from './bullets.model'

export default function bullets (state = Model, { type, payload }) {
  switch (type) {
    case constants.BULLET_ADDED:
      return Immutable([...state, payload])
    case constants.BULLETS_MOVED:
      return state.map((item, i) => item.merge({ position: payload[i] }))
    default:
      return state
  }
}
