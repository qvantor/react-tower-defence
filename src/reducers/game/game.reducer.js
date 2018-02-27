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
    case constants.GAME_WAVE_STARTED:
      return state.merge({ waveActive: true })
    case constants.GAME_ENEMY_SPAWNED:
      return state.merge({ activeEnemies: [...state.activeEnemies, payload] })
    case constants.GAME_ENEMIES_MOVED:
      return state.merge({ activeEnemies: state.activeEnemies.map((item, i) => item.merge({ position: payload[i] })) })
    case constants.WEAPONS_CHANGED:
      return state.merge({
        weapons: state.weapons.map(item => {
          const changes = payload.find(ch => ch.id === item.weapon.id)
          return changes ? item.merge(changes.data) : item
        })
      })
    default:
      return state
  }
}
