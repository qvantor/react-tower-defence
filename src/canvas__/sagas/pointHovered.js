import { takeEvery, select } from 'redux-saga/effects'
import * as graphConst from '../../reducers/graph/graph.constants'

import { scene } from '../index'
import Hover from '../field/hover.component'

const hoverPlane = new Hover([0, 0])
scene.add(hoverPlane.root)

export default function* () {
  yield takeEvery(graphConst.POINT_HOVERED, function* ({ payload }) {
    hoverPlane.setPosition(payload)
  })
}