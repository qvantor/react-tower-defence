import createGraph from 'ngraph.graph'
import path from 'ngraph.path'

export default class graph {
  constructor (field) {
    this._graph = createGraph()

    if (field)
      for (let i = field.x.from; i <= field.x.to; i++) {
        for (let j = field.y.from; j <= field.y.to; j++) {
          this._graph.addNode(`${i}||${j}`)

          this._graph.hasNode(`${i - 1}||${j}`) && this._graph.addLink(`${i - 1}||${j}`, `${i}||${j}`)
          this._graph.hasNode(`${i + 1}||${j}`) && this._graph.addLink(`${i + 1}||${j}`, `${i}||${j}`)
          this._graph.hasNode(`${i}||${j + 1}`) && this._graph.addLink(`${i}||${j + 1}`, `${i}||${j}`)
          this._graph.hasNode(`${i}||${j - 1}`) && this._graph.addLink(`${i}||${j - 1}`, `${i}||${j}`)
        }
      }
    this._pathFinder = path.aStar(this._graph)
  }

  find = (from, to) => this._pathFinder.find(this.nodeId(from), this.nodeId(to))

  nodeId (node) {
    if (Array.isArray(node)) {
      return this.coordToId(node)
    } else {
      return node
    }
  }

  addNode = (id, data) => this._graph.addNode(id, data)
  addLink = (from, to, data) => this._graph.addLink(from, to, data)

  coordToId = (coord) => `${coord[0]}||${coord[1]}`
  idToCoord = id => id.split('||').map(item => Number(item))

  removeNode (id) {
    this._graph.removeNode(this.nodeId(id))
  }

  clone () {
    const newGraph = new graph()
    this._graph.forEachNode(node => newGraph.addNode(node.id, node.data))
    this._graph.forEachLink(link => newGraph.addLink(link.fromId, link.toId, link.data))
    return newGraph
  }
}