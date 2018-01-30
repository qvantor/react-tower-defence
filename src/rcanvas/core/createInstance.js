import group from './objects/group'
import mesh from './objects/mesh'
import gridHelper from './helpers/gridHelper'
import boxBuffer from './geometry/boxBuffer'
import planeBuffer from './geometry/planeBuffer'
import terrain from './geometry/terrain'
import circleBuffer from './geometry/circleBuffer'
import line from './geometry/line'

export default (type, props) => {
  const types = { group, mesh, boxBuffer, gridHelper, planeBuffer, circleBuffer, line, terrain }

  const instance = new types[type](props)
  instance.setPosition()
  instance.setEvents()
  return instance
}