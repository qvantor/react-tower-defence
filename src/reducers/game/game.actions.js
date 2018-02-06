import * as constants from './game.constants'
import { store } from 'store'

const { dispatch, getState } = store

export const addWeapon = weapon => dispatch({ type: constants.WEAPON_ADDED, payload: weapon })

export const buildBlockToggle = () => dispatch({ type: constants.BUILD_BLOCK_TOGGLED })

export const groupClicked = click => dispatch =>
  dispatch({ type: constants.GROUP_CLICKED, payload: click })

export const buildWeaponSet = weapon => dispatch({ type: constants.BUILD_WEAPON_SETTED, payload: weapon })
export const buildWeaponClear = () => dispatch({ type: constants.BUILD_WEAPON_CLEARED })
