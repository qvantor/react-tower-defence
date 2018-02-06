import * as constants from './game.constants'
import { store } from 'store'

const { dispatch, getState } = store

export const buildBlockToggle = () => dispatch({ type: constants.BUILD_BLOCK_SETTED })

export const groupClicked = click => dispatch =>
  dispatch({ type: constants.GROUP_CLICKED, payload: click })
