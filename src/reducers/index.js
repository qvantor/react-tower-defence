import { combineReducers } from 'redux'

import levels from './levels'
import graph from './graph'
import config from './config'
import buildings from './buildings/buildings.reducer'
import player from './player/player.reducer'

export default combineReducers({ levels, graph, config, buildings, player })