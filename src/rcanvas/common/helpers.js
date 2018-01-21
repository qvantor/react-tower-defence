const fSquare = 100 //@todo replace with config param

export const graphToGlobal = pos => {
  return pos * fSquare - fSquare * 0.5
}

export const globalToGraph = pos => Math.floor(pos / fSquare) + 1