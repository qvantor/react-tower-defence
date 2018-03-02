import group from './objects/group'
import mesh from './objects/mesh'
import gridHelper from './helpers/gridHelper'
import boxBuffer from './geometry/boxBuffer'
import planeBuffer from './geometry/planeBuffer'
import circleBuffer from './geometry/circleBuffer'
import line from './geometry/line'
import perspectiveCamera from './cameras/perspectiveCamera'
import scene from './objects/scene'

export default (type, props) => {
  const types = {
    group, mesh, boxBuffer, gridHelper, planeBuffer,
    circleBuffer, line, perspectiveCamera, scene
  }

  const instance = new types[type](props)
  instance.setPosition()
  instance.setEvents()
  return instance
}