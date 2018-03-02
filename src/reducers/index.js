import { combineReducers } from 'redux'

import models from './models/models.reducer'
import scene from './scene/scene.reducer'

export default combineReducers({
  models,
  scene
})