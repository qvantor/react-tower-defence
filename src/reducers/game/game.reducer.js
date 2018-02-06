import * as constants from './game.constants'
import Model from './game.model'

export default function game (state = Model, { type, payload }) {
  switch (type) {
    case constants.BUILD_BLOCK_TOGGLED:
      return state.merge({ blockBuild: !state.blockBuild, weaponBuild: false })
    case constants.BUILD_WEAPON_SETTED:
      return state.merge({ blockBuild: false, weaponBuild: payload })
    case constants.BUILD_WEAPON_CLEARED:
      return state.merge({ blockBuild: false, weaponBuild: false })
    case constants.WEAPON_ADDED:
      return state.merge({ weapons: [...state.weapons, payload] })
    default:
      return state
  }
}
