import * as THREE from 'three'

export default class Component {
  constructor (props) {
    this.props = props
  }

  appendChild (child) {
    this.root.add(child.root)
  }

  shouldComponentUpdate (newProps, oldProps) {
    return newProps !== oldProps //@todo optimize
  }

  _updateProps (newProps, oldProps) {
    this.props = newProps
    if (this.updateProps) this.updateProps(newProps, oldProps)
    this.setPosition()
  }

  setEvents () {
    const eventNames =
      ['onMouseMove',
        'onMouseOver',
        'onMouseOut',
        'onMouseEnter',
        'onMouseLeave',
        'onClick']

    const events = Object.keys(this.props).filter((n) => eventNames.includes(n))
    events.forEach(event => (this.root.userData[event] = this.props[event]))
  }

  setPosition () {
    const { position, rotation } = this.props
    if (position) {
      this.root.position.x = position[0]
      this.root.position.y = position[1]
      this.root.position.z = position[2]
    }
    if (rotation) {
      this.root.rotation.copy(
        new THREE.Euler(
          THREE.Math.degToRad(rotation[0]),
          THREE.Math.degToRad(rotation[1]),
          THREE.Math.degToRad(rotation[2])))
    }
  }
}
