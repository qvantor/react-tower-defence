import { takeEvery, select, put, take, fork, call, cancel, cancelled, race } from 'redux-saga/effects'
import * as playerConst from '../../reducers/player/player.constants'
import * as graphConst from '../../reducers/graph/graph.constants'
import { checkPosition, addBuilding } from '../../reducers/graph/graph.actions'

import { scene } from '../index'
import ToBuild from '../field/toBuild.component'

let building

function* hoverTask () {
  try {
    while (true) {
      const { payload } = yield take(graphConst.POINT_HOVERED)
      building.setPosition(payload)
    }
  } finally {
  }
}

function* clickTask (payload) {
  let active = true
  while (active) {
    yield take('MOUSE_CLICK')
    const hover = yield select(({ graph }) => graph.hover)

    scene.remove(building.root)
    active = false

    if (checkPosition(hover)) {
      yield call(addBuilding, ({ position: hover, building: payload }))
      yield put({ type: playerConst.TO_BUILD_CLEARED })
      console.log('added')
    } else {
      console.log('canceled')
    }
  }
}

export default function* () {
  yield takeEvery(playerConst.TO_BUILD_SETTED, function* ({ payload }) {
    building = new ToBuild(payload)
    scene.add(building.root)
    const hover = yield select(({ graph }) => graph.hover)
    building.setPosition(hover)

    const { bgHoverTask, bgClickTask } = yield race({
      bgHoverTask: yield fork(hoverTask),
      bgClickTask: yield fork(clickTask, payload)
    })
  })
}
