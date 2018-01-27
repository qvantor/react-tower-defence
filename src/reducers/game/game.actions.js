import * as constants from './game.constants'
import { store } from 'store/index'

export const setEnemyPosition = payload => store.dispatch({ type: constants.ENEMY_MOVED, payload })

export const enemyPassed = (id, damage) => {
  store.dispatch({ type: constants.GATE_HP_REDUCED, payload: damage })
  store.dispatch({ type: constants.ENEMY_REMOVED, payload: id })
}