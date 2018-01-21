import produce from 'immer'
import * as constants from './levels.constants'
import Model from './levels.model'

export default function levels (state = Model, { type, payload }) {
  return produce(state, draft => {
    switch (type) {
      case constants.LEVEL_SETTED:
        draft.active = payload
    }
  })
}
