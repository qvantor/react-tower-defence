import { takeEvery, select, put } from 'redux-saga/effects'

import * as pConst from 'reducers/progress/progress.constants'
import { newLevel } from 'reducers/graph/graph.actions'

export default function* () {
  yield takeEvery(pConst.LEVEL_SETTED, function* ({ payload }) {
    const level = yield select(({ levels }) => levels.find(item => item.id === payload))
    newLevel(level)
  })
  yield put({ type: pConst.LEVEL_SETTED, payload: 1 })
}