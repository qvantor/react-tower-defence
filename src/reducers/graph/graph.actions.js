// @todo put graph at redux
import createGraph from 'ngraph.graph'
import path from 'ngraph.path'
import * as constants from './graph.constants'
import * as constPlayer from '../player/player.constants'
import { store } from '../../store'

let g
let pathFinder

export const setHover = pos => (dispatch, getState) => {
  const { graph: { hover }, levels } = getState()
  if (hover[0] === pos[0] && hover[1] === pos[1]) return
  // const { field } = levels.list.find(item => item.id === levels.active)
  // pos[0] = pos[0] > field[0] ? field[0] : pos[0]
  // pos[1] = pos[1] > field[1] ? field[1] : pos[1]
  dispatch({ type: constants.POINT_HOVERED, payload: pos })
}

export const coordToId = c => `${c[0]}||${c[1]}`
export const idToCoord = id => id.split('||').map(item => Number(item))

export function newGraph (field) {
  g = createGraph()
  const coords = {
    x: { from: -(field[0] / 2) + 1, to: field[0] / 2 },
    y: { from: -(field[1] / 2) + 1, to: field[1] / 2 }
  }
  for (let i = coords.x.from; i <= coords.x.to; i++) {
    for (let j = coords.y.from; j <= coords.y.to; j++) {
      g.addNode(`${i}||${j}`)

      g.hasNode(`${i - 1}||${j}`) && g.addLink(`${i - 1}||${j}`, `${i}||${j}`)
      g.hasNode(`${i + 1}||${j}`) && g.addLink(`${i + 1}||${j}`, `${i}||${j}`)
      g.hasNode(`${i}||${j + 1}`) && g.addLink(`${i}||${j + 1}`, `${i}||${j}`)
      g.hasNode(`${i}||${j - 1}`) && g.addLink(`${i}||${j - 1}`, `${i}||${j}`)

      // g.hasNode(`${i - 1}||${j - 1}`) && g.addLink(`${i - 1}||${j - 1}`, `${i}||${j}`)
      // g.hasNode(`${i - 1}||${j + 1}`) && g.addLink(`${i - 1}||${j + 1}`, `${i}||${j}`)
      // g.hasNode(`${i + 1}||${j - 1}`) && g.addLink(`${i + 1}||${j - 1}`, `${i}||${j}`)
      // g.hasNode(`${i + 1}||${j + 1}`) && g.addLink(`${i + 1}||${j + 1}`, `${i}||${j}`)
    }
  }
  pathFinder = path.aStar(g)
  findPath()
}

export function findPath () {
  const { levels, progress: { level } } = store.getState()
  const levelObj = levels.list.find(i => i.id === level)
  const path = pathFinder.find(coordToId(levelObj.portal), coordToId(levelObj.gate))
  store.dispatch({ type: constants.PATH_CALCULATED, payload: path.map(item => idToCoord(item.id)) })
}

export function checkPosition (position) {
  const { graph: { buildings }, levels, progress: { level } } = store.getState()
  const buildingCollision = buildings
    .find(item => item.position[0] === position[0] && item.position[1] === position[1])
  if (buildingCollision) return false

  const levelObj = levels.list.find(item => item.id === level)
  if (levelObj.portal[0] === position[0] && levelObj.portal[1] === position[1]) return false
  if (levelObj.gate[0] === position[0] && levelObj.gate[1] === position[1]) return false
  if (!g) newGraph(levelObj.field) //@todo fix it with initial event
  const tG = graphClone(g)
  tG.removeNode(coordToId(position))
  const tFinder = path.aStar(tG)
  return tFinder.find(coordToId(levelObj.portal), coordToId(levelObj.gate)).length !== 0
}

export const addBuilding = () => (dispatch, getState) => {
  const { graph: { hover }, player: { toBuild } } = getState()
  if (!toBuild) return
  if (!checkPosition(hover)) return

  g.removeNode(coordToId(hover))
  findPath()
  dispatch({ type: constants.BUILDING_ADDED, payload: { position: hover, building: toBuild } })
  dispatch({ type: constPlayer.TO_BUILD_CLEARED })
}

function graphClone (graph) {
  const newGraph = createGraph()
  graph.forEachNode(node => newGraph.addNode(node.id, node.data))
  graph.forEachLink(link => newGraph.addLink(link.fromId, link.toId, link.data))
  return newGraph
}
