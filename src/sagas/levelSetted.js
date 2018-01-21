import { takeEvery, select } from 'redux-saga/effects'
import * as levelConst from 'reducers/levels/levels.constants'

import { newGraph } from 'reducers/graph/graph.actions'

export default function* () {
  yield takeEvery(levelConst.LEVEL_SETTED, function* ({ payload }) {
    const level = yield select(({ levels }) => levels.list.find(item => item.id === payload))
    newGraph(level.field)
  })
}