import * as constants from './progress.constants'
import * as gameConst from '../game/game.constants'
import { store } from 'store/index'

export const startWave = () => (dispatch, getState) => {
  const { levels, progress: { level } } = getState()
  const levelObj = levels.list.find(item => item.id === level)
  dispatch({ type: gameConst.GATE_HP_INIT, payload: levelObj.gateHP })
  dispatch({ type: constants.WAVE_STARTED })
}