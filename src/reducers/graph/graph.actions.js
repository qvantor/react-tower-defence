import * as constants from './graph.constants'
import Graph from 'rcanvas/common/graph'
import { store } from 'store'

let graph

// @todo put graph in redux
export const newLevel = ({ field, portal, gate, blocks }) => {
  graph = new Graph(field)
  store.dispatch({ type: constants.BLOCK_CLEARED })
  blocks.forEach(item => addBlock({ position: item }))
  findPath()
}

const findPath = () => {
  const { levels, progress: { level } } = store.getState()
  const levelObj = levels.find(i => i.id === level)
  const path = graph.find(levelObj.portal, levelObj.gate)
  store.dispatch({ type: constants.PATH_CALCULATED, payload: path.map(item => graph.idToCoord(item.id)) })
}

export const addBlock = block => {
  graph.removeNode(block.position)
  store.dispatch({ type: constants.BLOCK_ADDED, payload: block })
}

export const setHover = pos => (dispatch, getState) => {
  const { graph: { hover }, levels } = getState()
  if (hover[0] === pos[0] && hover[1] === pos[1]) return
  dispatch({ type: constants.POINT_HOVERED, payload: pos })
}
