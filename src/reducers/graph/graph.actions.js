import * as THREE from 'three'
import * as constants from './graph.constants'
import Graph from 'rcanvas/common/graph'
import { store } from 'store'

const { dispatch, getState } = store

let graph
let Path

export const getEnemyPos = pos => {
  pos = pos >= 1 ? 1 : pos
  const point = Path.getPoint(pos)
  return [
    ((point.x * 100) + Math.sin(pos * 100) * 20) - 50,
    ((point.y * 100) + Math.sin(pos * 100) * 20) - 50,
    Math.cos(pos * 100) * 20 + 30]
}

export const checkWeaponPos = pos => {
  const { graph: { blocks }, game: { weapons } } = getState()
  const collision = weapons.find(item => item.position[0] === pos[0] && item.position[1] === pos[1])
  if (collision) return false

  return blocks.find(item => item.position[0] === pos[0] && item.position[1] === pos[1])
}

export const checkBlockPos = pos => {
  const { graph: { blocks }, levels, progress: { level } } = getState()
  const collision = blocks.find(item => item.position[0] === pos[0] && item.position[1] === pos[1])
  if (collision) return false

  const levelObj = levels.find(item => item.id === level)
  if (levelObj.portal[0] === pos[0] && levelObj.portal[1] === pos[1]) return false
  if (levelObj.gate[0] === pos[0] && levelObj.gate[1] === pos[1]) return false

  const graphClone = graph.clone()
  graphClone.removeNode(pos)
  return graphClone.find(levelObj.portal, levelObj.gate).length > 0
}

// @todo put graph in redux
export const newLevel = ({ field, portal, gate, blocks }) => {
  graph = new Graph(field)
  dispatch({ type: constants.BLOCK_CLEARED })
  blocks.forEach(item => addBlock({ position: item }))
  findPath()
}

const findPath = () => {
  const { levels, progress: { level } } = store.getState()
  const levelObj = levels.find(i => i.id === level)
  const path = graph.find(levelObj.portal, levelObj.gate)
  const calcPath = path.map(item => graph.idToCoord(item.id))
  Path = new THREE.Path(calcPath.map(i => ({ x: i[0], y: i[1] })))
  dispatch({ type: constants.PATH_CALCULATED, payload: calcPath })
}

export const addBlock = block => {
  if (!checkBlockPos(block.position)) return
  graph.removeNode(block.position)
  dispatch({ type: constants.BLOCK_ADDED, payload: block })
  findPath()
}

export const setHover = pos => (dispatch, getState) => {
  const { graph: { hover } } = getState()
  if (hover[0] === pos[0] && hover[1] === pos[1]) return
  dispatch({ type: constants.POINT_HOVERED, payload: pos })
}
