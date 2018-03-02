import { store } from 'store/'
import * as constants from './scene.constants'

const { dispatch } = store

export const addModel = model => dispatch({ type: constants.SCENE_MODEL_ADDED, payload: model })
