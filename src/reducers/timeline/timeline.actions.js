import { store } from 'store/'
import * as constants from './timeline.constants'

const { dispatch, getState } = store

export const play = () => dispatch({ type: constants.TIMELINE_PLAY })
export const pause = () => dispatch({ type: constants.TIMELINE_PAUSE })

export const setTime = payload => dispatch({ type: constants.TIMELINE_TIME_SETTED, payload })

export const shiftTime = shift => {
  const { timeline: { time } } = getState()
  dispatch({ type: constants.TIMELINE_TIME_SETTED, payload: time + shift })
}