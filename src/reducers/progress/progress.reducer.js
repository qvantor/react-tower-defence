import * as constants from './progress.constants'
import Model from './progress.model'

export default function progress (state = Model, { type, payload }) {
  switch (type) {
    case constants.WAVE_STARTED:
      return state.merge({ waveActive: true })
    case constants.ENEMY_SPAWNED:
      return state.merge({ activeEnemies: [...state.activeEnemies, payload] })
    case constants.ENEMY_MOVED:
      return state.merge({ activeEnemies: state.activeEnemies.map((item, i) => item.merge({ position: payload[i] })) })
    default:
      return state
  }
}
