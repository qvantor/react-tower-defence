import Immutable from 'seamless-immutable'

export default Immutable([
  {
    id: 1,
    name: 'Beginning 1',
    field: { x: { from: -4, to: 5 }, y: { from: -4, to: 5 } },
    portal: [-4, -4],
    gate: [5, 5],
    gateHP: 1000,
    waves: [1],
    blocksAllowed: 10,
    moneyAllowed: 100,
    blocks: [[0, 0], [0, 1], [0, 2], [0, 3]]
  }, {
    id: 2,
    name: 'Beginning 2',
    field: { x: { from: -9, to: 10 }, y: { from: -9, to: 10 } },
    portal: [-9, -9],
    gate: [10, 10],
    gateHP: 1000,
    waves: [1],
    blocksAllowed: 20,
    moneyAllowed: 100,
    blocks: [[0, 0], [0, 1]]
  }
])
