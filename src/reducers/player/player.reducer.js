import * as constants from './player.constants'
import Model from './player.model'
import produce from 'immer'

export default function player (state = Model, { type, payload }) {
  return produce(state, draft => {
    switch (type) {
      case constants.TO_BUILD_SETTED:
        draft.toBuild = payload
        break
      case constants.TO_BUILD_CLEARED:
        draft.toBuild = null
    }
  })
}
