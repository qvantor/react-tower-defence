import * as constants from './game.constants'
import Model from './game.model'

export default function game (state = Model, { type, payload }) {
  switch (type) {
    case constants.ENEMY_SPAWNED:
      return state.merge({ activeEnemies: [...state.activeEnemies, payload] })
    case constants.ENEMY_MOVED:
      return state.merge({ activeEnemies: state.activeEnemies.map((item, i) => item.merge({ position: payload[i] })) })
    case constants.ENEMY_REMOVED:
      return state.merge({ activeEnemies: state.activeEnemies.filter(item => item.id !== payload) })
    case constants.GATE_HP_INIT:
      return state.merge({ gateHP: payload })
    case constants.GATE_HP_REDUCED:
      return state.merge({ gateHP: state.gateHP - payload })
    default:
      return state
  }
}
