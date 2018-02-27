import { combineReducers } from 'redux'

import levels from './levels/levels.reducer'
import progress from './progress/progress.reducer'
import config from './config/config.reducer'
import graph from './graph/graph.reducer'
import player from './player/player.reducer'
import game from './game/game.reducer'
import weapons from './weapons/weapons.reducer'
import enemies from './enemies/enemies.reducer'
import waves from './waves/waves.reducer'
import bullets from './bullets/bullets.reducer'

export default combineReducers({
  levels,
  progress,
  config,
  graph,
  player,
  game,
  weapons,
  enemies,
  waves,
  bullets
})