import { select, takeEvery, put } from 'redux-saga/effects'

import { playerBlockUsed } from 'reducers/player/player.actions'
import { addBlock, checkBlockPos } from 'reducers/graph/graph.actions'
import { buildBlockToggle } from 'reducers/game/game.actions'

import * as gConst from 'reducers/game/game.constants'

export default function* () {
  yield takeEvery(gConst.GROUP_CLICKED, function* ({ payload }) {
    const hover = yield select(({ graph }) => graph.hover)
    const blockBuild = yield select(({ game }) => game.blockBuild)
    const weaponBuild = yield select(({ game }) => game.weaponBuild)

    if (blockBuild || weaponBuild) {
      if (blockBuild) {
        if (!checkBlockPos(hover)) return
        const blocks = yield select(({ player }) => player.blocks)
        addBlock({ position: hover })
        playerBlockUsed()
        if (blocks === 1) buildBlockToggle()
      } else {

      }
    }
  })
}
