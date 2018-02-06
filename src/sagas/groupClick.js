import { select, takeEvery } from 'redux-saga/effects'

import { playerBlockUsed, playerMoneySpent } from 'reducers/player/player.actions'
import { addBlock, checkBlockPos, checkWeaponPos } from 'reducers/graph/graph.actions'
import { buildBlockToggle, addWeapon, buildWeaponClear } from 'reducers/game/game.actions'

import * as gConst from 'reducers/game/game.constants'

export default function* () {
  yield takeEvery(gConst.GROUP_CLICKED, function* ({ payload }) {
    const hover = yield select(({ graph }) => graph.hover)
    const blockBuild = yield select(({ game }) => game.blockBuild)
    const weaponBuild = yield select(({ game }) => game.weaponBuild)

    if (blockBuild || weaponBuild) {
      if (blockBuild) {
        if (!checkBlockPos(hover)) return
        addBlock({ position: hover })
        playerBlockUsed()
        const blocks = yield select(({ player }) => player.blocks)
        if (blocks <= 0) buildBlockToggle()
      } else {
        if (!checkWeaponPos(hover)) return
        const weapon = yield select(({ weapons }) => weapons.find(item => item.id === weaponBuild))

        addWeapon({ weapon, position: hover })
        playerMoneySpent(weapon.price)
        const money = yield select(({ player }) => player.money)
        if (money < weapon.price) buildWeaponClear()
      }
    }
  })
}
