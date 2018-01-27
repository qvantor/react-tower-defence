import { combineReducers } from 'redux'

import levels from './levels'
import graph from './graph'
import config from './config'
import buildings from './buildings/buildings.reducer'
import player from './player/player.reducer'
import enemies from './enemies/enemies.reducer'
import waves from './waves/waves.reducer'
import progress from './progress/progress.reducer'
import game from './game/game.reducer'

export default combineReducers({
  levels, graph, config, buildings,
  player, enemies, waves, progress, game
})