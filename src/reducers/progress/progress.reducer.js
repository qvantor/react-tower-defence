import * as constants from './progress.constants'
import Model from './progress.model'

export default function progress (state = Model, { type, payload }) {
  switch (type) {
    case constants.WAVE_STARTED:
      return state.merge({ waveActive: true })
    case constants.WAVE_ENDED:
      return state.merge({ waveActive: false })
    default:
      return state
  }
}
