import * as constants from './game.constants'
import { store } from 'store'

const { dispatch, getState } = store

export const startWave = () => dispatch({ type: constants.GAME_WAVE_STARTED })

export const addWeapon = weapon => dispatch({ type: constants.WEAPON_ADDED, payload: weapon })

export const buildBlockToggle = () => dispatch({ type: constants.BUILD_BLOCK_TOGGLED })

export const groupClicked = click => dispatch =>
  dispatch({ type: constants.GROUP_CLICKED, payload: click })

export const setEnemyPosition = payload => store.dispatch({ type: constants.GAME_ENEMIES_MOVED, payload })

export const buildWeaponSet = weapon => dispatch({ type: constants.BUILD_WEAPON_SETTED, payload: weapon })
export const buildWeaponClear = () => dispatch({ type: constants.BUILD_WEAPON_CLEARED })

export const changeWeapons = payload => dispatch({ type: constants.WEAPONS_CHANGED, payload })
