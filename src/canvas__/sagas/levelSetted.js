import { takeEvery, select } from 'redux-saga/effects'
import * as levelConst from '../../reducers/levels/levels.constants'

import { scene } from '../index'
import Field from '../field'

import { newGraph } from '../../reducers/graph/graph.actions'

let field

export default function* () {
  yield takeEvery(levelConst.LEVEL_SETTED, function* ({ payload }) {
    if (field) scene.remove(field.root)
    const level = yield select(({ levels }) => levels.list.find(item => item.id === payload))
    field = new Field(level)
    scene.add(field.root)
    newGraph(level.field)
  })
}