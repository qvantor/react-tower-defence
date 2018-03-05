import { store } from 'store/'
import * as constants from './scene.constants'
import { guid } from 'common/'

const { dispatch } = store

export const addModel = model =>
  dispatch({ type: constants.SCENE_MODEL_ADDED, payload: Object.assign({ id: guid(), children: [] }, model) })

export const putChildInParent = (child, parent) => dispatch({
  type: constants.SCENE_MODEL_REPLACED,
  payload: { child, parent }
})