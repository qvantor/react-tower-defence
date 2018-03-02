import * as constants from './scene.constants'
import Immutable from 'seamless-immutable'
import Model from './scene.model'

export default function scene (state = Model, { type, payload }) {
  switch (type) {
    case constants.SCENE_MODEL_ADDED:
      return Immutable([...state, payload])
    default:
      return state
  }
}
