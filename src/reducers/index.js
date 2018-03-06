import { combineReducers } from 'redux'

import models from './models/models.reducer'
import scene from './scene/scene.reducer'
import timeline from './timeline/timeline.reducer'

export default combineReducers({
  models,
  scene,
  timeline
})