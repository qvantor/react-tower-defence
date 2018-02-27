import * as constants from './bullets.constants'
import { store } from 'store'

const { dispatch, getState } = store

export const addBullet = bullet => dispatch({ type: constants.BULLET_ADDED, payload: bullet })

export const moveBullets = payload => dispatch({ type: constants.BULLETS_MOVED, payload })