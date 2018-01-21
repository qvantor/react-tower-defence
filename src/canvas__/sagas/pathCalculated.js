import { takeEvery, select } from 'redux-saga/effects'
import * as graphConst from '../../reducers/graph/graph.constants'

import { scene } from '../index'
import Path from '../field/path.component'

let path

export default function* () {
  yield takeEvery(graphConst.PATH_CALCULATED, function* ({ payload }) {
    if (path) scene.remove(path.root)
    path = new Path(payload)
    scene.add(path.root)
  })
}