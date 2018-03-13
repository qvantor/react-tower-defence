import * as THREE from 'three'

export const calculateMainProps = (frames, time) => {
  const endFrame = frames.find(item => item.time >= time)
  const startFrameIndex = frames.indexOf(endFrame) - 1

  if (frames[startFrameIndex]) {
    const startFrame = frames[startFrameIndex]
    const prop = proportion(startFrame.time, endFrame.time, time)

    return {
      position: paramsByProp(prop, startFrame.position, endFrame.position),
      rotation: paramsByProp(prop, startFrame.rotation, endFrame.rotation)
    }
  } else {
    const firstFrame = frames[0]
    const lastFrame = frames[frames.length - 1]
    let frame = firstFrame.time >= time ? firstFrame : lastFrame
    return {
      position: frame.position,
      rotation: frame.rotation
    }
  }
}

const paramsByProp = (prop, start, end) => {
  const pointA = new THREE.Vector3(start[0], start[1], start[2])
  const pointB = new THREE.Vector3(end[0], end[1], end[2])
  let dir = pointB.clone().sub(pointA)
  const len = dir.length()
  dir = dir.normalize().multiplyScalar(len * prop)
  const diff = pointA.clone().add(dir)
  return [diff.x, diff.y, diff.z]
}

// TODO replace with ease easeExpo easeBounce
const proportion = (start, end, time) => {
  const deltaTime = time - start
  const diff = end - start
  return deltaTime / diff
}
