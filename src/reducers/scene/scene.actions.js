import { store } from 'store/'
import * as constants from './scene.constants'
import { guid } from 'common/'

const { dispatch, getState } = store

export const addModel = model => {
  const { timeline: { duration } } = getState()
  dispatch({
    type: constants.SCENE_MODEL_ADDED,
    payload: Object.assign({
      id: guid(),
      children: [],
      start: 0,
      end: duration,
      keyframesStart: 0,
      keyframesEnd: 10000,
      open: false,
      keyframes: [
        { id: guid(), time: 0, position: [0, 0, 0], rotation: [0, 0, 0] },
        {
          id: guid(),
          time: 3000,
          position: [Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5],
          rotation: [90, 0, 45]
        },
        { id: guid(), time: 10000, position: [0, 0, 0], rotation: [0, 0, 0] }
      ]
    }, model)
  })
}

export const setModelProp = (id, prop) => dispatch({ type: constants.SCENE_MODEL_ADDED_PROP, payload: { id, prop } })

export const putChildInParent = (child, parent) => dispatch({
  type: constants.SCENE_MODEL_REPLACED,
  payload: { child, parent }
})

export const changeModelKeyframe = payload => dispatch({
  type: constants.SCENE_KEYFRAME_CHANGED,
  payload
})