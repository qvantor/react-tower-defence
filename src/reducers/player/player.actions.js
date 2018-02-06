import * as constants from './player.constants'
import { store } from 'store'

const { dispatch } = store

export const addBlocks = count => dispatch({ type: constants.ADD_AVAILABLE_BLOCKS, payload: count })
export const addMoney = count => dispatch({ type: constants.ADD_AVAILABLE_MONEY, payload: count })

export const playerBlockUsed = () => dispatch({ type: constants.PLAYER_BLOCK_USED })