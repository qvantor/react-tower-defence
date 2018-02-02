import * as constants from './progress.constants'

export const setLevel = level => dispatch => dispatch({ type: constants.LEVEL_SETTED, payload: level })