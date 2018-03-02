import * as THREE from 'three'

export default class Events {
  constructor (canvas) {
    this.raycaster = new THREE.Raycaster()
    this.mouse = new THREE.Vector2()

    this._prevIntersection = null
    this._intersection = null

    canvas.addEventListener('mousemove', this.onMouseMove, false)
    canvas.addEventListener('click', this.onClick, false)
  }

  onClick = event => {
    if (this._intersection)
      this.sendEvent(this._intersection, this._intersection.object, 'onClick')
  }

  onMouseMove = event => {
    event.preventDefault()
    this.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1
    this.mouse.y = -( event.clientY / window.innerHeight ) * 2 + 1
    this.raycaster.setFromCamera(this.mouse, this.scene.camera)
    const intersects = this.raycaster.intersectObjects(this.scene.root.children, true)
    this._intersection = intersects[0]

    if (!this._intersection) {
      if (this._prevIntersection)
        this.sendEvent(this._intersection, this._prevIntersection.object, 'onMouseOut')
      this._prevIntersection = this._intersection
      return
    }
    if (this.compareEventObjects(this._intersection, this._prevIntersection)) {
      this.sendEvent(this._intersection, this._intersection.object, 'onMouseOver')
      this.sendEvent(this._intersection, this._prevIntersection.object, 'onMouseOut')

      //@todo made normal parent dispatch implementation for Enter/Leave
      this.sendEvent(this._intersection, this._intersection.object, 'onMouseEnter')
      this.sendEvent(this._intersection, this._prevIntersection.object, 'onMouseLeave')

    } else {
      this.sendEvent(this._intersection, this._intersection.object, 'onMouseMove')
    }

    this._prevIntersection = this._intersection
  }

  sendEvent = (intersection, object, event) => {
    if (object.userData[event]) {
      object.userData[event](intersection)
    }
    if (object.parent) {
      this.sendEvent(intersection, object.parent, event)
    }
  }

  isItParent (obj1, obj2) {
    return obj1.children.some(item => {
      if (item === obj2) return true
      return this.isItParent(item, obj2)
    })
  }

  compareEventObjects (obj1, obj2) {
    if (obj1 && obj2 && obj1.object && obj2.object) {
      return obj1.object.uuid !== obj2.object.uuid
    } else {
      return false
    }
  }
}