import { combineReducers } from 'redux'

import levels from './levels/levels.reducer'
import progress from './progress/progress.reducer'
import config from './config/config.reducer'
import graph from './graph/graph.reducer'

export default combineReducers({
  levels,
  progress,
  config,
  graph
})