import * as constants from './progress.constants'
import { store } from 'store/index'

export const startWave = () => dispatch => {
  dispatch({ type: constants.WAVE_STARTED })
}

export const spawnEnemy = payload => dispatch => {
  dispatch({ type: constants.ENEMY_SPAWNED, payload })
}

export const setEnemyPosition = payload => store.dispatch({ type: constants.ENEMY_MOVED, payload })