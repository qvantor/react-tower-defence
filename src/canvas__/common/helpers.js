const fSquare = 100 //@todo replace with config param

export const groundToGlobal = pos => {
  return pos * fSquare - fSquare * 0.5
}

export const globalToGround = pos => {
  return Math.floor(pos / fSquare) + 1
}